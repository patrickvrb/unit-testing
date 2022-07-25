import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../../services/Auth";

type LoginButtonProps = {
    isLoggedIn: boolean,
    setIsLoggedIn: () => void
}

const LoginButton: FC = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();

    const handleLogin = async () => {
      !isLoggedIn && await LogIn();
      setIsLoggedIn(pState => !pState)
    }

    return <>
        <bds-button onClick={handleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
        </bds-button>
    </>

}

export default LoginButton;