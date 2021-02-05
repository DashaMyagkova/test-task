import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/slider.jsx'

function App(){
    return (
        <div className="app">
            <Slider/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)