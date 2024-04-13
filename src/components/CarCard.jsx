import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { flushSync } from "react-dom";

const CarCard = (props) => {
    var audiLink = "https://images.hindustantimes.com/auto/img/2023/09/18/1600x900/Audi_Q5_Limited_Edition-1_1695015301793_1695015306637.jpg";
    var link = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";
    return (
        <div className="flex flex-col rounded-xl shadow-md bg-red-900 w-full">
          <img className="rounded-t-xl flex-1 object-cover" src={props.audi ? audiLink : link} alt="description" />
          <div className="rounded-b-xl bg-white flex-2 p-5">
            <div className="flex justify-between text-xl font-bold">
              <div>
                Ferrari Roma, 2024
              </div>
              <div className="font-black text-red-500 text-xl">
                $200k
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg mt-3 pl-3 pr-3 pt-2 pb-2 justify-evenly grid lg:grid-cols-4 grid-cols-4  md:grid-cols-2 gap-1">
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><IoIosSpeedometer size={20} color="black"/>180</div>
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><BsFillFuelPumpFill size={20} color="orange"/>8.2</div>
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><MdAirlineSeatReclineNormal size={20} color="brown"/>2</div>
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><ImPower size={20} color="red"/>611</div>
            </div>
            <div className="font-sans pt-2.5">
              The Italian elegance makes a comeback. The Ferrari Roma, the new mid-front-engined 2+ coupé.
              {/* , 
              features refined proportions and timeless design. */}
            </div>
          </div>
        </div>
    )
  }

  export default CarCard;