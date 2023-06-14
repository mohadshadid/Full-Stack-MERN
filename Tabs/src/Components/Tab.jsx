import React ,{useState} from 'react'

const Tab = () => {

    const tabs = [
        { label: 'Tab 1', content: 'Tab 1 content is showing here' },
        { label: 'Tab 2', content: 'Tab 2 content is showing here' },
        { label: 'Tab 3', content: 'Tab 3 content is showing here' }
        ];

        const [label,setLabel]=useState('');
    const onClickHandler = (e, content) => {
        setLabel(content);
      };
        
    return (
    <div>
        {tabs.map((tab, index) => (
                    <div key={index}>
                        <button className="btn btn-outline-secondary m-5 mt-5" onClick={(e) => onClickHandler(e, tab.content)}>{tab.label}</button>
                    </div>
                ))}
                <div>{label}</div>
    </div>
    )
}

export default Tab