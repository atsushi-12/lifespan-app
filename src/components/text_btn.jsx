import Head from "next/head";
import styles from "./text_btn.module.css";

export default function Text_Btn(props) {
    const handleChange = (event) => {
      const value = event.target.value
      localStorage.setItem("name", value);
  };
console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Text_Btn</title>
      </Head>
      <input type="text" placeholder={props.placeholder} className={styles.text} style={{backgroundColor:props.color}} onChange={handleChange}/>
    </div>
  );
}
