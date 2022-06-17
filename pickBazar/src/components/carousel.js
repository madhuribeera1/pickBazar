import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#555"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#555"}}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="carousel">
      <div className="slider">
      <Slider {...settings}>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F422%2FJuice_q1dlke.png&w=1920&q=75" alt="img"></img>
          <span>Juice</span>
        </div>
        <div className="image1" >
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F423%2FCoffee_j6vccc.png&w=1920&q=75" alt="img"></img>
          <span>Coffee&Tea</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F424%2FCookies_ggshwp.png&w=1920&q=75" alt="img"></img>
          <span>Cookies</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F425%2FRound-Cake_rfsrkr.png&w=1920&q=75" alt="img"></img>
          <span>Round cake</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F426%2FPita-Bread_bvrwtn.png&w=1920&q=75" alt="img"></img>
          <span>Pita bread</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F427%2FChees-Cake_whi1yd.png&w=1920&q=75" alt="img"></img>
          <span>Sliced cake</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F428%2FMuffin_yiuqcf.png&w=1920&q=75" alt="img"></img>
          <span>Muffin</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F429%2FDanish_ybcbuq.png&w=1920&q=75" alt="img"></img>
          <span>Danish</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F429%2FDanish_ybcbuq.png&w=1920&q=75" alt="img"></img>
          <span>Croissants</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F430%2FCroissant_nqjflw.png&w=1920&q=75" alt="img"></img>
          <span>Feeter&Pies</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F431%2FFeeter-pies_eidfxl.png&w=1920&q=75" alt="img"></img>
          <span>Toast&Loaf</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F432%2FToast_ufzuwx.png&w=1920&q=75" alt="img"></img>
          <span>Soft bread</span>
        </div>
        <div className="image1">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F433%2FSoftBread_a85vlg.png&w=1920&q=75" alt="img"></img>
          <span>Bakery</span>
        </div>
      </Slider>
    </div>
    </div>
  );
}