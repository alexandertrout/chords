import React, { Component } from 'react';
import MapImage from "../MapImage2.png"

class ChordMap extends Component {
  state = {
    chordsInKeys: {
      C: ['C',
        'D min',
        'D min',
        'E min',
        'F',
        'G',
        'G',
        'A min'],
      D: ['D', 'E min', 'E min', 'F# min', 'G', 'A', 'A', 'B min'],
      E: ['E', 'F# min', 'F# min', 'G# min', 'A', 'B', 'B', 'C# min'],
      F: ['F', 'G min', 'G min', 'A min', 'Bb', 'C', 'C', 'D min'],
      G: ['G', 'A min', 'A min', 'B min', 'C', 'D', 'D', 'E min'],
      A: ['A', 'B min', 'B min', 'C# min', 'D', 'E', 'E', 'F# min'],
      B: ['B', 'C# min', 'C# min', 'D# min', 'E', 'F#', 'F#', 'G# min']
    },
    key: 'c',
    chords: []
  }

  componentDidMount() {
    this.setState({
      chords: ['C',
        'D min',
        'D min',
        'E min',
        'F',
        'G',
        'G',
        'A min'] })
  }

  handleChange = (event) => {
    const whatKey = event.target.value;
    this.setState({ key: whatKey, chords: this.state.chordsInKeys[whatKey]});
  }

  render() {
    console.log(this.state)
    return (
      <>
      <div class = "chordMap">
          <div class="buttons">
            <button value="C" onClick={this.handleChange}>C</button>
            <button value="D" onClick={this.handleChange}>D</button>
            <button value="E" onClick={this.handleChange}>E</button>
            <button value="F" onClick={this.handleChange}>F</button>
            <button value="G" onClick={this.handleChange}>G</button>
            <button value="A" onClick={this.handleChange}>A</button>
            <button value="B" onClick={this.handleChange}>B</button>
          </div>
        <img src={MapImage} alt="map" width="100%" />
        <div class = "chords">
        {this.state.chords.map((chord, index) => {
          return <div class={`chord-${index+1}`}>{chord}</div>
        })}
        </div>
      </div>
      </>
    );
  }
}

export default ChordMap;