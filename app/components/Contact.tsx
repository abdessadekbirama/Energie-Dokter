export default function Contact() {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="relative mt-20 mb-40 bg-[url('/assets/HomeHeroBg.svg')] bg-cover bg-center md:mx-24 mx-5 px-7 pt-3 pb-5 rounded-tl-[4rem] rounded-br-[4rem] flex md:flex-row flex-col-reverse justify-between "
    >
      {/* left section */}
      <div>
        <h1 className="md:text-[26px] text-xl font-bold text-[#0D2131] mt-5 ">
          Last van energieverlies? De
          <span className="text-[#81C713] "> Energie Dokter</span> helpt!
        </h1>
        <span className="text-[#254055] md:text-lg ">
          De Energie Dokter schrijft het juiste behandelplan voor
        </span>
        {/* spans */}
        <div className="text-[#254055] flex flex-col mt-5 md:text-[16px] text-sm gap-1 ">
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

        <p className="text-[#254055] mt-5 md:text-[16px] text-sm ">
          Klaar om uw gebouw energiezuiniger te maken?
        </p>
        <div className="flex md:gap-5 gap-2 mt-10 md:text-sm text-xs">
          <button className="bg-[#6B9D1C] text-white rounded-xl p-3 md:px-5 px-3 hover:bg-[#3b560f] hover:cursor-pointer transition-colors duration-300 ">
            Plan een consult
          </button>
          <button className="border-3 border-[#254055] text-[#254055] rounded-xl p-3 md:px-5 px-3 hover:bg-[#254055] hover:text-white transition-colors duration-300 cursor-pointer ">
            Bekijk alle diensten
          </button>
        </div>
      </div>

      {/* right section */}

      {/* desktop view */}
      <div>
        <img
          src="/assets/man.svg"
          className="md:block hidden absolute bottom-0 h-[115%] -translate-x-7"
          alt=""
        />
      </div>
      <div className="md:block hidden text-[#254055] text-center bg-white rounded-tl-2xl rounded-br-2xl h-fit px-3 py-3 ">
        <h1 className="font-bold ">Rutger Jenner</h1>
        <p className="text-[8px] ">Oprichter en Directeur</p>
      </div>



      {/* mobile view */}
      <div className="md:hidden block">
        <img className="m-auto" src="/assets/man.svg" alt="" />
        <div className=" absolute top-0 right-0 m-6 mt-10 text-[#254055] text-center bg-white rounded-tl-2xl rounded-br-2xl h-fit md:p-3 p-2 ">
          <h1 className="font-bold md:text-[16px] text-xs ">Rutger Jenner</h1>
          <p className="md:text-[8px] text-[6px] ">Oprichter en Directeur</p>
        </div>
      </div>
    </div>
  );
}
