// getBoundingClientRect 实现懒加载

let imgList1 = [...document.querySelectorAll(".get_bounding_rect")];
let length = imgList1.length;

let lazyLoad1 = (function () {
  let count = 0;
  return function () {
    let deleteIndexList = [];
    imgList1.forEach((img, index) => {
      let rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        // 加载成功后将图片添加到删除列表中
        deleteIndexList.push(index);
        count++;
        if (count === length) {
          //当图片全部加载完毕解绑scroll事件
          document.removeEventListener("scroll", lazyLoad1);
        }
      }
    });
    //删除已经加载过的图片
    imgList1 = imgList1.filter((_, index) => !deleteIndexList.includes(index));
  };
})();

// 这里引用了 throttle.js 的节流函数
lazyLoad1 = throttle(lazyLoad1, 100);
document.addEventListener("scroll", lazyLoad1);
//手动加载一次，否则首页的图片不会触发scroll
lazyLoad1();

// intersectionObserver 实现懒加载
let imgList2 = Array.from(document.querySelectorAll(".intersection_observer"));

let lazyLoad2 = (function () {
  //实例化observe
  let observe = new IntersectionObserver((entries) => {
    //entries存储着所有观察被元素的intersectionObserverEntry配置
    entries.forEach((entry) => {
      //>0表示进入视口
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src;
        //取消观察
        observe.unobserve(entry.target);
      }
    });
  });
  imgList2.forEach((img) => {
    observe.observe(img);
  });
})();

lazyLoad2();
