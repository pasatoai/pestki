import React from "react";
import styles from "./layout.module.css";

interface BarProps {
  children?: React.ReactNode;
}

function RightBar({ children }: BarProps) {
  return <div className={styles.rightBar}>{children}</div>;
}

function TopBar({ children }: BarProps) {
  return <div className={styles.topBar}>{children}</div>;
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className={styles.content}>{children}</div>;
}

function Page({
  children,
  isViolet = false,
}: {
  children: React.ReactNode;
  isViolet?: boolean;
}) {
  const style = [styles.page]
    .concat(isViolet ? styles.pageViolet : styles.pageWhite)
    .join(" ");

  return <div className={style}>{children}</div>;
}

export { Page, Content, RightBar, TopBar };
