import AuthContext from "../store/page";
import { useContext } from "react";
const Navigation = (props: any) => {
  const isAuthenticated = useContext(AuthContext);
  const clickHandler = () => {
    props.onLogout();
  };
  return (
    <>
    {isAuthenticated && <div></div>}
    {isAuthenticated? <div>Hello Admin</div>:<div>Sign In</div>}
    {isAuthenticated && (
       
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
