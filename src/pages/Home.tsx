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
      display:"flex",
      alignItems:"flex-start"
    }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}          // 슬라이드 간격
        slidesPerView={1}          // 한 번에 보여줄 슬라이드 개수
        loop={true}                // 무한 반복
        autoplay={{
          delay: 2500,             // 2.5초마다 자동 전환
          disableOnInteraction: false, // 사용자 조작 이후에도 계속 자동 재생
        }}
        style={{

        }}

      >
        <SwiperSlide>
          <Link to="/">
            <img src={img1} alt="slide1" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img src={img2} alt="slide2" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img src={img3} alt="slide3" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover" }} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Report">
            <img src={diagnose} alt="slide3" style={{ width: 800, aspectRatio: "5 / 3", objectFit: "cover", borderRadius:30 }} />
          </Link>
        </SwiperSlide>
      </Swiper>
</div>
  );
};

export default Home;
