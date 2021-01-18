import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';

import logo from '../../Asset/PngItem_2525779.png'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './style';

export default function NavBar({totalItem}) {
 const classes=useStyles()
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography varient="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="planet" height="25px" className={classes.image}/>Commerce.js

                    </Typography>
 {/* For space */}
              <div className={classes.grow}/>

              <div className={classes.button}>
                  <IconButton aria-label="show Cart item" color="inherit">
                      <Badge badgeContent={totalItem} color="primary" >
                     <ShoppingCart/>
                      </Badge>
                  </IconButton>
              </div>
        
                </Toolbar>

            </AppBar>
        </div>
    )
}
