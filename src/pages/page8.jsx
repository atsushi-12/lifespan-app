
import Message from "@/components/message";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page8.module.css";

export default function CheckTodos(props) {
  const {selectedLanguage, setSelectedLanguage} = props.value
  const [todos, setTodos] = useState([]);
  const [isCheckedList, setIsCheckedList] = useState([false, false, false]);
  const [name, setName] = useState("");

  useEffect(() => {
    const language = localStorage.getItem("language");
    setSelectedLanguage(language);
    console.log(language);
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const saveIsCheckedList = JSON.parse(localStorage.getItem('isCheckedList')) || [false, false, false];
    setTodos(savedTodos.slice(0, 3));
    setIsCheckedList(savedTodos.slice(0, 3).map(() => false));
  }, []);
  const text = selectedLanguage === "Japanese" ? `${name}のやりたいこと` : `What ${name} wants to do`;


  const handleClick = (index) => {

    setIsCheckedList((prevList) => {
      const newList = [...prevList];
      newList[index] = !newList[index];  //初期値がfalseだとtrueになる
      localStorage.setItem('isCheckedList', JSON.stringify(newList))
      return newList;
    });
  };
  console.log(isCheckedList)

  const handleSunClick = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;
    localStorage.setItem('date', dateString);
  };
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['テキスト1', 'テキスト2', 'テキスト3'];

  useEffect(() => {
    // タイマーを設定して、30秒ごとにテキストを更新する
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length); // テキストのインデックスを更新し、最後まで行ったら0に戻るようにする
    }, 30000);

    return () => clearInterval(interval); // コンポーネントがアンマウントされた時にタイマーをクリアする
  }, [textIndex, texts.length]);



  return (
    <div className={styles.container}>
      <Head>
        <title>check todos</title>
      </Head>

      <div className={styles.minicontainer1}>
        <img src="images/14.png" alt="握手画像" className={styles.hands} />
        <div className={styles.message}>
          <Message text={text}/>
        </div>
      </div>

      <div className={styles.todos}>
        {todos.map((todo, index) => (
          <div key={index} className={styles.todo}>
            <div className={styles.number_box}>
              <div className={styles.number}>{index + 1}</div>
            </div>
            <input type="text" className={styles.text} value={todo} disabled />
            <img src="./images/hanamaru.svg" alt="はなまるSVG" className={`${styles.hanamaru} ${isCheckedList[index] ? '' : styles.hidden}`}/>
            <div type="text" className={styles.check_box}>
              <div type="text" className={styles.icon_box}>
                <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon} onClick={() => handleClick(index)}/>
              </div>
              <img src="./images/check.svg" alt="チェックSVG" className={`${styles.check} ${isCheckedList[index] ? '' : styles.hidden} `} onClick={() => handleClick(index)}/>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.minicontainer2}>
        <img src="images/15.png" alt="少年画像" className={styles.boy} />
        <div className={styles.minimessage_box}>
          <p>{texts[textIndex]}</p>
        </div>
        <div className={styles.sun_box}>
        {isCheckedList.every((isChecked) => isChecked) ?(
              <Link href="/swiper3" className={styles.link}>
                <img src="./images/sun.svg" alt="太陽SVG" className={styles.sun} onClick={handleSunClick}/>
              </Link>
        ) : (
          <img src="./images/sun.svg" alt="太陽SVG" className={`${styles.sun} ${styles.sun_hidden}`} />
        )}
        </div>
      </div>
    </div>
  );
}













// import Message from "@/components/message";
// import Head from "next/head";
// import { useEffect, useState } from "react";
// import styles from "./page8.module.css";

// export default function CheckTodos() {
//   const [todos, setTodos] = useState([]);
//   const [isChecked, setIsChecked] = useState(true);

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(savedTodos.slice(0, 3));
//   }, []);

//   const handleClick = () => {
//     setIsChecked(!isChecked);
//   }

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>check todos</title>
//       </Head>

