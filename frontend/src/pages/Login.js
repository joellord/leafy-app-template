import React, { useState } from "react";
import Header from "../components/Header";
import { useRealm } from "../providers/Realm";
import { useNavigate } from "react-router-dom";
import { H3, Body } from "@leafygreen-ui/typography";
import Button from "@leafygreen-ui/button";
import TextInput from '@leafygreen-ui/text-input';
import Banner from "@leafygreen-ui/banner";
import { css } from "@leafygreen-ui/emotion";

export default function Login () {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState(""); 
  let [showInvalid, setShowInvalid] = useState(false);

  const { login } = useRealm();
  const navigate = useNavigate();

  const handleLogin = async () => {
    let user = await login(username, password);
    if (user) {
      setShowInvalid(false);
      navigate("/");
    } else {
      setShowInvalid(true);
    }
  }

  const headerStyle = css`
    grid-area: header;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  `

  const mainStyle = css`
    padding: 24px;
    align-items: center;
  `

  const form = css`
    max-width: 200px;
  `

  return  (
    <React.Fragment>
      <section className={headerStyle}>
        <Header title="Welcome!"></Header>
      </section>
      <section className={mainStyle}>
        <H3>Identify Yourself</H3>
        <Body>
        
          <form className={form}>
            <TextInput
              label="Username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <TextInput
              label="Password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
            /><br/>
            <Banner variant="danger" style={{display: (showInvalid ? "inherit" : "none")}}>
              Invalid username and password
            </Banner>
            <br/>
            <Button variant="primary" onClick={() => handleLogin()}>Log In</Button>

          </form>
        </Body>


      </section>
    </React.Fragment>
  )
}