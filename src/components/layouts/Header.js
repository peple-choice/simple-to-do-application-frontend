import React from 'react';
const header = (props) => {
    const style = {
        "marginbottom" : "0"
    };

    return (
        <div className="jumbotron text-center" style={style}>
            <h1>Simple To-DO Application Using React + NodeJs + AWS</h1>
        </div>
    )
};
export default header;