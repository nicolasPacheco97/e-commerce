import CartList from "../views/CartList";
import HomePage from "../views/HomePage";

export const routes = [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/cart-list",
      element: <CartList />
    },
]