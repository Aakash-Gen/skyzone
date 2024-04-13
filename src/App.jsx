// absolute, relative, inset, pointer-event-none
import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { flushSync } from "react-dom";
import { SiFerrari } from "react-icons/si";
import { CiDollar } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CarCard from "./components/CarCard";

// https://www.pexels.com/video/video-of-a-luxury-sports-car-5309351/
// https://www.pexels.com/video/a-lamborghini-car-on-the-road-7727416/
// https://react-icons.github.io/react-icons/search/#q=power
// https://www.pexels.com/video/light-sea-road-landscape-20153917/
// https://www.pexels.com/video/orange-supercar-on-road-14052141/

const App = () => {
  var link = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";
  var porscheBig = "https://images.pistonheads.com/nimg/47438/blobid0.jpg";
  var ferrariBig = "https://bicollection.ch/wp-content/uploads/2021/06/FerrariRoma-GZ9A2523022.jpg";

  return (
    <>
    {/* <div className="flex flex-col"> */}
      <div className="fixed top-0 w-full h-16 bg-[#0A0A0A] flex justify-between items-center pl-6 pr-6 z-10"> 
        <SiFerrari size={35} color="white"/>
      <div className="flex gap-12">
        <div className="text-white hover:cursor-pointer hover:underline">Home</div>
        <div className="text-white" >Collection</div>
        {/* <div className="text-white" >Reviews</div> */}
        <div className="text-white" >About Us</div>
      </div>
      <div className="text-white">
        Contact us
      </div>
      </div>

      <div className="bg-black relative">
        <div className="h-[100vh] bg-[url('https://www.the-lowdown.com/wp-content/uploads/2021/11/mclaren-720s-michelin-front-quarter-roller-3-landscape.jpg')] bg-cover flex justify-center items-center text-white font-bold font-sans opacity-50"></div>
        {/* <img className="h-[100vh] w-full object-cover  opacity-80" src="/pexels-mustafa-akku-14052141Original-ezgif.com-video-to-gif-converter.gif"></img> */}
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

      <div className="bg-white min-h-screen">
        {/* <div className="bg-black relative">
          <img className="w-full" src="/supercar-lineup.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80">
          <div className="absolute inset-0 flex flex-col justify-around items-center text-white font-bold text-5xl">
            <div>FERRARI ROMA - LA NUOVA DOLCE VITA</div>
            <div></div><div></div><div></div>
          </div>
          </div>
        </div> */}
        
        <div className="grid md:grid-cols-3 gap-3 lg:gap-10 px-5 lg:px-[100px] my-5 lg:my-7 items-center bg-gray-50 py-14">
          <div className="bg-white shadow-md border rounded-3xl flex justify-between px-4">
            <CiDollar size={150}/>
            <div className="flex flex-col justify-evenly m-4">
              <div className="text-xl font-bold">All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price.</div>
            </div>
          </div>
          <div className="bg-white shadow-md border  rounded-3xl flex justify-between px-4">
            <CiDollar size={150}/>
            <div className="flex flex-col justify-around m-4">
              <div className="text-xl font-bold">All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</div>
            </div>
          </div>
          <div className="bg-white shadow-md border  rounded-3xl flex justify-between px-4">
            <CiDollar size={150}/>
            <div className="flex flex-col justify-around m-4">
              <div className="text-xl font-bold">All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:px-14">
          <CarCard audi={true}/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
        </div>
      </div>

      

      


    <div className="bg-white min-h-screen mt-10">
      <div className="text-center mb-10">
        <div className="text-black font-semibold text-2xl mb-2">Supercar Models</div>
        <div className="text-black font-bold text-4xl mb-2">Explore Our Exotic collection</div>
        <div className="text-gray-500 ">Indulge in the ultimate driving experience with our exquisite selection of supercars</div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-col-3 gap-4">
        <div className="flex flex-col justify-center items-center gap-2 md:col-span-1 sm:col-span-1">
          <CarTab name="LaFerrari"/>
          <CarTab name="Mclaren 720s"/>
          <CarTab name="Ferrari Roma"/>
          <CarTab name="Porsche 911"/>
          <CarTab name="Lamborghini Revuelto"/>
          <CarTab name="Bugatti Chiron"/>
          <CarTab name="Aston Martin Valhalla"/>
        </div>
        <div className="flex items-center md:col-span-2 sm:col-span-1">
          <img className="flex justify-center h-98 w-256" src="/laferrari-jaguar-cars-enzo-ferrari-ferrari-removebg-preview.png" alt="car" />
        </div>
        <div className=" flex justify-center items-center md:col-span-1 sm:col-span-1">
          <div className=" bg-gray-50 flex flex-col border-2 border-gray-500 w-[250px] h-auto">
          <CarDetail title="Brand" desc="Ferrari" />
          <CarDetail title="Model" desc="LaFerrari" /> 
          <CarDetail title="Year" desc="2013" />   
          <CarDetail title="HP" desc="1036" />   
          <CarDetail title="0-60" desc="2.4s" />
          <div className="text-center font-bold text-4xl p-4">$3,057,308</div>
          </div>

        </div>
      </div>
    </div>



    <div className="h-10"></div>


    <div className="bg-gray-200 grid sm:grid-cols-2 lg:grid-cols-10 p-10 lg:p-20 gap-10">
          
          {/* skyzone dealership */}
          <div className="flex flex-col text-black gap-6 text-md col-span-3">
            <div className="text-3xl font-black">
              Skyzone Dealership
            </div>
            <div>
              We offers a big range of vehicles for all your driving needs. 
              We have the perfect car to meet your needs.
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"> <FaPhoneAlt /> +91 (768)30 89932</div>
              <div className="flex items-center gap-2"> <MdOutlineMail /> dealers@skyzone.com</div>
              <div className="flex items-center gap-2"> <FaLocationDot />65/13, Dwarka, IN</div>
            </div>
          </div>

          {/* company */}
          <div className="flex flex-col text-black gap-5 text-md col-span-2">
            <div className="text-2xl font-bold">
              Company
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"> Careers</div>
              <div className="flex items-center gap-2"> Blogs</div>
              <div className="flex items-center gap-2">Blog</div>
            </div>
          </div>

          {/* working hours */}
          <div className="flex flex-col text-black gap-5 text-md col-span-2">
            <div className="text-2xl font-bold">Working Hours</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">Mon - Fri: 9:00AM - 9:00PM</div>
              <div className="flex items-center gap-2">Sat: 9:00AM - 19:00PM</div>
              <div className="flex items-center gap-2">Sun: Closed</div>
            </div>
          </div>

          {/* subscribe */}
          <div className="flex flex-col text-black gap-5 text-md col-span-3">
            <div className="text-2xl font-bold">Subscription</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center">Subscribe your Email address for latest news & updates.</div>
              <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe</button>
            </div>
          </div>
      </div>
    </>
  )
}

const CarTab = (props) => {
  return(
    <div className="bg-gray-200 py-[15px] w-[250px] px-7 text-black font-semibold text-[18px] font-poppins">{props.name}</div>
  )
}
const CarDetail =(props) =>{
  return(
    <div className="flex justify-evenly gap-10 border-b-2 border-gray-500 p-4 font-semibold font-poppins">
            <div>{props.title}</div>
            <div>{props.desc}</div>
    </div>
  )
}





export default App
