import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination"


import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import diagnose from "../assets/img/diagnose.png";

const Home: React.FC = () => {
  return (
    <div style={{
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      overflowX:"hidden",
      overflow:"visible",
      padding:"40px 0"
    }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={80}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          width:"90%",
          overflow:"visible"
        }}

      >
        <SwiperSlide>
          <Link to="/home">
            <img src={img1} alt="slide1" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/home">
            <img src={img2} alt="slide2" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/home">
            <img src={img3} alt="slide3" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Diagnose">
            <img src={diagnose} alt="slide3" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover", borderRadius:30 }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img src={img1} alt="slide5" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img src={img2} alt="slide6" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img src={img3} alt="slide7" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Diagnose">
            <img src={diagnose} alt="slide8" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover", borderRadius:30 }} />
          </Link>
        </SwiperSlide>
      </Swiper>
</div>
  );
};

export default Home;
