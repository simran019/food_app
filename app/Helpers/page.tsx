const Wrapper = (props: any) => {
  return (
    <div className="w-screen flex flex-col justify-center gap-0 h-screen items-center">
      {props.children}
    </div>
  )
};

export default Wrapper;
