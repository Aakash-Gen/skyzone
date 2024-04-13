const CollectionPage = () => {
    <div className="bg-gray-50 grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:px-14">
        <CarCard audi={true}/>
        <CarCard2/>
        <CarCard2/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </div>
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
