import React from 'react'
import ReactDOM from "react-dom"
import Hello from "./react/Hello.js"

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('content')
);
