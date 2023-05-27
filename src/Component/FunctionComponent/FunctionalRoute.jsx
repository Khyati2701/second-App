import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import FunctionalCompoState from './02FunctionalCompoState.jsx';
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect';
import FunctionalCompoUseCalback from './04FunctionalCompoUseCalback';
import FunctionalCompoUseMemo from './06FunctionalCompoUseMemo';
import FunctionalCompoUseContext from './07FunctionalCompoUseContext';
import FunctionalCompoUseContextExample from './08UseContext/ContextTutorial'
import FunctionalCompoUseReducer from './09FunctionalCompoUseReducer';

const FunctionalCompoRotue = () => {
        return (
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                        <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                        <Route path="functionalcompousecalback" element={<FunctionalCompoUseCalback />} />
                        <Route path="functionalcompousememo" element={<FunctionalCompoUseMemo />} />
                        <Route path="functionalcompousecontext" element={<FunctionalCompoUseContext />} />
                        <Route path="functionalcompousecontextexample" element={<FunctionalCompoUseContextExample />} />
                        <Route path="functionalcompousereducer" element={<FunctionalCompoUseReducer />} />
                    </Route>
                </Routes>   
        );
    };

export default FunctionalCompoRotue;