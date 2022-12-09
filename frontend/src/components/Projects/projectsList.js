import reactIcon from "../../assets/icons/react.png";
import nodejsIcon from "../../assets/icons/nodejs.png";
import reduxIcon from "../../assets/icons/redux.png";
import sassIcon from "../../assets/icons/sass.png";
import javascriptIcon from "../../assets/icons/javascript.png";
import mongoDBIcon from "../../assets/icons/mongoDB.png";
import stableImage from "../../assets/images/stable-home.PNG";
import comingSoonImage from "../../assets/images/coming-soon.jpg";

const projectsList = [
  {
    title: "Stable",
    tech: [
      reactIcon,
      reduxIcon,
      sassIcon,
      nodejsIcon,
      javascriptIcon,
      mongoDBIcon,
    ],
    description: `An online eCommerce for furniture built using MERN stack integrated with Stripe as payment gateway. This web application supports both user and admin dashboard to manage orders, users and products`,
    github: "https://github.com/andyzhp234/stable-e-commerce-web",
    website: "https://www.stable-store.com/",
    projectImg: stableImage,
  },
  {
    title: "Task Tracker",
    tech: [],
    description: `A Project Management App`,
    github: "https://github.com/andyzhp234/task-management-app",
    website: "https://github.com/",
    projectImg: comingSoonImage,
  },
  {
    title: "Chat Hives",
    tech: [],
    description: `A Real Time Group Chat App`,
    github: "https://github.com/andyzhp234/realtime-group-chat-app",
    website: "https://github.com/",
    projectImg: comingSoonImage,
  },
];

export default projectsList;
