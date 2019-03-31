const { api } = require("./apiHelper");

const getLanguages = async () => {
  try {
    const resp = await api("/languages");
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export { getLanguages };
