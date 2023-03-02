import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Styles from './index.module.css'

const Index = () => {
  return (
 
        <div className={Styles.mainDiv}>
    <div className={Styles.flexText}>
        <h3>Presidential Race</h3>
    </div>
    <div>
    <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton
          isActive={isOpen}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          className={Styles.chakraButton}
        >
          Election Data
        </MenuButton>
        <MenuList className={Styles.chakraMenu}>
          <MenuItem className={Styles.chakraMenuList}>Pre-Election</MenuItem>
          
          <MenuItem className={Styles.chakraMenuList}>
            Election Day Live Updates
          </MenuItem>
        
          <MenuItem className={Styles.chakraMenuList}>
            Post-Election Analysis
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
    </div>
    <div>
    <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton
          isActive={isOpen}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          className={Styles.chakraButton}
        >
          Governorship
        </MenuButton>
        <MenuList className={Styles.chakraMenu}>
          <MenuItem className={Styles.chakraMenuList}>Presidential</MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            Gubernatorial
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            Senate
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            House of Representatives
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
    </div>
    <div>
    <Menu className={Styles.classsssssss}>
    {({ isOpen }) => (
      <>
        <MenuButton
          isActive={isOpen}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          className={Styles.chakraButton}
        >
          2023
        </MenuButton>
        <MenuList className={Styles.chakraMenu}>
          <MenuItem className={Styles.chakraMenuList}>1995</MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1991
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1987
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1983
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1991
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1979
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1975
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1967
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1963
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}>
            1959
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
    </div>
  </div>
  
  )
}

export default Index