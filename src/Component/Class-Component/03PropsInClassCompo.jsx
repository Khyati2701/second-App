
import React, { Component } from 'react';
import CustomCard from "./04CompoForCard"
import Student from "./Student";
// import khyati from "img src="./khyati.jpg"
const PropsInClassCompo = () => {
    return (
        <>
            {/* props: it means ek page mathi bijs page ma data change karvo.
             ek page ni propertices ne bijs page ma lay javi */}
             <h1>This is my props</h1>
             <Student name="khyati" 
             email="khyati.jani27@gamil.com" />
        </>
    );
};

export default PropsInClassCompo;