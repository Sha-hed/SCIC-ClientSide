import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PCard3 = ({card}) => {
    const {_id, productName, productImage, productPrice } = card
    return (
        <div className="flex border p-5 bg-gray-50 shadow">
            <Link to={`/singleProductLoad/${_id}`} className="w-60">
                <img src={productImage} alt="" />
            </Link>
            <div className="flex-1 flex flex-col justify-center space-y-5 ml-5">
                <Link to={`/singleProductLoad/${_id}`} className="text-xl font-medium">{productName}</Link>
                <Link to={`/singleProductLoad/${_id}`} className="text-xl text-orange-500 font-medium">TK. {productPrice}</Link>
            </div>
            <div  className="flex justify-center items-center mr-20">
                 <a><IoCartOutline className="text-2xl mr-3 font-medium text-slate-500"/></a>
                <button className="text-slate-500 text-xl font-medium">Add to Cart</button>
            </div>
        </div>
    );
};

export default PCard3;