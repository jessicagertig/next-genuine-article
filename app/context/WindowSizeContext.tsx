"use client"

import React from "react";

interface WindowSizeContextType {
  dimensions: {
    height: number | undefined;
    width: number | undefined;
  }
}

const WindowSizeContext = React.createContext<WindowSizeContextType | undefined>(
  undefined
);

interface WindowSizeProviderProps {
  children: React.ReactNode;
}

const WindowSizeProvider: React.FC<WindowSizeProviderProps> = ({ children }) => {
  const isBrowser = typeof window !== "undefined";
  const [dimensions, setDimensions] = React.useState({
    height: isBrowser ? window.innerHeight : undefined,
    width: isBrowser ? window.innerWidth : undefined
  });

  React.useEffect(() => {
    const handleResize = () => {
      const newDimensions= {
        height: window.innerHeight,
        width: window.innerWidth
      }
      setDimensions(newDimensions)
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  // sets up an event listener for window resize events and updates the dimensions state whenever the window is resized. The absence of a dependency array means that the effect will only run after the initial render and when the component is unmounted, which is desirable in this case.

  return (
    <WindowSizeContext.Provider
      value={{ dimensions }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
};

const useWindowSizeContext = () => {
  const context = React.useContext(WindowSizeContext);
  if (context === undefined) {
    throw new Error("useWindowSizeContext must be used within a WindowSizeProvider");
  }

  const { dimensions } = context;

  return {
    dimensions
  };
};

export { useWindowSizeContext, WindowSizeProvider };
