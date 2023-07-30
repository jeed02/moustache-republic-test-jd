import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [productData, setProductData] = useState({});
  const [selectedSize, setSelectedSize] = useState(undefined);
  const [cartSize, setCartSize] = useState(0);
  const [cart, setCart] = useState([]);

  function addToCart(customerPurchase) {
    console.log(cartSize);

    if (cart.size === 0) {
      setCart((cart) => [...cart, customerPurchase]);
      setCartSize(cartSize + 1);
    } else {
      if (cart.some((purchase) => purchase[0] === customerPurchase[0])) {
        var item = cart.find((i) => i[0] === customerPurchase[0]);
        item[1] = item[1] + 1;
        setCartSize(cartSize + 1);
      } else {
        setCart((cart) => [...cart, customerPurchase]);
        setCartSize(cartSize + 1);
      }
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
      )
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(productData);

  return (
    <body className="w-screen px-0 md:px-56 py-4">
      <Header productCount={cartSize} cart={cart} />
      <section>
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 py-8">
          <div className="flex justify-center px-4 mb-4 lg:justify-end px-16">
            <img
              src={process.env.PUBLIC_URL + "/classic-tee.jpg"}
              className="object-cover h-full lg:h-4/6"
              alt="Classic Tee"
            ></img>
          </div>
          <div className="px-4 lg:px-24">
            <h1 className="text-font-main text-xl font-normal mb-4">
              {productData.title}
            </h1>
            <hr class="hidden lg:block h-[1px] my-2 bg-b-lg border-0"></hr>
            <h2 className="text-font-main font-bold text-sm">
              ${productData.price}
            </h2>
            <hr class="hidden lg:block h-[1px] my-2 bg-b-lg border-0"></hr>
            <p className="text-font-light my-4 text-sm leading-relaxed">
              {productData.description}
            </p>

            <div>
              <div className="flex">
                <h1 className="text-font-light font-bold text-xs">SIZE</h1>
                <h1 className="text-required-star font-bold text-xs">*</h1>
                {selectedSize ? (
                  <>
                    <h1 className="text-black font-bold text-xs">
                      {selectedSize}
                    </h1>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className="grid grid-flow-col auto-cols-max gap-1 w-1/2 h-10 my-2">
                <div
                  onClick={() => {
                    setSelectedSize("S");
                  }}
                >
                  <input
                    id="S"
                    type="radio"
                    value="S"
                    className="hidden peer"
                    name="option"
                  />
                  <label
                    for="S"
                    className="border border-b-lg w-10 h-10 flex items-center justify-center text-font-light text-xs peer-checked:text-black peer-checked:border-[#000] hover:cursor-pointer"
                  >
                    S
                  </label>
                </div>
                <div
                  onClick={() => {
                    setSelectedSize("M");
                  }}
                >
                  <input
                    id="M"
                    type="radio"
                    value="M"
                    className="peer hidden"
                    name="option"
                  />
                  <label
                    for="M"
                    className="border border-b-lg w-10 h-10 flex items-center justify-center text-font-light text-xs peer-checked:text-black peer-checked:border-[#000] hover:cursor-pointer"
                  >
                    M
                  </label>
                </div>
                <div
                  onClick={() => {
                    setSelectedSize("L");
                  }}
                >
                  <input
                    id="L"
                    type="radio"
                    value="L"
                    className="peer hidden"
                    name="option"
                  />
                  <label
                    for="L"
                    className="border border-b-lg w-10 h-10 flex items-center justify-center text-font-light text-xs peer-checked:text-black peer-checked:border-[#000] hover:cursor-pointer"
                  >
                    L
                  </label>
                </div>

                {/* {productData ? (
                  <>
                    {productData.sizeOptions.map((size) => (
                      <div>
                        <input
                          id={size.id}
                          type="radio"
                          value={size.label}
                          className="hidden peer"
                          onClick={() => {
                            setSelectedSize(size.label);
                          }}
                        />
                        <label
                          for={size.label}
                          className="border border-b-lg w-10 h-10 flex items-center justify-center peer-checked:border-[#000] hover:cursor-pointer"
                        >
                          <h2 className="text-font-light text-xs peer-checked:text-black">
                            {size.label}
                          </h2>
                        </label>
                      </div>
                    ))}
                  </>
                ) : (
                  <></>
                )} */}
              </div>
              <button
                className="w-40 border-2 border-b-dg h-9 font-bold my-3 hover:text-[#FFF] hover:bg-black duration-[0.2ms]"
                onClick={() => {
                  addToCart([selectedSize, 1, productData.title]);
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
