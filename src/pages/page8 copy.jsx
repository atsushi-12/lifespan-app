import Message from "@/components/message";
import Head from "next/head";
import styles from "./page8.module.css";

export default function CheckTodos() {
  const array = [1,2,3]
  console.log(array[0])
  return (
    <div className={styles.container}>
      <Head>
        <title>check todos</title>
      </Head>

      <div className={styles.minicontainer1}>
        <img src="images/14.png" alt="握手画像" className={styles.hands} />
        <div className={styles.message}>
          <Message text={`まつおのやりたいこと`}/>
        </div>
      </div>


      <div className={styles.todos}>
        <div className={styles.todo}>
          <div className={styles.number_box}>
            <div className={styles.number}>1</div>
          </div>
          <input type="text" className={styles.text} />
          <img src="./images/hanamaru.svg" alt="はなまるSVG" className={styles.hanamaru}/>
          <div type="text" className={styles.check_box}>
            <div type="text" className={styles.icon_box}>
              <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon}/>
            </div>
            <img src="./images/check.svg" alt="チェックSVG" className={styles.check}/>
          </div>
        </div>

        <div className={styles.todo}>
          <div className={styles.number_box}>
            <div className={styles.number}>2</div>
          </div>
          <input type="text" className={styles.text} />
          <img src="./images/hanamaru.svg" alt="はなまるSVG" className={styles.hanamaru}/>
          <div type="text" className={styles.check_box}>
            <div type="text" className={styles.icon_box}>
              <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon}/>
            </div>
            <img src="./images/check.svg" alt="チェックSVG" className={styles.check}/>
          </div>
        </div>


        <div className={styles.todo}>
          <div className={styles.number_box}>
            <div className={styles.number}>3</div>
          </div>
          <input type="text" className={styles.text} />
          <img src="./images/hanamaru.svg" alt="はなまるSVG" className={styles.hanamaru}/>
          <div type="text" className={styles.check_box}>
            <div type="text" className={styles.icon_box}>
              <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon}/>
            </div>
            <img src="./images/check.svg" alt="チェックSVG" className={styles.check}/>
          </div>
        </div>
      </div>
      <div className={styles.minicontainer2}>
        <img src="images/15.png" alt="少年画像" className={styles.boy} />
        <div className={styles.sun_box}>
          <img src="./images/sun.svg" alt="太陽SVG" className={styles.sun}/>
        </div>

      </div>

    </div>
  );
}
