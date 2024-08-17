import moment from 'moment';

const ProductCard = ({ product }) => {
    const { productName, productImage, description, price, category, ratings, brandName, creationDate, creationTime } = product
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 border">
                <div className="flex justify-around my-5">
                    <h3 className="card-title border p-2 bg-green-400 rounded-xl text-white">{brandName}</h3>
                    <h3 className="card-title border p-2 bg-green-400 rounded-xl text-white">{category}</h3>
                </div>
                <figure className="w-[200px] mx-20">
                    <img
                        src={productImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="card-title">{productName}</h2>
                            <h6 className="">creationDate : {moment(creationDate).format('MMMM D YYYY')}</h6>

                        </div>
                        <h1 className="card-title border p-2 bg-red-300 text-white font-bold rounded-xl">${price}</h1>
                    </div>
                    {/* <h3 className="card-title">{brandName}</h3> */}
                    <p>{description}</p>
                    <div className="card-actions justify-center">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;