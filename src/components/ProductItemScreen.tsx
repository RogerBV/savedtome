import { useState } from "react"

interface ProductProps {
    productName: string
    productCount: number
    onIncrease: (name: string) => void
    onDecrease: (name: string) => void
    onRemove: (name: string) => void
}

function ProductItemScreen({ productName, productCount, onIncrease, onDecrease, onRemove }: ProductProps) {

    const [count, setCount] = useState(1);

    const increase = () => {
        onIncrease(productName)
    }

    const decrease = () => {
        onDecrease(productName)
    }

    const remove = () => {
        onRemove(productName)
    }

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-3">
                    <input type="text" className="form-control" id="txtProduct" name="txtProduct" placeholder="Product" value={productName}/>
                </div>
                <div className="col-2">
                    <input type="number" className="form-control" id="txtCount" name="txtCount" placeholder="Count" value={productCount} onChange={() => setCount} />
                </div>
                <div className="col-1">
                    <input type="button" className="btn btn-primary" value="+" onClick={() => increase()} />
                </div>
                <div className="col-1">
                    <input type="button" className="btn btn-primary" value="-" onClick={() => decrease()} />
                </div>
                <div className="col-1">
                    <input type="button" className="btn btn-danger" value="X" onClick={() => remove()} />
                </div>
            </div>        
        </div>
    )
}

export default ProductItemScreen