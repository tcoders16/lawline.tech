const Footer = () => {
    return (
      <footer className="fixed bottom-0 left-0 w-full border-t border-zinc-100 shadow-sm bg-white px-4 md:px-6 py-3 sm:py-4 text-[11px] sm:text-xs md:text-sm font-normal text-zinc-600 dark:text-zinc-400 chakra-petch-regular z-50">
        <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 md:gap-x-4 text-center">
          <span className="chakra-petch-extrabold font-extrabold text-zinc-700">Founder Omkumar —</span>
          <a
            href="https://www.linkedin.com/in/omkumar-solanki-atluxuarywxtchbusinessmandeveloper2/"
            className="text-green-700 hover:underline hover:text-green-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://www.omkumarsolanki.com"
            className="text-green-700 hover:underline hover:text-green-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            omkumarsolanki.com
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;