import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import React, { useEffect, useRef, useState } from 'react';
import FlagIcon from 'react-flag-icon-css';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { languageAction } from '../../../../Store/languageSlice';

const languages = [
  {
    code: 'ar',
    name: 'العربي',
    country_code: 'sy',
    dir: "rtl"
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    dir: "ltr"
  },
];

const LanguageMenu = () => {
  const dispatch = useDispatch();
  const currentLanguageCode = Cookies.get("i18next") || "en"
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const [showList, setShowList] = useState(false);
  const menuRef = useRef(null);

  // const handleChangelanguage = (code) => {
  //   i18next.changeLanguage(code)
  // }


  const handleChangelanguage = (code) => {
    dispatch(languageAction.changeLanguage(code)); // Dispatch the changeLanguage action with the selected language code
    i18next.changeLanguage(code);
  };

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


  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr"
  }, [currentLanguage])

  return (
    <>
      <IconButton sx={{ position: 'relative'}}>
        <LanguageIcon
          fontSize={isLargeScreen ? 'large' : 'small'}
          onClick={() => setShowList(!showList)}
          ref={menuRef}
        />
        <ul className={`info_list ${showList ? 'active_personal_data' : 'inactive_personal_data'}`}>
          {languages.map(({ name, code, country_code }, index) => (
            <li key={index} style={{display: "flex", justifyContent: "space-between", alignItems: "center", }} onClick={() => handleChangelanguage(code)}>
              <span className={`flag-icon flag-icon-${country_code.toLowerCase()}`} style={{margin: "0 10px"}} />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </IconButton>
    </>
  );
};

export default LanguageMenu;