import Head from "next/head";
import styles from "./page6.module.css";
import Wave from "react-wavify";
import { memo, useEffect, useState } from "react";
import  ModalWindow  from "@/components/Modal";
import {useStore} from "../components/store"
export default function LifeClock() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [value, setValue] = useState(null);
  const [birthDay,setBirth] = useState("");
  const [name, setName] = useState("");
  const [load,setLoad] = useState(true);
  const [y,setYear] = useState("")
  const [time,setTime]  = useState({restYear:"",restDays:"",restHours:"",restMins:"",restSecs:""})
  const {visibility} = useStore()
  const setVisibility = useStore((state) => state.setVisibility);
// testをクリックするとuseStoreのsetVisibility関数を呼び出す
  const test = () =>{
    setVisibility()
  }

useEffect(() => {
  const language = localStorage.getItem("language");
  setSelectedLanguage(language);
  const storedName = localStorage.getItem("name");
  if (storedName) {
    setName(storedName);
  }
    const storedNationality = localStorage.getItem('nationality');
    const storedBirthday = localStorage.getItem('dateOfBirth');
    if (storedBirthday) {
      setBirth(storedBirthday.split("-"));
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/lifespan?nationality=${storedNationality}`);
        const json = await response.json();
        setValue(Math.round(json.value[1][0].value));
        setLoad(false)

      } catch (error) {
        console.error(error);
      }
    };
    if(storedNationality){
    fetchData();}

  }, []);

  const text = selectedLanguage === "Japanese" ? `${name}の余命は` : `${name}'s remaining life expectancy is`;
  const Year = selectedLanguage === "Japanese" ? "年" : "year";
  const day = selectedLanguage === "Japanese" ? "日" : "d";
  const hour = selectedLanguage === "Japanese" ? "時間" : "h";
  const minute = selectedLanguage === "Japanese" ? "分" : "m";
  const second = selectedLanguage === "Japanese" ? "秒" : "s";

  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1;


const calc = () => {
  const result =  year - parseInt(birthDay[0])
  if(birthDay[1] > month){
    return result - 1
  }else{
    return result
  }
}

  const height =  ((value - calc())/value) * 100

  console.log(parseInt(birthDay[1]))
  function DeathDate() {
    let nowDay = new Date();
    //↑現在時刻
    let theDay = new Date();
    //命日
    //////////////////////////////////////////////////////////////////////
    theDay.setFullYear(parseInt(nowDay.getFullYear()) + (value-calc()))
    theDay.setMonth(parseInt(birthDay[1])-1)
    theDay.setDate(parseInt(birthDay[2]))
    theDay.setHours(0)
    theDay.setMinutes(0)
    theDay.setSeconds(0)
    //命日の設定////////////////////////////////////////////////////////////
    const rest = theDay.getTime() - nowDay.getTime()
    let restYear = Math.floor(rest / (1000 * 60 * 60 * 24 * 365));//小数点切り捨て
    let restDays = Math.floor(rest / (1000 * 60 * 60 * 24) % 365);//小数点切り捨て
    let restSecs = Math.floor(rest/1000) % 60;
    restSecs = `0${restSecs}`.slice(-2);
    let restMins = Math.floor(rest/1000/60) % 60;
    restMins = `0${restMins}`.slice(-2);
    let restHours = Math.floor(rest/1000/60/60) % 24;
    restHours = `0${restHours}`.slice(-2);
    console.log(`残り${restYear}年 ${restDays} 日 ${restHours} 時間 ${restMins} 分 ${restSecs} 秒`);
    // const dateSet =[restYear,restDays,restHours,restMins,restSecs]

    setTime({ restYear, restDays, restHours, restMins, restSecs });

    setYear(restYear)
  }

  console.log(time)
useEffect(() => {
  const interval = setInterval(() => {
    DeathDate()
  }, 1000);
  return () => clearInterval(interval);
  //触れるなキケン
}, [load]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Life Clock</title>
      </Head>
      {/* visibilityの見え隠れ */}
      <div style={{display: visibility?  "block" : "none"}}>
        <ModalWindow/>
      </div>
      <div onClick={
        test}
        className={styles.gear_box}>
        <img
          src="./images/gear-fill.svg"
          alt="設定SVG"
          className={styles.gear}
        />
      </div>

      <h1 className={styles.life_message}>{text}</h1>

      <div className={styles.minicontainer1}>
        <div className={styles.man_box}>
          <img
            src="images/11.png"
            alt="水泳選手男性画像"
            className={styles.man}
          />
        </div>
        <div className={styles.heart_box}>
          <div className={styles.mask_img}>
            <div className={styles.masked}>
              <Wave
                style={{
                  height:`${height}%`,
                  transition:"height 2s ease-in-out",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
              }}
                fill="#f9afbd"
                paused={false}
                options={{
                  amplitude: 25,
                  speed: 0.2,
                  points: 3,
                }}
              />
            </div>
          </div>

          <div className={styles.life_clock}>
            <p className={styles.year_num}>{load?"loading":time.restYear}</p>
            <p className={styles.year}>{Year}</p>
          </div>
        </div>
      </div>

      <div className={styles.minicontainer2}>
        <div className={styles.heartbeat_box}>
          <img
            src="./images/heartbeat.svg"
            alt="心拍イラスト"
            className={styles.heartbeat}
          />
        </div>
        <div className={styles.girl_box}>
          <img src="images/12.png" alt="女性画像" className={styles.girl} />
        </div>
      </div>

      <div className={styles.life_span_box}>
        <div className={styles.life_span}>{time.restDays}{day}{time.restHours}{hour}{time.restMins}{minute}{time.restSecs}{second}</div>
      </div>

      <div className={styles.swimming_woman_box}>
        <img
          src="images/13.png"
          alt="水泳選手女性画像"
          className={styles.swimming_woman}
        />
      </div>

    </div>
  );
}
