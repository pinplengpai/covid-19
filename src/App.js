import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ThaiData from './components/ThaiData';
import WorldWideData from './components/WorldWideData';
import SocialDistancing from'./components/SocialDistancing';

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ThaiData} />
                <Route path="/worldwide" exact component={WorldWideData}/>
                <Route path="/socialdisctancing" exact component={SocialDistancing}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App