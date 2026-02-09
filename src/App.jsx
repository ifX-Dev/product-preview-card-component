import "./App.css";
import product_mobile from "./assets/image-product-mobile.jpg";
import product_desktop from "./assets/image-product-desktop.jpg";
import cart from "./assets/icon-cart.svg";

function App() {
  return (
    <>
      <div className="w-[360px] bg-white rounded-2xl xl:w-[640px] xl:h-fit flex flex-col xl:flex-row max-[375px]:w-[95vw]">
        <img
          src={product_mobile}
          alt=""
          className="rounded-t-2xl block xl:hidden"
        />
        <img
          src={product_desktop}
          alt=""
          className="rounded-l-2xl w-1/2 xl:block hidden"
        />
        <div className="mx-8 my-8 flex flex-col justify-between items-between max-xl:h-[360px]">
          <p className="montserrat text-xs tracking-[6px] text-gray-500">
            PERFUME
          </p>
          <h1 className="fraunces text-3xl xl:text-4xl">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="montserrat text-gray-500 text-[15px]">
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center">
            <h2 className="fraunces text-3xl text-green-500 mr-4">$149.99</h2>
            <p className="montserrat text-sm font-normal text-gray-500 line-through">
              $169.99
            </p>
          </div>
          <button className="flex items-center gap-2 justify-center montserrat text-white text-[14px] w-full py-4 bg-green-500 hover:bg-green-700 rounded-xl">
            <img src={cart} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
