const arrOfCategories = [
  {
    title: "Trousers",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Library-Sites-pjg-content-global/default/dwb0be2f64/images/clp/women/categories/2108-newnow-clp-category-caroussel-trousers-women.jpg?sw=252",
  },
  {
    title: "Beachwear ",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Library-Sites-pjg-content-global/default/dw631ad8cf/images/clp/women/categories/2108-newnow-clp-category-caroussel-beachwear-women.jpg?sw=252",
  },
  {
    title: "Tops",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Library-Sites-pjg-content-global/default/dwf32d7938/images/clp/women/categories/2108-newnow-clp-category-caroussel-tops-women.jpg?sw=252",
  },
  {
    title: " Dresses & jumpsuits ",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Library-Sites-pjg-content-global/default/dw5aaddad3/images/clp/women/categories/2108-newnow-clp-category-caroussel-dresses-women.jpg?sw=252",
  },
  {
    title: " Footwear ",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Library-Sites-pjg-content-global/default/dw8a2ad7a1/images/clp/women/categories/2108-newnow-clp-category-caroussel-shoes-women.jpg?sw=252",
  },
];

const containerUL = document.querySelector(".carousel-list");

const categoriesNextBTN = document.querySelector(".categoris-next-btn");
const categoriesPrevBTN = document.querySelector(".categoris-prev-btn");

categoriesNextBTN.addEventListener("click", (event) => {
  next(event, arrOfCategories);
  renderCategories(arrOfCategories);
});
categoriesPrevBTN.addEventListener("click", (event) => {
  prev(event, arrOfCategories);
  renderCategories(arrOfCategories);
});

function renderCategories(arrOfCategories) {
  containerUL.innerHTML = "";
  for (let i = 0; i < arrOfCategories.length; i++) {
    const li = document.createElement("li");
    li.classList.add("d-flex");
    li.classList.add("flex-column");
    containerUL.append(li);

    const imageDIV = document.createElement("div");
    imageDIV.classList.add("image-wrap");

    const imageLINK = document.createElement("a");
    imageDIV.append(imageLINK);

    const image = document.createElement("img");
    image.setAttribute("src", arrOfCategories[i].src);
    imageLINK.append(image);

    const titleDIV = document.createElement("div");
    titleDIV.classList.add("title-wrap");

    const titleLINK = document.createElement("a");
    titleDIV.append(titleLINK);

    const titleSPAN = document.createElement("span");
    titleLINK.append(titleSPAN);
    titleSPAN.textContent = arrOfCategories[i].title;

    li.append(imageDIV, titleDIV);
  }
}

function next(event, arr) {
  event.preventDefault();
  let firstItem = arr.shift();
  arr.push(firstItem);
}
function prev(event, arr) {
  event.preventDefault();
  let lastItem = arr.pop();
  arr.unshift(lastItem);
}

const arrOfRecommandation = [
  {
    title: "GLORIA BUTTONED SAFARI DRESS",
    price: "₴ 3.100,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw1279add4/images/hi-res/PL952965_844_01_MO.jpg?sw=700&q=90",
  },
  {
    title: "PAULA TROUSERS WITH DARTS",
    price: "₴ 2.950,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw051ff6ca/images/hi-res/PL211485_844_01_MO.jpg?sw=700&q=90",
  },
  {
    title: "BLANCAS BRIGHT TEXT T-SHIRT",
    price: "₴ 855,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw77c15b1f/images/hi-res/PL504989_736_01_MO.jpg?sw=700&q=90",
  },
  {
    title: "AMADA FLOORLENGTH SATIN SPLIT DRESS",
    price: "₴ 2.750,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw57accdea/images/hi-res/PL952896_999_01_MO.jpg?sw=700&q=90",
  },
  {
    title: "LETICIA PRINTED TOP IN COMBINED SLEEVES",
    price: "₴ 2.750,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw3c5f4e18/images/hi-res/PL304151_0AA_01_MO.jpg?sw=700&q=90",
  },
  {
    title: "NELLY SAFARI JACKET",
    price: "₴ 5.850,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw6c9eeff1/images/hi-res/PL401972_736_01_MO.jpg?sw=700&q=90",
  },
  {
    title: "RACHEL DENIM MINI SKIRT",
    price: "₴ 2.400,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw7566652c/images/hi-res/PL900877DG9_000_01_MO.jpg?sw=700&q=90",
  },
  {
    title: "BLEU V-NECK T-SHIRT",
    price: "₴ 685,00",
    src: "https://www.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dw95c8ee30/images/hi-res/PL504820_803_01_MO.jpg?sw=700&q=90",
  },
];

const recommandationContainer = document.querySelector(
  ".newIn-products-wrapper"
);

const recommandationNextBTN = document.querySelector(
  ".recommandation-next-btn"
);
const recommandationPrevBTN = document.querySelector(
  ".recommandation-prev-btn"
);

recommandationNextBTN.addEventListener("click", (event) => {
  next(event, arrOfRecommandation);
  renderRecommandation(arrOfRecommandation);
});

recommandationPrevBTN.addEventListener("click", (event) => {
  prev(event, arrOfRecommandation);
  renderRecommandation(arrOfRecommandation);
});

function renderRecommandation(arrOfRecommandation) {
  recommandationContainer.innerHTML = "";
  for (let i = 0; i < arrOfRecommandation.length; i++) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("newIn-product");
    recommandationContainer.append(productContainer);

    const imageDIV = document.createElement("div");
    imageDIV.classList.add("picture");

    const image = document.createElement("img");
    image.setAttribute("src", arrOfRecommandation[i].src);
    imageDIV.append(image);

    const titleDIV = document.createElement("div");
    titleDIV.classList.add("product-title");

    const titleLINK = document.createElement("a");
    titleLINK.textContent = arrOfRecommandation[i].title;
    titleDIV.append(titleLINK);

    const priceDIV = document.createElement("div");
    priceDIV.classList.add("product-price");
    priceDIV.textContent = arrOfRecommandation[i].price;

    productContainer.append(imageDIV, titleDIV, priceDIV);
  }
}
