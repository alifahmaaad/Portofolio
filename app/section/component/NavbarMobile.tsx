const NavbarMobile = (props: {
  open: boolean;
  func: Function;
  isActive: string;
}) => {
  return (
    <div
      className={
        (props.open ? "w-screen h-fit opacity-100" : "w-0 opacity-0 px-0") +
        " top-0 left-0 bg-white dark:bg-gray-800 fixed z-30 flex flex-col gap-5 p-5 shadow-lg nav duration-700 overflow-hidden font-semibold pt-14"
      }
    >
      <a
        href="#aboutme"
        className={
          props.isActive == "#aboutme" ? "active " : "dark:text-white "
        }
        onClick={() => props.func("#aboutme")}
      >
        AboutMe
      </a>
      <a
        href="#skill"
        className={props.isActive == "#skill" ? "active " : "dark:text-white "}
        onClick={() => props.func("#skill")}
      >
        Skill
      </a>
      <a
        href="#project"
        className={
          props.isActive == "#project" ? "active " : "dark:text-white "
        }
        onClick={() => props.func("#project")}
      >
        Project
      </a>
      <a
        href="#work"
        className={props.isActive == "#work" ? "active " : "dark:text-white "}
        onClick={() => props.func("#work")}
      >
        Experience
      </a>
      <a
        href="#certificate"
        className={
          props.isActive == "#certificate" ? "active " : "dark:text-white "
        }
        onClick={() => props.func("#certificate")}
      >
        Certificate
      </a>
      <a
        href="#sendme"
        className={props.isActive == "#sendme" ? "active " : "dark:text-white "}
        onClick={() => props.func("#sendme")}
      >
        SendMe
      </a>
      <a
        href="https://alifahmaaad.github.io/Portofolio/Resume-Ahmad Alif Sofian.pdf"
        className="dark:text-white "
      >
        Download resume
      </a>
    </div>
  );
};

export default NavbarMobile;
