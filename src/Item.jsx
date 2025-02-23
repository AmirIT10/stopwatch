import { useContext } from "react"
import { TestContext } from "./TestContext"

const Item = (props)=>{
    const context = useContext(TestContext)
    const handleDeleteTime = (e) =>{
        
        context.setTimeArr(context.timeArr.filter(t => t !== e.target.innerHTML ))

    }
   
    return(
       <div onClick={handleDeleteTime}>{props.children}</div> 
    )
}

export default Item ;