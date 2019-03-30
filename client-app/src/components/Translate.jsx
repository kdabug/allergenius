import React, { Component } from "react";
import { speak, getTranslation } from '../services/googleApiHelper.js'

class Translate extends Component {
  constructor() {
    super();
    this.state = {
      question1: "Does this meal contain",
      question2: "What food on the menu has NO",
      question3: "Is this dish made near any",
      phrase1: "I cannot eat",
      phrase2: "I have a severe allergy to",
      phrase3: "I will DIE if I eat",
      allergy: "shellfish",
      translatedQuestion1: "",
      translatedQuestion2: "",
      translatedQuestion3: "",
      translatedPhrase1: "",
      translatedPhrase2: "",
      translatedPhrase3: "",
      translatedAllergy: [],
      userTranslateData: {
        userToTranslate: "",
        userTranslated: "word"
      },
      ask: true,
      emphasize: false,
      self: false,
    }
    this.getTranslatedAllergy = this.getTranslatedAllergy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.expandAsk = this.expandAsk.bind(this);
    this.expandEmphasize = this.expandEmphasize.bind(this);
    this.expandSelf = this.expandSelf.bind(this);
  }

  async translateQuestion1(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
        translatedQuestion1: translation
    })
  }

  async translateQuestion2(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
        translatedQuestion2: translation
    })
  }

  async translateQuestion3(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
        translatedQuestion3: translation
    })
  }

  async translatePhrase1(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
        translatedPhrase1: translation
    })
  }

  async translatePhrase2(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
        translatedPhrase2: translation
    })
  }

  async translatePhrase3(q, target) {
    const translation = await getTranslation(q, target)
    console.log(translation);
    console.log(q);
    this.setState({
        translatedPhrase3: translation
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

  expandAsk(ev) {
    this.setState(prevState => ({
    ask: true,
    emphasize: false,
    self: false,
    }))
  }

  expandEmphasize(ev) {
    this.setState(prevState => ({
    ask: false,
    emphasize: true,
    self: false,
    }))
  }

  expandSelf(ev) {
    this.setState(prevState => ({
    ask: false,
    emphasize: false,
    self: true,
    }))
  }


  async componentDidMount() {
    await this.translateQuestion1(this.state.question1, "jpn");
    await this.translateQuestion2(this.state.question2, "jpn");
    await this.translateQuestion3(this.state.question3, "jpn");
    await this.translatePhrase1(this.state.phrase1, "jpn");
    await this.translatePhrase2(this.state.phrase2, "jpn");
    await this.translatePhrase3(this.state.phrase3, "jpn");
    await this.getTranslatedAllergy(this.state.allergy, "jpn");
  }

  render() {
    const { ask, emphasize, self, translatedPhrase, translatedAllergy, question1, question2, question3,
      translatedQuestion1, translatedQuestion2, translatedQuestion3, allergy, phrase1, phrase2, phrase3,
      translatedPhrase1, translatedPhrase2, translatedPhrase3
     } = this.state
  return (
    <div className="translation-container">
      <div className="contact-container">
        <h1>Translations</h1>
        <img src="https://static.thenounproject.com/png/987-200.png" alt="" />
      </div>
      <div className="translate-tabs-container">
        <div className="translate-tabs" id={ask? "selected-tab" : null} onClick={(ev) => this.expandAsk(ev)}>Ask</div>
        <div className="translate-tabs" id={emphasize? "selected-tab" : null} onClick={(ev) => this.expandEmphasize(ev)}>Emphasize</div>
        <div className="translate-tabs" id={self? "selected-tab" : "right-tab"} onClick={(ev) => this.expandSelf(ev)}>Translate Yourself</div>
      </div>

      { ask &&
      <div className="outer-communicate">
        <div className="communicate">
          <div className="language" id="english">
            <h2>EN</h2>
            <p>{question1} {allergy}</p>
            <p>{question2} {allergy}</p>
            <p>{question3} {allergy}</p>
          </div>
          <div className="language" id="other">
            <h2>JPN</h2>
            <p>{translatedQuestion1} {translatedAllergy}</p>
            <p>{translatedQuestion2} {translatedAllergy}</p>
            <p>{translatedQuestion3} {translatedAllergy}</p>
          </div>
        </div>
      </div>
      }

      { emphasize &&
        <div className="outer-communicate">
          <div className="communicate">
            <div className="language" id="english">
              <h2>EN</h2>
              <p>{phrase1} {allergy}</p>
              <p>{phrase2} {allergy}</p>
              <p>{phrase3} {allergy}</p>
            </div>
            <div className="language" id="other">
              <h2>JPN</h2>
              <p>{translatedPhrase1} {translatedAllergy}</p>
              <p>{translatedPhrase2} {translatedAllergy}</p>
              <p>{translatedPhrase3} {translatedAllergy}</p>
            </div>
          </div>
        </div>
      }

      { self &&
        <div className="outer-communicate">
          <div className="communicate">
          <form>
            <input onChange={this.handleChange} type="text" name="userToTranslate" placeholder="Translate me" value={this.state.userToTranslate} />
            <button onSubmit={this.handleSubmit} type="submit">Submit</button>
          </form>
          </div>
        </div>
      }
    </div>
    )
  }
}


export default Translate;


{/**/}
