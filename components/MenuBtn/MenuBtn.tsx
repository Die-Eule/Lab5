import React from "react";
import "./menuBtn.css"

interface WrapperProps {
    children: React.ReactNode;
  }

const MenuBtn = ({children}: WrapperProps) => {
    return (
        <div className="menu-button">
            {children}
        </div>
    );
};

export default MenuBtn;