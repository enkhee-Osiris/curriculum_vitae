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
    <header className="flex flex-row justify-between -md:flex-col-reverse">
      <div className="space-y-2 sm:space-y-6">
        <h1 className="text-2xl sm:text-4xl font-thin dark:font-light dark:text-gray-300">
          Enkh-Erdene Bolormaa
        </h1>
        <h2 className="text-xl sm:text-3xl font-thin dark:font-light dark:text-gray-300">
          Front-End developer
        </h2>
      </div>
      <div className="flex flex-col md:space-y-4 -md:mb-6 -md:flex-row -md:space-x-4 -md:self-end">
        <div className="flex flex-row space-x-4">
          <button
            onClick={toggleTheme}
            type="button"
            className="transition-all ease-in-out duration-100 cursor-pointer p-2 focus:ring-3 hover:ring-3 ring-black dark:ring-white">
            <span className="sr-only">Theme toggle</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hidden dark:block"
              fill="currentColor"
              viewBox="0 0 512 512">
              <title>Sunny</title>
              <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 block dark:hidden"
              fill="currentColor"
              viewBox="0 0 512 512">
              <title>Moon</title>
              <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
            </svg>
          </button>

          <a
            target="_parent"
            href="https://raw.githubusercontent.com/enkhee-Osiris/curriculum_vitae/master/tex/enkherdene_bolormaa.pdf"
            className="transition-all ease-in-out duration-100 cursor-pointer p-2 focus:ring-3 hover:ring-3 ring-black dark:ring-white">
            <span className="sr-only">Download</span>

            <svg
              className="h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <title>Download</title>
              <path d="M376 160H272v153.37l52.69-52.68a16 16 0 0122.62 22.62l-80 80a16 16 0 01-22.62 0l-80-80a16 16 0 0122.62-22.62L240 313.37V160H136a56.06 56.06 0 00-56 56v208a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V216a56.06 56.06 0 00-56-56zM272 48a16 16 0 00-32 0v112h32z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-row space-x-4">
          <a
            href="https://www.linkedin.com/in/enkherdene-bolormaa"
            className="transition-all ease-in-out duration-100 cursor-pointer p-2 focus:ring-3 hover:ring-3 ring-black dark:ring-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 512 512">
              <title>Logo Linkedin</title>
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
            </svg>
          </a>

          <a
            href="mailto:enkhee.ag@gmail.com"
            className="transition-all ease-in-out duration-100 cursor-pointer p-2 focus:ring-3 hover:ring-3 ring-black dark:ring-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 512 512">
              <title>Mail</title>
              <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
