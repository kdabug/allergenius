const { api } = require('./apiHelper');

//get list of allergies
async function getAllergies() {
  let resp = await api('/allergies/');
  return resp.data;
}

//set allergies for a user
async function setUserAllergy(user_id, allergy_id) {
  let resp = await api.post('http://localhost:4000/allergies/' + user_id,
    {allergy_id}
  );
  return resp.data;
}

async function getUserAllergies(user_id) {
  let resp = await api('http://localhost:4000/allergies/' + user_id);
  return resp.data
}

export {
  getAllergies,
  setUserAllergy,
  getUserAllergies,
}
