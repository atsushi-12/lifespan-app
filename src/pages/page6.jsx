import Head from "next/head";
import styles from "./page6.module.css";

export default function LifeClock() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Life Clock</title>
      </Head>
      <div className={styles.gear_box}>
        <img src="./images/gear-fill.svg" alt="設定SVG" className={styles.gear}/>
      </div>

      <h1 className={styles.life_message}>まつおの余命は</h1>

      <div className={styles.minicontainer1}>

        <div className={styles.man_box}>
          <img src="images/11.png" alt="水泳選手男性画像" className={styles.man} />
        </div>
        <div className={styles.heart_box}>
          <div className={styles.mask_img}>
            <div className={styles.masked}>
              <div className={styles.sample}></div>
            </div>
          </div>

          <div className={styles.life_clock}>
            <p className={styles.year_num}>60</p>
            <p className={styles.year}>年</p>
          </div>
        </div>
      </div>


    <div className={styles.minicontainer2}>
      <div className={styles.heartbeat_box}>
        <img src="./images/heartbeat.svg" alt="心拍イラスト" className={styles.heartbeat}/>
      </div>
      <div className={styles.girl_box}>
          <img src="images/12.png" alt="女性画像" className={styles.girl} />
      </div>
    </div>

      <div className={styles.life_span_box}>
        <div className={styles.life_span}>100d7h7s</div>
      </div>

      <div className={styles.swimming_woman_box}>
        <img src="images/13.png" alt="水泳選手女性画像" className={styles.swimming_woman} />
      </div>
    </div>
  );
}
