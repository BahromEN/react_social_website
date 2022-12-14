import React from "react";
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = (props) => {




    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().sidebar;
                    return <Navbar state={state}/>
                }
            }
        </StoreContext.Consumer>

    );
}

export default NavbarContainer;