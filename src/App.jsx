// absolute, relative, inset, pointer-event-none
import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { flushSync } from "react-dom";
import { SiFerrari } from "react-icons/si";
import { CiDollar } from "react-icons/ci";

// https://react-icons.github.io/react-icons/search/#q=power

const App = () => {
  var link = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";
  var porscheBig = "https://images.pistonheads.com/nimg/47438/blobid0.jpg";
  var ferrariBig = "https://bicollection.ch/wp-content/uploads/2021/06/FerrariRoma-GZ9A2523022.jpg";

  return (
    <>
      <div className="fixed top-0 w-full h-14 bg-[#0A0A0A] flex justify-between items-center pl-6 pr-6 z-10"> 
        <SiFerrari size={30} color="white"/>
      <div className="flex gap-12">
        <div className="text-white hover:cursor-pointer hover:underline">Home</div>
        <div className="text-white" >Collection</div>
        <div className="text-white" >Reviews</div>
        <div className="text-white" >About Us</div>
      </div>
      <div className="text-white">
        Contact us
      </div>
      </div>

      <div className="bg-black relative">
        <div className="h-[100vh] bg-[url('https://www.hdcarwallpapers.com/walls/ferrari_roma_2020_5k_6-HD.jpg')] bg-cover flex justify-center items-center text-white font-bold font-sans opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-evenly items-center text-white font-bold text-4xl">
          <div></div>
          <div>FERRARI ROMA - LA NUOVA DOLCE VITA</div>
        </div>
      </div>

      <div className="bg-white h-[85vh] flex flex-col-reverse lg:grid lg:grid-cols-2 lg:px-[170px] lg:py-20 gap-2 lg:gap-10">
        <div className="flex flex-col justify-center gap-2 lg:gap-5 mx-4 my-2">
          <div className="text-3xl font-black font-sans">
            Embodying la dolce vita
          </div>
          <div>
            Embodying la dolce vita, the Ferrari Roma captures the essence of Roman 
            grandeur in a modern masterpiece. This mid-front engined coupé seamlessly 
            blends timeless design with exhilarating performance. Its sculpted form, 
            inspired by the carefree spirit of 1950s and 60s Rome, thrums with the power 
            of an award-winning twin-turbo V8. The Ferrari Roma promises an unforgettable 
            experience, where elegance meets exhilarating speed on every journey.
          </div>
        </div>
        <div className="bg-blue-300">
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/10_16_revuelto/cover_m.jpg" alt="" className="h-full object-cover max-h-max"/>
        </div>
      </div>


      {/* <div className="bg-gray-50 grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:px-14">
        <CarCard audi={true}/>
        <CarCard2/>
        <CarCard2/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </div> */}
      <div className="bg-white h-[100vh]">
        <div className="bg-black relative">
          <img className="w-full" src="/supercar-lineup.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80">
          <div className="absolute inset-0 flex flex-col justify-around items-center text-white font-bold text-5xl">
            <div>FERRARI ROMA - LA NUOVA DOLCE VITA</div>
            <div></div><div></div><div></div>
          </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 px-14 my-7 items-center">
          <div className="bg-gray-100 border rounded-3xl flex justify-between px-4">
            <CiDollar size={150}/>
            <div className="flex flex-col justify-around m-4">
              <div className="text-xl font-bold">All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</div>
            </div>
          </div>
          <div className="bg-gray-100 border  rounded-3xl flex justify-between px-4">
            <CiDollar size={150}/>
            <div className="flex flex-col justify-around m-4">
              <div className="text-xl font-bold">All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</div>
            </div>
          </div>
          <div className="bg-gray-100 border  rounded-3xl flex justify-between px-4">
            <CiDollar size={150}/>
            <div className="flex flex-col justify-around m-4">
              <div className="text-xl font-bold">All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</div>
            </div>
          </div>
        </div>


      </div>

      


    <div className="bg-gray-50">
      <div className="text-center mb-10">
        <div className="text-black font-semibold text-2xl mb-2">Supercar Models</div>
        <div className="text-black font-bold text-4xl mb-2">Explore Our Exotic collection</div>
        <div className="text-gray-500 ">Indulge in the ultimate driving experience with our exquisite selection of supercars</div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-col-1 gap-10 bg-gray-50 h-96">
        <div className="flex flex-col justify-center items-center gap-2">
          <CarTab name="LaFerrari"/>
          <CarTab name="Mclaren 720s"/>
          <CarTab name="Ferrari Roma"/>
          <CarTab name="Porsche 911"/>
          <CarTab name="lamborghini Revuelto"/>
          <CarTab name="Bugatti Chiron"/>
          <CarTab name="Aston Martin Valhalla"/>
        </div>
        <img className="flex justify-center" src="/laferrari-jaguar-cars-enzo-ferrari-ferrari-removebg-preview.png" alt="car" />
        <div className="bg-yellow-500">

        </div>
      </div>
    </div>
    </>
  )
}

