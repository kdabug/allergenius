const { api } = require('./apiHelper');

const getCountries = async () => {
  try {
    const resp = await api.get(`/countriesRouter/`);
    console.log(resp.data);
    return resp.data;
  } catch(e) {
    console.error(e);
  };
};

const getCountry = async (countryId) => {
  try {
    const resp = await api.get(`/countriesRouter/${countryId}`)
    console.log(resp.data);
    return resp.data
  } catch(e) {
    console.error(e);
  }
}

const getCountryCities = async (countryId) => {
  try {
    const resp = await api.get(`/countriesRouter/${countryId}/cities`)
    console.log(resp.data);
    return resp.data
  } catch(e) {
    console.error(e);
  }
}

const postCountry = async (name) => {
  try {
    const resp = await api.post('/countriesRouter/', {
      name
    });
    const { data } = resp;
    console.log(data);
    return data;
  } catch(e) {
    console.error(e);
  }
}

const postCity = async (name, countryId) => {
  try {
    const resp = await api.post(`/countriesRouter/${countryId}/cities/`, {
      name,
    })
    const { data } = resp;
    console.log(data);
    return data;
  }
  catch(e) {
    console.error(e);
  }
}

// postCity(":Eric", 3);
// getCountryCities(3);
// getCountries();
// getCountry(3);
// postCountry("darwing")
// postCity("Tree", 3)

export {
  getCountry,
  getCountries,
  getCountryCities,
  postCountry,
  postCity
}
