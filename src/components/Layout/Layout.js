import React from "react";
import { Menu } from "./Navbar.js";

const Layout = ({ children }) => {
    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    );
};

export default Layout;
