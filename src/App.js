import { RouterProvider } from 'react-router-dom';
import {router} from './Routes/Index'
import { Provider } from 'react-redux'
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
