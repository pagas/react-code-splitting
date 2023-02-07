const Tabs = ({title, onTabSelect}) => {

    const clickTab = (tab) => {
        onTabSelect(tab)
    }

    return (
        <div className="tab">
            <div className="title">{title}</div>
            <button className="tablinks" onClick={() => clickTab('photos')}>Photos</button>
            <button className="tablinks" onClick={() => clickTab('comments')}>Comments</button>
        </div>
    );


}

export default Tabs;
