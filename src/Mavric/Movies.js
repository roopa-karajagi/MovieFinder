// import 'dotenv'
import React, { Component } from "react";
import axios from "axios";
import "./Movie.css";
import MovieList from "./MovieList/MovieList";
// import About from "./About";

const apiKey = "b9bd48a6";
class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movielist: [],
      Title: "",
      load:true,
      currentPage:1,
      totalResults:0
    };
  }

  //By Default
  componentDidMount() {
    const apiKey = "b9bd48a6";
    console.log(apiKey);
    let Url = `http://www.omdbapi.com/?apikey=${apiKey}&s=batman&type=movie`;
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movielist: data.Search,
        });
        // console.log(this.state.movielist);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.state.Title}&type=movie&page=${this.state.currentPage}`
      )
      .then((response) => {
        console.log(response)
        // let data = response.data.Search;
        this.setState({
          movielist:[...response.data.Search],
          totalResults:response.data.totalResults
        });
      })
  };

  SelectedMovie = (id) => {
    //   console.log(event);
    console.log(id);
    this.props.history.push(`/MovieDetails/${id}`, [id]);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      Title  : e.target.value,
      totalResults : 0,
      currentPage : 1,
      load:true
    });
  };

  getUser =()=>{
    axios
    .get(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.state.Title}&type=movie&page=${this.state.currentPage}`
    )
    .then((response) => {
      console.log(response)
      // let data = response.data.Search;
      this.setState((prevState)=>({
        movielist: [...this.state.movielist,...response.data.Search],
        totalResults:prevState.totalResults-10
      }),()=>{console.log(this.state.totalResults)});
    });
  }

  LoadMore=()=>{
    // console.log(this.state.Title);
    // console.log(this.state.totalResults);
        const pageNumber = Math.floor(this.state.totalResults/10);
        console.log(pageNumber)
        if(this.state.currentPage <=pageNumber)
        {
          this.setState((prevState)=>{
            return {
              currentPage:prevState.currentPage+1,
            }
          },()=>{this.getUser()})
        }
        else{
             this.setState({
               load:false
             })
        }
    
}

  render() {
    const {Title, movielist,load} = this.state;
    // console.log(movielist , Title);
    return (
      <div className="main">
        <h1> Movies Search</h1>
        <form autoComplete="on" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control-lg movie-input"
              type="text"
              placeholder="Movie Search"
              value={Title}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            {/* <ul className="auto" style={{display:"none"}}>
                
            </ul> */}
            <button type="submit" className="btn btn-primary btn-lg">
              Search
            </button>
          </div>
        </form>

          <MovieList SelectedMovie={this.SelectedMovie} MovieList={movielist} />
        
        {load ? <button className="btn btn-primary"
        onClick={this.LoadMore}>Load More</button> :<h1 className="noload" >Sorry!!! No More Movies</h1> }
      </div>
    );
  }
}

export default Movies;
