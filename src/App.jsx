
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  
  return (
    <Provider store={store}>
    <div className='bg-green-100 h-screen place-items-center grid'>
     <Navbar/>
    <div className=' bg-white w-full max-w-3xl shadow-lg rounded-lg p-6'>
    <Header/>
    <hr className='mt-4' />
    <TodoList/>
    <hr className='mt-4' />

     <Footer/>
    </div>

    </div>
    </Provider>
  );
};

export default App;