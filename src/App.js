import React from "react";
import DataFetching from './components/DataFetching';
import Header from './components/Header';
import TimeSeries from './components/TimeSeries';

function App () {
    return (
        <div>
            <Header />
            <DataFetching />
            <TimeSeries data={TimeSeries.Thailand}/>
        </div> 
    )
}

export default App