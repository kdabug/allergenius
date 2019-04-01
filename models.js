const Sequelize = require("sequelize");
let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    operatorsAliases: false,
    define: {
      underscored: true,
      returning: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: "allergenius",
    dialect: "postgres",
    operatorsAliases: false,
    define: {
      underscored: true,
      returning: true,
      timestamps: false
    }
  });
}

const User = sequelize.define("users", {
  username: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  password_digest: { type: Sequelize.STRING, allowNull: false },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

const Allergy = sequelize.define("allergies", {
  name: { type: Sequelize.STRING, allowNull: false },
  icon: { type: Sequelize.STRING, allowNull: false }
});

const Review = sequelize.define("reviews", {
  title: { type: Sequelize.TEXT, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

const Restaurant = sequelize.define("restaurants", {
  name: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  yelpId: { type: Sequelize.INTEGER, allowNull: true },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

const City = sequelize.define("cities", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false }
});

const Country = sequelize.define("countries", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  code: { type: Sequelize.STRING, allowNull: true },
  name: { type: Sequelize.STRING, allowNull: false }
});

const Language = sequelize.define("languages", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  language: { type: Sequelize.STRING, allowNull: false },
  translation_tag: { type: Sequelize.STRING, allowNull: true },
  spoken_tag: { type: Sequelize.STRING, allowNull: true }
});

const CountryLanguage = sequelize.define("countrylanguages");

const Blogpost = sequelize.define("blogposts", {
  text: { type: Sequelize.STRING, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

const UserAllergy = sequelize.define("userallergies");

const Card = sequelize.define("cards", {
  original: { type: Sequelize.STRING, allowNull: false },
  translation: { type: Sequelize.STRING, allowNull: false }
});

User.belongsToMany(Allergy, { through: UserAllergy });
Allergy.belongsToMany(User, { through: UserAllergy });

User.hasMany(Review);
Review.belongsTo(User);

Review.hasMany(Allergy);
Allergy.belongsTo(Review);

Country.hasMany(City);
City.belongsTo(Country);

Country.belongsToMany(Language, { through: CountryLanguage });
Language.belongsToMany(Country, { through: CountryLanguage });

User.hasMany(Blogpost);
Blogpost.belongsTo(User);

City.hasMany(Blogpost);
Blogpost.belongsTo(City);

Blogpost.hasMany(Card);
Card.belongsTo(Blogpost);

module.exports = {
  User,
  Allergy,
  UserAllergy,
  Review,
  Restaurant,
  City,
  Country,
  Language,
  CountryLanguage,
  Blogpost,
  Card,
  sequelize
};
