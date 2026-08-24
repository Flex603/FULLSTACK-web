import { useState, useEffect } from "react";

function Count(){
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `Pressed ${count} times`
    }, [count]);

    useEffect(()=>{
        return count < 0 ? setCount(0) : undefined;
    }, [count]);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count +1)}>  Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset count value</button>
        </div>
    )
}
export default Count;