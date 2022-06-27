import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useNavigate } from 'react-router-dom';
import { IconBtn, Menu } from './style';

export default function TemporaryDrawer() {
    const navigate = useNavigate()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

const Navigating = (item) => {
    navigate(item)
}


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        {/* {['Asosiy', 'Texnopark', "IT ta'lim", 'Startaplar','Loyihalar','Raqamlashtirish','Infratuzilma'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}

        <ListItem onClick={()=>{Navigating('/')}}  disablePadding>
            <ListItemButton>
              <ListItemText primary={'Asosiy'} />
            </ListItemButton>
        </ListItem>
        <ListItem onClick={()=>{Navigating('/texnopark')}}  disablePadding>
            <ListItemButton>
              <ListItemText primary={'Texnopark'} />
            </ListItemButton>
        </ListItem>
        <ListItem onClick={()=>{Navigating('/ittalim')}}  disablePadding>
            <ListItemButton>
              <ListItemText primary={"IT ta'lim"} />
            </ListItemButton>
        </ListItem>
        <ListItem onClick={()=>{Navigating('/startaplar')}}  disablePadding>
            <ListItemButton>
              <ListItemText primary={'Startaplar'} />
            </ListItemButton>
        </ListItem>
        <ListItem onClick={()=>{Navigating('/raqamlashtirish')}}  disablePadding>
            <ListItemButton>
              <ListItemText primary={'Raqamlashtirish'} />
            </ListItemButton>
        </ListItem>
        <ListItem onClick={()=>{Navigating('/business')}}  disablePadding>
            <ListItemButton>
              <ListItemText primary={'Biznes'} />
            </ListItemButton>
        </ListItem>
        <ListItem onClick={()=>{Navigating('/infratuzilma')}}  disablePadding>
            <ListItemButton>
              <ListItemText primary={'Infratuzilma'} /> 
            </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
        {['Uz', 'Ru', 'Eng'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconBtn onClick={toggleDrawer(anchor, true)}>
                <Menu fontSize='large' color='info'  />
            </IconBtn>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
