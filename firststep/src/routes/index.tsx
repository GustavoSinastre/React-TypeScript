import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />

                <Route path='*' element={<Navigate to={'/home'}/>} />
            </Routes>
        </BrowserRouter>
    );
};