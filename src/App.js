import "./index.css";
import { useState } from "react";

function App() {
  const [arr] = useState([
    {
      item: "Special Item",
      orginalprice: "$20.00 ",
      discountprice: "$18.00",
      img: "https://images.indianexpress.com/2017/11/cosmetics-759.jpg"
    },
    {
      item: "Fancy Product",
      orginalprice: "$40.00 ",
      discountprice: "$20.00",
      img:
        "https://www.webfx.com/blog/wp-content/uploads/2021/04/jcp-product-categories.png"
    },
    {
      item: "Sale Item",
      orginalprice: "$50.00 ",
      discountprice: "$25.00",
      img: "https://skeetjecosmetics.files.wordpress.com/2014/03/3096.jpg"
    },
    {
      item: "Special Item",
      orginalprice: "$20.00 ",
      discountprice: "$18.00",
      img:
        "https://image.shutterstock.com/image-vector/glasses-line-art-silhouette-eyewear-260nw-1697413246.jpg"
    },
    {
      item: "Popular Item",
      orginalprice: "$32.00 ",
      discountprice: "$22.00",
      img: "https://m.media-amazon.com/images/I/61pbYlXndgL._UX569_.jpg"
    },
    {
      item: "Fancy Product",
      orginalprice: "$280.00 ",
      discountprice: "$120.00",
      img:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-selling-amazon-products-1586979875.png"
    },
    {
      item: "Toys",
      orginalprice: "$20.00 ",
      discountprice: "$18.00",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wooden_toys_%28cropped%29.JPG"
    },
    {
      item: " Rare collections",
      orginalprice: "$140.00 ",
      discountprice: "$90.00",
      img: "https://www.junglescout.com/wp-content/uploads/2020/06/cathero.png"
    }
  ]);

  var [cart, setcart] = useState([]);
  var [page, setpage] = useState("products");

  function cardadd(products) {
    setcart([...cart, { ...products }]);
  }
  function navigateto(newpage) {
    setpage(newpage);
  }
  function removefromcart(producttoremove) {
    setcart(cart.filter((item) => item !== producttoremove));
  }
  const products = () => (
    <div>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
          </div>
        </div>
      </header>

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {arr.map((data, i) => (
              <div class="col mb-5">
                <div class="card h-100">
                  <div
                    class="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  <img class="card-img-top" src={data.img} alt="..." />

                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{data.item}</h5>
                      <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                      </div>
                      <span class="text-muted text-decoration-line-through">
                        {data.orginalprice}
                      </span>
                      {data.discountprice}
                    </div>
                  </div>

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <div>
                        <button
                          onClick={() => cardadd(data)}
                          class="btn btn-outline-dark mt-auto"
                          href="#"
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>

      <script src="js/scripts.js"></script>
    </div>
  );
  const rendercart = () => (
    <div>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Cart</h1>
            <p class="lead fw-normal text-white-50 mb-0"></p>
          </div>
        </div>
      </header>

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cart.map((data, i) => (
              <div class="col mb-5">
                <div class="card h-100">
                  <div
                    class="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  <img class="card-img-top" src={data.img} alt="..." />

                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{data.item}</h5>
                      <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                      </div>
                      <span class="text-muted text-decoration-line-through">
                        {data.orginalprice}
                      </span>
                      {data.discountprice}
                    </div>
                  </div>

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <div>
                        <button
                          onClick={() => removefromcart(data)}
                          class="btn btn-outline-dark mt-auto"
                          href="#"
                        >
                          remove from cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>

      <script src="js/scripts.js"></script>
    </div>
  );

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Cosmetics
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button
                onClick={() => navigateto("cart")}
                class="btn btn-outline-dark"
                type="submit"
              >
                <i class="bi-cart-fill me-1"></i>
                Go to Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {cart.length}
                </span>
              </button>
              <button
                style={{ marginLeft: "6px" }}
                onClick={() => navigateto("products")}
                class="btn btn-outline-dark"
                type="submit"
              >
                <i class="bi-cart-fill me-1"></i>
                Products
              </button>
            </form>
          </div>
        </div>
      </nav>
      {page === "products" && products()}
      {page === "cart" && rendercart()}
    </div>
  );
}

export default App;
