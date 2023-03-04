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
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>Pre-Election</MenuItem>
          
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
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
          Presidential
        </MenuButton>
        <MenuList className={Styles.chakraMenu}>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>Presidential</MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}} >
            Gubernatorial
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
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
        <MenuList className={Styles.chakraMenu} >
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>1995</MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
            1991
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
            1987
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
            1983
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
            1991
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList}style={{borderBottom: '1px solid #252b46'}}>
            1979
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
            1975
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
            1967
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
            1963
          </MenuItem>
          <MenuItem className={Styles.chakraMenuList} style={{borderBottom: '1px solid #252b46'}}>
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