const { User, Country, Blogpost, Allergy, CountryLanguage, Language, UserAllergy, City, sequelize} = require('./models')

const main = async () => {
  await Allergy.destroy({
    where: {}
  })

  await User.destroy({
    where: {}
  })

  await Country.destroy({
    where: {}
  })

  await Blogpost.destroy({
    where: {}
  })

  await UserAllergy.destroy({
    where: {}
  })

  await Language.destroy({
    where: {}
  })

  await CountryLanguage.destroy({
    where: {}
  })

  const peanut = await Allergy.create({
    name: "peanut",
    icon: 'Here',
    attribution_text: ""
  });

  const nuts = await Allergy.create({
    name: "nuts",
    icon: 'Here',
    attribution_text: ""
  });

  const shellfish = await Allergy.create({
    name: "shellfish",
    icon: 'Here',
    attribution_text: ""
  });

  const fish = await Allergy.create({
    name: "fish",
    icon: 'Here',
    attribution_text: ""
  });

  const dairy = await Allergy.create({
    name: "dairy",
    icon: 'Here',
    attribution_text: ""
  });

  const eggs = await Allergy.create({
    name: "eggs",
    icon: 'Here',
    attribution_text: ""
  });

  const wheat = await Allergy.create({
    name: "wheat",
    icon: 'Here',
    attribution_text: ""
  });

  const user0 = await User.create({
    username: 'Sohpie',
    email: 'email@email.com',
    password_digest: 'testpass'
  })

  let current_path = __dirname;
  let resp = await sequelize.query("ALTER TABLE languages DROP COLUMN created_at");
  console.log(resp);
  resp = await sequelize.query("ALTER TABLE languages DROP COLUMN updated_at");
  console.log(resp);
  resp = await sequelize.query(`COPY languages(language,id,translation_tag,spoken_tag) from '${current_path}/data/language_final.csv' DELIMITER ',' CSV HEADER`);
  console.log(resp);
  resp = await sequelize.query("ALTER TABLE countries DROP COLUMN created_at");
  console.log(resp);
  resp = await sequelize.query("ALTER TABLE countries DROP COLUMN updated_at");
  console.log(resp);
  resp = await sequelize.query(`COPY countries(id,code,name) from '${current_path}/data/country_final.csv' DELIMITER ',' CSV HEADER`);
  console.log(resp);
  resp = await sequelize.query("ALTER TABLE cities DROP COLUMN created_at");
  console.log(resp);
  resp = await sequelize.query("ALTER TABLE cities DROP COLUMN updated_at");
  console.log(resp);
  resp = await sequelize.query(`COPY cities(id,name,country_id) from '${current_path}/data/city_final.csv' DELIMITER ',' CSV HEADER`);
  console.log(resp);
  resp = await sequelize.query("ALTER TABLE countrylanguages DROP COLUMN created_at");
  console.log(resp);
  resp = await sequelize.query("ALTER TABLE countrylanguages DROP COLUMN updated_at");
  console.log(resp);
  resp = await sequelize.query(`COPY countrylanguages(country_id,language_id) from '${current_path}/data/countrylanguage_final.csv' DELIMITER ',' CSV HEADER`);
  console.log(resp);


/*
//creating country 'Japan', city 'Tokyo'
  const tokyo = await City.create({
    name: 'Tokyo',
  });
  const japan = await Country.create({
    name: 'Japan'
  });
  await tokyo.setCountry(japan);

//creating blogpost for Tokyo
  const japan_blogpost = await Blogpost.create({
    title: "My Trip to Japan",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  })
  await japan_blogpost.setCity(tokyo);
  await japan_blogpost.setUser(user0);
*/



  process.exit();
}

main();
