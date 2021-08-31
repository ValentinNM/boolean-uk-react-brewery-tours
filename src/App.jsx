import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import { useEffect, useState } from "react";

export default function App() {
  // const [breweries, setBreweries] = useState("");
  const [stateImput, setStateImput] = useState("");
  const [breweries, setBreweries] = useState([]);

  console.log("inside STATE: ", breweries);
  console.log("stateImput: ", stateImput);

  // const url = `https://api.openbrewerydb.org/breweries?by_state=${stateInput.value}`;

  const handleUserImput = (event) => {
    const searchedState = event.target.value;
    console.log("inside handleUserImput: ", event.target.value);

    setStateImput(searchedState);
  };

  const handleSubmitTest = (event) => {
    event.preventDefault();
    // const searchedState = event.target.value;
    console.log("inside handleSubmitTest: ", event.target.value);
    // const url = `https://api.openbrewerydb.org/breweries?by_state=${stateImput}&per_page=50`;

    // useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${stateImput}&per_page=50`
    )
      .then((res) => res.json())
      .then(
        (breweriesData) => setBreweries(breweriesData),
        console.log("breweries in STATE: ", breweries)
      );
    // }, []);

    // setStateImput(searchedState);
  };

  return (
    <>
      <Header
        handleUserImput={handleUserImput}
        handleSubmitTest={handleSubmitTest}
      />
      <main>
        <FilterSection />
        <ListSection />
      </main>
    </>
  );
}
