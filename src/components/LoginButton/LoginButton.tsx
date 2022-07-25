import { FC } from "react";
import { useNavigate } from "react-router-dom";

type LoginButtonProps = {
    isLoggedIn: boolean,
    setIsLoggedIn: () => void
}

const LoginButton: FC<LoginButtonProps> = ({ isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate();

    return <>
        <bds-button onClick={setIsLoggedIn}>
            {isLoggedIn ? "Logout" : "Login"}
        </bds-button>
    </>

}

export default LoginButton;