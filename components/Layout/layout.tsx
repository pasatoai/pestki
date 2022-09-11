import React from "react";
import styles from "./layout.module.css";

interface BarProps {
  children?: React.ReactNode;
  className?: string;
}

function RightBar({ children }: BarProps) {
  return <div className={styles.rightBar}>{children}</div>;
}

function TopBar({ children, className }: BarProps) {
  const style = [styles.topBar].concat(className ? className : "").join(" ");

  return <div className={style}>{children}</div>;
}

function Content({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const style = [styles.content].concat(className ? className : "").join(" ");

  return <div className={style}>{children}</div>;
}

function Page({
  children,
  isViolet = false,
  className,
}: {
  children: React.ReactNode;
  isViolet?: boolean;
  className?: string;
}) {
  const style = [styles.page]
    .concat(isViolet ? styles.pageViolet : styles.pageWhite)
    .concat(className ? className : "")
    .join(" ");

  return <div className={style}>{children}</div>;
}

export { Page, Content, RightBar, TopBar };
