const { api } = require("./apiHelper");

//get blogposts
async function getBlogposts() {
  let resp = await api("/blogposts/");
  return resp.data;
}

//create a blogPost ... make sure you pass user_id and countryId

const createBlogpost = async (user_id, city_id, text, title) => {
  console.log("CREATEBLOGPOST api", api);
  try {
    const resp = await api.post(`/blogposts/user/${user_id}`, {
      text,
      title,
      city_id
    });
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

//get blogposts for a country .. make sure you pass country_id
async function getCitiesBlogposts(city_id) {
  let resp = await api("/blogposts/country/" + city_id);
  return resp.data;
}

//get user's blogposts for a country .. make sure you pass user_id

const getUsersBlogposts = async user_id => {
  try {
    const resp = await api("/blogposts/user/" + user_id);
    console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export { getBlogposts, getUsersBlogposts, getCitiesBlogposts, createBlogpost };
