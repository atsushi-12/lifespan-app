import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import LifeClock from "./page6sub";
import CheckTodos from "./page8";
import {useStore} from "../components/store"
export default function Swiper2() {
  const {visibility} = useStore()
  const [ selectedLanguage, setSelectedLanguage ] = useState('Japanese')
  console.log(visibility)
  const languageValue = {selectedLanguage, setSelectedLanguage}
  return (
    <div key={visibility}>
      <Swiper allowTouchMove={!visibility} pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><LifeClock /></SwiperSlide>
        <SwiperSlide><CheckTodos value={languageValue}/></SwiperSlide>
      </Swiper>
    </div>
  );
}
