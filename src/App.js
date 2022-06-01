import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
// import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";
import { Single } from "./pages/single/Single";

// import { List } from "./pages/list/List";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import { List } from "./pages/list/List";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import {useContext} from 'react'
import { DarkModeContext } from "./darkModeContext";

function App() {
 
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ?"app dark" :"app"} >
        <BrowserRouter>
        <Routes>
          <Route index element= {<Home />} /> 
          <Route path="login" element= {<Login/>} />
          <Route path="users">
            <Route index element= {<List/>} />
            <Route path=":userId" element= {<Single/>} />
            <Route path="new" element= {<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="products">
            <Route index element= {<List/>} />
            <Route path="new" element= {<New inputs={productInputs} title="Add New Product"/>}/>
            <Route path=":productId" element= {<Single  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
