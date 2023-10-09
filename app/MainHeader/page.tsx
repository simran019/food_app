import Wrapper from "../Helpers/page";
// import styles from "../../"

const MainHeader = (props: any) => {
  return (
    <Wrapper>
      <div className="bg-green-600 headerFont text-center p-4">
        Log In
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-4 shadow-xl">
        <div className="flex items-center justify-center p-4 gap-4">
          <div className="flex flex-col gap-8 p-2">
            <label className="p-1">Email</label>
            <label className="p-1">Password</label>
          </div>
          <div className="flex flex-col gap-8 p-2">
            <input
              className="border-black border-2 rounded-md p-1"
              type="text"
              placeholder="email"
            />
            <input
              className="border-black border-2 rounded-md p-1"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div>
          <button className="bg-green-600 p-2 rounded-xl font-bold text-white">Log In</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainHeader;
