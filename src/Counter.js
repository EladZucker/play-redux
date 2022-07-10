import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchItems, increment, loadItems } from "./redux/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchItems());   
    },[])
    const value = useSelector( (state => state.counter.value))

  return <>
    <button onClick={() => dispatch(increment({amount:5}))}>increment</button>
    <span>{value}</span>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
};

export default Counter;