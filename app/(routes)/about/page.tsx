import React from "react";

interface AboutPageProps {}

// basic format for a component
// replace "AboutPage" with new component name throuhgout
const containerStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  overflow: "hidden",
};

const AboutPage: React.FC<AboutPageProps> = props => {
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