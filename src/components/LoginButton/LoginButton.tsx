import { FC } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { LogIn } from "../../services/Auth";

const LoginButton: FC = () => {

    const { isLoggedIn, setIsLoggedIn } = useAppContext();

    const handleLogin = async () => await LogIn().then(() => setIsLoggedIn(pState => !pState));

    return <>
        <bds-button onClick={handleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
        </bds-button>
    </>

}

export default LoginButton;