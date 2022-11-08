import React from "react";
import Header from "../components/Header";
import { useRealm } from "../providers/Realm";
import { useNavigate } from "react-router-dom";
import { H3, Body } from "@leafygreen-ui/typography";
import Button from "@leafygreen-ui/button";
import { css } from "@leafygreen-ui/emotion";

export default function Login () {
  const { logout } = useRealm();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
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

  return  (
    <React.Fragment>
      <section className={headerStyle}>
        <Header title="Get outta here!"></Header>
      </section>
      <section className={mainStyle}>
        <H3>Please logout</H3>
        <Body>You can use the button below to close a session.</Body>

        <Button variant="primary" onClick={() => handleLogout()}>Log Out</Button>

      </section>
    </React.Fragment>
  )
}