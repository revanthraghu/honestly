import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import helpfulImg from "@/public/background/helpful.svg";
import Image from "next/image";

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.38", "start 0.32"],
  });

  const words = paragraph.split(" ");
  return (
    <p ref={container} className={styles.paragraphD}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        if (i == words.length - 1) {
          return (
            <WordSectionE
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              <a className="flex flex-row justify-start items-start">
                {word}
                <Image
                  src={helpfulImg}
                  width={91}
                  alt="helpful"
                  style={{ "margin-top": "-4px" }}
                  className="inline-block"
                />
              </a>
            </WordSectionE>
          );
        } else {
          return (
            <WordSectionE
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </WordSectionE>
          );
        }
      })}
    </p>
  );
}

const WordSectionE = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children} </motion.span>
    </span>
  );
};
