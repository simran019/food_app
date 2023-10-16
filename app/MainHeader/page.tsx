import Wrapper from "../Helpers/page";
import Navigation from "../Navigation/page";

const MainHeader = (props: any) => {
  const info = props?.isAuthenticated ? "justify-between" : "justify-center";
  return (
    <div className={`flex bg-green-600 headerFont text-center p-4 ${info}`}>
      {props.isAuthenticated && <div></div>}
      {props.isAuthenticated? <div>Hello Admin</div>:<div>Sign In</div>}
      <Navigation isAuthenticated={props.isAuthenticated} onLogout={props.onLogout}/>
    </div>
  );
};

export default MainHeader;
