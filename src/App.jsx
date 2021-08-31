import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import { useEffect, useState } from "react";

export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [stateImput, setStateImput] = useState("");

  // const url = `https://api.openbrewerydb.org/breweries?by_state=${stateInput.value}`;
  const url = `https://api.openbrewerydb.org/breweries?by_state`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (breweriesData) => setBreweries(breweriesData),
        console.log("breweries in STATE: ", stateImput)
      );
  }, [stateImput, url]);

  const handleUserImput = (event) => {
    console.log("inside handleUserImput: ", event.target.value);

    const searchedState = event.target.value;

    setStateImput(searchedState);
  };

  return (
    <>
      <Header />
      <main>
        <FilterSection />
        <ListSection />
      </main>
    </>
  );
}
