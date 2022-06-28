import * as C from "./style";
import {UseAppSelector} from "../../redux/hooks/useAppSelector";

type Props = {
    onClick: () => void
}

export const ThemeSwitcher = ({onClick}: Props) => {

    const theme = UseAppSelector(state => state.theme)

    return (
        <C.Button>{theme.status}</C.Button>
    );
}

