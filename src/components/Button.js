import React from 'react';

const Button = props => {

    return (
        <div className="d-flex">
        <button type="button" className="btn btn-outline-primary card-button">Details</button>
        <button type="button" className="btn btn-primary card-button">Action</button>
    </div>
    )
}
export default Button