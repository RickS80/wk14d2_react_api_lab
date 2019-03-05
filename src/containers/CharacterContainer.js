import React, { Component } from "react";
import CharacterSelector from "../components/CharacterSelector";
import CharacterDetail from "../components/CharacterDetail"

class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  handleCharacterSelected(index){
      const SelectedCharacter = this.state.characters[index];
      this.setState({currentCharacter: SelectedCharacter})
  }

  componentDidMount() {
    const url = "http://hp-api.herokuapp.com/api/characters";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ characters: data }));
  }

  render() {
    return (
      <div>
        <h1>Character Container</h1>
        <CharacterSelector characters={this.state.characters} onCharacterSelected = {this.handleCharacterSelected} />
        <CharacterDetail character = {this.state.currentCharacter}/>

      </div>
    );
  }
}

export default CharacterContainer;
