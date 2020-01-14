import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <header />

                </div>
                <Inventory />
                <Order />
            </div>
        )
    }
}

export default App;