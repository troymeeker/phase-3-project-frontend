import React from "react";
import Actors from "./Actors";
import Movies from "./Movies";
import Genres from "./Genres";

function App(){
    document.title = "Actor Search"

    

return (
    <div>
        <Actors/>
        <Movies/>
        <Genres/>
        
    </div>
)
}

export default App;