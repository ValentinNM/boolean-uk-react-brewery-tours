import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import { useEffect, useState } from "react";

export default function App() {
  const [stateImput, setStateImput] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [searchedBreweryName, setSearchedBreweryName] = useState("");
  const [cities, setCities] = useState([]);

  console.log("inside breweries STATE: ", breweries);
  // console.log("stateImput: ", stateImput);

  const handleUserImput = (event) => {
    const searchedState = event.target.value;
    // console.log("inside handleUserImput: ", event.target.value);

    setStateImput(searchedState);
  };

  const handleSearchedState = (event) => {
    event.preventDefault();
    // console.log("inside handleSearchedState: ", event.target.value);

    const handleFilterByCity = (event) => {
      const selectedCity = event.target.value;
      console.log("selectedCity: ", selectedCity);
    };

    // useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${stateImput}`)
      .then((res) => res.json())
      .then(
        (breweriesData) => setBreweries(breweriesData)
        // console.log("breweries in STATE: ", breweries)
      );
    // }, []);
  };

  // events for the search brewerie:
  const handleSearchBreweryImput = (event) => {
    const searchedBrewery = event.target.value;
    console.log("inside handleSearchBreweryImput: ", event.target.value);

    setSearchedBreweryName(searchedBrewery);
  };

  useEffect(() => {
    // if searchedBrewery ===
    const filteredByType = breweries.filter((brewery) =>
      brewery.name.includes(searchedBreweryName)
    );
    console.log("filteredByType: ", filteredByType, breweries);

    setBreweries(filteredByType);
  }, [searchedBreweryName]);

  // const handleSearchedBrewery = (event) => {
  //   event.preventDefault();
  //   // console.log("inside handleSearchedBrewery: ", event.target.value);

  //   const handleFilterByCity = (event) => {
  //     const selectedBrewery = event.target.value;
  //     console.log("selectedBrewery: ", selectedBrewery);
  //   };
  // };

  return (
    <>
      <Header
        handleUserImput={handleUserImput}
        handleSearchedState={handleSearchedState}
      />
      <main>
        <FilterSection
          breweries={breweries}
          stateImput={stateImput}
          cities={cities}
          setCities={setCities}
        />
        <ListSection
          searchedBreweryName={searchedBreweryName}
          breweries={breweries}
          handleSearchBreweryImput={handleSearchBreweryImput}
        />
      </main>
    </>
  );
}
