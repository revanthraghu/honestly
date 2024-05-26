import { useEffect, RefObject } from 'react';

const useScrollHighlight = (
  ref: RefObject<HTMLDivElement>,
  topLimitRatio: number = 0.4,
  bottomLimitRatio: number = 0.7
) => {
  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const topLimit = winHeight * topLimitRatio;
      const bottomLimit = winHeight * bottomLimitRatio;

      if (ref.current) {
        const elements = ref.current.querySelectorAll<HTMLLIElement>('.scroll div');
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top >= topLimit && rect.bottom <= bottomLimit) {
            element.classList.add('animate-color');
          } else {
            element.classList.remove('animate-color');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, topLimitRatio, bottomLimitRatio]);
};

export default useScrollHighlight;
