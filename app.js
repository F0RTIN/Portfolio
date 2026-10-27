/**
 * Portfolio Alexandre Fortin — Creative Technologist
 * Bilingual Engine & Monochromatic Apple-like Architecture
 */

const portfolioData = {
  projects: [
    {
      id: "davincibot",
      featured: true,
      hasDemo: false,
      image: "assets/images/robot-cdr.png",
      gallery: [
        "assets/images/robot-cdr.png"
      ],
      tags: ["Robotique Autonome", "C++ Embarqué", "Capteurs & Actionneurs", "Coupe de France de Robotique"],
      title: {
        en: "DaVinciBot — Autonomous Competition Robot",
        fr: "DaVinciBot — Robot Autonome de Compétition"
      },
      category: {
        en: "Autonomous Robotics & Embedded Systems",
        fr: "Robotique Autonome & Systèmes Embarqués"
      },
      resume: {
        en: "Design, mechanics, electronics, and embedded firmware of an autonomous competition robot within a 10-student team for the French Robotics Cup. Autonomous pathfinding, obstacle avoidance, and multi-axis actuators.",
        fr: "Conception mécanique, électronique et programmation embarquée d'un robot autonome au sein d'une équipe de 10 étudiants pour la Coupe de France de Robotique. Navigation autonome, évitement d'obstacles et actionneurs multi-axes."
      },
      details: {
        en: {
          tagline: "Autonomous navigation, obstacle avoidance, and round-the-clock competition engineering.",
          overview: "Designed for the French Robotics Cup (Coupe de France de Robotique) as part of the DaVinciBot association team. Over months of intensive prototyping culminating in a 3-day competition, our 10-student team engineered and fielded a fully autonomous robot capable of navigating, avoiding opponents, and executing precise physical operations on the match arena in under 100 seconds.",
          features: [
            "Autonomous navigation stack with real-time wheel odometry and dynamic obstacle avoidance algorithms.",
            "Multi-axis motorized actuators (servos and steppers) coordinated for field element manipulation.",
            "Custom microcontroller integration, sensor power distribution, motor driver boards, and onboard wiring harness.",
            "High-intensity team sprint: mechanical CAD, PCB soldering, firmware debugging, and live tactical adjustments."
          ],
          challenges: [
            "Ensuring odometric position repeatability despite varying arena carpet friction and opponent collisions.",
            "Optimizing embedded power distribution and signal routing between high-draw motors and sensitive logic microcontrollers."
          ],
          technologies: ["Autonomous Robotics", "Embedded C++", "Microcontrollers", "Sensors & Actuators", "CAD Mechanics", "Team Leadership"]
        },
        fr: {
          tagline: "Navigation autonome, évitement d'obstacles et débogage intensif sous pression de compétition.",
          overview: "Conçu pour la Coupe de France de Robotique au sein de l'association DaVinciBot. Aboutissement de mois de prototypage et de trois jours de compétition intense, notre équipe de 10 étudiants a créé un robot entièrement autonome capable de se repérer, d'éviter les adversaires et d'accomplir des actions physiques de haute précision en 100 secondes.",
          features: [
            "Navigation autonome avec odométrie de précision et algorithmes d'évitement dynamique d'obstacles.",
            "Coordination d'actionneurs motorisés (servos et moteurs pas-à-pas) pour la manipulation rapide des éléments de jeu.",
            "Intégration électronique complète : microcontrôleurs, cartes de puissance moteurs, faisceaux de câblage et capteurs.",
            "Travail d'équipe intensif : mécanique, soudure électronique, programmation bas niveau et ajustements continus jour et nuit."
          ],
          challenges: [
            "Garantir la répétabilité du positionnement odométrique malgré les frottements du tapis de jeu et les perturbations externes.",
            "Isoler électriquement la logique de contrôle face aux pics d'appel de courant des moteurs de propulsion."
          ],
          technologies: ["Robotique Autonome", "C++ Embarqué", "Microcontrôleurs", "Capteurs & Actionneurs", "Conception Mécanique", "Esprit d'Équipe"]
        }
      }
    },
    {
      id: "boa",
      featured: true,
      hasDemo: false,
      image: "assets/images/boa-transverse.png",
      gallery: [
        "assets/images/boa-transverse.png",
        "assets/images/boa-exploded-1.png",
        "assets/images/boa-exploded-2.png"
      ],
      tags: ["Rétro-ingénierie", "CAO Onshape", "Impression 3D", "Conception Mécanique"],
      title: {
        en: "Custom BOA Dial Lacing Mechanism",
        fr: "Mécanisme de Serrage inspiré du système BOA — Rétro-ingénierie"
      },
      category: {
        en: "Mechanism Design & Reverse Engineering",
        fr: "Conception Mécanique & Rétro-ingénierie"
      },
      resume: {
        en: "Complete physical teardown, CAD reconstruction in Onshape, and functional 3D printing of a micro-adjustable BOA dial closure without manufacturer blueprints. Engineered to instrument medical smart compression garment research.",
        fr: "Démontage physique, rétro-ingénierie CAO sur Onshape et impression 3D fonctionnelle d'un système de serrage micrométrique à molette type BOA sans plans d'origine. Développé pour instrumenter un prototype de contention médicale."
      },
      details: {
        en: {
          tagline: "Reverse engineering a high-precision ratcheting cable spool mechanism for medical research.",
          overview: "To validate a compression stocking prototype requiring uniform, repeatable lacing pressure, Alexandre reverse-engineered the internal ratchet and quick-release spool mechanism of a commercial BOA dial. With zero technical blueprints available, he conducted microscopic physical measurements, parametric CAD modeling on Onshape, and rapid 3D printing iterations.",
          features: [
            "Full parametric assembly in Onshape with detailed cross-sectional and exploded views.",
            "Re-engineered internal directional ratchet teeth, free-wheeling pull-to-release clutch, and micro-cable routing spool.",
            "Instrumented onto medical compression stockings to enable repeatable scientific testing of gradient pressure distribution."
          ],
          challenges: [
            "Tolerancing small-scale 3D printed mechanical teeth to ensure positive locking and smooth dial rotation.",
            "Replicating the axial pull-to-release free-wheeling clutch mechanism without metal stamping equipment."
          ],
          technologies: ["Onshape CAD", "Reverse Engineering", "Precision 3D Printing", "Mechanism Design", "Medical Prototyping"]
        },
        fr: {
          tagline: "Rétro-ingénierie d'un mécanisme micrométrique d'enroulement à cliquet pour la recherche médicale.",
          overview: "Afin d'instrumenter un prototype de recherche de bas de contention médicale à pression homogène, Alexandre a rétro-conçu l'intégralité du mécanisme interne à cliquet et débrayage rapide d'un système BOA. Sans plans constructeur, il a procédé par démontage physique, métrologie, modélisation paramétrique CAO sur Onshape et impressions 3D successives.",
          features: [
            "Modélisation paramétrique complète sous Onshape avec coupes transversales et vues éclatées détaillées.",
            "Conception des dentures de cliquet unidirectionnel, du mécanisme de débrayage axial et du tambour d'enroulement de câble.",
            "Intégration sur prototype médical pour tester la répétabilité et l'homogénéité du serrage en vue d'un article de recherche."
          ],
          challenges: [
            "Ajustement des tolérances d'impression 3D sur des dentures micrométriques pour assurer un verrouillage franc.",
            "Reproduction du système de débrayage axial push/pull pour libérer instantanément le câble sous tension."
          ],
          technologies: ["CAO Onshape", "Rétro-ingénierie", "Impression 3D de Précision", "Mécanique du Solide", "Prototypage Médical"]
        }
      }
    },
    {
      id: "meuble",
      featured: true,
      hasDemo: false,
      image: "assets/images/meuble-front.png",
      gallery: [
        "assets/images/meuble-front.png",
        "assets/images/meuble-back.png"
      ],
      tags: ["Jumeau Numérique", "CAO Paramétrique", "Design Mobilier", "Fabrication Bois"],
      title: {
        en: "Custom Parametric Furniture — Digital Twin",
        fr: "Mobilier sur Mesure — Jumeau Numérique"
      },
      category: {
        en: "Parametric Design & Digital Fabrication",
        fr: "Design Paramétrique & Fabrication Numérique"
      },
      resume: {
        en: "Custom furniture modeled as an exact digital twin to satisfy tight apartment constraints of weight, structural rigidity, and raw material optimization. Complete 3D CAD modeling of timber panels, joints, and brackets.",
        fr: "Mobilier sur mesure conçu en jumeau numérique pour répondre à des contraintes strictes d'espace, de charge et d'optimisation de matière. Modélisation 3D intégrale des panneaux de bois, assemblages et équerres."
      },
      details: {
        en: {
          tagline: "Digital twin parametric modeling meeting architectural and fabrication constraints.",
          overview: "Tailored for an apartment with strict spatial and load-bearing constraints, this project applied industrial CAD methods to bespoke furniture design. Every timber panel, bracket, and connection was digitally twinned to maximize raw stock cutting yield and ensure structural stability prior to physical machining.",
          features: [
            "Parametric 3D CAD modeling with precise tolerances and digital twin validation.",
            "Weight and load distribution optimization with custom structural bracket reinforcements.",
            "Precision wood cutting and artisanal assembly resulting in a perfectly fitted functional piece."
          ],
          challenges: [
            "Minimizing material waste while maintaining shelf load capacity under distributed weight.",
            "Compensating for wall and floor dimensional non-planarities in an existing residential room."
          ],
          technologies: ["Parametric 3D CAD", "Digital Twin", "Structural Optimization", "Digital Fabrication"]
        },
        fr: {
          tagline: "Modélisation paramétrique en jumeau numérique sous contraintes d'espace et d'ébénisterie.",
          overview: "Conçu sur mesure pour un appartement aux dimensions atypiques et contraintes de poids, ce projet applique les méthodes de l'ingénierie industrielle au mobilier. Chaque panneau de bois, équerre et point d'ancrage a été fidèlement modélisé en jumeau numérique afin de minimiser les chutes de bois et maximiser la rigidité avant l'usinage.",
          features: [
            "Modélisation paramétrique 3D avec vérification des jeux et tolérances d'assemblage.",
            "Optimisation du rapport résistance mécanique / poids propre grâce à des équerres spécifiques.",
            "Découpe de précision et assemblage pour une intégration millimétrique dans l'espace de vie."
          ],
          challenges: [
            "Optimisation des plans de découpe des panneaux de bois pour minimiser les chutes brutes.",
            "Absorption des défauts d'aplomb des murs existants grâce à des fixations réglables intégrées."
          ],
          technologies: ["CAO Paramétrique 3D", "Jumeau Numérique", "Optimisation Structurelle", "Fabrication Bois"]
        }
      }
    },
    {
      id: "petale",
      featured: true,
      hasDemo: false,
      externalUrl: "https://www.kickstarter.com/projects/petale/quickstarter-petale?ref=nav_search&category_id=28",
      image: "assets/images/kickstarter-hero.webp",
      gallery: [
        "assets/images/kickstarter-mockup-3.png",
        "assets/images/kickstarter-mockup-1.png"
      ],
      tags: ["Design Produit", "Kickstarter", "Découpe Laser", "Branding", "CAO"],
      title: {
        en: "Pétale — Modular Envelope Lampshade",
        fr: "Pétale — Abat-jour Modulaire en Enveloppe"
      },
      category: {
        en: "Industrial Design & Crowdfunding",
        fr: "Design Industriel & Financement Participatif"
      },
      resume: {
        en: "Conception, rapid prototyping, and Kickstarter campaign for a flat-pack modular lampshade delivered in a standard envelope. Full product lifecycle led in a 4-person team: CAD, laser cutting, and visual branding.",
        fr: "Conception, prototypage rapide et campagne Kickstarter pour un abat-jour modulaire expédiable par simple enveloppe. Cycle produit complet en équipe de 4 : CAO, découpe laser et identité de marque."
      },
      details: {
        en: {
          tagline: "An affordable, modular, and aesthetic lampshade engineered for envelope postal shipping.",
          overview: "Pétale is a modular lampshade made of 100% laser-cut acrylic (17 x 15 x 15 cm deployed) designed to adapt to any lighting need: chandelier, desk lamp, upright, upside down, or wall-mounted. Designed according to the rigorous Quickstarter manifesto (< 6 months, < $50 reward, zero paid ads).",
          features: [
            "5 frosted translucent orange petals with 15 precision interlocking joint pieces.",
            "Universal socket compatibility: engineered around global standard fixtures to eliminate customer costs.",
            "Flat-pack design: shippable anywhere in a flat cardboard envelope with a custom laser-cut assembly wrench.",
            "Art Direction & Branding: Complete creation of logo, icons, video filming & editing, mockup graphics, and Kickstarter campaign."
          ],
          challenges: [
            "Iterating latching socket mechanisms via laser cutting to achieve rigid hold without adhesives.",
            "Balancing aesthetic translucency with mechanical fatigue resistance under bulb heat."
          ],
          technologies: ["Laser Cutting", "Onshape CAD", "Product Industrialization", "Industrial relation handling", "Graphic Design", "Crowdfunding"]
        },
        fr: {
          tagline: "Un luminaire modulaire, abordable et esthétique conçu pour être expédié par courrier postal.",
          overview: "Pétale est un abat-jour modulaire en PMMA acrylique 100% découpé au laser (17 x 15 x 15 cm déployé) conçu pour s'adapter à toutes les configurations lumineuses : suspension, lampe de chevet, posée ou applique murale. Réalisé dans le respect du manifeste Quickstarter (< 6 mois, < 50$, zéro publicité payante).",
          features: [
            "5 pétales orange givrés translucides et 15 pièces de jonction modulaires transparentes.",
            "Compatibilité universelle : optimisé pour douilles standards afin de simplifier l'installation.",
            "Design ultra-plat (flat-pack) expédiable sous simple enveloppe avec clé de montage dédiée sur mesure.",
            "Direction Artistique & Image de marque : Conception complète du logo, charte graphique, tournage vidéo, mockups et page de campagne Kickstarter."
          ],
          challenges: [
            "Itération rapide sur la découpe laser pour trouver le jeu d'encliquetage parfait sans colle ni vis superflue.",
            "Harmonisation de la diffusion lumineuse avec la résistance mécanique des pétales soumis à la chaleur."
          ],
          technologies: ["Découpe Laser", "CAO Onshape", "Industrialisation Produit", "Gestion de relation avec des industriels", "Design Graphique", "Kickstarter"]
        }
      }
    },
    {
      id: "crt",
      featured: true,
      hasDemo: false,
      image: "assets/images/crt-tv.png",
      gallery: [
        "assets/images/crt-tv.png",
        "assets/images/crt-detail.png",
        "assets/images/crt-pcb.png",
        "assets/images/crt-final.png"
      ],
      tags: ["Physical Computing", "Circuit Bending", "Électronique Analogique"],
      title: {
        en: "CRT Analog Matter — Circuit Bending",
        fr: "CRT Matière Analogique — Circuit Bending"
      },
      category: {
        en: "Tangible UI & Physical Computing",
        fr: "Interface Tangible & Électronique Analogique"
      },
      resume: {
        en: "Hardware modification of a Cathode Ray Tube display. Direct potentiometer taps into deflection yokes and RGB electron guns transform the screen into a tactile visual instrument.",
        fr: "Modification matérielle d'un moniteur à tube cathodique. Potentiomètres soudés directement sur les bobines de déviation et canons RGB pour en faire un instrument tactile."
      },
      details: {
        en: {
          tagline: "Tangible phenomena, embodied affordances, and physical circuit bending of analog electrons.",
          overview: "This project explores physical circuit modifications of a vintage CRT display. Unlike digital representations that discretize light into pixel grids, analog CRT phosphor excitation is continuous and physical. By soldering potentiometers directly into the deflection yoke and RGB drive circuits, visitors manipulate raw electromagnetic fields with their hands.",
          features: [
            "RGB Channel Control: Replaced fixed cathode resistors with potentiometers and safety resistors for dynamic color balance sculpting.",
            "Vertical Deflection Compression: Direct amplitude modulation of vertical flyback circuits to stretch or compress raster lines.",
            "Audio-Reactive Deflection: Experimental prototype injecting filtered audio signals into horizontal sweep circuits."
          ],
          challenges: [
            "High-voltage safety management: Discharging anode voltages (> 15-25 kV) safely before circuit probing.",
            "Mitigating electromagnetic interference and maintaining raster sync stability during manual potentiometer tuning."
          ],
          technologies: ["Analog Circuit Bending", "High-Voltage Electronics", "Oscilloscopes & Signal Analysis", "Tangible Interaction", "Academic Research"]
        },
        fr: {
          tagline: "Phénomènes tangibles, affordance incarnée et manipulation directe du faisceau d'électrons.",
          overview: "Ce projet explore la modification physique des circuits d'un écran CRT vintage. Loin du numérique qui quantifie le monde en pixels, le tube cathodique excite les phosphores par de véritables électrons. En reliant des potentiomètres aux bobines de déviation et canons RGB, l'utilisateur modèle directement les champs électromagnétiques.",
          features: [
            "Contrôle des canaux RGB : Remplacement des résistances d'origine par des potentiomètres pour moduler la saturation en continu.",
            "Compression verticale du faisceau : Contrôle direct de l'amplitude de balayage vertical pour étirer ou compresser l'image.",
            "Déviation audio-réactive : Prototype expérimental injectant un signal sonore filtré dans la déviation horizontale."
          ],
          challenges: [
            "Sécurité haute tension : Décharge rigoureuse des tensions d'anode (> 15-25 kV) avant toute manipulation.",
            "Stabilité de synchronisation et blindage contre les interférences électromagnétiques lors des manipulations manuelles."
          ],
          technologies: ["Circuit Bending Analogique", "Électronique Haute Tension", "Oscilloscopes & Mesures", "Interaction Tangible", "Recherche Académique"]
        }
      }
    },
    {
      id: "mycelium",
      featured: true,
      hasDemo: false,
      image: "assets/images/mold-fold-brik.png",
      gallery: [
        "assets/images/mold-fold-brik.png",
        "assets/images/mold-fold-top.png",
        "assets/images/mold-fold-exploded.png",
      ],
      tags: ["Bio-Design", "Mycélium", "Impression 3D", "Interface Tactile", "Science des Matériaux"],
      title: {
        en: "Mycelium Braille — Bio-Material Tactile Interface",
        fr: "Braille en Mycélium — Interface Tactile Vivante"
      },
      category: {
        en: "Bio-Design & Tangible Materials",
        fr: "Bio-Design & Matériaux Vivants"
      },
      resume: {
        en: "Research investigating whether living fungal mycelium composites can grow legible braille plates (10x10cm) in custom 3D-printed dome molds. Tested dome fidelity and sensory recognition by sight and touch.",
        fr: "Recherche sur la culture de plaques en composite de mycélium vivant (10x10cm) générant des caractères braille via des moules 3D. Évaluation de la fidélité des dômes et de la lisibilité tactile et visuelle."
      },
      details: {
        en: {
          tagline: "Can living fungal matter serve as a tactile data reading surface?",
          overview: "Conducted at the Institute for Future Technologies (IFT), this scientific project investigates growing 10x10 cm plates of mycelium composite inside custom 3D-printed negative dome cavities. As mycelium colonizes the substrate, it fills the domes to form raised braille characters evaluated across three dome diameters (8mm, 10mm, and 14mm).",
          features: [
            "Parametric mold engineering: 3D CAD design of flasks with interchangeable dome lids defining half-ellipsoid geometries.",
            "Substrate & Growth kinetics: Optimization of lignocellulosic substrate, moisture content, and hyphal density skin development.",
            "Double-blind sensory evaluation: Controlled testing with participants identifying braille letters by sight and touch."
          ],
          challenges: [
            "Preventing dome degradation and moisture trapping during demolding and thermal inactivation.",
            "Balancing dome radius and spacing for tactile finger discrimination with fibrous bio-material texture."
          ],
          technologies: ["Mycelium Bio-fabrication", "3D Printing & Parametric CAD", "Sensory Testing", "Bio-Design"]
        },
        fr: {
          tagline: "Un matériau vivant peut-il constituer une surface de lecture et de données tactile ?",
          overview: "Mené au sein de l'Institute for Future Technologies (IFT), ce projet de recherche étudie la culture de plaques de composite de mycélium de 10x10 cm dans des moules imprimés en 3D à cavités d'ellipsoïdes. En se développant, le mycélium comble les cavités pour former des lettres en braille testées sur 3 diamètres : 8mm, 10mm et 14mm.",
          features: [
            "Conception des moules : Modélisation 3D paramétrique de moules avec couvercles interchangeables par taille de point.",
            "Cinétique de croissance : Maîtrise du substrat lignocellulosique, de l'humidité et de la formation de peau mycélienne dense.",
            "Protocole sensoriel en double aveugle : Évaluation de la reconnaissance des lettres par les participants à la vue puis au toucher."
          ],
          challenges: [
            "Éviter l'effritement des dômes lors du démoulage et de l'étuvage thermique.",
            "Assurer une distinction tactile nette malgré la texture fibreuse naturelle du champignon."
          ],
          technologies: ["Bio-fabrication Mycélium", "Impression 3D & CAO", "Tests Sensoriels", "Bio-Design"]
        }
      }
    },
    {
      id: "mnist",
      featured: false,
      hasDemo: true,
      demoUrl: "https://f0rtin.github.io/Web_App_Mnist/",
      githubUrl: "https://github.com/f0rtin/Web_App_Mnist",
      image: "assets/images/Mnist-illustration.png",
      gallery: [
      ],
      tags: ["Expérimentation Web", "Tinygrad", "WebGPU", "Canvas"],
      title: {
        en: "WebGPU MNIST Digit Classifier",
        fr: "Classificateur MNIST WebGPU"
      },
      category: {
        en: "Web Exploration & Lightweight AI",
        fr: "Projet d'Exploration Web & IA Légère"
      },
      resume: {
        en: "Small exploratory web experiment: handwritten digit recognition running directly in the browser via WebGPU compute kernels. Built for fast iteration and technical curiosity.",
        fr: "Petite expérimentation web d'exploration : reconnaissance de chiffres manuscrits exécutée directement dans le navigateur via WebGPU. Réalisé par curiosité technique et prototypage rapide."
      },
      details: {
        en: {
          tagline: "An exploratory side project testing in-browser compute shaders.",
          overview: "A lightweight interactive prototype created to experiment with running neural models directly client-side. Using Tinygrad for minimal weight export and WebGPU for in-browser execution, it allows drawing digits on an HTML5 canvas and observing inference without server roundtrips.",
          features: [
            "In-browser execution with HTML5 drawing canvas.",
            "Lightweight CNN and MLP weight import via WebGPU shaders.",
            "Fun technical demonstration accessible directly online."
          ],
          challenges: [
            "Basic weight tensor loading and memory alignment for WebGPU buffers."
          ],
          technologies: ["WebGPU", "Tinygrad", "JavaScript", "HTML5 Canvas", "Python"]
        },
        fr: {
          tagline: "Projet d'exploration technique testant les compute shaders dans le navigateur.",
          overview: "Un prototype interactif léger réalisé pour tester l'inférence neuronale directement côté client. En s'appuyant sur Tinygrad et l'API WebGPU, il permet de tracer des chiffres sur un canvas HTML5 et d'observer le résultat instantanément sans appel serveur.",
          features: [
            "Exécution locale dans le navigateur avec tracé sur canvas interactif.",
            "Importation de petits modèles CNN / MLP sous shaders WebGPU.",
            "Démonstration technique accessible directement en ligne."
          ],
          challenges: [
            "Gestion des buffers de données et alignement mémoire pour l'API WebGPU."
          ],
          technologies: ["WebGPU", "Tinygrad", "JavaScript", "Canvas HTML5", "Python"]
        }
      }
    },
    {
      id: "webgpu-3d",
      featured: false,
      hasDemo: true,
      demoUrl: "https://f0rtin.github.io/WebGPU-3D-Scene/",
      githubUrl: "https://github.com/f0rtin/WebGPU-3D-Scene",
      image: "assets/images/webgpu-3d.png",
      gallery: [
        "assets/images/webgpu-3d.png"
      ],
      tags: ["Rendu 3D", "Raymarching", "WebGPU", "Shaders"],
      title: {
        en: "WebGPU 3D Procedural Engine",
        fr: "Moteur 3D Procédural WebGPU"
      },
      category: {
        en: "Real-Time Computer Graphics Exploration",
        fr: "Rendu 3D Expérimental & Shaders"
      },
      resume: {
        en: "Procedural 3D scene raymarching experiment in WebGPU. Dynamic geometric primitives, camera orbit controls, and real-time lighting test.",
        fr: "Expérimentation de rendu 3D procédural en raymarching via WebGPU. Primitives géométriques dynamiques, caméra orbitale et gestion de la lumière."
      },
      details: {
        en: {
          tagline: "A graphics exploration testing procedural raymarching in WGSL.",
          overview: "An experimental 3D scene builder running in modern browsers on WebGPU. Instead of triangular meshes, this test renders shapes procedurally through Signed Distance Fields (SDFs) and raymarching.",
          features: [
            "Interactive primitive generation: Spheres, Cubes, Tori with dynamic controls.",
            "Real-time property modulation via HUD: coordinates, scale, and diffuse colors.",
            "Orbital camera controller with smooth mouse tracking."
          ],
          challenges: [
            "Structuring raymarching loops within WebGPU fragment shaders."
          ],
          technologies: ["WebGPU", "WGSL Shaders", "Raymarching", "JavaScript"]
        },
        fr: {
          tagline: "Expérimentation graphique de raymarching procédural sous WGSL.",
          overview: "Une petite application de rendu 3D dans le navigateur propulsée par WebGPU. Au lieu de maillages polygonaux classiques, ce test génère les formes géométriques via des champs de distance signée (SDF) et du raymarching.",
          features: [
            "Ajout de primitives : Sphères, Cubes, Tores avec panneau de réglages.",
            "Édition en direct : position (X, Y, Z), échelle et couleurs diffuses.",
            "Caméra orbitale interactive à la souris."
          ],
          challenges: [
            "Structuration de la boucle de raymarching dans le shader de fragment."
          ],
          technologies: ["WebGPU", "Shaders WGSL", "Raymarching", "JavaScript"]
        }
      }
    }
  ],

  experiences: [
    {
      id: "ifollow",
      company: "iFollow",
      role: {
        en: "R&D Robotics Engineer Intern — AMR & LiDAR Calibration",
        fr: "Stagiaire Ingénieur R&D — Robotique AMR & Calibration LiDAR"
      },
      period: {
        en: "2023 · 1.5 Months",
        fr: "2023 · 1,5 Mois"
      },
      badge: {
        en: "Robotics R&D & LiDAR Calibration",
        fr: "R&D Robotique & Calibration LiDAR"
      },
      summary: {
        en: "Led an autonomous R&D project in an Autonomous Mobile Robots (AMR) startup to solve industrial LiDAR calibration. Using computer vision, mechanical gimbals and establishing protocols to ensure perfect leveling of the LiDAR sensors.",
        fr: "Projet de R&D mené en totale autonomie au sein d'une start-up de robots mobiles autonomes (AMR) pour automatiser le nivelage des LiDARs. Utilisation de la vision par ordinateur, de cardans mécaniques et établissement de protocoles pour garantir le parfait nivellement des capteurs LiDARs."
      },
      bullets: {
        en: [
          "Autonomously managed an applied R&D sprint adhering to rigorous research engineering methodologies.",
          "Addressed the industrial challenge of factory-line LiDAR sensor leveling repeatability across diverse mobile robot chassis.",
          "Developed an automated computer vision solution using OpenCV: analyzed laser sweep patterns to automatically validate and servo sensor alignment.",
          "Implemented mechanical gimbals to ensure perfect leveling of the LiDAR sensors.",
          "Formulated scientific test protocols, conducted state-of-the-art benchmarks, interfaced with technical suppliers, and delivered comprehensive engineering reports."
        ],
        fr: [
          "Conduite en pleine autonomie d'un projet de R&D selon les méthodes et exigences de l'ingénierie de recherche.",
          "Résolution de la problématique industrielle du nivelage rapide et répétable des capteurs LiDARs sur différents châssis de robots en sortie d'usine.",
          "Développement d'une méthode de vision par ordinateur sous OpenCV : analyse du balayage laser pour valider et asservir automatiquement le nivelage.",
          "Mise en place de cardans mécaniques pour le montage des LiDARs afin d'assurer un nivellement parfait.",
          "Définition de protocoles d'essais, veille technologique, relations avec fournisseurs spécialisés et rédaction des rapports de synthèse."
        ]
      },
      skills: ["OpenCV", "Python", "Autonomous Mobile Robots (AMR)", "LiDAR Sensors", "Mechanical Gimbals", "Test Protocols", "R&D Engineering"]
    },
    {
      id: "super-u",
      company: "Super U Fontenay-le-Fleury",
      role: {
        en: "Reception Host & Checkout Team Manager",
        fr: "Hôte d'accueil & Manager de Caisse"
      },
      period: {
        en: "2025 · 5 Months",
        fr: "2025 · 5 Mois"
      },
      badge: {
        en: "Operational Leadership & Management",
        fr: "Leadership Opérationnel & Management"
      },
      summary: {
        en: "Frontline brand representative managing daily store customer relations, cashier team coordination, crisis de-escalation, and commercial vehicle fleet rentals.",
        fr: "Représentation de l'enseigne, management quotidien de la ligne de caisse, médiation clients, standard téléphonique et gestion de flotte utilitaire."
      },
      bullets: {
        en: [
          "Supervised and supported the checkout floor team, coordinating cashier allocations during peak traffic and ensuring seamless customer flow.",
          "Acted as primary brand ambassador at the central reception desk: handled conflict resolution, customer inquiries, and high-frequency telephone communications.",
          "Managed the commercial utility vehicle rental division end-to-end: client contracts, vehicle handovers, inspections, and logistics.",
          "Cultivated decisive interpersonal leadership, composure under stress, operational problem-solving, and empathetic communication."
        ],
        fr: [
          "Management opérationnel de la ligne de caisse : régulation des flux clients, renforts d'urgence et soutien continu aux équipes d'encaissement.",
          "Représentation quotidienne de l'enseigne à l'accueil : gestion des situations conflictuelles, réclamations et gestion du standard téléphonique du magasin.",
          "Pilotage complet de l'activité de location de véhicules utilitaires : établissement des contrats, états des lieux de départ/retour et logistique associée.",
          "Acquisition d'un sens aigu du leadership humain, de la réactivité sous tension, de l'organisation et de l'écoute active."
        ]
      },
      skills: ["Management d'Équipe", "Relation Client", "Résolution de Crise", "Logistique Opérationnelle", "Gestion de Flotte"]
    },
    {
      id: "arianegroup",
      company: "ArianeGroup",
      role: {
        en: "Electrical Engineering & Industrial Computing Intern",
        fr: "Stagiaire Ingénieur Génie Électrique & Informatique Industrielle"
      },
      period: {
        en: "2026 · 4 Months",
        fr: "2026 · 4 Mois"
      },
      badge: {
        en: "Rocket Engine Test Benches · ATEX Standards",
        fr: "Zone d'Essai Moteurs de Fusée · Normes ATEX"
      },
      summary: {
        en: "Integrated the rocket engine test bench facility team to conceive and deploy an autonomous computer-aided engineering software tool compliant with explosive ATEX industrial standards.",
        fr: "Intégration de la zone d'essai des moteurs de fusée pour concevoir et déployer en autonomie un logiciel métier d'aide à la conception conforme aux normes ATEX."
      },
      bullets: {
        en: [
          "Embedded within an engineering unit designing critical complex systems (electronics, PLCs, industrial power supplies, networks) on rocket propulsion test stands.",
          "Collaborated directly with senior systems architects to define functional requirements, technical specifications, and safety directives.",
          "Conceived and programmed from scratch a specialized computer-aided design software tool strictly adhering to ATEX (explosive atmosphere) safety directives.",
          "Designed ergonomic Human-Machine Interfaces (HMI/GUI), engineered secure data storage and sharing, and delivered a standalone executable deployed service-wide."
        ],
        fr: [
          "Immersion au sein d'un service d'ingénieurs concepteurs de systèmes complexes (électronique, automates programmables, puissance, réseaux) sur bancs d'essai moteurs.",
          "Définition du cahier des charges et expression des besoins fonctionnels en collaboration directe avec les ingénieurs seniors du site.",
          "Conception et programmation intégrale d'un logiciel métier d'aide à la conception rigoureusement conforme aux normes ATEX (atmosphères explosives).",
          "Développement complet de l'interface homme-machine (IHM), gestion sécurisée du stockage et du partage de données, et livraison d'un exécutable déployé dans le service."
        ]
      },
      skills: ["Normes ATEX", "Architecture Logicielle", "Conception IHM / GUI", "Systèmes Complexes", "Informatique Industrielle", "Bancs d'Essais Moteurs"]
    }
  ],

  translations: {
    en: {
      navRole: "Creative Technologist",
      navStatus: "Available for R&D Stage",
      navProjects: "Projects",
      navExperience: "Experience",
      navAbout: "About",
      navContact: "Contact",
      navDownloadCv: "Download CV",

      heroBadge: "PORTFOLIO · 2026",
      heroName: "ALEXANDRE FORTIN",
      heroSubtitle: "Creative Technologist",
      heroBio1: "Moving rapidly from an idea to a working prototype — mechanical, electronic, and software — with the rigor of the scientific method. I design concrete, tangible systems from a given idea or problem.",

      credEsilv: "ESILV — Master of Science in Engineering",
      credIft: "IFT — Creative Technologist Master",
      credMsc: "MSc — Research Methods & Scientific Rigor",
      heroSkillsTitle: "Core Competencies:",

      heroBtnProjects: "Explore Projects",
      heroBtnExperience: "View Experience",
      heroScrollPrompt: "Scroll to explore",

      tabProjects: "PROJECTS",
      tabExperience: "EXPERIENCE",

      projectsHeading: "Selected Projects",
      projectsSubheading: "Tangible prototypes, autonomous robotics, reverse engineering, bio-materials, and web experiments.",
      btnDemo: "DEMO",
      btnDetails: "Photos & Details",
      btnViewLiveDemo: "Open Live Demo",
      btnKickstarter: "View on Kickstarter",
      btnClose: "Close",
      photosBadge: "photos",

      experienceHeading: "Professional Journey",
      experienceSubheading: "Robotics R&D, operational team leadership, and rocket engine test systems.",

      contactHeading: "Contact",
      contactSubheading: "Seeking an end-of-studies internship: R&D Engineer, Product Design, Rapid Prototyping.",
      contactEmailBtn: "Copy Email",
      contactEmailCopied: "Email copied to clipboard!",

      modalTechStack: "Technologies & Tools",
      modalHighlights: "Engineering Highlights",
      modalGallery: "Visual Gallery",
      modalDemoNotice: "Interactive live demo running directly in your browser.",
      liveDemoTitle: "Interactive Demo"
    },
    fr: {
      navRole: "Creative Technologist",
      navStatus: "Disponible Stage R&D",
      navProjects: "Projets",
      navExperience: "Expériences",
      navAbout: "À Propos",
      navContact: "Contact",
      navDownloadCv: "Télécharger CV",

      heroBadge: "PORTFOLIO · 2026",
      heroName: "ALEXANDRE FORTIN",
      heroSubtitle: "Creative Technologist",
      heroBio1: "Passer rapidement d'une idée à un prototype fonctionnel — mécanique, électronique et logiciel avec l'exigence de la démarche scientifique. Je conçois des systèmes concrets et tangibles à partir d'idée ou problème posés.",

      credEsilv: "ESILV — Diplôme d'Ingénieur",
      credIft: "IFT — Mastère Creative Technologist",
      heroSkillsTitle: "Compétences Clés :",

      heroBtnProjects: "Explorer les Projets",
      heroBtnExperience: "Voir les Expériences",
      heroScrollPrompt: "Défilez pour découvrir",

      tabProjects: "PROJETS",
      tabExperience: "EXPÉRIENCE",

      projectsHeading: "Projets Réalisés",
      projectsSubheading: "Prototypes physiques concrets, robotique autonome, rétro-ingénierie mécanique, bio-matériaux et expérimentations interactives.",
      btnDemo: "DÉMO",
      btnDetails: "Photos & Détails",
      btnViewLiveDemo: "Ouvrir la Démo",
      btnKickstarter: "Voir sur Kickstarter",
      btnClose: "Fermer",
      photosBadge: "photos",

      experienceHeading: "Parcours Professionnel",
      experienceSubheading: "R&D en robotique, management opérationnel et bancs d'essais pour la propulsion aérospatiale.",

      contactHeading: "Contact",
      contactSubheading: "À la recherche d'un stage de fin d'études : Ingénieur R&D, Conception Produit, Prototypage.",
      contactEmailBtn: "Copier l'Email",
      contactEmailCopied: "Email copié dans le presse-papier !",

      modalTechStack: "Technologies & Outils",
      modalHighlights: "Points d'Ingénierie Clés",
      modalGallery: "Galerie Visuelle",
      modalDemoNotice: "Démo interactive exécutée directement dans le navigateur.",
      liveDemoTitle: "Démonstration Interactive"
    }
  }
};

