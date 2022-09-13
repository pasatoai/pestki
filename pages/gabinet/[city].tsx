import { ReadStream } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { isErrored } from "stream";
import Button from "../../components/Button/button";
import * as L from "../../components/Layout/layout";
import styles from "./gabinetpage.module.css";

type Decoration = "underline" | "none" | "italic";

type Block = { text: string; decoration: Decoration } | "spacer";

// each section is two subscections

type Lekarz = {
  doctorKey: string;
  name: string;
  blocks: Block[];
};

type Section = {
  sectionKey: string;
  name: string;
  lekarze: Lekarz[];
};

function EditBlock({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.editBlock}>
      {children}
      <div>
        <span>_</span>
        <span>_</span>
      </div>
    </div>
  );
}

// funkcje
// zmien nazwe sekcji
// dodaj lekarza

function Lekarz({
  name,
  blocks,
  onLekarzRemove,
}: {
  name: string;
  blocks: Block[];
  onLekarzRemove: () => void;
}) {
  return (
    <div className={styles.lekarz}>
      <div className={styles.lekarzInfo}>
        <span>{name}</span>
        <button onClick={onLekarzRemove}>x</button>
      </div>
    </div>
  );
}

function Section({
  name,
  lekarze,
  onSectionRemove,
  onLekarzRemove,
  onLekarzAdd,
}: {
  name: string;
  lekarze: Lekarz[];
  onSectionRemove: () => void;
  onLekarzAdd: () => void;
  onLekarzRemove: (doctorKey: string) => void;
}) {
  const [isEdit, setIsEdit] = useState(true);

  const toggleEdit = () => setIsEdit((t) => !t);

  return (
    <div className={styles.subSection}>
      <div className={styles.subSectionDivider}>
        <h2>{name}</h2>
        <p className={styles.padder} />
        <section className={styles.subBlocks}>
          {lekarze.map(({ name, blocks, doctorKey }) => (
            <Lekarz
              key={doctorKey}
              name={name}
              blocks={blocks}
              onLekarzRemove={() => onLekarzRemove(doctorKey)}
            />
          ))}
        </section>
      </div>
      <div className={styles.controls}>
        <Button onClick={onSectionRemove} caption="Usun sekcje" />
        <Button onClick={onLekarzAdd} caption="Dodaj lekarza" />
      </div>
    </div>
  );
}

function GabinetPage(x: any) {
  const { query } = useRouter();

  const [isAdmin, _] = useState(true);

  const [sections, setSections] = useState<Section[]>([]);

  const onSectionRemove = (sectionKey: string) =>
    setSections((s) => s.filter((d) => d.sectionKey !== sectionKey));

  const onLekarzAdd = (sectionKey: string) => {
    const name = window.prompt("Podaj nazwe lekarza");
    if (!name) return;

    const copy = [...sections];

    copy.map((x) => {
      if (x.sectionKey === sectionKey) {
        x.lekarze = x.lekarze.concat({
          name: name,
          doctorKey: Math.random().toString(),
          blocks: [],
        });
      }
      return x;
    });

    setSections(copy);
  };

  const onLekarzRemove = (sectionKey: string, doctorKey: string) =>
    setSections((s) =>
      s.map((k) => {
        if (k.sectionKey === sectionKey) {
          k.lekarze = k.lekarze.filter((dr) => dr.doctorKey !== doctorKey);
        }
        return k;
      })
    );

  const onSectionAdd = () => {
    const name = window.prompt("Podaj nazwe sekcji");
    if (!name) return;

    setSections((s) =>
      s.concat({
        name: name,
        lekarze: [],
        sectionKey: Math.random().toString(),
      })
    );
  };

  console.log(sections);

  return (
    <L.Page isViolet={true}>
      <L.TopBar className={styles.topBar}>
        <div className={styles.topBarLeft}>
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
        </div>
        <Button caption="Dodaj sekcje" onClick={onSectionAdd} />
      </L.TopBar>
      <L.Content className={styles.sectionsWrapper}>
        {sections.map(({ name, lekarze, sectionKey }) => (
          <Section
            key={sectionKey}
            name={name}
            lekarze={lekarze}
            onSectionRemove={() => onSectionRemove(sectionKey)}
            onLekarzAdd={() => onLekarzAdd(sectionKey)}
            onLekarzRemove={(doctorKey: string) =>
              onLekarzRemove(sectionKey, doctorKey)
            }
          />
        ))}
      </L.Content>
    </L.Page>
  );
}

export default GabinetPage;
