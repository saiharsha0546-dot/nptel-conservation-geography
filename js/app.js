/**
 * Conservation Geography Quiz Engine (2026 Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentWeek = 1;
  let currentQuestionIndex = 0;
  let mode = 'study'; // 'study' or 'exam'
  let filter = 'all'; // 'all', 'flagged', 'incorrect'
  
  // User answers & tracking: { [qIndex]: { selectedIndex, isCorrect, answered: bool } }
  let userResponses = {};
  let flaggedQuestions = new Set();

  // Timer for exam mode
  let timerInterval = null;
  let examTimeRemaining = 15 * 60; // 15 mins
  
  // Shuffling State
  let isShuffleEnabled = localStorage.getItem('cg_shuffle') !== 'false'; // default enabled
  let sessionQuestions = [];

  // Helper: Fisher-Yates array shuffle
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // DOM Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const shuffleToggleBtn = document.getElementById('shuffleToggleBtn');
  const shuffleLabel = document.getElementById('shuffleLabel');
  const studyModeBtn = document.getElementById('studyModeBtn');
  const examModeBtn = document.getElementById('examModeBtn');
  const timerBox = document.getElementById('timerBox');
  const timerText = document.getElementById('timerText');
  
  const weekPillsContainer = document.getElementById('weekPillsContainer');
  const weekTitleEl = document.getElementById('weekTitle');
  const weekObjectiveEl = document.getElementById('weekObjective');
  
  const qCounterCurrent = document.getElementById('qCounterCurrent');
  const qCounterTotal = document.getElementById('qCounterTotal');
  const progressBarFill = document.getElementById('progressBarFill');
  
  const questionCard = document.getElementById('questionCard');
  const questionTag = document.getElementById('questionTag');
  const flagBtn = document.getElementById('flagBtn');
  const questionText = document.getElementById('questionText');
  const optionsList = document.getElementById('optionsList');
  
  const explanationCard = document.getElementById('explanationCard');
  const explanationBody = document.getElementById('explanationBody');
  
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const finishBtn = document.getElementById('finishBtn');
  
  const paletteGrid = document.getElementById('paletteGrid');
  const liveScoreText = document.getElementById('liveScoreText');
  const filterChips = document.querySelectorAll('.filter-chip');
  
  // Modal Elements
  const resultModal = document.getElementById('resultModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalScoreValue = document.getElementById('modalScoreValue');
  const modalCorrectCount = document.getElementById('modalCorrectCount');
  const modalWrongCount = document.getElementById('modalWrongCount');
  const modalUnansweredCount = document.getElementById('modalUnansweredCount');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalReviewBtn = document.getElementById('modalReviewBtn');
  const modalRetakeBtn = document.getElementById('modalRetakeBtn');
  const resetQuizBtn = document.getElementById('resetQuizBtn');

  // Prepare session questions with optional option-shuffling and final exam aggregation
  function prepareSessionQuestions() {
    let raw = [];
    if (currentWeek === 'final') {
      // Gather all 120 questions from weeks 1 to 12
      for (let w = 1; w <= 12; w++) {
        if (courseData.weeks[w]?.questions) {
          courseData.weeks[w].questions.forEach(q => {
            raw.push({
              ...q,
              sourceWeek: w,
              sourceWeekTitle: `Week ${w}`
            });
          });
        }
      }
      // Randomly shuffle the entire question pool across all weeks!
      raw = shuffleArray(raw);
    } else {
      raw = courseData.weeks[currentWeek]?.questions || [];
    }

    sessionQuestions = raw.map(q => {
      const mapped = q.options.map((opt, originalIdx) => ({
        text: opt,
        isCorrect: originalIdx === q.correctAnswer
      }));
      const shuffled = isShuffleEnabled ? shuffleArray(mapped) : mapped;
      const correctIdx = shuffled.findIndex(o => o.isCorrect);
      return {
        ...q,
        displayOptions: shuffled.map(o => o.text),
        correctAnswerIndex: correctIdx
      };
    });
  }

  // Load active week questions
  function getQuestions() {
    if (sessionQuestions.length === 0) {
      prepareSessionQuestions();
    }
    return sessionQuestions;
  }

  // Initialize
  function init() {
    initTheme();
    updateShuffleUI();
    renderWeekPills();
    loadWeek(currentWeek);
    setupEventListeners();
  }

  function updateShuffleUI() {
    if (!shuffleToggleBtn || !shuffleLabel) return;
    if (isShuffleEnabled) {
      shuffleToggleBtn.classList.add('active-pill');
      shuffleLabel.textContent = 'Shuffle: ON';
      shuffleToggleBtn.title = 'Options are randomly shuffled for exam practice (Click to turn OFF)';
    } else {
      shuffleToggleBtn.classList.remove('active-pill');
      shuffleLabel.textContent = 'Shuffle: OFF';
      shuffleToggleBtn.title = 'Options appear in original order (Click to turn ON)';
    }
  }

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('cg_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cg_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(t) {
    themeToggleBtn.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // Week Selector Pills
  function renderWeekPills() {
    if (!weekPillsContainer) return;
    weekPillsContainer.innerHTML = '';

    // Final Exam Pill prominently placed first!
    const finalPill = document.createElement('button');
    finalPill.className = `week-pill final-exam-pill ${currentWeek === 'final' ? 'active' : ''}`;
    finalPill.dataset.week = 'final';
    finalPill.innerHTML = `<span>🎓</span> Final Exam (All 120 Qs Random)`;
    finalPill.title = 'Comprehensive mock exam containing all 120 questions from Weeks 1-12 in randomized order';
    finalPill.addEventListener('click', () => {
      if (currentWeek !== 'final') {
        loadWeek('final');
      }
    });
    weekPillsContainer.appendChild(finalPill);

    const weeks = Object.keys(courseData.weeks).map(Number).sort((a, b) => a - b);
    weeks.forEach(wNum => {
      const pill = document.createElement('button');
      pill.className = `week-pill ${wNum === currentWeek ? 'active' : ''}`;
      pill.dataset.week = wNum;
      pill.innerHTML = `<span>🗺️</span> Week ${wNum}`;
      pill.addEventListener('click', () => {
        if (wNum !== currentWeek) {
          loadWeek(wNum);
        }
      });
      weekPillsContainer.appendChild(pill);
    });
  }

  // Load a Week
  function loadWeek(wNum) {
    currentWeek = wNum;
    currentQuestionIndex = 0;
    userResponses = {};
    flaggedQuestions.clear();
    prepareSessionQuestions();
    
    // Update pills
    document.querySelectorAll('.week-pill').forEach((p) => {
      p.classList.toggle('active', p.dataset.week === String(currentWeek));
    });

    if (currentWeek === 'final') {
      if (weekTitleEl) weekTitleEl.textContent = '🎓 Final Grand Exam: Comprehensive Course Mock (All 120 Questions)';
      if (weekObjectiveEl) weekObjectiveEl.textContent = 'A full-length, 120-question randomized grand mock exam covering all 12 weeks of Conservation Geography (2026). Test your holistic mastery of physical geography, climatology, oceanography, soils, ecology, population demographics, linear infrastructure, and geoinformatics.';
    } else {
      const wData = courseData.weeks[currentWeek];
      if (wData) {
        if (weekTitleEl) weekTitleEl.textContent = wData.title;
        if (weekObjectiveEl) weekObjectiveEl.textContent = wData.objective;
      }
    }
    
    if (mode === 'exam') {
      resetExamTimer();
    }
    
    renderPalette();
    renderQuestion();
  }

  // Switch Quiz Mode
  function setMode(newMode) {
    if (mode === newMode) return;
    mode = newMode;
    if (studyModeBtn) studyModeBtn.classList.toggle('active', mode === 'study');
    if (examModeBtn) examModeBtn.classList.toggle('active', mode === 'exam');

    if (mode === 'exam') {
      if (timerBox) timerBox.classList.add('visible');
      finishBtn.style.display = 'inline-flex';
      startExamTimer();
    } else {
      if (timerBox) timerBox.classList.remove('visible');
      finishBtn.style.display = 'none';
      stopExamTimer();
    }

    renderPalette();
    renderQuestion();
  }

  // Timer
  function startExamTimer() {
    stopExamTimer();
    // 120 minutes for Final Exam (120 questions), 15 minutes for weekly tests (10 questions)
    examTimeRemaining = currentWeek === 'final' ? 120 * 60 : 15 * 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      examTimeRemaining--;
      if (examTimeRemaining <= 0) {
        stopExamTimer();
        submitExam();
      } else {
        updateTimerDisplay();
      }
    }, 1000);
  }

  function stopExamTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function resetExamTimer() {
    stopExamTimer();
    if (mode === 'exam') {
      startExamTimer();
    }
  }

  function updateTimerDisplay() {
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Render Current Question
  function renderQuestion() {
    const questions = getQuestions();
    if (questions.length === 0) return;

    const q = questions[currentQuestionIndex];
    qCounterCurrent.textContent = currentQuestionIndex + 1;
    qCounterTotal.textContent = `/ ${questions.length}`;

    const pct = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBarFill.style.width = `${pct}%`;

    if (questionTag) {
      if (q.sourceWeek) {
        questionTag.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length} • Week ${q.sourceWeek}`;
      } else {
        questionTag.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
      }
    }
    questionText.textContent = q.question;

    // Flag state
    const isFlagged = flaggedQuestions.has(currentQuestionIndex);
    flagBtn.classList.toggle('active', isFlagged);
    flagBtn.innerHTML = `<span>${isFlagged ? '★' : '☆'}</span> ${isFlagged ? 'Flagged' : 'Flag'}`;

    // Render Options
    optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const currentResp = userResponses[currentQuestionIndex];
    const opts = q.displayOptions || q.options;
    const correctIdx = q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : q.correctAnswer;

    opts.forEach((optText, optIdx) => {
      const item = document.createElement('div');
      item.className = 'option-item';

      const isSelected = currentResp && currentResp.selectedIndex === optIdx;
      const isCorrect = optIdx === correctIdx;

      if (mode === 'study') {
        if (currentResp && currentResp.answered) {
          if (isSelected) {
            item.classList.add(isCorrect ? 'correct-revealed' : 'wrong-revealed');
          } else if (isCorrect) {
            item.classList.add('correct-revealed');
          }
        }
      } else {
        // Exam mode
        if (isSelected) {
          item.classList.add('selected-neutral');
        }
      }

      item.innerHTML = `
        <div class="option-letter">${letters[optIdx]}</div>
        <div class="option-text">${optText}</div>
        <div class="option-feedback-icon">${isCorrect ? '✓' : '✕'}</div>
      `;

      item.addEventListener('click', () => handleOptionClick(optIdx));
      optionsList.appendChild(item);
    });

    // Explanation in Study Mode
    if (mode === 'study' && currentResp && currentResp.answered) {
      explanationCard.classList.add('visible');
      explanationBody.textContent = q.explanation;
    } else {
      explanationCard.classList.remove('visible');
    }

    // Button States
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;

    if (nextBtn) {
      if (isLastQuestion) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'inline-flex';
        nextBtn.disabled = false;
      }
    }

    if (finishBtn) {
      if (mode === 'exam' || isLastQuestion) {
        finishBtn.style.display = 'inline-flex';
        finishBtn.textContent = mode === 'exam' ? 'Submit Exam ✓' : 'Submit & View Score ✓';
      } else {
        finishBtn.style.display = 'none';
      }
    }

    updateScoreStats();
    renderPalette();
  }

  // Handle Option Select
  function handleOptionClick(optIdx) {
    const questions = getQuestions();
    const q = questions[currentQuestionIndex];
    const correctIdx = q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : q.correctAnswer;
    const isCorrect = optIdx === correctIdx;

    if (mode === 'study') {
      userResponses[currentQuestionIndex] = {
        selectedIndex: optIdx,
        isCorrect: isCorrect,
        answered: true
      };
    } else {
      userResponses[currentQuestionIndex] = {
        selectedIndex: optIdx,
        isCorrect: isCorrect,
        answered: true
      };
    }

    renderQuestion();
  }

  // Render Question Navigator Palette
  function renderPalette() {
    const questions = getQuestions();
    paletteGrid.innerHTML = '';

    questions.forEach((q, idx) => {
      const resp = userResponses[idx];
      const isFlagged = flaggedQuestions.has(idx);

      if (filter === 'flagged' && !isFlagged) return;
      if (filter === 'incorrect' && (!resp || resp.isCorrect)) return;
      if (filter === 'unanswered' && resp && resp.answered) return;

      const pItem = document.createElement('div');
      pItem.className = 'palette-item';
      pItem.textContent = idx + 1;

      if (idx === currentQuestionIndex) {
        pItem.classList.add('current');
      }

      if (isFlagged) {
        pItem.classList.add('flagged');
      }

      if (resp && resp.answered) {
        if (mode === 'study') {
          pItem.classList.add(resp.isCorrect ? 'correct' : 'wrong');
        } else {
          pItem.classList.add('answered');
        }
      }

      pItem.addEventListener('click', () => {
        currentQuestionIndex = idx;
        renderQuestion();
      });

      paletteGrid.appendChild(pItem);
    });
  }

  // Update Live Score Stats
  function updateScoreStats() {
    const questions = getQuestions();
    let correct = 0;
    let answered = 0;

    Object.values(userResponses).forEach(r => {
      if (r.answered) {
        answered++;
        if (r.isCorrect) correct++;
      }
    });

    if (mode === 'study') {
      liveScoreText.textContent = `${correct} / ${questions.length} Correct`;
    } else {
      liveScoreText.textContent = `${answered} / ${questions.length} Answered`;
    }
  }

  // Submit Exam / Quiz
  function submitExam() {
    stopExamTimer();
    const questions = getQuestions();
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach((q, idx) => {
      const resp = userResponses[idx];
      if (!resp || !resp.answered) {
        unanswered++;
      } else if (resp.isCorrect) {
        correct++;
      } else {
        wrong++;
      }
    });

    const scorePct = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    if (modalTitle) {
      modalTitle.textContent = currentWeek === 'final' ? '🏆 Final Exam Completed!' : (mode === 'exam' ? 'Exam Completed!' : 'Quiz Summary');
    }
    if (modalSubtitle) {
      if (currentWeek === 'final') {
        modalSubtitle.textContent = `Here is your grand score breakdown across all ${questions.length} questions (Weeks 1-12):`;
      } else {
        modalSubtitle.textContent = `Here is your score breakdown for Week ${currentWeek} (${courseData.weeks[currentWeek]?.year || '2026'}):`;
      }
    }
    if (modalScoreValue) modalScoreValue.textContent = `${scorePct}%`;
    if (modalCorrectCount) modalCorrectCount.textContent = correct;
    if (modalWrongCount) modalWrongCount.textContent = wrong;
    if (modalUnansweredCount) modalUnansweredCount.textContent = unanswered;

    if (resultModal) {
      resultModal.classList.add('active');
    }
  }

  // Event Listeners
  function setupEventListeners() {
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

    if (shuffleToggleBtn) {
      shuffleToggleBtn.addEventListener('click', () => {
        isShuffleEnabled = !isShuffleEnabled;
        localStorage.setItem('cg_shuffle', isShuffleEnabled);
        updateShuffleUI();
        prepareSessionQuestions();
        userResponses = {};
        renderPalette();
        renderQuestion();
      });
    }

    if (studyModeBtn) studyModeBtn.addEventListener('click', () => setMode('study'));
    if (examModeBtn) examModeBtn.addEventListener('click', () => setMode('exam'));

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          renderQuestion();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const questions = getQuestions();
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          renderQuestion();
        }
      });
    }

    if (flagBtn) {
      flagBtn.addEventListener('click', () => {
        if (flaggedQuestions.has(currentQuestionIndex)) {
          flaggedQuestions.delete(currentQuestionIndex);
        } else {
          flaggedQuestions.add(currentQuestionIndex);
        }
        renderQuestion();
      });
    }

    if (finishBtn) {
      finishBtn.addEventListener('click', submitExam);
    }

    // Modal Actions
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        if (resultModal) resultModal.classList.remove('active');
      });
    }

    if (resultModal) {
      resultModal.addEventListener('click', (e) => {
        if (e.target === resultModal) {
          resultModal.classList.remove('active');
        }
      });
    }

    if (modalReviewBtn) {
      modalReviewBtn.addEventListener('click', () => {
        if (resultModal) resultModal.classList.remove('active');
        setMode('study');
      });
    }

    if (modalRetakeBtn) {
      modalRetakeBtn.addEventListener('click', () => {
        if (resultModal) resultModal.classList.remove('active');
        loadWeek(currentWeek);
        if (mode === 'exam') startExamTimer();
      });
    }

    if (resetQuizBtn) {
      resetQuizBtn.addEventListener('click', () => {
        const msg = currentWeek === 'final' 
          ? 'Reset your answers and reshuffle the Final Exam?' 
          : 'Reset your answers for this week?';
        if (confirm(msg)) {
          loadWeek(currentWeek);
        }
      });
    }

    // Filter Chips
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        filter = chip.dataset.filter;
        renderPalette();
      });
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (resultModal && resultModal.classList.contains('active')) {
        if (e.key === 'Escape') {
          resultModal.classList.remove('active');
        }
        return;
      }
      if (e.key === 'ArrowRight' && nextBtn && !nextBtn.disabled && nextBtn.style.display !== 'none') {
        nextBtn.click();
      } else if (e.key === 'ArrowLeft' && prevBtn && !prevBtn.disabled) {
        prevBtn.click();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        handleOptionClick(parseInt(e.key) - 1);
      } else if (e.key.toLowerCase() === 'f' && flagBtn) {
        flagBtn.click();
      } else if (e.key === 'Enter' && finishBtn && finishBtn.style.display !== 'none') {
        finishBtn.click();
      }
    });
  }

  // Start app
  init();
});
