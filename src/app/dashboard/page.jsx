import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log("Dashboard Page");
    return (
        <div>
            
            <h1> Dashboard Page</h1>

            <Counter></Counter>
            <ul><li> Item 1</li></ul>
            <ul><li> Item 2</li></ul>
            <ul><li> Item 3</li></ul>
        </div>
    );
};

export default DashboardPage;