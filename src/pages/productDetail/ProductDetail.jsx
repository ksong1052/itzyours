import { useState } from 'react';
import './productDetail.scss';

const ProductDetail = () => {
  const [size, setSize] = useState(0)
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "Campagnola",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quasi, ipsum, velit odio consequuntur ipsa vitae veritatis provident quod ex eos repudiandae accusamus cumque. Id consequuntur dolores nobis quae nisi." 
  };

  return (
    <div className="productDetail">
      <div className="container">
        <div className="left">
          <div className="imgContainer}>
            <img src={pizza.img} layout="fill" alt="" />
          </div>
        </div>
        <div className="right">
          <h1 className="title">{pizza.name}</h1>
          <span className="price">${pizza.price[size]}</span>
          <p className="desc">{pizza.desc}</p>
          <h3 className="choose">Choose the size</h3>
          <div className="sizes">
          <div className="size" onClick={()=>setSize(0)}>
            <img src="/img/size.png" layout="fill" alt="" />
            <span className="number">Small</span>
          </div>
          <div className="size" onClick={()=>setSize(1)}>
            <img src="/img/size.png" width="40px" height="35px" alt="" />
            <span className="number">Medium</span>
          </div>
          <div className="size" onClick={()=>setSize(2)}>
            <img src="/img/size.png" width="50px" height="45px" alt="" />
            <span className="number">Large</span>
          </div>
          </div>
          <h3 className="choose">Choose additional ingredients</h3>
          <div className="ingredients">
          <div className="option">
            <input 
            type="checkbox" 
            id="double"
            name="double"
            className="checkbox" 
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="option">
            <input 
            type="checkbox" 
            id="cheese"
            name="cheese"
            className="checkbox" 
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className="option">
            <input 
            type="checkbox" 
            id="spicy"
            name="spicy"
            className="checkbox" 
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className="option">
            <input 
            type="checkbox" 
            id="garlic"
            name="garlic"
            className="checkbox" 
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
          </div>
          <div className="add">
            <input type="number" defaultValue={1} className="quantity" />
            <button className="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
