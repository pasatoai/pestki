import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as L from "../../components/Layout/layout";
import styles from "./gabinetpage.module.css";

function GabinetPage(x: any) {
  const { query } = useRouter();

  return (
    <div className={styles.wrapper}>
      <L.Page isViolet={true}>
        <L.TopBar>
          <Link href="/">
            <a>
              <Image
                className={styles.kursor}
                height="60px"
                width="60px"
                alt="Powrot"
                src={"/images/kursor.svg"}
              />
            </a>
          </Link>
          <h1 className={styles.city}>{query.city}</h1>
        </L.TopBar>
        <L.Content>Siemano</L.Content>
      </L.Page>
      <L.Page isViolet={true}>
        <L.TopBar />
      </L.Page>
    </div>
  );
}

export default GabinetPage;
