import './App.css';
import {Route, Routes} from 'react-router-dom';
import LayoutDefault from './layouts/LayoutDefault';
import Home from './pages/Home';
import ManageProduct from './pages/ManageProduct';
import Page404 from './pages/Page404';
import Import from './pages/Import';
import Export from './pages/Export';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault/>}>
          <Route path='/' element={<Home/>}/>
          <Route path = 'manage-product' element={<ManageProduct/>}/>
          <Route path = 'import' element={<Import/>}/>
          <Route path = 'export' element={<Export/>}/>
          <Route path = '*' element={<Page404/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
