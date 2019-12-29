import React from 'react';

const loginform = (props) => {
    const isLoaded = props.isLoaded;
    const error = props.error;
    const errorText =  (isLoaded) ? <p>{error}</p> : '';
    
    return (
        <div>
                {errorText}
                <form onSubmit={props.submit} className="needs-validation">
                    <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="username" id="username" onChange={props.changed} required/>
                    </div>
                    <div className="form-group">
                    <label >Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" id="password"  onChange={props.changed} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        )
};
            
export default loginform;