import React, { useEffect, useState } from 'react'
import HeaderTop from '../Components/Header_Top';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../assets/style/swiper.css'
import "swiper/css";
import "swiper/css/pagination";
import load from '../assets/img/load.svg'
import loaddot from '../assets/img/loaddot.svg'
import axios from 'axios';

let date = Date() // vaqt

const Index = () => {

  const [data , setData] = useState([]);
  console.table(data)
  useEffect(()=>{
    AllForGetApi()
  },[])
  const uriApi = 'https://stratappresturant.herokuapp.com/api/v1/org/1/getHomeDetail/';
  const AllForGetApi = async ()=> { // mahsulotlarni get so'rovi bilan chaqirib olish
        const response = await axios.get(`${uriApi}`);
        const data = response.data
        setData(data); // setDataga api dagi datani yuklayapman
  }
  return (
    <>
      <HeaderTop stolNumber={1} restoranName={'Samarqand'} />

      <h1 className="categoryName">Suyuq taomlar</h1>
      <Swiper key={index} slidesPerView={1.5} spaceBetween={10} pagination={{ clickable: true }} className="mySwiper">
        <SwiperSlide >
          <div className="foodCard">
            
              <div className="foodCardBody">
                <img src={load} alt={load + date} />
              </div>
             <div className="foodCardBody">
                <img src={loaddot} className={'loaddot'} alt="" />
              {/* <h2 className="foodName">
              </h2> */}
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="foodCard">

          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="foodCard">

          </div>
        </SwiperSlide>



      </Swiper>





    </>
  )
}

export default Index;