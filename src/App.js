import "./styles.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Address from "./pages/Address";
import RequireAuth from "./components/RequireAuth";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./pages/Login";
import { useAuthContext } from "..";

const getActiveStyle = ({ isActive }) => ({
  margin: "1rem 0",
  fontWeight: isActive ? "600" : "200",
  padding: isActive ? "1rem" : "0.5rem",
  color: isActive ? "red" : ""
});

export default function App() {
  const { isLoggedIn, toggleLoginStatus } = useAuthContext();
  return (
    <div className="App">
      <nav>
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/category">
          Category
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/cart">
          Cart
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/wishlist">
          WishList
        </NavLink>
        <NavLink style={getActiveStyle} to="/address">
          Address
        </NavLink>
        <button onClick={() => toggleLoginStatus()}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/address"
          element={
            <RequireAuth>
              <Address />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
