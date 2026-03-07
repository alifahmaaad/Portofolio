import Button from "./component/Button";
import Cardbox from "./component/Cardbox";

type dataCertificateType = {
  id: number;
  title: string;
  text: string;
  imgurl: string;
  link: string;
};

const Certificate = ({
  id,
  data,
}: {
  id: string;
  data: dataCertificateType[];
}) => {
  return (
    <div
      className="relative min-h-screen w-full py-24 overflow-hidden bg-[#e2e2e7] dark:bg-[#03030d] transition-colors duration-700"
      id={id}
    >
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[60%] rounded-full pointer-events-none blur-[120px] bg-blue-600/10 dark:bg-violet-900/20 transition-all duration-700" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full pointer-events-none blur-[120px] bg-blue-600/10 dark:bg-violet-900/20 transition-all duration-700" />
      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-[90rem]">
        <header className="flex flex-col gap-2 mb-20">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#0b0ed4] dark:bg-violet-500 shadow-[0_0_10px_#0b0ed4]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
              Achievements
            </span>
          </div>

          <h1 className="font-black text-slate-900 dark:text-white text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-tight mt-4">
            My <br />
            <span className="text-[#0b0ed4] dark:text-violet-400 italic opacity-90">
              Certificates.
            </span>
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 py-5">
          {data.slice(0, 6).map((item, index) => (
            <div key={index} className="group transition-all duration-1000">
              <Cardbox
                imgurl={item.imgurl}
                text={item.text}
                title={item.title}
                link={item.link}
                linktext="See Credential!"
              />
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <Button
              buttonval="Explore All Certificates"
              link="AllCertificate"
              isPrimary={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
