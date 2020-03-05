import React from 'react';
import {
    render
} from 'react-dom';
import Pet from './Pet';

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Zoey",
            animal: "Dog",
            breed: "Rescue"
        }),
        React.createElement(Pet, {
            name: "Sparty",
            animal: "Dog",
            breed: "Golden Retriever"
        }),
        React.createElement(Pet, {
            name: "Walter",
            animal: "Dog",
            breed: "Chocolate Lab"
        })
    ]);
};

render(React.createElement(App), document.getElementById("root"));