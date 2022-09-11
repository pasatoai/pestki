import * as L from "../Layout/layout";
import styles from "./gabinety.module.css";
import Image from "next/image";
import GabinetPage from "../../pages/gabinet/[city]";
import Link from "next/link";

const gabinety = [
  "Koluszki",
  "Krakow",
  "Bialystok",
  "Radom",
  "Torun",
  "Bydgoszcz",
];

function Gabinet({ city }: { city: string }) {
  return (
    <Link href={`/gabinet/${encodeURIComponent(city)}`}>
      <button className={styles.gabinet}>{city}</button>
    </Link>
  );
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
