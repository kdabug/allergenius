const { api } = require('./apiHelper');

const getBlogpostCards = async (blogpost_id) => {
  try {
    const resp = await api.get(`/cards/` + blogpost_id);
    return resp.data;
  } catch(e) {
    console.error(e);
  };
}

const makeBlogpostCard = async (blogpost_id, original, translation) => {
  try {
    const resp = await api.post(`/cards/` + blogpost_id, {
      original,
      translation
    });
    return resp.data;
  } catch(e) {
    console.error(e);
  };
}

export {
  getBlogpostCards,
  makeBlogpostCards
}
