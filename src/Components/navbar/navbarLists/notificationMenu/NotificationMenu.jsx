import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React, { useEffect, useRef, useState } from 'react'



const NotificationMenu = () => {
  const menuRef = useRef(null)
  const [showList, setShowList] = useState(false)
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));


  useEffect(() => {
    const handleClick = (e) => {
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setShowList(false)
      }
    }
    document.body.addEventListener("click", handleClick)
  }, [])



  return (
    <>
        <IconButton sx={{position : "relative"}}>
            <NotificationsNoneIcon fontSize={isLargeScreen ? "large" : "small"} onClick={() => setShowList(!showList)} ref={menuRef} />
            <ul className={`info_list ${showList ? "active_personal_data" : "inactive_personal_data"}`}>
              <li className='bg-red-500'>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
        </IconButton>
    </>
  )
}

export default NotificationMenu


