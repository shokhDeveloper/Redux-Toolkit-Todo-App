import { v4 } from "uuid"
import { todoAction } from "../redux/slice"
import { useDispatch, useSelector } from "react-redux"
export const Input = () => {
    const dispatch = useDispatch()
    const handleKey = (event) => {
        if(event.keyCode === 13){
            let todo = {
                name: event.target.value,
                id: v4(),
                checked: false 
            }
            dispatch(todoAction.createTodo(todo))
        }
    }
    return(
        <input type="text" onKeyUp={handleKey} />
    )
}