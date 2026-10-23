/**
 * Conservation Geography Course Question Bank & Objectives
 * Edition: 2026 Assignment Series
 * Course Instructor: Prof. Ankur Awadhiya (IIT Kanpur)
 */

const courseData = {
  courseTitle: "Conservation Geography",
  edition: "2026 Assignment Series",
  instructor: "Prof. Ankur Awadhiya",
  institute: "IIT Kanpur",
  weeks: {
    1: {
      weekNumber: 1,
      title: "Week 1: Fundamentals of Movement, Geography & Ecology",
      year: "2026",
      objective: "Understand foundational principles of animal movement, the geographic framework of Alexander von Humboldt, biochemical interactions (allelopathy), habitat degradation mechanisms, and basic ecological principles (Liebig's Law, Conservation root words, Climatology, and Migration factors).",
      questions: [
        {
          id: "w1_q1",
          questionNumber: 1,
          question: "The regular, seasonal movement of animals, often along fixed routes is called",
          options: ["translocation", "migration", "dispersal", "drifting"],
          correctAnswer: 1,
          explanation: "Migration refers to the cyclical, seasonal movement of animal populations from one region to another, frequently along established flyways or routes (e.g., Arctic terns, Siberian cranes). In contrast, 'translocation' is human-mediated movement; 'dispersal' is permanent natal or breeding movement away from parent sites; 'drifting' is passive transport by physical currents."
        },
        {
          id: "w1_q2",
          questionNumber: 2,
          question: "The systematic approach to Geography was developed by:",
          options: ["Alexander von Humboldt", "Karl Ritter", "Rene Descartes", "Eratosthenes"],
          correctAnswer: 0,
          explanation: "Alexander von Humboldt pioneered the Systematic Approach to Geography (studying specific thematic phenomena like climate, vegetation, or landforms across the entire globe). Karl Ritter, his contemporary, introduced the Regional Approach (dividing the world into regions and studying all characteristics within each region)."
        },
        {
          id: "w1_q3",
          questionNumber: 3,
          question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
          options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
          correctAnswer: 3,
          explanation: "Allelopathy is a biological phenomenon in which plants (like teak, eucalyptus, or black walnut) release biochemical compounds (allelochemicals) through their leaves, roots, or litter into the surrounding soil that inhibit the germination and growth of neighboring plant species."
        },
        {
          id: "w1_q4",
          questionNumber: 4,
          question: "A lake still exists physically, but sewage and plastic waste reduce the number of fish it can support. This is best called:",
          options: ["Habitat degradation", "Habitat fragmentation", "Jump dispersal", "Secular dispersal"],
          correctAnswer: 0,
          explanation: "Habitat degradation occurs when the ecological quality and carrying capacity of an intact physical habitat declines due to pollution, contaminants, or invasive stressors, impairing its ability to sustain species. In contrast, habitat fragmentation involves physically breaking continuous habitat into isolated patches."
        },
        {
          id: "w1_q5",
          questionNumber: 5,
          question: "“Science of relationships between organisms and their environments” is the definition of:",
          options: ["conservation", "preservation", "environmentalism", "ecology"],
          correctAnswer: 3,
          explanation: "Ecology (coined by Ernst Haeckel from Greek 'oikos' meaning house and 'logos' meaning study) is defined as the scientific study of the interactions and relationships between living organisms and their biotic/abiotic environments."
        },
        {
          id: "w1_q6",
          questionNumber: 6,
          question: "\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",
          options: ["Liebig’s law of the minimum", "Liebig’s law of the maximum", "Shelford’s law of tolerance", "Shelford’s law of intolerance"],
          correctAnswer: 0,
          explanation: "Liebig's Law of the Minimum (formulated by Carl Sprengel and popularized by Justus von Liebig) states that organismal growth or biological rates are constrained by whichever essential nutrient or factor is present in the lowest availability relative to the organism's minimum demand (the single limiting factor)."
        },
        {
          id: "w1_q7",
          questionNumber: 7,
          question: "In the word root for conservation, con stands for",
          options: ["together", "to keep", "house", "manage"],
          correctAnswer: 0,
          explanation: "The term 'Conservation' originates from Latin word roots: prefix 'con-' means 'together', and the verb root 'servare' means 'to keep or preserve'. Thus, conservation etymologically signifies keeping things together safely."
        },
        {
          id: "w1_q8",
          questionNumber: 8,
          question: "In the word root for conservation, servare stands for",
          options: ["together", "to keep", "house", "manage"],
          correctAnswer: 1,
          explanation: "In Latin, 'servare' means 'to keep', 'to guard', or 'to preserve'. Combined with 'con' (together), conservation literally translates to keeping entities together without degradation."
        },
        {
          id: "w1_q9",
          questionNumber: 9,
          question: "The Geographical discipline of Climatology is most closely related to:",
          options: ["Geology", "Meteorology", "Hydrology", "Pedology"],
          correctAnswer: 1,
          explanation: "Climatology focuses on the systematic study of long-term atmospheric patterns and variations over extensive geographical spaces and temporal scales. Its sister atmospheric science is Meteorology, which studies short-term atmospheric dynamics, weather, and physical air column physics."
        },
        {
          id: "w1_q10",
          questionNumber: 10,
          question: "Good climate is a",
          options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
          correctAnswer: 3,
          explanation: "In migration, dispersal, and settlement geography, a 'pull factor' is any favorable environmental, economic, or physical attribute (such as pleasant climate, abundant resources, or safety) that attracts organisms or human populations toward a given location. Conversely, adverse conditions (drought, conflict) are 'push factors'."
        }
      ]
    },

    2: {
      weekNumber: 2,
      title: "Week 2: Earth Systems, Volcanism, Seismic Waves & Geological Principles",
      year: "2026",
      objective: "Explore volcanic typologies (stratovolcanoes, shield volcanoes, flood basalt provinces like Deccan Traps), mantle magma origins, planetesimals and terrestrial planets, seismic P-wave physics, and core stratigraphical principles (fossil succession, lateral continuity, absolute vs relative dating).",
      questions: [
        {
          id: "w2_q1",
          questionNumber: 1,
          question: "Mount Fuji is an example of",
          options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
          correctAnswer: 1,
          explanation: "Mount Fuji in Japan is a classic Stratovolcano (composite volcano) characterized by a steep, symmetrical conical shape built up by alternating layers (strata) of hardened lava, tephra, pumice, and volcanic ash."
        },
        {
          id: "w2_q2",
          questionNumber: 2,
          question: "The main source of magma is",
          options: ["Crust", "Mantle", "Outer core", "Inner core"],
          correctAnswer: 1,
          explanation: "Most terrestrial magma originates in the Earth's Mantle (specifically the semi-molten asthenosphere / upper mantle), where decompression melting, thermal plumes, and flux melting generate molten rock."
        },
        {
          id: "w2_q3",
          questionNumber: 3,
          question: "Which of these is not a method of absolute dating?",
          options: ["radioisotope dating", "thermoluminescence dating", "inclusion study", "fission track dating"],
          correctAnswer: 2,
          explanation: "Inclusion study is a Relative Dating principle (stating that any rock fragment included within another rock layer must be older than the rock containing it). In contrast, radiometric dating, thermoluminescence, and fission track dating provide numerical/absolute dates in years."
        },
        {
          id: "w2_q4",
          questionNumber: 4,
          question: "What are planetesimals?",
          options: [
            "Fully formed gas giants",
            "Fragments of continental crust",
            "Small bodies formed from gas and dust that can accrete into planets",
            "Layers of volcanic ash within a mountain"
          ],
          correctAnswer: 2,
          explanation: "In solar system cosmogony, planetesimals are solid, kilometre-scale celestial objects that formed in the protoplanetary nebula through gravitational accretion of condensed dust and gas, ultimately coalescing into protoplanets."
        },
        {
          id: "w2_q5",
          questionNumber: 5,
          question: "Hawaiian volcanoes are an example of",
          options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
          correctAnswer: 0,
          explanation: "The Hawaiian volcanoes (such as Mauna Loa and Kilauea) are quintessential Shield Volcanoes. Formed over an oceanic mantle hotspot, they erupt low-viscosity, fluid basaltic lava that flows over great distances, creating broad, gentle-sloping profiles."
        },
        {
          id: "w2_q6",
          questionNumber: 6,
          question: "Which of these is true about P waves?",
          options: [
            "They are longitudinal in nature",
            "They are transverse in nature",
            "They cannot move through gases",
            "They cannot move through liquids"
          ],
          correctAnswer: 0,
          explanation: "Primary (P) waves are compressional / longitudinal seismic body waves where particle displacement is parallel to the direction of wave propagation. Because fluids and gases can transmit compression, P waves travel through solids, liquids, and gases."
        },
        {
          id: "w2_q7",
          questionNumber: 7,
          question: "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as",
          options: [
            "Principle of fossil succession",
            "Principle of original horizontality",
            "Principle of superposition",
            "Principle of cross-cutting relationships"
          ],
          correctAnswer: 0,
          explanation: "The Principle of Fossil (Faunal) Succession (formulated by William Smith) recognizes that fossil organisms succeed one another in a definite, recognizable order through geological strata, allowing rocks across continents to be correlated chronologically."
        },
        {
          id: "w2_q8",
          questionNumber: 8,
          question: "Which set contains only terrestrial planets?",
          options: [
            "Jupiter, Saturn, Uranus, Neptune",
            "Earth, Jupiter, Mars, Saturn",
            "Mercury, Venus, Uranus, Neptune",
            "Mercury, Venus, Earth, Mars"
          ],
          correctAnswer: 3,
          explanation: "The four inner planets closest to the Sun—Mercury, Venus, Earth, and Mars—are terrestrial (rocky) planets, composed predominantly of silicate rocks and metallic iron cores, distinguishing them from outer Jovian gas/ice giants."
        },
        {
          id: "w2_q9",
          questionNumber: 9,
          question: "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as",
          options: [
            "Principle of superposition",
            "Principle of original horizontality",
            "Principle of lateral continuity",
            "Principle of inclusions"
          ],
          correctAnswer: 2,
          explanation: "Nicolas Steno's Principle of Lateral Continuity states that sedimentary layers initially extend laterally in all directions continuously until they thin out, encounter a barrier, or truncate at the margins of their depositional basin."
        },
        {
          id: "w2_q10",
          questionNumber: 10,
          question: "Deccan traps are an example of",
          options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
          correctAnswer: 3,
          explanation: "The Deccan Traps in western-central India represent one of the largest volcanic features on Earth—a Continental Flood Basalt Large Igneous Province (LIP) formed ~66 million years ago by immense fissure eruptions associated with the Reunion hotspot."
        }
      ]
    },

    3: {
      weekNumber: 3,
      title: "Week 3: Mineralogy, Petrology, Weathering & Geomorphology",
      year: "2026",
      objective: "Analyze rock classifications (siliciclastic sedimentary rocks, coarse-grained plutonic igneous rocks), mineral diagnostics (streak, cleavage, amphibole inosilicates), chemical vs physical weathering mechanisms (carbonation, hydrolysis), and exogenic processes.",
      questions: [
        {
          id: "w3_q1",
          questionNumber: 1,
          question: "Mudrock is an example of",
          options: ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"],
          correctAnswer: 0,
          explanation: "Mudrocks (including shale, mudstone, and claystone) are fine-grained siliciclastic sedimentary rocks formed by the accumulation and lithification of silicate-rich silt and clay mineral particles derived from weathered pre-existing rocks."
        },
        {
          id: "w3_q2",
          questionNumber: 2,
          question: "Carbonation is an example of",
          options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
          correctAnswer: 0,
          explanation: "Carbonation is a chemical weathering reaction in which dissolved carbon dioxide in atmospheric rainwater forms weak carbonic acid (H2CO3), which reacts chemically with minerals like calcite (CaCO3) in limestone to form soluble calcium bicarbonate."
        },
        {
          id: "w3_q3",
          questionNumber: 3,
          question: "“green or black coloured inosilicate minerals forming prism or needle-like crystals” is a description of",
          options: ["amphiboles", "feldspar", "mica", "pyroxene"],
          correctAnswer: 0,
          explanation: "Amphiboles are double-chain inosilicate minerals typically dark green, brown, or black in color, exhibiting characteristic elongated prismatic or needle-like (acicular) crystal habits and 56°/124° cleavage angles (e.g., hornblende)."
        },
        {
          id: "w3_q4",
          questionNumber: 4,
          question: "Hydrolysis is an example of",
          options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
          correctAnswer: 0,
          explanation: "Hydrolysis is an important chemical weathering process in which hydrogen (H+) or hydroxyl (OH-) ions in water break chemical bonds in silicate minerals, notably transforming hard feldspars into soft clay minerals like kaolinite."
        },
        {
          id: "w3_q5",
          questionNumber: 5,
          question: "Which of these is an example of exogenic process?",
          options: ["volcanism", "earthquake", "plate tectonics", "deposition"],
          correctAnswer: 3,
          explanation: "Exogenic (external) geomorphic processes are driven by solar energy, atmospheric agents, water, ice, and gravity acting on Earth's surface—such as weathering, erosion, transport, and deposition. Volcanism, earthquakes, and tectonics are endogenic (internal) processes."
        },
        {
          id: "w3_q6",
          questionNumber: 6,
          question: "Which statement best explains why streak is often more useful than surface colour for mineral identification?",
          options: [
            "Streak measures the density of the mineral",
            "Surface colour never changes in minerals",
            "Streak shows the colour of the powdered mineral and may reduce the effect of minor impurities",
            "Streak reveals the age of the mineral"
          ],
          correctAnswer: 2,
          explanation: "Surface coloration in minerals frequently varies due to weathering, oxidation, or microscopic trace impurities (e.g., quartz can be purple, yellow, rose, or white), but the streak (powdered mineral color on an unglazed porcelain plate) remains consistent and diagnostic."
        },
        {
          id: "w3_q7",
          questionNumber: 7,
          question: "Which factor is listed as an independent control over landform development?",
          options: ["Mineral streak", "Crystal habit", "Knife-blade hardness", "Stability of sea level"],
          correctAnswer: 3,
          explanation: "In geomorphology, base-level dynamics and the stability/change of sea level act as an independent overarching control that sets the lower limit for subaerial fluvial erosion and landscape evolution."
        },
        {
          id: "w3_q8",
          questionNumber: 8,
          question: "Sandstone is an example of",
          options: ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"],
          correctAnswer: 0,
          explanation: "Sandstone is a medium-grained siliciclastic sedimentary rock composed of sand-sized mineral grains, rock fragments, or quartz crystals held together by silica, carbonate, or iron oxide cement."
        },
        {
          id: "w3_q9",
          questionNumber: 9,
          question: "“tendency to break in given directions producing relatively plane surfaces” is known as",
          options: ["cleavage", "fracture", "lustre", "streak"],
          correctAnswer: 0,
          explanation: "Mineral Cleavage is the tendency of crystalline minerals to break along preferred planes of structural weakness where atomic chemical bonds are weakest, producing smooth, flat reflective surfaces."
        },
        {
          id: "w3_q10",
          questionNumber: 10,
          question: "Slow cooling of magma results in",
          options: [
            "smooth grained sedimentary rocks",
            "coarse grained sedimentary rocks",
            "smooth grained igneous rocks",
            "coarse grained igneous rocks"
          ],
          correctAnswer: 3,
          explanation: "When molten magma cools slowly deep underground within the crust (plutonic/intrusive environment), mineral crystals have ample time to grow large, yielding coarse-grained (phaneritic) igneous rocks like granite and gabbro."
        }
      ]
    },

    4: {
      weekNumber: 4,
      title: "Week 4: Climatology, Atmospheric Structure & Climate Change Mitigation",
      year: "2026",
      objective: "Differentiate between climate change mitigation vs adaptation (geological carbon sequestration, artificial water holes, seed banking), examine atmospheric vertical layers (stratospheric jet flights, mesospheric noctilucent clouds), isobar reduction to sea level, heat advection, and air mass characteristics (mT, cP).",
      questions: [
        {
          id: "w4_q1",
          questionNumber: 1,
          question: "Carbon sequestration in geological sites is an option for",
          options: ["mitigation", "adaptation", "both of these", "none of these"],
          correctAnswer: 0,
          explanation: "Climate Mitigation refers to interventions that reduce the sources or enhance the sinks of greenhouse gases to reduce the magnitude of global climate change. Injecting and trapping CO2 in deep geological formations is a primary mitigation strategy."
        },
        {
          id: "w4_q2",
          questionNumber: 2,
          question: "To reduce the effect of altitude, isobars are generally drawn after converting pressure values to",
          options: ["surface temperature level", "cloud base level", "tropopause level", "sea level"],
          correctAnswer: 3,
          explanation: "Because atmospheric pressure drops rapidly with elevation (~1 hPa per 8.5 m), raw pressure readings across mountain stations cannot be compared directly. Meteorologists reduce all station pressure measurements to standard mean sea level (MSL) before drawing synoptic isobars."
        },
        {
          id: "w4_q3",
          questionNumber: 3,
          question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
          options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
          correctAnswer: 0,
          explanation: "Climate Adaptation involves adjusting natural or human systems in response to actual or expected climatic stimuli or their effects to moderate harm. Providing tanker-fed artificial waterholes during intensified droughts is a conservation adaptation measure."
        },
        {
          id: "w4_q4",
          questionNumber: 4,
          question: "Surplus seed and sperm banking is an adaptation option to facilitate",
          options: ["resistance to climate changes", "resilience to climate changes", "response to climate changes", "none of these"],
          correctAnswer: 1,
          explanation: "Ex-situ repositories of genetic diversity (seed banks, gamete vaults) enhance ecological and genetic 'resilience'—ensuring that species populations possess the genetic reservoir required to bounce back or be restored following catastrophic climatic disruptions."
        },
        {
          id: "w4_q5",
          questionNumber: 5,
          question: "Flights of jet planes typically occur in",
          options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
          correctAnswer: 1,
          explanation: "Commercial jet aircraft typically cruise in the lower Stratosphere (just above the tropopause, ~10-12 km altitude) because this layer is dynamically stable, devoid of turbulent convective weather clouds, and provides lower aerodynamic drag."
        },
        {
          id: "w4_q6",
          questionNumber: 6,
          question: "Heat movement through horizontal movement of air is called",
          options: ["convection", "radiation", "advection", "conduction"],
          correctAnswer: 2,
          explanation: "Advection is the horizontal transfer of atmospheric properties (such as heat, cold air masses, or moisture) by wind. In contrast, vertical transfer of heat through buoyant fluid movement is called convection."
        },
        {
          id: "w4_q7",
          questionNumber: 7,
          question: "The classical period for taking averages for climate is",
          options: ["10 years", "20 years", "30 years", "40 years"],
          correctAnswer: 2,
          explanation: "The World Meteorological Organization (WMO) formally defines Climate Normals as statistical averages of temperature, precipitation, and other meteorological parameters calculated over a standard 30-year period."
        },
        {
          id: "w4_q8",
          questionNumber: 8,
          question: "Noctilucent clouds are present in which layer?",
          options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
          correctAnswer: 2,
          explanation: "Noctilucent (night-shining) clouds are polar mesospheric clouds located in the Mesosphere at extreme altitudes of ~76 to 85 km. Composed of tiny ice crystals formed on meteoric dust, they shine brightly in deep twilight when lit by the sun from beneath the horizon."
        },
        {
          id: "w4_q9",
          questionNumber: 9,
          question: "Atmospheric pressure is mainly caused by",
          options: [
            "horizontal movement of clouds",
            "the weight of air above the point of measurement",
            "absorption of ultraviolet radiation",
            "seasonal movement of pressure belts"
          ],
          correctAnswer: 1,
          explanation: "Atmospheric pressure at any point on Earth is the hydrostatic force exerted per unit area by the weight of the overhead column of air stretching to the top of the atmosphere."
        },
        {
          id: "w4_q10",
          questionNumber: 10,
          question: "Which of these air masses is generally warm and moist?",
          options: ["cP", "cT", "mP", "mT"],
          correctAnswer: 3,
          explanation: "Maritime Tropical (mT) air masses originate over warm tropical and subtropical oceans, making them characteristically high in temperature and laden with abundant water vapor (warm and moist). cP is continental Polar (cold, dry); cT is continental Tropical (hot, dry); mP is maritime Polar (cool, moist)."
        }
      ]
    },

    5: {
      weekNumber: 5,
      title: "Week 5: Oceanography, Ocean Floor Morphology & Marine Ecosystems",
      year: "2026",
      objective: "Analyze marine relief features (abyssal plains as the largest Earth habitat, mid-oceanic ridges as largest mountain ranges, continental shelf gradients and productivity, submarine canyons), ocean density controls (hydrostatic pressure, salinity, temperature), sublimation, and isohaline curves.",
      questions: [
        {
          id: "w5_q1",
          questionNumber: 1,
          question: "What type of sediment is commonly found over abyssal plains?",
          options: ["Coral fragments and gravel", "Basalt blocks and volcanic ash", "Sand and large pebbles", "Clay and silt"],
          correctAnswer: 3,
          explanation: "Abyssal plains (3,000–6,000 m depth) lie far from coastal landmasses and are blanketed by fine pelagic sediments, predominantly comprised of red clays, fine wind-blown silt, and biogenic microscopic oozes."
        },
        {
          id: "w5_q2",
          questionNumber: 2,
          question: "Which of these is the largest habitat on the Earth?",
          options: ["continental shelf", "continental slope", "guyot", "abyssal plain"],
          correctAnswer: 3,
          explanation: "Abyssal plains cover more than 50% of the Earth's entire surface area, making the deep abyssal benthic realm the single largest ecological habitat on the planet."
        },
        {
          id: "w5_q3",
          questionNumber: 3,
          question: "Which of these are the largest mountain ranges on Earth?",
          options: ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"],
          correctAnswer: 1,
          explanation: "The Mid-Oceanic Ridge system is an interconnected underwater volcanic mountain range stretching across all global oceans for over 65,000 km, making it by far the longest and largest mountain chain on Earth."
        },
        {
          id: "w5_q4",
          questionNumber: 4,
          question: "Which factor helps explain why continental shelves are often highly productive?",
          options: [
            "They are the deepest parts of the ocean floor",
            "They are completely isolated from runoff",
            "They receive both light and nutrients",
            "They lack sediments and organisms"
          ],
          correctAnswer: 2,
          explanation: "Continental shelves are shallow (<200 m depth), allowing sunlight to penetrate the entire photic water column, while simultaneously receiving abundant nutrient runoff from rivers and coastal upwelling, driving tremendous primary productivity."
        },
        {
          id: "w5_q5",
          questionNumber: 5,
          question: "What is tidal range?",
          options: [
            "The horizontal movement of water parallel to the beach",
            "The difference between sea level at high tide and low tide",
            "The speed at which waves approach the coast",
            "The movement of cold water from deep ocean layers"
          ],
          correctAnswer: 1,
          explanation: "Tidal range is the vertical difference in water height between successive high tide (crest) and low tide (trough) at a specific coastal location."
        },
        {
          id: "w5_q6",
          questionNumber: 6,
          question: "Which process converts ice and snow directly into water vapour?",
          options: ["Condensation", "Precipitation", "Snowmelt", "Sublimation"],
          correctAnswer: 3,
          explanation: "Sublimation is the thermodynamic phase transition where a solid (ice, snow) changes directly into a gas (water vapor) without first melting into an intermediate liquid phase."
        },
        {
          id: "w5_q7",
          questionNumber: 7,
          question: "Which group of factors affects the density of ocean water with depth?",
          options: [
            "Runoff, tides and beach slope",
            "Hydrostatic pressure, salinity and temperature",
            "Wind speed, wave height and latitude only",
            "Sediment size, coral growth and river mouths"
          ],
          correctAnswer: 1,
          explanation: "Seawater density is fundamentally controlled by three state variables: Temperature (colder water is denser), Salinity (saltier water is denser), and Hydrostatic Pressure (higher pressure at depth compresses water, increasing density)."
        },
        {
          id: "w5_q8",
          questionNumber: 8,
          question: "“deep valleys, often cutting across continental shelves and slopes” is a description of",
          options: ["oceanic deep / trench", "mid-oceanic ridge", "guyot", "submarine canyon"],
          correctAnswer: 3,
          explanation: "Submarine canyons are steep-sided, V-shaped submarine chasms carved into continental shelves and slopes, frequently excavated by powerful turbidity currents and ancient drowned river mouths."
        },
        {
          id: "w5_q9",
          questionNumber: 9,
          question: "Continental shelf has a gradient of",
          options: ["0-1 degree", "1-2 degree", "2-5 degree", "5-10 degree"],
          correctAnswer: 0,
          explanation: "The continental shelf is an extraordinarily gentle, nearly horizontal marine terrace sloping gently seaward with an average gradient of only 0° to 1° (typically ~0.1° or less than 2 meters per kilometer)."
        },
        {
          id: "w5_q10",
          questionNumber: 10,
          question: "Equal salinity curves are called",
          options: ["isopycnal curves", "isohaline curves", "isotherm curves", "isobuoyant curves"],
          correctAnswer: 1,
          explanation: "Isohalines (from Greek 'halo' meaning salt) are isolines drawn on oceanographic maps or cross-sections connecting points of equal salinity. Isopycnals connect equal density; isotherms connect equal temperature."
        }
      ]
    },

    6: {
      weekNumber: 6,
      title: "Week 6: Indian Drainage Systems, River Morphology & Climatology",
      year: "2026",
      objective: "Evaluate Indian drainage divides (Western Ghats), drainage patterns (dendritic, accordant vs discordant drainage), West-flowing rivers (Narmada and Tapi), rock composition of the Himalayas (sedimentary rocks from Tethys Sea), peninsular river stability in crystalline rock, factors governing Indian climate, and Koeppen polar frost 'F' code.",
      questions: [
        {
          id: "w6_q1",
          questionNumber: 1,
          question: "The Western Ghats act as a water divide because",
          options: [
            "they prevent all rivers from reaching the sea",
            "water on opposite sides flows in different directions",
            "they cause all rivers to become seasonal",
            "they convert rivers into lakes"
          ],
          correctAnswer: 1,
          explanation: "A drainage divide or water divide is an elevated ridge separating adjacent drainage basins. The Western Ghats run along India's western coast, directing rainfall falling on the western slopes steeply into the Arabian Sea and water falling on eastern slopes across the peninsula into the Bay of Bengal."
        },
        {
          id: "w6_q2",
          questionNumber: 2,
          question: "A river network that follows the structure and slope of the land is best described as",
          options: ["discordant", "antecedent", "accordant", "centripetal"],
          correctAnswer: 2,
          explanation: "An Accordant (concordant) drainage system is one whose spatial flow direction, orientation, and pattern are in direct harmony with the underlying geological dip, strike, rock hardness, and regional topographical slope."
        },
        {
          id: "w6_q3",
          questionNumber: 3,
          question: "A tree-like river network in which smaller streams join a main channel is called",
          options: ["trellis drainage", "dendritic drainage", "centripetal drainage", "rectangular drainage"],
          correctAnswer: 1,
          explanation: "Dendritic drainage (from Greek 'dendron' meaning tree) resembles the branching pattern of tree roots or veins in a leaf. It develops over uniform rock types where resistance to erosion is isotropic."
        },
        {
          id: "w6_q4",
          questionNumber: 4,
          question: "A river system that does not match the present structure and relief of the landscape is called",
          options: ["discordant drainage", "dendritic drainage", "radial drainage", "parallel drainage"],
          correctAnswer: 0,
          explanation: "A Discordant drainage system does not conform to the current topography and geologic structure, often because the river incised into younger rock before cutting down into older, discordant structures (superimposed or antecedent drainage)."
        },
        {
          id: "w6_q5",
          questionNumber: 5,
          question: "The Himalayas are primarily comprised of",
          options: ["sedimentary rocks", "igneous rocks", "metamorphic rocks", "b and c"],
          correctAnswer: 0,
          explanation: "The outer and lesser Himalayas, as well as the Tethyan Tibetan zone, are predominantly comprised of folded marine sedimentary rocks uplifted when the Indian tectonic plate collided with the Eurasian plate, compressing sediments of the ancient Tethys Geosyncline."
        },
        {
          id: "w6_q6",
          questionNumber: 6,
          question: "Which pair of rivers is described as flowing westwards into the Arabian Sea?",
          options: ["Ganga and Yamuna", "Mahanadi and Godavari", "Narmada and Tapi", "Krishna and Kaveri"],
          correctAnswer: 2,
          explanation: "Unlike the majority of peninsular rivers that drain eastwards into the Bay of Bengal, Narmada and Tapi flow westwards through fault-bounded tectonic rift (graben) valleys between the Vindhya and Satpura ranges, emptying into the Arabian Sea."
        },
        {
          id: "w6_q7",
          questionNumber: 7,
          question: "Which of these are factors determining the climate of India?",
          options: ["distance from the sea", "altitude", "relief", "all of these"],
          correctAnswer: 3,
          explanation: "India's monsoon climate is governed by multiple geographical controls: continentality (distance from the sea creating maritime vs continental conditions), altitude (cooling on mountains/plateaus), and relief features (orographic rain barriers like the Western Ghats and Himalayas)."
        },
        {
          id: "w6_q8",
          questionNumber: 8,
          question: "Peninsular rivers usually have fixed courses mainly because",
          options: [
            "they flow through newly formed mountains",
            "they carry very high sediment loads",
            "they are controlled only by monsoon winds",
            "their courses are cut into older, harder rocks"
          ],
          correctAnswer: 3,
          explanation: "The Indian Peninsula is an ancient, stable crystalline shield comprising hard Precambrian granites, gneisses, and basalts. Because these rocks resist lateral erosion and rivers have attained graded base-levels, peninsular river courses are fixed and rarely meander."
        },
        {
          id: "w6_q9",
          questionNumber: 9,
          question: "In Koeppen classification, which is polar frost temperature?",
          options: ["c", "d", "F", "T"],
          correctAnswer: 2,
          explanation: "In the Koeppen climate classification, Polar climates are designated by capital 'E'. Within Group E, 'ET' designates Tundra climate (warmest month between 0°C and 10°C), while 'EF' designates Perpetual Frost / Ice Cap climate (all monthly mean temperatures below 0°C)."
        },
        {
          id: "w6_q10",
          questionNumber: 10,
          question: "Which of these are factors determining the climate of India?",
          options: [
            "the latitudinal extent",
            "the Himalayas forming a climatic divide",
            "distribution of land and water",
            "all of these"
          ],
          correctAnswer: 3,
          explanation: "Latitudinal extent (Tropic of Cancer dividing tropical South from subtropical North), the giant Himalayan barrier (blocking cold central Asian katabatic winds and trapping monsoonal rain), and land-sea thermal contrasts all collectively shape India's unique climate."
        }
      ]
    },

    7: {
      weekNumber: 7,
      title: "Week 7: Pedology, Soil Geography, Ecological Succession & Biodiversity Metrics",
      year: "2026",
      objective: "Examine pedological classifications in India (Arid soils in Rajasthan/Gujarat, Bangar vs Khadar alluvial soils), vertical soil profiles and horizons, soil structure vs texture, mechanical cryofracturing vs chemical carbonation weathering, ecological climax theories (catastrophic climax via wildfire), Intermediate Disturbance Hypothesis, and Whittaker's biodiversity scales (alpha, beta, gamma).",
      questions: [
        {
          id: "w7_q1",
          questionNumber: 1,
          question: "Which soils are generally sandy, saline, low in moisture and commonly found in Rajasthan and Gujarat?",
          options: ["Forest soils", "Arid soils", "Peaty soils", "Red and yellow soils"],
          correctAnswer: 1,
          explanation: "Arid (desert) soils are characteristic of arid and semi-arid tracts of western Rajasthan, northern Gujarat, and parts of Haryana. They are sandy in texture, saline in nature, deficient in moisture and humus, and have high calcium kankar accumulation with depth."
        },
        {
          id: "w7_q2",
          questionNumber: 2,
          question: "Cryofracturing is an example of",
          options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
          correctAnswer: 1,
          explanation: "Cryofracturing (frost weathering, freeze-thaw weathering, or gelifraction) is a mechanical/physical weathering process where water enters cracks in rocks, freezes and expands by ~9% in volume, exerting immense tensile pressure that fractures the rock apart."
        },
        {
          id: "w7_q3",
          questionNumber: 3,
          question: "Bangar is a type of",
          options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
          correctAnswer: 1,
          explanation: "In the Great Indian Plains, alluvial soils are categorized into older and newer deposits. Bangar is older alluvium found above the flood plains of rivers, darker in color, richer in clay, and containing calcareous concretions known as 'kankar'. Khadar is newer, fertile flood-plain alluvium."
        },
        {
          id: "w7_q4",
          questionNumber: 4,
          question: "“the diversity that exists within an ecosystem” is",
          options: ["alpha (α) biodiversity", "beta (β) biodiversity", "gamma (γ) biodiversity", "delta (δ) biodiversity"],
          correctAnswer: 0,
          explanation: "Under R.H. Whittaker's ecological hierarchy, Alpha (α) diversity refers to the species diversity and richness found locally within a single uniform community, habitat, or ecosystem."
        },
        {
          id: "w7_q5",
          questionNumber: 5,
          question: "A climax caused by wildfires is an example of",
          options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
          correctAnswer: 3,
          explanation: "A Catastrophic Climax (or fire climax) occurs when recurrent natural catastrophic events—such as periodic wildfires—arrest ecological succession and maintain a vegetation community distinct from the climatic climax (e.g., fire-adapted chaparral or pine savannahs)."
        },
        {
          id: "w7_q6",
          questionNumber: 6,
          question: "For more biodiversity, the level of disturbance should be",
          options: ["less", "intermediate", "more", "none of these"],
          correctAnswer: 1,
          explanation: "Joseph Connell's Intermediate Disturbance Hypothesis (IDH) states that local species diversity is maximized when ecological disturbance is intermediate in frequency and intensity: high disturbance wipes out sensitive species, while low disturbance allows dominant competitors to exclude all others."
        },
        {
          id: "w7_q7",
          questionNumber: 7,
          question: "“the diversity that exists among different geographies” is",
          options: ["alpha (α) biodiversity", "beta (β) biodiversity", "gamma (γ) biodiversity", "delta (δ) biodiversity"],
          correctAnswer: 2,
          explanation: "Gamma (γ) diversity refers to the overall regional biodiversity across an entire large geographical landscape comprising multiple distinct ecological communities. (Beta diversity measures species turnover/differentiation between communities)."
        },
        {
          id: "w7_q8",
          questionNumber: 8,
          question: "Vertical arrangement of soil horizons is called",
          options: ["soil texture", "soil structure", "soil profile", "soil science"],
          correctAnswer: 2,
          explanation: "A Soil Profile is a vertical section or cut through the Earth's crust showing the sequence of distinct genetic layers or soil horizons (typically O, A, E, B, C, and R bedrock)."
        },
        {
          id: "w7_q9",
          questionNumber: 9,
          question: "Carbonation is an example of",
          options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
          correctAnswer: 0,
          explanation: "Carbonation is a chemical weathering reaction where carbonic acid (formed from atmospheric CO2 dissolving in rain) chemically dissolves carbonate minerals like calcium carbonate in limestones."
        },
        {
          id: "w7_q10",
          questionNumber: 10,
          question: "Which soil property refers to the arrangement of solid soil parts and pore spaces between them?",
          options: ["Soil fertility", "Soil texture", "Soil horizon", "Soil structure"],
          correctAnswer: 3,
          explanation: "Soil Structure refers to the physical spatial arrangement of primary soil particles (sand, silt, clay) into secondary clusters, aggregates, or peds, and the geometry of pore spaces between them. Soil texture, by contrast, is the relative percentage of sand, silt, and clay."
        }
      ]
    },

    8: {
      weekNumber: 8,
      title: "Week 8: Biodiversity Conservation, Reserve Selection & Species Roles",
      year: "2026",
      objective: "Master in-situ vs ex-situ conservation methods, inbreeding depression risks in small populations, ecological classifications of species (Keystone, Umbrella, Flagship), species-area relationships, biomagnification processes, reserve siting criteria under medium threat, and the HIPPO threat framework.",
      questions: [
        {
          id: "w8_q1",
          questionNumber: 1,
          question: "Which of the following is listed as an ex-situ conservation method?",
          options: ["Wildlife sanctuary", "National park", "Seed bank", "Biosphere reserve"],
          correctAnswer: 2,
          explanation: "Ex-situ conservation involves the preservation of components of biological diversity outside their natural habitats (e.g., seed banks, botanical gardens, zoos, gene banks, and cryopreservation). In contrast, national parks, wildlife sanctuaries, and biosphere reserves are in-situ conservation sites."
        },
        {
          id: "w8_q2",
          questionNumber: 2,
          question: "Which factor makes smaller populations especially vulnerable due to mating among close relatives?",
          options: ["Habitat displacement", "Eutrophication", "Inbreeding depression", "Carbon storage"],
          correctAnswer: 2,
          explanation: "Inbreeding depression is the reduced biological fitness in a given population as a result of inbreeding (breeding of related individuals). In small, isolated populations, limited mate choice increases homozygosity for deleterious recessive alleles, reducing survival and fertility."
        },
        {
          id: "w8_q3",
          questionNumber: 3,
          question: "Which type of species plays a much greater ecological role than expected from its abundance?",
          options: ["Umbrella species", "Flagship species", "Least concern species", "Keystone species"],
          correctAnswer: 3,
          explanation: "A Keystone Species (first described by Robert Paine) has a disproportionately large impact on its natural environment relative to its abundance or total biomass. Its removal can cause trophic cascades and drastic shifts in ecosystem structure (e.g., sea otters, wolves, fig trees)."
        },
        {
          id: "w8_q4",
          questionNumber: 4,
          question: "A species found only in a single lake is rare mainly because of",
          options: ["high birth rate", "limited geographical range", "high adaptability", "large home range"],
          correctAnswer: 1,
          explanation: "Endemic or micro-endemic species that occupy a single geographic location (like a specific mountain peak or single lake) are classified as rare predominantly due to their severely constrained geographical distribution / restricted range."
        },
        {
          id: "w8_q5",
          questionNumber: 5,
          question: "Which of the following is a disadvantage of ex-situ conservation?",
          options: [
            "It always protects the natural habitat of the species",
            "Captive-bred individuals may find reintroduction difficult",
            "It prevents all inbreeding risks automatically",
            "It can be planned for all species at the same time"
          ],
          correctAnswer: 1,
          explanation: "A major challenge and disadvantage of ex-situ conservation programs (like captive breeding in zoos) is that animals raised in human-managed environments often lose foraging skills, predator avoidance instincts, and natural social structures, making successful reintroduction into the wild difficult and costly."
        },
        {
          id: "w8_q6",
          questionNumber: 6,
          question: "In the species-area relationship, what does “S” represent?",
          options: ["Size of the habitat", "Species richness", "Survival rate", "Stochastic pressure"],
          correctAnswer: 1,
          explanation: "In Alexander von Humboldt's classical species-area equation: S = c * A^z (or log S = log c + z log A), 'S' represents Species Richness (number of distinct species), 'A' represents Area, 'c' is the y-intercept, and 'z' is the regression coefficient/slope."
        },
        {
          id: "w8_q7",
          questionNumber: 7,
          question: "In the Clear Lake example, DDD concentration increased from water to plankton, fish, and piscivorous birds. This illustrates",
          options: ["ecological redundancy", "habitat selection", "biomagnification", "ex-situ management"],
          correctAnswer: 2,
          explanation: "Biomagnification (biological magnification) is the progressive accumulation and increase in concentration of persistent, non-biodegradable toxins (such as pesticide DDD or heavy metals) at successively higher trophic levels of the food chain."
        },
        {
          id: "w8_q8",
          questionNumber: 8,
          question: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
          options: ["very high", "medium", "very low", "non-existent"],
          correctAnswer: 1,
          explanation: "Conservation prioritization theory dictates that areas with 'medium threat' offer the highest cost-effectiveness and conservation return on investment: areas with very high threat may already be degraded beyond recovery or too costly to defend, whereas areas with very low/non-existent threat are already naturally safe."
        },
        {
          id: "w8_q9",
          questionNumber: 9,
          question: "The acronym HIPPO does not include",
          options: ["habitat loss", "invasive species", "pollination", "pollution"],
          correctAnswer: 2,
          explanation: "Coined by biologist E.O. Wilson, HIPPO summarizes the top anthropogenic threats to biodiversity: H - Habitat destruction/loss, I - Invasive species, P - Pollution, P - Population growth (human), O - Overharvesting / Overexploitation. 'Pollination' is a mutualistic ecosystem service, not a threat."
        },
        {
          id: "w8_q10",
          questionNumber: 10,
          question: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
          options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
          correctAnswer: 3,
          explanation: "The Asian/African elephant fulfills multiple conservation species categories simultaneously: an Umbrella species (protecting its massive home range safeguards many other species), a Keystone species (creates waterholes and modifies forest structure through destructive feeding), and a Flagship species (charismatic icon that rallies public emotional and financial support for conservation)."
        }
      ]
    },

    9: {
      weekNumber: 9,
      title: "Week 9: Population Geography, Demographics & Sustainability",
      year: "2026",
      objective: "Analyze demographic formulas (sex ratio, age dependency ratio, working population definitions), Malthusian population dynamics (positive vs preventive checks), population growth curves (logistic S-shaped curve), the Demographic Transition Model, possibilism vs determinism, and pillars of sustainability.",
      questions: [
        {
          id: "w9_q1",
          questionNumber: 1,
          question: "Sex ratio is calculated as:",
          options: [
            "Female population divided by male population multiplied by 1000",
            "Male population divided by female population multiplied by 1000",
            "Total population divided by female population multiplied by 1000",
            "Working population divided by dependent population multiplied by 1000"
          ],
          correctAnswer: 0,
          explanation: "In Indian demographic standards and NPTEL curriculum, Sex Ratio is defined as the number of females per 1000 males in the population: (Total Females / Total Males) * 1000."
        },
        {
          id: "w9_q2",
          questionNumber: 2,
          question: "Which of these is commonly observed during humanising of nature?",
          options: ["environmental determinism", "possibilism", "neodeterminism", "stop and go determinism"],
          correctAnswer: 1,
          explanation: "Possibilism (developed by Paul Vidal de la Blache) posits that the physical environment sets certain limitations, but culture and human agency determine social conditions ('humanising of nature'). Environmental determinism, in contrast, views humans as passively molded by environmental dictates."
        },
        {
          id: "w9_q3",
          questionNumber: 3,
          question: "The age dependency ratio compares dependent population with:",
          options: ["total female population", "working-age population", "urban population", "migrant population"],
          correctAnswer: 1,
          explanation: "The Age Dependency Ratio measures the demographic pressure on the productive workforce. It compares the economically dependent segment of the population (children 0-14 and elderly 65+) against the productive working-age population (15-64 years)."
        },
        {
          id: "w9_q4",
          questionNumber: 4,
          question: "The logistic growth equation curve is",
          options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
          correctAnswer: 2,
          explanation: "Under resource limitation and carrying capacity (K), population growth follows the Verhulst-Pearl logistic equation: dN/dt = rN((K-N)/K), which produces a characteristic sigmoid or S-shaped curve. J-shaped curves represent exponential growth without resource constraints."
        },
        {
          id: "w9_q5",
          questionNumber: 5,
          question: "Which of these is a positive check according to Malthus?",
          options: ["late marriage", "war", "celibacy", "moral restraint"],
          correctAnswer: 1,
          explanation: "Thomas Malthus classified population checks into two groups: Preventive checks (conscious voluntary actions like late marriage, celibacy, moral restraint that lower birth rates) and Positive checks (events that increase mortality like famine, war, disease, and epidemics)."
        },
        {
          id: "w9_q6",
          questionNumber: 6,
          question: "Economic development is often measured in terms of:",
          options: ["age dependency ratio", "total land area", "GDP per capita", "sex ratio"],
          correctAnswer: 2,
          explanation: "Gross Domestic Product (GDP) per capita measures an economy's total economic output divided by its total population, serving as the standard metric for comparative economic performance and average income per head."
        },
        {
          id: "w9_q7",
          questionNumber: 7,
          question: "Which of these is not a pillar of sustainability?",
          options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"],
          correctAnswer: 2,
          explanation: "The internationally recognized 'Triple Bottom Line' or three pillars of sustainability are: 1. Environmental sustainability, 2. Economic sustainability, and 3. Social sustainability. 'Trans-boundary sustainability' is not one of the foundational three pillars."
        },
        {
          id: "w9_q8",
          questionNumber: 8,
          question: "The demographic transition sees a society move from",
          options: [
            "high birth rate, low death rate to low birth rate, high death rate",
            "low birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, high death rate"
          ],
          correctAnswer: 2,
          explanation: "The Demographic Transition Model (DTM) illustrates the structural shift of a society from Stage 1 (high fluctuating birth rates and high death rates in pre-industrial conditions) to Stage 4/5 (low birth rates and low death rates in modern urbanized conditions)."
        },
        {
          id: "w9_q9",
          questionNumber: 9,
          question: "Which of these is a preventive check according to Malthus?",
          options: ["foresight", "vice", "misery", "flood"],
          correctAnswer: 0,
          explanation: "Preventive checks involve foresight and human reason—anticipating the future difficulties of supporting a family and therefore delaying marriage or practicing moral restraint to prevent excess reproduction."
        },
        {
          id: "w9_q10",
          questionNumber: 10,
          question: "Which population group is generally treated as the working population?",
          options: ["0-15 years", "15-64 years", "65 years and above", "0-15 and 65 years and above"],
          correctAnswer: 1,
          explanation: "In global demographic and labor economics standards, the population between ages 15 and 64 is defined as the working-age / economically active population."
        }
      ]
    },

    10: {
      weekNumber: 10,
      title: "Week 10: Resource Geography, Land Use & Atmospheric Emissions",
      year: "2026",
      objective: "Categorize natural resources into the fourfold classification system (Potential, Actual, Reserve, Stock), evaluate tropical deforestation mechanisms (Rondonia road access), analyze agricultural calorie distribution, and identify major sources of atmospheric NOx and Ammonia emissions.",
      questions: [
        {
          id: "w10_q1",
          questionNumber: 1,
          question: "When forests are cleared, carbon may be released not only from removed wood but also from",
          options: ["ocean sediments", "glaciers", "soil organic matter", "desert sand"],
          correctAnswer: 2,
          explanation: "Forest soils store vast reservoirs of carbon. When tree cover is removed, the increased soil temperature, erosion, and microbial decomposition oxidize soil organic matter (SOM), releasing substantial carbon dioxide into the atmosphere."
        },
        {
          id: "w10_q2",
          questionNumber: 2,
          question: "Hydrogen for nuclear fusion comes under the category of",
          options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
          correctAnswer: 3,
          explanation: "Stock resources are materials that have the potential to satisfy human needs, but we do not possess the required technology to utilize them commercially (e.g., extracting massive net positive energy from hydrogen via controlled nuclear fusion)."
        },
        {
          id: "w10_q3",
          questionNumber: 3,
          question: "In the Rondonia rainforest example, road construction mainly contributed to forest loss by",
          options: [
            "increasing rainfall in cleared patches",
            "allowing easier human access into forest areas",
            "preventing agricultural plots from forming",
            "converting cropland back into forest"
          ],
          correctAnswer: 1,
          explanation: "In Rondonia, Brazil (Amazon), the paving of highway BR-364 created access corridors into previously impenetrable primary rainforest, triggering rapid fishbone-pattern deforestation by loggers, ranchers, and land clearers."
        },
        {
          id: "w10_q4",
          questionNumber: 4,
          question: "Oil that has not been drilled can be categorised under",
          options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
          correctAnswer: 0,
          explanation: "Potential resources are those found in a region that are known to exist and could be utilized in the future, but have not yet been extracted or developed (such as petroleum reserves in un-drilled sedimentary basins)."
        },
        {
          id: "w10_q5",
          questionNumber: 5,
          question: "Although cropland uses a smaller share of agricultural land than livestock, it contributes more to",
          options: ["global calorie supply", "mineral extraction", "groundwater recharge", "built-up land expansion"],
          correctAnswer: 0,
          explanation: "While livestock grazing and animal feed occupy roughly 77-80% of global agricultural land, direct human food croplands (cereals, legumes, tubers) occupy only ~20-23% yet supply over 80% of global human caloric and 60% of protein intake."
        },
        {
          id: "w10_q6",
          questionNumber: 6,
          question: "Low concentration ores come in the category of",
          options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
          correctAnswer: 2,
          explanation: "Reserve resources are the surveyed subset of actual resources that cannot be exploited profitably under current market prices and standard technology, but can be extracted in the future when prices rise or refining technologies improve (e.g., low-grade ores)."
        },
        {
          id: "w10_q7",
          questionNumber: 7,
          question: "“those resources that have been surveyed but we lack the technology to use them” is a definition of",
          options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
          correctAnswer: 3,
          explanation: "Stock resources are those surveyed materials in the environment that hold utility, but where humanity currently lacks the appropriate technological capability to harness them."
        },
        {
          id: "w10_q8",
          questionNumber: 8,
          question: "Which of these is the largest source of nitrogen oxides in the atmosphere?",
          options: ["electricity generation", "mobile sources", "industrial processes", "waste disposal"],
          correctAnswer: 1,
          explanation: "Mobile sources (internal combustion engines in cars, trucks, buses, trains, ships, and aircraft) are the single largest contributor to anthropogenic atmospheric nitrogen oxides (NOx) due to high-temperature combustion of air and fuel."
        },
        {
          id: "w10_q9",
          questionNumber: 9,
          question: "Timber from forests that is being harvested can be categorised under",
          options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
          correctAnswer: 1,
          explanation: "Actual resources are resources that have been surveyed, their quantity and quality determined, and are currently actively being extracted and consumed in production (such as actively harvested timber)."
        },
        {
          id: "w10_q10",
          questionNumber: 10,
          question: "Which of these is the largest source of ammonia (NH3) in the atmosphere?",
          options: ["animal manure", "mineral fertiliser", "crops and their decomposition", "human waste"],
          correctAnswer: 0,
          explanation: "Agricultural animal manure management and livestock excreta represent the largest global and regional emission source of atmospheric ammonia (NH3), exceeding synthetic mineral fertilizers and natural biogenic processes."
        }
      ]
    },

    11: {
      weekNumber: 11,
      title: "Week 11: Linear Infrastructure, Trade Theories & Settlement Geography",
      year: "2026",
      objective: "Understand economic concepts of trade advantages (Absolute vs Comparative), linear infrastructure impacts on wildlife (road barrier effects, lighting, culverts, underpasses), dispersal triggers in carnivores, ship track condensation nuclei, and functional classification of towns.",
      questions: [
        {
          id: "w11_q1",
          questionNumber: 1,
          question: "“the ability to produce a good using fewer inputs than another producer” is",
          options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
          correctAnswer: 1,
          explanation: "Absolute Advantage (formulated by Adam Smith in 1776) refers to the capability of an economic producer to produce a greater quantity of a good or service using fewer resources/inputs than another producer."
        },
        {
          id: "w11_q2",
          questionNumber: 2,
          question: "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
          options: ["bridge underpasses", "box culverts", "pipe culverts", "all of these"],
          correctAnswer: 3,
          explanation: "Mitigation engineering for roads, highways, and railways includes diverse crossing structures suited for different taxonomic groups: large bridge underpasses for large mammals, box culverts for mesocarnivores and amphibians, and pipe culverts for small mammals and reptiles."
        },
        {
          id: "w11_q3",
          questionNumber: 3,
          question: "Which mode of connection is described as requiring more money and technology to construct than roads?",
          options: ["Shipping lines", "Railways", "Inland waterways", "Footpaths"],
          correctAnswer: 1,
          explanation: "Railways require significantly higher initial capital expenditure, advanced engineering tolerances, gentler gradient limits, specialized signaling, and precision track-laying technology compared to standard unpaved or paved road infrastructure."
        },
        {
          id: "w11_q4",
          questionNumber: 4,
          question: "Which of these is a factor governing barrier effect of roads?",
          options: ["road edge features", "time of day and year", "species diversity in the surroundings", "all of these"],
          correctAnswer: 3,
          explanation: "The road barrier effect (which prevents animals from crossing) is mediated by physical structural features (fences, medians, embankments), temporal variations (peak traffic times, breeding season migrations), and the community composition in adjacent habitats."
        },
        {
          id: "w11_q5",
          questionNumber: 5,
          question: "Which of these is a factor governing barrier effect of roads?",
          options: ["traffic intensity", "speed of vehicles", "driver sensitivity", "all of these"],
          correctAnswer: 3,
          explanation: "Road barrier permeability and collision risks are directly governed by the volume/intensity of passing vehicles, vehicular speed, and driver alertness/sensitivity to animal movements."
        },
        {
          id: "w11_q6",
          questionNumber: 6,
          question: "“the ability to produce a good at a lower opportunity cost than another producer” is a definition of",
          options: ["real advantage", "monetary advantage", "comparative advantage", "opportunity advantage"],
          correctAnswer: 2,
          explanation: "Comparative Advantage (formulated by David Ricardo in 1817) states that a producer has an advantage over competitors if it can produce a good at a lower opportunity cost (giving up less of other goods to produce it)."
        },
        {
          id: "w11_q7",
          questionNumber: 7,
          question: "Dust released from ships can help reveal ship movement because dust particles act as:",
          options: ["Fuel particles", "Noise absorbers", "Nuclei for condensation", "Ocean-current markers"],
          correctAnswer: 2,
          explanation: "Aerosols and sulfate dust emitted in ship exhaust act as Cloud Condensation Nuclei (CCN). Moisture in maritime air condenses around these particles, forming bright, reflective linear streaks in clouds known as 'ship tracks' visible from satellites."
        },
        {
          id: "w11_q8",
          questionNumber: 8,
          question: "Which of the following is identified as a way in which roads disturb wildlife at night?",
          options: [
            "They reduce wind movement",
            "They increase soil moisture",
            "They create silent zones",
            "They cause light pollution through headlamps"
          ],
          correctAnswer: 3,
          explanation: "Artificial lighting and vehicle headlamps cause intense light pollution across highway corridors at night, blinding nocturnal wildlife, disorienting prey species, and triggering behavioral flight responses away from road margins."
        },
        {
          id: "w11_q9",
          questionNumber: 9,
          question: "Which statement best describes why young male tigers or leopards may need to move away from their natal area?",
          options: [
            "To avoid seasonal flooding",
            "To reduce conflict and avoid inbreeding",
            "To follow shipping routes",
            "To increase road density"
          ],
          correctAnswer: 1,
          explanation: "In solitary apex felids, young subadult males disperse from their mother's natal territory primarily to avoid fatal territorial fights with dominant resident adult males (reducing conflict) and to prevent mating with related females (inbreeding avoidance)."
        },
        {
          id: "w11_q10",
          questionNumber: 10,
          question: "Oxford can best be categorised as",
          options: ["mining town", "garrison town", "educational town", "religious town"],
          correctAnswer: 2,
          explanation: "In urban and settlement geography, Oxford (UK) is the textbook historical example of an Educational Town (University town) whose primary functional economy, urban structure, and identity revolve around colleges and academic institutions."
        }
      ]
    },

    12: {
      weekNumber: 12,
      title: "Week 12: Geoinformatics, Photogrammetry, Disaster Terminology & Environmental Valuation",
      year: "2026",
      objective: "Explore UN-ISDR disaster definitions (Hazard, Vulnerability, Exposure, Disaster), LiDAR physics (time-of-flight distance calculation), photogrammetry branches (metric vs interpretive applications), camera angles (oblique vs vertical), platform categories, GIS components (humanware), and environmental valuation methods.",
      questions: [
        {
          id: "w12_q1",
          questionNumber: 1,
          question: "“The conditions determined by physical, social, economic and environmental factors or processes which increase the susceptibility of an individual, a community, assets or systems to the impacts of hazards.” is a definition for",
          options: ["hazard", "exposure", "vulnerability", "disaster"],
          correctAnswer: 2,
          explanation: "Under the UN-ISDR (United Nations International Strategy for Disaster Reduction) framework, this is the precise definition of 'Vulnerability'—the internal conditions that make communities or assets prone to damage when exposed to a hazardous event."
        },
        {
          id: "w12_q2",
          questionNumber: 2,
          question: "The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.",
          options: ["500 m", "1000 m", "1500 m", "2000 m"],
          correctAnswer: 2,
          explanation: "LiDAR uses the speed of light (c ≈ 3 * 10^8 m/s). The pulse travels to the target and back, so: Distance = (c * t) / 2. Here, d = (3 * 10^8 * 0.00001) / 2 = (3000) / 2 = 1500 meters."
        },
        {
          id: "w12_q3",
          questionNumber: 3,
          question: "Which application of photogrammetry focuses on understanding what is happening in an area rather than measuring quantities?",
          options: ["Metric application", "Radiometric application", "Interpretive application", "Fiducial application"],
          correctAnswer: 2,
          explanation: "Photogrammetry is divided into two primary disciplines: Interpretive Photogrammetry (identifying objects and recognizing features/processes qualitatively) and Metric Photogrammetry (deriving precise spatial coordinates, distances, areas, and volumes quantitatively)."
        },
        {
          id: "w12_q4",
          questionNumber: 4,
          question: "“A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation.” is a definition for",
          options: ["hazard", "exposure", "vulnerability", "disaster"],
          correctAnswer: 0,
          explanation: "This is the official UNDRR definition for a 'Hazard'—a potentially damaging physical event, natural phenomenon, or human activity."
        },
        {
          id: "w12_q5",
          questionNumber: 5,
          question: "IMU stands for",
          options: ["Imperial metering unit", "Inertial metering unit", "Imperial measurement unit", "Inertial measurement unit"],
          correctAnswer: 3,
          explanation: "In airborne/satellite mapping and LiDAR navigation systems, IMU stands for 'Inertial Measurement Unit'. It measures and reports an aircraft's velocity, orientation, roll, pitch, and yaw forces using accelerometers and gyroscopes."
        },
        {
          id: "w12_q6",
          questionNumber: 6,
          question: "Which application of photogrammetry is involved when the area of forest cover or the size of plantation pits is calculated?",
          options: ["Interpretive application", "Metric application", "Oblique application", "Passive application"],
          correctAnswer: 1,
          explanation: "Computing physical geometric measurements such as polygon areas, lengths of perimeters, depths, and volumetric sizes of plantation pits falls strictly under Metric Photogrammetry."
        },
        {
          id: "w12_q7",
          questionNumber: 7,
          question: "Which component is essential in a GIS along with hardware and software?",
          options: ["Mirror system", "Humanware", "Shutter speed", "Focal length"],
          correctAnswer: 1,
          explanation: "A Geographic Information System (GIS) consists of 5 core interconnected components: Hardware, Software, Data, Methods/Procedures, and Humanware (skilled people and analysts who operate, manage, and interpret the system)."
        },
        {
          id: "w12_q8",
          questionNumber: 8,
          question: "Which of these uses revealed willingness to pay?",
          options: ["market price method", "replacement cost method", "damage cost avoided method", "contingent valuation method"],
          correctAnswer: 0,
          explanation: "Revealed preference techniques evaluate observable economic transactions in actual markets (such as the Market Price Method, travel cost method, or hedonic pricing) to reveal individuals' willingness to pay for environmental goods."
        },
        {
          id: "w12_q9",
          questionNumber: 9,
          question: "Which camera-axis orientation is intentionally tilted between vertical and horizontal?",
          options: ["True vertical", "Near vertical", "Oblique", "Fiducial"],
          correctAnswer: 2,
          explanation: "In aerial photography, an Oblique photograph is taken with the optical camera axis intentionally inclined at an angle between the vertical and horizontal planes. (Low oblique does not show the horizon; high oblique captures the apparent horizon)."
        },
        {
          id: "w12_q10",
          questionNumber: 10,
          question: "Which platform normally uses cameras placed at ground level with a horizontal camera orientation?",
          options: ["Space-borne platform", "Air-borne platform", "Ground-borne platform", "Orbital platform"],
          correctAnswer: 2,
          explanation: "Ground-borne (terrestrial) platforms use cameras mounted on tripods, towers, or vehicles at ground level with horizontal or near-horizontal optical axes (terrestrial photogrammetry)."
        }
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = courseData;
}
