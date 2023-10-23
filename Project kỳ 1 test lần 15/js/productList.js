// fetch('header only.html')
//             .then(response => response.text())
//             .then(data => {
//                 document.getElementById('header').innerHTML = data;
//             });
fetch('footer only.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
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
                    id: "F0101"
                },
                {
                    imgSrc: 'images/1.jpg',
                    title: 'Tumble dryer I-Pro Series 7',
                    subtitleProduct: 'Freestanding, 12 / 8 Kg, 1400 RPM, Engine Direct Motion',
                    subtitle1: '•Direct Motion Motor',
                    subtitle2: '•Professional sanitizing experience',
                    subtitle3: '•I -Refresh',
                    subtitle4: '•Automatic cleaning system',
                    subtitle5: '•Steam diffusion',
                    brand: 'LG',
                    price: 450,
                    id: "F0102"
                },
                {
                    imgSrc: 'images/3.jpg',
                    title: 'Washing machine I-Pro Series 7',
                    subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion',
                    subtitle1: '•Direct Motion Motor',
                    subtitle2: '•Refresh',
                    subtitle3: '•Automatic cleaning system',
                    subtitle4: '•Steam diffusion',
                    subtitle5: '•Anti-Bacterial Treatment',
                    brand: 'Funiki',
                    price: 999,
                    id: "F0103"
                },
                {
                    imgSrc: 'images/6.jpg',
                    title: 'Washing machine I-Pro Series 7',
                    subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
                    subtitle1: '•Direct Motion Motor',
                    subtitle2: '•Refresh',
                    subtitle3: '•Automatic cleaning system',
                    subtitle4: '•Steam diffusion',
                    subtitle5: '•Anti-Bacterial Treatment',
                    brand: 'Electrolux',
                    price: 800,
                    id: "F0104"
                },
                {
                    imgSrc: 'images/3.jpg',
                    title: 'Washer dryer I-Pro Series 5',
                    subtitleProduct: 'Freestanding, 10 / 6 Kg, 1400 RPM, Engine Direct Motion',
                    subtitle1: '•I-Refresh',
                    subtitle2: '•Direct Motion Motor',
                    subtitle3: '•Professional sanitizing experience',
                    subtitle4: '•Smart Dual Spray',
                    subtitle5: '•Anti-Bacterial Treatment',
                    brand: 'Funiki',
                    price: 670,
                    id: "F0105"
                },
            ];
            
// Update new code to replace the old code
function displayProduct(brand) {
    productFridges.innerHTML = '';
    productsFridges.forEach(product => {
        if (brand === 'all' || product.brand === brand) {
            const productRow = document.getElementById('productFridges');
            const productCol = document.createElement('div');
            productCol.classList.add('col-12', 'col-lg-4', 'col-sm-6', 'my-2');
            productCol.innerHTML = `
            <div class="card" id="${product.id}">
                <img src="${product.imgSrc}" class="card-img-top" alt="...">
                <button class="addcompare" onclick="addtocompare(this)" style="border: none ;z-index: 100;float: right; font-size: 19px; color: green; background-color: white;">
                    <div style="float:right; padding-right: 10px">
                        <i class="fa-sharp fa-regular fa-plus"></i> 
                        Compare
                    </div>
                </button>
                <div class="card-header">
                    <h5 class="card-title">${product.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary subPro">${product.subtitleProduct}</h6>
                </div>
                <div class="card-body">
                    <p class="card-subtitle mb-2 text-body-secondary sub1">${product.subtitle1}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub2">${product.subtitle2}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub3">${product.subtitle3}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub4">${product.subtitle4}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub5">${product.subtitle5}</p>
                </div>
                <div class="card-footer">
                    <p class="priceP">$<span class="product-price">${product.price}</span></p>
                    <p class="quantityP d-none">${product.quantity}</p>
                    <a href="product detail.html" class="btn btn-danger stretched-link d-flex justify-content-around">More Detail</a>
                    <button class="btn btn-primary d-flex  justify-content-around addCart" onclick="addToCart(this)" style="width: 100%; margin-top: 5px;position: relative; z-index: 100;">Add To Cart</button>
                </div>
            </div>
        `;
            productRow.appendChild(productCol);
        }
    });
}
displayProduct('all');

AllProduct.addEventListener('click', function() {
    displayProduct('all');
})
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

// code to handle shopping cart
let cartItems = loadCartFromLocalStorage(); // Load cart from localStorage when the website is loaded

// Check if the data taken from localstorage exists, if it exists it will be converted into a js array, if it does not exist it will return an empty array
function loadCartFromLocalStorage() {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
}

