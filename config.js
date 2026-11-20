// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Evaluating AV Integration at Sheppard Ave W & Yonge St | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    courseTag: "SMRTTECH 4SC3",

    tagline: "Course Project: Smart Cities and Communities",

    studentName: "FirstName LastName",
    program: "Automation Systems Engineering Technology",
    university: "McMaster University",
    email: "lastnamefirstinitial@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
    footerBg: "#111111",
    footerText: "#ffffff",
    footerBorder: "#222222",

    homeLinkText: "RoadwayVR",

    templateCredit:
      "This academic showcase template was developed by RoadwayVR.",

    templateCreditLinkText:
      "Learn more at RoadwayVR.com",

    templateCreditUrl:
      "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Evaluating AV Integration and Intersection Efficiency at Sheppard Ave W & Yonge St: A SUMO-Based Traffic Simulation and Demand Analysis",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): Base Scenario: 100% HDV → Scenario 1: 100% AV/CAV (Sheppard Ave W & Yonge St intersection)"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "A digital roadway and traffic model creates a virtual replica of the Sheppard Avenue West & Yonge Street intersection in Toronto, allowing the effects of traffic to be simulated.",
      "Traffic simulation platforms such as SUMO allow engineers to model individual vehicle dynamics while evaluating alternative strategies to control traffic, from signal timing plans to HDV and CAV deployment.",
      "Modifying traffic composition to a 100% CAV fleet alters small, but accumulative, human-based driving behaviors such as reaction times, lane change frequency, minimum gaps, and acceleration dynamics, which can fundamentally shift the speed-density relationship on a given roadway.",
      "The significance of simulating autonomous vehicle implementation in comparison to a human baseline is to observe any improvements, deteriorations, or stagnation in traffic conditions, providing quantifiable evidence before municipal capital investments are made."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "The municipal transportation authority facing peak-period congestion must evaluate engineering solutions prior to any financial investments can be made.",
      "Human driving behavior introduces unpredictable variance in traffic streams, including perception delays, inconsistent acceleration and braking, and large vehicle gaps.",
      "These behaviors drive 'phantom congestion', a phenomenon that significantly impacts traffic efficiency, safety, and sustainability.",
      "Quantitative before-and-after evidence is required before signal retiming interventions or full CAV fleet deployment can be considered."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Select the study area: the signalized Sheppard Avenue West & Yonge Street intersection in Toronto, Ontario, and develop its digital road network and traffic model in SUMO.",
      "Characterize the 100% HDV baseline (Scenario A) speed-density relationship on the selected major-road edge (E145).",
      "Compare and evaluate the selected major-road edge speed-density relationship under 100% HDV conditions (Scenario A) versus 100% CAV conditions (Scenario B).",
      "Select, justify, implement, and evaluate Intervention X (Scenario C with altered TLS phases and green signal timings) by comparing speed-density observations on the same selected major-road edge before and after the TLS modification."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Study Area Selection (GIS + SUMO)",
        text: "Select and digitize the Sheppard Ave W & Yonge St intersection using GIS imagery and netedit.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: HDV Baseline Development (SUMO)",
        text: "Build and run the 100% HDV baseline (Scenario A) with peak-period demand and baseline signal timing.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Scenario Testing (SUMO)",
        text: "Simulate 100% CAV conditions (Scenario B) and Intervention X signal retiming (Scenario C) on edge E145.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Results & Communication",
        text: "Analyze speed-density fits and present KPIs and figures through the showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Study Area Selection & Network Development (SUMO)",
        bullets: [
          { text: "Selected the signalized Sheppard Ave W & Yonge St intersection in Toronto as the study area." },
          { text: "Digitized major and local road geometry, turning lanes, and junction connections in netedit using aerial imagery and GIS layers." },
          { text: "Resolved TLS phase-alignment and upstream lane-sorting challenges to remove artificial demand bottlenecks." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: HDV Baseline Characterization (Scenario A)",
        bullets: [
          { text: "Applied peak-period demand of 300 veh/h through and 150 veh/h turning movements with the baseline signal timing plan." },
          { text: "Placed induction loop detectors on edge E145, aggregating speed, flow, and density at 60-second intervals." },
          { text: "Ran the 3,600-second simulation (300-second warmup) and fitted the baseline speed-density relationship (vf = 14.14 m/s, kj = 259.2 veh/km)." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: CAV Scenario & Intervention X (Scenarios B & C)",
        bullets: [
          { text: "Configured Scenario B by replacing HDV parameters with CAV parameters (τ = 0.5 s, σ = 0.0, s0 = 1.0 m) while holding geometry, demand, and signal timing constant." },
          { text: "Designed Intervention X: an 8-second advanced green for left turns within a constant 60-second cycle, reducing through-traffic green to 19 seconds." },
          { text: "Executed both scenarios and extracted speed-density observations on the same edge for before-and-after comparison." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Compared fitted free-flow speed (vf) and jam density (kj) across Scenarios A, B, and C." },
          { text: "Compiled figures, KPIs, and a scenario story covering improvements, tradeoffs, and limitations." },
          { text: "Presented methods and findings through this web showcase with clear academic attribution." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements",
    subtitle:
      "Speed-density analysis on the selected major-road edge (E145) comparing the 100% HDV base scenario with Scenario 1 (100% CAV). Results are simulation-based and for educational purposes only.",

    charts: {
      left: {
        title: "Base Scenario (100% HDV) — Edge E145 Speed-Density",
        src: "assets/img/image6.jpg",
        alt: "Base scenario speed-density diagram for edge E145 showing two-regime traffic with congestion clusters near jam density"
      },
      right: {
        title: "Scenario 1 (100% CAV) — Edge E145 Speed-Density",
        src: "assets/img/image7.jpg",
        alt: "Scenario 1 speed-density diagram for edge E145 showing free-flow clustering with no congested data points"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "The 100% HDV baseline showed a two-regime profile with severe queueing near jam density (kj = 259.2 veh/km, vf = 14.14 m/s, R² = 0.963).",
      "The 100% CAV scenario eliminated congestion at the tested demand level, clustering entirely in the free-flow regime (vf = 15.71 m/s); its fitted kj of 118.7 veh/km is extrapolated and unverified.",
      "Intervention X flushed the approach queues, raising free-flow speed to 16.84 m/s and lowering fitted jam density to 79.4 veh/km.",
      "Because green time was reallocated from the cross street, some delays may simply have been transferred, so cross-street delay analysis is needed before recommending Intervention X.",
      "Uncalibrated synthetic demand, idealized CAV assumptions, and single-edge scope mean network-wide evaluation and field calibration are required before any municipal investment."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "FirstName LastName", role: "Study Area Selection & SUMO Network Development; Scenario Simulation (HDV / CAV / Intervention X); Results Analysis & Web Showcase" }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3 — Smart Cities and Communities",
      "Institution: McMaster University, W Booth School of Engineering Practice and Technology",
      "Course Instructor: Dr. Marjan Alavi",
      "Lab Instructor: Dr. Ahmad Mohammadi",
      "Tools: SUMO, netedit, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/c4narius/USERNAME.github.io"
  }
};
