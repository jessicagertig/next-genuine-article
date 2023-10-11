import React from "react";

interface GarmentPageProps {};

// basic format for a component
// replace "GarmentPage" with new component name throuhgout
const containerStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  overflow: "hidden",
}

const GarmentPage: React.FC<GarmentPageProps> = (props) => {

  return (
    
<React.Fragment>      
<div className="page-container" style={containerStyle}>
        <div>
          <h2>Garment</h2>
        </div>
        <div>
          <p>Other content</p>
        </div>
      </div>
</React.Fragment>
    
  );
};

export default GarmentPage;
