import React, { Component } from 'react';

class JSXClassCompo extends Component {
    render() {
        const user = {
            firstName: 'Khyati',
            lastName: 'Jani'
        };
        //object destructuring means obejct ni propertices ne direct key ni help thi change kari sakay.
        //Q. What is Factory Function?
        //-->the normal function are a factory function and jema this perameter no use thay ene constructer function kahevay.
        //-->variable can store the data.
        //1. Render ni aandar aapde html and script ane return karavi saki.
        //2. Return: koy be thing show karavi che components aandar tayare rrturn use kari chiye.
                //jaya sudhi return use nahi kari taya lagi output nahi male.
        //3. extends inheritance property perform kare che aetale ke eni property ne upgrade kari saki chi je eno parant class hoy eni help thi.
        //4. oops main 4 pillers che like a:
            //1. absraction: hideing internal entities.
            //2. polymorphisam: ek j vastu thi bhadhu open thay like my is camera, calculater etc.
            //3. encapsulation: ek sathe bov bhadhi system ne bhegi karvi.
            //4. inheritance: it means perant class ni property child class ma use thay j.

        // const headeing = "<h1>Something</h1>"
        // const headeing = <h1>Something</h1>
        let something = "My site Title";
        // const headeing = "<h1>"+something+"</h1>"
        // const headeing = `<h1>${something}</h1>`
        const headeing = <h1>{something}</h1>
        return (
            <div>
                {/* JSX: javascript Syntax Extantion.
                         we can write html and js in same they can provide jsx. */}
                {headeing}
                2+2 = {2 + 2}
                <p>FullName : {user.firstName} {user.lastName}</p>
            </div>
        );
    }
}

export default JSXClassCompo;