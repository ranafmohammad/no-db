import React from "react";
import Button from "./Button";

const Card = props => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          className="card-image"
          src={`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
        />
      </div>
      <div className="description"> {props.movie.overview} </div>
      <div className="card-button">
        <button onClick={this.onEdit}>Edit</button>
        <Button onSubmit={props.onSubmit}> {props.text} </Button>
      </div>
    </div>
  );
};

export default Card;
