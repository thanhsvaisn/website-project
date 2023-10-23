fetch('header only.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            });
const productsFridges = [
    {
        imgSrc: 'images/1.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Electrolux',
        price: 500,
        id: "0101"
    },
    {
        imgSrc: 'images/2.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'LG',
        price: 450,
        id: "0102"
    },
    {
        imgSrc: 'images/3.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Funiki',
        price: 999,
        id: "0103"
    },
    {
        imgSrc: 'images/4.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Electrolux',
        price: 800,
        id: "0104"
    },
    {
        imgSrc: 'images/4.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Funiki',
        price: 670,
        id: "0105"
    },
];

productsFridges.forEach(product => {
    const productRow = document.getElementById('productFridges');
    const productCol = document.createElement('div');
    productCol.classList.add('col-12', 'col-lg-4', 'col-sm-6', 'my-2');
    productCol.innerHTML = `
        <div class="card" id="${product.id}">
            <img src="${product.imgSrc}" class="card-img-top" alt="...">
            <div class="card-header">
                <h5 class="card-title">${product.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${product.subtitleProduct}</h6>
            </div>
            <div class="card-body">
                <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle1}</p>
                <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle2}</p>
                <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle3}</p>
                <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle4}</p>
                <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle5}</p>
            </div>
            <div class="card-footer">
                <p class="product-price">${product.price} $</p>
                <a href="#" class="btn btn-danger stretched-link d-flex justify-content-around">Show Product</a>
                <button class="btn btn-primary  d-flex justify-content-around addCart" onclick="addToCart(this)" style="width: 100%; margin-top: 5px;position: relative; z-index: 100;">Add To Cart</button>
            </div>
        </div>
    `;
    productRow.appendChild(productCol); 
})

function displayProduct (brand) {
    productFridges.innerHTML = '';
    productsFridges.forEach(product => {
        if (product.brand === brand) {
            const productRow = document.getElementById('productFridges');
            const productCol = document.createElement('div');
            productCol.classList.add('col-12', 'col-lg-4', 'col-sm-6', 'my-2');
            productCol.innerHTML = `
                <div class="card" id="${product.id}">
                    <img src="${product.imgSrc}" class="card-img-top" alt="...">
                    <div class="card-header">
                        <h5 class="card-title">${product.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${product.subtitleProduct}</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle1}</p>
                        <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle2}</p>
                        <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle3}</p>
                        <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle4}</p>
                        <p class="card-subtitle mb-2 text-body-secondary">${product.subtitle5}</p>
                    </div>
                    <div class="card-footer">
                        <p class="product-price">${product.price} $</p>
                        <a href="product detail.html" class="btn btn-danger stretched-link d-flex justify-content-around">Buy Now</a>
                        <button class="btn btn-primary d-flex justify-content-around addCart" onclick="addToCart(this)" style="width: 100%; margin-top: 5px;position: relative; z-index: 100;">Add To Cart</button>
                    </div>
                </div>
            `;
            productRow.appendChild(productCol); 
        }
    })
}

ElectroluxProduct.addEventListener('click', function () {
    displayProduct('Electrolux');
});
LGProduct.addEventListener('click', function () {
    displayProduct('LG');
})
FunikiProduct.addEventListener('click', function () {
    displayProduct('Funiki');
})
SamsungProduct.addEventListener('click', function () {
    displayProduct('Samsung');
})


const showButtonOn = document.getElementById('showButtonOn');
const showButtonOff = document.getElementById('showButtonOff');
const bottomDiv = document.getElementById('bottomDiv');

showButtonOn.addEventListener('click', () => {
    bottomDiv.classList.toggle('show');
    showButtonOn.classList.add('d-none')
});
showButtonOff.addEventListener('click', () => {
    bottomDiv.classList.remove('show');
    showButtonOn.classList.remove('d-none')
});


// Sử lý giỏ hàng
const cartItems = [];

// Hàm xử lý khi nút "Add To Cart" được bấm
function addToCart(button) {
    const cardElement = button.parentElement.parentElement; // Phần tử card chứa sản phẩm

    // Lấy ID của thẻ card để xác định sản phẩm cụ thể
    const productId = cardElement.getAttribute('id');
    // Truy cập các phần tử bên trong thẻ card (img và h5)
    const imgElement = cardElement.querySelector('.card-img-top');
    const h5Element = cardElement.querySelector('.card-title');

    if (imgElement && h5Element) {
        // Lấy src của hình ảnh và innerText của tiêu đề
        const imgSrc = imgElement.getAttribute('src');
        const title = h5Element.innerText;

        // Tạo đối tượng sản phẩm và thêm vào giỏ hàng
        const product = {
            id: productId,
            src: imgSrc,
            title: title,
        };
        cartItems.push(product);

        // Hiển thị thông tin sản phẩm trong giỏ hàng (ví dụ: in ra console)
        console.log('Product added to cart:');
        console.log(product);
    }
    else {
        return [];
    }
}

// Gán hàm xử lý sự kiện cho tất cả nút "Add To Cart"
const addToCartButtons = document.querySelectorAll('.addCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
        addToCart(button);
    });
});