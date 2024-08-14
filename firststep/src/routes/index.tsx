import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login } from '../pages';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/signin' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Navigate to={'/signin'}/>} />
                
            </Routes>
        </BrowserRouter>
    );
};