import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import "./profileMenu.css"
import { useRef } from 'react';
import { useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {authAction} from "../../../../Store/auth"
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';




const ProfileMenu = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const menuRef = useRef(null)
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const [showList, setShowList] = useState(false)



	useEffect(() => {
		const handleClick = (e) => {
			if(menuRef.current && !menuRef.current.contains(e.target)){
				setShowList(false)
			}
		}
		document.body.addEventListener("click", handleClick)
	}, [])

	const handleLogout = () => {
		dispatch(authAction.logout())
	}


	//redux state 
	const language = useSelector((state) => state.language.lng);

	const isRTL = language === 'ar';

  return (
    <>
        <IconButton ref={menuRef} onClick={() => setShowList(!showList)} sx={{position : "relative"}}>
			<PersonIcon fontSize={isLargeScreen ? "large" : "small"} />
					<ul className={`info_list ${showList ? 'active_personal_data' : 'inactive_personal_data'} ${isRTL ? 'rtl' : ''}`}>
					<p style={{margin : "0"}}>{t("sined_in_as")}</p>
					<h6>{t("name")}</h6>
					<hr />
					<li><p className='p-0'>{t("my_data")}</p></li>
					<li><p className='p-0'>{t("my_profile")}</p></li>
					<li onClick={handleLogout}><p className='p-0'>{t("log_out")}</p></li>
			</ul>
        </IconButton>
    </>
  )
}

export default ProfileMenu

