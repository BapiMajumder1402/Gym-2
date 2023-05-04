import React from "react";
import style from "./AboutUs.module.css";

export function AboutUs() {
  return (
    <div className={style.container}>
      <div className={style.aboutus}>
        <div className={style.left}>
          <iframe
            src="https://www.youtube.com/embed/vei81-bZhG4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
          ></iframe>
        </div>

        <div className={style.right}>
          <h2>About us</h2>

          <p className={style.p}>
            Latest fitness equipment. 10,000 sq.ft. of gym workout space. A
            brand new gym. Dedicated personal training and CrossFit Studio.
            Internationally certified personal trainers. We are the champions of
            fitness. We are Waves Gym. If you prefer a more personalized
            approach, our certified personal trainers are available to create
            custom workout plans tailored to your specific needs and goals. We
            have no qualms in calling ourselves the best gym in Andheri West.
            Not only do you get assistance at every step and point, but you also
            get personalized and customized workout and dietary programs.
          </p>
          <br />
          <button
            className={style.btn}
            onClick={() => alert("Clicked for AboutUs Section")}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className={style.aboutus}>
        <div className={style.right}>
          <h2>Why choose us?</h2>

          <p className={style.p}>
            We believe that fitness is not just about working out, it's about
            living a healthy and balanced lifestyle. That's why we offer a range
            of amenities to help you relax and rejuvenate after your workout.
            Our locker rooms and showers are spacious and well-equipped, and our
            saunas are the perfect place to unwind and destress. We also have a
            juice bar where you can refuel with delicious and healthy drinks and
            snacks. Our club is more than just a gym; it's a community of
            like-minded individuals who are passionate about living a healthy
            and active lifestyle. We provide a welcoming and inclusive
            environment where everyone is encouraged to unleash their potential
            and achieve their fitness goals.
          </p>
        </div>

        <div className={style.left}>
          <iframe
            src="https://www.youtube.com/embed/Rd3XHPk5me4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
