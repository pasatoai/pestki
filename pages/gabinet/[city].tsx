import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { isErrored } from "stream";
import * as L from "../../components/Layout/layout";
import styles from "./gabinetpage.module.css";

type Decoration = "underline" | "none" | "italic";

type Block = { text: string; decoration: Decoration };

// each section is two subscections

type Section = {
  key: number;
  leftS: SubSection;
  rightS: SubSection;
};

type SubSection = {
  name?: string;
  blocks?: Block[];
};

function EditBlock({ isEdit, text, decoration }: { isEdit: boolean } & Block) {
  return isEdit ? <input defaultValue={text} /> : <span>{text}</span>;
}

function Block({ text, decoration, isEdit }: Block & { isEdit: boolean }) {
  return isEdit ? <input defaultValue={text} type="text" /> : null;
}

function SubSection({ name, blocks }: SubSection) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={styles.subSection}>
      <input className={styles.subName} defaultValue={name} type="text" />
      <EditBlock
        text={name || "Nowa sekcja"}
        isEdit={isEdit}
        decoration={"none"}
      />
      <p className={styles.padder} />
      <section className={styles.subBlocks}>
        {blocks?.map(({ text, decoration }) => (
          <EditBlock
            key={text}
            text={text}
            isEdit={isEdit}
            decoration={decoration}
          />
        ))}
        {isEdit && <button>Dodaj blok</button>}
      </section>
    </div>
  );
}

function GabinetPage(x: any) {
  const { query } = useRouter();

  const [sections, setSections] = useState<Section[]>([
    {
      key: Math.random(),
      leftS: {
        name: "Urofizjo",
        blocks: [
          { text: "Olek przeszlo", decoration: "italic" },
          { text: "Olek to ja", decoration: "italic" },
          { text: "doesit@gmail.com", decoration: "italic" },
        ],
      },
      rightS: { name: "Urofizjo2", blocks: [] },
    },
    {
      key: Math.random(),
      leftS: { name: "Urofizjo", blocks: [] },
      rightS: {},
    },
  ]);

  const onBlockAdded = (sectionKey: number, isLeftSub: boolean, b: Block) => {};

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
            <SubSection name={leftS?.name} blocks={leftS?.blocks} />
            <SubSection name={rightS?.name} blocks={rightS?.blocks} />
          </div>
        ))}
      </L.Content>
    </L.Page>
  );
}

export default GabinetPage;
