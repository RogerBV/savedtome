import { useState } from "react"
import { ProductItem } from "../entities/ProductItem";
import ProductItemScreen from "./ProductItemScreen";
import { remove } from "pspdfkit/dist/types/immutable/dist/immutable-nonambient";

const AddProduct = () => {
    const [productName, setProductName] = useState("")
    const [productList, setProductList] = useState([]);

    const AddProductItem = () => {
        if(validateEmptyField() && validateUniqueProduct()) {
            var productItem = new ProductItem(productName, 1);
            productList.push(productItem);
            setProductName("");
        }
    }

    const validateUniqueProduct = (): Boolean => {
        const lst = productList.filter((item) => item.productName.trim().toUpperCase() == productName.trim().toUpperCase());
        if(lst.length > 0) return false;
        return true;
    }

    const validateEmptyField = (): Boolean => {
        if(productName.trim().length <= 0) return false;
        return true;
    }

    const increaseProductItemCount = (name: string) => {        
        const updatedList = productList.map((item) => {
            if(item.productName === name) {
                item.productCount = item.productCount + 1;
            }
            return item;
        });

        setProductList(updatedList);
    }

    const decreaseProductItemCount = (name: string) => {        
        const updatedList = productList.map((item) => {
            if(item.productName === name) {
                item.productCount = item.productCount - 1;
            }
            return item;
        });

        setProductList(updatedList);
    }

    const removeProductItem = (name: string) => {
        const updateList = productList.filter((item) => item.productName !== name);
        setProductList(updateList);
    }

    return (
        <div className="containter">
            <div className="mb-3"></div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <input type="text" className="form-control" id="txtProductName" name="txtProductName" value={productName} placeholder="Name of Product" onChange={ (e) => setProductName(e.target.value) } />
                </div>
                
                <div className="col-1">
                    <input type="button" className="btn btn-primary" value={"Add"} onClick={() => AddProductItem()} />
                </div>
                <div className="col-1">
                    <input type="button" className="btn btn-success" value={"Confirm"} />
                </div>
            </div>
            <div className="mb-3"></div>
            {
                productList.map((element) => {
                    return <ProductItemScreen 
                        productName={element.productName} 
                        productCount={element.productCount} 
                        onIncrease={increaseProductItemCount}
                        onDecrease={decreaseProductItemCount}
                        onRemove={removeProductItem}
                    />
                })
            }
        </div>
    )
}

export default AddProduct