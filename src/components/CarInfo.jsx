import { useState } from "react"
import { Link } from "react-scroll";

function CarInfo() {

    
    const cars = [
        { name: "LaFerrari", brand: "Ferrari", model: "LaFerrari", year: "2013", hp: "1036", acceleration: "2.4s", price: "$3,057,308" },
        { name: "Mclaren 720s", brand: "Mclaren", model: "720s", year: "2017", hp: "710", acceleration: "2.8s", price: "$310,500" },
        { name: "Ferrari Roma", brand: "Ferrari", model: "Roma", year: "2019", hp: "612", acceleration: "3.4s", price: "$272,970" },
        { name: "Porsche 911", brand: "Porsche", model: "911", year: "1963", hp: "443", acceleration: "3.2s", price: "$174,000" },
        { name: "Lamborghini Revuelto", brand: "Lamborghini", model: "Revuelto", year: "2023", hp: "1001", acceleration: "2.3s", price: "$606,358"},
        { name: "Bugatti Chiron", brand: "Bugatti", model: "Chiron", year: "2016", hp: "1500", acceleration: "2.4s", price: "$3,300,000"},
        { name: "Aston Martin Valhalla", brand: "Aston Martin", model: "Valhalla", year: "2024", hp: "998", acceleration: "2.5s", price: "$800,000"}
      ];

      const [selectedCar, setSelectedCar] = useState(cars[0]);

      const handleClick=(carName)=>{
        const car = cars.find(car=>car.name===carName);
        setSelectedCar(car);
      }
  return (
    <div id="compare" className="bg-gray-50 h-full pb-10">
      <div className="text-center mb-10">
        <div className="text-black font-semibold text-2xl mb-2">Supercar Models</div>
        <div className="text-black font-bold text-4xl mb-2">Explore Our Exotic collection</div>
        <div className="text-gray-500 ">Indulge in the ultimate driving experience with our exquisite selection of supercars</div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="flex flex-col justify-center items-center gap-2 lg:col-span-1">
          {cars.map((car, index) => (
          <CarTab key={index} name={car.name} onClick={() => handleClick(car.name)} />
          ))}
        </div>
        <div className="flex items-center lg:col-span-2" >
          {selectedCar && (
          <img id="image" className="flex justify-center h-full w-full " src={`/${selectedCar.model.toLowerCase()}.png`} alt="car" />
          )}
        </div>
        <div className=" flex justify-center items-center lg:col-span-1">
          <div className=" bg-gray-50 flex flex-col border-2 border-gray-500 w-[250px]">
          <CarDetail title="Brand" desc={selectedCar.brand}/>
          <CarDetail title="Model" desc={selectedCar.model} /> 
          <CarDetail title="Year" desc={selectedCar.year} />   
          <CarDetail title="HP" desc={selectedCar.hp} />   
          <CarDetail title="0-60" desc={selectedCar.acceleration} />
          <div className="text-center font-bold text-4xl p-4 text-red-500">{selectedCar.price}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

const CarTab = ({name , onClick}) => {
    return(
      <Link to="image" spy={true} smooth={true} duration={500} offset={-70} onClick={onClick} className="bg-gray-200 py-[15px] w-[250px] px-7 text-black font-semibold text-[18px] font-poppins shadow-md hover:cursor-pointer hover:bg-black hover:text-white">{name}</Link>
    )
  }
  const CarDetail =(props) =>{
    return(
      <div className="flex justify-evenly gap-10 border-b-2 border-gray-500 p-4 font-semibold font-poppins shadow-md">
              <div>{props.title}</div>
              <div>{props.desc}</div>
      </div>
    )
  }

export default CarInfo