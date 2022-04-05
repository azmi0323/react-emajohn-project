import './App.css';
import Header from './compoments/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './compoments/shop/Shop';
import { Route, Routes } from 'react-router-dom';

function App() {
    return ( 
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Shop></Shop>}></Route>
            </Routes>
        </div>
    );
}

export default App;