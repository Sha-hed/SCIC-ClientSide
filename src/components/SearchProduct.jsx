import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PCard3 from "./PCard3";



const SearchProduct = () => {
    const [firstPage, setFirstPage] = useState(0)
    const [pag, setPag] = useState(1)
    const location = useLocation()
    const axiosGeneral = useAxiosGeneral()
    const texted = location.state?.searched
    const { data: products = [] } = useQuery({
        queryKey: ['data', firstPage],
        queryFn: async () => {
            const { data } = await axiosGeneral.get(`/searchText?text=${texted}&page=${firstPage}`)
            const ll = await data.result1;
            setPag(ll)
            console.log('Data ashce :',data.result2)
            return data.result2
        }
    })

    // For Pagination Concept
    let totalPage = pag;
    console.log('Total Document Count ', totalPage)
    let n = Math.ceil(totalPage / 4)
    const pages = [...Array(n).keys()]

    const handlePrev = () => {
        if (firstPage > 0) {
            setFirstPage(firstPage - 1)
        }
    }
    const handleNext = () => {
        console.log('page number :', pages)
        console.log('first page : ', firstPage)
        if (pages.length - 1 > firstPage) {
            setFirstPage(firstPage + 1)
        }
    }

    return (
        <div>
            <div className="h-[100px] flex justify-between items-center border bg-gray-100 shadow px-10">
                <a href=""><TfiMenuAlt className="text-xl" /></a>
                <p className="">(Showing 0 to 5 of 250 products)</p>
            </div>
            <div className="flex flex-col gap-y-5 mt-10">
                {
                    products?.map((card, id) => <PCard3 key={id} card={card} />)
                }
            </div>
            <div className="flex justify-center my-10">
                <button onClick={handlePrev} className="py-3 px-4 border"><MdKeyboardArrowLeft className="" /></button>
                {
                    pages?.map((page, index) => <button
                        onClick={() => setFirstPage(page)}
                        key={index}
                        className={`py-3 px-5 border font-semibold ${page === firstPage ? "text-blue-600 bg-gray-100" : ''}`}
                    >
                        {page}</button>)
                }
                <button onClick={handleNext} className="py-3 px-4 border"><MdKeyboardArrowRight /></button>
            </div>
        </div>
    );
};

export default SearchProduct;

