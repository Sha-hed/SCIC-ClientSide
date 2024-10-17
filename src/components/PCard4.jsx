import { useLoaderData } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const PCard4 = () => {
    const product = useLoaderData();
    const { productName, productCategory, productPrice, productImage, productDetails } = product
    console.log('From Product Details Page!! ', product)
    return (
        <div className="flex flex-col justify-center">
            <div className="h-[100px] flex justify-center items-center border bg-gray-100 shadow">
                <h1 className="text-3xl">{productCategory}</h1>
            </div>
            <div className="flex flex-col my-10 gap-5 w-1/2 mx-auto">
                <div className="w-full border">
                    <img src={productImage} alt="" />
                </div>
                <div className="w-full border flex flex-col space-y-3 p-3">
                    <h1 className="text-3xl font-medium">{productName}</h1>
                    <p>{productDetails}</p>
                    <h1 className="text-orange-500 text-3xl font-bold">TK. {productPrice}</h1>
                    <div className="w-[300px]">
                        <button className="rounded flex justify-center items-center gap-5 bg-orange-400 text-white px-5 py-2 font-bold"><IoCartOutline/> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCard4;