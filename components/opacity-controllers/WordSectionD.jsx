"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.51", "start 0.412"],
  });

  const words = paragraph.split(" ");
  return (
    <h4 ref={container} className={styles.paragraphD}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <WordSectionD key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </WordSectionD>
        );
      })}
    </h4>
  );
}

const WordSectionD = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (

    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

