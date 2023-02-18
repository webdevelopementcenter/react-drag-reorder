import React from "react";
import { Draggable } from "./lib";
import "./App.css";

export default function App() {
  const state = {
    words: ["Hello", "Hi", "How are you", "Cool"],
    languages: ["C", "C++", "Java", "JS"],
    shows: ["GOT", "Friends", "Big Bang"],
  };

  const getChangedPos = (currentPos: number , newPos: number) => {
    console.log(currentPos, newPos);
  };

  return (
    <Draggable>
      <div className="row">
        <p className="text">Words</p>
        <Draggable onPosChange={getChangedPos}>
          {state.words.map((word, idx) => {
            return (
              <div key={idx} className="flex-item">
                {word}
              </div>
            );
          })}
        </Draggable>
      </div>
      <div className="row">
        <p className="text">Languages</p>
        <Draggable>
          {state.languages.map((lng, idx) => {
            return (
              <div key={idx} className="flex-item">
                {lng}
              </div>
            );
          })}
        </Draggable>
      </div>
      <div className="row">
        <p className="text">Shows</p>
        <Draggable>
          {state.shows.map((lng, idx) => {
            return (
              <div key={idx} className="flex-item">
                {lng}
              </div>
            );
          })}
        </Draggable>
      </div>
    </Draggable>
  );
}
