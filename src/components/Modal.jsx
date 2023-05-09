import Router from 'next/router';
import React from 'react'
import styles from "./Modal.module.css";
import {useStore} from "@/components/store"

  const Modal = () => {
    const {visibility} = useStore()
    const setVisibility = useStore((state) => state.setVisibility);
    const handleClick = () => {
      localStorage.clear()
      setVisibility()
      Router.push("./")
    }
    const handleClose = () => {
        setVisibility()
      }

  return (
  <div className={styles.overlay} >
  <div className={styles.content}>
    <p>登録した内容をリセットしますか？</p>
    <div className={styles.yesno}>
      <p onClick={handleClick}><button>はい</button></p>
      <p onClick={handleClose}><button>いいえ</button></p>
    </div>
  </div>
</div>
  )
}

export default Modal
