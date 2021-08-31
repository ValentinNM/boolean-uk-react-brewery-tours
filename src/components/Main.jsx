import ListSection from "./components/ListSection"
import FilterSection from "./components/FilterSection"
import {useState} from "react"

export default function Main () { 
  console.log("inside main: ")

  // const [brew]
  return (
    <>
    < article >
    <ListSection />
    <article />
      <aside className="filters-section">
      { < FilterSection/> } 
      <aside />
  </>
  );
}