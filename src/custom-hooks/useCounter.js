import { useState, useEffect } from "react";

//  useCounter takes parameters: "forward" or "backward".

const useCounter = (action) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (action === "forward") {
          return prevCounter + 1;
        }
        if (action === "backward") {
          return prevCounter - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};

export default useCounter;
