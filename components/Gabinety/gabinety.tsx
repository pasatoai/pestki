import * as L from "../Layout/layout";

const gabinety = ["Kolukszki", "Krakow", "Bialystok"];

function Gabinet({ city }: { city: string }) {
  return <div>{city}</div>;
}

export default function Gabinety() {
  return (
    <L.Page isViolet={true}>
      <L.TopBar>Lista gabinetow lekarskich</L.TopBar>
      <L.RightBar />
      <L.Content>
        {gabinety.map((g) => (
          <Gabinet key={g} city={g} />
        ))}
      </L.Content>
    </L.Page>
  );
}
