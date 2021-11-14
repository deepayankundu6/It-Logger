import React, { Fragment } from 'react';
import Logs from '../logs/Logs';

const TabsMenu = () => {

    return (
        <Fragment>
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a href="#test1">Technicians</a></li>
                        <li className="tab col s3 right"><a className="active" href="#test2">System Logs</a></li>
                    </ul>
                </div>
                <div id="test1" className="col s12">Active techs list here!!!</div>
                <div id="test2" className="col s12"><Logs></Logs></div>
            </div>
        </Fragment>
    );
}

export default TabsMenu;
