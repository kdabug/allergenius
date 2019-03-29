const { User, Country, Blogpost, Allergy, CountryLanguage, Language, UserAllergy, City} = require('./models')

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
    icon: 'Here'
  });

  const nuts = await Allergy.create({
    name: "nuts",
    icon: 'Here'
  });

  const shellfish = await Allergy.create({
    name: "shellfish",
    icon: 'Here'
  });

  const fish = await Allergy.create({
    name: "fish",
    icon: 'Here'
  });

  const dairy = await Allergy.create({
    name: "dairy",
    icon: 'Here'
  });

  const eggs = await Allergy.create({
    name: "eggs",
    icon: 'Here'
  });

  const wheat = await Allergy.create({
    name: "wheat",
    icon: 'Here'
  });

  const user0 = await User.create({
    username: 'Sohpie',
    email: 'email@email.com',
    password_digest: 'testpass'
  })

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
