import React from "react";

interface GarmentsPageProps {};

// basic format for a component
// replace "GarmentsPage" with new component name throuhgout
const containerStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  overflow: "hidden",
}

const GarmentsPage: React.FC<GarmentsPageProps> = (props) => {

  return (
    
<>      
<div className="page-container" style={containerStyle}>
        <div>
          <h2>Garments/Search</h2>
        </div>
        <div>
          <p>Other content</p>
        </div>
      </div>
</>
    
  );
};

export default GarmentsPage;