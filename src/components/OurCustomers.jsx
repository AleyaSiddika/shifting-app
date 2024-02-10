import React from "react";
import Container from "../shared/components/Container/Container";
import Title from "../shared/components/Title/Title";
import Padding from "../shared/components/Container/Padding";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import image1 from "../assets/our-customers/Picture1.png";
import image2 from "../assets/our-customers/Picture3.png";
import image3 from "../assets/our-customers/Picture4.png";
import image4 from "../assets/our-customers/Picture5.png";
import image5 from "../assets/our-customers/Picture6.png";
import image6 from "../assets/our-customers/Picture7.png";

const OurCustomers = () => {
  return (
    <Padding>
      <div className="w-full bg-[#F6F6F6] mb-20">
        <Container>
          <div className="py-10">
            <Title
              title={"Our Customers"}
            ></Title>
            <div className="w-[90%] mx-auto py-10">
              <Swiper
                slidesPerView={5}
                spaceBetween={40}
                autoplay={{
                  enabled: true,
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                loop={true}
                loopPreventsSlide={true}
                modules={[Autoplay]}
                className="mySwiper"
                speed={4000}
              >
                <SwiperSlide>
                  <img width={90} height={63} src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img width={123} height={63} src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img width={90} height={63} src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img width={90} height={63} src={image4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img width={90} height={63} src={image5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img width={90} height={63} src={image6} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </Padding>
  );
};

export default OurCustomers;
