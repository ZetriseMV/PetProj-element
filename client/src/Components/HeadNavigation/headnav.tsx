import React,{useState,useEffect, FC} from 'react'
import classes from './headNav.module.css'
import  logo  from '../../Utils/images/logo.svg2.svg'

export const HeadNavigation: FC = (): JSX.Element => {
    return (
      <div className={classes.headNav}>
          <div className={classes.Navigate_panel}>
              <div className={classes.image}>
                  <img src={logo} alt='logo'/>
              </div>
          </div>
      </div>
    );
};
