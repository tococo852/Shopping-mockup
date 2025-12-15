import Home from "../components/HomePage/HomePage.jsx";
import ProductCatalog from "../components/ProductCatalog/ProductCatalog.jsx";
import ProductInfo from "../components/ProductInfo/ProductInfo.jsx";
import CartCheckout from "../components/CartCheckout/CartCheckout.jsx";
import App from "./App.jsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import { Children } from "react";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    Children: [
      {
        path:'/home', element:<Home/>
      }
    ]
  },
  {
    path:"/product-catalog",
    element: <ProductCatalog/>
  },
  {
    path:"/product-catalog/productId",
    element: <ProductInfo/>
  },
  {
    path:"/card-checkout",
    element: <CartCheckout/>
  }
  
  
];

export default routes;
