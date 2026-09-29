/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Timothy Seah | Portfolio",
  description:
    "SUTD Computer Science and Design student building practical AI systems. Eight months of software engineering at P&G, award-winning hackathon work, and a global Top 10 CTF finish.",
  og: {
    title: "Timothy Seah | Portfolio",
    type: "website",
    url: "https://TimSeah.github.io",
  },
};

//Home Page
const greeting = {
  title: "Timothy Seah",
  logo_name: "TimothySeah",
  nickname: "佘凯乐",
  subTitle:
    "I'm a CS student engineering secure, real-world AI systems. Recently wrapped up an 8-month SWE internship at P&G. Outside the classroom, I ship ML projects and compete in hackathons and CTFs.",
  resumeLink:
    "https://drive.google.com/file/d/1FwUgPVrbcBUqk_FUyMvGNg0k4BTBeAOo/view?usp=sharing", // Replace with your actual resume link
  portfolio_repository:
    "https://drive.google.com/file/d/1FwUgPVrbcBUqk_FUyMvGNg0k4BTBeAOo/view?usp=sharing",
  githubProfile: "https://github.com/TimSeah",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/TimSeah",
  // linkedin: "https://www.linkedin.com/in/timothy-seah-kai-le/",
  // gmail: "timothyseahkl@gmail.com",
  // gitlab: "https://gitlab.com/TimSeah",
  // facebook: "https://www.facebook.com/username/",
  // twitter: "https://twitter.com/username",
  // instagram: "https://www.instagram.com/username/"

  {
    name: "Github",
    link: "https://github.com/TimSeah",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/timothy-seah-kai-le/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/username",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:timothyseahkl@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/username",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/username/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/username/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Built enterprise AI workflows with Copilot Studio, MCP, and Veeva Vault APIs at P&G",
        "⚡ Researched LLM handling of conflicting information in RAG models for automated fact-checking",
        "⚡ Trained and evaluated an OpenCLIP image detector across real-world transformations; built vision, OCR, and speech prototypes",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Ultralytics YOLO",
          fontAwesomeClassname: "simple-icons:ultralytics",
          style: {
            color: "#111F68",
          },
        },
        {
          skillName: "PaddleOCR",
          fontAwesomeClassname: "simple-icons:paddlepaddle",
          style: {
            color: "#2932E1",
          },
        },
      ],
    },
    {
      title: "CyberSecurity",
      fileName: "CyberSecurityImg",
      skills: [
        "⚡ Top 10 Global Finalist in AWS Skills to Jobs CTF 2025, powered by SANS",
        "⚡ Competed in TISC 2026; previously placed 8th overall in the SSMCTF 2025 Open Category",
        "⚡ Authored technical write-ups and mentored junior cybersecurity enthusiasts in SUTD's Google Developer Club",
      ],
      softwareSkills: [
        {
          skillName: "Burp Suite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          // imageSrc: "BurpSuite.png",
          style: {
            color: "#FF6633",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "skill-icons:kali-dark",
          style: {
            color: "#557C94",
          },
        },
        {
          skillName: "Ghidra",
          imageSrc: "ghidra_logo.svg",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed responsive front-end applications using ReactJS and TypeScript",
        "⚡ Built Python/FastAPI services and Node.js MCP tools for AI applications",
        "⚡ Integrated PostgreSQL/pgvector retrieval, grounded explanations, and user-confirmed workflow changes",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deployed AI workflows on GCP and Amazon EC2, using Docker for scalable containerization",
        "⚡ Proficient in Docker for consistent application deployments",
        "⚡ Experienced with cloud infrastructure for hosting applications and database integration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "CAD & UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Proficient in mechanical system design using Fusion360 for robotics projects",
        "⚡ Skilled in designing intuitive web and mobile user interfaces with Figma",
        "⚡ Experienced in Java-based Android mobile application development using Android Studio",
      ],
      softwareSkills: [
        {
          skillName: "Fusion 360",
          fontAwesomeClassname: "devicon:fusion",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "devicon:photoshop",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/lolkabash/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/lolkabash",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/lolkabash",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/lolkabash",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/lolkabash",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/lolkabash",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Singapore University of Technology and Design (SUTD)",
      subtitle:
        "Bachelor of Engineering in Computer Science and Design, Minor in Artificial Intelligence",
      logo_path: "SUTD.png",
      alt_name: "SUTD",
      duration: "Sep 2023 - May 2027",
      descriptions: [
        "⚡ Focus Track: Security, CGPA 4.67/5.00",
        "⚡ Ensign InfoSecurity — SUTD Scholarship Holder (Bond Free)",
        "⚡ Relevant Courses: Python, Java OOP, Android Software Development, Data Structure & Algorithms, Operating System & Networks, Computation Structures, Introduction to Cybersecurity, Machine Learning.",
      ],
      website_link: "https://sutd.edu.sg",
    },
    {
      title: "The University of British Columbia (UBC)",
      subtitle: "Global Exchange Programme, Year 3 · UBC Vancouver",
      logo_path: "UBC.png",
      alt_name: "UBC",
      duration: "Aug 2025 - Dec 2025",
      descriptions: [
        "⚡ Courses: Deep Learning (CPEN 455, A-), Introduction to Artificial Intelligence (CPSC 322, A), Introduction to Computer Networking (CPSC 317), and Introduction to Biological and Cognitive Psychology (PSYC 101).",
        "⚡ Deep learning from first principles: implemented convolution and backpropagation, a Transformer encoder, and a variational autoencoder in PyTorch. For the individual course project, turned a 135M-parameter Llama-style model into a Bayesian spam classifier, comparing zero-shot, prompting, full fine-tuning, LoRA, and prefix-tuning.",
        "⚡ Networking hands-on: built a DICT client and a DNS resolver in Java, then a POP mail server, a reliable TCP-style transport over UDP, and an IP router in C.",
        "⚡ Key learning: building models and protocols from scratch, rather than calling libraries, showed me how they behave and where they fail. Outside class, our team won Best Use of ElevenLabs at StormHacks 2025 with Carrie.",
      ],
      website_link: "https://www.ubc.ca/",
    },
    {
      title: "Yonsei University (YU)",
      subtitle: "Summer Programme",
      logo_path: "Yonsei.png",
      alt_name: "YU",
      duration: "Jun 2024 - Jul 2024",
      descriptions: [
        "⚡ Enhanced understanding of social behavior through a course in Social Psychology.",
        "⚡ Improved Korean language proficiency and gained deeper cultural insights.",
      ],
      website_link: "https://www.yonsei.ac.kr/",
    },
    {
      title: "Chongqing University (CQU)",
      subtitle: "Freshmore Asian Cross-curricular Trips (FACT)",
      logo_path: "Chongqing_University.png",
      alt_name: "CQU",
      duration: "Aug 2024 - Sep 2024",
      descriptions: [
        "⚡ Developed cross-cultural communication skills through interactions with Chinese professors and classmates.",
        "⚡ Learned data manipulation, analysis techniques, and predictive modelling, applying these to optimize wireless charging technologies using AI.",
      ],
      website_link: "https://english.cqu.edu.cn/",
    },
    {
      title: "Anglo Chinese Junior College (ACJC)",
      subtitle: "GCE A-Level",
      logo_path: "ACJC.png",
      alt_name: "ACJC",
      duration: "Jan 2018 - Nov 2020",
      descriptions: [
        "⚡ GCE A-Level: H2 Computing, H2 Chemistry, H2 Mathematics, H1 Economics",
        "⚡ Served as Vice-President of the Tech Council (Computing Club) CCA.",
        "⚡ Member of the Track and Field (Javelin) CCA.",
      ],
      website_link: "https://www.acjc.moe.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AI4I® - Literacy in AI",
      subtitle: "- AI Singapore",
      logo_path: "AISG.webp",
      certificate_link:
        "https://learn.aisingapore.org/certificate-verification/815F783602-7EF95DD627-13903C506/",
      alt_name: "AI Singapore",
      color_code: "#FFFFFF99",
    },
    {
      title: "Docker",
      subtitle: "- Dell Technologies",
      logo_path: "Docker.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#384d54",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Projects and Achievements",
  description:
    "Software engineering at P&G, practical AI projects, and competitions in cybersecurity and robotics.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Procter & Gamble — Singapore Innovation Centre",
          company_url: "https://www.pg.com/",
          logo_path: "PG.png",
          duration: "Jan–Sep 2026 · 8 months",
          location: "Singapore",
          role_note:
            "Official title: Associate Research Scientist Intern · Innovation Centre Management",
          description:
            "Engineered AI tools for laboratory and operational workflows, taking projects from stakeholder discovery through architecture, implementation, testing, and demonstrations.",
          bullets: [
            "Built WorkEZ’s custom JavaScript MCP integration with Veeva Vault, connecting a Copilot Studio agent to document retrieval and change-control preparation in a working sandbox.",
            "Reduced guided change-control completion time from approximately 73 to 28 minutes in sandbox testing — a projected 135 hours of annual capacity at the observed workload.",
            "Developed hands-free lab-assistant prototypes across web, HoloLens 2, and Rokid Glasses, combining voice, visual context, and note capture.",
            "Built AI-assisted electronic lab notebook review and computer-vision prototypes for cleaning and sanitisation workflows.",
          ],
          detail_note:
            "5 January–4 September 2026. WorkEZ remains in sandbox; annual savings are projected, not realised production savings.",
          color: "#003da5",
        },
        {
          title: "Undergraduate Research Assistant",
          company: "Singapore University of Technology and Design (SUTD)",
          company_url: "https://www.sutd.edu.sg/",
          logo_path: "SUTD.png",
          duration: "May 2025 - Dec 2025",
          location: "Singapore",
          description:
            "Part of a research team exploring how 'Parsons puzzles' can be reimagined for the proof-heavy 50.004 Algorithms course, aiming to help students master asymptotic analyses and formal proofs. Mapped Big-O/Θ/Ω argument patterns into reusable drag-and-drop blocks. Developed a React web app using a Scratch-style interface (React DnD + Tailwind + KaTeX) and a rule-based engine for proof sequences. Designed a learning-impact study with pre/post assessments.",
          color: "#003D7C",
        },
        {
          title: "Undergraduate Research Assistant",
          company: "Social AI Studio (SUTD)",
          company_url: "https://www.socialai.studio/",
          logo_path: "SUTD.png",
          duration: "Oct 2024 - Dec 2024",
          location: "Singapore",
          description:
            "Collaborated in a study on Retrieval-Augmented Generation (RAG) models, resulting in the publication 'Resolving Conflicting Evidence in Automated Fact-Checking: A Study on Retrieval-Augmented LLMs'. Annotated 300+ claim-evidence pairs for the CONFACT dataset, achieving >0.80 Fleiss' kappa inter-annotator agreement.",
          color: "#003D7C",
        },
        {
          title:
            "International Baccalaureate Computer Science Tutor, Part-Time",
          company: "Mathvision Enrichment Centre Pte Ltd",
          company_url: "https://mathvision.com.sg/",
          logo_path: "MathVision.png",
          duration: "Nov 2021 - Jan 2022",
          location: "Singapore",
          description:
            "Tutored over 15 IB students pursuing the Computer Science diploma at both Standard Level and Higher Level. Onboarded and trained new teachers in Higher Level topics, including Abstract Data Structures and Computer Engineering. Authored programming practice booklets for Grade 11 and 12 students to enhance their logical thinking and programming skills.",
          color: null,
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [

    //   ],
    // },
    {
      title: "Competitions & Achievements",
      experiences: [
        {
          title: "The InfoSecurity Challenge (TISC) 2026",
          company: "Participant",
          company_url: "https://www.csit.gov.sg/events/tisc/about",
          logo_path: "CSIT.png",
          duration: "Sep 2026",
          location: "Singapore",
          description:
            "Participated in CSIT’s individual cybersecurity CTF, practising problem-solving through progressively harder security challenges.",
        },
        {
          title: "SimplifyNext Agentic AI Hackathon 2026 | CoverCheck SG",
          company: "Participant · Primary developer",
          company_url: "https://hackathon.simplifynext.com/",
          logo_path: "SimplifyNext.png",
          duration: "Aug–Sep 2026",
          location: "Singapore",
          description:
            "Led the implementation of CoverCheck SG, an insurance-readiness prototype. Built the frontend journey, FastAPI services, deterministic plan comparisons, and integration of cached brochure evidence with Bedrock explanations. Users confirm budget changes before recalculation and can undo them. Comparisons use synthetic plans; real-product brochures provide read-only context.",
        },
        {
          title: "TikTok TechJam 2026 | Real or Fake?",
          company: "Participant · Solo developer",
          company_url: "https://devpost.com/software/real-or-fake-uyxbiw",
          logo_path: "TikTok.png",
          duration: "Aug–Sep 2026",
          location: "Singapore",
          description:
            "Built and deployed an AI-image detector and a human-versus-AI game end to end. Combined frozen OpenCLIP embeddings with a trained classifier, evaluated six image transformations, and delivered a FastAPI inference service with a React showcase. Project evaluation: 0.9578 clean ROC-AUC and 0.8966 condition-weighted robust ROC-AUC on an 800-image diagnostic pool.",
        },
        {
          title: "UBS Global Coding Challenge 2026 | MCP ToolBox",
          company: "Participant · MCP developer",
          company_url:
            "https://www.nus.edu.sg/cfg/events/details/5fadb31b94935626a0c91b3fa53b583c",
          logo_path: "UBS.png",
          duration: "Aug 2026",
          location: "Singapore",
          description:
            "Built the team’s Node.js MCP ToolBox, giving an AI agent tools for study-material retrieval, route planning, venue discovery, and scheduling. Iterated on retrieval ranking, argument handling, and tool descriptions across successive challenge stages.",
        },
        {
          title: "SMU Hack4Health 2026 | ClinicPrep Assistant",
          company: "Participant · Primary developer",
          company_url: "https://luma.com/nuz1nvo9",
          logo_path: "Hack4Health.png",
          duration: "Aug 2026",
          location: "Singapore",
          description:
            "Built the core ClinicPrep Assistant prototype for team DaLongBao in Microsoft Copilot Studio, including nine conversation topics and a live Power Automate handoff to SharePoint. Designed registration, consent, and staff-escalation flows. Upstream eligibility and billing actions use mocks; staff retain identity and insurance-card verification.",
        },
        {
          title: "AWS Skills to Jobs CTF 2025",
          company: "Top 10 Global Finalist",
          company_url:
            "https://www.sans.org/press/announcements/sans-aws-team-up-expand-global-access-cybersecurity-skills",
          logo_path: "AWS.png",
          duration: "Oct 2025",
          location: "Online",
          description:
            "Placed among the Top 10 global finalists in the AWS Skills to Jobs CTF, powered by SANS, competing in hands-on cybersecurity challenges.",
        },
        {
          title: "StormHacks 2025 | Carrie",
          company: "Winner — Best Use of ElevenLabs",
          company_url:
            "https://devpost.com/software/carrie-ai-therapy-in-your-pocket",
          logo_path: "StormHacks.png",
          duration: "Oct 2025",
          location: "SFU · Burnaby, Canada",
          description:
            "Co-developed Carrie, a prototype AI wellbeing companion combining live conversation with facial-expression signals. Owned the AI/LLM and Python development and connected emotion analysis to the conversational experience. Our team won the MLH Best Use of ElevenLabs prize at SFU Surge’s StormHacks 2025.",
        },
        {
          title: "Dell Book Prize 2025 | Nurtura",
          company: "Winner — 1st Place",
          company_url: "https://github.com/TimSeah/Nurtura",
          logo_path: "Dell.png",
          duration: "Jun–Aug 2025",
          location: "Singapore University of Technology and Design (SUTD)",
          description:
            "Led a seven-engineer team to build Nurtura, a caregiving platform with care calendars, email reminders, health tracking, and a moderated community forum, developed for 50.003 Elements of Software Construction with partner Lions Befrienders Singapore. Owned the Node.js/Express/MongoDB backend, the AWS ECS/Fargate deployment with GitHub Actions CI/CD, and forum auto-moderation using MetaHateBERT further trained on Singapore hate-speech data. Won the Dell Technologies Elements of Software Construction Course Award.",
        },
        {
          title:
            "50.007 Machine Learning Kaggle Competition 2025 | Hate Speech",
          company: "Winner — 1st Place",
          company_url: "https://github.com/Kantosaurus/h8-sp33ch",
          logo_path: "Kaggle.png",
          duration: "Jun–Aug 2025",
          location: "Singapore University of Technology and Design (SUTD)",
          description:
            "Placed 1st on the class Kaggle leaderboard with a five-person team, classifying about 22,000 social-media posts as hateful or non-hateful from 5,000 TF-IDF features, scored by Macro F1. Built the team’s classical machine-learning suite of 19 models, from linear classifiers to gradient boosting, and a weighted ensemble of Extra Trees, Ridge, CatBoost, LDA, and LightGBM. The project also covered logistic regression from scratch and PCA with KNN; deep learning was not allowed.",
        },
        {
          title: "SAP S.C.A.L.E 2025 | SkyLink Airlines",
          company: "2nd Runner-Up",
          company_url: "https://github.com/TimSeah/scale2025Tech_Group5",
          logo_path: "SAP.png",
          duration: "Jun–Aug 2025",
          location: "Singapore",
          description:
            "Placed 2nd Runner-Up with a four-person team proposing an integrated SAP operations platform for SkyLink Airlines, the case’s fictional mid-sized carrier. Built the maintenance dashboard, the predictive-maintenance logic that turns aircraft risk scores into maintenance requests, and the dynamic-pricing module. The solution combined SAP UI5, Build Apps, Build Process Automation, Work Zone, and Joule.",
        },
        {
          title: "Singapore Students Merger CTF (SSMCTF) 2025",
          company: "8th Overall, Open Category",
          company_url: "https://ctf.ssmct.org/users/284",
          logo_path: "SSMCTF.png",
          duration: "June 2025",
          location: "Singapore",
          description:
            "Achieved an 8th-place finish out of 150+ global teams by solving 20+ challenges across 5 categories, exploiting vulnerabilities like JWT misconfigurations and automating flag extraction with pwntools.",
          color: "#e34c26",
        },
        {
          title: "DSTA BrainHack 2025 TIL-AI",
          company: "Semi-Finalist, Advanced Track",
          company_url: "https://github.com/TimSeah/til-25-data-chefs",
          logo_path: "DSTA.png",
          duration: "May 2025 - June 2025",
          location: "Singapore",
          description:
            "Achieved Semi-Finalist placement by tackling four diverse AI challenges within two weeks. Architected a CNN-based Deep Q-Network in PyTorch to train a 'Scout' robot for optimal maze navigation across 200,000 epochs. Developed a Computer Vision model using Ultralytics YOLOv8 and OpenCV to identify 18 classes of vehicles in real-time. Enhanced document OCR by fine-tuning PaddleOCR's SVTR model for accurate text extraction from low-quality scans. Optimized a speech-to-text pipeline using OpenAI Whisper and applied 4-bit quantization for sub-second transcription of noisy audio. All end-to-end workflows (RL, ASR, CV, OCR) were containerized on Google Cloud Platform using Docker for seamless development and submission.",
          color: "#1d6ff3",
        },
        {
          title: "Grey Cat The Flag 2025 - NUS Greyhats CTF 2025",
          company: "Top 10%, Local Category",
          company_url: "https://ctfd.nusgreyhats.org/challenges",
          logo_path: "NUS Grey Cat CTF.png",
          duration: "May 2025 - June 2025",
          location: "Singapore",
          description:
            "Obtained a Top 10% finish by reverse-engineering a custom RSA encryption scheme and exploiting XSS flaws in a web service.",
          color: "#e34c26",
        },
        {
          title:
            "50.001 Introduction to Information Systems & Programming | Centsible",
          company: "Outstanding Project Exhibit",
          company_url:
            "https://github.com/zengersoong/50.001-Introduction-to-Information-Systems---Programming",
          logo_path: "SUTD.png",
          duration: "Jan 2025 - May 2025",
          location: "Singapore University of Technology and Design (SUTD)",
          description:
            "Developed 'Centsible,' an Android app for group finance tracking, enabling transparent management of shared expenses and fostering financial accountability. Built from scratch using Java.",
          color: null,
        },
        {
          title: "50.002 Computation Structures | I Want A Sushi",
          company: "Outstanding Project Exhibit",
          company_url: "https://natalieagus.github.io/50002/",
          logo_path: "SUTD.png",
          duration: "Jan 2025 - May 2025",
          location: "Singapore University of Technology and Design (SUTD)",
          description:
            "Designed and implemented 'I Want A Sushi,' a 30-second, fast-paced arcade-style game developed from scratch on an FPGA board. This two-player, 4-lane tug-of-war game was inspired by the Nintendo Switch.",
          color: null,
        },
        {
          title: "03.007 Design Thinking and Innovation | SimplyGlow",
          company: "Top Design Award",
          company_url:
            "https://www.sutd.edu.sg/course/03-007-design-thinking-and-innovation/",
          logo_path: "SUTD.png",
          duration: "Jan 2024 - Apr 2024",
          location: "Singapore University of Technology and Design (SUTD)",
          description:
            "As Team Leader, designed and developed 'SimplyGlow,' an interactive, LED-lit train seating system aimed at fostering social interaction and creating dynamic public spaces. This project received the 'Top Design Award' for its innovative use of LED strips and motion detection, leveraging Fusion360 and Arduino for implementation.",
          color: null,
        },
        {
          title: "16th VEX Asia-Pacific Robotics Championship",
          company: "Tournament Champions & Laurel Award",
          company_url: "https://www.instagram.com/p/C21EiujR_Fw/",
          logo_path: "VEX.png",
          duration: "Dec 2023 - Jan 2024",
          location: "Yogyakarta, Indonesia",
          description:
            "Led a 13-member team to a 1st place finish. Engineered a collapsible net system in Fusion360, a critical design innovation for compliance with size limits.",
          color: "#d9212c",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected work in applied AI, enterprise integration, and cybersecurity. Explore what I built, the engineering decisions behind it, and the outcomes.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Recent research papers and articles I have contributed to as an Undergraduate Research Assistant.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "rag-fact-checking",
      name:
        "Resolving Conflicting Evidence in Automated Fact-Checking: A Study on Retrieval-Augmented LLMs",
      createdAt: "2025-05-29T00:00:00Z",
      description:
        "Paper investigating how LLMs handle conflicting information (arXiv:2505.17762).",
      url: "https://arxiv.org/abs/2505.17762",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Tim_Crop.png",
    description:
      "Feel free to reach out to me! I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Here's where I like to document my CTF writeups as well as some technical knowledge sharing.",
    link: "https://www.linkedin.com/in/timothy-seah-kai-le/", // Replace with your actual blog link
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "University Address",
    subtitle:
      "Singapore University of Technology and Design, 8 Somapah Road, Singapore 487372",
    locality: "Singapore",
    country: "Singapore",
    region: "Singapore",
    postalCode: "#",
    streetAddress: "#",
    avatar_image_path: "address_image.svg",
    location_map_link: "hhttps://maps.app.goo.gl/iFo6iGXbsDWVPmCMA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+65 9755 6337",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
