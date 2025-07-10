import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sectionOrder from "../JSONData/SectionOrder.json";

const NavbarMobile = (props: {
  open: boolean;
  funcIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  funcHandleDarkMode: Function;
  func: Function;
  isActive: string;
  isDark: boolean;
}) => {
  return (
    <div
      className={
        (props.open
          ? "w-screen h-full opacity-100"
          : "w-0 h-full opacity-0 px-0") +
        " top-0 left-0 bg-white dark:bg-gray-800 fixed z-30 flex flex-col gap-5 p-5 shadow-lg nav duration-700 overflow-hidden font-semibold pt-14"
      }
    >
      <button
        className="dark:text-white buttonDarkMode hover:scale-105 flex gap-2 items-center hover:cursor-pointer"
        onClick={() => {
          props.funcHandleDarkMode();
        }}
      >
        {props.isDark ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
        <label
          htmlFor="button"
          className="font-mono dark:text-white hover:cursor-pointer"
        >
          {props.isDark ? "Set Light" : "Set Dark"}
        </label>
      </button>
      {sectionOrder
        .filter((section) => section.isShowInNavbar)
        .slice()
        .sort((a, b) => a.order - b.order)
        .map((section) => {
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={
                props.isActive == `#${section.id}`
                  ? "active "
                  : "dark:text-white "
              }
              onClick={() => {
                props.funcIsOpen(!props.open);
                props.func(`#${section.id}`);
              }}
            >
              {section.name}
            </a>
          );
        })}
      <a
        href="https://alifahmaaad.github.io/Portofolio/CV_AhmadAlifSofian_2025.pdf"
        className="text-white bg-red-800 rounded p-[0.25rem]"
      >
        Download resume
      </a>
    </div>
  );
};

export default NavbarMobile;
