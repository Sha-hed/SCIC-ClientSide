import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/ProductCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Pending from "../Pending";


const Home = () => {
    const [firstPage, setFirstPage] = useState(0);
    const [tProduct, setTProduct] = useState(1);
    const [products, setProducts] = useState([]);
    const [t, setT] = useState('');
    const [brand, setBrand] = useState('')
    const [cat, setCat] = useState('')
    const [minPrice, setMinPrice] = useState()
    const [maxPrice, setMaxPrice] = useState()
    const [value, setValue] = useState(1);
    const [date, setDate] = useState(false);
    const searchRef = useRef();
    const brandRef = useRef();
    const catRef = useRef();
    const minRef = useRef();
    const maxRef = useRef();


    const { data } = useQuery({
        queryKey: ['product', firstPage, value, date, t, brand, cat, minPrice, maxPrice],
        queryFn: async () => {
            const { data } = await axios.get(`https://scic-job-task-server-side-beta.vercel.app/allWork?page=${firstPage}&value=${value}&date=${date}&text=${t}&brand=${brand}&category=${cat}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            setProducts(data.products);
            setTProduct(data.productsLength)
        }
    })

    //Category Functionality
    const category = async () => {
        setFirstPage(0);
        setBrand(brandRef.current.value)
        setCat(catRef.current.value)
        setMinPrice(minRef.current.value)
        setMaxPrice(maxRef.current.value)
        setT('');
    }

    // Sort Functionality :
    const handlePrice = async (p) => {
        setFirstPage(0);
        setValue(p);
        setDate(false);
    }

    // Search By Name :
    const handleName = async () => {
        setFirstPage(0);
        setT(searchRef.current.value)

    }
    //Pagination Concept :
    const loadCount = async () => {
        const { data } = await axios.get('https://scic-job-task-server-side-beta.vercel.app/countDocument')
        setTProduct(data.totalDocuments)
    }
    useEffect(() => {
        loadCount();
    }, [firstPage])
    const pagePerView = 6;
    const numberOfPage = Math.ceil((tProduct || 1) / pagePerView)
    const pages = [...Array(numberOfPage).keys()];
    const handlePage = (page) => {
        setFirstPage(page)
    }
    const handlePrev = () => {
        if (firstPage > 0) {
            setFirstPage(firstPage - 1)
        }
    }
    const handleNext = () => {
        if (firstPage < numberOfPage - 1) {
            setFirstPage(firstPage + 1)
        }
    }

    // if (isLoading) {
    //     return <Pending></Pending>
    // }
    return (
        <>
            <div className="max-w-7xl mx-auto my-10 min-h-screen">
                <div className="flex flex-col justify-around items-center my-5">
                    <div className="">
                        {/* <h1 className="font-bold text-xl">Search Product By Name </h1> */}
                        <input placeholder="Enter Product Name" ref={searchRef} className="p-2 my-3 bg-gray-200 rounded-l-xl outline-none border border-red-400 border-r-0" type="text" name="productName" id="" />
                        <button onClick={handleName} className="bg-red-400 py-2 px-4 rounded-r-xl font-bold text-white border border-l-0 border-red-400">Search</button>
                    </div>
                    <div>
                        <details className="dropdown">
                            <summary className="m-1 font-bold text-xl p-2 border bg-rose-400 text-white rounded-xl cursor-pointer">Sort By</summary>
                            <ul className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow`}>
                                <li onClick={() => handlePrice(1)}><a>Price: Low to High</a></li>
                                <li onClick={() => handlePrice(-1)} ><a>Price: High to Low</a></li>
                                <li onClick={() => setDate(true)}><a>Date : Newest</a></li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="flex justify-between gap-10 mb-10 border-2 py-5 px-2 rounded-2xl h-[150px] border-rose-400">
                    {/* This JSON data is now simplified with only 5 brands (TechEase, SoundPro, HomeSmart, PhotoGear, FindIt) and 5 categories (Electronics, Audio, Home, Accessories, Personal Care).  */}
                    <div className="w-[250px] text-center">
                        <h1 className="font-bold">Brand Name</h1>
                        <select ref={brandRef} onChange={(e) => setBrand(e.target.value)} className="border-2 p-2 rounded-xl my-2 w-[250px] outline-none" name="" id="">
                            <option value="">Select a Brand</option>
                            <option className="font-bold" value="TechEase">TechEase</option>
                            <option className="font-bold" value="SoundPro">SoundPro</option>
                            <option className="font-bold" value="HomeSmart">HomeSmart</option>
                            <option className="font-bold" value="PhotoGear">PhotoGear</option>
                            <option className="font-bold" value="FindIt">FindIt</option>
                        </select>
                    </div>
                    <div className="w-[250px] text-center">
                        <h1 className="font-bold">Categories</h1>
                        <select ref={catRef} onChange={(e) => setCat(e.target.value)} className="border-2 p-2 rounded-xl my-2 w-[250px] outline-none" name="" id="">
                            <option value="">Select a Category</option>
                            <option className="font-bold" value="Electronics">Electronics</option>
                            <option className="font-bold" value="Audio">Audio</option>
                            <option className="font-bold" value="Home">Home</option>
                            <option className="font-bold" value="Accessories">Accessories</option>
                            <option className="font-bold" value="Personal Care">Personal Care</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold mb-2">Price Range</h1>
                        <input ref={minRef} onChange={(e) => setMinPrice(e.target.value)} className="border-2 outline-none p-2 rounded-xl mr-2" placeholder="MIN PRICE" type="text" name="minPrice" id="" />
                        <label htmlFor="">to</label>
                        <input ref={maxRef} onChange={(e) => setMaxPrice(e.target.value)} className="border-2 outline-none p-2 rounded-xl ml-2" placeholder="MAX PRICE" type="text" name="maxPrice" id="" />
                    </div>
                    <button onClick={category} className="mt-6 p-1 border h-[50px] w-[150px] rounded-xl font-bold bg-rose-400 text-white">Filter Search</button>
                </div>
                <div>
                    {
                        products.length > 0 ? (<div className="grid grid-cols-3 gap-6">
                            {
                                products?.map((product, id) => <ProductCard key={id} product={product}></ProductCard>)
                            }
                        </div>) : <h1 className="text-5xl font-bold text-red-600 text-center">No Data Found</h1>
                    }
                </div>

                <div>
                    {
                        products.length > 0 && (<div className="flex justify-center gap-5 my-10">
                            <button onClick={handlePrev} className="p-3 rounded border hover:bg-red-300 hover:text-white font-bold">Prev</button>
                            {
                                pages?.map((page) =>
                                    <button
                                        onClick={() => handlePage(page)}
                                        key={page}
                                        className={` ${firstPage === page && 'bg-red-300 text-white'} p-3 rounded border font-bold`}
                                    >{page}</button>
                                )
                            }
                            <button onClick={handleNext} className="p-3 rounded border hover:bg-red-300 hover:text-white font-bold">Next</button>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;