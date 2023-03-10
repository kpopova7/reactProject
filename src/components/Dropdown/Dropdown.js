import MenuItems from '../Navbar/MenuItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;

  return (
    <ul
      className={`dropdown${
        dropdown ? ' show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;