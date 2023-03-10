import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Styles from './index.module.css'

const Index = () => {
  return (
    <div className={Styles.navbar}>
      <img src="/Images/logo.svg" alt="icon logo" />
      <h3 className={Styles.navText}>ABOUT US</h3>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className={Styles.navDropdown}
            >
              OUR COMMUNITIES
            </MenuButton>
            <MenuList>
              <MenuItem>NONE</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>
                Create a Copy
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className={Styles.navDropdown}
            >
              ELECTION DATA
            </MenuButton>
            <MenuList className={Styles.navChakraMenu}>
              <MenuItem className={Styles.navChakraMenuList} style={{borderBottom: '1px solid #252b46'}}>Election Day Live Updates</MenuItem>
              <MenuItem className={Styles.navChakraMenuList}>
                Post Election Analysis
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <h3 className={Styles.navText}>E-BUDDY</h3>
      <h3 className={Styles.navText}>VEO PLATFORM</h3>
      <Button className={Styles.loginButn}>
        LOGIN
        </Button>
        <Button className={Styles.signinButn}>
        SIGN UP
        </Button>
    </div>
  );
};

export default Index;
