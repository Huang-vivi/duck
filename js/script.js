// 精選種類的active切換
document.addEventListener("DOMContentLoaded",function () {
  const textures = document.querySelectorAll(".texture-button");
  const contents = document.querySelectorAll(".texture-content");

  textures.forEach(tab => {
    tab.addEventListener("click",(event)=>{
      event.preventDefault();
      const target = tab.getAttribute('data-tab');

      textures.forEach(t=> t.classList.remove("active"));
      contents.forEach(c=>c.classList.remove("active"))

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

