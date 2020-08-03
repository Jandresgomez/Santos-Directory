import React from 'react';
import Banner from './Banner.js'
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <h1>Hola</h1>
            </div>
        )
    }
}

export default HomePage;