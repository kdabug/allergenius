const { User, Allergy } = require('./models')

const main = async () => {
  await Allergy.destroy({
    where: {}
  })

  await User.destroy({
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
    name: 'allergenius',
    email: 'email@email.com',
    password_digest: 'testpass'
  })

  process.exit();
}

main();
