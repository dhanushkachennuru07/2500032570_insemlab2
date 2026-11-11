
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("5");
  const [comments, setComments] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        setShow(true);
      }}>

        Name:
        <input value={name}
          onChange={(e) => setName(e.target.value)} />

        <br /><br />

        Rating:
        <select value={rating}
          onChange={(e) => setRating(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <br /><br />

        Comments:
        <textarea value={comments}
          onChange={(e) => setComments(e.target.value)} />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {show && (
        <div>
          <h3>Your Feedback</h3>
          <p>Name: {name}</p>
          <p>Rating: {rating}</p>
          <p>Comments: {comments}</p>
        </div>
      )}
    </div>
  );
}

export default App;
