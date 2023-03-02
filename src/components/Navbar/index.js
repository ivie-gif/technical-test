import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <div className="navbar">
      <img src="/Images/Logo.svg" alt="icon logo" />
      <h3>ABOUT US</h3>
      <Menu>
        {({ isOpen, Button }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
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
        {({ isOpen, Button }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              ELECTION DATA
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
      <h3>E-BUDDY</h3>
      <h3>VEO PLATFORM</h3>
      <Button className="login-butn">
        LOGIN
        </Button>
        <Button className="signin-butn">
        SIGN UP
        </Button>
    </div>
  );
};

export default Index;
