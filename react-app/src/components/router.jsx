import AboutMe from "./AboutMe";
import FetchData from "./FetchData";
import NotFoundPage from "./NotFoundPage";
import TopCoins from "./TopCoins";
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <FetchData />,
    },
    {
        path: '/about',
        element: <AboutMe />,
    },
    {
        path: '/topcoins',
        element: <TopCoins />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    }
])
export default router;