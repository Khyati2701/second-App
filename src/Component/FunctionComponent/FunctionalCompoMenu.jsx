import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
const FunctionalCompoMenu = () => {
        return (
            <>
            <div className="row">
                <div className="col-6 offset-6">

                <ul>
                    <li><Link to="functionalcompostate">FunctionalCompoState</Link></li>
                    <li><Link to="functionalcompouseeffect">FunctionalCompoUseEffect</Link></li>
                    <li><Link to="functionalcompousecalback">FunctionalCompoUseCalback</Link></li>
                    <li><Link to="functionalcompousememo">FunctionalCompoUseMemo</Link></li>
                    <li><Link to="functionalcompousecontext">FunctionalCompoUseContext</Link></li>
                    <li><Link to="functionalcompousecontext">FunctionalCompoUseContextExample</Link></li>
                    <li><Link to="functionalcompousereducer">FunctionalCompoUseReducer</Link></li>
                </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <Outlet></Outlet>
                </div>
            </div>    
            </>
        );
    };


export default FunctionalCompoMenu;