import React from "react";

import NavBar from "@/app/components/NavBar";

interface SearchPageProps {}

const containerStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  overflow: "hidden",
};

const SearchPage: React.FC<SearchPageProps> = props => {
  return (
    <React.Fragment>
      <div className="page-container" style={containerStyle}>
      <NavBar backgroundColor="white" shadow={true} />
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
