import * as C from "./style";
import {useAppSelector} from "../../redux/hooks/useAppSelector";

type Props = {
    onClick: () => void
}

export const ThemeSwitcher = ({onClick}: Props) => {

    const theme = useAppSelector(state => state.theme)

    return (
        <C.Button>{theme.status}</C.Button>
    );
}

