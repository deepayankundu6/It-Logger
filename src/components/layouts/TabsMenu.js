import React, { Fragment } from 'react';
import Logs from '../logs/Logs';

const TabsMenu = () => {

    return (
        <Fragment>
            <div class="row">
                <div class="col s12">
                    <ul class="tabs">
                        <li class="tab col s3"><a href="#test1">Users</a></li>
                        <li class="tab col s3 right"><a class="active" href="#test2">System Logs</a></li>
                    </ul>
                </div>
                <div id="test1" class="col s12">Active users list</div>
                <div id="test2" class="col s12"><Logs></Logs></div>
            </div>
        </Fragment>
    );
}

export default TabsMenu;
