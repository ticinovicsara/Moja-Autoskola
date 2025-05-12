import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./slider.css";
import { Navigation, Pagination } from "swiper/modules";
import { blogs, routes } from "@/constants";
import arrow from "@/assets/svgs/arrow-right.svg";
import { useNavigate } from "react-router-dom";

export default function BlogSlider() {
  const navigate = useNavigate();

  const handleOpenBlog = (id: string) => {
    navigate(routes.BLOG(id));
  };
  return (
    <div className="sliderContainer">
      <div className="sliderWrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={42}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="slider"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="slide">
              <h2 className="title">{blog.title}</h2>
              <p className="description">
                {blog.description.slice(0, 150)}
                {blog.description.length > 150 ? "..." : ""}
              </p>
              <a className="readMore" onClick={() => handleOpenBlog(blog.id)}>
                Pročitaj više
                <img src={arrow} alt="arrow" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-button-prev"></div>
        <div className="custom-swiper-button-next"></div>
      </div>
    </div>
  );
}
