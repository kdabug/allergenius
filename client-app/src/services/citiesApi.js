const { api } = require("./apiHelper");

const getCities = async () => {
  try {
    const resp = await api.get(`/cities/`);
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export { getCities };
