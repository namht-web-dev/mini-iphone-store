const Title = ({ text }) => {
  return (
    <div>
      <h4 className="capitalize text-2xl font-bold text-emerald-500">{text}</h4>
      <div className="border-b border-2 w-1/2 mx-auto border-emerald-700 md:w-1/12"></div>
    </div>
  );
};
export default Title;
