function Price({ salePrice, originalPrice }) {
    return (
        <div className="flex items-end mt-1.5">
            <span className="text-lg font-bold mr-2.5">{ salePrice }</span>
            <span className="text-disable-gray line-through text-base">{ originalPrice }</span>
        </div>
    )
}

export default Price;