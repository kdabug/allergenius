const { api } = require('./apiHelper');

const getCountries = async () => {
  try {
    const resp = await api.get(`/countriesRouter/`);
    return resp.data;
  } catch(e) {
    console.error(e);
  };
};

const getCountry = async (countryId) => {
  try {
    const resp = await api.get(`/countriesRouter/${countryId}`)
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

getCountryCities(1);

const postCountry = async (name) => {
  try {
    const resp = await api.post('/countriesRouter/', {
      name
    });
    const { data } = resp;
    console.log(name);
    return data;
  } catch(e) {
    console.error(e);
  }
}

// export {
//   getCountry,
//   getCountries,
//   postCountry,
// }
