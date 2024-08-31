import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AllProducts from "./Components/AllProducts/AllProducts";
import Login from "./Components/Login/Login";
import Signup from "./Pages/Signup/Signup";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseAuth/FirebaseAuth";
import SingleProducts from "./Pages/SingleProduct/SingleProducts";
import Contact from "./Components/Contact/Contact";
import Aboutus from "./Components/AboutUs/Aboutus";

function App() {
  const [cart, setCart] = useState([]);
  const [promoCode, SetPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [invalid, setInvalid] = useState("Invalid promo code");
  const [userName, setUserName] = useState("");

  const AddToCart = (products) => {
    const isProductExist = cart.find((findItem) => findItem.id === products.id);
    // console.log(products);

    if (isProductExist) {
      const updateCart = cart.map((item) =>
        item.id === products.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updateCart);
      toast.success("Product is add successfully");
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
  };

  const handleInc = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(decQuantity);
  };

  const handleDec = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(incQuantity);
  };

  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id);
    setCart(updateByFilter);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price* cartReduceItem.quantity;
    }, 0);
    return Math.floor(totalPrice - discount);
  };


  const applyPromoCode = () => {
    if(promoCode === "DISCOUNT10"){
      setDiscount(getTotalPrice()*0.1);
      SetPromoCode("");
    } else{
      // alert("Invalid promo code")
      setInvalid(invalid)
    }
  }

  useEffect(()=>{
      auth.onAuthStateChanged((user) => {
        if(user) {
          setUserName(user.displayName);
        } else {
          setUserName("");
        }
      })
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} userName={userName} />
        <Routes>
          <Route path="/" element={<Home AddToCart={AddToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleDec={handleDec}
                handleInc={handleInc}
                handleRemove={handleRemove}
                getTotalPrice={getTotalPrice}
                applyPromoCode={applyPromoCode}
                promoCode={promoCode}
                SetPromoCode={SetPromoCode}
                invalid={invalid}
              />
            }
          />
          <Route
            path="/allproducts"
            element={<AllProducts AddToCart={AddToCart} />}
          />
          <Route path="/singleproduct/:productId" element={<SingleProducts AddToCart={AddToCart}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
        </Routes>
        <Toaster/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
