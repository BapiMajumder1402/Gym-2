import styles from "./Program.module.css";
import {Data} from "./Data";

export function Program() {
  return (
    <>
    <div className={styles.mainContainer}>
      <h1>Trainer section</h1>
      
      <div className={styles.scrollerCard}>
        {Data.map((item, index) => {
          return (
            <div className={styles.card} key={item.id}>
              <img src={item.Img} alt="programs" />
              <h5>{item.Name}</h5>
            </div>
          );
        })}
      </div>
      </div>
      
    </>
  );
}