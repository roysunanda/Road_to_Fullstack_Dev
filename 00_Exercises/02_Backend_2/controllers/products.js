const allProducts = [];

const getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProducts = (req, res, next) => {
  allProducts.push({ title: req.body.title });
  res.redirect("/");
};

const getProducts = (req, res, next) => {
  const products = allProducts;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

export { getAddProducts, postAddProducts, getProducts };
