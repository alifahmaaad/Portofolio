import Button from "./component/Button";
const Slide1 = () => {
  return (
    <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#4942E4] from-75% to-[#CCF381] to-25% h-full">
      <nav className="bg-red-500 sticky z-100">tsest</nav>
      <div className="content flex flex-col lg:flex-row justify-between px-4 lg:pl-[10rem] lg:pr=[5rem] 2xl:px-[20rem] items-center py-4">
        <article className="nama px-[5rem] pt-[2rem] lg:pt-0">
          <span className="flex py-4 text-[#CCF381] font-black text-5xl lg:text-7xl ">
            Frontend <br />
            Developer.
          </span>
          <span className="text-white font-bold text-3xl">
            Ahmad Alif Sofian
          </span>
          <span className="block pt-5">
            <Button buttonval="Check Me" />
          </span>
        </article>
        <div className="w-[25rem] h-[25rem] lg:w-[35rem] lg:h-[35rem] 2xl:w-[50rem] 2xl:h-[50rem] foto py-4 flex items-center justify-center">
          <svg
            className="absolute -z-0"
            width="400"
            height="400"
            viewBox="-40 0 240 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#9EDE73"
              d="M59.1,-58.2C75,-43.1,85.5,-21.5,80.3,-5.2C75.1,11.2,54.3,22.3,38.3,33.5C22.3,44.6,11.2,55.8,-5,60.7C-21.1,65.7,-42.2,64.6,-57.6,53.4C-72.9,42.2,-82.5,21.1,-76.8,5.6C-71.2,-9.9,-50.4,-19.7,-35.1,-34.8C-19.7,-49.9,-9.9,-70.2,5.8,-76C21.5,-81.8,43.1,-73.2,59.1,-58.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            className="absolute"
            width={800}
            height={800}
            src="https://sb.kaleidousercontent.com/67418/960x550/3e324c0328/individuals-removed.png"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
