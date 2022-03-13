import NavBar from "./components/NavBar";
import './sass/main.scss';
import Home from "./pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Products from "./pages/Products";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/products/:id" exact component={Product}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/cart" exact component={Cart}/>
            <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
