
import toast from 'react-hot-toast';
import useAxiosGeneral from '../../hooks/useAxiosGeneral'
const AddProduct = () => {

    const axiosGeneral = useAxiosGeneral()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const productName = e.target.productName.value
        const productPrice = parseInt(e.target.productPrice.value)
        const productCategory = e.target.category.value
        const productQuantity = e.target.productQuantity.value
        const productImage = e.target.productImage.value
        const productDetails = e.target.productDetails.value
        const product = { productName, productPrice, productCategory, productQuantity, productImage, productDetails }
        const { data } = await axiosGeneral.post('/addProduct', product)
        console.log(data)
        if (data.insertedId) {
            toast.success('Product inserted Successfully')
        }
        console.log('Product Paisot :', product)
        e.target.reset()
    }
    return (
        <div>
            <h1 className="text-center uppercase font-bold underline text-3xl my-5">Add Product</h1>
            <div className="w-[800px] p-5">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col gap-2 w-1/2">
                            <label className="font-semibold" htmlFor="">ProductName</label>
                            <input className="outline-none p-3 bg-gray-300" placeholder="Product Name" type="text" name="productName" id="" />
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <label className="font-semibold" htmlFor="">ProductPrice</label>
                            <input className="outline-none p-3 bg-gray-300" placeholder="Product Price" type="number" name="productPrice" id="" />
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col w-1/2 gap-2">
                            <label className="font-semibold" htmlFor="">Category</label>
                            <select className="outline-none p-3 bg-gray-300" name="category" id="">
                                <option value="">Select a category</option>
                                <option value="Accessories">Accessories </option>
                                <option value="Basic Component">Basic Component </option>
                                <option value="Development Board">Development Board </option>
                                <option value="Display">Display</option>
                                <option value="General IC">General IC</option>
                                <option value="Home Automation">Home Automation</option>
                                <option value="Kits">Kits</option>
                                <option value="Microcontroller">Microcontroller</option>
                                <option value="Misscellaneous">Misscellaneous</option>
                                <option value="Robotic">Robotic</option>
                                <option value="Sensor">Sensor</option>
                                <option value="Wireless">Wireless </option>
                            </select>
                        </div>
                        <div className="flex flex-col w-1/2 gap-2">
                            <label className="font-semibold" htmlFor="">Product Quantity</label>
                            <input className="outline-none p-3 bg-gray-300" placeholder="Product Quantity" type="number" name="productQuantity" id="" />
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col w-1/2 gap-2">
                            <label className="font-semibold" htmlFor="">Product Image</label>
                            <input className="outline-none p-3 bg-gray-300" placeholder="Product image URL" type="text" name="productImage" id="" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-semibold" htmlFor="">Product Details</label>
                        <textarea rows={6} className="p-3 bg-gray-300" name="productDetails" id="" placeholder="productDetails"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="border-2 p-3 border-blue-400 hover:bg-gray-300 hover:border-0 mt-5 hover:text-red-600 font-bold" type="submit">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;