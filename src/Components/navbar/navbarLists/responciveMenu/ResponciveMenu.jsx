import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './responcivemenu.css';
import { useRef, useState, useEffect } from 'react';
import {useSelector} from "react-redux"
import { useTranslation } from 'react-i18next';

const ResponciveMenu = () => {
  const {t} = useTranslation();
  const menuRef = useRef(null);
  const [showList, setShowList] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowList(false);
      }
    };
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  const language = useSelector(state => state.language.lng)
  const isRTL = language === 'ar';

  console.log(language)

  return (
    <>
      <IconButton ref={menuRef} onClick={() => setShowList(!showList)} sx={{ position: 'relative', marginLeft: '0' }}>
        <MenuIcon fontSize={isLargeScreen ? 'large' : 'small'} />
        <div className={`nav_list ${showList ? 'active_nav_list' : 'inactive_nav_list'} ${isRTL ? "rtl": ""}`}>
          <NavLink to="/">{t("home")}</NavLink>
          <NavLink to="/food">{t("food")}</NavLink>
          <NavLink to="/cars">{t("cars")}</NavLink>
          <NavLink to="/realestate">{t("real_estate")}</NavLink>
          <NavLink to="services">{t("electronics")}</NavLink>
        </div>
      </IconButton>
    </>
  );
};

export default ResponciveMenu