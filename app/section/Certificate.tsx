import DataCertificate from "./JSONData/Certificate.json";
import Button from "./component/Button";
import Cardbox from "./component/Cardbox";
const Certificate = ({ id }: { id: string }) => {
  return (
    <div className="h-full dark:bg-[#34356d]" id={id}>
      <div className="min-h-[100svh]">
        <section className="flex items-center w-full h-full container mx-auto px-4 py-10 max-w-[60rem]  ">
          <div className="w-full">
            <header className="font-bold dark:text-white text-xl md:text-3xl lg:text-5xl py-10">
              <h1 className="text-ellipsis">My Certificate.</h1>
            </header>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem] sm:gap-[2rem] py-5 m-0 ">
              {Object.entries(DataCertificate)
                .slice(0, 6)
                .map(([key, i]) => (
                  <Cardbox
                    key={key}
                    imgurl={i.imgurl}
                    text={i.text}
                    title={i.title}
                    link={i.link}
                    linktext="See Credential!"
                  />
                ))}
            </div>
            <Button buttonval="See More" link="AllCertificate" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificate;
