import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

const Counter = () => {
    const value = useSelector( (state => state.counter.value))
    const dispatch = useDispatch();

  return <>
    <button onClick={() => dispatch(increment())}>increment</button>
    <span>{value}</span>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
};

export default Counter;