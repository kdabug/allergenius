import React, { Component } from "react";
import { speak, getTranslation } from '../services/googleApiHelper.js'

class Translate extends Component {
  constructor() {
    super();
    this.state = {
      translateData: {
        phrase: "I have a severe allergy to",
        allergy: "nuts",
        translatedPhrase: [],
        translatedAllergy: [],
      },
      userTranslateData: {
        userToTranslate: "",
        userTranslated: ""
      }
    }
    this.getTranslatedPhrase = this.getTranslatedPhrase.bind(this);
    this.getTranslatedAllergy = this.getTranslatedAllergy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async getTranslatedPhrase(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
        translatedPhrase: translation
    })
  }

  async getTranslatedAllergy(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
      translatedAllergy: translation
    })
  }

  async getUserTranslation(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
      userTranslated: translation
    })
  }

  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target
    this.setState(prevState => ({
      userTranslateData: {
        ...prevState.userTranslateData,
        [name]: value
      }
    }))
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const { name, value } = ev.target
    this.setState(prevState => ({
      userTranslateData: {
        ...prevState.userTranslateData,
        [name]: value
      }
    }))
  }

  async componentDidMount() {
    await this.getTranslatedPhrase(this.state.translateData.phrase, "es");
    await this.getTranslatedAllergy(this.state.translateData.allergy, "es");
  }

  render() {
  return (
  <div className="translation-container">
    <div className="contact-container">
      <h1>Translate</h1>
      <h1>Communicate your allergy</h1>
      <h3>Discover What works for you</h3>
    </div>
    <form>
      <input onChange={this.handleChange} type="text" name="userToTranslate" placeholder="Translate me" value={this.state.userToTranslate} />
      <button onSubmit={this.handleSubmit} type="submit">Submit</button>
    </form>
    <div className="communicate">
      <p className="english">{this.state.translateData.phrase} {this.state.translateData.allergy}</p>
      <p className="translated-language">{this.state.translatedPhrase} {this.state.translatedAllergy}</p>
      <p>{this.state.userTranslated}</p>
    </div>
  </div>
 )
  }
}


export default Translate;
