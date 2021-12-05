import React, { useEffect } from "react";
import api from "@utils/axios";
import { useSession } from "next-auth/react";

const memes = () => {
    const {data:session} = useSession();
    useEffect(() => {
        api.get('/user', {
            headers: {
                'x-auth-token': session?.token 
            }
        })
        .then(({data}) => {
            console.log("user data", data)
        })
        .catch((error) => {
            console.log("error", error);
        })
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            memes
        </div>
    )
}
memes.auth = true;
export default memes
