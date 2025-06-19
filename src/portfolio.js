/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Timothy Seah | Portfolio",
  description:
    "A Computer Science and Design student at SUTD with a passion in Cybersecurity and AI.",
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
    "A Computer Science and Design student at SUTD with a passion in Cybersecurity and AI.",
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
        "⚡ Developed and trained advanced AI models for Reinforcement Learning, Computer Vision, OCR, and ASR",
        "⚡ Researched LLM handling of conflicting information in RAG models for automated fact-checking",
        "⚡ Implemented a PyTorch CNN-based Deep Q-Network for navigation and trained YOLOv8 for real-time vehicle detection",
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
        "⚡ Avid participant in CTF competitions, with a focus on web security challenges",
        "⚡ Solved 20+ challenges across diverse categories in the latest SSMCTF 2025!",
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
        "⚡ Built robust back-end systems and APIs with Node.js for effective server-side logic",
        "⚡ Managed databases, including SQL (MySQL, SQLite) and NoSQL (MongoDB) solutions",
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
        "⚡ Focus Track: Security, CGPA 4.69/5.00",
        "⚡ Ensign InfoSecurity — SUTD Scholarship Holder (Bond Free)",
        "⚡ Relevant Courses: Python, Java OOP, Android Software Development, Data Structure & Algorithms, Operating System & Networks, Computation Structures, Introduction to Cybersecurity, Machine Learning.",
      ],
      website_link: "https://sutd.edu.sg",
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
    "Check out my previous work, projects, and competitions in AI, Cybersecurity, and Robotics!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Undergraduate Research Assistant",
          company: "Singapore University of Technology and Design (SUTD)",
          company_url: "https://www.sutd.edu.sg/",
          logo_path: "SUTD.png",
          duration: "May 2025 - Present",
          location: "Singapore",
          description:
            "Part of a research team exploring how 'Parsons puzzles' can be reimagined for the proof-heavy 50.004 Algorithms course, aiming to help students master asymptotic analyses and formal proofs. Mapped Big-O/Θ/Ω argument patterns into reusable drag-and-drop blocks. Developing a React web app using Scratch-style interface (React Dnd + Tailwind + KaTeX) and a rule-based engine for proof sequences. Designing a learning-impact study with pre/post assessments.",
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
      title: "Projects & Achievements",
      experiences: [
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
    "My projects utilize a vast variety of latest technology tools. My best experience is creating AI/ML projects and deploying them using cloud infrastructure, as well as competing in cybersecurity and robotics challenges.",
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
