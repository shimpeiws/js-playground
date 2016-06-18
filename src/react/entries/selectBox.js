import React from 'react'
import ReactDOM from "react-dom"
import OriginalSelectBox from "./../components/selectBox/original/Main"
import OOPSelectBox from "./../components/selectBox/oop/Main"

ReactDOM.render(
  (
    <div>
      <OriginalSelectBox />
      <OOPSelectBox />
    </div>
  ),
  document.getElementById('content')
);
