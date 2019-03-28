let api = require('./apiHelper');

async function getLanguages() {
  let resp = await api('/languages');
  return resp.data;
}

module.exports = getLanguages;
