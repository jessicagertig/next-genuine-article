import React from "react";

interface SearchPageProps {};

// basic format for a component
// replace "SearchPage" with new component name throuhgout
const containerStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  overflow: "hidden",
}

const SearchPage: React.FC<SearchPageProps> = (props) => {

  return (
    
<React.Fragment>      
<div className="page-container" style={containerStyle}>
        <div>
          <h2>Search</h2>
        </div>
        <div>
          <p>Other content</p>
        </div>
      </div>
</React.Fragment>
    
  );
};

export default SearchPage;