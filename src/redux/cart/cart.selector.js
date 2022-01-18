import { createSelector } from 'reselect';

// ⭐ reselector란? https://ljtaek2.tistory.com/m/152 > 불팔요한 re-rendering을 방지
// Input Selector
const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 
      0
    )
)

export const selectCartPriceTotal = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + (cartItem.quantity * cartItem.price), 
      0
    )
)

/*
  > Selector는 무엇인가?
  selector는 state에서 필요한 데이터를 가져오거나, 계산을 수행해서 원하는 형태의 데이터를 가져오는 역할을 말한다.
  이처럼 selector는 Redux가 적은 양의 필요한 데이터만을 가지고 있게 데이터에 대한 계산을 도와주며,

  state를 가져오는 컴포넌트들과 state의 구조 사이 한 층(selector)을 두어 구조가 바뀌어도 
  연관된 모든 컴포넌트를 바꿀 필요 없이 selector만 바꿔주면 성능이 향상되기 때문에 사용한다.

  > 그렇다면 reselect란 무엇인가?
  selector 역할을 수행하면서 캐싱을 통해 동일한 계산을 방지해서 성능을 향상시켜 주며, 
  파라미터로 전달받은 값이 이전과 같다면 새롭게 계산하지 않고 저장된 결과 값을 돌려주는 라이브러리를 말한다.

  > 쓰는 이유는 무엇인가?
  reselect가 memoization를 통해 불필요한 렌더링을 막아주고 성능을 향샹시켜주시 때문에 사용해야 한다. 

  > 여기서 memoization(메모화)란?
  함수에 대한 입력을 추적하고 나중에 참조할 수 있도록 입력과 결과를 저장하는 작업을 말한다.
*/