//       <div className={styles.minicontainer1}>
//         <img src="images/14.png" alt="握手画像" className={styles.hands} />
//         <div className={styles.message}>
//           <Message text={`まつおのやりたいこと`}/>
//         </div>
//       </div>

//       <div className={styles.todos}>
//         {todos.map((todo, index) => (
//           <div key={index} className={styles.todo}>
//             <div className={styles.number_box}>
//               <div className={styles.number}>{index + 1}</div>
//             </div>
//             <input type="text" className={styles.text} value={todo} disabled />
//             <img src="./images/hanamaru.svg" alt="はなまるSVG" className={styles.hanamaru} />
//             <div type="text" className={styles.check_box}>
//               <div type="text" className={styles.icon_box}>
//                 <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon} onClick={handleClick}/>
//               </div>
//               <img src="./images/check.svg" alt="チェックSVG" className={`${styles.check} ${isChecked ? '' : styles.hidden}`}/>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.minicontainer2}>
//         <img src="images/15.png" alt="少年画像" className={styles.boy} />
//         <div className={styles.sun_box}>
//           <img src="./images/sun.svg" alt="太陽SVG" className={styles.sun}/>
//         </div>
//       </div>
//     </div>
//   );
// }











// import Message from "@/components/message";
// import Head from "next/head";
// import { useEffect } from "react";
// import styles from "./page8.module.css";

// export default function CheckTodos() {
//   // const array = [1,2,3]
//   // console.log(array[0])
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const todos = localStorage.getItem('todos');
//     console.log(todos)
//   })

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>check todos</title>
//       </Head>

//       <div className={styles.minicontainer1}>
//         <img src="images/14.png" alt="握手画像" className={styles.hands} />
//         <div className={styles.message}>
//           <Message text={`まつおのやりたいこと`}/>
//         </div>
//       </div>


//       <div className={styles.todos}>
//         <div className={styles.todo}>
//           <div className={styles.number_box}>
//             <div className={styles.number}>1</div>
//           </div>
//           <input type="text" className={styles.text} />
//           <img src="./images/hanamaru.svg" alt="はなまるSVG" className={styles.hanamaru}/>
//           <div type="text" className={styles.check_box}>
//             <div type="text" className={styles.icon_box}>
//               <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon}/>
//             </div>
//             <img src="./images/check.svg" alt="チェックSVG" className={styles.check}/>
//           </div>
//         </div>

//         <div className={styles.todo}>
//           <div className={styles.number_box}>
//             <div className={styles.number}>2</div>
//           </div>
//           <input type="text" className={styles.text} />
//           <img src="./images/hanamaru.svg" alt="はなまるSVG" className={styles.hanamaru}/>
//           <div type="text" className={styles.check_box}>
//             <div type="text" className={styles.icon_box}>
//               <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon}/>
//             </div>
//             <img src="./images/check.svg" alt="チェックSVG" className={styles.check}/>
//           </div>
//         </div>


//         <div className={styles.todo}>
//           <div className={styles.number_box}>
//             <div className={styles.number}>3</div>
//           </div>
//           <input type="text" className={styles.text} />
//           <img src="./images/hanamaru.svg" alt="はなまるSVG" className={styles.hanamaru}/>
//           <div type="text" className={styles.check_box}>
//             <div type="text" className={styles.icon_box}>
//               <img src="./images/icon.svg" alt="チェックSVG" className={styles.icon}/>
//             </div>
//             <img src="./images/check.svg" alt="チェックSVG" className={styles.check}/>
//           </div>
//         </div>
//       </div>
//       <div className={styles.minicontainer2}>
//         <img src="images/15.png" alt="少年画像" className={styles.boy} />
//         <div className={styles.sun_box}>
//           <img src="./images/sun.svg" alt="太陽SVG" className={styles.sun}/>
//         </div>

//       </div>

//     </div>
//   );
// }
