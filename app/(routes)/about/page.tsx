import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";


interface AboutPageProps {};

// basic format for a component
// replace "AboutPage" with new component name throuhgout

const AboutPage: React.FC<AboutPageProps> = (props) => {

  return (
    
<React.Fragment>      
<div className="page-container" style={containerStyle}>
        <div>
          <h2>About</h2>
        </div>
        <div>
          <p>Other content</p>
        </div>
      </div>
</React.Fragment>
    
  );
};

export default AboutPage;

// Styled Components
// =======================================================

let Styled: any;
Styled = {};

Styled.PageContainer = styled.div(() => {
  return css`
    label: AboutPage_Container;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
  `;
});