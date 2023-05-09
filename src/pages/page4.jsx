import Message from "@/components/message";
import ToDos from "@/components/todos";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./page4.module.css";

export default function ToDo(props) {
  const {selectedLanguage, setSelectedLanguage} = props.value

  useEffect(() => {
    const language = localStorage.getItem("language");
    setSelectedLanguage(language);
  }, []);
  const text = selectedLanguage === "Japanese" ? `もしあなたが1年しか生きられなかったら\n何がしたい？` : `If you only had one year leftto live.\nWhat would you do？`;
  const minitext = selectedLanguage === "Japanese" ? "3つだけこそっと書き出してみよう" : "Let's just  quickly write down three of them";
  const placeholder = selectedLanguage === "Japanese" ? "やりたいこと" : "Thing you want to do";
  const next = selectedLanguage === "Japanese" ? "次へ" : "next";

  return (
    <div className={styles.container}>
      <Head>
        <title>todos</title>
      </Head>

      <div className={styles.Message_box}>
        <Message text={text} />
        <p className={styles.p}>{minitext}</p>
      </div>
      <div className={styles.todos_box}>
      <ToDos placeholder={placeholder}/>
      </div>

      {/* <div className={styles.todos}>
        <div className={styles.todo}>
          <div className={styles.number}>1</div>
          <input type="text" className={styles.text}/>
        </div>
        <div className={styles.todo}>
          <div className={styles.number}>2</div>
          <input type="text" className={styles.text}/>
        </div>
        <div className={styles.todo}>
          <div className={styles.number}>3</div>
          <input type="text" className={styles.text}/>
        </div>
      </div> */}



      <div className={styles.man_box}>
        <img src="images/9.png" alt="男性画像" className={styles.man} />
      </div>
    </div>
  );
}
