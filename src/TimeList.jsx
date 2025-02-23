import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";

const TimeList = ()=>{
    const context = useContext(TestContext)
 return(
    <div className="flex  flex-col items-center justify-start text-purple-800  ">
        {context.timeArr.map((c)=>(
            <Item key={Math.random()}>{c}</Item>
        ))}
    </div>
 )
  
}

export default TimeList;