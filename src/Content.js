// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";

import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "AZİZ",
    LastName: "YILDIRIM",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Software Engineering",
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: " C++",
        para: "I know average level C++",
        logo: figma,
      },
      {
        name: "HTML/CSS",
        para: "I know average level HTML/CSS",
        logo: nodejs,
      },
      {
        name: "Javascript",
        para: "I know average level Javascript",
        logo: ps,
      },
      {
        name: "PHP",
        para: "I know PHP at beginner level",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "I know beginner level Sketch",
        logo: sketch,
      },
      {
        name: "Python",
        para: "I know Python at beginner level",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "C++ Programming",
        para: "I am an experienced developer in C++ programming.Here are the services I offer you:"+
        " Software Development: Developing C++ software for your needs.  Code Review and Optimization: Improving and optimizing your existing code. Training and Consulting: Training and consulting in C++ language. Project Management: Support for planning and managing your projects. Technical Support: Troubleshooting and technical support with C++.I will be happy to help you!",
        logo: services_logo1,
      },
      {
        title: "PHP Backend Developing",
        para:' \n"I specialize in PHP backend development. Here\'s what I offer:\n\n1. Custom Backend Development\n2. Database Design and Optimization\n3. API Development\n4. Security and Authentication\n5. Performance Tuning\n6. Technical Support and Maintenance\n\nLet\'s work together to achieve your goals!"',
        logo: services_logo2,
      },
      {
        title: "Phyton Programming",
        para: "Hello,\n\nWith Python, we offer services that can help you in a variety of areas:\n\n1.Customized software development\n2. Data analysis and machine learning\n3.Web development and automation\n4. Counseling and training\n5. Support and care.\n\nWe look forward to working together to further develop your business.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "MSC CARD",
        image: project1,
        
      },
      {
        title: "CV",
        image: project2,
        
      },
     
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "I am very satisfied! They did a great job for my software project. They worked quickly, professionally and efficiently. They understood my needs and exceeded my expectations. I highly recommend them!",
        img: avatar1,
        name: "Can Ayhan",
      },
      {
        review:
          "“I am very impressed! They worked faster and more efficiently than I expected. They answered my questions quickly and cooperated with me at every stage. Definitely top level service!”",
        img: avatar2,
        name: "Atalay Akgül",
      },
      {
        review:
          "“It was a super experience! I was really impressed by the quality and speed of the solution they provided for the project. They proved how well they do their job. I will definitely consider working with them again in the future.”",
        img: avatar3,
        name: "Cihan Civit",
      },
      {
        review:
          "“They did their job perfectly! They were professional and attentive at every step of the project process. The results surprised me and they understood exactly how I envisioned my project. Highly recommend!”",
        img: avatar4,
        name: "Furkan Dinc",
      },
    ],
  },
  Hireme: {
    title: "Hire ",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hello I'm a results-driven rookie with a knack for adaptability, strong communication skills, and a passion for [Data Science/Machine Learning/AI]. I bring a track record of success, a collaborative mindset, and a commitment to continuous learning to your team. Hiring me means adding a dedicated, adaptable, and passionate team player who will make an immediate impact and drive success. Best Regards [Aziz]",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "azizyldrm270@gmail.com",
        icon: GrMail,
        link: "mailto:azizyldrm270@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "azizyldrm270",
        icon: BsInstagram,
        link: "https://www.instagram.com/azizyldrm270/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};