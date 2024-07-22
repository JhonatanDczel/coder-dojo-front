// src/components/common/ThemeSwitcher.js
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaLaptop } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('system');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.remove('dark');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      }
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="mr-2">{theme === 'dark' ? <FaMoon /> : theme === 'light' ? <FaSun /> : <FaLaptop />}</span>
          <IoIosArrowDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute bottom-full right-0 z-10 mb-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
          <div className="p-1">
            <button
              type="button"
              className="flex items-center px-4 py-2 w-full text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
              onClick={() => handleThemeChange('light')}
            >
              <FaSun className="mr-2" /> Light
            </button>
            <button
              type="button"
              className="flex items-center px-4 py-2 w-full text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
              onClick={() => handleThemeChange('dark')}
            >
              <FaMoon className="mr-2" /> Dark
            </button>
            <button
              type="button"
              className="flex items-center px-4 py-2 w-full text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
              onClick={() => handleThemeChange('system')}
            >
              <FaLaptop className="mr-2" /> System
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
