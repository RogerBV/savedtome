import { useState } from "react"

function ProductList() {
    const [productList, setProductList] = useState([]);
    return (
        <table>
            <tr>
                <th>Product</th>
                <th>Count</th>
            </tr>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default ProductList