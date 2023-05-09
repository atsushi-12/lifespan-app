import Head from "next/head";
import { memo } from "react";
import styles from "./message.module.css";

export const Message = memo((props) => {
console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Message</title>
      </Head>
      <h2 className={styles.message}>
        {/* 改行コード */}
      {props.text.includes("\n") ? (
  <div>
    {props.text.split("\n").map((t) => (
      <div key={t}>{t}</div>
    ))}
  </div>
) : (
  props.text
)}
      </h2>
    </div>
  );
})

export default Message
