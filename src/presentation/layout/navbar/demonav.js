import React from "react";
const menuItems = [
    {
      title: 'Home',
      url: '/',
      submenu: [
        {
          title: 'web design',
          url: 'web-design',
        },
        {
          title: 'web development',
          url: 'web-dev',
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: 'Services',
      url: '/services',
    },
    {
      title: 'About',
      url: '/about',
    },
];

const MenuItems = ({ items }) => {

    const [dropdown, setDropdown] = React.useState(false);

    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                <button
                // ...
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
                >
                {items.title}{" "}
                </button>
                <Dropdown 
                // ...
                dropdown={dropdown} 
                />
                </>
            ) : ( <></> )
            }
        </li>
    //   <li className="menu-items">
    //     {items.submenu ? (
    //       <>
    //         <button type="button" aria-haspopup="menu">
    //           {items.title}{' '}
    //         </button>
    //         <Dropdown submenus={items.submenu} />
    //       </>
    //     ) : (
    //       <a href={items.url}>{items.title}</a>
    //     )}
    //   </li>
    );
};

const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
            <MenuItems items={submenu} key={index} />
        ))}
      </ul>
    );
};

const DemoNav = () => {
    return (
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              return (
                <li className="menu-items" key={index}>
                  <a href={menu.url}>{menu.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
    );
};


  
export default DemoNav;