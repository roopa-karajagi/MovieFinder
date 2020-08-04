import React, { Component } from "react";
import axios from "axios";
import "./Movie.css";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Details: {},
    };
  }

  componentDidMount() {
    //    debugger
    //    console.log(this.props.location.state[0]);
    // let MID = this.props.location.state.id;
    let isExact = this.props.location.state;
    // console.log(MID);
    console.log(this.props);
    if(isExact != null){
      // this.setState({
      //   MID: MID,
      // });
      axios
        .get(`https://www.omdbapi.com/?apikey=b9bd48a6&i=${this.props.match.params.id}&type=movie`)
        .then((response) => {
          console.log(response);
          this.setState({
            Details: response.data,
          });
        });
    }
    else {
      axios
      .get(`https://www.omdbapi.com/?apikey=b9bd48a6&i=tt0372784&type=movie`)
      .then((response) => {
        console.log(response);
        this.setState({
          Details: response.data,
        });
      });
    }
    
  }
  render() {
    const { Details } = this.state;
    // return(
    //   <div>
    //     MovieDetails
    //   </div>
    // )
    return (
      <div className="container-fluid header">
        <div className="row">
          <div className="col-12 py-3">
            <h1 className="text-center"> Movie Details </h1>
            <br />
            <button
              type="button"
              className="btn"
              onClick={(e) =>{
                e.preventDefault(); 
                this.props.history.push("/MovieList")
              } }
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="card-img-top img-thumbnail"
              src={`${Details.Poster}`}
              alt="Poster"
              style={{ width: "100%", height: "75%" }}
            />
          </div>
          <div className="col-6 col-md-6">
            <div className="card-body">
              <ul className="list-group">
                <li className="list-goup-item">Title : {Details.Title}</li>
                <li className="list-goup-item">Year : {Details.Year}</li>
                <li className="list-goup-item">
                  Director : {Details.Director}
                </li>
                <li className="list-goup-item">Language :{Details.Language}</li>
                {Details.Awards === "N/A" ? (
                  `Awards : NO`
                ) : (
                  <li className="list-goup-item">Awards : {Details.Awards}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
