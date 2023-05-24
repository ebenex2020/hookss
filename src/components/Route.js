import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [navSelect, setNavSelect] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setNavSelect(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return navSelect === path ? children : null;
};

export default Route;
