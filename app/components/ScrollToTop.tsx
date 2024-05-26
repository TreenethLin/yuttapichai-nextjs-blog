"use client"
import { UpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${isVisible ? 'inline-flex' : 'hidden'}`}
      onClick={scrollToTop}
    >
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-gray-50 shadow-lg transition-colors hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300">
      <UpOutlined className="text-md cursor-pointer" />
    </div>
    </div>
  );
};

