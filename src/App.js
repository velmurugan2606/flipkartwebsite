import Header from "./Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import { UseEffect, useState } from "react";
import { Data } from "./Data";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Data.map((item) => (
          <Card
            image={item.image}
            name={item.name}
            rating={item.rating}
            actualPrice={item.actualPrice}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
