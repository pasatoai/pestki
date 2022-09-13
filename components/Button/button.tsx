import styles from "./button.module.css";

export default function Button({
  caption,
  onClick,
}: {
  caption: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={styles.gabinet}>
      {caption}
    </button>
  );
}
