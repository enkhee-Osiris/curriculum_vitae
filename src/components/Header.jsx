import { useCallback } from 'react';
// import avatar from '../images/avatar.png';

// TODO: add avatar
function Header() {
  const toggleTheme = useCallback(() => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else if (document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <header className="flex flex-row justify-between">
      <div className="space-y-6">
        <h1 className="text-4xl font-thin dark:font-light dark:text-gray-300">
          Enkh-Erdene Bolormaa
        </h1>
        <h2 className="text-3xl font-thin dark:font-light dark:text-gray-300">
          Front-End developer
        </h2>
      </div>
      <div className="flex flex-col space-y-4">
        <a
          target="_parent"
          href="link"
          className="transition-all ease-in-out duration-100 cursor-pointer p-2 focus:ring-3 hover:ring-3 ring-black dark:ring-white">
          <span className="sr-only">Download</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>

        <button
          onClick={toggleTheme}
          type="button"
          className="transition-all ease-in-out duration-100 cursor-pointer p-2 focus:ring-3 hover:ring-3 ring-black dark:ring-white">
          <span className="sr-only">Theme toggle</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hidden dark:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 block dark:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
