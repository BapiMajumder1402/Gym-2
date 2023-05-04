import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { NavLink, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Home() {
  const history =useNavigate()

    const user= JSON.parse(localStorage.getItem("gymUsers"))
    if(user.isLogin==false){
      history('/Login')
    }

  
  const imgArr = [
    {
      url: "https://images3.alphacoders.com/107/thumbbig-1079633.webp",
      text: "BUILD YOUR BODY - TRANSFORM YOUR LIFE",
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg",
      text: "ARE U READY TO GET FIT, STRONG AND MOTIVATED",
    },
    {
      url: "https://images2.alphacoders.com/104/1043066.jpg",
      text: "WORKOUT YOUR WAY",
    },
    {
      url: "https://www.ovationthemes.com/demos/personal-gym-trainer/wp-content/themes/personal-gym-trainer-pro/assets/images/slides/slide1.png",
      text: "Get Ready to BURN",
    },
  ];

  // const [image, setImage] = useState(imgArr[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index
      setIndex((currentIndex) => (currentIndex + 1) % imgArr.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index, imgArr.length]);

  return (
    <div className={styles.imgSlider}>
      <img className={styles.img} src={imgArr[index].url} alt="gym" />
      <div className={styles.imgText}>
        {/* <div> */}
        <h2>{imgArr[index].text}</h2>
       <NavLink to="/login"> <button>Join with us</button></NavLink>
        {/* </div> */}
      </div>
    </div>
  );
}
