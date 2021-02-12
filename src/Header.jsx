import React from 'react';
import { AppBar,Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Thus is our header!</Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;