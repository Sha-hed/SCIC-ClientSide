import axios from "axios";
import { useState } from "react";


const Form = () => {
    const [products, setProducts] = useState([]);
    const [t, setT] = useState('');
    const handlePrice = async (p) => {
        const { data } = await axios.get(`https://scic-job-task-server-side-beta.vercel.app/sortByLowToHigh?value=${p}`)
        setProducts(data);
    }

    //Search By Name :
    const handleName = async () => {
        const { data } = await axios.get(`https://scic-job-task-server-side-beta.vercel.app/searchName?text=${t}`)
        setProducts(data);
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-around items-center my-5">
                <div className="">
                    <h1 className="font-bold text-xl">Search Product By Name </h1>
                    <input onChange={(e) => setT(e.target.value)} className="p-2 my-3 bg-gray-200 rounded-l-xl outline-none" type="text" name="productName" id="" />
                    <button onClick={handleName} className="bg-red-400 py-2 px-4 rounded-r-xl font-bold text-white">Search</button>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="m-1 font-bold text-xl p-2 border bg-rose-400 text-white rounded-xl">Sort By</summary>
                        <ul className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow`}>
                            <li onClick={() => handlePrice(1)}><a>Price: Low to High</a></li>
                            <li onClick={() => handlePrice(-1)} ><a>Price: High to Low</a></li>
                            <li ><a>Date : Newest</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Form;