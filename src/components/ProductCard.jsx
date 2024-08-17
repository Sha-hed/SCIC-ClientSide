import moment from 'moment';

const ProductCard = ({ product }) => {
    const { productName, productImage, description, price, category, ratings, brandName, creationDate, creationTime } = product
    return (
        <div>
            <div className="card-compact w-full md:w-96 border shadow-xl rounded bg-gray-200">
                <div className="flex justify-between m-2">
                    <h3 className="card-title underline">{brandName}</h3>
                    <h3 className="card-title underline">{category}</h3>
                </div>
                <figure className="w-[200px] mx-auto flex">
                    <img
                        src={productImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="card-title">{productName}</h2>
                            <h6 className="">{moment(creationDate).format('MMMM D YYYY')}</h6>

                        </div>
                        <h1 className="card-title text-red-500">${price}</h1>
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