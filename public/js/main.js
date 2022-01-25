// /* 검색에서 돋보기를 click해도 검색창이 늘어 나게 하는 효과 */ 
// // const searchEl = document.querySelector('.search');
// // const searchInputEl = searchEl.querySelector('input');
// // console.log("searchEl:", searchEl);
// // searchEl.addEventListener('click', () => {
// //   searchInputEl.focus();
// // });
// // // // 해당 부분에 focused되면 
// // searchInputEl.addEventListener('focus', () => {
// //   searchEl.classList.add('focused');
// //   searchInputEl.setAttribute('placeholder', 'Search');
// // });
// // // // blur : focused가 해제되면
// // searchInputEl.addEventListener('blur', () => {
// //   searchEl.classList.remove('focused');
// //   searchInputEl.setAttribute('placeholder', '');
// // });

// /* 
//   Badges
//   Lodash 라이브러리를 이용한다. 
//   gsap : 애니매이션 라이브러리
//   화면이 스크롤 될 때, 특정 지점을 지나면 Badge를 사라지게 하는 효과 
// */ 
// const badgeEl = document.querySelector('.header .badges');
// const toTopEl = document.querySelector('#to-top');
// // _.throttle(함수, 시간)
// window.addEventListener('scroll', _.throttle(function(){
//   //console.log('window.scrollY:',window.scrollY);
//   if(window.scrollY > 500){
//     //badgeEl.style.display = 'none';
//     // gsap.to(요소, 지속시간, 옵션)
//     gsap.to(badgeEl, 0.6, {
//       opacity: 0,
//       display: 'none'
//     });
//     // 버튼 보이기 
//     gsap.to(toTopEl, .2, {
//       x: 0
//     })
//   } else {    
//     //badgeEl.style.display = 'block';
//     gsap.to(badgeEl, 0.6, {
//       opacity: 1,
//       display: 'block'
//     });
//     // 버튼 숨기기
//     gsap.to(toTopEl, .2, {
//       x: 100
//     })
//   }
// }, 300));

// // ScrollToPlugin 사용
// toTopEl.addEventListener('click', function() {
//   gsap.to(window, .7, {
//     scrollTo: 0
//   })
// });


// // 이미지를 시간차를 두고 나타나게 하는 로직
// const fadeEls = document.querySelectorAll('.home .fade-in');
// fadeEls.forEach((fadeEl, index) => {
//     // gsap.to(요소, 지속시간, 옵션)
//     gsap.to(fadeEl, 1, {
//         delay: (index + 1) * 0.7,
//         opacity: 1
//     });
// });


// // Swiper이용 slide animation 설정
// // new Swiper(선택자, 옵션)
// new Swiper('.notice-line .swiper-container', {
//     direction: 'vertical',
//     autoplay: true,
//     loop: true
// });


// // Promotion
// new Swiper('.promotion .swiper-container', {
//   // direction: 'horisontal',  // 이것은 기본 값
//   slidesPerView: 3,   // 한번에 보여 줄 슬라이드 개수
//   spaceBetween: 10,   // 슬라이드 사이 여백
//   centeredSlides: true, // 1번 슬라이드가 가운데 위치
//   loop: true,          // 첫번째 이미지가 마지막에도
//   autoplay: {
//       delay: 5000
//   },
//   pagination: {
//     el: '.promotion .swiper-pagination',    // 페이지 번호 요소 선택자
//     clickable: true,        // 사용자의 페이지 번호 요소 제어 가능 여부
//   },
//   navigation: {
//       prevEl: '.promotion .swiper-prev',
//       nextEl: '.promotion .swiper-next'
//   }
// });


// const promotionEl = document.querySelector('.promotion');
// const promotionToggleBtn = document.querySelector('.toggle-promotion');
// let isHidePromotion = false;
// promotionToggleBtn.addEventListener('click', function() {
//   isHidePromotion = !isHidePromotion;
//   if(isHidePromotion) {
//     // 숨김처리
//     promotionEl.classList.add('hide');
//   } else {
//     // 보임처리
//     promotionEl.classList.remove('hide');
//   }
// });


// function floatingObject(selector) {
//   // gsap.to(요소, 시간, 옵션);
//   gsap.to(selector, 1, {
//     x: 5,
//     y: 3,
//     repeat: -1
//   });
// }
// floatingObject('.floating');


// const spyEls = document.querySelectorAll('section.scroll-spy');
// spyEls.forEach(function(spyEl) {
//   new ScrollMagic
//     .Scene({
//       triggerElement: spyEl,   // 보여짐 여부를 감시할 요소를 지정
//       triggerHook: .8         // viewport에서 보여지기 시작하는 부분. 여기서 부터 애니메이션 작동
//     })
//     .setClassToggle(spyEl, 'show')
//     .addTo(new ScrollMagic.Controller());
// });


// const thisYear = document.querySelector('.this-year');
// thisYear.textContent = new Date().getFullYear();


window.onscroll = function() {
  const header = document.querySelector('.header');
  var top = window.scrollY;  
  console.log("header:", header.className);
  console.log("top:", top);
  if(top >= 50) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}