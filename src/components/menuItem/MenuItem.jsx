import React from 'react';
import './menuItem.scss';
import { useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  // 라우트가 아닌 컴포넌트에서 라우터에서 사용하는 객체 - location, match, history 를 사용하려면, withRouter 라는 HoC 를 사용해야합니다..
  // HOC인 withRouter를 사용하면 history property를 아래와 같이 사용할 수 있다. 

  let navigate = useNavigate();
  let { pathname } = useLocation();

  return (
      // version이 바뀌면서 useNavigation과 useLocation을 사용해야 한다. 
      // <div 
      //   className={`${size} menuItem`} 
      //   onClick={() => history.push(`${match.url}${linkUrl}`)}
      // > 
      
      < div
        className={`${size} menuItem`} 
        onClick={() => navigate(`${pathname}${linkUrl}`)}
      >    
        <div 
          className="bgImg"
          style={{
            backgroundImage:`url(${imageUrl})`
          }}
        />  
        <div className="content">  
          <h1 className="title">{title.toUpperCase()}</h1>            
          <span className="subtitle">Shop Now</span>                                   
        </div>
    </div>
  )
}

// version이 바뀌면서 withRouter사용할 필요가 없다. 
// export default withRouter(MenuItem);

export default MenuItem;
