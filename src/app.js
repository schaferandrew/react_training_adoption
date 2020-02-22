const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),

    ]);
};

const App = () => {
    return React.createElement(
        "div", {},
        [
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
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);