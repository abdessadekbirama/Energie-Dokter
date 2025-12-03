export default function Contact() {
  return (
    <>
      <div
        style={{ fontFamily: "Poppins" }}
        className="relative mt-20 bg-[url('/assets/HomeHeroBg.svg')] bg-cover bg-center md:mx-24 mx-1 md:px-7 px-3 md:pt-3 pb-5 rounded-tl-[4rem] md:rounded-br-[4rem] flex md:flex-row flex-col-reverse justify-between overflow-x-clip "
      >
        {/* left section */}
        <div className="md:w-3/4 w-[70%]">
          <h1 className="md:text-[26px] text- font-bold text-[#0D2131] md:mt-5 mt-5  ">
            Last van energieverlies? De
            <span className="text-[#81C713] "> Energie Dokter</span> helpt!
          </h1>
          <span className="text-[#254055] md:text-lg md:block hidden ">
            De Energie Dokter schrijft het juiste behandelplan voor
          </span>
          <div className="text-[#254055] flex flex-col md:mt-5 mt-3 md:text-[16px] text-[11px] gap-1 md:w-full w-[90%] ">
            <span>
              <span className="font-semibold">Energiescan -</span> brengt
              verspilling en verbeterpunten helder in kaart
            </span>
            <span>
              <span className="font-semibold">Duidelijk rapport -</span>
              met meetresultaten, adviezen en prioriteiten
            </span>
            <span>
              <span className="font-semibold">Snelinzicht -</span>
              binnen enkele werkdagen weet u waar u aan toe bent
            </span>
            <span>
              <span className="font-semibold">Persoonlijke begeleiding -</span>
              onze experts helpen bij elke stap
            </span>
            <span>
              <span className="font-semibold">Transparant & voordelig - </span>
              eerlijke investering, vaak (deels) subsidiabel
            </span>
          </div>

          <p className="text-[#254055] md:mt-5 mt-3 md:text-[16px] text-[11px] w-[90%] ">
            Klaar om uw gebouw energiezuiniger te maken?
          </p>
          <div className="md:flex hidden md:gap-5 gap-2 mt-10 md:text-sm text-xs">
            <button className="bg-[#6B9D1C] text-white rounded-xl p-3 md:px-5 px-3 hover:bg-[#3b560f] hover:cursor-pointer transition-colors duration-300 ">
              Plan een consult
            </button>
            <button className="border-3 border-[#254055] text-[#254055] rounded-xl p-3 md:px-5 px-3 hover:bg-[#254055] hover:text-white transition-colors duration-300 cursor-pointer ">
              Bekijk alle diensten
            </button>
          </div>
        </div>

        {/* right section */}
        <div>
          <img
            src="/assets/man.svg"
            className="absolute md:bottom-0 md:right-10 md:translate-x-0 translate-x-[78%] md:translate-y-0 translate-y-2 md:scale-100 scale-[1.3] md:h-[115%]"
            alt=""
          />
        </div>
        <div className="absolute md:right-3 -right-2 md:text-[#254055] text-white text-center md:bg-white rounded-tl-2xl rounded-br-2xl h-fit px-3 md:py-3 ">
          <h1 className="font-bold ">Rutger Jenner</h1>
          <p className="text-[8px] ">Oprichter en Directeur</p>
        </div>
      </div>
      <div className="md:hidden flex justify-center gap-2 text-sm mt-5">
        <button className="bg-[#6B9D1C] text-white rounded-xl p-3 hover:bg-[#3b560f] hover:cursor-pointer transition-colors duration-300 ">
          Plan een consult
        </button>
        <button className="border-3 border-[#254055] text-[#254055] rounded-xl px-3 hover:bg-[#254055] hover:text-white transition-colors duration-300 ">
          Bekijk alle diensten
        </button>
      </div>
    </>
  );
}
