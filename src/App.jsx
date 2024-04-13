// absolute, relative, inset, pointer-event-none

import { SiFerrari } from "react-icons/si";
import { CiDollar } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CarCard from "./components/CarCard";
import Header from "./components/Header";
import CarInfo from "./components/CarInfo";
import { MdLocationSearching } from "react-icons/md";
import { FaCar } from "react-icons/fa";

// https://www.pexels.com/video/video-of-a-luxury-sports-car-5309351/
// https://www.pexels.com/video/a-lamborghini-car-on-the-road-7727416/
// https://react-icons.github.io/react-icons/search/#q=power
// https://www.pexels.com/video/light-sea-road-landscape-20153917/
// https://www.pexels.com/video/orange-supercar-on-road-14052141/

const App = () => {
  var link = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";
  var porscheBig = "https://images.pistonheads.com/nimg/47438/blobid0.jpg";
  var ferrariBig = "https://bicollection.ch/wp-content/uploads/2021/06/FerrariRoma-GZ9A2523022.jpg";
  var ferrariCard = "https://www.amalgamcollection.com/cdn/shop/products/DSCF9341WIDEEDIT_2000x850_crop_center.jpg?v=1626887558";


  return (
    <>
      <Header/>
      <div id="home" className="bg-black relative">
        {/* <div className="h-[100vh] bg-[url('https://www.the-lowdown.com/wp-content/uploads/2021/11/mclaren-720s-michelin-front-quarter-roller-3-landscape.jpg')] bg-cover flex justify-center items-center text-white font-bold font-sans opacity-50"></div> */}
        <img className="h-[100vh] w-full object-cover  opacity-80" src="https://www.the-lowdown.com/wp-content/uploads/2021/11/mclaren-720s-michelin-front-quarter-roller-3-landscape.jpg"></img>
        <div className="absolute inset-0 flex flex-col justify-evenly items-center text-white font-bold text-4xl">
          <div></div>
          <div>FERRARI ROMA - LA NUOVA DOLCE VITA</div>
        </div>
      </div>

      <div className="bg-white p-10 lg:h-[62vh] flex flex-col-reverse lg:grid lg:grid-cols-2 lg:px-[170px] lg:py-20 gap-6 lg:gap-10">
        <div className="flex flex-col justify-center gap-2 lg:gap-5 ">
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
        <div className="bg-red-500 object-cover ">
          <img className="object-cover h-[40vw] lg:h-full w-full min-h-[300px]" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/10_16_revuelto/cover_m.jpg" alt="" />
        </div>
      </div>

      <div className="bg-gray-50  py-8">
        <div className=" grid md:grid-cols-3 gap-3 lg:gap-10 px-5 lg:px-[100px] items-center mb-4">
        <div className="bg-white h-full shadow-md border rounded-3xl flex justify-start px-4 py-4 items-center gap-3">
            <div className="pl-4 text-6xl sm:text-5xl">
              <MdLocationSearching/>
            </div>
            <div className="flex flex-col justify-evenly m-4">
              <div className="text-xl font-bold">Explore and Select</div>
              <div>Explore our exotic collection and find the car best suited for you.</div>
            </div>
          </div>
          <div className="bg-white h-full shadow-md border rounded-3xl flex justify-start px-4 py-4 items-center gap-3">
          <div className="pl-4 text-6xl sm:text-5xl">
              <CiDollar/>
            </div>
            <div className="flex flex-col justify-evenly m-4">
              <div className="text-xl font-bold">Order</div>
              <div>Order hassle free by contacting us via phone or mail.</div>
            </div>
          </div>
          <div className="bg-white h-full shadow-md border rounded-3xl flex justify-start px-4 py-4 items-center gap-3">

            <div className="pl-4 text-6xl sm:text-5xl">
              <FaCar/>
            </div>
            <div className="flex flex-col justify-evenly m-4">
              <div className="text-xl font-bold">Get Your Dream Car</div>
              <div>Get your car delivered to your door.</div>
            </div>
          </div>
          
        </div>

        <div id="collection" className="bg-gray-50 grid md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 md:px-14">
          <CarCard 
            name="Ferrari Roma"
            price="$3,057,308"
            speed="200"
            mileage="20"
            seats="2"
            power="1036"
            description="The Ferrari Roma, with its distinctive flair and style, features refined proportions and timeless design."
            image={ferrariCard}
          />
          <CarCard 
            name="McLaren 720s"
            price="$230k"
            speed="220"
            mileage="5"
            seats="2"
            power="700"
            description="The McLaren 720S embodies our relentless quest to push the limits of possibility. Lighter, stronger, faster. "
            image="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/95143/exterior-left-front-three-quarter.jpeg?q=80&q=80"
          />
          <CarCard 
            name="LaFerrari"
            price="$1,416,362"
            speed="217"
            mileage="12"
            seats="2"
            power="949"
            description="LaFerrari represents Ferrari's most ambitious project yet to push the boundaries of technology on a road car."
            image="https://cimg0.ibsrv.net/ibimg/hgm/1600x900-1/100/491/ferrari-laferrari-fxx-k_100491948.jpg"
          />
          <CarCard 
            name="Porsche 911"
            price="$115,100"
            speed="193"
            mileage="18"
            seats="4"
            power="379"
            description="The Porsche 911 is a timeless sports car that combines performance, luxury, and style in a unique package."
            image="https://www.autocar.co.uk/sites/autocar.co.uk/files/1-porsche-911-gt3-2021-rt-hero-front.jpg"
          />
          <CarCard 
          name="Lamborghini Revuelto"
          price="$500k"
          speed="220"
          mileage="15"
          seats="2"
          power="819"
          description="The Lamborghini Revuelto combines raw power with Italian flair, offering an exhilarating driving experience like no other."
          
            image="https://img.etimg.com/thumb/width-1200,height-900,imgsize-2042443,resizemode-75,msid-105789918/industry/auto/cars-uvs/revuelto-hybrid-lamborghinis-most-expensive-model-in-india-sold-out-till-2026.jpg"
          />
          <CarCard 
            name="Bugatti Chiron"
            price="$3,000,000"
            speed="261"
            mileage="9"
            seats="2"
            power="1479"
            description="The Bugatti Chiron is the epitome of engineering excellence and unparalleled luxury, setting new benchmarks in performance."
            image="https://cdn.motor1.com/images/mgl/xW8K2/s1/bugatti-chiron-pur-sport.webp"
          />
        </div>
      </div>

      <CarInfo/>
      {/* footer */}
      <div id="about-us" className="bg-gray-200 grid  md:grid-cols-2 lg:grid-cols-10 p-10 lg:p-20 gap-10">
          
          {/* skyzone dealership */}
          <div className="flex flex-col text-black gap-6 text-md lg:col-span-3">
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
          <div className="flex flex-col text-black gap-5 text-md lg:col-span-2">
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
          <div className="flex flex-col text-black gap-5 text-md lg:col-span-2">
            <div className="text-2xl font-bold">Working Hours</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">Mon - Fri: 9:00AM - 9:00PM</div>
              <div className="flex items-center gap-2">Sat: 9:00AM - 19:00PM</div>
              <div className="flex items-center gap-2">Sun: Closed</div>
            </div>
          </div>

          {/* subscribe */}
          <div className="flex flex-col text-black gap-5 text-md lg:col-span-3">
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


{/* <div className="bg-black relative">
          <img className="w-full" src="/supercar-lineup.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80">
          <div className="absolute inset-0 flex flex-col justify-around items-center text-white font-bold text-5xl">
            <div>FERRARI ROMA - LA NUOVA DOLCE VITA</div>
            <div></div><div></div><div></div>
          </div>
          </div>
        </div> */}



export default App
