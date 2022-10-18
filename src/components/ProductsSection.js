import React, { useEffect, useState } from 'react';
import Product from './../components/Product';

export default function ProductsSection(){
	// function callApi() {
		const [error, setError] = useState(null);
		const [isLoaded, setIsLoaded] = useState(false);
		const [products, setProducts] = useState([]);
		
		useEffect(() => {
			fetch("https://dummyjson.com/products?limit=12&skip=10&select=id,title,price,thumbnail")
				.then(res => res.json())
				.then(
					(result) => {
						setIsLoaded(true);
						setProducts(result.products);
						// console.log(result.products)
					},
					// Note: it's important to handle errors here
					// instead of a catch() block so that we don't swallow
					// exceptions from actual bugs in components.
					(error) => {
						setIsLoaded(true);
						setError(error);
					}
				)
		}, [])
	// }
	// callApi()
	if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
		return (
			<section className="products_section">
				<div className="heading_container">
					<h2>
						New Products In Store
					</h2>
					<p>
						Featured Product Just Arrived
					</p>
				</div>
				<div className="container layout_padding">
					<div className="product_container">
						{products.map((product, idx) => (
							// <div key={idx}>{product.price}</div>	
							<Product product={product} key={idx} />
						))}
					</div>
				</div>
			</section>
		)
	}
}