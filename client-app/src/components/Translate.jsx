import React, { Component } from "react";
import { speak, getTranslation } from '../services/googleApiHelper.js';
import { makeBlogpostCard } from '../services/cardsApi.js';
import { getCountryLanguages } from '../services/countriesApi.js';

class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      countryQuery: (props.countryQuery === undefined) ? props.countryQuery : false,
      cityQuery: (props.cityQuery === undefined) ? props.cityQuery: false ,
      allergyQuery: (props.allergyQuery === undefined) ? props.allergyQuery : false,
      languageQuery: (props.langaugeQuery === undefined) ? props.languageQuery : false,
      translateRoute: (props.translationRoute === undefined) ? true: false,
      questions: [
      "Does this meal contain",
      "What food on the menu has NO",
      "Is this dish made near any"],
      phrases: ["I cannot eat",
      "I have a severe allergy to",
      "I will DIE if I eat"],
      allergies: [],
      relevantLanguages: [],
      selectedAllergy: {name: "shellfish", icon: ""},
      selectedLanguage: {
        language: "Russian",
        id: 156,
        translation_tag: "ru",
        spoken_tag: 'ru-RU'
      },
      translatedQuestions: [],
      translatedPhrases: [],
      questionsAudio: [],
      phrasesAudio: [],
      userToTranslate: "",
      usersTranslation: "",
      usersAudio: "",
      ask: true,
      emphasize: false,
      self: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAllergySelector = this.handleAllergySelector.bind(this);
    this.handleLanguageSelector = this.handleLanguageSelector.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.expandAsk = this.expandAsk.bind(this);
    this.expandEmphasize = this.expandEmphasize.bind(this);
    this.expandSelf = this.expandSelf.bind(this);
  }

  async translateQuestions(q_array, language) {
    const translatedQuestions = await Promise.all(q_array.map(async q => await getTranslation(q + " " + this.state.selectedAllergy.name, language.translation_tag)));
    const questionsAudio = await Promise.all(translatedQuestions.map(async q =>{
      console.log(q);
      console.log(language.spoken_tag);
      return await speak(q, language.spoken_tag)}));
    this.setState({
        translatedQuestions,
        questionsAudio
    })
  }

  async translatePhrases(p_array, language) {
    const translatedPhrases = await Promise.all(p_array.map(async p => await getTranslation(p + " " + this.state.selectedAllergy.name, language.translation_tag)));
    const phrasesAudio = await Promise.all(translatedPhrases.map(async p => await speak(p, language.spoken_tag)));
    this.setState({
        translatedPhrases,
        phrasesAudio
    })
  }


  async getUsersTranslation(q, language) {
    const usersTranslation = await getTranslation(q, language.translation_tag)
    console.log(usersTranslation);
    console.log(q,language);
    const usersAudio = await speak(q, language.spoken_tag)
    this.setState({
      usersTranslation,
      usersAudio
    })
  }

  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target
    this.setState({
      [name]: value
    })
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state.userToTranslate,this.state.selectedLanguage);
    await this.getUsersTranslation(this.state.userToTranslate, this.state.selectedLanguage);
  }

  async handleAllergySelector(ev) {
    const {value} = ev.target;
    await this.setState(prevState => ({
        selectedAllergy: prevState.allergies.filter(allergy => allergy.name === value)[0]
      }));
    await this.translateQuestions(this.state.questions,this.state.selectedLanguage);
    await this.translatePhrases(this.state.phrases,this.state.selectedLanguage);
  }

  async handleLanguageSelector(ev) {
    const {value} = ev.target;
    await this.setState(prevState => ({
      selectedLanguage: prevState.relevantLanguages.filter(language => language.language === value)[0]
    }))
    await this.translateQuestions(this.state.questions,this.state.selectedLanguage);
    await this.translatePhrases(this.state.phrases,this.state.selectedLanguage);
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
    await this.translateQuestions(this.state.questions,this.state.selectedLanguage);
    await this.translatePhrases(this.state.phrases,this.state.selectedLanguage);
    //getCountryLanguages
    //getUserAllergies
    //runTheTranslationScripts
    //need to make dropdown select
  }

  componentWillReceiveProps(nextProps){
  if(nextProps.allergies!==this.props.allergies){
    this.setState({allergies: nextProps.allergies });
    }
  if(nextProps.relevantLanguages !== this.props.relevantLanguages) {
    this.setState({relevantLanguages: nextProps.relevantLanguages });
    }
  /*if(nextProps.currentQuery[0] !== undefined) {
    switch (nextProps.currentQuery[0]) {
      case 'places-city':
        let languages = await getCountryLanguages(nextProps.currentQuery[0].countryId);
        this.setState({
          relevantLanguages: languages
        });
    }
  }*/
  }


  render() {
    const { ask, emphasize, self, questions, translatedQuestions, phrases,
      translatedPhrases, questionsAudio, phrasesAudio, usersTranslation, usersAudio,
      selectedAllergy
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
            <h2>English</h2>
            {questions.map(question => <p>{question} {selectedAllergy.name}</p>)}
          </div>
          <div className="language" id="other">
            <h2>{this.state.selectedLanguage.language}</h2>
            {translatedQuestions.map(question => <p>{question}</p>)}
          </div>
          <div className="language" id="other">
            <h2>Hear It</h2>
            {questionsAudio.map(audio => <audio controls preload="none" src={'data:audio/mp3;base64,' + audio}></audio>)}
          </div>
          <div className="translation-picker">
              <p>Allergies</p>
              <select name='selectedAllergy' onChange={this.handleAllergySelector}>
                {this.state.allergies.map(allergy => <option>{allergy.name}</option>)}
                </select>
                <p>Languages</p>
                <select name='selectedLanguage' onChange={this.handleLanguageSelector}>
                {this.state.relevantLanguages.map(language => <option>{language.language}</option>)}
                </select>
          </div>
        </div>
      </div>
      }

      { emphasize &&
        <div className="outer-communicate">
          <div className="communicate">
            <div className="language" id="english">
              <h2>English</h2>
              {phrases.map(phrase => <p>{phrase} {selectedAllergy.name}</p>)}
            </div>
            <div className="language" id="other">
              <h2>{this.state.selectedLanguage.language}</h2>
              {translatedPhrases.map(phrase => <p>{phrase}</p>)}
            </div>
            <div className="language" id="other">
              <h2>Hear It</h2>
              {phrasesAudio.map(audio => <audio controls preload="none" src={'data:audio/mp3;base64,' + audio}></audio>)}
            </div>
          </div>
        </div>
      }

      { self &&
        <div className="outer-communicate">
          <div className="communicate">
          <form onSubmit={this.handleSubmit}>
            <h2>English</h2>
            <input onChange={this.handleChange} type="text" name="userToTranslate" placeholder="Translate me" value={this.state.userToTranslate} />
            <button type="submit">Submit</button>
          </form>
          <div className="language" id="other">
            <h2>{this.state.selectedLanguage.language}</h2>
            <p>{usersTranslation}</p>
          </div>
          <div className="language" id="other">
            <h2>Hear It</h2>
            <audio controls preload="none" src={'data:audio/mp3;base64,' + usersAudio}></audio>
          </div>
          </div>
        </div>
      }
    </div>
    )
  }
}


export default Translate;


{/**/}
