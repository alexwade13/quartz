import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import articles from '../articles.json' 
import Article from './Article.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articleNo:3
    };
  }

  renderArticle(i,article){
    console.log(article,"art")

    return (
      <div key={i}>
        <Article i={i} className="article" title={article.title} content={article.content}/>
      </div>
      )

  }
  render() {
    let {articleNo} = this.state
    let list = []
    
    for(let i = 0; i <= articleNo; i++){
      list.push(this.renderArticle(i,articles.items[i]))
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="port">
          {list}          
        </div>
      </div>
    );
  }
}

export default App;