function addToCart(button) {
    const cardElement = button.parentElement.parentElement;
    const productId = cardElement.getAttribute('id');
    const imgElement = cardElement.querySelector('.card-img-top');
    const h5Element = cardElement.querySelector('.card-title');
    const priceElement = cardElement.querySelector('.product-price');
    // const quantityElement = cardElement.querySelector('quantityP');

    if (imgElement && h5Element && priceElement) {
        const imgSrc = imgElement.getAttribute('src');
        const title = h5Element.innerText;
        const price = priceElement.innerText;
        // const quantity = quantityElement.innerText;

        // Create a new product
        const product = {
            id: productId,
            src: imgSrc,
            title: title,
            price: price,
            quantity: 1,
        };

        // Check if the product exists in the shopping cart or not
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // If the product already exists in the cart, replace it with a new product
            // cartItems[existingProductIndex] = product;
            alert('This product has already been added')
        } else {
            // If the product does not exist in the cart, add it to the cart
            cartItems.push(product);
            alert('Product added to cart:');
            saveCartToLocalStorage();
            // Display product information in the shopping cart
            console.log(product);
        }
    }
    else {
        return [];
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

window.addEventListener('beforeunload', () => {
    saveCartToLocalStorage();
});

//Create an event when clicking the Add To Cart button
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addCart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            addToCart(button);
        });
    });
    displayProduct('all');
});



// Compare item
// check compare
function CompareEmpty() {
    const savedCompareItems = localStorage.getItem('comparecart');
    return !savedCompareItems || JSON.parse(savedCompareItems).length === 0;
}

// const showCompareList = document.getElementById('showCompareList');

// if (CompareEmpty()) {   
//     showCompareList.style.display = 'none';
// } else {
//     showCompareList.style.display = 'block';
// } 

document.addEventListener('CompareLoadList', function () {
    if (CompareEmpty()) {
        showCompareList.style.display = 'none';
    } else {
        showCompareList.style.display = 'block';
    }
});

// Make sure that the code that checks the Local Storage status is run when the web page is loaded
if (CompareEmpty()) {
    showCompareList.style.display = 'none';
} else {
    showCompareList.style.display = 'block';
}

let comparecart = howiamLocalstorage();

function howiamLocalstorage() {
    const whatiahave = localStorage.getItem('comparecart');
    return whatiahave ? JSON.parse(whatiahave) : [];
}

// create item in localstorage 
function addtocompare(button) {
    const compareItem = button.parentElement;
    const ID = compareItem.getAttribute('id');
    const IMG = compareItem.querySelector('.card-img-top');
    const subPro = compareItem.querySelector('.subPro');
    const sub1 = compareItem.querySelector('.sub1');
    const sub2 = compareItem.querySelector('.sub2');
    const sub3 = compareItem.querySelector('.sub3');
    const sub4 = compareItem.querySelector('.sub4');
    const sub5 = compareItem.querySelector('.sub5');
    const H5 = compareItem.querySelector('.card-title');
    const PRICE = compareItem.querySelector('.product-price');

    if (IMG && subPro && sub1 && sub2 && sub3 && sub4 && sub5 && H5 && PRICE) {
        const IMGSrc = IMG.getAttribute('src');
        const SUBPRO = subPro.innerText;
        const SUB1 = sub1.innerText;
        const SUB2 = sub2.innerText;
        const SUB3 = sub3.innerText;
        const SUB4 = sub4.innerText;
        const SUB5 = sub5.innerText;
        const PROTILTE = H5.innerText;
        const price = PRICE.innerText;

        // Create a new product
        const product = {
            idCOM: ID,
            srcCOM: IMGSrc,
            SUBPROCOM: SUBPRO,
            sub1COM: SUB1,
            sub2COM: SUB2,
            sub3COM: SUB3,
            sub4COM: SUB4,
            sub5COM: SUB5,
            titleCOM: PROTILTE,
            priceCOM: price,
        };
        
        // Check if the product already exists in compare
        const existingCompareIndex = comparecart.findIndex(item => item.idCOM === product.idCOM);

        if (comparecart.length >= 3) {
            alert("You can't add more 3 products");
        } 
        else {
            if (existingCompareIndex !== -1) {
                alert('This product has already been added');
            } else {
                //If the product does not exist in compare, add it to compare
                comparecart.push(product);
                alert('Product added to compare:');
                savecompareToLocalStorage();
                // Display product information in compare
                console.log(product);         
                // if(showCompareList.classList.contains("d-none")){
                //     showCompareList.classList.remove("d-none");
                //     showCompareList.classList.add("show");
                // }
                // console.log('test', showCompareList);
            }
        } 
        // displayCart();
    }
    else {
        return [];
    }
}

