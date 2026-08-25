/* ============================================================
   ÉbénisterieQuest — Données du programme DEP 5030 (Ébénisterie)
   Contenu bâti sur le moteur web PWA (identique à SoudageQuest / ÉlectricitéQuest).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   ⚠️ Les questions (QCM, vrai/faux, association, mises en situation) sont des
   EXEMPLES à VALIDER par les enseignants du programme. Les codes de module et
   les heures sont INDICATIFS (à confirmer avec le référentiel officiel).
   ============================================================ */

const PROGRAM = {
  fr: { title: "Ébénisterie", subtitle: "DEP 5030 — 1650 heures (indicatif)" },
  en: { title: "Cabinetmaking", subtitle: "DVS 5030 — 1650 hours (indicative)" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes". */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "mise en situation": scénario + choix multiple. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "eben01", "order": 1, "code": "5030-01", "hours": 30,
  "title_fr": "Métier et formation", "title_en": "Trade and Training", "icon": "🧭",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Quel diplôme obtient-on à la fin du programme Ébénisterie 5030?",
       "en": "What diploma is awarded at the end of the Cabinetmaking 5030 program?",
       "choices": [
        ch("Un diplôme d'études professionnelles (DEP)", "A Diploma of Vocational Studies (DVS)", true),
        ch("Un diplôme d'études collégiales (DEC)", "A Diploma of College Studies (DEC)", false),
        ch("Un baccalauréat", "A Bachelor's degree", false),
        ch("Une maîtrise", "A Master's degree", false)
       ],
       "explFr": "Le programme Ébénisterie mène à un diplôme d'études professionnelles (DEP) délivré par le ministère.",
       "explEn": "The Cabinetmaking program leads to a Diploma of Vocational Studies (DVS) issued by the ministry." },
     { "fr": "Que fabrique principalement un ébéniste?",
       "en": "What does a cabinetmaker mainly build?",
       "choices": [
        ch("Des meubles et des articles en bois (armoires, tables, caissons)", "Furniture and wood items (cabinets, tables, casework)", true),
        ch("Des moteurs d'automobile", "Car engines", false),
        ch("Des circuits électroniques", "Electronic circuits", false),
        ch("Des vêtements", "Clothing", false)
       ],
       "explFr": "L'ébéniste fabrique, assemble et finit des meubles et des ouvrages en bois, souvent sur mesure.",
       "explEn": "A cabinetmaker builds, assembles and finishes furniture and woodwork, often custom-made." },
     tf("L'ébénisterie combine le travail manuel et l'utilisation de machines-outils spécialisées.",
        "Cabinetmaking combines handwork and the use of specialized machine tools.", true),
     tf("Un ébéniste n'a jamais besoin de lire un plan pour fabriquer un meuble.",
        "A cabinetmaker never needs to read a plan to build a piece of furniture.", false),
     { "fr": "Quelle qualité est essentielle pour un ébéniste?",
       "en": "Which quality is essential for a cabinetmaker?",
       "choices": [
        ch("La précision et le souci du détail", "Precision and attention to detail", true),
        ch("L'indifférence à la qualité", "Indifference to quality", false),
        ch("La rapidité au détriment de la sécurité", "Speed at the expense of safety", false),
        ch("Le refus de mesurer", "Refusing to measure", false)
       ],
       "explFr": "En ébénisterie, la précision des mesures et des assemblages détermine la qualité et la solidité du meuble.",
       "explEn": "In cabinetmaking, precision of measurements and joints determines a piece's quality and strength." }
   ]},
   { "level": 2, "questions": [
     { "fr": "Dans quels milieux un ébéniste peut-il travailler?",
       "en": "In what settings can a cabinetmaker work?",
       "choices": [
        ch("Ateliers d'ébénisterie, usines de meubles, entreprises d'armoires de cuisine, à son compte", "Cabinetmaking shops, furniture plants, kitchen-cabinet firms, self-employed", true),
        ch("Uniquement en hôpital", "Only in hospitals", false),
        ch("Uniquement dans les mines", "Only in mines", false),
        ch("Uniquement dans les banques", "Only in banks", false)
       ],
       "explFr": "Les débouchés sont variés : ateliers artisanaux, industrie du meuble, fabrication d'armoires, travailleur autonome.",
       "explEn": "Career paths vary: craft shops, furniture industry, cabinet manufacturing, self-employment." },
     match("Associe chaque tâche à l'étape de fabrication correspondante.", "Match each task to its manufacturing stage.", [
        pair("Débitage", "Cutting to size", "Couper le bois aux dimensions", "Cutting wood to dimensions"),
        pair("Corroyage", "Surfacing", "Dresser et mettre d'équerre les pièces", "Truing and squaring the pieces"),
        pair("Assemblage", "Assembly", "Joindre les pièces entre elles", "Joining the pieces together"),
        pair("Finition", "Finishing", "Appliquer teinture et vernis", "Applying stain and varnish")
     ]),
     tf("Le travailleur autonome en ébénisterie doit aussi gérer des tâches d'estimation et de service à la clientèle.",
        "A self-employed cabinetmaker must also handle estimating and customer service tasks.", true),
     { "fr": "Pourquoi la connaissance du bois est-elle importante dès le début de la formation?",
       "en": "Why is knowledge of wood important from the start of training?",
       "choices": [
        ch("Parce que le choix de l'essence influence la solidité, l'apparence et le travail du meuble", "Because the wood species affects a piece's strength, appearance and workability", true),
        ch("Parce que le bois n'a aucune importance", "Because wood doesn't matter", false),
        ch("Parce que tous les bois sont identiques", "Because all woods are identical", false),
        ch("Uniquement pour la couleur", "Only for the color", false)
       ],
       "explFr": "Chaque essence a des propriétés différentes (dureté, stabilité, grain) qui influencent le choix selon l'usage du meuble.",
       "explEn": "Each species has different properties (hardness, stability, grain) that guide the choice based on the piece's use." },
     tf("La lecture de plans et le calcul de dimensions font partie des compétences de base de l'ébéniste.",
        "Reading plans and calculating dimensions are among the cabinetmaker's basic skills.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Tu débutes ton premier projet de meuble. Avant de couper la moindre pièce, quelle est la meilleure pratique?",
       "You're starting your first furniture project. Before cutting any piece, what is the best practice?", [
        ch("Lire le plan, établir la liste de débitage et vérifier deux fois les mesures", "Read the plan, prepare the cut list and double-check the measurements", true),
        ch("Couper au hasard et ajuster plus tard", "Cut randomly and adjust later", false),
        ch("Ignorer le plan", "Ignore the plan", false),
        ch("Commencer par la finition", "Start with the finishing", false)
       ]),
     tf("« Mesurer deux fois, couper une fois » résume une bonne habitude de travail en ébénisterie.",
        "'Measure twice, cut once' sums up a good work habit in cabinetmaking.", true),
     { "fr": "Pourquoi la formation continue est-elle utile pour un ébéniste?",
       "en": "Why is ongoing training useful for a cabinetmaker?",
       "choices": [
        ch("Parce que les matériaux, machines et techniques (ex. CNC) évoluent", "Because materials, machines and techniques (e.g. CNC) evolve", true),
        ch("Parce que le bois change de nature chaque année", "Because wood changes its nature every year", false),
        ch("Parce que c'est interdit d'apprendre après l'école", "Because learning after school is forbidden", false),
        ch("Ce n'est jamais utile", "It's never useful", false)
       ],
       "explFr": "Les nouveaux matériaux (panneaux, colles) et l'usinage numérique (CNC) transforment le métier : se perfectionner reste un atout.",
       "explEn": "New materials (panels, glues) and CNC machining are changing the trade: upgrading skills remains an asset." },
     { "fr": "Un ébéniste reçoit une commande de meuble sur mesure. Quelle étape vient en premier?",
       "en": "A cabinetmaker receives a custom furniture order. Which step comes first?",
       "choices": [
        ch("Comprendre le besoin du client et concevoir/valider le plan", "Understand the client's need and design/validate the plan", true),
        ch("Vernir avant de concevoir", "Varnish before designing", false),
        ch("Livrer avant de fabriquer", "Deliver before building", false),
        ch("Facturer sans discuter", "Bill without discussion", false)
       ],
       "explFr": "La conception et la validation du plan avec le client précèdent la fabrication : elles évitent les erreurs coûteuses.",
       "explEn": "Design and plan validation with the client precede fabrication: they prevent costly mistakes." },
     tf("Bâcler la préparation d'un projet fait généralement gagner du temps et de la qualité.",
        "Rushing a project's preparation generally saves time and improves quality.", false)
   ]}
  ]
 },
 {
  "id": "eben02", "order": 2, "code": "5030-02", "hours": 45,
  "title_fr": "Santé et sécurité en atelier", "title_en": "Workshop Health & Safety", "icon": "🦺",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Quel équipement de protection est essentiel près des machines qui produisent du bruit et des projections?",
       "en": "Which protective equipment is essential near machines producing noise and flying debris?",
       "choices": [
        ch("Des lunettes de sécurité et une protection auditive", "Safety glasses and hearing protection", true),
        ch("Des sandales", "Sandals", false),
        ch("Des gants de laine seulement", "Wool gloves only", false),
        ch("Aucun équipement", "No equipment", false)
       ],
       "explFr": "Les lunettes protègent les yeux des copeaux et la protection auditive prévient les dommages liés au bruit des machines.",
       "explEn": "Glasses protect the eyes from chips and hearing protection prevents damage from machine noise." },
     { "fr": "Pourquoi un système de captation des poussières est-il important dans un atelier de bois?",
       "en": "Why is a dust collection system important in a wood shop?",
       "choices": [
        ch("La poussière de bois est nocive pour les poumons et peut être explosive en concentration", "Wood dust is harmful to the lungs and can be explosive in high concentration", true),
        ch("Pour rendre l'atelier plus bruyant", "To make the shop noisier", false),
        ch("Ça n'a aucune utilité", "It serves no purpose", false),
        ch("Uniquement pour l'apparence", "Only for appearance", false)
       ],
       "explFr": "La poussière fine de bois est un risque respiratoire (certaines sont cancérogènes) et un risque d'incendie/explosion : la captation est essentielle.",
       "explEn": "Fine wood dust is a respiratory hazard (some are carcinogenic) and a fire/explosion risk: collection is essential." },
     tf("Il faut porter des vêtements ajustés et attacher ses cheveux longs près des machines rotatives.",
        "You must wear close-fitting clothes and tie back long hair near rotating machines.", true),
     tf("On peut retirer le protège-lame d'une scie pour aller plus vite.",
        "You can remove a saw's blade guard to work faster.", false),
     { "fr": "Que signifie SIMDUT sur les produits comme les teintures et les solvants?",
       "en": "What does WHMIS mean on products like stains and solvents?",
       "choices": [
        ch("Un système d'information sur les matières dangereuses (étiquettes et fiches de données)", "An information system on hazardous materials (labels and data sheets)", true),
        ch("Une marque de vernis", "A brand of varnish", false),
        ch("Un type de scie", "A type of saw", false),
        ch("Un code de peinture", "A paint code", false)
       ],
       "explFr": "Le SIMDUT informe des dangers des produits chimiques par des pictogrammes, des étiquettes et des fiches de données de sécurité (FDS).",
       "explEn": "WHMIS communicates chemical hazards through pictograms, labels and safety data sheets (SDS)." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque danger d'atelier à sa mesure de prévention.", "Match each shop hazard to its prevention measure.", [
        pair("Poussière de bois", "Wood dust", "Captation et masque", "Dust collection and mask"),
        pair("Bruit des machines", "Machine noise", "Protection auditive", "Hearing protection"),
        pair("Lame de scie", "Saw blade", "Protège-lame et poussoir", "Blade guard and push stick"),
        pair("Solvants", "Solvents", "Ventilation et gants", "Ventilation and gloves")
     ]),
     { "fr": "Qu'est-ce qu'un « poussoir » (push stick) sur une scie sur table?",
       "en": "What is a push stick on a table saw?",
       "choices": [
        ch("Un outil pour guider le bois près de la lame sans y approcher les doigts", "A tool to guide wood near the blade without putting fingers close to it", true),
        ch("Un levier pour démarrer le moteur", "A lever to start the motor", false),
        ch("Un dispositif de mesure", "A measuring device", false),
        ch("Un type de colle", "A type of glue", false)
       ],
       "explFr": "Le poussoir permet de pousser les pièces étroites en gardant les mains à distance sécuritaire de la lame.",
       "explEn": "A push stick lets you feed narrow pieces while keeping hands a safe distance from the blade." },
     tf("Le recul (kickback) d'une pièce sur une scie sur table est un danger sérieux que le couteau diviseur aide à prévenir.",
        "Kickback of a workpiece on a table saw is a serious hazard that the riving knife helps prevent.", true),
     { "fr": "Avant de changer une lame ou de dégager un bourrage sur une machine, que faut-il faire?",
       "en": "Before changing a blade or clearing a jam on a machine, what must you do?",
       "choices": [
        ch("Couper l'alimentation et cadenasser/verrouiller la machine (attendre l'arrêt complet)", "Cut the power and lock out the machine (wait for a complete stop)", true),
        ch("Laisser la machine tourner", "Leave the machine running", false),
        ch("Demander à un collègue de la tenir", "Ask a coworker to hold it", false),
        ch("Utiliser sa main pour arrêter la lame", "Use your hand to stop the blade", false)
       ],
       "explFr": "On coupe et on verrouille l'alimentation avant toute intervention, et on attend l'arrêt complet des pièces mobiles.",
       "explEn": "You cut and lock out the power before any intervention, and wait for moving parts to fully stop." },
     tf("Garder l'atelier propre et dégagé réduit les risques de chute et d'incendie.",
        "Keeping the shop clean and clear reduces the risk of falls and fire.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Une longue planche se coince entre la lame et le guide de ta scie sur table pendant la coupe, et tu sens qu'elle veut reculer vers toi.\n\nQuelle est la bonne réaction et prévention?",
       "A long board binds between the blade and the fence of your table saw during the cut, and you feel it wanting to kick back toward you.\n\nWhat is the correct reaction and prevention?", [
        ch("Ne jamais se placer dans l'axe de la lame, utiliser couteau diviseur et poussoir, et arrêter au besoin", "Never stand in line with the blade, use the riving knife and push stick, and stop if needed", true),
        ch("Tirer fort la planche vers soi", "Pull the board hard toward yourself", false),
        ch("Mettre la main derrière la lame", "Put your hand behind the blade", false),
        ch("Accélérer la coupe", "Speed up the cut", false)
       ]),
     scenario("Tu appliques un vernis à base de solvant dans l'atelier. Quelles précautions prends-tu?",
       "You're applying a solvent-based varnish in the shop. What precautions do you take?", [
        ch("Bonne ventilation, protection respiratoire adaptée, éloigner les sources d'ignition", "Good ventilation, appropriate respiratory protection, keep ignition sources away", true),
        ch("Fermer toutes les fenêtres et fumer une cigarette", "Close all windows and smoke a cigarette", false),
        ch("Ne lire aucune étiquette", "Read no labels", false),
        ch("Appliquer sans aucune protection", "Apply with no protection whatsoever", false)
       ]),
     tf("Les vapeurs de solvants peuvent être inflammables : il faut éloigner flammes et étincelles.",
        "Solvent vapors can be flammable: keep flames and sparks away.", true),
     { "fr": "Un chiffon imbibé d'huile de finition (ex. huile de lin) laissé en tas peut...",
       "en": "A rag soaked in finishing oil (e.g. linseed oil) left in a pile can...",
       "choices": [
        ch("S'enflammer spontanément par oxydation (combustion spontanée)", "Ignite spontaneously through oxidation (spontaneous combustion)", true),
        ch("Rester sans danger indéfiniment", "Remain harmless indefinitely", false),
        ch("Se transformer en vernis", "Turn into varnish", false),
        ch("Refroidir l'atelier", "Cool the shop", false)
       ],
       "explFr": "Les chiffons imbibés d'huile peuvent s'auto-enflammer : on les étend à plat pour sécher ou on les conserve dans un contenant métallique fermé.",
       "explEn": "Oil-soaked rags can self-ignite: lay them flat to dry or store them in a closed metal container." },
     tf("Connaître l'emplacement des extincteurs et des arrêts d'urgence fait partie de la sécurité en atelier.",
        "Knowing the location of extinguishers and emergency stops is part of shop safety.", true)
   ]}
  ]
 },
 {
  "id": "eben03", "order": 3, "code": "5030-03", "hours": 60,
  "title_fr": "Essences et matériaux du bois", "title_en": "Wood Species and Materials", "icon": "🌳",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Quelle est la différence entre un bois franc (dur) et un bois mou (résineux)?",
       "en": "What is the difference between a hardwood and a softwood?",
       "choices": [
        ch("Les bois francs proviennent d'arbres feuillus, les bois mous de conifères", "Hardwoods come from broadleaf trees, softwoods from conifers", true),
        ch("Les bois francs sont toujours plus légers", "Hardwoods are always lighter", false),
        ch("Il n'y a aucune différence", "There is no difference", false),
        ch("Les bois mous ne servent jamais en construction", "Softwoods are never used in construction", false)
       ],
       "explFr": "« Franc » (feuillus comme le chêne, l'érable) et « mou » (conifères comme le pin, l'épinette) désignent l'origine botanique; la dureté réelle varie selon l'essence.",
       "explEn": "'Hardwood' (broadleaf like oak, maple) and 'softwood' (conifers like pine, spruce) refer to botanical origin; actual hardness varies by species." },
     { "fr": "Lequel de ces bois est un bois franc couramment utilisé en ébénisterie?",
       "en": "Which of these is a hardwood commonly used in cabinetmaking?",
       "choices": [ ch("Le chêne", "Oak", true), ch("Le pin blanc", "White pine", false), ch("L'épinette", "Spruce", false), ch("Le cèdre", "Cedar", false) ],
       "explFr": "Le chêne, l'érable, le noyer et le merisier sont des bois francs prisés en ébénisterie pour leur solidité et leur grain.",
       "explEn": "Oak, maple, walnut and cherry are hardwoods valued in cabinetmaking for their strength and grain." },
     tf("Le contreplaqué et le MDF (panneau de fibres) sont des panneaux dérivés du bois utilisés en ébénisterie.",
        "Plywood and MDF (fiberboard) are wood-based panels used in cabinetmaking.", true),
     tf("Le bois est un matériau inerte qui ne bouge jamais avec l'humidité.",
        "Wood is an inert material that never moves with humidity.", false),
     { "fr": "Pourquoi laisse-t-on le bois « s'acclimater » à l'atelier avant de le travailler?",
       "en": "Why let wood 'acclimatize' in the shop before working it?",
       "choices": [
        ch("Pour que son taux d'humidité s'équilibre et limiter les déformations après fabrication", "So its moisture content equalizes and limits warping after fabrication", true),
        ch("Pour le rendre plus lourd", "To make it heavier", false),
        ch("Pour changer sa couleur", "To change its color", false),
        ch("Ça ne sert à rien", "It's pointless", false)
       ],
       "explFr": "Le bois absorbe ou perd de l'humidité selon l'air ambiant; l'acclimater réduit les risques de retrait, gauchissement ou fente une fois le meuble monté.",
       "explEn": "Wood gains or loses moisture with ambient air; acclimatizing reduces the risk of shrinkage, warping or splitting once assembled." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque matériau à sa description.", "Match each material to its description.", [
        pair("MDF", "MDF", "Panneau de fibres dense et lisse", "Dense, smooth fiberboard"),
        pair("Contreplaqué", "Plywood", "Plis de bois collés à fils croisés", "Cross-grain glued wood plies"),
        pair("Panneau de particules", "Particleboard", "Particules de bois collées", "Glued wood particles"),
        pair("Bois massif", "Solid wood", "Planche de bois plein", "Board of solid wood")
     ]),
     { "fr": "Qu'appelle-t-on le « fil du bois » (grain)?",
       "en": "What is called the wood 'grain'?",
       "choices": [
        ch("La direction des fibres du bois", "The direction of the wood fibers", true),
        ch("La couleur du vernis", "The color of the varnish", false),
        ch("Le poids de la planche", "The weight of the board", false),
        ch("Le nombre de nœuds", "The number of knots", false)
       ],
       "explFr": "Le fil correspond à l'orientation des fibres; on travaille généralement « dans le sens du fil » pour un meilleur fini et éviter l'éclatement.",
       "explEn": "The grain is the fiber orientation; you generally work 'with the grain' for a better finish and to avoid tearout." },
     tf("Le bois travaille surtout en largeur (retrait/gonflement) plutôt qu'en longueur avec les variations d'humidité.",
        "Wood moves mostly across its width (shrink/swell) rather than in length with humidity changes.", true),
     { "fr": "Pourquoi certains meubles utilisent-ils du placage plutôt que du bois massif partout?",
       "en": "Why do some pieces use veneer rather than solid wood everywhere?",
       "choices": [
        ch("Pour l'apparence d'une belle essence à moindre coût et une meilleure stabilité des grands panneaux", "For the look of a fine species at lower cost and better stability of large panels", true),
        ch("Parce que le placage est toujours plus solide que le massif", "Because veneer is always stronger than solid wood", false),
        ch("Pour rendre le meuble plus lourd", "To make the piece heavier", false),
        ch("Uniquement par tradition", "Only by tradition", false)
       ],
       "explFr": "Le placage (fine feuille de bois noble) sur un panneau stable donne l'esthétique du bois précieux tout en réduisant le coût et le mouvement du bois.",
       "explEn": "Veneer (a thin sheet of fine wood) over a stable panel gives the look of precious wood while reducing cost and wood movement." },
     tf("Les nœuds, les fentes et le gauchissement sont des défauts à repérer lors du choix des planches.",
        "Knots, splits and warping are defects to spot when selecting boards.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Tu dois fabriquer un grand plateau de table qui restera stable malgré les variations d'humidité de la maison.\n\nQuel choix est le plus judicieux?",
       "You must build a large tabletop that stays stable despite the home's humidity swings.\n\nWhich choice is wisest?", [
        ch("Tenir compte du mouvement du bois et permettre au plateau de « bouger » (fixations adaptées)", "Account for wood movement and let the top 'move' (suitable fasteners)", true),
        ch("Visser le plateau rigidement partout sans jeu", "Screw the top rigidly everywhere with no play", false),
        ch("Ignorer l'humidité complètement", "Ignore humidity entirely", false),
        ch("Utiliser du bois encore vert et humide", "Use green, wet wood", false)
       ]),
     { "fr": "Un client veut un meuble d'extérieur. Quelle caractéristique du bois privilégier?",
       "en": "A client wants outdoor furniture. Which wood characteristic should you favor?",
       "choices": [
        ch("Une essence résistante à l'humidité et à la pourriture (ex. cèdre)", "A species resistant to moisture and rot (e.g. cedar)", true),
        ch("Un MDF standard non traité", "Standard untreated MDF", false),
        ch("N'importe quel panneau de particules", "Any particleboard", false),
        ch("Le bois le moins cher sans égard à l'usage", "The cheapest wood regardless of use", false)
       ],
       "explFr": "À l'extérieur, on choisit des essences naturellement durables (cèdre, teck) ou du bois traité; le MDF et les particules gonflent à l'humidité.",
       "explEn": "Outdoors, choose naturally durable species (cedar, teak) or treated wood; MDF and particleboard swell with moisture." },
     match("Associe chaque essence à une propriété reconnue.", "Match each species to a recognized property.", [
        pair("Érable", "Maple", "Dur, grain fin, pâle", "Hard, fine-grained, pale"),
        pair("Noyer", "Walnut", "Foncé, riche, prisé", "Dark, rich, prized"),
        pair("Pin", "Pine", "Tendre, économique", "Soft, economical"),
        pair("Cèdre", "Cedar", "Résistant à la pourriture", "Rot-resistant")
     ]),
     tf("Choisir l'essence selon l'usage, le budget et l'apparence fait partie du jugement professionnel de l'ébéniste.",
        "Choosing the species based on use, budget and appearance is part of the cabinetmaker's professional judgment.", true),
     tf("Utiliser du bois trop humide n'a aucune conséquence sur un meuble une fois terminé.",
        "Using overly wet wood has no consequence on a finished piece.", false)
   ]}
  ]
 },
 {
  "id": "eben04", "order": 4, "code": "5030-04", "hours": 60,
  "title_fr": "Lecture de plans et dessin technique", "title_en": "Blueprint Reading and Technical Drawing", "icon": "📐",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "À quoi sert un plan (dessin technique) en ébénisterie?",
       "en": "What is a plan (technical drawing) used for in cabinetmaking?",
       "choices": [
        ch("Représenter le meuble, ses dimensions et ses assemblages avant de le fabriquer", "Represent the piece, its dimensions and joints before building it", true),
        ch("Décorer le mur de l'atelier", "Decorate the shop wall", false),
        ch("Remplacer les outils", "Replace the tools", false),
        ch("Calculer le salaire", "Calculate the salary", false)
       ],
       "explFr": "Le plan communique les dimensions, les matériaux et les assemblages : c'est la feuille de route de la fabrication.",
       "explEn": "The plan communicates dimensions, materials and joints: it's the roadmap for fabrication." },
     { "fr": "Que représente une « cote » sur un plan?",
       "en": "What does a 'dimension' represent on a plan?",
       "choices": [
        ch("Une mesure précise (longueur, largeur, hauteur, diamètre)", "A precise measurement (length, width, height, diameter)", true),
        ch("La couleur du bois", "The color of the wood", false),
        ch("Le prix du meuble", "The price of the piece", false),
        ch("Le nom du client", "The client's name", false)
       ],
       "explFr": "Les cotes indiquent les mesures exactes nécessaires à la fabrication de chaque pièce.",
       "explEn": "Dimensions indicate the exact measurements needed to fabricate each piece." },
     tf("Une vue en coupe permet de voir l'intérieur d'un meuble ou d'un assemblage.",
        "A cross-section view shows the inside of a piece or a joint.", true),
     tf("L'échelle d'un dessin (ex. 1:2) n'a aucune importance pour interpréter les mesures.",
        "A drawing's scale (e.g. 1:2) has no importance when interpreting measurements.", false),
     { "fr": "Combien de millimètres y a-t-il dans 1 centimètre?",
       "en": "How many millimeters are there in 1 centimeter?",
       "choices": [ ch("10 mm", "10 mm", true), ch("100 mm", "100 mm", false), ch("1 mm", "1 mm", false), ch("1000 mm", "1000 mm", false) ],
       "explFr": "1 cm = 10 mm. La maîtrise des conversions métriques est essentielle pour lire les cotes.",
       "explEn": "1 cm = 10 mm. Mastering metric conversions is essential to read dimensions." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque vue de dessin technique à ce qu'elle montre.", "Match each drawing view to what it shows.", [
        pair("Vue de face", "Front view", "L'avant du meuble", "The front of the piece"),
        pair("Vue de dessus", "Top view", "Le dessus (plan horizontal)", "The top (horizontal plane)"),
        pair("Vue de côté", "Side view", "Le profil du meuble", "The side profile"),
        pair("Vue en coupe", "Section view", "L'intérieur, coupé", "The inside, cut through")
     ]),
     { "fr": "Sur un plan, une armoire mesure 800 mm de large. Combien cela fait-il en centimètres?",
       "en": "On a plan, a cabinet is 800 mm wide. How much is that in centimeters?",
       "choices": [ ch("80 cm", "80 cm", true), ch("8 cm", "8 cm", false), ch("8000 cm", "8000 cm", false), ch("800 cm", "800 cm", false) ],
       "explFr": "800 mm ÷ 10 = 80 cm. Les plans d'ébénisterie utilisent souvent le millimètre pour la précision.",
       "explEn": "800 mm ÷ 10 = 80 cm. Cabinetmaking plans often use millimeters for precision." },
     tf("Une nomenclature (liste des pièces) accompagne souvent un plan pour détailler chaque composant.",
        "A parts list (bill of materials) often accompanies a plan to detail each component.", true),
     { "fr": "Qu'est-ce qu'une liste de débitage (cut list)?",
       "en": "What is a cut list?",
       "choices": [
        ch("La liste de toutes les pièces à couper avec leurs dimensions et quantités", "The list of all pieces to cut with their dimensions and quantities", true),
        ch("La liste des clients", "The list of clients", false),
        ch("La liste des vernis disponibles", "The list of available varnishes", false),
        ch("Le carnet de commandes", "The order book", false)
       ],
       "explFr": "La liste de débitage sert à préparer et couper efficacement toutes les pièces d'un projet en évitant les erreurs.",
       "explEn": "The cut list helps efficiently prepare and cut all a project's parts while avoiding errors." },
     tf("Additionner l'épaisseur des pièces est nécessaire pour calculer les dimensions finales d'un caisson.",
        "Adding up the thickness of pieces is needed to calculate a cabinet box's final dimensions.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Le plan indique un caisson de 600 mm de large en panneau de 18 mm d'épaisseur, avec deux côtés verticaux.\n\nQuelle est la largeur intérieure entre les côtés?",
       "The plan shows a 600 mm wide box in 18 mm thick panel, with two vertical sides.\n\nWhat is the inside width between the sides?", [
        ch("564 mm (600 − 18 − 18)", "564 mm (600 − 18 − 18)", true),
        ch("600 mm", "600 mm", false),
        ch("582 mm", "582 mm", false),
        ch("618 mm", "618 mm", false)
       ]),
     { "fr": "Pourquoi respecter précisément les cotes d'un plan lors du débitage?",
       "en": "Why precisely follow a plan's dimensions when cutting?",
       "choices": [
        ch("Parce qu'une erreur se répercute sur l'assemblage et l'équerrage du meuble entier", "Because an error cascades into the assembly and squaring of the whole piece", true),
        ch("Parce que les cotes sont décoratives", "Because dimensions are decorative", false),
        ch("Parce qu'on peut couper au hasard", "Because you can cut randomly", false),
        ch("Ce n'est pas important", "It's not important", false)
       ],
       "explFr": "En ébénisterie, les pièces s'emboîtent : une seule cote fausse peut compromettre l'assemblage, l'équerrage et l'apparence finale.",
       "explEn": "In cabinetmaking, parts interlock: a single wrong dimension can compromise assembly, squaring and final appearance." },
     tf("Vérifier l'équerrage (angles à 90°) d'un caisson pendant l'assemblage évite un meuble « en losange ».",
        "Checking a box's squareness (90° angles) during assembly prevents a 'racked' piece.", true),
     { "fr": "Le plan prévoit 3 tablettes réparties également dans une hauteur intérieure de 900 mm. À quel intervalle approximatif les placer (espaces égaux)?",
       "en": "The plan calls for 3 shelves evenly spaced in a 900 mm inside height. At what approximate interval (equal spaces)?",
       "choices": [
        ch("Environ tous les 225 mm (4 espaces égaux)", "About every 225 mm (4 equal spaces)", true),
        ch("Tous les 900 mm", "Every 900 mm", false),
        ch("Tous les 100 mm", "Every 100 mm", false),
        ch("Tous les 450 mm", "Every 450 mm", false)
       ],
       "explFr": "3 tablettes créent 4 espaces : 900 ÷ 4 = 225 mm (calcul indicatif, sans compter l'épaisseur des tablettes).",
       "explEn": "3 shelves create 4 spaces: 900 ÷ 4 = 225 mm (indicative calculation, not counting shelf thickness)." },
     tf("Un bon dessin technique réduit les malentendus entre le concepteur, l'ébéniste et le client.",
        "A good technical drawing reduces misunderstandings among the designer, cabinetmaker and client.", true)
   ]}
  ]
 },
 {
  "id": "eben05", "order": 5, "code": "5030-05", "hours": 120,
  "title_fr": "Machines-outils (dégauchisseuse, raboteuse, scies, toupie)", "title_en": "Machine Tools (jointer, planer, saws, shaper)", "icon": "⚙️",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "À quoi sert principalement une dégauchisseuse (jointer)?",
       "en": "What is a jointer mainly used for?",
       "choices": [
        ch("Dresser une face et un chant bien plats et d'équerre sur une planche", "Flatten one face and one edge, true and square, on a board", true),
        ch("Peindre le bois", "Paint the wood", false),
        ch("Percer des trous", "Drill holes", false),
        ch("Poncer le vernis", "Sand the varnish", false)
       ],
       "explFr": "La dégauchisseuse aplanit une première face et un chant de référence, d'équerre, avant le passage à la raboteuse.",
       "explEn": "The jointer flattens a first reference face and edge, square to each other, before using the planer." },
     { "fr": "À quoi sert une raboteuse (planer)?",
       "en": "What is a thickness planer used for?",
       "choices": [
        ch("Amener une planche à une épaisseur uniforme, parallèle à la face de référence", "Bring a board to a uniform thickness, parallel to the reference face", true),
        ch("Couper des courbes", "Cut curves", false),
        ch("Assembler des pièces", "Assemble pieces", false),
        ch("Teindre le bois", "Stain the wood", false)
       ],
       "explFr": "Après la dégauchisseuse, la raboteuse rend la seconde face parallèle et met la planche à l'épaisseur voulue.",
       "explEn": "After the jointer, the planer makes the second face parallel and brings the board to the desired thickness." },
     tf("La scie à ruban est utile pour les coupes courbes et le refente de planches.",
        "The band saw is useful for curved cuts and resawing boards.", true),
     tf("On peut approcher les doigts à quelques millimètres d'une lame en marche sans danger.",
        "You can bring your fingers within a few millimeters of a running blade with no danger.", false),
     { "fr": "À quoi sert une toupie (shaper) ou une défonceuse (router)?",
       "en": "What is a shaper or a router used for?",
       "choices": [
        ch("Façonner des profils, moulures et rainures sur les chants ou surfaces", "Shape profiles, moldings and grooves on edges or surfaces", true),
        ch("Mesurer les angles", "Measure angles", false),
        ch("Sécher la colle", "Dry the glue", false),
        ch("Transporter les planches", "Carry the boards", false)
       ],
       "explFr": "La toupie et la défonceuse, munies de fers ou de mèches profilées, créent moulures, feuillures et rainures.",
       "explEn": "The shaper and router, fitted with profiled cutters or bits, create moldings, rabbets and grooves." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque machine à sa fonction principale.", "Match each machine to its main function.", [
        pair("Dégauchisseuse", "Jointer", "Face et chant plats/d'équerre", "Flat/square face and edge"),
        pair("Raboteuse", "Planer", "Épaisseur uniforme", "Uniform thickness"),
        pair("Scie sur table", "Table saw", "Coupes droites précises", "Precise straight cuts"),
        pair("Toupie", "Shaper", "Profils et moulures", "Profiles and moldings")
     ]),
     { "fr": "Dans quel sens présente-t-on généralement la pièce à une toupie ou une défonceuse?",
       "en": "In which direction is the workpiece generally fed into a shaper or router?",
       "choices": [
        ch("À contre-rotation de l'outil (avance contraire au sens de coupe), selon les règles de la machine", "Against the cutter's rotation (feed opposite the cutting direction), per the machine's rules", true),
        ch("Toujours dans le sens de rotation, sans exception", "Always with the rotation, without exception", false),
        ch("Peu importe le sens", "In any direction", false),
        ch("En lançant la pièce", "By throwing the piece", false)
       ],
       "explFr": "On avance normalement la pièce à contre-sens de la rotation de l'outil pour garder le contrôle et éviter l'entraînement dangereux (avalage).",
       "explEn": "You normally feed the piece against the cutter's rotation to keep control and avoid dangerous self-feeding (climb)." },
     tf("Le réglage de la profondeur de passe et l'affûtage des fers influencent la qualité de coupe.",
        "The depth-of-cut setting and the sharpness of the cutters affect cut quality.", true),
     { "fr": "Pourquoi effectuer plusieurs passes légères plutôt qu'une seule passe très profonde à la raboteuse?",
       "en": "Why take several light passes rather than one very deep pass on the planer?",
       "choices": [
        ch("Pour un meilleur fini, moins d'arrachement et moins de contrainte sur la machine", "For a better finish, less tearout and less strain on the machine", true),
        ch("Pour user la machine plus vite", "To wear out the machine faster", false),
        ch("Ça ne change rien", "It makes no difference", false),
        ch("Pour gaspiller du bois", "To waste wood", false)
       ],
       "explFr": "Des passes légères réduisent l'arrachement des fibres, améliorent le fini et ménagent le moteur et les fers.",
       "explEn": "Light passes reduce fiber tearout, improve the finish and spare the motor and cutters." },
     tf("Un guide (fence) bien réglé est essentiel pour des coupes droites et répétables.",
        "A properly set fence is essential for straight, repeatable cuts.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Une planche gauchie doit être transformée en pièce plate et d'épaisseur uniforme.\n\nDans quel ordre utilises-tu les machines?",
       "A warped board must become flat and of uniform thickness.\n\nIn what order do you use the machines?", [
        ch("Dégauchisseuse (face + chant), puis raboteuse (épaisseur), puis scie (largeur/longueur)", "Jointer (face + edge), then planer (thickness), then saw (width/length)", true),
        ch("Raboteuse d'abord sur une planche gauchie, puis rien d'autre", "Planer first on a warped board, then nothing else", false),
        ch("Toupie d'abord, puis dégauchisseuse", "Shaper first, then jointer", false),
        ch("Ponçage seulement", "Sanding only", false)
       ]),
     { "fr": "Pourquoi ne devrait-on pas envoyer une planche gauchie directement dans la raboteuse sans la dégauchir?",
       "en": "Why shouldn't you send a warped board straight through the planer without jointing it first?",
       "choices": [
        ch("Parce que la raboteuse suit le gauchissement et ne rend pas la planche vraiment plate", "Because the planer follows the warp and won't make the board truly flat", true),
        ch("Parce que la raboteuse teinte le bois", "Because the planer stains the wood", false),
        ch("Parce que ça affûte les fers", "Because it sharpens the cutters", false),
        ch("Il n'y a aucun problème à le faire", "There's no problem doing it", false)
       ],
       "explFr": "Sans une face de référence plane (créée par la dégauchisseuse), la raboteuse reproduit le gauchissement au lieu de le corriger.",
       "explEn": "Without a flat reference face (created by the jointer), the planer copies the warp instead of correcting it." },
     tf("Utiliser des poussoirs et garder les mains hors de la trajectoire des lames est obligatoire sur les machines à bois.",
        "Using push blocks and keeping hands out of the blade path is mandatory on woodworking machines.", true),
     match("Associe chaque défaut de coupe à une cause probable.", "Match each cutting defect to a likely cause.", [
        pair("Arrachement (tearout)", "Tearout", "Coupe à contre-fil ou fers émoussés", "Cutting against grain or dull cutters"),
        pair("Brûlure du bois", "Burn marks", "Avance trop lente ou lame émoussée", "Feed too slow or dull blade"),
        pair("Coupe non d'équerre", "Out-of-square cut", "Guide mal réglé", "Misadjusted fence"),
        pair("Épaisseur inégale", "Uneven thickness", "Réglage de raboteuse incorrect", "Incorrect planer setting")
     ]),
     tf("Entretenir et affûter régulièrement les lames et les fers améliore la sécurité et la qualité.",
        "Regularly maintaining and sharpening blades and cutters improves safety and quality.", true)
   ]}
  ]
 },
 {
  "id": "eben06", "order": 6, "code": "5030-06", "hours": 120,
  "title_fr": "Assemblages (tenon-mortaise, queue d'aronde)", "title_en": "Joinery (mortise-and-tenon, dovetail)", "icon": "🪵",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Qu'est-ce qu'un assemblage à tenon et mortaise?",
       "en": "What is a mortise-and-tenon joint?",
       "choices": [
        ch("Un tenon (languette) qui s'insère dans une mortaise (cavité) pour un joint solide", "A tenon (tongue) that fits into a mortise (cavity) for a strong joint", true),
        ch("Deux planches simplement posées l'une sur l'autre", "Two boards simply laid on top of each other", false),
        ch("Un type de vernis", "A type of varnish", false),
        ch("Une essence de bois", "A wood species", false)
       ],
       "explFr": "Le tenon-mortaise est un assemblage traditionnel très résistant, utilisé notamment pour les cadres et les pieds de meubles.",
       "explEn": "The mortise-and-tenon is a very strong traditional joint, used notably for frames and furniture legs." },
     { "fr": "L'assemblage à queue d'aronde (dovetail) est réputé pour...",
       "en": "The dovetail joint is renowned for...",
       "choices": [
        ch("Sa grande résistance à la traction, idéal pour les coins de tiroirs", "Its strong resistance to pulling apart, ideal for drawer corners", true),
        ch("Sa faiblesse", "Its weakness", false),
        ch("Être invisible et sans intérêt", "Being invisible and pointless", false),
        ch("Remplacer la teinture", "Replacing stain", false)
       ],
       "explFr": "La forme évasée des queues d'aronde empêche les pièces de se séparer par traction : c'est le joint classique des tiroirs de qualité.",
       "explEn": "The flared shape of dovetails prevents the parts from pulling apart: it's the classic joint of quality drawers." },
     tf("Une colle à bois appropriée renforce la plupart des assemblages en ébénisterie.",
        "An appropriate wood glue reinforces most cabinetmaking joints.", true),
     tf("Un assemblage bien ajusté ne devrait laisser aucun jeu excessif entre les pièces.",
        "A well-fitted joint should leave no excessive gap between the parts.", false),
     { "fr": "Qu'est-ce qu'un serre-joint (clamp) sert à faire lors d'un assemblage?",
       "en": "What is a clamp used for during assembly?",
       "choices": [
        ch("Maintenir les pièces serrées pendant que la colle prend", "Hold the parts tight while the glue sets", true),
        ch("Couper le bois", "Cut the wood", false),
        ch("Mesurer les angles", "Measure angles", false),
        ch("Teindre le bois", "Stain the wood", false)
       ],
       "explFr": "Les serre-joints maintiennent la pression et l'alignement des pièces le temps du séchage de la colle.",
       "explEn": "Clamps maintain pressure and alignment of the parts while the glue dries." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque assemblage à son usage typique.", "Match each joint to its typical use.", [
        pair("Tenon-mortaise", "Mortise-and-tenon", "Cadres et pieds", "Frames and legs"),
        pair("Queue d'aronde", "Dovetail", "Coins de tiroirs", "Drawer corners"),
        pair("Rainure et languette", "Groove and tongue", "Panneaux et fonds", "Panels and backs"),
        pair("Assemblage à onglet", "Miter joint", "Coins de cadres à 45°", "45° frame corners")
     ]),
     { "fr": "Pourquoi laisser un panneau « flotter » dans une rainure de cadre plutôt que de le coller partout?",
       "en": "Why let a panel 'float' in a frame groove rather than gluing it all around?",
       "choices": [
        ch("Pour permettre au bois de bouger avec l'humidité sans fendre le cadre", "To let the wood move with humidity without splitting the frame", true),
        ch("Pour économiser la colle uniquement", "Only to save glue", false),
        ch("Parce que c'est plus rapide", "Because it's faster", false),
        ch("Ça n'a aucune raison technique", "It has no technical reason", false)
       ],
       "explFr": "Un panneau de bois massif gonfle et retreint; le laisser flotter dans la rainure évite les fentes et les déformations du cadre.",
       "explEn": "A solid wood panel swells and shrinks; letting it float in the groove prevents splits and frame distortion." },
     tf("Un temps de serrage et de séchage suffisant est nécessaire pour que la colle atteigne sa pleine résistance.",
        "Adequate clamping and drying time is needed for the glue to reach full strength.", true),
     { "fr": "Qu'est-ce qu'un « tourillon » (dowel) dans un assemblage?",
       "en": "What is a 'dowel' in a joint?",
       "choices": [
        ch("Une cheville de bois cylindrique qui aligne et renforce le joint", "A cylindrical wood pin that aligns and reinforces the joint", true),
        ch("Un type de vernis", "A type of varnish", false),
        ch("Une scie spéciale", "A special saw", false),
        ch("Un défaut du bois", "A wood defect", false)
       ],
       "explFr": "Le tourillon s'insère dans des trous percés dans les deux pièces pour les aligner et ajouter de la résistance à l'assemblage.",
       "explEn": "A dowel fits into holes drilled in both pieces to align them and add strength to the joint." },
     tf("Essuyer l'excès de colle avant qu'elle sèche évite les taches qui empêchent la teinture de pénétrer.",
        "Wiping excess glue before it dries avoids stains that block stain penetration.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Tu fabriques un tiroir de qualité qui subira beaucoup de traction à l'ouverture.\n\nQuel assemblage de coin choisis-tu en priorité?",
       "You're building a quality drawer that will take a lot of pulling force when opened.\n\nWhich corner joint do you favor?", [
        ch("La queue d'aronde, pour sa résistance à la traction", "The dovetail, for its resistance to pulling apart", true),
        ch("Deux planches simplement clouées bout à bout", "Two boards simply nailed end to end", false),
        ch("De la colle seule sans assemblage", "Glue alone with no joint", false),
        ch("Un assemblage à onglet non renforcé", "An unreinforced miter joint", false)
       ]),
     scenario("Après l'assemblage à sec, ton cadre à tenon-mortaise n'est pas d'équerre.\n\nQue fais-tu avant de coller définitivement?",
       "After a dry fit, your mortise-and-tenon frame isn't square.\n\nWhat do you do before final gluing?", [
        ch("Vérifier les épaulements des tenons, ajuster, et contrôler l'équerrage avant collage", "Check the tenon shoulders, adjust, and verify squareness before gluing", true),
        ch("Coller quand même et forcer", "Glue anyway and force it", false),
        ch("Ignorer l'équerrage", "Ignore the squareness", false),
        ch("Ajouter beaucoup de colle pour combler", "Add lots of glue to fill the gap", false)
       ]),
     tf("Un assemblage mal ajusté que l'on force au serrage peut fendre le bois ou déformer le meuble.",
        "A poorly fitted joint forced during clamping can split the wood or distort the piece.", true),
     { "fr": "Pourquoi faire un montage à sec (sans colle) avant l'assemblage définitif d'un meuble complexe?",
       "en": "Why do a dry fit (without glue) before the final assembly of a complex piece?",
       "choices": [
        ch("Pour vérifier l'ajustement, l'équerrage et préparer les serre-joints avant que la colle prenne", "To check fit, squareness and prepare clamps before the glue sets", true),
        ch("Pour user les pièces", "To wear out the parts", false),
        ch("Pour perdre du temps", "To waste time", false),
        ch("Ça ne sert à rien", "It's pointless", false)
       ],
       "explFr": "Le montage à sec révèle les problèmes d'ajustement quand il est encore temps de corriger, avant le stress du collage chronométré.",
       "explEn": "A dry fit reveals fit problems while there's still time to correct, before the time pressure of gluing." },
     tf("La résistance d'un assemblage dépend à la fois de la qualité de l'ajustement et du collage.",
        "A joint's strength depends on both the quality of the fit and of the gluing.", true)
   ]}
  ]
 },
 {
  "id": "eben07", "order": 7, "code": "5030-07", "hours": 90,
  "title_fr": "Placage, panneaux et montage de caissons", "title_en": "Veneering, Panels and Cabinet Assembly", "icon": "🗄️",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Qu'est-ce que le placage (veneer)?",
       "en": "What is veneer?",
       "choices": [
        ch("Une fine feuille de bois collée sur un support pour l'apparence d'une belle essence", "A thin sheet of wood glued to a substrate for the look of a fine species", true),
        ch("Un type de colle", "A type of glue", false),
        ch("Une machine de coupe", "A cutting machine", false),
        ch("Un vernis épais", "A thick varnish", false)
       ],
       "explFr": "Le placage est une mince feuille de bois noble collée sur un panneau stable (contreplaqué, MDF) pour l'esthétique et l'économie.",
       "explEn": "Veneer is a thin sheet of fine wood glued to a stable panel (plywood, MDF) for aesthetics and economy." },
     { "fr": "Qu'est-ce qu'un caisson (carcasse) en ébénisterie?",
       "en": "What is a cabinet box (carcass) in cabinetmaking?",
       "choices": [
        ch("La structure de base d'une armoire ou d'un meuble (côtés, dessus, dessous, fond)", "The basic structure of a cabinet or piece (sides, top, bottom, back)", true),
        ch("La poignée de porte", "The door handle", false),
        ch("Le vernis final", "The final varnish", false),
        ch("Un outil de mesure", "A measuring tool", false)
       ],
       "explFr": "Le caisson est la boîte de base à laquelle s'ajoutent portes, tablettes et tiroirs.",
       "explEn": "The carcass is the basic box to which doors, shelves and drawers are added." },
     tf("Poser une bande de chant (chant plaqué) cache la tranche visible d'un panneau de contreplaqué ou de MDF.",
        "Applying edge banding hides the visible edge of a plywood or MDF panel.", true),
     tf("L'équerrage d'un caisson n'a aucune importance pour la pose des portes.",
        "A cabinet box's squareness has no importance for fitting the doors.", false),
     { "fr": "Pourquoi vérifier la diagonale d'un caisson lors du montage?",
       "en": "Why check a cabinet box's diagonals during assembly?",
       "choices": [
        ch("Pour s'assurer qu'il est d'équerre (diagonales égales = angles droits)", "To ensure it's square (equal diagonals = right angles)", true),
        ch("Pour mesurer le poids", "To measure the weight", false),
        ch("Pour choisir la couleur", "To choose the color", false),
        ch("Ça ne sert à rien", "It's pointless", false)
       ],
       "explFr": "Si les deux diagonales d'un rectangle sont égales, le caisson est d'équerre : c'est un contrôle rapide essentiel avant que la colle prenne.",
       "explEn": "If a rectangle's two diagonals are equal, the box is square: it's an essential quick check before the glue sets." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque élément de meuble à sa fonction.", "Match each furniture element to its function.", [
        pair("Caisson", "Carcass", "Structure de base", "Basic structure"),
        pair("Façade / porte", "Front / door", "Ferme et habille le meuble", "Closes and dresses the piece"),
        pair("Tablette", "Shelf", "Support de rangement", "Storage surface"),
        pair("Chant plaqué", "Edge banding", "Recouvre la tranche du panneau", "Covers the panel edge")
     ]),
     { "fr": "Pourquoi coller le placage sous pression uniforme (presse ou sacs à vide)?",
       "en": "Why glue veneer under uniform pressure (press or vacuum bags)?",
       "choices": [
        ch("Pour un collage complet sans bulles ni décollement", "For a complete bond with no bubbles or lifting", true),
        ch("Pour teindre le bois", "To stain the wood", false),
        ch("Pour couper le panneau", "To cut the panel", false),
        ch("Ça n'a pas d'importance", "It doesn't matter", false)
       ],
       "explFr": "Une pression uniforme assure un contact complet colle/bois et évite les cloques ou les zones non collées.",
       "explEn": "Uniform pressure ensures full glue-to-wood contact and prevents blisters or unbonded areas." },
     tf("Le sens du placage (fil, appariement des feuilles) influence l'apparence finale du meuble.",
        "The veneer direction (grain, sheet matching) affects the piece's final appearance.", true),
     { "fr": "Pour un caisson qui recevra des charges lourdes, quel fond est le plus solide?",
       "en": "For a cabinet that will carry heavy loads, which back is strongest?",
       "choices": [
        ch("Un fond encastré dans une rainure plutôt que simplement cloué à l'arrière", "A back set into a groove rather than merely nailed to the rear", true),
        ch("Un fond en carton", "A cardboard back", false),
        ch("Aucun fond du tout", "No back at all", false),
        ch("Un fond seulement scotché", "A back only taped on", false)
       ],
       "explFr": "Un fond encastré dans une rainure rigidifie le caisson et l'aide à rester d'équerre sous charge.",
       "explEn": "A back set into a groove stiffens the box and helps it stay square under load." },
     tf("Assembler un caisson sur une surface plane facilite l'obtention d'un meuble d'équerre.",
        "Assembling a cabinet on a flat surface makes it easier to get a square piece.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Après collage, tu mesures les deux diagonales de ton caisson : 812 mm d'un côté, 806 mm de l'autre.\n\nQu'est-ce que cela indique et que fais-tu?",
       "After gluing, you measure the box's two diagonals: 812 mm on one side, 806 mm on the other.\n\nWhat does this indicate and what do you do?", [
        ch("Le caisson n'est pas d'équerre; ajuster la pression des serre-joints avant que la colle durcisse", "The box isn't square; adjust clamp pressure before the glue hardens", true),
        ch("Le caisson est parfait, ne rien faire", "The box is perfect, do nothing", false),
        ch("Ajouter du vernis pour corriger", "Add varnish to fix it", false),
        ch("Couper une diagonale", "Cut one diagonal", false)
       ]),
     { "fr": "Une bulle apparaît sous le placage après collage. Quelle en est la cause probable?",
       "en": "A bubble appears under the veneer after gluing. What is the likely cause?",
       "choices": [
        ch("Un manque de colle ou de pression à cet endroit", "A lack of glue or pressure at that spot", true),
        ch("Trop de vernis", "Too much varnish", false),
        ch("Le bois est trop dur", "The wood is too hard", false),
        ch("Le caisson est trop léger", "The box is too light", false)
       ],
       "explFr": "Une cloque signale un collage incomplet (colle ou pression insuffisante); on peut parfois la réactiver à la chaleur et recoller.",
       "explEn": "A blister signals incomplete bonding (insufficient glue or pressure); it can sometimes be reactivated with heat and re-bonded." },
     tf("Un caisson qui n'est pas d'équerre complique la pose des portes et des tiroirs.",
        "A box that isn't square makes fitting doors and drawers difficult.", true),
     match("Associe chaque problème de montage à sa cause.", "Match each assembly problem to its cause.", [
        pair("Caisson en losange", "Racked box", "Serrage inégal / pas d'équerrage", "Uneven clamping / not squared"),
        pair("Cloque de placage", "Veneer blister", "Colle ou pression insuffisante", "Insufficient glue or pressure"),
        pair("Porte qui frotte", "Rubbing door", "Caisson déformé ou charnières mal réglées", "Distorted box or misadjusted hinges"),
        pair("Chant décollé", "Lifting edge band", "Chaleur ou colle insuffisante", "Heat or insufficient glue")
     ]),
     tf("Contrôler l'équerrage et les diagonales pendant le montage évite des corrections coûteuses plus tard.",
        "Checking squareness and diagonals during assembly avoids costly corrections later.", true)
   ]}
  ]
 },
 {
  "id": "eben08", "order": 8, "code": "5030-08", "hours": 75,
  "title_fr": "Finition et quincaillerie", "title_en": "Finishing and Hardware", "icon": "🎨",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Pourquoi ponce-t-on le bois avant d'appliquer une finition?",
       "en": "Why sand wood before applying a finish?",
       "choices": [
        ch("Pour lisser la surface et permettre une application uniforme de la teinture/vernis", "To smooth the surface and allow even application of stain/varnish", true),
        ch("Pour salir le bois", "To dirty the wood", false),
        ch("Pour le rendre plus foncé de lui-même", "To darken it by itself", false),
        ch("Ça ne sert à rien", "It's pointless", false)
       ],
       "explFr": "Un ponçage progressif (grain de plus en plus fin) élimine les marques et prépare une surface lisse pour un fini uniforme.",
       "explEn": "Progressive sanding (finer and finer grit) removes marks and prepares a smooth surface for an even finish." },
     { "fr": "À quoi sert une teinture (stain) à bois?",
       "en": "What is wood stain used for?",
       "choices": [
        ch("Colorer le bois tout en laissant voir son grain", "Color the wood while still showing its grain", true),
        ch("Rendre le bois imperméable seulement", "Only make the wood waterproof", false),
        ch("Assembler les pièces", "Assemble the pieces", false),
        ch("Couper le bois", "Cut the wood", false)
       ],
       "explFr": "La teinture modifie la couleur du bois en laissant transparaître le grain; elle ne protège pas à elle seule (un vernis vient ensuite).",
       "explEn": "Stain changes the wood's color while letting the grain show through; it doesn't protect on its own (a topcoat follows)." },
     tf("Le vernis, la laque et l'huile sont des produits de finition qui protègent le bois.",
        "Varnish, lacquer and oil are finishing products that protect wood.", true),
     tf("On ponce toujours en travers du fil pour un meilleur fini.",
        "You always sand across the grain for a better finish.", false),
     { "fr": "Que désigne la « quincaillerie » d'un meuble?",
       "en": "What does furniture 'hardware' refer to?",
       "choices": [
        ch("Les charnières, poignées, coulisses de tiroir et vis", "The hinges, handles, drawer slides and screws", true),
        ch("Le vernis", "The varnish", false),
        ch("Le placage", "The veneer", false),
        ch("La teinture", "The stain", false)
       ],
       "explFr": "La quincaillerie regroupe les pièces fonctionnelles : charnières, poignées, coulisses, systèmes de fermeture.",
       "explEn": "Hardware covers the functional parts: hinges, handles, slides, closing systems." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque produit de finition à sa caractéristique.", "Match each finishing product to its characteristic.", [
        pair("Teinture", "Stain", "Colore sans réellement protéger", "Colors without really protecting"),
        pair("Vernis", "Varnish", "Film protecteur durable", "Durable protective film"),
        pair("Laque", "Lacquer", "Séchage rapide, fini lisse", "Fast drying, smooth finish"),
        pair("Huile", "Oil", "Pénètre et nourrit le bois", "Penetrates and nourishes the wood")
     ]),
     { "fr": "Pourquoi appliquer plusieurs couches minces de vernis plutôt qu'une seule couche épaisse?",
       "en": "Why apply several thin coats of varnish rather than one thick coat?",
       "choices": [
        ch("Pour un fini plus uniforme, moins de coulures et un meilleur séchage", "For a more even finish, fewer runs and better drying", true),
        ch("Pour gaspiller le produit", "To waste product", false),
        ch("Pour rendre le meuble collant", "To make the piece sticky", false),
        ch("Ça n'a aucun effet", "It has no effect", false)
       ],
       "explFr": "Des couches minces sèchent mieux, coulent moins et, avec un léger ponçage entre les couches, donnent un fini lisse et durable.",
       "explEn": "Thin coats dry better, run less and, with light sanding between coats, give a smooth, durable finish." },
     tf("Un léger ponçage (égrenage) entre les couches de vernis améliore l'adhérence et la douceur du fini.",
        "Light sanding between varnish coats improves adhesion and smoothness of the finish.", true),
     { "fr": "À quoi servent des coulisses (glissières) de tiroir?",
       "en": "What are drawer slides used for?",
       "choices": [
        ch("Permettre au tiroir de s'ouvrir et se fermer en douceur", "Let the drawer open and close smoothly", true),
        ch("Teindre le tiroir", "Stain the drawer", false),
        ch("Coller le fond", "Glue the bottom", false),
        ch("Décorer la façade uniquement", "Only decorate the front", false)
       ],
       "explFr": "Les coulisses guident le tiroir; leur bon alignement et un jeu adéquat assurent un mouvement fluide.",
       "explEn": "Slides guide the drawer; proper alignment and adequate clearance ensure smooth movement." },
     tf("La finition d'un meuble se fait généralement dans un endroit propre et sans poussière.",
        "A piece is generally finished in a clean, dust-free area.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Ta première couche de vernis présente de petites poussières et une légère rugosité au toucher.\n\nQue fais-tu avant la couche suivante?",
       "Your first varnish coat has small dust specks and a slight roughness to the touch.\n\nWhat do you do before the next coat?", [
        ch("Un léger égrenage au papier fin, dépoussiérer, puis appliquer la couche suivante", "Lightly sand with fine paper, remove dust, then apply the next coat", true),
        ch("Appliquer directement une couche épaisse par-dessus", "Apply a thick coat directly over it", false),
        ch("Poncer jusqu'au bois nu partout", "Sand back to bare wood everywhere", false),
        ch("Ne rien faire et livrer", "Do nothing and deliver", false)
       ]),
     scenario("Tu poses une porte d'armoire, mais elle frotte contre le caisson et ne ferme pas bien.\n\nQuelle est la première vérification?",
       "You hang a cabinet door, but it rubs against the box and doesn't close well.\n\nWhat's the first thing to check?", [
        ch("Le réglage des charnières et l'équerrage du caisson", "The hinge adjustment and the box's squareness", true),
        ch("La couleur de la teinture", "The color of the stain", false),
        ch("Le type de bois", "The type of wood", false),
        ch("Le poids du client", "The client's weight", false)
       ]),
     tf("Une teinture appliquée sur un bois mal poncé ou taché de colle donnera un fini inégal.",
        "Stain applied on poorly sanded or glue-stained wood will give an uneven finish.", true),
     { "fr": "Pourquoi tester la teinture et le vernis sur une chute de la même essence avant de les appliquer sur le meuble?",
       "en": "Why test the stain and varnish on a scrap of the same species before applying them to the piece?",
       "choices": [
        ch("Parce que la couleur finale varie selon l'essence et le nombre de couches", "Because the final color varies with the species and number of coats", true),
        ch("Pour gaspiller la teinture", "To waste stain", false),
        ch("Parce que c'est obligatoire par la loi", "Because it's required by law", false),
        ch("Ça ne change rien", "It makes no difference", false)
       ],
       "explFr": "Un essai sur une chute identique montre le rendu réel (couleur, absorption) et évite les mauvaises surprises sur le meuble fini.",
       "explEn": "A test on an identical scrap shows the true result (color, absorption) and avoids surprises on the finished piece." },
     tf("Charnières et poignées de qualité, bien installées, contribuent à la durabilité et à l'apparence du meuble.",
        "Quality hinges and handles, properly installed, contribute to a piece's durability and appearance.", true)
   ]}
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "ÉbénisterieQuest",
    tagline: "Deviens ébéniste — DEP 5030",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "ÉbénisterieQuest",
    tagline: "Become a cabinetmaker — DVS 5030",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
