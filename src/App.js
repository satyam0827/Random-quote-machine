import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({
      randomNum: Math.floor(Math.random() * 4)
    })
  }

  render() {
    const quoteData = [
      { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
      { quote: "Get busy living or get busy dying.", author: "Stephen King" },
      { quote: "You only live once, but if you do it right, once is enough", author: "Mae West" }
    ];
    const styles = [{background:"red", color:"white"},
      {background:"pink",color:"yellow"},
      {background:"yellow",color:"black"},
      {background:"gray",color:"white"}]
      const randomStyle = styles[this.state.randomNum];
    const randomQuote =quoteData[this.state.randomNum]
    return (
      <div className='App' style={{background:randomStyle.background}}>
        <h1>Random Quote Machine</h1>
        <div id='quote-box' style={{background: "white",color:randomStyle.background}}>
          <h2 id='text'><i className='fas fa-quote'></i>{randomQuote.quote}</h2>
          <p id='author'>- {randomQuote.author}</p>
          <button id='btn' style={{background:randomStyle.background}} onClick={this.handleChange}>Next Quote</button>
          <div id='link-div'>
            <a href='#' target='_blank' style={{background:randomStyle.background}}>twitter</a>
            <a href='#' target='_blank' style={{background:randomStyle.background}}>facebook</a>
          </div>
        </div>
        <p id='coder'>by Satyam Kumar</p>
      </div>
    )
  }
}

export default App;
