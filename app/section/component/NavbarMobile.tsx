"use client";

import {
  faMoon,
  faSun,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sectionOrder from "../JSONData/SectionOrder.json";

interface NavbarMobileProps {
  open: boolean;
  funcIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  funcHandleDarkMode: () => void;
  func: (id: string) => void;
  isActive: string;
  isDark: boolean;
  isScroll?: boolean;
}

const NavbarMobile = ({
  open,
  funcIsOpen,
  funcHandleDarkMode,
  func,
  isActive,
  isDark,
  isScroll,
}: NavbarMobileProps) => {
  return (
    <div
      className={`fixed inset-0 z-[90] flex flex-col gap-8 p-8 transition-all duration-700 ease-in-out font-bold pt-24
        ${
          open
            ? "translate-x-0 opacity-100 backdrop-blur-2xl"
            : "translate-x-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-6">
        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 dark:text-slate-500">
          Appearance
        </span>
        <button
          className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-[#0b0ed4] dark:text-violet-400 shadow-inner active:scale-90 transition-transform"
          onClick={() => funcHandleDarkMode()}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-xl" />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-2">
          Navigation
        </span>
        {sectionOrder
          .filter((section) => section.isShowInNavbar)
          .sort((a, b) => a.order - b.order)
          .map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`
                text-3xl tracking-tighter transition-all duration-300 flex items-center justify-between group
                ${
                  isActive === `#${section.id}`
                    ? "text-[#0b0ed4] dark:text-violet-400 translate-x-2"
                    : "text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white"
                }
              `}
              onClick={() => {
                funcIsOpen(false);
                func(`#${section.id}`);
              }}
            >
              {section.name}
              <div
                className={`h-[2px] transition-all duration-500 bg-[#0b0ed4] dark:bg-violet-400 
                ${isActive === `#${section.id}` ? "w-8" : "w-0 group-hover:w-4"}`}
              />
            </a>
          ))}
      </div>
      <div className="mt-auto pb-4">
        <a
          href="https://drive.google.com/file/d/12m2T1lEx9RmIyah9HoPuQnvka-OmahCP/view?usp=sharing"
          target="_blank"
          className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#0b0ed4] dark:bg-violet-600 text-white shadow-2xl shadow-blue-500/30 active:scale-95 transition-all"
        >
          <FontAwesomeIcon icon={faFileArrowDown} />
          <span className="uppercase tracking-[0.2em] text-xs font-black">
            Download Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobile;
