// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "For an up-to-date publications list, check also my GoogleScholar profile as well",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-ssmp-careers",
          title: "SSMP careers",
          description: "Open positions at DFKI Augmented Vision, Team Spatial Sensing and Machine Perception",
          section: "Navigation",
          handler: () => {
            window.location.href = "/SSMP%20careers/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-successfully-defended-my-phd-thesis-learning-priors-for-augmented-reality-tracking-and-scene-understanding",
          title: 'Successfully defended my PhD Thesis “Learning priors for augmented reality tracking and scene...',
          description: "",
          section: "News",},{id: "news-paper-on-radar-multipath-detection-at-icpr-2020",
          title: 'Paper on radar multipath detection at ICPR 2020',
          description: "",
          section: "News",},{id: "news-paper-on-plane-segmentation-accepted-at-icra-2021",
          title: 'Paper on plane segmentation accepted at ICRA 2021',
          description: "",
          section: "News",},{id: "news-paper-on-depth-image-vs-point-cloud-segmentation-accepted-at-icip-2021",
          title: 'Paper on depth image vs. point cloud segmentation accepted at ICIP 2021',
          description: "",
          section: "News",},{id: "news-we-released-two-time-of-flight-datasets-in-car-smart-building-at-https-vizta-tof-kl-dfki-de",
          title: 'We released two Time-of-Flight datasets (in-car, smart building) at  https://vizta-tof.kl.dfki.de/',
          description: "",
          section: "News",},{id: "news-paper-on-radar-camera-fusion-accepted-at-wacv-2022",
          title: 'Paper on Radar-Camera fusion accepted at WACV 2022',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-bmvc-2021",
          title: 'Two papers accepted at BMVC 2021',
          description: "",
          section: "News",},{id: "news-for-the-next-3-years-i-will-be-coordinating-the-eu-horizon-project-humantech-for-ai-in-the-construction-industry",
          title: 'For the next 3 years I will be coordinating the EU Horizon Project...',
          description: "",
          section: "News",},{id: "news-keynote-on-computer-vision-at-the-french-german-research-and-innovation-event",
          title: 'Keynote on Computer Vision at the French-German Research and Innovation event',
          description: "",
          section: "News",},{id: "news-two-papers-presented-at-cvpr-2022-1-main-track-1-workshop-paper",
          title: 'Two papers presented at CVPR 2022 (1 main track + 1 workshop paper)...',
          description: "",
          section: "News",},{id: "news-editing-a-special-issue-of-sensors-on-3d-sensing-semantic-reconstruction-and-modelling",
          title: 'Editing a special issue of Sensors on 3D Sensing, Semantic Reconstruction and Modelling...',
          description: "",
          section: "News",},{id: "news-two-awards-at-the-object-pose-estimation-challenge-bop-2022-at-eccv-2022",
          title: 'Two awards at the Object Pose Estimation challenge (BOP 2022) at ECCV 2022...',
          description: "",
          section: "News",},{id: "news-we-released-the-rada-radar-driver-activity-dataset",
          title: 'We released the “Rada” Radar Driver Activity Dataset',
          description: "",
          section: "News",},{id: "news-paper-on-3d-object-detection-accepted-at-the-robotics-and-automation-letters-ra-l-journal",
          title: 'Paper on 3D Object detection accepted at the Robotics and Automation Letters (RA-L)...',
          description: "",
          section: "News",},{id: "news-organized-a-workshop-on-ai-and-robotics-in-construction-at-the-european-robotics-forum-2023",
          title: 'Organized a Workshop on AI and Robotics in Construction at the European Robotics...',
          description: "",
          section: "News",},{id: "news-co-organizing-the-session-on-human-factors-in-construction-robotics-at-arso-2023",
          title: 'Co-organizing the session on  Human Factors in Construction Robotics at ARSO 2023',
          description: "",
          section: "News",},{id: "news-hiring-senior-researchers-for-projects-on-automated-waste-sorting-and-recycling",
          title: 'Hiring (Senior) Researchers for projects on  automated waste sorting and recycling',
          description: "",
          section: "News",},{id: "news-3rd-place-at-the-scan2bim-challenge-of-the-cv4aec-workshop-at-cvpr2023",
          title: '3rd place at the  Scan2BIM challenge of the CV4AEC Workshop at CVPR2023',
          description: "",
          section: "News",},{id: "news-two-papers-on-radar-camera-fusion-at-gcpr-2023-and-eusipco-2023",
          title: 'Two papers on radar-camera fusion at GCPR 2023 and EUSIPCO 2023',
          description: "",
          section: "News",},{id: "news-paper-on-hybrid-3d-face-tracking-accepted-at-icip-2023",
          title: 'Paper on hybrid 3D face tracking accepted at ICIP 2023',
          description: "",
          section: "News",},{id: "news-paper-on-scan2cad-with-retrieval-and-deformation-accepted-at-iccv2023",
          title: 'Paper on Scan2CAD with retrieval and deformation accepted at ICCV2023',
          description: "",
          section: "News",},{id: "news-three-awards-at-the-object-pose-estimation-challenge-bop-2023-at-iccv-2023",
          title: 'Three awards at the Object Pose Estimation challenge (BOP 2023) at ICCV 2023...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-igic-2023-on-meaningful-ar-xr-through-ai-perception",
          title: 'Invited Talk at IGIC 2023 on Meaningful AR/XR through AI Perception',
          description: "",
          section: "News",},{id: "news-3-new-research-projects-started-kimba-revise-up-bertha",
          title: '3 new research projects started.  KIMBA,  ReVise_UP,  BERTHA',
          description: "",
          section: "News",},{id: "news-paper-on-3d-semantic-segmentation-from-single-spherical-images-presented-at-wacv-2024",
          title: 'Paper on 3D semantic segmentation from single spherical images presented at WACV 2024...',
          description: "",
          section: "News",},{id: "news-best-industrial-paper-award-at-icpram-2024",
          title: 'Best Industrial Paper award at ICPRAM 2024',
          description: "",
          section: "News",},{id: "news-paper-on-object-pose-estimation-accepted-at-cvpr-2024-code-available",
          title: 'Paper on object pose estimation accepted at CVPR 2024  (code available)',
          description: "",
          section: "News",},{id: "news-organized-the-2nd-workshop-on-ai-and-robotics-in-construction-at-the-european-robotics-forum-2024",
          title: 'Organized the 2nd Workshop on AI and Robotics in Construction at the European...',
          description: "",
          section: "News",},{id: "news-3rd-place-at-the-scan2bim-challenge-of-the-cv4aec-workshop-at-cvpr2024",
          title: '3rd place at the  Scan2BIM challenge of the CV4AEC Workshop at CVPR2024',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-nem-summit-2024-on-building-virtual-worlds-with-3d-sensing-and-ai",
          title: 'Invited Talk at the NEM Summit 2024 on Building Virtual Worlds with 3D...',
          description: "",
          section: "News",},{id: "news-article-on-object-pose-estimation-for-symmetric-objects-published-by-ieee-transactions-on-image-processing-tip-journal",
          title: 'Article on object pose estimation for symmetric objects published by IEEE Transactions on...',
          description: "",
          section: "News",},{id: "news-organizing-the-spade-workshop-at-the-intelligent-vehicles-symposium-iv-2025",
          title: 'Organizing the SPADE Workshop at the Intelligent Vehicles Symposium (IV) 2025',
          description: "",
          section: "News",},{id: "news-2-papers-accepted-at-cvpr-2025-workshops-tof-360-pbvs-cacp-nexd",
          title: '2 Papers accepted at CVPR 2025 workshops:  ToF 360  @PBVS,  CACP  @NEXD',
          description: "",
          section: "News",},{id: "news-i-have-received-the-cvpr-2025-outstanding-reviewer-award",
          title: 'I have received the CVPR 2025  Outstanding Reviewer award',
          description: "",
          section: "News",},{id: "news-paper-on-robot-grasping-from-stacks-accepted-at-iros-2025",
          title: 'Paper on robot grasping from stacks accepted at  IROS 2025',
          description: "",
          section: "News",},{id: "news-amp-lt-a-href-https-av-dfki-de-2025-09-3-papers-presented-at-eusipco-2025-3-papers-presented-amp-lt-a-amp-gt-at-eusipco-2025",
          title: '&amp;amp;lt;a href=”https://av.dfki.de/2025/09/3-papers-presented-at-eusipco-2025/” 3 Papers presented &amp;amp;lt;/a&amp;amp;gt; at EUSIPCO 2025',
          description: "",
          section: "News",},{id: "news-started-the-construction-robotics-project-shieldbot",
          title: 'Started the construction robotics project  ShieldBoT',
          description: "",
          section: "News",},{id: "news-paper-on-knowledge-distillation-for-camera-radar-fusion-accepted-at-wacv-2026",
          title: 'Paper on knowledge distillation for camera-radar fusion accepted at  WACV 2026',
          description: "",
          section: "News",},{id: "projects-object-pose",
          title: 'Object Pose',
          description: "6DoF Object Pose Estimation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6DoF%20object%20pose%20and%20state/";
            },},{id: "projects-augmented-things",
          title: 'Augmented Things',
          description: "A robust model-based tracker for AR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Augmented%20Things/";
            },},{id: "projects-built-environment",
          title: 'Built Environment',
          description: "Scene understanding, Modeling and Robotics for Construction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HumanTech/";
            },},{id: "projects-automotive-perception",
          title: 'Automotive Perception',
          description: "Fusion of Radar, Lidar and Camera for automotive scene understanding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Radar%20Fusion/";
            },},{id: "projects-3d-scene-semantics",
          title: '3D Scene Semantics',
          description: "3D Semantic and Geometric scene understanding and reasoning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Semantic%20Reconstruction/";
            },},{id: "projects-tof-vision",
          title: 'ToF Vision',
          description: "Perception based only on time-of-flight cameras",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ToF%20Vision/";
            },},{id: "projects-waste-monitoring",
          title: 'Waste Monitoring',
          description: "Vision for understanding of waste streams",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Waste%20Monitoring/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.uni-trier.de/pid/191/7799.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%73%6F%6E.%72%61%6D%62%61%63%68@%64%66%6B%69.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dr-jason-rambach-03a9b258", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Jason-Rambach/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=1l4G16AAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
