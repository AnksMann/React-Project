import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", 
                {id : "parent"}, 
                [
                    React.createElement("div", 
                    {id : "child"},
                    [React.createElement("h1", {}, "Namaste React!"),
                        React.createElement("h2", {}, "I am an h2 Tag!")]),
                
                    React.createElement("div", 
                    {id : "child2"},
                    [React.createElement("h1", {}, "I am an h1 Tag!"),
                        React.createElement("h2", {}, "I am an h2 Tag!")])
                ]
                );

        const root = ReactDOM.createRoot(document.getElementById("root"));

        console.log(parent);

        root.render(parent);