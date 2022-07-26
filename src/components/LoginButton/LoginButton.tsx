import { FC } from "react";
import { useAppContext } from "../../contexts/AppContext";
import useAuth from "../../hooks/useAuth";

const LoginButton: FC = () => {

    const { isLoggedIn, setIsLoggedIn } = useAppContext();
    const login = useAuth();

    const handleLogin = async () => await login.then(() => setIsLoggedIn(pState => !pState));

    return <>
        <bds-button onClick={handleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
        </bds-button>
    </>

}

export default LoginButton;