import { AuthPage, useNavigation } from "@pankod/refine-core";
import { useEffect } from "react";
export const UpdatePasswordPage: React.FC = () => {
    // const [token, setToken] = useState("");
    const { replace } = useNavigation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const hashArr = hash
                .substring(1)
                .split("&")
                .map((param) => param.split("="));
            console.log(hashArr);
            for (const [key, value] of hashArr) {
                if (key === "access_token") {
                    console.log("token found", key, value);
                    replace("/auth/update-password?token=" + value);
                }
            }
        }
    }, []);
    return <AuthPage type="updatePassword" backLink="/auth/login" />;
};
