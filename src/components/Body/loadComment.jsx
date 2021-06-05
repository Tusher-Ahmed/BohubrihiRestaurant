import React from "react";
import Loading from "./Loading";
import Dateformat from "dateformat";

const LoadComments = (props) => {
  if (props.comentIsLoading) {
    return <Loading />;
  } else {
    return props.comment.map((comments) => {
      return (
        <div key={comments.id}>
          <h5>{comments.author}</h5>
          <p>{comments.comment}</p>
          <p>Rating: {comments.rating}* </p>
          <p>{Dateformat(comments.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
        </div>
      );
    });
  }
};
export default LoadComments;