function savecompareToLocalStorage() {
    localStorage.setItem('comparecart', JSON.stringify(comparecart));
    //Declare the compare node's storage variable when it is invisible
    let comparehidden = hiddenlocalstorage();

    // code to trigger an event when clicking the + compare button and will show the button bar when adding a product to compare for the first time
    const event = new Event('CompareLoadList');
    document.dispatchEvent(event);
    
    // Check if the data taken from localstorage exists, if it exists it will be converted into a js array, if it does not exist it will return an empty array
    function hiddenlocalstorage() {
    const hiddenbutton = localStorage.getItem('comparecart');
    return hiddenbutton ? JSON.parse(hiddenbutton) : [];
    }
    localStorage.setItem('comparecart', JSON.stringify(comparehidden))
    // Compare hidden button adds image to div using local storage
    function displayHidden() {
        const Hiddenlist = document.querySelector('.HiddenOne');
        
        while (Hiddenlist.firstChild) {
            Hiddenlist.removeChild(Hiddenlist.firstChild);
        }
        // Get data from localStorage
        const HiddenCOMitems = localStorage.getItem('comparecart');
        if (HiddenCOMitems) {
            HideCOMitems = JSON.parse(HiddenCOMitems);
            HideCOMitems.forEach(item => {
                const ShowHiddenItem = document.createElement('div');
                ShowHiddenItem.classList.add('col-12', 'col-sm-4', 'd-flex', 'justify-content-center', 'Hidden-item');
                ShowHiddenItem.innerHTML = `
                    <div class="itemsCompare" id="${item.idCOM}">
                        <button class="destroycart">X</button>
                        <img src="${item.srcCOM}" alt="" style="max-width: 100%; width: 100%;" class="imgadf">
                    </div>
                `;
                Hiddenlist.appendChild(ShowHiddenItem);
            });
        }
    }
    // product display
    displayHidden();

    // remove button
    function removelocal()  {
        localStorage.setItem('comparecart', JSON.stringify(comparecart));
    }
    const destroycart = document.querySelectorAll('.destroycart');
    destroycart.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const hiddemitems = button.closest('.Hidden-item');
            const deletehide = hiddemitems.querySelector('.itemsCompare');
            console.log('deletehide', deletehide);
            const hidesrc = deletehide.getAttribute('id');
            console.log('leo', hidesrc);

            console.log('Before deletion', comparecart);
            comparecart = comparecart.filter(item => item.idCOM != hidesrc);
            console.log('After deletion', comparecart);
            console.log('Item src:' , hidesrc);
            removelocal() ;
            
            hiddemitems.remove();
            console.log('hidesrc: ', comparecart);
            alert('delete success');
        });
    });
}
//Create an event when the compare button is clicked
document.addEventListener('CompareLoad', function () {
    const addTocompareButtons = document.querySelectorAll('.addcompare');
    addTocompareButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            addtocompare(button);
        });
    });
    // displayCompare('all');
});

// 22/10/23 Updating the code of the removeFromCompare button can delete all data in localStorage
const removeFromCompareButton = document.getElementById("removeFromCompare");
removeFromCompareButton.addEventListener("click", function() {
    localStorage.removeItem("comparecart");
    const Hiddenlist = document.querySelector('.HiddenOne');
    Hiddenlist.innerHTML = "";
    comparecart = [];
    const event = new Event('CompareLoadList');
    document.dispatchEvent(event);
    alert("All product have been remove.");
    // window.location.reload();
});

//Set click event for all elements with class "remove-product"
        const removeProductButtons = document.querySelectorAll('.remove-product');
            removeProductButtons.forEach(button => {
            button.addEventListener('click', function (event) {
            event.preventDefault();
            const cartItem = button.closest('.cart-item');
            const wusp = cartItem.querySelector('.row');
            // console.log('wusp:', wusp);
            const itemId = wusp.getAttribute('id');
            // console.log('krem:',itemId);
  
            // console.log('Trước khi xóa: ', cartItems);
            cartItems = cartItems.filter(item => item.id !== itemId);
            // console.log('Sau khi xóa: ', cartItems);
            // console.log('Item ID:', itemId);
            saveCartToLocalStorage();
            // console.log("giá:", updateAllTotal());

            // Xóa sản phẩm khỏi giao diện
            cartItem.remove();
            // console.log('cartItems:', cartItems);
            alert('Delete success');  
            window.location.reload();
            updateAllTotal();
            });
        });

savecompareToLocalStorage();
window.addEventListener('compareunload', () => {
    savecompareToLocalStorage();    
});


// document.addEventListener('RemoveCompareList', function() {
//     const removeCompareList = document.getElementById('removeFromCompare');
//     removeCompareList.addEventListener('click', function() {
//         localStorage.removeItem('comparecart');
//         alert('All product have been remove from compare.');
//     })
// })



