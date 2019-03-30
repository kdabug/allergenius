let api_key = process.env.REACT_APP_PLACES_API_KEY;
let axios = require('axios');
async function getMedia (city_string) {
  try {
    city_string.replace(/ /g, '%20');
    let location_match = await axios(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city_string}&inputtype=textquery&fields=photos&key=${api_key}`);
    let photoreference = location_match.data.candidates[0].photos[0].photo_reference;
    let photo_resp = await axios(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoreference}&key=${api_key}`);
    return photo_resp.request.socket._httpMessage._redirectable._currentUrl;
  } catch(e) {
    console.error(e);
  }
}
export default getMedia;
