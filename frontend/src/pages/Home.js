import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';
import { searchProducts } from '../mockData';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()

    useEffect(() => {
        // Using mock data instead of API calls
        const keyword = searchParams.get('keyword');
        const filteredProducts = searchProducts(keyword);
        setProducts(filteredProducts);
    },[searchParams])

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard product={product} />)} 
        </div>
        </section>
    </Fragment>
}