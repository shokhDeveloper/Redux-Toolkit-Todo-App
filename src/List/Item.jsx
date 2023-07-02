import { useDispatch } from "react-redux"
import { useTodos } from "../Settings/useTodos"
import { todoAction } from "../redux/slice"

export const Item = ({name, id, checked}) => {
    const {todos, edit_disabled} = useTodos()
    const dispatch = useDispatch()
    const handleClick = (event) => {
        switch(event.target.id){
            case "delete":{
                dispatch(todoAction.deletePosts(id))
            }break;
            case "edit":{
                dispatch(todoAction.editDisabled())
            }
        }
    }
    const handleKey = (event) => {
        if(event.keyCode === 13){
            let idx = todos.findIndex(item => item.id === id)
            let json = JSON.stringify(todos)
            let parse = JSON.parse(json)
            parse[idx].name = event.target.value
            window.localStorage.setItem("todos", JSON.stringify(parse))
            dispatch(todoAction.editDisabled())
        }
    }
    const handleChange = (event) => {
        let idx = todos.findIndex(item => item.id === id)
        let json = JSON.stringify(todos)
        let clone = JSON.parse(json)
        clone[idx].checked = event.target.checked    
        window.localStorage.setItem("todos", JSON.stringify(clone))
    }
    return(
        <li>
            <input type="checkbox" defaultChecked={checked} defaultValue={checked ? "on": "off"} onChange={handleChange} />
            <input onKeyUp={handleKey} type="text" defaultValue={name} readOnly={edit_disabled} />
            <button id="edit" onClick={handleClick}>Edit</button>
            <button id="delete" onClick={handleClick}>Delete</button>
        </li>
    )
}