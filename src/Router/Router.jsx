import { useState, useEffect } from "react";

const Router = ({ path, children }) => {
  const [currentPath, setCurrentpath] = useState(window.location.pathname);

  useEffect(() => {
      
    const onLoationChange = () => {
      setCurrentpath(window.location.pathname);
    };
    window.addEventListener("popstate", onLoationChange);

    return () => {
      window.removeEventListener("popstate", onLoationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Router;
