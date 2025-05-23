import React, { useState } from "react";
import AllRoutes from "./allroutes/AllRoutes";
import { useNavigate } from "react-router-dom";
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import AllProductsData from "./components/Allproducts/allProductsData";
import toast, { Toaster } from "react-hot-toast";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";

function App() {
  // pulling data from data files & storing it in variables here
  const { productItems } = FlashDealsData;
  const { shopItems } = ShopData;
  const { allProductsData } = AllProductsData;
  const navigate = useNavigate();

  // using useState hooks to change and store items in  the cart here
  const [cartItems, setCartItems] = useState([]);

  // This is a function to add items in the cart it takes the product and checks within the cart to see if there's already added in cart
  // if it already has it it increases the quantity by 1 with each click, if it doesn't exist in cart it adds it to the cart
  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item
        )
      );
      toast.success("Quantidade de itens aumentada");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Item adicionado ao carrinho");
    }
  };
  // This is a function to delete items from the cart, it takes the product and checks within the cart to see if it is already in cart
  // if it has the item it decreases the quantity by 1 with each click, if it has less than 1 number of item it removes entirely from the cart
  const deleteFromCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    // if (productExists.qty === 1) {
    //   setCartItems(cartItems.filter((item) => item.id !== product.id));
    //   toast.success("Item removed from cart");
    // }
    if (productExists.qty === 1) {
      const shouldRemove = window.confirm(
        "Tem certeza de que deseja remover este item do carrinho?"
      );

      if (shouldRemove) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success("Item removido do carrinho");
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        )
      );
      toast.success("Quantidade de itens diminuída");
    }
  };
  // This function is used for the checkout button it takes cartItems as input and if the length of items in it is 0 it alerts add something to cart first
  const checkOut = (cartItems) => {
    // if (cartItems.length <= 0) {
    //   toast.error("Add items in cart to checkout");
    // } else {
    //   const confirmOrder = window.confirm(
    //     "Are you sure you want to order all these products ?"
    //   );

    //   if (confirmOrder) {
    //     setCartItems(cartItems.map((item) => item));
    //     toast.success("Order placed, Thanks for shopping with us");
    //     // but if it has items in it thn it shows a toast saying thanks for shopping with us
    //     for (let i = 0; i < cartItems.length; i++) {
    //       cartItems.splice(0, cartItems.length);
    //     }
    //   }
    // }

    const loggedIn = true;

    if (loggedIn) {
      if (cartItems.length <= 0) {
        toast.error("Adicione um item ao carrinho para finalizar a compra");
      } else {
        const confirmOrder = window.confirm(
          "Tem certeza de que deseja pedir todos esses produtos?"
        );

        if (confirmOrder) {
          // Clear the cart by setting it to a new array or an empty array
          setCartItems([]);
          toast.success("Pedido feito, obrigado!!");
        }
      }
    } else {
      toast("Você deve fazer login primeiro!", {
        icon: "🤯",
      });
      navigate("/login", { replace: true });
    }
  };

  // This function removes an item from the cart entirely, filtering out the values which doesn't have the same id as those clicked
  const removeFromCart = (product) => {
    const shouldRemove = window.confirm(
      "Tem certeza de que deseja remover este item do carrinho?"
    );

    if (shouldRemove) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      toast.success("Item removido do carrinho");
    }
  };

  return (
    // All the functions are in App.jsx but we have to call these in other components as well so sending all these functions and datas as props to child elements so we can use them there
    <>
      <Toaster />
      <AllRoutes
        removeFromCart={removeFromCart}
        productItems={productItems}
        cartItems={cartItems}
        addToCart={addToCart}
        shopItems={shopItems}
        deleteFromCart={deleteFromCart}
        checkOut={checkOut}
        allProductsData={allProductsData}
      />
    </>
  );
}

export default App;
