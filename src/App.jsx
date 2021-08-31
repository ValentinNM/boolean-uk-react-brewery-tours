import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";
// import "./styles/index.css"

export default function App() {
  return (
    <>
      <Header />
      <main>
        {
          /* Ṛest of components will go here*/
          <article>
            <ListSection />
            <FilterSection />
          </article>
        }
      </main>
    </>
  );
}
