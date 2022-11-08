import React from "react";
import {Link} from "react-router-dom";
import { useRealm } from "../providers/Realm";

export default function Home () {
  let { isAuthenticated } = useRealm();
  return  (
    <React.Fragment>
      Welcome!<br/><br/>
      {!isAuthenticated &&
        <Link to="/login">Login</Link>
      }
    </React.Fragment>
  )
}