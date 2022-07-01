import React, { useState } from "react";
import "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchRequestLocation from "../5. LocationApi/SearchRequestLocation";

const LocationView = ({ value, onClick, isBackground }) => {
  return (
    <div
      className={
        isBackground ? "location-wrapper background-ececec" : "location-wrapper"
      }
    >
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

function LocationApi({
  values,
  setValues,
  type,
  setType,
  setServiceProviderPostId,
  setSelected,
  setSelectValue,
  setPostValue,
  col
}) {
  const handleClearAll = () => {
    setValues({
      country: {
        id: "",
        name: "",
      },
      state: {
        id: "",
        name: "",
      },
      city: {
        id: "",
        name: "",
      },
      area: {
        id: "",
        name: "",
      },
      apartment: {
        id: "",
        name: "",
      },
      village: {
        id: "",
        name: "",
      },
    });
    setType("countries");
    setServiceProviderPostId(null);
    setSelected("")
  };

  const handleSelectedValue = (value) => {
    if (value === "countries") {
      setValues({
        country: values.country,
        state: {
          id: "",
          name: "",
        },
        city: {
          id: "",
          name: "",
        },
        area: {
          id: "",
          name: "",
        },
        apartment: {
          id: "",
          name: "",
        },
        village: {
          id: "",
          name: "",
        },
      });
      setType("states");
    }
    if (value === "states") {
      setValues({
        country: values.country,
        state: values.state,
        city: {
          id: "",
          name: "",
        },
        area: {
          id: "",
          name: "",
        },
        apartment: {
          id: "",
          name: "",
        },
        village: {
          id: "",
          name: "",
        },
      });
      setType("cities");
    }
    if (value === "cities") {
      setValues({
        country: values.country,
        state: values.state,
        city: values.city,
        area: {
          id: "",
          name: "",
        },
        apartment: {
          id: "",
          name: "",
        },
        village: {
          id: "",
          name: "",
        },
      });
      setType("areas");
    }
    if (value === "areas") {
      setType("areas");
    }
    if (value === "apartments") {
      setType("apartments");
    }
    if (value === "villages") {
      setType("villages");
    }
    setServiceProviderPostId(null);
    setSelected("")
  };

  const key =
    type === "countries"
      ? "country"
      : type === "states"
      ? "state"
      : type === "cities"
      ? "city"
      : "area";
  return (
    <>
      <div className={col && "col-4"}>
        <div className="list-location-view">
          {values.country.id && (
            <LocationView
              value={values.country.name}
              onClick={() => handleSelectedValue("countries")}
              isBackground
            />
          )}
          {values?.state?.name && (
            <LocationView
              value={values.state.name}
              onClick={() => handleSelectedValue("states")}
              isBackground
            />
          )}
          {values?.city?.name && (
            <LocationView
              value={values.city.name}
              onClick={() => handleSelectedValue("cities")}
              isBackground
            />
          )}
          {values?.area?.name && (
            <LocationView value={values.area.name} isBackground />
          )}
          {values?.country?.name && (
            <LocationView value="clear all" onClick={handleClearAll} />
          )}
        </div>
        <div className="list-location-view">
          <LocationView
            value={`Select ${key}`}
            onClick={() =>
              key === "area" ? handleSelectedValue("areas") : null
            }
            isBackground={type === "areas"}
          />

          {values?.city?.name && !values?.area?.name && (
            <LocationView
              value="Apartment"
              onClick={() => handleSelectedValue("apartments")}
              isBackground={type === "apartments"}
            />
          )}
          {values?.city?.name && !values?.area?.name && (
            <LocationView
              value="Village"
              onClick={() => handleSelectedValue("villages")}
              isBackground={type === "villages"}
            />
          )}
        </div>
        <SearchRequestLocation
          values={values}
          setValues={setValues}
          type={type}
          setType={setType}
          setServiceProviderPostId={setServiceProviderPostId}
          setSelected={setSelected}
          setSelectValue={setSelectValue}
          setPostValue={setPostValue}
          col={col}
        />
      </div>
    </>
  );
}

export default LocationApi;
