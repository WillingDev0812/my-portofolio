import background from '../assets/background.jpg';
import mazes from '../assets/mazes.png';
import flaskBlog from '../assets/flaskBlog.png';
import restAPI from '../assets/restAPI.png';
import schoolApp from '../assets/schoolApp.png';
const projects = [
  {
    id: 1,
    image: flaskBlog,
    name: 'Alumni Management',
    logo: 'logos:java',
    description:
      "The Alumni Management System, powered by Spring Boot and Java, is a web-based application designed to efficiently organize and enhance interactions within a university's alumni network. This user-friendly platform fosters stronger connections, facilitates networking, and enables seamless communication between alumni and the institution.",
    link: 'https://github.com/willingdev0812/Flask_Blog'
  },
  {
    id: 2,
    image: flaskBlog,
    name: 'Flask blog app',
    logo: 'logos:flask',
    description:
      'This blog application boasts a comprehensive set of features, built using Flask, including seamless user registration and login functionality, profile management with profile pictures. Additionally, create, update, read, and delete blog posts without seamlessly.',
    link: 'https://github.com/willingdev0812/Flask_Blog'
  },
  {
    id: 3,
    image: mazes,
    name: 'UU game',
    logo: 'logos:python',
    description:
      'UU-GAME is a comprehensive gaming platform that offers a variety of features to enhance your gaming experience. This platform includes a game engine with different AI difficulty levels and a communication platform that lets players connect via local internet for round-robin tournaments or 1v1 games.',
    link: 'https://github.com/willingdev0812/UUgame'
  },
  {
    id: 4,
    image: background,
    name: 'Portfolio site',
    logo: 'logos:react',
    description:
      "Portfolio App using reactjs with HTML CSS Javascript Bootstrap. This page provides a brief overview of my skills and experience, along with the technologies I used to build it. You can also find a link to my full resume for more details. You see! This page shows you exactly what I've been talking about.",
    link: 'https://github.com/willingdev0812/my-portfolio'
  },
  {
    id: 5,
    image: restAPI,
    name: 'Express REST API',
    logo: 'eos-icons:api',
    description:
      'This is a game application implemented using Node Express, adhering to RESTful principles.',
    link: 'https://github.com/willingdev0812/game-rest-api'
  },
  {
    id: 6,
    image: schoolApp,
    name: 'Addis school',
    logo: 'logos:nodejs',
    description:
      'This repository contains the codebase for the Addis-School project. It demonstrates the application of MERN stack technology',
    link: 'https://github.com/willingdev0812/addis-school'
  }
];

export default projects;
