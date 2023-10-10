import Wrapper from "../Helpers/page";

const MainHeader = (props: any) => {
  const info = props?.onLogin ? "justify-between" : "justify-center";
  const clickHandler = () => {
    props.onLogout();
  };
  return (
    <div className={`flex bg-green-600 headerFont text-center p-4 ${info}`}>
      {props.onLogin && <div></div>}
      <div>Log In</div>

      {props.onLogin && (
        <div className="flex justify-between items-center w-fit gap-4 font-light text-xl">
          <button>Home</button>
          <button className="bg-red-800 p-4 rounded-xl" onClick={clickHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
