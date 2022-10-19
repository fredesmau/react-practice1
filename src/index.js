import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Input } from "./Input";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div class="container">
      <div class="card">
        <Input class="input" />
        <Button class="button" text="Click me" />
      </div>
    </div>
  </>
);
