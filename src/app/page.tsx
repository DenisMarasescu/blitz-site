import Image from "next/image";
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-8 items-center text-center mt-28 mb-36">
        <h1 className="text-6xl font-semibold max-w-2/3 tracking-wide gap-y-4 flex flex-col">Lansează-te în online<br/> <span>cu ajutorul nostru</span></h1>
        <p className="mt-4 text-lg">Lucrăm împreună și te ajutăm <br /> să atingi rezultate inimaginabile</p>
        <button className="px-20 py-3 bg-[#E5B762] text-white font-bold rounded-lg hover:bg-[#D4A653] transition-all duration-300">
          Programează o întâlnire 
        </button>
        <Image src="/mouse.svg" alt="mouse" width={50} height={50} className="mt-12"/>
        {/* <Chatbot /> */}
      </div>
      
      <div className="py-16 px-32">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-28">
          <div>
            <p className="text-gray-500 mb-2">Aici ne vom descoperi unul pe celălalt</p>
            <h2 className="text-4xl font-semibold tracking-wider text-black mb-6">
              Descoperă motivele pentru care ai nevoie de un website
            </h2>
            <p className="text-md text-black mb-6 tracking-wide font-medium">
              Exercițiul nostru de descoperire ne ajută să-ți întelegem mai bine afacerea.
              În acest exercițiu ți se vor adresa mai multe întrebări cu scopul de a afla mai multe despre
              problema care îți afectează afacerea, astfel încât să o putem rezolva eficient.
            </p>
            <button className="px-6 py-2 bg-[#E5B762] text-white font-bold rounded-lg hover:bg-[#D4A653] transition-all duration-300 flex items-center gap-4">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg> */}
              <Image className="bg-white p-1 box-content rounded-lg" src="/calendar.svg" width={20} height={20} />
              programează o sesiune
            </button>
          </div>
          <div className="flex flex-col justify-center items-end pr-10">
            {/* <div className="bg-white w-3/4 h-80"></div> Placeholder for the image */}
            <Image className="rounded-lg object-cover" src="/mihnea.png" width={300} height={450}/>
            <div className="text-right">
              <p className="font-bold text-black">Turloiu Firica Mihnea</p>
              <p className="text-gray-500">CEO | Product Designer</p>
            </div>
          </div>
        </div>
      </div>


      
      



      <div className="bg-[#FFFAF4] py-16 px-8 mt-48 mb-48">
        <div className="container mx-auto text-center mb-32">
          <p className="text-gray-500 mb-2">Câteva dintre</p>
          <h2 className="text-5xl font-semibold tracking-wider text-black">
            Serviciile pe care le oferim
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="bg-[#FFF2E2] p-4 rounded-md inline-block mb-4">
                <Image src="/webdesign.svg" alt="Web Design Icon" className="mx-auto" width={35} height={35}/>
              </div>
              <h3 className="text-2xl font-semibold tracking-wider text-black mb-2">Web design</h3>
            </div>
            <div className="flex justify-center">
              <p className="text-black tracking-wider font-medium w-2/3">
                Proiecte web ușor de utilizat, receptive și personalizate.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="bg-[#FFF2E2] p-4 rounded-md inline-block mb-4">
                <Image src="/development.svg" alt="Development Icon" className="mx-auto" width={35} height={35}/>
              </div>
              <h3 className="text-2xl font-semibold tracking-wider text-black mb-2">Development</h3>
            </div>
            <div className="flex justify-center">
              <p className="text-black tracking-wider font-medium w-2/3">
                Soluții software personalizate pentru nevoile afacerii tale.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="bg-[#FFF2E2] p-4 rounded-md inline-block mb-4">
                <Image src="/branding.svg" alt="Branding Icon" className="mx-auto" width={35} height={35}/>
              </div>
              <h3 className="text-2xl font-semibold tracking-wider text-black mb-2">Branding</h3>
            </div>
            <div className="flex justify-center">
              <p className="text-black tracking-wider font-medium w-2/3">
                Conferă sentimente care corelează cu audiența ta țintă.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mb-2 mt-48">
          <p className="text-gray-500 mb-2">Uite cum poate arăta</p>
          <h2 className="text-5xl font-semibold tracking-wider text-black">
          Chatbotul tău
          </h2>
        </div>

      <Chatbot />

    </div>
  );
}
