import React, { Suspense, startTransition } from 'react';
import Tabs from './Tabs';
import Glimmer from './Glimmer';
import {delay} from "../../utils";

const Comments = React.lazy(async () => {
    await delay();
    return import('./Comments');
});
const Photos = React.lazy(async () => {
    await delay();
    return import('./Photos')
});

function TabsComponent() {
    const [tab, setTab] = React.useState('photos');

    function handleTabSelect(tab) {
        // change UI only after finish loading and doesn't block the old UI
        startTransition(() => {
            setTab(tab);
        });
    }

    return (
        <div className="tabs-container">
            <Tabs title={'List of actions'} onTabSelect={handleTabSelect} />
            <div className="tabs-content">
                <Suspense fallback={<Glimmer />}>
                    {tab === 'photos' ? <Photos /> : <Comments />}
                </Suspense>
            </div>
        </div>
    );
}

export default TabsComponent;
