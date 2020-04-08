import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header'
import ThaiData from './components/ThaiData';
import WorldWideData from './components/WorldWideData';

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ThaiData} />
                <Route path="/worldwide" exact component={WorldWideData}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App