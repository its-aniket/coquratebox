import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollToTop = ({color = '#00000'}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className={`flex justify-center items-center rounded-full fixed bottom-[90px] right-5 z-50 cursor-pointer bg-[${color}] animate-bounce`}
        >
          <Image
            src="/up-arrows.png"
            width={40}
            height={40}
            alt="scroll to top"
            className="rotate-90 m-2"
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
