import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Commits from "./components/Commits";
import Commit from "./components/Commit";
import 'antd/dist/antd.css';
import {Menu} from "antd";
import { HomeOutlined, SettingOutlined  } from '@ant-design/icons';
function App() {
  const [menuKey, setMenuKey] = useState('home');
  const handleMenuClick = e => {
    setMenuKey(e.key);
  };
  return (
      <Router>
        <div>
          <Menu onClick={handleMenuClick} selectedKeys={[menuKey]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="commits" icon={<SettingOutlined />}>
              <Link to="/commits">Commit List</Link>
            </Menu.Item>
          </Menu>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/commits">
              <Commits />
            </Route>
            <Route
                path="/commit"
                render={(props) => <Commit {...props}/>}
            />
          </Switch>
        </div>
      </Router>
  );
}
export default App;
