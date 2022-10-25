import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Moje ime je Filip Šoštarić</h2>
        <div className="prompt">
          <p>
            Frontend developer željan novih znanja i iskustava u razboju web
            aplikacija
          </p>

          <a
            href="https://github.com/fs-atGithub/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
