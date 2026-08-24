import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../UserContex";

export default function ProctetdRoute() {
  const {user, loading } = useUser();

  console.log("ProtectedRoute user:");
  console.log("ProtectedRoute loading:", loading);

  if(loading) {
    return <div>loading........</div>;
  }

  if (!user) return <Navigate to ="/" replace />

  return <Outlet />;
}