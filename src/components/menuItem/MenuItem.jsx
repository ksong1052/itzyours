import './menuItem.scss';
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div 
      style={{
        backgroundImage: `url(${imageUrl})`
      }} 
      className="menuItem"
    >
      <Link to="/products/1">      
        <div className="content">                  
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop Now</span>                                    
        </div>
      </Link>
    </div>
  )
}

export default MenuItem
