// absolute, relative, inset, pointer-event-none
import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { flushSync } from "react-dom";
import { SiFerrari } from "react-icons/si";
// https://react-icons.github.io/react-icons/search/#q=power

const App = () => {

  return (
    <>

    <Exp/>

    <Ananya/>

{/*     
    <div className="flex-col w-96 m-10 rounded-sm shadow-2xl">

    <div className="bg-blue-500 h-24 rounded-t-lg flex flex-col justify-evenly p-2 pl-5 pr-5">
      <div className="text-white text-sm">Next Payout</div>
      <div className="flex justify-between items-end">
        <div className="text-3xl text-white font-bold">
         ₹2,312.23
        </div>
        <div className="text-white underline">
          7 orders 
          </div>
      </div>
    </div>
    <div className="bg-blue-900 h-10 rounded-b-lg flex justify-between pl-5 p-2 pr-5 text-white text-sm items-center">
      <div>Next Payment Date:</div>
      <div>Today, 4:00 pm</div>
    </div>
    </div>

    <div className="bg-red-100 grid grid-cols-3 p-10">
      <div className="rounded-lg shadow-lg shadow-green-500 bg-white p-8">
        <div className="text-gray-500">
          title
        </div>
        <div className=" flex justify-between">
          <div className="font-bold text-2xl">
            $100000
          </div>
          <div className="text-blue-400">
            7 orders --
            </div>
            </div>
            </div>
          </div> */}
    {/* <div className="h-14 bg-[#2A343A] flex justify-between items-center pl-6 pr-6"> <SiFerrari size={30} color="white"/> Nav Bar</div> */}
    <div className="h-14 bg-[#0A0A0A] flex justify-between items-center pl-6 pr-6" ><SiFerrari size={30} color="white"/>
    <div className="text-white">Racing</div>
    <div className="text-white">Sports Car</div>
    <div className="text-white">Collections</div>
    <div className="text-white">Experiences</div>
    <div className="text-white">About Us</div>



    
    </div>
    {/* <div className="h-14 bg-[#181818] flex justify-between items-center pl-5 pr-5"> <SiFerrari size={30} color="white"/> Nav Bar</div> */}
    

    <div className="bg-black relative">
      <div className="h-[94vh] bg-[url('https://www.hdcarwallpapers.com/walls/ferrari_roma_2020_5k_6-HD.jpg')] bg-cover flex justify-center items-center text-white font-bold font-sans opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-evenly items-center text-white font-bold text-4xl">
        <div></div>
        <div>FERRARI ROMA - LA NUOVA DOLCE VITA</div>
      </div>
      </div>
    {/* </div> */}




    <div className="bg-gray-50 p-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CarCard audi={true}/>
      <CarCard/>
      <CarCard/>
      <CarCard/>
      <CarCard/>
    </div>
    </>
  )
}

const CarCard = (props) => {
  // var audiLink = "https://images.hindustantimes.com/auto/img/2023/09/18/1600x900/Audi_Q5_Limited_Edition-1_1695015301793_1695015306637.jpg";
  var link = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";
  return (
      <div className="flex flex-col rounded-xl shadow-md bg-red-900">
        <img className="rounded-t-xl max-h-30" src={link} alt="description" />
        <div className="rounded-b-xl bg-white flex-2 p-5">
          <div className="flex justify-between text-xl font-bold">
            <div>
              Ferrari Roma, 2024
            </div>
            <div className="font-black text-red-500 text-xl">
              $200k
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg mt-3 pl-3 pr-3 pt-2 pb-2 flex justify-evenly">
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><IoIosSpeedometer size={20} color="black"/>180</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><BsFillFuelPumpFill size={20} color="orange"/>8.2</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><MdAirlineSeatReclineNormal size={20} color="brown"/>2</div>
            <div className="bg-white rounded-full h-10 flex justify-center items-center pl-4 pr-4 gap-1"><ImPower size={20} color="red"/>611</div>
          </div>
          <div className="font-sans pt-2.5">
            The Italian elegance makes a comeback.
            The Ferrari Roma, the new mid-front-engined 2+ coupé, 
            features refined proportions and timeless design.
          </div>
        </div>
      </div>
  )
}

const Exp = () => {
  return (
    <>
<div className="flex flex-col bg-orange-300 justify-center h-96">
      <div className="bg-green-900 text-white p-8 w-22 h-10">Bruce</div>
      <div className="bg-blue-900 text-white p-8 w-22 h-10">Bruce</div>
      <div className="bg-red-900 text-white p-8 w-22 h-10">Bruce</div>
    </div>
    <div className="grid lg:grid-cols-4">
      <div className="bg-green-900 text-white p-8 m-4 text-center md:text-left lg:text-right rounded-e-2xl rounded-s-full">Bruce</div>
      <div className="bg-green-900 text-white p-8 m-4 text-center md:text-left lg:text-right rounded-es-full">Bruce</div>
      <div className="bg-green-900 text-white p-8 m-4 text-center md:text-left lg:text-right rounded-full">Bruce</div>
      <div className="bg-green-900 text-white p-8 m-4 text-center md:text-left lg:text-right rounded-tr-xl">Bruce</div>
      <div className="bg-green-900 text-white p-8 m-4 text-center md:text-left lg:text-right rounded-e-xl">Bruce</div>
      <div className="bg-green-900 text-white p-8 m-4 text-center md:text-left lg:text-right">Bruce</div>
      <div className="bg-green-900 text-white p-8 m-4 text-center md:text-left lg:text-right rounded-b-full">Bruce</div>
    </div>

    </>
  )
}

const Ananya = () => {
  return (
    <div> 
      
    <div className="flex flex-col justify-between bg-pink-500 h-36 w-96 m-10 rounded-md shadow-lg shadow-pink-300" >
      <div>
      <div className="text-white text-md m-4">Next Payout</div>
      <div className="flex justify-between items-end"> 
      <div className = "text-white text-3xl font-bold m-2">$6,999</div>
      <div className = "text-white text-lg underline m-2"> 69 orders </div>
      </div>
      </div>
      <div className="bg-pink-300 flex justify-between rounded-b-md">
      <div className = "text-white text-md m-2 "> Next Payment Date: </div>
      <div className = "text-white text-md m-2 "> 20 March 2024, 12 am</div>
      </div>
    </div>
  </div>
  )
}

export default App
