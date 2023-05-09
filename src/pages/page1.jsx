import Message from "@/components/message";
import Text_Btn from "@/components/text_btn";
import Head from "next/head";
import Router from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./page1.module.css";

export default function Name(props) {
  const {selectedLanguage, setSelectedLanguage} = props.value

  useLayoutEffect(() => {
    const language = localStorage.getItem("language");
    setSelectedLanguage(language);
    console.log(language);
  }, []);

  const text = selectedLanguage === "Japanese" ? `あなたのお名前\nまたは\nニックネームは？` :`What is your name\nor\nyour nickname？`;
  const placeholder =  selectedLanguage === "Japanese" ? "お名前を入力してください" : "Enter your name";
  const next = selectedLanguage === "Japanese" ? "次へ" : "next";

  return (
    <div className={styles.container}>
      <Head>
        <title>Name</title>
      </Head>

      <div className={styles.message_box}>
        <Message text={text} />
      </div>
      <div className={styles.text_box}>
        <Text_Btn placeholder={placeholder} color={""} />
      </div>
      <div className={styles.children_box}>
        <img src="images/4.png" alt="子ども画像" className={styles.children} />
      </div>
    </div>
  );
}
