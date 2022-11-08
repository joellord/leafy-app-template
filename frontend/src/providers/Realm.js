import { createContext, useContext, useState, useEffect } from "react";
import * as Realm from "realm-web";

function RealmProvider(props) {
  let [realmUser, setRealmUser] = useState(null);
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let appId = props.appId;
  let app = new Realm.App({ id: appId });

  const login = async (email, password) => {
    console.log("Getting ready to login")
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
      const user = await app.logIn(credentials);
      setRealmUser(user);
      setIsAuthenticated(true);
      return user;
    } catch (err) {
      console.error("Failed to log in", err);
    }
    return false;
  }

  const logout = async () => {
    await app.currentUser.logOut();
    setIsAuthenticated(false);
    setRealmUser(null);
  }

  let providerState = {
    realmUser,
    login,
    logout,
    isAuthenticated
  }

  return (
    <RealmContext.Provider value={providerState}>
      {props.children}
    </RealmContext.Provider>
  );
}

const RealmContext = createContext({ realmUser: null, isAuthenticated: false });
const useRealm = () => useContext(RealmContext);

export {
  RealmContext,
  useRealm,
  RealmProvider
}
