import './App.css';
import Header from './compoments/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './compoments/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './compoments/order/Order';


function App() {
    return ( 
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Shop></Shop>}></Route>
                <Route path='/home' element={<Shop></Shop>}></Route>
                <Route path='/order' element={<Order></Order>}></Route>
                <Route path='/orderReview' element={<Order></Order>}></Route>
            </Routes>
        </div>
    );
}

export default App;