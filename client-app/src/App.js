import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Footer from "./components/Footer";
import QueryBar from "./components/QueryBar";
import Header from "./components/Header";
import ExploreHome from "./components/ExploreHome";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Translate from "./components/Translate";
import PlacesHome from "./components/PlacesHome";
import DisplayPlaceData from "./components/DisplayPlaceData";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Faq from "./components/FAQ";
import Contact from "./components/ContactForm";
import FoodAllergenHome from "./components/FoodAllergenHome";
import DisplayFoodAllergen from "./components/DisplayFoodAllergen";
import LogoutForm from "./components/LogoutForm";
import TravelTips from "./components/TravelTips";
import UserProfile from "./components/UserProfile";
import AddBlogPost from "./components/AddBlogPost";
import decode from "jwt-decode";
import { getTranslation, speak } from "./services/googleApiHelper";
import { registerUser, verifyToken, loginUser } from "./services/usersApi";
import { getCities } from "./services/citiesApi";
import { getLanguages } from "./services/languagesApi";
import {
  getCountries,
  getCountry,
  getCountryLanguages
} from "./services/countriesApi";
import { getAllergies } from "./services/allergiesApi";
import { getUserAllergies } from "./services/allergiesApi";
import { getUsersBlogposts } from "./services/blogpostsApi";
import getMedia from "./services/mediaHelper";
import "./App.css";
import { api } from "./services/apiHelper";
import { getBlogposts } from "./services/blogpostsApi";
import EditUserData from "./components/EditUserData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: "",
      registerFormData: {
        username: "",
        email: "",
        password: ""
      },
      currentUser: null,
      toggleLogin: true,
      loginFormData: {
        email: "",
        password: ""
      },
      token: "",
      userData: {},
      userAllergies: [],
      userTrips: [],
      cityList: [],
      countryList: [],
      postList: [],
      languageList: [],
      allergyList: [],
      currentQuery: "",
      userInput: "",
      autocompleteOptions: [],
      activeOption: 0,
      filteredOptions: [],
      showOptions: false
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleQueryKeyDown = this.handleQueryKeyDown.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
    this.handleEditFormChange = this.handleEditFormChange.bind(this);
    this.handleRegisterFormChange = this.handleRegisterFormChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLoginToggle = this.handleLoginToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getAllCities = this.getAllCities.bind(this);
    this.getAllCountries = this.getAllCountries.bind(this);
    this.getAllLanguages = this.getAllLanguages.bind(this);
    this.getAllAllergens = this.getAllAllergens.bind(this);
    this.getMedia = this.getMedia.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  handleQueryChange = e => {
    const { autocompleteOptions } = this.state;
    const userInput = e.currentTarget.value;
    console.log("this is userInput", userInput);
    const filteredOptions = autocompleteOptions
      .filter(
        element =>
          element.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
      .map(
        element =>
          (element.countryName && element.name + ", " + element.countryName) ||
          element.name
      );
    console.log("this is handleQueryChange: filteredOptions", filteredOptions);
    this.setState({
      activeOption: 0,
      filteredOptions: filteredOptions,
      showOptions: true,
      userInput: userInput
    });
  };
  async getMedia(string) {
    console.log("getMedia string", string);
    const photo = await api.get("/places", {
      params: { city_string: string }
    });
    console.log("this is media data", photo.data);
    return photo.data;
  }
  async handleQueryClick(e) {
    //e.preventDefault();
    console.log(
      "this is handlequeryclick: e.currentTarget.innerText",
      e.currentTarget.innerText
    );
    const userInput = e.currentTarget.innerText;
    const currentQuery = this.state.autocompleteOptions.filter(
      element =>
        (element.countryName &&
          element.name + ", " + element.countryName === userInput) ||
        element.name === userInput
    );

    await this.setState((prevState, newState) => ({
      currentQuery: currentQuery,
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: userInput
    }));
    console.log(
      "this is handlequeryclick: this.state.userInput",
      this.state.userInput
    );
    console.log(
      "this is handlequeryclick: this.state.currentQuery",
      currentQuery
    );
    this.props.history.push(
      `/${currentQuery[0].route}/${currentQuery[0].name}/${currentQuery[0].id}`
    );
  }

  handleQueryKeyDown = e => {
    const { activeOption, filteredOptions } = this.state;
    if (e.keyCode === 13) {
      this.setState((prevState, newState) => ({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      }));
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption - 1 === filteredOptions.length) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  handleQuerySubmit(e) {
    const { name, value } = e.target;
    console.log("querySubmit", this.state.userInput);
    this.setState((prevState, newState) => ({
      [name]: value
    }));
  }

  async handleLogin(e) {
    e.preventDefault();
    const { userData } = await loginUser(this.state.loginFormData);
    console.log("this is userData", userData);
    const { id } = userData;
    const userAllergies = await getUserAllergies(id);
    const userTrips = await getUsersBlogposts(id);
    this.setState({
      currentUser: userData,
      userData: {
        id: userData.id,
        username: userData.username,
        email: userData.email
      },
      token: userData.token,
      //token: localStorage.getItem("authToken")
      userAllergies,
      userTrips
    });
    localStorage.setItem("authToken", this.state.token);
    console.log("this is userAllergies", this.state.userAllergies);
    this.props.history.push(
      `/user/${userData.id}/username/${userData.username}`
    );
    // e.preventDefault();
    //const userData = await loginUser(this.state.loginFormData);
    //console.log("userdata from handleLogin", userData);
    // this.setState({
    //   currentUser: userData.data.user.username,
    //   token: userData.data.token,
    //   userData: userData.data.user,
    //   loginFormData: {
    //     email: "",
    //     password: ""
    //   }
    // });
    //localStorage.setItem("jwt", userData.data.token);
  }

  handleLoginToggle(e) {
    e.preventDefault();
    this.setState((prevState, newState) => ({
      toggleLogin: !prevState.toggleLogin
    }));
  }

  async handleRegister(e) {
    e.preventDefault();
    const { registerFormData } = this.state;
    const userData = await registerUser(registerFormData);
    this.setState({
      currentUser: userData,
      userData: {
        id: userData.id,
        username: userData.username,
        email: userData.email
      },
      token: userData.token
    });
    //localStorage.setItem("authToken", userData.data.token);
    this.props.history.push(
      `/user/${userData.id}/username/${userData.username}`
    );
  }

  async handleEdit(e) {
    e.preventDefault();
    // const userData = await editUser(
    //   this.state.userData.id,
    //   this.state.userData
    // );
    // console.log("resp userData from handleEdit", userData);
    // this.setState((prevState, newState) => ({
    //   currentUser: userData.data.user.username,
    //   userData: userData.data.user
    // }));
    // this.props.history.push(
    //   `/user/${this.state.userData.id}/username/${this.state.userData.username}`
    // );
  }

  handleLogout() {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
      toggleLogin: true
    });
    this.props.history.push(`/`);
  }

  handleLoginFormChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value
      }
    }));
  }

  handleRegisterFormChange(e) {
    const { name, value } = e.target;
    console.log("handleRegisterChange name, val", name, value);
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }

  handleEditFormChange(e) {
    const { name, value } = e.target;
    console.log("handleEditChange name, val", name, value);
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }));
  }
  async getAllAllergens() {
    const allergyList = await getAllergies();
    console.log("this is allergy data", allergyList);
    const allergyOpt = allergyList.map(allergy => {
      return { name: allergy.name, id: allergy.id, route: "food-allergens" };
    });
    this.setState((prevState, newState) => ({
      autocompleteOptions: prevState.autocompleteOptions.concat(allergyOpt),
      allergyList: allergyList
    }));
    console.log("autocompleteOptions", this.state.autocompleteOptions);
  }
  async getAllCities() {
    const cityList = await getCities();
    console.log("countryList in cityList", this.state.cityList);

    const cityOpt = cityList.cities.map(city => {
      const countryName = this.state.countryList.countries
        .filter(country => country.id === city.countryId)
        .map(country => country.name);
      return {
        name: city.name,
        id: city.id,
        countryId: city.countryId,
        countryName: countryName[0],
        route: "places-city"
      };
    });
    this.setState((prevState, newState) => ({
      autocompleteOptions: prevState.autocompleteOptions.concat(cityOpt),
      cityList: cityList
    }));
  }
  async getAllLanguages() {
    const languageList = await getLanguages();
    const languagesOpt = languageList.map(element => {
      return { name: element.language, id: element.id, route: "languages" };
    });
    this.setState((prevState, newState) => ({
      autocompleteOptions: prevState.autocompleteOptions.concat(languagesOpt),
      languageList: languageList
    }));
  }
  async getAllCountries() {
    const countryList = await getCountries();
    const countryOpt = countryList.countries.map(country => {
      return { name: country.name, id: country.id, route: "places-country" };
    });
    this.setState((prevState, newState) => ({
      autocompleteOptions: prevState.autocompleteOptions.concat(countryOpt),
      countryList: countryList
    }));
  }
  async getAllPosts() {
    const postList = await getBlogposts();
    console.log("this is postlist", postList);
    this.setState((prevState, newState) => ({
      postList: postList
    }));
  }

  async componentDidMount() {
    await this.getAllLanguages();
    await this.getAllCountries();
    await this.getAllCities();
    await this.getAllAllergens();
    await this.getAllPosts();
    // try {
    //   const { user } = await verifyToken();
    //   if (user !== undefined) {
    //     this.setState({
    //       currentUser: user
    //     });
    //   } else {
    //     this.props.history.push("/");
    //   }
    // } catch (e) {
    //   this.props.history.push("/");
    // }
    const checkUser = localStorage.getItem("authToken");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState((prevState, newState) => ({
        currentUser: user,
        token: checkUser,
        userData: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      }));
    }
  }
  render() {
    return (
      <div className="Main-app-body">
        <Header
          currentUser={this.state.currentUser}
          userData={this.state.userData}
        />
        <Route
          exact
          path="/"
          render={props => (
            <>
              <div className="header-container">
                <h1 className="main-title">Hey traveler</h1>
                <QueryBar
                  onKeyDown={this.handleQueryKeyDown}
                  onFormChange={this.handleQueryChange}
                  onClick={this.handleQueryClick}
                  onSubmit={this.state.handleQuerySubmit}
                  showOptions={this.state.showOptions}
                  userInput={this.state.userInput}
                  filteredOptions={this.state.filteredOptions}
                  activeOptions={this.state.activeOption}
                  placeHolder="Search by city, country, language or allergen"
                />
              </div>

              <ExploreHome {...props} getMedia={this.getMedia} />
            </>
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <>
              <LoginForm
                {...props}
                show={this.state.currentUser}
                toggle={this.state.toggleLogin}
                onChange={this.handleLoginFormChange}
                onSubmit={this.handleLogin}
                email={this.state.loginFormData.email}
                password={this.state.loginFormData.password}
                onClick={this.handleLoginToggle}
              />
              <RegisterForm
                {...props}
                userData={""}
                title={"Register User"}
                onClick={this.handleLoginToggle}
                show={this.state.currentUser}
                toggle={this.state.toggleLogin}
                onChange={this.handleRegisterFormChange}
                onSubmit={this.handleRegister}
                username={this.state.registerFormData.username}
                email={this.state.registerFormData.email}
                password={this.state.registerFormData.password}
                submitButtonText="Submit"
                backButtonText="Back to Login"
                passwordAsk={"y"}
              />
            </>
          )}
        />
        <Route
          exact
          path="/register"
          render={props => (
            <>
              <RegisterForm
                {...props}
                userData={""}
                title={"Register User"}
                onClick={() => this.props.history.push(`/login`)}
                show={this.state.currentUser}
                toggle={this.state.toggleLogin}
                onChange={this.handleRegisterFormChange}
                onSubmit={this.handleRegister}
                username={this.state.registerFormData.username}
                email={this.state.registerFormData.email}
                password={this.state.registerFormData.password}
                submitButtonText="Submit"
                backButtonText="Back to Login"
              />
            </>
          )}
        />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/privacy" render={() => <Privacy />} />
        <Route
          exact
          path="/travel-tips"
          render={() => <TravelTips postList={this.state.postList} />}
        />
        <Route exact path="/FAQ" render={() => <Faq />} />
        <Route
          exact
          path="/food-allergens"
          render={() => <FoodAllergenHome />}
        />
        <Route
          exact
          path="/food-allergens/:allergen_name/:allergen_id"
          render={props => (
            <Translate
              {...props}
              userData={this.state.userData}
              currentQuery={this.state.currentQuery}
              allergies={this.state.allergyList.filter(
                allergen => allergen.name === props.match.params.allergen_name
              )}
              relevantLanguages={this.state.languageList}
            />
          )}
        />
        <Route
          exact
          path="/user/:id/username/:username"
          render={props => (
            <UserProfile {...props} userData={this.state.userData} />
          )}
        />
        <Route
          exact
          path="/user/:id/post"
          render={props => (
            <AddBlogPost
              {...props}
              userData={this.state.userData}
              cityList={this.state.cityList}
            />
          )}
        />
        <Route
          exact
          path="/user/:id/edit"
          render={props => (
            <EditUserData
              {...props}
              userData={this.state.userData}
              title={"Edit User"}
              onChange={this.handleEditFormChange}
              onSubmit={this.handleEdit}
              username={this.state.userData.username}
              email={this.state.userData.email}
              password={this.state.userData.password}
              submitButtonText="Submit Edits"
              backButtonText={"Cancel (Back to Home)"}
              onClick={() => this.props.history.push("/")}
              allergens={this.state.allergyList.map(el => el.name)}
            />
          )}
        />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/places"
          render={props => (
            <PlacesHome
              {...props}
              getMedia={this.getMedia}
              onKeyDown={this.handleQueryKeyDown}
              onFormChange={this.handleQueryChange}
              onClick={this.handleQueryClick}
              onSubmit={this.state.handleQuerySubmit}
              showOptions={this.state.showOptions}
              userInput={this.state.userInput}
              filteredOptions={this.state.filteredOptions}
              activeOptions={this.state.activeOption}
            />
          )}
        />
        <Route
          exact
          path="/places-city/:place_name/:place_id"
          render={props => (
            <Translate
              {...props}
              userData={this.state.userData}
              currentQuery={this.state.currentQuery}
              allergies={this.state.allergyList}
              relevantLanguages={this.state.languageList}
            />
          )}
        />
        <Route
          exact
          path="/places-country/:place_name/:place_id"
          render={props => (
            <Translate
              {...props}
              userData={this.state.userData}
              currentQuery={this.state.currentQuery}
              allergies={this.state.allergyList}
              relevantLanguages={this.state.languageList}
            />
          )}
        />
        <Route
          exact
          path="/languages/:language_name/:language_code"
          render={props => (
            <Translate
              {...props}
              userData={this.state.userData}
              userAllergies={this.state.userAllergies}
              currentQuery={this.state.currentQuery}
              allergies={this.state.allergyList}
              relevantLanguages={this.state.languageList.filter(
                language => language.name === props.params.match.language_name
              )}
            />
          )}
        />
        <Route
          exact
          path="/logout"
          render={props => (
            <LogoutForm {...props} handleLogout={this.handleLogout} />
          )}
        />
        <Route
          exact
          path="/translate"
          render={props => (
            <Translate
              {...props}
              translationRoute={true}
              allergies={this.state.allergyList}
              relevantLanguages={this.state.languageList}
              userAllergies={this.state.userAllergies}
              currentUser={this.state.currentUser}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
