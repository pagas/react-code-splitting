import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from "react";
import {delay} from "./utils";

const Home = lazy(async () => {
    await delay()
    return import('./components/routes/Home')
});
const About = lazy(() => import('./components/routes/About'));

function App() {
    return (
        <div className="App">

            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
