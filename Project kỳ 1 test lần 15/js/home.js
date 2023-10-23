const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const tab1 = document.getElementById("fridgesDetail");
const tab2 = document.getElementById("laundryDetail");
const tab3 = document.getElementById("conditioningDetail");

button1.addEventListener("click", function () {
    button2.classList.add("collapsed")
    button3.classList.add("collapsed")
    if (tab1.classList.contains("show")) {
        plusIcon1.style.display
    }
    if (tab2.classList.contains("show")) {
        tab2.classList.remove("show");
    }
    if (tab3.classList.contains("show")) {
        tab3.classList.remove("show");
    }
    
});
button2.addEventListener("click", function () {
    button1.classList.add("collapsed")
    button3.classList.add("collapsed")
    if (tab1.classList.contains("show")) {
        tab1.classList.remove("show");
    }
    if (tab3.classList.contains("show")) {
        tab3.classList.remove("show");
    }
});
button3.addEventListener("click", function () {
    button1.classList.add("collapsed")
    button2.classList.add("collapsed")
    if (tab1.classList.contains("show")) {
        tab1.classList.remove("show");
    }
    if (tab2.classList.contains("show")) {
        tab2.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var closeButtons = document.querySelectorAll(".close-tab-content");
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            var tabContent = button.closest(".tab-content");
            if (tabContent) {
                tabContent.classList.add('d-none');
            }
            var linkProducts = document.querySelectorAll(".link-product");
            linkProducts.forEach(function (link) {
                link.classList.remove('active');
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const linkProducts = document.querySelectorAll(".link-product");
    console.log(linkProducts);
    const tabContent = document.querySelector(".tab-content");
    linkProducts.forEach(function(linkProduct) {
        linkProduct.addEventListener("click", function() {
            tabContent.classList.remove("d-none");
        });
    });
});
