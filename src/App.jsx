import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import { useEffect, useState } from "react";

export default function App() {
  const [stateImput, setStateImput] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [breweryName, setBreweryName] = useState([]);
  const [cities, setCities] = useState([])

  console.log("inside breweries STATE: ", breweries);
  // console.log("stateImput: ", stateImput);

  const handleUserImput = (event) => {
    const searchedState = event.target.value;
    // console.log("inside handleUserImput: ", event.target.value);

    setStateImput(searchedState);
  };

  const handleSubmitTest = (event) => {
    event.preventDefault();
    // console.log("inside handleSubmitTest: ", event.target.value);

    const handleFilterByCity = (event) => {
      const selectedCity = event.target.value;
      console.log("selectedCity: ", selectedCity);
    };

    // useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${stateImput}&per_page=50`
    )
      .then((res) => res.json())
      .then(
        (breweriesData) => setBreweries(breweriesData)
        // console.log("breweries in STATE: ", breweries)
      );
    // }, []);
  };

  return (
    <>
      <Header
        handleUserImput={handleUserImput}
        handleSubmitTest={handleSubmitTest}
      />
      <main>
        <FilterSection
        breweries={breweries}
        stateImput={stateImput}
        cities={cities}
        setCities={setCities}
        />
        <ListSection breweries={breweries} />
      </main>
    </>
  );
}
