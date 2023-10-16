import Wrapper from "../Helpers/page";
import Navigation from "../Navigation/page";
import { useContext } from "react";
import AuthContext from "../store/page";

const MainHeader = (props: any) => {
  const isAuthenticated = useContext(AuthContext);
  const newClass = isAuthenticated
    ? "w-screen justify-between"
    : "w-1/3 justify-center";
  return (
    <div className={`flex bg-green-600 headerFont text-center p-4 ${newClass}`}>
      <Navigation onLogout={props.onLogout} />
    </div>
  );
};

export default MainHeader;
