import React from "react";
import Icons from "./Icons";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Content = styled.div`
    padding-top: 80px;
    color: darkgreen;
    text-align: center;
    font-family: monospace;
    font-size: 25px;
    font-weight: 500;
    height: 50vh;
    @media (max-width: 620px) {
        padding-top: 0px;
    }
`;


const Title = () => {
  return (
    <div className="container-fluid titleblock">
      <h1 className="titleh1" >Hi there!👋🏿</h1>
        <Content>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .pauseFor(1000)
                    .typeString(
                        "<span>So glad you found your way to my corner of the web.</span>"
                    )
                    .typeString(
                        "<br/><span>I'm a software engineer, and I'm excited to share my world with you.</span>"
                    )
                    .start();

            }}
            options={{
                autoStart: true,
                loop: false
            }}
        />
            </Content>

      <br />
      <Icons />
      <a href="#skills"  class="btn btn-outline-light btn-lg title-button">
        TELL ME MORE
      </a>
      <div class="custom-shape-divider-bottom-1658234901">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
    </div>
    // </div>
  );
};

export default Title;
