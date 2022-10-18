import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from "react-router-dom";


export default function ProductDetails(){
	// function callApi() {
		const { id } = useParams();
		const [error, setError] = useState(null);
		const [isLoaded, setIsLoaded] = useState(false);
		const [product, setProduct] = useState([]);
		
		useEffect(() => {
			fetch(`https://dummyjson.com/products/${id}`)
				.then(res => res.json())
				.then(
					(result) => {
						setIsLoaded(true);
						setProduct(result);
						console.log(result)
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
				<div className="container layout_padding">
					<div className="product_container">
						<div className="">
							<Carousel>
								{product.images.map((image, idx) => (
									<Carousel.Item>
									<img src={image} />
									</Carousel.Item>
								))}
							</Carousel>
							<div className="">
								<span>
									${	product.price ?? 'N/A' }
								</span>
								<h3>
									{	product.title }
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}