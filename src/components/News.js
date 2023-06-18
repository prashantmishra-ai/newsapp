import React, { Component } from 'react'
import NewsItem from './NewsItem.js';
const image = require('../erq.jpg')
export class News extends Component {
  
  constructor(){
    super();
    this.state= {
      articles : [],
      loading : false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=daab5325f97a4dcfad0fa474b5f0bad1"
    let data = await fetch(url);
    let req_data = await data.json()
    this.setState({
      articles : req_data.articles
    })

  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles?.map((element)=>{
            return  <div className="col-md-4 my-3" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:image} newsUrl = {element.url}/>
          </div>
          })}
         
      </div>
    </div>)
  }
}

export default News