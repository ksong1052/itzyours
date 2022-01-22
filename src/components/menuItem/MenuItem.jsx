import React from 'react';
import './menuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  // 라우트가 아닌 컴포넌트에서 라우터에서 사용하는 객체 - location, match, history 를 사용하려면, withRouter 라는 HoC 를 사용해야합니다..
  // ⭐ Important - HOC인 withRouter를 사용하면 history property를 아래와 같이 사용할 수 있다. 

  //console.log("{match.url}{linkUrl}", match.url+linkUrl);
  function sendUrl(e) {
    // console.log("{match.url}{linkUrl}", match.url+linkUrl);    
    //history.push(`${match.url}${linkUrl}`) 
    history.push(`${match.url}${linkUrl}`)
  }

  return (
      // react-router-dom version 6에서는 useNavigation과 useLocation을 사용해야 한다. 
      //onClick={() => history.push(`${match.url}${linkUrl}`)}
      < div
        className={`${size} menuItem`}         
        onClick={sendUrl}
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


// react-router-dom version 6에서 withRouter는 사용 할 수 없다. 
export default withRouter(MenuItem);


