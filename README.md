# allergenius

project 4

**description and user story**
UXDI persona -> insert here

**technologies**

- React and react router
- Zeplin
- Slack and Trello
- CSS and stylized React Components
- Bcrypt and jswebtoken
- Npm packages
- Axios
- Sequelize, express, and postgres

**major problems & solutions**

**MVP**
Our app MVP and post-MVP contains the following:

- Styled front-end using CSS and Stylized Components
- Component-based(React) front-end with an efficient App hierarchy
- User Features:
  - Adding favorite food allergens
  - Adding blogposts about trips
  - Liking a restaurant that is allergen friendly\*
  - Search site by trip location
  - Search site by food allergen
  - Read others' blogposts
  - Create a profile
- An authorization system that allows a user to register and log in
  - oAuth\*
- Server with logical databases and relations between those databases
- User ability to create, update, read, and destroy information in databases
- Administrative Features\*: - See all information(? Is this safe ?)
  Ability to delete and update user information
- Functionality to hit an API and return yelp(\*) and google translate data to the user

\*all items marked with (\*) are POST-MVP items

**component library**
List of react components:

- Login (function)
- Register (function)
- Logout (function)
- Home (function)
- UserProfile (function)
  - DisplayUserData (function)
  - EditUserData (function)
  - AddBlogPost (function)
- Contact (function)
- Query (function)
- Places (Class, added state of cityData)
- FoodAllergens (Class, added state of foodAllergyData)
- TravelTips (Class, added state of languageData and countryData)
- Translate (function)
- Explore (function) - on landing page comprised of three lists of allergies, places, and traveltips
- List (function - displays lists of data)
- FAQ, ABOUT, PRIVACY forms (all function)
- Header (function)
- Footer (function)

**API**
googleTranslate API
post-MVP yelp API

**databases and relations**
See database photo in images.
List of databases:

- Users (hasManyBlogposts hasManyFoodAllergens)
- FoodAllergens (hasManyUsers hasManyBlogposts)
- Blogposts (belongsToUser belongsToAllergen belongsToCity)
- City (hasManyBlogPosts)

**code snippet**
