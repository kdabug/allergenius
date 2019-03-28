const Sequelize = require('sequelize');
let sequelize;
if (process.env.DATABASE_URL) {
sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
    returning: true
  }
});
} else {
  sequelize = new Sequelize({
    database: 'allergenius',
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
      underscored: true,
      returning: true
  }
  });
}

const User = sequelize.define('users', {
  username: { type: Sequelize.STRING, allowNull: false},
  email: { type: Sequelize.STRING, allowNull: false},
  password_digest: { type: Sequelize.STRING, allowNull: false},
});

const Allergy = sequelize.define('allergies', {
  name: { type: Sequelize.STRING, allowNull: false},
  icon: { type: Sequelize.STRING, allowNull: false},
});

const Review = sequelize.define('reviews', {
  title: { type: Sequelize.TEXT, allowNull: false},
  content: { type: Sequelize.TEXT, allowNull: false},
});

const Restaurant = sequelize.define('restaurants', {
  name: { type: Sequelize.STRING, allowNull: false},
  address: { type: Sequelize.STRING, allowNull: false},
  yelpId: { type: Sequelize.INTEGER, allowNull: true},
});

const City = sequelize.define('cities', {
  name: { type: Sequelize.STRING, allowNull: false},
});

const Country = sequelize.define('countries', {
  name: { type: Sequelize.STRING, allowNull: false},
});

const Language = sequelize.define('languages', {
  name: { type: Sequelize.STRING, allowNull: false},
  gCode: { type: Sequelize.STRING, allowNull: true},
});

const CountryLanguage = sequelize.define('countrylanguages', {
  name: { type: Sequelize.STRING, allowNull: false},
  isofficial: { type: Sequelize.BOOLEAN, allowNull: true},
});

const Blogpost = sequelize.define('blogposts', {
  title: { type: Sequelize.STRING, allowNull: false},
  content: { type: Sequelize.TEXT, allowNull: false},
})

const UserAllergy = sequelize.define('userallergies');


User.belongsToMany(Allergy, {through: UserAllergy});
Allergy.belongsToMany(User, {through: UserAllergy});

User.hasMany(Review);
Review.belongsTo(User);

Review.hasMany(Allergy);
Allergy.belongsTo(Review);

Country.belongsToMany(Language, {through: CountryLanguage});
Language.belongsToMany(Country, {through: CountryLanguage});

User.hasMany(Blogpost);
Blogpost.belongsTo(User);

Country.hasMany(Blogpost);
Blogpost.belongsTo(Country);


module.exports = {
  User,
  Allergy,
  UserAllergy,
  Review,
  Restaurant,
  City,
  Country,
  CountryLanguage,
  Blogpost,
  sequelize
}
