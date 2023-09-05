import Hero from "../assets/organic-products-hero.png";
import Leaf from "../assets/logo-leaf-new.png";

const Front = () => {
  return (
    <div className=" bg-[#f9fbf8] p-40">
      <div className="flex ">
        <div className=" p-4">
          <img src={Hero} />
        </div>
        <div className=" py-16 px-20 flex flex-col gap-4">
          <img src={Leaf} className=" w-20 h-9" />
          <p className=" font-semibold text-2xl">Best Quality Products</p>
          <h3 className=" text-5xl font-bold ">Join The Organic Movement</h3>
        </div>
      </div>
    </div>
  );
};

export default Front;
