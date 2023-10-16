import Wrapper from "../Helpers/page";
import Navigation from "../Navigation/page";
import { useContext } from "react";
import AuthContext from "../store/page";

const MainHeader = () => {
  const isAuthenticated = useContext(AuthContext);
  const newClass = isAuthenticated.isLoggedIn
    ? "w-screen justify-between"
    : "w-1/3 justify-center";
  return (
    <div className={`flex bg-green-600 headerFont text-center p-4 ${newClass}`}>
      <Navigation />
    </div>
  );
};

export default MainHeader;
