import React, {useState} from 'react';

const App = () => {

    const [count, setCount] = useState(0)

    const changeCount = (e) => {
        setCount(e.target.value)
    }

    return (
        <div>
            <input type="text" value={count} onChange={changeCount}/>
        </div>
    );
};

export default App;