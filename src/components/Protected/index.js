import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import router from "next/router";

const Auth = ({ children }) => {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === "loading") return ;
    if (!isUser) router.push('/login');
  }, [isUser, status])

  if (isUser) {
    return children
  }
  return <div>Loading...</div>
}

export default Auth;
