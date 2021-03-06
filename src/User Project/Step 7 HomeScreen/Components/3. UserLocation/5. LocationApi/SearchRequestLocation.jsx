import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import location from "../../../Images/location.png";
import "../../../CSS/Location.css";

function SearchRequestLocation({
  values,
  setValues,
  type,
  setType,
  setServiceProviderPostId,
  setSelected,
  setSelectValue,
  setPostValue
}) {
  const [data, setData] = useState({
    countries: [],
    states: [],
    cities: [],
    areas: [],
  });
  const [count, setCount] = useState(20);
  const [locationstate, setlocationstate] = useState(true);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    if (type === "areas" || type === "apartments" || type === "villages") {
      getListOfarea(values.city.id, values.city.name);
    }
  }, [type]);

  // useEffect(() => {
  //   axios
  //     .get("http://api-maa.in.net/maa/serviceProvider")
  //     .then(async (response) => {
  //       setServiceProvider(response.data.data);
  //     });
  // }, []);

 {/* const api = axios.create({
    baseURL: "http://api-maa.in.net/maa",
});  */}

useEffect(() => {
   manageCountry();
}, []);


  const manageCountry =()=> {
    // serviceProvider.length > 0 &&
    axios
      .get("http://api-maa.in.net/maa/country",
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
      .then(async (response) => {
        setData({ ...data, countries: response.data.data });
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleCount = () => {
    setCount(count + 10);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const key =
      type === "countries"
        ? "country"
        : type === "states"
        ? "state"
        : type === "cities"
        ? "city"
        : type === "areas"
        ? "area"
        : type === "apartments"
        ? "apartment"
        : "village";
    const dataKey = data[type] ? type : "areas";
    const filterData = data[dataKey].filter((item) =>
      item[`${key}Name`].toLowerCase().includes(value)
    );

    if (type === "countries") {
      setCountries(filterData);
    }
    if (type === "states") {
      setStates(filterData);
    }
    if (type === "cities") {
      setCities(filterData);
    }
    if (type === "areas" || type === "villages" || type === "apartments") {
      setAreas(filterData);
    }
  };

  const getListOfStates = (id, countryName) => {
    const country = {
      id: id,
      name: countryName,
    };
    setSelected("")

    setServiceProviderPostId(null);

    setValues({ country: country });
    if (locationstate === true) {
    }
    localStorage.setItem("country", countryName);
    setType("states");
    axios
      .get("http://api-maa.in.net/maa/get/state/" + id,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
      .then((response) => {
        // const fetchCountry = [];
        // serviceProvider.map((item) =>
        //   item.states.map((item2) => fetchCountry.push(item2))
        // );
        // const countryId = fetchCountry.map((item) => item.stateId);
        // const target = response.data.data.filter((item) =>
        //   countryId.includes(item.stateId)
        // );

        // const modifyData = target.filter((item) => item.countryStateId === id);
        setData({ ...data, states: response.data.data });
        setStates(response.data.data);
        setCount(20);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  const getListOfCity = (id, stateName) => {
    const state = {
      id: id,
      name: stateName,
    };
    setSelected("")

    setValues({ country: values.country, state: state });
    setServiceProviderPostId(null);

    if (locationstate === true) {
    }
    setType("cities");
    axios
      .get("http://api-maa.in.net/maa/get/city/" + id,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
      .then((response) => {
        // const fetchCountry = [];
        // serviceProvider.map((item) =>
        //   item.cities.map((item2) => fetchCountry.push(item2))
        // );
        // const countryId = fetchCountry.map((item) => item.cityId);
        // const target = response.data.data.filter((item) =>
        //   countryId.includes(item.cityId)
        // );

        // const modifyData = target.filter((item) => item.stateCityId === id);
        setData({ ...data, cities: response.data.data });
        setCities(response.data.data);
        setCount(20);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  const getListOfarea = (id, cityname) => {
    const city = {
      id: id,
      name: cityname,
    };
    setSelected("")

    const modifiedType = type === "cities" ? "areas" : type;

    const urlConstant =
      type === "cities"
        ? "area"
        : type === "areas"
        ? "area"
        : type === "apartments"
        ? "apartment"
        : "village";

    const modifiedValues = {
      country: values.country,
      state: values.state,
      city: city,
    };

    setValues(modifiedValues);
    setServiceProviderPostId(null);

    if (locationstate === true) {
    }
    setType(modifiedType);
    axios
      .get("http://api-maa.in.net/maa/get/" + urlConstant + "/" + id,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
      .then((response) => {
        // const key = `city${
        //   urlConstant.charAt(0).toUpperCase() + urlConstant.slice(1)
        // }Id`;
        // const urlId = `${urlConstant}Id`;

        // const fetchCountry = [];
        // serviceProvider.map((item) =>
        //   item[modifiedType].map((item2) => fetchCountry.push(item2))
        // );

        // const countryId = fetchCountry.map((item) => item[urlId]);
        // const target = response.data.data.filter((item) =>
        //   countryId.includes(item[urlId])
        // );
        // const modifyData = target.filter((item) => item[key] === id);

        setData({ ...data, areas: response.data.data });
        setAreas(response.data.data);
        setCount(20);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  const getListOfCountry = (id, villagename) => {
    const village = {
      id: id,
      name: villagename,
    };
    setSelected("")

    const urlConstant =
      type === "areas"
        ? false
        : type === "apartments"
        ? "apartment"
        : "village";

    const modifiedValues = {
      country: values.country,
      state: values.state,
      city: values.city,
      area: village,
    };

    if (urlConstant) {
      modifiedValues[urlConstant] = village;
    }

    setValues(modifiedValues);
    setServiceProviderPostId(null);

    if (locationstate === true) {
      setlocationstate(false);
    }
    setType("countries");
    axios
      .get("http://api-maa.in.net/maa/country",
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
      .then((response) => {
        // const fetchCountry = [];
        // serviceProvider.map((item) =>
        //   item.countries.map((item2) => fetchCountry.push(item2))
        // );
        // const countryId = fetchCountry.map((item) => item.countryId);
        // const modifyData = response.data.data.filter((item) =>
        //   countryId.includes(item.countryId)
        // );

        setData({ ...data, country: response.data.data });
        setCountries(response.data.data);
        setCount(20);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  const navigateHandler = (item) => {
    let value;
    if (type == "countries") {
      value = `Country`
    } else if (type == "states") {
      value = `State`
    } else if (type == "cities") {
      value = `City`
    } else if (type == "areas") {
      value = `Area`
    } else if (type == "apartments") {
      value = `Apartment`
    } else if (type == "villages") {
      value = `Village`
    } else {
      value = ""
    }
    setSelectValue(item)
    setPostValue(value)
  }

  const getContent = () => {
    if (type === "countries") {
      return (
        <div>
          <div>
            <div className="location2">
              {countries.map((country) => (
                <li
                  key={country.countryId}
                >
                  <figure className="figure">
                    <figcaption className="figure-caption" onClick={(e) => {
                    getListOfStates(country.countryId, country.countryName);
                  }}>
                      &nbsp;
                      <img
                        src={location}
                        className="figure-img img-fluid rounded"
                        alt="ServiceProvider Image"
                        style={{ height: "40px", width: "40px", margin: "5px" }}
                      />
                      {country.countryName}
                    </figcaption>
                    <p style={{position: "absolute",right: "20%",marginBottom:"0"}}>120 rs.</p>
                    <button style={{position: "absolute",right: "5%"}} className="btn btn-success" onClick={() => navigateHandler(country)}>Select</button>
                  </figure>
                </li>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (type === "states") {
      return (
        <div>
          <div>
            <div className="location2">
              {states.map((state) => (
                <li
                  key={state.stateId}
                  
                >
                  <figure className="figure">
                    <figcaption className="figure-caption" onClick={(e) => getListOfCity(state.stateId, state.stateName)}>
                      &nbsp;
                      <img
                        src={location}
                        className="figure-img img-fluid rounded"
                        alt="ServiceProvider Image"
                        style={{ height: "40px", width: "40px", margin: "5px" }}
                      />
                      {state.stateName}
                    </figcaption>
                    <p style={{position: "absolute",right: "20%",marginBottom:"0"}}>120 rs.</p>
                    <button className="btn btn-success" onClick={() => navigateHandler(state)} style={{position: "absolute",right: "5%"}}>Select</button>
                  </figure>
                </li>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (type === "cities") {
      return (
        <div>
          <div>
            <div className="location2">
              {cities.map((city) => (
                <li
                  key={city.cityId}
                 
                >
                  <figure className="figure">
                    <figcaption className="figure-caption"  onClick={(e) => {
                    getListOfarea(city.cityId, city.cityName);
                  }}>
                      &nbsp;
                      <img
                        src={location}
                        className="figure-img img-fluid rounded"
                        alt="ServiceProvider Image"
                        style={{ height: "40px", width: "40px", margin: "5px" }}
                      />
                      {city.cityName}
                    </figcaption>
                    <p style={{position: "absolute",right: "20%",marginBottom:"0"}}>120 rs.</p>
                    <button className="btn btn-success" onClick={() => navigateHandler(city)} style={{position: "absolute",right: "5%"}}>Select</button>
                  </figure>
                </li>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (
      type === "areas" ||
      type === "apartments" ||
      type === "villages"
    ) {
      const key =
        type === "areas"
          ? "area"
          : type === "apartments"
          ? "apartment"
          : "village";
      return (
        <div>
          <div>
            <div className="location2">
              {areas.map((area) => (
                <li
                  key={area[`${key}Id`]}
                >
                  <figure className="figure">
                    <figcaption className="figure-caption"  onClick={(e) =>
                    getListOfCountry(area[`${key}Id`], area[`${key}Name`])
                  }>
                      &nbsp;
                      <img
                        src={location}
                        className="figure-img img-fluid rounded"
                        alt="Service Provider Image"
                        style={{ height: "40px", width: "40px", margin: "5px" }}
                      />
                      {area[`${key}Name`]}
                    </figcaption>
                    <p style={{position: "absolute",right: "20%",marginBottom:"0"}}>120 rs.</p>
                    <button className="btn btn-success" onClick={() => navigateHandler(area)} style={{position: "absolute",right: "5%"}}>Select</button>
                  </figure>
                </li>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        className="location1"
        placeholder="search.."
        autoComplete="off"
        onChange={(e) => handleSearch(e)}
      />
      <hr></hr>
      {getContent()}
      <div className="view-more-wrapper">
        {data[type] && count < data[type].length && (
          <button onClick={handleCount} className="view-more-user-btn">
            View more
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchRequestLocation;
