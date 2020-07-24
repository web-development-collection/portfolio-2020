import React, {FunctionComponent} from "react";
import ListOverview, {Item} from "../components/ListOverview";

const technologies: Item[] = [
  {
    name: "Android",
    icon: <i className="devicon-android-plain"/>
  },
  {
    name: "C",
    icon: <i className="devicon-c-plain"/>
  },
  {
    name: "C++",
    icon: <i className="devicon-cplusplus-plain"/>
  },
  {
    name: "CSS3",
    icon: <i className="devicon-css3-plain"/>
  },
  {
    name: "Docker",
    icon: <i className="devicon-docker-plain"/>
  },
  {
    name: "Express JS",
    icon: <i className="devicon-express-original"/>
  },
  {
    name: "Git",
    icon: <i className="devicon-git-plain"/>
  },
  {
    name: "GitHub",
    icon: <i className="devicon-github-plain"/>
  },
  {
    name: "Heroku",
    icon: <i className="devicon-heroku-original"/>
  },
  {
    name: "HTML5",
    icon: <i className="devicon-html5-plain"/>
  },
  {
    name: "Java",
    icon: <i className="devicon-java-plain"/>
  },
  {
    name: "JavaScript",
    icon: <i className="devicon-javascript-plain" />
  },
  {
    name: "MongoDB",
    icon: <i className="devicon-mongodb-plain"/>
  },
  {
    name: "MySQL",
    icon: <i className="devicon-mysql-plain"/>
  },
  {
    name: "NodeJS",
    icon: <i className="devicon-nodejs-plain"/>
  },
  {
    name: "NPM",
    icon: <i className="devicon-npm-original-wordmark"/>
  },
  {
    name: "PHP",
    icon: <i className="devicon-php-plain"/>
  },
  {
    name: "PostgreSQL",
    icon: <i className="devicon-postgresql-plain"/>
  },
  {
    name: "Python",
    icon: <i className="devicon-python-plain"/>
  },
  {
    name: "React + Redux",
    icon: <i className="devicon-react-original"/>
  },
  {
    name: "Sass",
    icon: <i className="devicon-sass-original"/>
  },
  {
    name: "Sequelize",
    icon: <i className="devicon-sequelize-plain"/>
  },
  {
    name: "TypeScript",
    icon: <i className="devicon-typescript-plain"/>
  },
  {
    name: "Yarn",
    icon: <i className="devicon-yarn-plain"/>
  },
  {
    name: "And more ...",
    icon: <i/>
  },
];


const TechnologiesSection: FunctionComponent<any> = () => {
  return <section className="skills v-centered fill-screen">
    <div className="wrapper">
      <h1>Technologies I have used</h1>
      <ListOverview items={technologies}/>
    </div>
  </section>;
}

export default TechnologiesSection;