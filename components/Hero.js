import styles from "../styles/Hero.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Hero({ isHome, blogTitle, blogAuthor, blogDate, img }) {
  const [menuboxClicked, isClicked] = useState(false);

  const handleOverlay = () => {
    isClicked(!menuboxClicked);
  };

  return (
    <div className={styles.container}>
      <Image
        src={isHome ? "/largeorangesofaDone.jpg" : img}
        layout="fill"
        alt="landing-image"
        objectFit="cover"
        objectPosition="centre"
        className={styles.img}
        unoptimized
      />
      <div
        className={`${styles.overlay} 
        ${menuboxClicked ? styles["overlay-show"] : styles["overlay-hide"]}`}
      ></div>
      <ul
        className={`${styles["overlay-content"]}
        ${menuboxClicked ? styles["overlay-content-show"] : ""}`}
      >
        <li>
          <Link href={`${isHome ? "#blogs" : "/#blogs"}`}>
            <h2>Blogs</h2>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>

      <div className={styles["header-container"]}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                height={50}
                width={50}
                unoptimized
              />
            </Link>
          </div>
          <span className={styles.menubox} onClick={() => handleOverlay()}>
            <p>Menu</p>
            <span className={styles.toolbar}>
              <span
                className={`${
                  menuboxClicked ? styles["first-line-clicked"] : ""
                }`}
              ></span>
              <span
                className={`${
                  menuboxClicked ? styles["middle-line-clicked"] : ""
                }`}
              ></span>
              <span
                className={`${
                  menuboxClicked ? styles["last-line-clicked"] : ""
                }`}
              ></span>
            </span>
          </span>
        </header>
      </div>
      {isHome ? (
        <div className={styles["text-box"]}>
          <p>Latest Post</p>
          <h1 className={styles.headertag}>Lorem Ipsum Dolor Sit Amet</h1>
          <Link href={`/blogs/lorem-ipsum`}>
            <a className={styles.btn}>
              <span>Read More</span>
            </a>
          </Link>
        </div>
      ) : (
        <div className={styles["text-box"]}>
          <h1 className={styles.headertag}>{blogTitle}</h1>
          <p>By {blogAuthor}</p>
          <p>{blogDate}</p>
          <Link href="/">
            <a className={styles.btn}>
              <span>Back To Home</span>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
