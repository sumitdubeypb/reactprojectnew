import React,{useState }  from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount,decrementByAmount, myadd } from "../reduxstore/actionlist";


export default function Updateincrement() {
  const [d, e] = useState(["enter value"]);
  const abc = useDispatch();
  const ab = useSelector((state) => state.counter.value);
  console.log(ab);
   
  // useEffect(() => { e();}, [])

   const handleOnChange = (event) => {
    e(event.target.value);
   } 
  return (
    <>
      <div>updateincrement</div>

      <div>{ab} ,  value : <input size={8} value={d}  onInput={handleOnChange}/></div> 
            <input type="button" className="btn btn-outline-success btn-primary text-dark" value="Update" onClick={() => abc(myadd())} />
            <input type="button" className="btn btn-primary m-2" value="-" onClick={() => abc(decrement())} />
            <input type="button" className="btn btn-primary m-2" value="+" onClick={() => abc(increment())} />
            <input type="button" className="btn btn-primary m-2" value="+ value" onClick={() => abc(incrementByAmount(parseInt(d)))} />
            <input type="button" className="btn btn-primary m-2" value="- value" onClick={() => abc(decrementByAmount(parseInt(d)))} />
      
    </>
  )
}
