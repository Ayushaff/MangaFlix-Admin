import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';

import Header from './Components/Header/Header';
import { Main, Favorites, Manga, Chapter, Signup, Signin, Suggestion } from './Pages';

import SideMenu from './Features/SideMenu/SideMenu';
import SideMain from './Components/SideMain/SideMain';
import Titles from './Pages/Titles/Titles';
import UserPage from './Pages/User/UserPage';
import Library from './Pages/Library/Library';
import MDLists from './Pages/MDLists/MDLists';
import CreateList from './Pages/CreateList/CreateList';
import themeSlice from './Store/Slices/themeSlice';
import { useSelector } from 'react-redux';
import Footer from './Components/Footer/Footer';

const App = () => {
  const theme=useSelector((state)=>state.theme)
  return (
    <div className="App" style={{
      backgroundColor: theme.colors.body,
      
    }}>
      
      <Router>
      <Header />
      <div style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between"
      }}>
      <div className="content__wrap" >
        <SideMenu options={{menuType: 'main'}}>
          <SideMain />
        </SideMenu>
        <Routes>
          <Route path='/' element={<Suggestion />} />
          <Route path='/favorites' element={<Favorites />} />

          <Route path='/singin' element={<Signin />} />
          <Route path='/singup' element={<Signup />} />

        

          <Route path='/titles/*' element={<Titles />} />
          <Route path='/manga/:id' element={<Manga />} />
          <Route path='/user/:id' element={<UserPage />} />
          <Route path='/chapter/*' element={<Chapter />} />

          <Route path='/follows' element={<Library />} />
          <Route path='/lists' element={<MDLists />} />

          <Route path='/create/list' element={<CreateList />} />
          <Route path='/aboutus' element={<CreateList />} />

          
          <Route path='*' element={<Main />} />
        </Routes>
        
      </div>
      <Footer ></Footer>
      </div>
      </Router>
    </div>
  );
}

export default App;
