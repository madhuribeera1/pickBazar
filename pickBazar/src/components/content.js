import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/products";
import '../styles/content.css';
import { getCategories } from "../redux/categories";
import {add,remove} from '../redux/cart';
import Modal from "./modal";


export default function Content(){
    const dispatch=useDispatch();
    

    const [activeModal,setActiveModal]=useState(false);
    const [currentProduct,setCurrentProduct]=useState();

    useEffect(()=>{
        dispatch(getProducts())
        dispatch(getCategories())
       
    },[]);

    const products=useSelector((state)=>state.products.value);
    // const categories=useSelector((state)=>state.category.value);
    const handleModal=(product)=>{
        setActiveModal(true);
        setCurrentProduct(product)
    }

   
    return(
        <div className="products">
            <div className="product-grid">
                {products.data && products.data.map((p)=>{
                    return(
                        <div key={p.id} className='product-card'>
                            {p.sale_price !== null && <div className="offer">
                                {Math.round(((p.price-p.sale_price)/p.price)*100)}%
                            </div>}
                            <img src={p.image.original} alt="" className='productImg' onClick={()=>handleModal(p)} />
                            <p>{p.name}</p>
                            <div className={`productPrice ${p.sale_price !==null && 'cross'}`}>${p.price}</div>
                            {p.sale_price!==null && <div className={`productSalePrice`}>${p.sale_price}</div>}
                            <button onClick={()=>dispatch(add(p))}>Add</button>
                            <button onClick={()=>dispatch(remove(p))}>remove</button>
                        </div>
                    )
                })}
                <Modal data={currentProduct} setActiveModal={setActiveModal} activeModal={activeModal}></Modal>
            </div>
        </div>
    )
}