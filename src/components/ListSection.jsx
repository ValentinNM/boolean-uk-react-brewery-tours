export default function ListSection(props) {
  console.log("inside ListSection", props);

  const { breweries } = props;

  return (
    <>
      <h1>List of Breweries from New York</h1>
      <header className="search-bar">
        <form id="search-breweries-form" autocomplete="off">
          <label for="search-breweries">
            <h2>Search breweries:</h2>
          </label>
          <input id="search-breweries" name="search-breweries" type="text" />
        </form>
      </header>
      <article>
        <ul className="breweries-list">
          {breweries.map((brewery) => {
            const { name, brewery_type, address, link } = brewery;

            return (
              <li>
                <h2>{name}</h2>
                <div className="type">brewpub</div>
                <section className="address">
                  <h3>Address:</h3>
                  <p>80 Earhart Dr Ste 20</p>
                  <p>
                    <strong>Williamsville, 14221-7804</strong>
                  </p>
                </section>
                <section className="phone">
                  <h3>Phone:</h3>
                  <p>7169066600</p>
                </section>
                <section className="booking">
                  <button>Book a tour</button>
                </section>
                <section className="link">
                  <a href="http://www.12gatesbrewing.com" target="_blank">
                    Visit Website
                  </a>
                </section>
                {/* {< BookingForm />} */}
              </li>
            );
          })}
          {/* // More list elements */}
        </ul>
      </article>
    </>
  );
}
