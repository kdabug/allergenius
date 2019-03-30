let api_key = process.env.REACT_APP_API_KEY;
let axios = require('axios');

const translationAPI = axios.create({
  baseURL: `https://translation.googleapis.com/language/translate/v2?key=${api_key}`
});

const speechAPI = axios.create({
  baseURL: `https://texttospeech.googleapis.com/v1/text:synthesize?key=${api_key}`
})



//q is the phrase being translated, target is Google's code for the target language
/*
 ex. getTranslation("Hi, my name is Austin", "es") ==> translates to Spanish
*/
async function getTranslation (q, target) {
  try {
    let translationRequest = {
        q: q,
        source: "en",
        target: target
      };
      let resp = await translationAPI.post("", translationRequest);
      console.log(resp.data.data.translations[0].translatedText);
      return resp.data.data.translations[0].translatedText; //returns just the translated string
  } catch(e) {
    console.error(e);
  }
}



//speak returns base-64 encoded MP3 data,
//languageCode is a second foreign language identifier
/*
ex. speak('Hola! Me llamo Austin', 'es-ES')
*/
async function speak (text, languageCode) {
  try {
    const request = {
      input: {text},
      voice: {languageCode, ssmlGender: 'FEMALE'},
      audioConfig: {audioEncoding: 'MP3'},
    };
    const audio64BitResp = await speechAPI.post("", request);
    const extracted64Bit = audio64BitResp.data.audioContent;
    return extracted64Bit; //returns file as a 'data://....' type URI
  } catch(e) {
    console.error(e);
  }
}


export {
  speak,
  getTranslation,
}
