export default function ListSection(props) {
  console.log("inside ListSection", props);

  const { breweries } = props;

  return (
    <>
      <h1>List of Breweries from "state to be added" </h1>
      <header className="search-bar">
        <form id="search-breweries-form" autocomplete="off">
          <label for="search-breweries">
            <h2>Search breweries:</h2>
          </label>
          <input
            id="search-breweries"
            name="search-breweries"
            type="text"
            // onSubmit = { }
          />
        </form>
      </header>
      <article>
        <ul className="breweries-list">
          {breweries.map((brewery) => {
            const {
              name,
              brewery_type,
              street,
              city,
              phone,
              postal_code,
              website_url
            } = brewery;

            return (
              <li>
                <h2>{name}</h2>
                <div className="type">{brewery_type}</div>
                <section className="address">
                  <h3>Address:</h3>
                  <p>{street}</p>
                  <p>
                    <strong>{city + " " + postal_code}</strong>
                  </p>
                </section>
                <section className="phone">
                  <h3>Phone:</h3>
                  <p>{phone}</p>
                </section>
                <section className="booking">
                  <button>Book a tour</button>
                </section>
                <section className="link">
                  <a href="${website_url}" target="_blank">
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
