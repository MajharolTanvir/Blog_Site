"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? {  backgroundColor: "#fff" }
          : {  backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="Moon" height={14} width={14}></Image>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "#fff" }
        }
      ></div>
      <Image src="/sun.png" alt="Sun" height={14} width={14}></Image>
    </div>
  );
};

export default ThemeToggle;
