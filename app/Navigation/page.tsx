const Navigation =(props:any)=>{
    const clickHandler = () => {
        props.onLogout();
      };
    return(
        props.isAuthenticated && <div className="flex justify-between items-center w-fit gap-4 font-light text-xl">
        <button>Home</button>
        <button className="bg-red-800 p-4 rounded-xl" onClick={clickHandler}>
          Logout
        </button>
      </div>
    )
}

export default Navigation;