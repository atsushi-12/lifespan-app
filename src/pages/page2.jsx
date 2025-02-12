import Message from "@/components/message";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./page2.module.css";
import Router from "next/router";

export default function Nationality(props) {
  const {selectedLanguage, setSelectedLanguage} = props.value

  useEffect(() => {
    const language = localStorage.getItem("language");
    setSelectedLanguage(language);
    console.log(language);
  }, []);
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    localStorage.setItem("nationality", selectedValue);
  };

  const select = selectedLanguage === "Japanese" ? "あなたの国籍を選んでください" : "Choose your nationality";
  const next = selectedLanguage === "Japanese" ? "次へ" : "next";
  const nationality = selectedLanguage === "Japanese" ? "あなたが育った国は？" : "What is your nationality？";
  const JPN = selectedLanguage === "Japanese" ? "日本" : "Japan";
  const CHN = selectedLanguage === "Japanese" ? "中国" : "China";
  const KOR = selectedLanguage === "Japanese" ? "韓国" : "Korea";
  const IND = selectedLanguage === "Japanese" ? "インド" : "India";
  const USA = selectedLanguage === "Japanese" ? "アメリカ" : "America";
  const CAN = selectedLanguage === "Japanese" ? "カナダ" : "Canada";
  const COL = selectedLanguage === "Japanese" ? "コロンビア" : "Columbia";
  const MEX = selectedLanguage === "Japanese" ? "メキシコ" : "Mexico";
  const PHL = selectedLanguage === "Japanese" ? "フィリピン" : "Philippines";

  return (
    <div className={styles.container}>
      <Head>
        <title>Nationality</title>
      </Head>
      <div className={styles.orange_box}>
        <img src="images/5.png" alt="みかん画像" className={styles.orange} />
      </div>
      <div className={styles.Message_box}>
      <Message text={nationality} />
      </div>
      <div className={styles.nationality_box}>
        <select name="language" className={styles.nationality_select} cc onChange={handleChange}>
          <option value=""> {select}</option>
          <option value="JPN">{JPN}</option>
          <option value="CHN">{CHN}</option>
          <option value="KOR">{KOR}</option>
          <option value="IND">{IND}</option>
          <option value="USA">{USA}</option>
          <option value="CAN">{CAN}</option>
          <option value="COL">{COL}</option>
          <option value="MEX">{MEX}</option>
          <option value="PHL">{PHL}</option>

        </select>

      </div>
        <div className={styles.girl_box}>
          <img src="images/6.png" alt="女性画像" className={styles.girl} />
        </div>
    </div>
  );
}
