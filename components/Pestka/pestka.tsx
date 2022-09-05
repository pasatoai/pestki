import styles from "./pestka.module.css";
import toggle from "../../public/images/toggle-orange.svg";
import Image from "next/image";

export default function Pestka({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pestka}>
      <Image layout="fill" src={toggle} alt="Statut" />
      {children}
    </div>
  );
}
