import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position on navigation.
 *
 * A plain route change goes to the top. A route change carrying a hash
 * (e.g. `/#contact` from a blog post) scrolls to that section instead, with
 * the same offset the in-page nav uses so the sticky bar doesn't cover it.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
