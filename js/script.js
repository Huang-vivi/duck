// 精選種類的active切換
document.addEventListener("DOMContentLoaded", function () {
    const textures = document.querySelectorAll(".texture-button");
    const contents = document.querySelectorAll(".texture-content");

    textures.forEach(tab => {
        tab.addEventListener("click", (event) => {
            event.preventDefault();
            const target = tab.getAttribute('data-tab');

            textures.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"))

            tab.classList.add("active");
            document.getElementById(target).classList.add("active");
        })
    })
})


// 產品數據庫
const products = [
    { name: '红色玻璃杯', color: 'red', material: 'glass', price: 'low' },
    { name: '蓝色不锈钢杯', color: 'blue', material: 'stainless', price: 'medium' },
    { name: '绿色陶瓷杯', color: 'green', material: 'ceramic', price: 'high' },
    { name: '红色不锈钢杯', color: 'red', material: 'stainless', price: 'medium' },
    { name: '蓝色陶瓷杯', color: 'blue', material: 'ceramic', price: 'low' },
    // 更多产品...
];

function filterProducts() {
    const selectedColor = document.querySelector('input[name="color"]:checked').value;
    const selectedMaterial = document.querySelector('input[name="material"]:checked').value;
    const selectedPrice = document.querySelector('input[name="price"]:checked').value;

    const filteredProducts = products.filter(product =>
        product.color === selectedColor &&
        product.material === selectedMaterial &&
        product.price === selectedPrice
    );

    if (filteredProducts.length > 0) {
        const randomProduct = filteredProducts[Math.floor(Math.random() * filteredProducts.length)];
        document.getElementById('result').innerHTML = `
            <div class="product">
                <h2>${randomProduct.name}</h2>
                <p>颜色: ${randomProduct.color}</p>
                <p>材质: ${randomProduct.material}</p>
                <p>价格: ${randomProduct.price}</p>
            </div>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>没有找到符合条件的产品</p>`;
    }
}

// 跑馬燈無限巡迴
document.addEventListener("DOMContentLoaded", function () {
    const marqueeInner = document.querySelector('.marquee-inner');
    const images = marqueeInner.querySelectorAll('img');
    const totalWidth = Array.from(images).reduce((acc, img) => acc + img.offsetWidth, 0);

    marqueeInner.style.animationDuration = `${totalWidth / 100}px`;
});

// $(document).ready(function () {
//     $('.nav-link').on('click', function () {
//         // 移除所有菜单项的 active 类
//         $('.nav-link').removeClass('active');
//         // 给当前点击的菜单项添加 active 类
//         $(this).addClass('active');

//         // 隐藏所有折叠内容
//         $('.collapse').collapse('hide');
//         // 显示当前点击菜单项对应的折叠内容
//         var target = $(this).attr('href');
//         $(target).collapse('show');
//     });

//     // 检查页面加载时是否有 active 的菜单项
//     var activeItem = $('.nav-link.active');
//     if (activeItem.length) {
//         var target = activeItem.attr('href');
//         $(target).collapse('show');
//     }
// });

// function showTabContent(tabId) {
//   var tabs = document.querySelectorAll('.tab');
//   var contents = document.querySelectorAll('.tab-content');

//   tabs.forEach(function(tab) {
//       tab.classList.remove('active');
//   });

//   contents.forEach(function(content) {
//       content.classList.remove('active');
//   });

//   document.querySelector('.tab[onclick="showTabContent(\'' + tabId + '\')"]').classList.add('active');
//   document.getElementById(tabId).classList.add('active');
// }

// // 默认显示第一个标签页
// document.addEventListener('DOMContentLoaded', function() {
//   showTabContent('taichung');
// });


//輪播
// document.addEventListener("DOMContentLoaded", function() {
//     var myCarousel = document.getElementById('myCarousel');
//     var carousel = new bootstrap.Carousel(myCarousel, {
//       interval: 1000, // 每 2 秒換一張圖片
//       wrap: true // 是否循環播放
//     });

//    var items = document.querySelectorAll('.carousel-inner');
//     var minPerSlide = 4;

//     items.forEach((el) => {
//     let next = el.nextElementSibling;
//      for (var i = 1; i < minPerSlide; i++) {
//       if (!next) {
//     // wrap carousel by using first child
//        next = items[0];
//     }
//         let cloneChild = next.cloneNode(true);
//         el.appendChild(cloneChild.children[0]);
//        next = next.nextElementSibling;
//       }
//    });
//   });

