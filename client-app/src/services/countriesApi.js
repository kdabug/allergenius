const { api } = require("./apiHelper");

const getCountries = async () => {
  try {
    const resp = await api.get(`/countries`);
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

const getCountry = async countryId => {
  try {
    const resp = await api.get(`/countries/${countryId}`);
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

const getCountryCities = async countryId => {
  try {
    const resp = await api.get(`/countries/${countryId}/cities`);
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

const getCountryLanguages = async countryId => {
  try {
    const resp = await api.get(`/countries/${countryId}/languages`);
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

const postCountry = async name => {
  try {
    const resp = await api.post("/countries/", {
      name
    });
    const { data } = resp;
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

const postCity = async (name, countryId) => {
  try {
    const resp = await api.post(`/countries/${countryId}/cities/`, {
      name
    });

    const { data } = resp;
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

// postCity(":Eric", 3);
// getCountryCities(3);
// getCountries();
// getCountry(3);
// postCountry("darwing")
// postCity("Tree", 3)

export {
  getCountry,
  getCountryLanguages,
  getCountries,
  getCountryCities,
  postCountry,
  postCity
};
