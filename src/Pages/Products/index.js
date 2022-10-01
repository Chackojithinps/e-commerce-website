import Card from '../../Components/Card';
import React, { useContext } from 'react'
import { useProduct } from '../../Context/ProductContext'
import Loading from '../Loading';
import styles from './styles.module.css';
const Products = () => {
    
    const {productList, loading} = useProduct();

    // console.log(productList);

  return (
    <div className={styles.cardGroup}>
        {
            !loading ? (
                productList?.map((item)=>{
                    return (
                        <Card item={item}/>
                    )
                })
            ) : (<Loading/>)
        }
    </div>
  )
}

export default Products