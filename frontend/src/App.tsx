import "./styles.css";
import "./fonts.css";
import LeafygreenProvider from '@leafygreen-ui/leafygreen-provider';
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import settings from "./config";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import { RealmProvider, useRealm } from "./providers/Realm";

function PrivateOutlet() {
  let { isAuthenticated } = useRealm();
  return isAuthenticated ? <Outlet /> : <div>You need to login to see this page</div>;
}

function App() {
  return (
    <RealmProvider appId={settings.REALM.appId}>
      <LeafygreenProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Layout />}>
              <Route path="app" element={<PrivateOutlet />}>
                <Route path="page1" element={<Page1 />} />
              </Route>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </LeafygreenProvider>
    </RealmProvider>
  );
}

export default App;