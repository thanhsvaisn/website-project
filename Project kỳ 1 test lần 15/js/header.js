function displayHeader () {
    const headerOnly = document.getElementById('header');
    const headerDiv = document.createElement('div');
    headerDiv.innerHTML = `
    <div class="container-fluid">
            <div class="row header_top">
                <div class="col-4 align-items-center d-flex">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary d-lg-none"> <!--This section appears when the screen is smaller than lg size-->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="fas fa-bars icon-header"></span>
                        </button>
                    </nav>
    
                    <!--This part is hidden when the screen is smaller than lg size -->
                    <!-- <div class="dropdown d-none d-lg-block"> 
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Support</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="product.html">1</a></li>
                            <li><a class="dropdown-item" href="product.html">2</a></li>
                            <li><a class="dropdown-item" href="product.html">3</a></li>
                        </ul>
                    </div> -->
    
                </div>
                <div class="col-4 align-items-center d-flex justify-content-center">
                    <a href="home.html"><img class="logo" src="images/logo.png" alt="logo" style="max-width: 60px;"></a>
                </div>
                <div class="col-4 align-items-center d-flex justify-content-end"> 
                <span class="container__user" style="color:white;font-size:16px;text-transform: capitalize;margin-right:12px"></span>
                <a href="login.html"><i class="fas fa-user icon-header"></i></a>
                    <a href="cart.html"><i class="fas fa-shopping-cart icon-header"></i></a>
                </div>
            </div>
        </div>
        <hr class="d-none d-lg-block">
        <!--Displayed when the screen is smaller than lg and click on the hamburger icon-->
        <div class="container-fluid headerOn">
            <div class="collapse navbar-collapse d-lg-none header_bottom_toggle" id="navbarSupportedContent" style="width: 100%!important;"> 
                <ul class="navbar-nav" id="nav-bar">
                    <li>
                        <button id="button1" class="header-button collapsed" data-bs-toggle="collapse" data-bs-target="#fridgesDetail" aria-controls="fridgesDetail" aria-expanded="false" aria-label="Toggle navigation" href="#">
                            Fridges
                        </button>
                        <div class="collapse navbar-collapse category-list openTab" id="fridgesDetail">
                            <div class="all items"><a href="product.html">All refrigerators</a></div>
                            <div class="items"><a href="product.html">2-door refrigerator</a></div>
                            <div class="items"><a href="product.html">Mini refrigerator</a></div>
                            <div class="items"><a href="product.html">1-door refrigerator</a></div>
                            <div class="items"><a href="product.html">Freezer</a></div>
                        </div>
                    </li>
    
                    <li>
                        <button id="button2" class="header-button collapsed" data-bs-toggle="collapse" data-bs-target="#laundryDetail" aria-controls="laundryDetail" aria-expanded="false" aria-label="Toggle navigation" href="#">
                            Laundry
                        </button>
                        <div class="collapse navbar-collapse category-list openTab" id="laundryDetail">
                            <div class="all items"><a href="product.html">All washing machines</a></div>
                            <div class="items"><a href="product.html">Front-loading washing machine</a></div>
                            <div class="items"><a href="product.html">Top-loading washing eyes</a></div>
                            <div class="items"><a href="product.html">Washing machine</a></div>
                        </div>
                    </li>
                    <li>
                        <button id="button3" class="header-button collapsed" data-bs-toggle="collapse" data-bs-target="#conditioningDetail" aria-controls="conditioningDetail" aria-expanded="false" aria-label="Toggle navigation" href="#" href="#">
                            Air conditioning
                        </button>
                        <div class="collapse navbar-collapse category-list openTab" id="conditioningDetail">
                            <div class="all items" class="all"><a href="product.html">All air-conditioned</a></div>
                            <div class="items"><a href="product.html">1 way air</a></div>
                            <div class="items"><a href="product.html">2 way air</a></div>
                            <div class="items"><a href="product.html">Conditioning</a></div>
                            <div class="items"><a href="product.html">Air condition</a></div>
                        </div>
                    </li>
                    <li>
                        <a href="product.html">
                            <button class="header-button-noPlus">Ovens</button>
                        </a>
                    </li>
                    <li>
                        <a href="product.html">
                            <button class="header-button-noPlus">Microwaves</button>
                        </a>
                    </li>
                    <li>
                        <a href="product.html">
                            <button class="header-button-noPlus">Dishwasher</button></a>
                    </li>
                    <li>
                        <a href="product.html">
                            <button class="header-button-noPlus">Hobs</button>
                        </a>
                    </li>
                    <hr>
                </ul>
            </div>
        </div>

        <!--Displayed when the screen is larger than lg size-->
        <div class="container-fluid">
            <div class="row d-none d-lg-block">
                <nav class="nav_list header_bottom col-12 d-flex justify-content-center align-items-center">
                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item header-item" role="presentation"><a class="nav-link link-product" id="v-pills-fridges-tab" data-bs-toggle="pill" data-bs-target="#v-pills-fridges-type" type="button" role="tab" aria-controls="v-pills-fridges-type" aria-selected="true" href="product.html">Fridges</a></li>
                        <li class="nav-item header-item" role="presentation"><a class="nav-link link-product" id="v-pills-laundry-tab" data-bs-toggle="pill" data-bs-target="#v-pills-laundry-type" type="button" role="tab" aria-controls="v-pills-laundry-type" aria-selected="false" href="product.html">Laundry</a></li>
                        <li class="nav-item header-item" role="presentation"><a class="nav-link link-product" id="v-pills-ovens-air-conditioning-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ovens-air-conditioning-type" type="button" role="tab" aria-controls="v-pills-ovens-air-conditioning-type" aria-selected="false" href="product.html">Air conditioning</a></li>
                        <li class="nav-item header-item" role="presentation"><a class="nav-link link-product" href="product.html">Ovens</a></li>
                        <li class="nav-item header-item" role="presentation"><a class="nav-link link-product" href="product.html">Microwaves</a></li>
                        <li class="nav-item header-item" role="presentation"><a class="nav-link link-product" href="product.html">Dishwasher</a></li>
                        <li class="nav-item header-item" role="presentation"><a class="nav-link link-product" href="product.html">Hobs</a></li>
                    </ul>
                </nav>
    
                <div class="tab-content container" id="expansionCategory" style="background-color:black; max-height: 450px;">
                    <div class="tab-pane fade" id="v-pills-fridges-type" role="tabpanel" aria-labelledby="v-pills-fridges-type" tabindex="0">
    
                        <div style="float: right">
                            <a class="close-tab-content" href="#" style="font-size: 30px;"><i class="fas fa-times" style="color: #ffffff;"></i></a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a class="all-type" href="product.html">Fridges >></a>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/tu-lanh-samsung-inverter-208-lit-rt20har8dbu-sv-nho.jpg" alt="">
                                    <figcaption>2-door freezer</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/electrolux-45-lit-eum0500ad-vn-2.jpg" alt="">
                                    <figcaption>Mini freezer</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/tu-lanh-samsung-inverter-488l-4-cua-rf48a4000b4-sv.png" alt="">
                                    <figcaption>Multi door freezer</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/tu-dong-inverter-funiki-hoa-phat-hcfi-506s2d2.png" alt="">
                                    <figcaption>Freezer</figcaption>
                                </a>
                            </div>
                        </div>
                    </div>
    
                    <div class="tab-pane fade" id="v-pills-laundry-type" role="tabpanel" aria-labelledby="v-pills-laundry-type" tabindex="0">
                        <div style="float: right">
                            <a class="close-tab-content" href="#" style="font-size: 30px;"><i class="fas fa-times" style="color: #ffffff;"></i></a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a class="all-type" href="product.html">Laundry >></a>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/may-giat-lg-inverter-9-kg-fm1209s6w-2.jpg" alt="">
                                    <figcaption>Front loading washing machine</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" class="header-img" src="images/may-giat-long-dung-8kg-toshiba-aw-k905dv-sg-300.jpg" alt="">
                                    <figcaption>Top loading washing machine</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/wd11t734dbx-sv-a.jpg" alt="">
                                    <figcaption>Washing machine</figcaption>
                                </a>
                            </div>
                        </div>
                    </div>
    
                    <div class="tab-pane fade" id="v-pills-ovens-air-conditioning-type" role="tabpanel" aria-labelledby="v-pills-ovens-air-conditioning-type" tabindex="0">
                        <div style="float: right">
                            <a class="close-tab-content" href="#" style="font-size: 30px;"><i class="fas fa-times" style="color: #ffffff;"></i></a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a class="all-type" href="product.html">Air conditioning >></a>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/may-lanh-lg-inverter-1-5-hp-v13win-a.jpg" alt="">
                                    <figcaption>1-way air conditioner</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/dieu-hoa-2-chieu-funiki-9-000-btu-hsh10tmu-300.jpg" alt="">
                                    <figcaption>2-way air conditioner</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/dieu-hoa-tu-dung-funiki-fc-100mcc-2.jpg" alt="">
                                    <figcaption>Air conditioner</figcaption>
                                </a>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <a class="category-link" href="product.html">
                                    <img class="header-img" src="images/dieu-hoa-am-tran-casper-cc-18fs35-a.jpg" alt="">
                                    <figcaption>Ceiling air conditioner</figcaption>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    headerOnly.appendChild(headerDiv);
}
displayHeader();
