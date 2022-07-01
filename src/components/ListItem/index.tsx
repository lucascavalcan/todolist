import * as C from "./style";
import {Item} from "../../types/Item";


type Props = {
    Item: Item;
    onChange: (id: number, done: boolean) => void;
}

export const ListItem = ({Item, onChange}: Props) => {

    return (

        <C.Container done={Item.done}>
            <input 
                type="checkbox" 
                checked={Item.done}
                onChange={e => onChange(Item.id, e.target.checked)}    
            />
            <label>{Item.name}</label>
        </C.Container>
    )
}