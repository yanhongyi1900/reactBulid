import React from "react";
import { NavLink } from "react-router-dom";
import { navList } from "../../router/router_list";

function Menu(props) {
  const { hiddenMenu } = props;
  return (
    <div className="menu">
      <nav>
        {navList.map((item, index) => {
          return (
            <NavLink
              className="menu_item"
              activeClassName="selected"
              key={index}
              to={item.to}
              exact
              onClick={hiddenMenu}
            >
              <i className={item.icon} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default Menu;
