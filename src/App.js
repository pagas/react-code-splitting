import './App.css';
import {add} from './addition.js';
import OtherComponent from "./components/OtherComponent";
import {lazy, Suspense} from "react";
import {delay} from "./utils";
import LazyComponentBoundary from "./components/LazyComponentBoundary";
import TabsComponent from "./components/tabs/TabsComponent";

/**
 * Example of dynamic import. This will automatically create
 * code split. With file name - src_subtraction_js.chunk.js.
 * Which would be visible in Network tab. And obviously code split is
 * loaded and then clause is run after current module is run.
 */

const OtherComponentLazy = lazy(async () => {
    await delay();
    return import("./components/OtherComponentLazy")
});


const OtherComponentLazy2 = lazy(async () => {
    throw new Error("Lazy component load error!!");
});

import("./subtraction").then(({subtract}) => {
    console.log(subtract(16, 26)); // 4
});
console.log('after load dependencies');
console.log(add(16, 26)); // 4


function App() {
    return (
        <div className="App">
            <h1>Code Splitting</h1>

            <hr/>

            <OtherComponent/>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponentLazy/>
            </Suspense>

            <hr/>
            <LazyComponentBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <OtherComponentLazy2/>
                </Suspense>
            </LazyComponentBoundary>


            <hr/>
            <TabsComponent/>
        </div>
    );
}

export default App;