const CarTab = (props) => {
  return(
    <div className="bg-gray-200 py-[15px] w-[250px] text-center text-black font-bold text-[20px] font-poppins">{props.name}</div>
  )
}


const CarCard = (props) => {
  // var audiLink = "https://images.hindustantimes.com/auto/img/2023/09/18/1600x900/Audi_Q5_Limited_Edition-1_1695015301793_1695015306637.jpg";
  var link = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";
  return (
      <div className="flex flex-col rounded-xl shadow-md bg-red-900 w-full">
        <img className="rounded-t-xl flex-1 object-cover" src={link} alt="description" />
        <div className="rounded-b-xl bg-white flex-2 p-5">
          <div className="flex justify-between text-xl font-bold">
            <div>
              Ferrari Roma, 2024
            </div>
            <div className="font-black text-red-500 text-xl">
              $200k
            </div>
          </div>
          {/* <div className="bg-gray-100 rounded-lg mt-3 pl-3 pr-3 pt-2 pb-2 flex justify-evenly">
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><IoIosSpeedometer size={20} color="black"/>180</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><BsFillFuelPumpFill size={20} color="orange"/>8.2</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><MdAirlineSeatReclineNormal size={20} color="brown"/>2</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><ImPower size={20} color="red"/>611</div>
          </div> */}
          <div className="font-sans pt-2.5">
            The Italian elegance makes a comeback.
            The Ferrari Roma, the new mid-front-engined 2+ coupé, 
            features refined proportions and timeless design.
          </div>
        </div>
      </div>
  )
}
const CarCard2 = (props) => {
  var audiLink = "https://images.hindustantimes.com/auto/img/2023/09/18/1600x900/Audi_Q5_Limited_Edition-1_1695015301793_1695015306637.jpg";
  // var link = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";
  return (
      <div className="flex flex-col rounded-xl shadow-md bg-red-900">
        <img className="rounded-t-xl flex-1 h-full max-h-56 object-cover" src={audiLink} alt="description" />
        <div className="rounded-b-xl bg-white flex-2 p-5">
          <div className="flex justify-between text-xl font-bold">
            <div>
              Ferrari Roma, 2024
            </div>
            <div className="font-black text-red-500 text-xl">
              $200k
            </div>
          </div>
          {/* <div className="bg-gray-100 rounded-lg mt-3 pl-3 pr-3 pt-2 pb-2 flex justify-evenly">
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><IoIosSpeedometer size={20} color="black"/>180</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><BsFillFuelPumpFill size={20} color="orange"/>8.2</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><MdAirlineSeatReclineNormal size={20} color="brown"/>2</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><ImPower size={20} color="red"/>611</div>
          </div> */}
          <div className="font-sans pt-2.5">
            The Italian elegance makes a comeback.
            The Ferrari Roma, the new mid-front-engined 2+ coupé, 
            features refined proportions and timeless design.
          </div>
        </div>
      </div>
  )
}




export default App
