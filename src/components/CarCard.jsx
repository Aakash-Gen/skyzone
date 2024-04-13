import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { ImPower } from "react-icons/im";

const CarCard = (props) => {
    return (
        <div className="flex flex-col rounded-xl shadow-md ">
          <img className="rounded-t-xl object-cover max-h-[300px] md:h-[250px] lg:h-[270px] flex-grow" src={props.image} alt="description" />
          <div className="rounded-b-xl bg-white flex-2 p-5 flex-grow">
            <div className="flex justify-between text-xl font-bold">
              <div>
                {props.name}
              </div>
              <div className="font-black text-red-500 text-xl">
                {props.price}
              </div>
            </div>
            {/* <div className="bg-gray-100 rounded-lg mt-3 pl-3 pr-3 pt-2 pb-2 justify-evenly grid lg:grid-cols-4 grid-cols-4  md:grid-cols-2 gap-1">
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><IoIosSpeedometer size={20} color="black"/>{props.speed}</div>
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><BsFillFuelPumpFill size={20} color="orange"/>{props.mileage}</div>
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><MdAirlineSeatReclineNormal size={20} color="brown"/>{props.seats}</div>
              <div className="bg-white rounded-full h-10 flex justify-center items-center pl-2 pr-2 gap-1"><ImPower size={20} color="red"/>{props.power}</div>
            </div> */}
            <div className="font-sans pt-2.5">
              {props.description}
              {/* , 
              features refined proportions and timeless design. */}
            </div>
          </div>
        </div>
    )
  }

  export default CarCard;