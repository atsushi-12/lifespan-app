import Head from "next/head";
import { useState } from "react";
import styles from "./todos.module.css";

export default function ToDos(props) {
  const [todos, setTodos] = useState(["", "", ""]);

  const handleChange = (event, index) => {
    const value = event.target.value;
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>todos</title>
      </Head>
      <div className={styles.todos}>
        <div className={styles.todo}>
          <div className={styles.number_box}>
            <div className={styles.number}>1</div>
          </div>

          <input type="text" className={styles.text} placeholder={props.placeholder} onChange={(e) => handleChange(e, 0)}/>
        </div>

        <div className={styles.todo}>
          <div className={styles.number_box}>
            <div className={styles.number}>2</div>
          </div>
          <input type="text" className={styles.text} placeholder={props.placeholder} onChange={(e) => handleChange(e, 1)}/>
        </div>

        <div className={styles.todo}>
          <div className={styles.number_box}>
            <div className={styles.number}>3</div>
          </div>
          <input type="text" className={styles.text} placeholder={props.placeholder} onChange={(e) => handleChange(e, 2)}/>
        </div>
      </div>
    </div>
  );
}
