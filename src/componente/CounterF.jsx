import { useEffect, useState } from "react";

const CounterF=({ initialCount = 0, step = 2 }) => {
    console.log("ConterF:Render");
    const[ count ,setCount ]= useState(initialCount);
    const[ loading, setLoading]=useState(true);

    useEffect(()=>
    {
        const timer=setTimeout(()=> setLoading(false),3000)
        return( ) =>clearTimeout ( timer)
    },[])

    useEffect(()=>{
        console.log("component did update");
    }, [count])
    const handlerClick = () => setCount((prev )=> prev  + 1);
    const handleDecrement = () => setCount((prev)=> prev  - 1);
 

    return(
        <> 
        <p> count = {count} </p>
        {/* <button  onClick={handlerClick} > Incrementer</button>
        <button  onClick={handleDecrement} > decrementer</button> */}
        <button onClick={() => setCount(count - step)}>-{step}</button>
        <button onClick={() => setCount(count + step)}>+{step}</button>
        <button  > reset</button>
        </>
    )
};

export default CounterF;