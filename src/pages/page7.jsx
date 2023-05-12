import Message from "@/components/message";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./page7.module.css";

export default function Achievement(props) {
  const {selectedLanguage, setSelectedLanguage} = props.value

  useLayoutEffect(() => {
    const language = localStorage.getItem("language");
    setSelectedLanguage(language);
    console.log(language);
  }, []);

  const text = selectedLanguage === "Japanese" ? `あなたのお名前\nまたは\nニックネームは？` :`What is your name\nor\nyour nickname？`;
  const placeholder =  selectedLanguage === "Japanese" ? "お名前を入力してください" : "Enter your name";

  return (
    <div className={styles.container}>
      <Head>
        <title>Achievement</title>
      </Head>
      <div>
        <img src="images/22.png" alt="" />
      </div>
      <div>
        <Message text={text}/>
      </div>
    </div>
  );
}
