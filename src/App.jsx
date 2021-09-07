import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
import { useEffect, useState } from "react";

function extractCitiesData(breweries) {
  console.log("Inside extractCitiesData: ", breweries);

  // const cityDictionary = {};

  // for (let i = 0; i < breweries.length; i++) {
  //   const brewery = breweries[i];
  //   const city = brewery.city;

  //   if (!cityDictionary[city]) {
  //     cityDictionary[city] = true;
  //   }
  // }

  // console.log("End of for loop: ", Object.keys(cityDictionary));

  // return Object.keys(cityDictionary);

  const cities = breweries.map((brewery) => brewery.city); // city prop of each brewery

  return [...new Set(cities)].sort(); // we return a value = the new array
}

export default function App() {
  const [stateImput, setStateImput] = useState("");
  const [selectedStateImput, setSelectedStateImput] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [searchedBreweryName, setSearchedBreweryName] = useState("");
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  console.log("inside breweries STATE: ", breweries);
  // console.log("stateImput: ", stateImput);

  const handleUserImput = (event) => {
    const searchedState = event.target.value;
    // console.log("inside handleUserImput: ", event.target.value);
    setStateImput(searchedState);
  };

  const handleSelectedStateForm = (event) => {
    event.preventDefault(); // stops the page from full refresh after the submit

    console.log(
      "inside handleSelectedStateForm: ",
      event.target["select-state"].value
    );

    const stateImputJoinLowerCase = stateImput
      .toLowerCase()
      .split(" ")
      .join("_");

    setSelectedStateImput(stateImputJoinLowerCase);
  };

  // below effect is for rendering the cities
  useEffect(() => {
    const citiesData = extractCitiesData(breweries);

    console.log(citiesData);

    setCities(citiesData);
  }, [breweries]);

  useEffect(() => {
    if (selectedStateImput) {
      // if this selectedStateImput has a boolean value = to true action on the below

      fetch(
        `https://api.openbrewerydb.org/breweries?by_state=${selectedStateImput}`
      )
        .then((res) => res.json())
        .then((breweriesData) => {
          setBreweries(breweriesData);
          // console.log("breweries in STATE: ", breweries)

          setBreweries(breweriesData);
        });
    }
  }, [selectedStateImput]);

  // // events for the search brewerie:
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

  const handleSearchedBrewery = (event) => {
    event.preventDefault();
    // console.log("inside handleSearchedBrewery: ", event.target.value);
  };

  // dealing with the city checkbox value
  const handleFilterByCity = (event) => {
    const targetedCityValue = event.target.value;
    console.log("targetedCityValue: ", targetedCityValue);

    const foundCity = filteredCities.find((city) => city === targetedCityValue);

    if (foundCity) {
      // if it doen't exist we are removing it
      // if found city = false
      const updatedFilteredCities = filteredCities.filter(
        (city) => city !== foundCity.city
      );

      setFilteredCities(updatedFilteredCities);
    } else {
      // if it doesn't exist we are adding it
      setFilteredCities([...filteredCities, targetedCityValue]);
    }
  };

  /* deals with checking if the value of
    filtered cities is not empty, therfore by condition
    will be paseed through props adn render the ListSection
    only if the filteredCities array is not empty */
  let filteredBreweries = breweries;

  if (filteredCities.length > 0) {
    filteredBreweries = breweries.filter((brewery) => {
      const breweryCity = brewery.city.toLowerCase();

      console.log(
        "inside filteredBreweries filter method",
        filteredCities,
        breweryCity
      );

      return filteredCities.includes(breweryCity);
    });
  }

  console.log("filteredBreweries: ", filteredBreweries);

  return (
    <>
      <Header
        handleUserImput={handleUserImput}
        handleSearchedState={handleSelectedStateForm}
      />
      {breweries.length > 0 && (
        <main>
          <FilterSection
            // breweries={breweries}
            // stateImput={stateImput}
            // setCities={setCities}
            cities={cities}
            handleFilterByCity={handleFilterByCity}
          />
          <ListSection
            // searchedBreweryName={searchedBreweryName}
            // handleSearchBreweryImput={handleSearchBreweryImput}
            breweries={breweries}
          />
        </main>
      )}
    </>
  );
}
