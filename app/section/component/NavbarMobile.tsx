const NavbarMobile = (props: { open: boolean }) => {
  return (
    <div
      className={
        (props.open ? "w-screen h-fit opacity-100" : "w-0 opacity-0 px-0") +
        " top-0 left-0 bg-white fixed z-30 flex flex-col gap-5 p-5 shadow-lg nav duration-700 overflow-hidden font-semibold pt-14"
      }
    >
      <a href="#aboutme">AboutMe</a>
      <a href="#skill">Skill</a>
      <a href="#project">Project</a>
      <a href="#work">Experience</a>
      <a href="#certificate">Certificate</a>
      <a href="#sendme">SendMe</a>
      <a href="https://alifahmaaad.github.io/Portofolio/Resume-Ahmad Alif Sofian.pdf">
        Download resume
      </a>
    </div>
  );
};

export default NavbarMobile;