class PortfolioApp {
  constructor() {
    this.currentLang = this.detectInitialLanguage();
    this.activeTab = "projects";
    this.currentModalProject = null;
    this.activeGalleryIndex = 0;

    this.init();
  }

  detectInitialLanguage() {
    const saved = localStorage.getItem("alexandre_portfolio_lang");
    if (saved === "fr" || saved === "en") return saved;
    const browserLang = (navigator.language || navigator.userLanguage || "fr").toLowerCase();
    return browserLang.startsWith("en") ? "en" : "fr";
  }

  init() {
    this.bindEvents();
    this.applyLanguage(this.currentLang);
    this.renderProjects();
    this.renderExperiences();
    this.setupScrollSpy();
  }

  bindEvents() {
    // Language toggler
    const langBtnEn = document.getElementById("lang-en");
    const langBtnFr = document.getElementById("lang-fr");
    if (langBtnEn) langBtnEn.addEventListener("click", () => this.setLanguage("en"));
    if (langBtnFr) langBtnFr.addEventListener("click", () => this.setLanguage("fr"));

    // Navbar links navigation
    const navLinkAbout = document.getElementById("nav-link-about");
    const navLinkProjects = document.getElementById("nav-link-projects");
    const navLinkExperience = document.getElementById("nav-link-experience");
    const navLinkContact = document.getElementById("nav-link-contact");
    const navBrandLogo = document.getElementById("nav-brand-logo");

    if (navLinkAbout) {
      navLinkAbout.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (navBrandLogo) {
      navBrandLogo.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (navLinkProjects) {
      navLinkProjects.addEventListener("click", (e) => {
        e.preventDefault();
        this.setActiveTab("projects");
        this.scrollToChoiceSection();
      });
    }

    if (navLinkExperience) {
      navLinkExperience.addEventListener("click", (e) => {
        e.preventDefault();
        this.setActiveTab("experience");
        this.scrollToChoiceSection();
      });
    }

    if (navLinkContact) {
      navLinkContact.addEventListener("click", (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const navbar = document.querySelector(".apple-navbar");
          const navHeight = navbar ? navbar.offsetHeight : 64;
          const targetY = contactSection.offsetTop - navHeight;
          window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
        }
      });
    }

    // Segmented tab selector
    const tabProjectsBtn = document.getElementById("tab-btn-projects");
    const tabExperienceBtn = document.getElementById("tab-btn-experience");
    if (tabProjectsBtn) {
      tabProjectsBtn.addEventListener("click", () => {
        this.setActiveTab("projects");
        this.scrollToChoiceSection();
      });
    }
    if (tabExperienceBtn) {
      tabExperienceBtn.addEventListener("click", () => {
        this.setActiveTab("experience");
        this.scrollToChoiceSection();
      });
    }

    // Hero buttons
    const heroBtnProjects = document.getElementById("hero-btn-projects");
    const heroBtnExperience = document.getElementById("hero-btn-experience");
    if (heroBtnProjects) {
      heroBtnProjects.addEventListener("click", (e) => {
        e.preventDefault();
        this.setActiveTab("projects");
        this.scrollToChoiceSection();
      });
    }
    if (heroBtnExperience) {
      heroBtnExperience.addEventListener("click", (e) => {
        e.preventDefault();
        this.setActiveTab("experience");
        this.scrollToChoiceSection();
      });
    }

    // Modal close bindings
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", () => this.closeProjectModal());
    if (modalBackdrop) modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) this.closeProjectModal();
    });

    // Gallery arrows
    const prevBtn = document.getElementById("gallery-prev-btn");
    const nextBtn = document.getElementById("gallery-next-btn");
    if (prevBtn) prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.cycleGallery(-1);
    });
    if (nextBtn) nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.cycleGallery(1);
    });

    // Live Demo Modal
    const demoCloseBtn = document.getElementById("demo-modal-close-btn");
    const demoBackdrop = document.getElementById("demo-modal-backdrop");
    if (demoCloseBtn) demoCloseBtn.addEventListener("click", () => this.closeDemoModal());
    if (demoBackdrop) demoBackdrop.addEventListener("click", (e) => {
      if (e.target === demoBackdrop) this.closeDemoModal();
    });

    // Copy email button
    const copyEmailBtn = document.getElementById("copy-email-btn");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", () => this.copyEmailToClipboard());
    }

    // Global keyboard listener
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeProjectModal();
        this.closeDemoModal();
      }
      if (this.currentModalProject && this.currentModalProject.gallery && this.currentModalProject.gallery.length > 1) {
        if (e.key === "ArrowLeft") this.cycleGallery(-1);
        if (e.key === "ArrowRight") this.cycleGallery(1);
      }
    });
  }

  setLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    localStorage.setItem("alexandre_portfolio_lang", lang);
    this.applyLanguage(lang);
    this.renderProjects();
    this.renderExperiences();
    if (this.currentModalProject) {
      this.populateModalContent(this.currentModalProject);
    }
  }

  applyLanguage(lang) {
    // Update active state in toggle pill
    const btnEn = document.getElementById("lang-en");
    const btnFr = document.getElementById("lang-fr");
    if (btnEn && btnFr) {
      btnEn.classList.toggle("active", lang === "en");
      btnFr.classList.toggle("active", lang === "fr");
    }

    // Update all text nodes with data-i18n
    const strings = portfolioData.translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key]) {
        el.textContent = strings[key];
      }
    });

    // Update document title and html lang
    document.documentElement.lang = lang;
    document.title = "Alexandre Fortin — Creative Technologist · Portfolio";
  }

  scrollToChoiceSection() {
    const hero = document.getElementById("hero");
    const navbar = document.querySelector(".apple-navbar");
    const navHeight = navbar ? navbar.offsetHeight : 64;

    if (hero) {
      const targetY = hero.offsetTop + hero.offsetHeight - navHeight;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth"
      });
    } else {
      const choiceSection = document.getElementById("main-choice-section");
      if (choiceSection) {
        choiceSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    const tabProjectsBtn = document.getElementById("tab-btn-projects");
    const tabExperienceBtn = document.getElementById("tab-btn-experience");
    const projectsContainer = document.getElementById("projects-section");
    const experienceContainer = document.getElementById("experience-section");
    const navProjects = document.getElementById("nav-link-projects");
    const navExperience = document.getElementById("nav-link-experience");

    if (tab === "projects") {
      tabProjectsBtn.classList.add("active");
      tabExperienceBtn.classList.remove("active");
      projectsContainer.classList.remove("hidden-content");
      experienceContainer.classList.add("hidden-content");
      if (navProjects) navProjects.classList.add("active");
      if (navExperience) navExperience.classList.remove("active");
    } else {
      tabProjectsBtn.classList.remove("active");
      tabExperienceBtn.classList.add("active");
      projectsContainer.classList.add("hidden-content");
      experienceContainer.classList.remove("hidden-content");
      if (navProjects) navProjects.classList.remove("active");
      if (navExperience) navExperience.classList.add("active");
    }
  }

  renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    const lang = this.currentLang;
    const t = portfolioData.translations[lang];

    container.innerHTML = portfolioData.projects.map((proj, idx) => {
      const title = proj.title[lang];
      const category = proj.category[lang];
      const resume = proj.resume[lang];

      const demoBtnHtml = proj.hasDemo ? `
        <button class="apple-btn apple-btn-accent demo-trigger-btn" data-project-id="${proj.id}" title="${t.btnViewLiveDemo}">
          <span>${t.btnDemo}</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </button>
      ` : "";

      const tagsHtml = proj.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join("");
      const photoCount = proj.gallery ? proj.gallery.length : 1;
      const photoCountBadge = photoCount > 1 ? `
        <span class="media-photo-counter">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          ${photoCount} ${t.photosBadge}
        </span>
      ` : "";

      return `
        <article class="apple-card project-card reveal-item" data-project-id="${proj.id}" style="animation-delay: ${idx * 0.06}s">
          <div class="project-card-media" data-open-modal="${proj.id}">
            <img src="${proj.image}" alt="${title}" class="project-card-img" />
            ${photoCountBadge}
            <div class="project-media-overlay">
              <span class="view-overlay-badge">${t.btnDetails}</span>
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-card-meta">
              <span class="project-category-badge">${category}</span>
              <div class="project-tags-list">${tagsHtml}</div>
            </div>
            <h3 class="project-card-title" data-open-modal="${proj.id}">${title}</h3>
            <p class="project-card-resume">${resume}</p>
            <div class="project-card-actions">
              ${demoBtnHtml}
              <button class="apple-btn apple-btn-secondary details-trigger-btn" data-open-modal="${proj.id}">
                <span>${t.btnDetails}</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Attach click listeners to cards and buttons
    container.querySelectorAll("[data-open-modal]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-open-modal");
        this.openProjectModal(id);
      });
    });

    container.querySelectorAll(".demo-trigger-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-project-id");
        this.openDemoModal(id);
      });
    });
  }

  renderExperiences() {
    const container = document.getElementById("experience-timeline");
    if (!container) return;

    const lang = this.currentLang;

    container.innerHTML = portfolioData.experiences.map((exp, idx) => {
      const role = exp.role[lang];
      const period = exp.period[lang];
      const badge = exp.badge[lang];
      const summary = exp.summary[lang];
      const bullets = exp.bullets[lang].map(b => `<li>${b}</li>`).join("");
      const skills = exp.skills.map(s => `<span class="tag-pill tag-pill-subtle">${s}</span>`).join("");

      return `
        <div class="timeline-item reveal-item" style="animation-delay: ${idx * 0.1}s">
          <div class="timeline-node">
            <div class="timeline-dot"></div>
          </div>
          <div class="timeline-content apple-card">
            <div class="timeline-header">
              <div class="timeline-top-row">
                <span class="timeline-company">${exp.company}</span>
                <span class="timeline-period">${period}</span>
              </div>
              <h3 class="timeline-role">${role}</h3>
              <div class="timeline-badge-row">
                <span class="timeline-badge">${badge}</span>
              </div>
            </div>
            <p class="timeline-summary">${summary}</p>
            <ul class="timeline-bullets">${bullets}</ul>
            <div class="timeline-skills">${skills}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    this.currentModalProject = project;
    this.activeGalleryIndex = 0;
    this.populateModalContent(project);

    const backdrop = document.getElementById("project-modal-backdrop");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeProjectModal() {
    const backdrop = document.getElementById("project-modal-backdrop");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
    this.currentModalProject = null;
  }

  populateModalContent(project) {
    const lang = this.currentLang;
    const t = portfolioData.translations[lang];
    const d = project.details[lang];

    document.getElementById("modal-project-title").textContent = project.title[lang];
    document.getElementById("modal-project-category").textContent = project.category[lang];
    document.getElementById("modal-project-tagline").textContent = d.tagline || "";
    document.getElementById("modal-project-overview").textContent = d.overview || "";

    // Gallery rendering
    this.renderModalGallery(project);

    // Architectural features or highlights
    const highlightsContainer = document.getElementById("modal-project-highlights");
    if (d.features) {
      highlightsContainer.innerHTML = `
        <h4 class="modal-section-title">${t.modalHighlights}</h4>
        <ul class="modal-bullet-list">
          ${d.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
      `;
    } else {
      highlightsContainer.innerHTML = "";
    }

    // Engineering challenges
    const challengesContainer = document.getElementById("modal-project-challenges");
    if (d.challenges) {
      challengesContainer.innerHTML = `
        <h4 class="modal-section-title">${lang === 'fr' ? 'Défis & Solutions d\'Ingénierie' : 'Engineering Challenges & Solutions'}</h4>
        <ul class="modal-bullet-list">
          ${d.challenges.map(c => `<li>${c}</li>`).join("")}
        </ul>
      `;
    } else {
      challengesContainer.innerHTML = "";
    }

    // Tech stack
    const techContainer = document.getElementById("modal-project-tech");
    techContainer.innerHTML = `
      <h4 class="modal-section-title">${t.modalTechStack}</h4>
      <div class="modal-tags-list">
        ${(d.technologies || project.tags).map(tag => `<span class="tag-pill">${tag}</span>`).join("")}
      </div>
    `;

    // Modal Action buttons (No PDF research doc option as requested)
    const actionsContainer = document.getElementById("modal-project-actions");
    let actionsHtml = "";

    if (project.hasDemo) {
      actionsHtml += `
        <button class="apple-btn apple-btn-primary" id="modal-demo-btn">
          <span>${t.btnViewLiveDemo}</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </button>
      `;
    }
    if (project.externalUrl) {
      actionsHtml += `
        <a href="${project.externalUrl}" target="_blank" rel="noopener noreferrer" class="apple-btn apple-btn-secondary">
          <span>${t.btnKickstarter}</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      `;
    }

    actionsContainer.innerHTML = actionsHtml;

    const modalDemoBtn = document.getElementById("modal-demo-btn");
    if (modalDemoBtn) {
      modalDemoBtn.addEventListener("click", () => {
        this.closeProjectModal();
        this.openDemoModal(project.id);
      });
    }
  }

  renderModalGallery(project) {
    const mainImg = document.getElementById("modal-gallery-main");
    const thumbContainer = document.getElementById("modal-gallery-thumbs");
    const prevBtn = document.getElementById("gallery-prev-btn");
    const nextBtn = document.getElementById("gallery-next-btn");

    if (!project.gallery || project.gallery.length === 0) {
      mainImg.src = project.image;
      thumbContainer.innerHTML = "";
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      return;
    }

    mainImg.src = project.gallery[this.activeGalleryIndex];

    const showArrows = project.gallery.length > 1;
    if (prevBtn) prevBtn.style.display = showArrows ? "flex" : "none";
    if (nextBtn) nextBtn.style.display = showArrows ? "flex" : "none";

    if (project.gallery.length <= 1) {
      thumbContainer.innerHTML = "";
      return;
    }

    thumbContainer.innerHTML = project.gallery.map((imgSrc, i) => `
      <button class="gallery-thumb-btn ${i === this.activeGalleryIndex ? 'active' : ''}" data-thumb-index="${i}" aria-label="Photo ${i + 1}">
        <img src="${imgSrc}" alt="Miniature ${i + 1}" />
      </button>
    `).join("");

    thumbContainer.querySelectorAll(".gallery-thumb-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-thumb-index"), 10);
        this.setGalleryIndex(idx);
      });
    });
  }

  setGalleryIndex(index) {
    if (!this.currentModalProject || !this.currentModalProject.gallery) return;
    this.activeGalleryIndex = index;
    const mainImg = document.getElementById("modal-gallery-main");
    mainImg.src = this.currentModalProject.gallery[index];

    document.querySelectorAll(".gallery-thumb-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
  }

  cycleGallery(direction) {
    if (!this.currentModalProject || !this.currentModalProject.gallery) return;
    const len = this.currentModalProject.gallery.length;
    let nextIdx = (this.activeGalleryIndex + direction + len) % len;
    this.setGalleryIndex(nextIdx);
  }

  openDemoModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project || !project.demoUrl) return;

    const lang = this.currentLang;
    const t = portfolioData.translations[lang];

    const demoBackdrop = document.getElementById("demo-modal-backdrop");
    const demoIframe = document.getElementById("demo-iframe");
    const demoTitle = document.getElementById("demo-modal-title");
    const demoDirectLink = document.getElementById("demo-modal-direct-link");
    const demoNotice = document.getElementById("demo-modal-notice");

    demoTitle.textContent = `${project.title[lang]} · ${t.liveDemoTitle}`;
    demoDirectLink.href = project.demoUrl;
    demoNotice.textContent = t.modalDemoNotice;

    // Load iframe
    demoIframe.src = project.demoUrl;

    demoBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeDemoModal() {
    const demoBackdrop = document.getElementById("demo-modal-backdrop");
    const demoIframe = document.getElementById("demo-iframe");
    demoBackdrop.classList.remove("active");
    demoIframe.src = "about:blank";
    document.body.style.overflow = "";
  }

  copyEmailToClipboard() {
    const email = "alexandre.fortin88@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      this.showToast(portfolioData.translations[this.currentLang].contactEmailCopied);
    }).catch(() => {
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      this.showToast(portfolioData.translations[this.currentLang].contactEmailCopied);
    });
  }

  showToast(message) {
    const toast = document.getElementById("copy-toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  setupScrollSpy() {
    const nav = document.querySelector(".apple-navbar");
    const navLinkAbout = document.getElementById("nav-link-about");
    const navLinkProjects = document.getElementById("nav-link-projects");
    const navLinkExperience = document.getElementById("nav-link-experience");
    const navLinkContact = document.getElementById("nav-link-contact");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 30) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }

      // Update active nav links based on scroll section
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      const navHeight = nav ? nav.offsetHeight : 64;

      if (!hero || !contact) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight - navHeight - 120;
      const contactTop = contact.offsetTop - navHeight - 200;

      if (scrollY < heroBottom) {
        if (navLinkAbout) navLinkAbout.classList.add("active");
        if (navLinkProjects) navLinkProjects.classList.remove("active");
        if (navLinkExperience) navLinkExperience.classList.remove("active");
        if (navLinkContact) navLinkContact.classList.remove("active");
      } else if (scrollY >= contactTop) {
        if (navLinkAbout) navLinkAbout.classList.remove("active");
        if (navLinkProjects) navLinkProjects.classList.remove("active");
        if (navLinkExperience) navLinkExperience.classList.remove("active");
        if (navLinkContact) navLinkContact.classList.add("active");
      } else {
        if (navLinkAbout) navLinkAbout.classList.remove("active");
        if (navLinkContact) navLinkContact.classList.remove("active");
        if (this.activeTab === "projects") {
          if (navLinkProjects) navLinkProjects.classList.add("active");
          if (navLinkExperience) navLinkExperience.classList.remove("active");
        } else {
          if (navLinkProjects) navLinkProjects.classList.remove("active");
          if (navLinkExperience) navLinkExperience.classList.add("active");
        }
      }
    }, { passive: true });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new PortfolioApp();
});
