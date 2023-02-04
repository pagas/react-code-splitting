import './App.css';
import {add} from './addition.js';
import OtherComponent from "./components/OtherComponent";
import {lazy, Suspense} from "react";

/**
 * Example of dynamic import. This will automatically create
 * code split. With file name - src_subtraction_js.chunk.js.
 * Which would be visible in Network tab. And obviously code split is
 * loaded and then clause is run after current module is run.
 */

const OtherComponentLazy = lazy(() => import("./components/OtherComponentLazy"));
import("./subtraction").then(({subtract}) => {
    console.log(subtract(16, 26)); // 4
});
console.log('after load dependencies');
console.log(add(16, 26)); // 4


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>


            <hr/>
            <OtherComponent/>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponentLazy/>
            </Suspense>

        </div>
    );
}

export default App;
