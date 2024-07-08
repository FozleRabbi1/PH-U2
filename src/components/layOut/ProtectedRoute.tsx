import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/fetures/auth/authSlice";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  console.log(useCurrentToken);
  const token = useAppSelector(useCurrentToken);
  console.log({ token });
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
