import React, { Fragment } from 'react';

const Searchbar = () => {

    return (
        <Fragment>
            <nav style={{ marginBottom: '1%' }} className='blue'>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </Fragment>
    );
}

export default Searchbar;
