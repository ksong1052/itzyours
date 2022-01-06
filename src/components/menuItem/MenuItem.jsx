import './menuItem.scss';
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    // <div className={`${size} menuItem`}
    //   style={{
    //     backgroundImage:`url(${imageUrl})`
    //   }}
    // >
      <div className={`${size} menuItem`}>      
        <div 
          className="bgImg"
          style={{
            backgroundImage:`url(${imageUrl})`
          }}
        />  
        <div className="content">  
          <h1 className="title">{title.toUpperCase()}</h1>
            <Link to="/products/1" style={{textDecoration:"none"}}> 
              <span className="subtitle">Shop Now</span>                                    
            </Link>
        </div>
    </div>
  )
}

export default MenuItem
