const Iphone = ({ thumbnail, title, price }) => {
  return (
    <article className="shadow-xl rounded-xl cursor-pointer hover:shadow-md duration-300 hover:translate-y-[-3px] border-t border-t-slate-200">
      <img src={thumbnail} alt={title} />
      <div className="py-2 px-4 border-t border-t-slate-300 mx-2 text-left">
        <h2 className="tracking-wider font-bold text-emerald-500">{title}</h2>
        <p className="text-emerald-500 tracking-wide">{price}$</p>
      </div>
    </article>
  );
};
export default Iphone;
