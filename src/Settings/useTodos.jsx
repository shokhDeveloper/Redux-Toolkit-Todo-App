import { useSelector } from "react-redux"

export const  useTodos = () => {
    const selector = useSelector((store) => store.todoReducer)
    return(
        selector
    )
}