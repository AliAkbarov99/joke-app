import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home'
import Favourites from '../Pages/Favourites'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/favourites",
        element:<Favourites/>
    }
])