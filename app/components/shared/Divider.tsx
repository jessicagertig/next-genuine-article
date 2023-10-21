import React from "react";

interface DividerProps {
  color: string;
};

const Divider: React.FC<DividerProps> = (props) => {
  
  const styles = {
    height: "1px",
    width: "100%",
    backgroundColor: props.color,
  }
  
  return (
    <>
      <div className="divider" style={styles} />
    </>
  );
};

export default Divider;