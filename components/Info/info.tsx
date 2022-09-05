import * as L from "../Layout/layout";
import styles from "./info.module.css";
import Image from "next/image";
import girl from "../../public/images/girl.png";
import React from "react";
import Pestka from "../Pestka/pestka";

interface Info {}

export default function Info() {
  return (
    <L.Page isViolet={false}>
      <L.TopBar>
        <h1>Kontakt</h1>
      </L.TopBar>
      <L.Content className={styles.content}>
        <div className={styles.container}>
          <div className={styles.infos}>
            <div>
              <div>
                <span>Telefon</span>
                <span>+48 733 083 370</span>
              </div>
              <div>
                <span>Telefon</span>
                <span>+48 733 083 370</span>
              </div>
              <div>
                <span>Telefon</span>
                <span>+48 733 083 370</span>
              </div>
            </div>
            <Pestka>
              <span>Statut</span>
            </Pestka>
          </div>
          <div className={styles.girl}>
            <Image layout="fill" alt="Dziewczyna" src={girl} />
          </div>
        </div>
      </L.Content>
    </L.Page>
  );
}
