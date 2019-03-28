const { User, Country, Blogpost, Allergy, CountryLanguage, Language, UserAllergy} = require('./models')

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

  process.exit();
}

main();
