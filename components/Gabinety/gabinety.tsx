import * as L from "../Layout/layout";
import styles from "./gabinety.module.css";
import Image from "next/image";

const gabinety = [
  "Kolukszki",
  "Krakow",
  "Bialystok",
  "some",
  "some,fmsefm",
  "djfklsjfklsj",
];

function Gabinet({ city }: { city: string }) {
  return <button className={styles.gabinet}></button>;
}

export default function Gabinety() {
  return (
    <L.Page isViolet={true}>
      <L.TopBar>
        <h1>Lista gabinetów lekarskich</h1>
      </L.TopBar>
      <L.RightBar />
      <L.Content>
        <div className={styles.content}>
          <div className={styles.gabinety}>
            {gabinety.map((g) => (
              <Gabinet key={g} city={g} />
            ))}
          </div>
          <div className={styles.drImage}>
            <Image
              className={styles.drImage}
              alt="Doktor"
              src="/images/dr.png"
              layout="fill"
            />
          </div>
          <div className={styles.beadsImage}>
            <Image alt="Paciorki" src="/images/beads.png" layout="fill" />
          </div>
        </div>
      </L.Content>
    </L.Page>
  );
}
