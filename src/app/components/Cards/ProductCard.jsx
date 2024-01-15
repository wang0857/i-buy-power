import Image from 'next/image'
import Tag from '../Tags/Tag'
import Price from '../Prices/Price'
import Button from '../Buttons/Button'

function ProductCard({ product }) {
    return (
        <div className="flex flex-col shadow-lg rounded-md box-border md:min-w-[310px] min-w-[294px]">
            <div className="px-6 py-4 grow">
                <Tag title={product.category} type="category" />
                <div className="flex justify-center mt-2 mb-5">
                    <Image
                        src="/pc-set.webp"
                        alt="Product Picture"
                        width={230}
                        height={230}
                    />
                </div>
                <h4 className="text-md font-bold whitespace-nowrap text-ellipsis overflow-hidden mt-5 mb-6">
                    {product.title}
                </h4>
                {
                    product.details.map((detail, index) =>
                        <p key={index} className="text-base">
                            {detail}
                        </p>
                    )
                }
            </div>
            <div className="px-6 py-5 bg-description-light-blue">
                <Tag title={'SAVE $' + product.save} type="save" />
                <Price salePrice={product.salePrice} originalPrice={product.originalPrice} />
                <div className="flex items-center text-sm">
                    Starting at
                        <span className="px-1 text-feature-blue">{product.monthlyPay}/mo</span>
                    with 
                    <Image
                        src="/icon-affirm.svg"
                        alt="Affirm icon"
                        width={53}
                        height={16}
                        className="ml-1"
                    />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <p className="text-sm font-bold">Free Shipping</p>
                        {
                            product.category === 'Prebuilt PC' ?
                            <p className="text-sm">Delivery By {product.delivery}</p> :
                            <p className="text-sm">Estimate Ship By {product.delivery}</p>
                        }
                        
                    </div>
                    <div>
                        <Button title={product.actionType} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard