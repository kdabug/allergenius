const { api } = require("./apiHelper");

const getCards = async card_id => {
  try {
    const resp = await api.get(`/cards/` + card_id);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

const makeCard = async (card_id, original, translation) => {
  try {
    const resp = await api.post(`/cards/` + card_id, {
      original,
      translation
    });
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export { getCards, makeCard };
