import axios from "axios";
import { useState } from "react";
import "./App.css";
import SearchResults from "./SearchResults";

const App = () => {
  const [chosenType, setChosenType] = useState("");
  const [chosenMag, setChosenMag] = useState("");
  const [chosenLocation, setChosenLocation] = useState("");
  const [chosenDateRange, setChosenDateRange] = useState("");
  const [chosenSortOption, setchosenSortOption] = useState("");
  const [documents, setDocuments] = useState(null);

  const sendSearchRequest = () => {
    const results = {
      method: "GET",
      url: "http://localhost:3001/results",
      params: {
        type: chosenType,
        mag: chosenMag,
        location: chosenLocation,
        dateRange: chosenDateRange,
        sortOption: chosenSortOption,
      },
    };

    axios
      .request(results)
      .then((response) => {
        console.log(response.data);
        setDocuments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <section className="section">
        <h1 className="title has-text-white">Earthquake Watch</h1>
        <h2 className="subtitle has-text-white">
          Search for earthquakes using the following criteria:
        </h2>
      </section>
      <section className="section">
        <div className="field is-grouped">
          <p className="control select">
            <select
              name="types"
              id="types"
              value={chosenType}
              onChange={(e) => setChosenType(e.target.value)}
            >
              <option value={null}>Select a Type</option>
              <option value="earthquake">Earthquake</option>
              <option value="quarry blast">Quarry Blast</option>
              <option value="ice quake">Ice Quake</option>
              <option value="explosion">Explosion</option>
            </select>
          </p>
          <p className="control select">
            <select
              name="mag"
              id="mag"
              value={chosenMag}
              onChange={(e) => setChosenMag(e.target.value)}
            >
              <option value={null}>Select magnitude level</option>
              <option value="2.5">2.5+</option>
              <option value="5.5">5.5+</option>
              <option value="6.1">6.1+</option>
              <option value="7">7+</option>
              <option value="8">8+</option>
            </select>
          </p>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Enter city, state, country"
              value={chosenLocation}
              onChange={(e) => setChosenLocation(e.target.value)}
            />
          </p>
          <p className="control select">
            <select
              name="dateRange"
              id="dateRange"
              value={chosenDateRange}
              onChange={(e) => setChosenDateRange(e.target.value)}
            >
              <option value="">Select date range</option>
              <option value="7">Past 7 Days</option>
              <option value="14">Past 14 Days</option>
              <option value="21">Past 21 Days</option>
              <option value="30">Past 30 Days</option>
            </select>
          </p>
          <p className="control select">
            <select
              name="sortOption"
              id="sortOption"
              value={chosenSortOption}
              onChange={(e) => setchosenSortOption(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="desc">Largest Magnitude First</option>
              <option value="asc">Smallest Magnitude First</option>
            </select>
          </p>
          <p className="control">
            <button
              className="button"
              onClick={sendSearchRequest}
              disabled={!chosenLocation || !chosenMag}
            >
              Search
            </button>
          </p>
          <p className="control">
            <a
              target="_blank"
              className="button"
              href="http://localhost:5601/app/dashboards#/view/7fd7ac60-a269-11ed-90b9-8332e38098bc?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-query-input=true&show-time-filter=true"
              rel="noreferrer"
            >
              Visualizations
            </a>
          </p>
        </div>
      </section>
      <section className="section">
        <SearchResults documents={documents} />
      </section>
    </div>
  );
};

export default App;
