import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Commendation from "./page9";
import NewToDos from "./page10";



export default function Swiper3() {
  const [ selectedLanguage, setSelectedLanguage ] = useState('Japanese')

  const languageValue = {selectedLanguage, setSelectedLanguage}
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><Commendation value={languageValue}/></SwiperSlide>
        <SwiperSlide><NewToDos value={languageValue}/></SwiperSlide>


      </Swiper>
    </div>
  );
}
