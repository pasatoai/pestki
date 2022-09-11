import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as L from "../../components/Layout/layout";
import styles from "./gabinetpage.module.css";

type Decoration = "underline" | "none" | "italic";

type Block = {};

// each section is two subscections

type Section = {
  key: number;
  leftS?: SubSection;
  rightS?: SubSection;
};

type SubSection = {
  name: string;
  blocks: Block[];
};

function Block() {}

function GabinetPage(x: any) {
  const { query } = useRouter();

  const [sections, setSections] = useState<Section[]>([
    {
      key: Math.random(),
      leftS: { name: "Urofizjo", blocks: [] },
      rightS: { name: "Urofizjo2", blocks: [] },
    },
    {
      key: Math.random(),
      leftS: { name: "Urofizjo", blocks: [] },
    },
  ]);

  return (
    <L.Page isViolet={true}>
      <L.TopBar className={styles.topBar}>
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
      <L.Content className={styles.sectionsWrapper}>
        {sections.map(({ key: sk, leftS, rightS }) => (
          <div key={sk} className={styles.section}>
            <div className={styles.subSection}>{leftS?.name}</div>
            <div className={styles.subSection}>{rightS?.name}</div>
          </div>
        ))}
      </L.Content>
    </L.Page>
  );
}

export default GabinetPage;
