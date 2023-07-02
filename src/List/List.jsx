import { useSelector } from "react-redux"
import { Item } from "./Item"
import { useTodos } from "../Settings/useTodos"

export const List = () => {
    const { todos }= useTodos()
    return(
        <ul>
            {todos?.length ? 
                (
                    <>
                        {todos?.map(item => {
                            return(
                                <Item checked={item.checked} name={item.name} key={item.id} id={item.id}/>
                            )
                        })}
                    </>
                )
            : <h1>Hali todo yaratilmadi</h1>}
        </ul>
    )
}