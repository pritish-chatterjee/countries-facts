import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./styling/app.css";
const axios = require("axios");

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (response) {
      let responseArray = response.data.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );
      setAllCountries(responseArray);
    });
  }, []);

  const handleInputValue = (event) => {
    setCountry(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then(function (response) {
        setCountryData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch(function (error) {
        alert("No such country found. Try Again!");
      });
    setCountry("");
  };

  const handleNewCountry = (event) => {
    let newCountry = event.target.value;
    axios
      .get(`https://restcountries.com/v3.1/name/${newCountry}`)
      .then(function (response) {
        setCountryData(response.data[0]);
      })
      .catch(function (error) {
        alert("No such country found. Try Again!");
      });
    setCountry("");
  };

  const handleNewCountryByCode = (event) => {
    let newCountry = event.target.value;
    axios
      .get(`https://restcountries.com/v3.1/alpha/${newCountry}`)
      .then(function (response) {
        setCountryData(response.data[0]);
      })
      .catch(function (error) {
        alert("No such country found. Try Again!");
      });
    setCountry("");
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="app-container">
        <div className="info-container">
          <form className="d-flex country-form" role="search">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search a country"
              aria-label="Search"
              value={country}
              onChange={handleInputValue}
            />
            <button
              type="submit"
              className="btn btn-primary country-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        {countryData !== null && (
          <div className="main-container">
            <div className="card">
              <div className="country-img">
                <img
                  src={countryData.flags.png}
                  className="card-img-top main-flag"
                  alt="..."
                />
              </div>
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                  <b>Name :</b> {countryData.name.common}
                </li>
                <li className="list-group-item">
                  <b>Capital City :</b> {countryData.capital[0]}
                </li>
                <li className="list-group-item">
                  <b>Population :</b>{" "}
                  {(countryData.population / 1000000).toFixed(2)} million
                </li>
                <li className="list-group-item">
                  <b>Currency :</b> {Object.keys(countryData.currencies)[0]}
                </li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                  <b>Area :</b> {countryData.area} km2
                </li>
                <li className="list-group-item">
                  <b>Official Language : </b>
                  {countryData.languages[Object.keys(countryData.languages)[0]]}
                </li>
                <li className="list-group-item">
                  <b>Region :</b> {countryData.region}
                </li>
                <li className="list-group-item">
                  <b>Map Link : </b>
                  <a href={countryData.maps.googleMaps} target="blank">
                    Visit Now
                  </a>
                </li>
              </ul>
            </div>
            <div className="card neighbors">
              <span className="neighbors-list-name">
                <b>Neighbors :</b>
              </span>
              {!countryData.borders && (
                <div>
                  <em> No Neighbors</em>
                </div>
              )}
              {countryData.borders &&
                countryData.borders.map((item, index) => {
                  return (
                    <li className="list-group-item neighbor-btns">
                      {" "}
                      <button
                        onClick={handleNewCountryByCode}
                        type="button"
                        className="btn btn-dark "
                        value={item}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
            </div>
          </div>
        )}
        <div className="card-header">
          <b>All Countries (Click on a country to get its details)</b>
        </div>
        <div className="card countries-list">
          <ul className="list-group list-group-vertical">
            {allCountries.map((item, index) => {
              return (
                <li key={index} className="list-group-item">
                  <button
                    onClick={handleNewCountry}
                    type="button"
                    className="btn btn-dark "
                    value={item.name.common}
                  >
                    {item.name.common}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
