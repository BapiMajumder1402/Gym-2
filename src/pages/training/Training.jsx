import styles from "./Training.module.css";
import { useState } from "react";

export function Training() {
  const [showTeam, setShowTeam] = useState(true);

  function handleShow() {
    setShowTeam(!showTeam);
  }

  return (
    <div>
      <div className={styles.meetTeam}>
        <h3 className={styles.teamHead}>Meet Our Team</h3>
        <span className={styles.Line}></span>
        <p className={styles.contentMeet}>
          We are a team of experienced people, nutrition, sports and fitness
          passionate experts with talent <br />
          and knowledge unsurpassed in the industry. Get to know us
        </p>
      </div>
      <div>
        {showTeam ? (
          <AllTrainers handleShow={handleShow} />
        ) : (
          <Trainers handleShow={handleShow} />
        )}
      </div>
    </div>
  );
}

function Trainers({ handleShow }) {
  return (
    <div>
      <div className={styles.scrollDiv}>
        <div className={styles.profiles}>
          <div className={styles.card}>
            <img
              src="https://media.istockphoto.com/id/972833328/photo/male-personal-trainer-helping-sportswoman-to-do-exercises-with-barbell-at-gym.jpg?s=612x612&w=0&k=20&c=5kIxaobVDjjDrYvv8qNB2lGJoBImzHvj-csu30o_lZY="
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Leslie Alexander</h4>
            <p className={styles.coach}>FITNESS COACH</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://www.muscleandfitness.com/wp-content/uploads/2018/12/Personal-Trainer-Training-Partner-GettyImages-654427364.jpg?quality=86&strip=all"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Ralph Edwards</h4>
            <p className={styles.coach}>CROSSFIT COACH</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkQa2mc3Jzofna3iQ73nd6HNU7thLqNIIRg&usqp=CAU"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Albert Flores</h4>
            <p className={styles.coach}>BODY BUILDING</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzgYbF5MQQAk16ZFkpMgqMJKDv3pll-kJucKar-N6aIWga18jflx_f4K_OYUa48tK7RU&usqp=CAU"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Kathryn Murphy</h4>
            <p className={styles.coach}>CROSSFIT COACH</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFi1pQ_aX-YeQ_b_KatEaAnDpdWugXpohbNxas2-5J7te6uwE_yf6zOczeE-ulZPwAZ3A&usqp=CAU"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Leslie Alexander</h4>
            <p className={styles.coach}>SPORTS COACH</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGybrxl8hP8UcUKyN3wnjnP3proHZJb0TzhQ&usqp=CAU"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Ralph Edwards</h4>
            <p className={styles.coach}>HEALTH COACH</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYr1Rt-ygnQ3rbnUoNCOhyZHnrA18zBz5IA&usqp=CAU"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Albert Flores</h4>
            <p className={styles.coach}>EXERCISE SPECIALIST</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-y0pZEcUgBZgMjzI_oFMQNetocQcbJj2akS2yxHRIjSScMPr73txL6ODlKxz0_M0188&usqp=CAU"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Kathryn Murphy</h4>
            <p className={styles.coach}>PERSONAL TRAINER</p>
          </div>
        </div>
        <div className={styles.trainerDiv}>
          <button onClick={handleShow} className={styles.trainerBtn}>
            SEE THE WHOLE TEAM
          </button>
        </div>
      </div>
    </div>
  );
}

function AllTrainers({ handleShow }) {
  return (
    <div>
      <div className={styles.scrollDiv}>
        <div className={styles.profiles}>
          <div className={styles.card}>
            <img
              src="https://media.istockphoto.com/id/972833328/photo/male-personal-trainer-helping-sportswoman-to-do-exercises-with-barbell-at-gym.jpg?s=612x612&w=0&k=20&c=5kIxaobVDjjDrYvv8qNB2lGJoBImzHvj-csu30o_lZY="
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Leslie Alexander</h4>
            <p className={styles.coach}>FITNESS COACH</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://www.muscleandfitness.com/wp-content/uploads/2018/12/Personal-Trainer-Training-Partner-GettyImages-654427364.jpg?quality=86&strip=all"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Ralph Edwards</h4>
            <p className={styles.coach}>CROSSFIT COACH</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkQa2mc3Jzofna3iQ73nd6HNU7thLqNIIRg&usqp=CAU"
              alt=""
              className={styles.imgTrainer}
            />
            <h4>Albert Flores</h4>
            <p className={styles.coach}>BODY BUILDING</p>
          </div>
        </div>
        <div className={styles.trainerDiv}>
          <button onClick={handleShow} className={styles.trainerBtn}>
            SEE THE WHOLE TEAM
          </button>
        </div>
      </div>
    </div>
  );
}
