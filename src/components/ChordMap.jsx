import React, { Component } from 'react';
import MapImage from "../MapImage.png"

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
      D: ['D', 'E min', 'E min', 'F min', 'G', 'A', 'B', 'B min'],
      E: ['E', 'F min', 'F min', 'G min', 'A', 'B', 'C', 'C min'],
      F: ['F', 'G min', 'G min', 'A min', 'B', 'C', 'D', 'D min'],
      G: ['G', 'A min', 'A min', 'B min', 'C', 'D', 'E', 'E min'],
      A: ['A', 'B min', 'B min', 'C min', 'D', 'E', 'F', 'F min'],
      B: ['B', 'C min', 'C min', 'D min', 'E', 'F', 'G', 'G min']
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