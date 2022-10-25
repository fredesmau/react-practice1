import { useState } from "react";
import { saveAs } from "file-saver";
import "./mainpage.css";


export function MainPage() {
  const [myValue, setMyValue] = useState('')

  const createTxt = () => {
    const blob = new Blob([myValue], {type: 'text/plain;charset=utf-8'});
    saveAs( blob, 'inputSaves.txt' );
  }
  
    return (
      <>
      <div class= "background">
      <div class="container">
      <div class="card">
        <h1 class="welcome-text">Welcome visitor!</h1>

        <input type="text" class="input" placeholder="Enter your text here" 
        value={ myValue } onChange={( text ) => setMyValue(text.target.value) }/>

        <button class="button" onClick={createTxt} >
          <span>Click me</span>
        </button>
        </div>
        </div>
        </div>
      </>
    );/*  */
}/*  */

  

