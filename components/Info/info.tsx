import * as L from "../Layout/layout";
import styles from "./info.module.css";
import Image from "next/image";
import girl from "../../public/images/girl.png";

interface Info {}

export default function Info() {
  return (
    <L.Page isViolet={false}>
      <L.TopBar>
        <h1>Kontakt</h1>
      </L.TopBar>
      <L.Content className={styles.content}>
        <div className={styles.container}>
          <div className={styles.infoLinks}>
            <div>siema</div>
            <div>siema</div>
            <div>siema</div>
            <div>siema</div>
            <div>siema</div>
            <div>siema</div>
          </div>
          <div className={styles.girl}>
            <Image layout="fill" alt="Dziewczyna" src={girl} />
          </div>
        </div>
      </L.Content>
    </L.Page>
  );
}
