import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function Product(item, id){
	// const [product, setProduct] = useState([]);
// setProduct(item.product);
	let product = item.product

	return (
		<Link to={`/product/${product.id}`}>
		{/* <a href="{{}}" key={id}> */}
			<div className="product_box">
				<div className="product_img-box">
					<img src={product.thumbnail} alt={product.title} />
					<span>
						Sale
					</span>
				</div>
				<div className="product_detail-box">
					<span>
						${	product.price ?? 'N/A' }
					</span>
					<p>
						{	product.title }
					</p>
				</div>
			</div>
		{/* </a> */}
		</Link>
	)
}