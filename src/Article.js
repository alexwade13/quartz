import React, { Component } from 'react';
import filler from './default-thumbnail.jpg';

export default class Article extends React.Component {

  render(){
    let {i, title, content} = this.props;
    let title_style = "title "
    let content_style = "content "
    if(i%2 === 0){
      title_style += "title_even"
      content_style += "content_even"
    } else {
      title_style += "title_odd"
      content_style += "content_odd"
    }

    return(
      <div>
        <h2 className={title_style} dangerouslySetInnerHTML={{__html:title}}/>

        
        <div className="image">
          <img className="filler" src={filler}   />
        </div>

        <div className={content_style} dangerouslySetInnerHTML={{__html:content}}>

        </div>

      </div>)
  }
}