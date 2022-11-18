import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <Note title={notes[0].title} content={notes[0].content} />
      <Note title={notes[1].title} content={notes[1].content} />
      <Footer />
    </div>
  );
}

export default App;
