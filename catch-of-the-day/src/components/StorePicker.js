import React from 'react'


class StorePicker extends React.Component {
    render() {
        return (
            <>
                <form action="" className="storeSelector">
                    
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name" name="" id=""/>
                    <button type="submit">Visit Store</button>
                </form>
            </>
        )
    }
};

export default StorePicker;