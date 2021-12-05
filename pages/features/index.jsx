import { useSession } from "next-auth/react";

const features = () => {
    const { data, status } = useSession();

    if(status === "loading"){
        return null;
    }
    return (
        <div>
        features<br/>
        <pre>
            {JSON.stringify(data)}
        </pre>
        <p>Signed in as {data.user.email}</p>
        </div>
    )
}
features.auth = true;
export default features
