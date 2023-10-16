import AuthContext from "../store/page";
import { useContext } from "react";
const Navigation = () => {
  const isAuthenticated = useContext(AuthContext);
  console.log(isAuthenticated);
  const clickHandler = () => {
    isAuthenticated.onLogout();
  };
  return (
    <>
    {isAuthenticated.isLoggedIn && <div></div>}
    {isAuthenticated.isLoggedIn? <div>Hello Admin</div>:<div>Sign In</div>}
    {isAuthenticated.isLoggedIn && (
       
      <div className="flex justify-between items-center w-fit gap-4 font-light text-xl">
        
        <button>Home</button>
        <button className="bg-red-800 p-4 rounded-xl" onClick={clickHandler}>
          Logout
        </button>
      </div>
    )}
    </>
  );
};

export default Navigation;
