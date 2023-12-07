import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to VersaVerse Blogs!</b> Unleash Your Creativity, Write Anything, Anytime
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Where Every Thought Finds Its Place, Every Idea Takes Flight</h1>
          <p className={styles.postDesc}>
            VersaVerse Blogs is not just a blogging platform; it&apos;s a canvas for your imagination. Whether you&apos;re a seasoned wordsmith or someone with a story to tell, this is the space where your ideas take flight. Embrace the freedom to write about anything and everything under the sun.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
