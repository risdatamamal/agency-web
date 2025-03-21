import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import useMenus from "../../data/use-menus";

const NavMenus = () => {
  const menus = useMenus();

  return (
    <ul>
      {menus
        .sort((a, b) => a.id - b.id)
        .filter((menu) => menu.is_active)
        .map((menu, i) => (
          <li
            key={i}
            className={`${menu.has_dropdown ? "has-dropdown" : ""}
      ${menu.mega_menu ? "has-mega-menu" : ""}`}
          >
            <Link href={menu.link} legacyBehavior>
              <a>
                {menu.title}{" "}
                {menu.has_dropdown && <i className="fal fa-angle-down"></i>}
              </a>
            </Link>
            {menu.has_dropdown && (
              <ul className="submenu text-start">
                {/* {menu.sub_menus.map((sub_m, i) => (
                <li key={i}>
                  <Link href={sub_m.link} legacyBehavior>
                    <a>{sub_m.title}</a>
                  </Link>
                </li>
              ))} */}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
};

export default NavMenus;
