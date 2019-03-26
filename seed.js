const { Allergy } = require('./models')

const main = async () => {

  await Allergy.destroy({
    where: {}
  })

  /////////////////////////////////////

  const peanut = await Allergy.create({
    name: 'Peanut',
    icon: null
  })

  const nuts = await Allergy.create({
    name: 'Nuts',
    icon: null
  })

  const shellFish = await Allergy.create({
    name: 'Shell Fish',
    icon: null
  })

  const fish = await Allergy.create({
    name: 'Fish',
    icon: null
  })

  const soybean = await Allergy.create({
    name: 'Soybean',
    icon: null
  })

  const dairy = await Allergy.create({
    name: 'Dairy',
    icon: null
  })

  const eggs = await Allergy.create({
    name: 'Eggs',
    icon: null
  })

  const wheat = await Allergy.create({
    name: 'Wheat',
    icon: null
  })

}

main();
