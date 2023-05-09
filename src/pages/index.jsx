

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from './index.module.css'
import {gsap} from "gsap";

export default function Splash() {
  const router = useRouter()
  const elementRef = useRef(null)
  useEffect(() => {

    gsap.to(elementRef.current, {
      opacity:0,
      duration:2,
      onComplete:()=>{
        router.push("/swiper")
      }
    });
  }, [])

  return (
    <div  ref={elementRef} className={styles.container}>
      <div className={styles.title_box}>
        <h1 className={styles.title}>寿命見える化アプリ</h1>
      </div>
      <div className={styles.img_box}>
        <img src='images/1.png' alt='少年画像' className={styles.boy} />
      </div>
    </div>
  )
}
