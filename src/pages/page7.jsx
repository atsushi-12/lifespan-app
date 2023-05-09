import ToDos from "@/components/todos";
import Head from "next/head";
import styles from "./page7.module.css";

export default function Setting() {
  return (
    <div className={styles.container}>
      <Head>
        <title>setting</title>
      </Head>
      <header className={styles.header}>
      <img src="./images/gear-fill.svg" alt="設定SVG" className={styles.gear}/>
      <p className={styles.setting}>設定</p>
      </header>
      <div className={styles.setting_btn_box}>
        <button className={styles.setting_btn}>一部設定の変更</button>
      </div>


      <div className={styles.minicontainer1}>

        <select name="language" className={styles.text_nationality}>
          <option value=""> あなたの国籍を選んでください</option>
          <option value="JPN">日本</option>
          <option value="CHN">中国</option>
          <option value="KOR">韓国</option>
          <option value="IND">インド</option>
          <option value="USA">アメリカ</option>
          <option value="CAN">カナダ</option>
          <option value="COL">コロンビア</option>
          <option value="MEX">メキシコ</option>
          <option value="PHL">フィリピン</option>
        </select>

        <input type="text" placeholder="名前" className={styles.text_name}/>
        <input type="text" placeholder="生年月日" className={styles.text_dataofbirth}/>
      </div>

      <div className={styles.todos}>
        <ToDos placeholder="やりたいこと"/>
      </div>
      <div className={styles.reset_btn_box}>
        <button className={styles.reset_btn}>設定のやりなおし</button>
      </div>

    </div>
  );
}
