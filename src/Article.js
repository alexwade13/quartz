import React, { Component } from 'react';
import articles from '../articles.json' 

export default class Article extends React.Component {

  render(){
    let {title, content} = this.props;

    return(
      <div className="article" dangerouslySetInnerHTML={{__html:content}}>

      </div>)
  }
}