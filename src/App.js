import { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Note from "./components/Note";


function App() {
 
  return (
    <div >
      <Header/>
      <CreateNote />

    </div>
  );
}

export default App;
