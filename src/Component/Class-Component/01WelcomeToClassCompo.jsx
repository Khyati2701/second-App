
import React, { Component } from 'react';

class WelcomeToClassCompo extends Component {
    render() {
        return (
            <div>
                <h2>React Class Component</h2>
                <h3>Class Based Components</h3>
                <p>Class is a collection of datamember and member function only</p>
                <p>In react we have render as default method for getting output from class compo</p>
                <p>Before making class based component we need to inherit function form React.Component and this can be done with extends, like this: </p>
                <p>Syntax:</p>
                <div class="code-toolbar">
                    <pre class="language-javascript" tabindex="0">
                        <code class="language-javascript">
                            <span class="token keywrod">class</span>
                            <span class="token operator">&nbsp;</span>
                            <span class="token class-name">cat</span>
                            <span class="token operator">&nbsp;</span>
                            <span class="token keywrod">extends</span>
                            <span class="token class-name">React</span>
                            <span class="token puntuation">.</span>
                            <span class="token clas-name">Component</span>
                            <span class="token punctution">&#10100;</span>
                            <br></br>
                            <span class="token function">render</span>
                            <span class="token function">(</span>
                            <span class="token function">)</span>
                            <span class="token punctution">&#10100;</span>
                            <span class="toke function">return</span>
                            <span class="token operator">&lt;</span>
                            <span class="token heding">h1</span>
                            <span class="token operator">&gt;</span>
                            <span class="token keyword">Meow</span>
                            <span class="token operator">&lt;</span>
                            <span class="token operator">/</span>
                            <span class="token heding">h1</span>
                            <span class="token operator">&gt;</span>
                            <span class="token operator">;</span>
                            <span class="token punctution">&#10101;</span>
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default WelcomeToClassCompo;