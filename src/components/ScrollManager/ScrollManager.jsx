import { useEffect } from "react";
import { useSelector } from "react-redux";

const ScrollManager = () => {
  const componentToScrollTo = useSelector(
    (state) => state.nav.componentToScrollTo
  );

  useEffect(() => {
    const targetElement = document.getElementById(componentToScrollTo);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [componentToScrollTo]);

  return null;
};

export default ScrollManager;
