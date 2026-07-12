import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Restore scroll to the top on route change (hash links keep native behavior). */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
