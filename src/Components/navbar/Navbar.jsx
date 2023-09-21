import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  MenuItem,
  IconButton,
  Badge,
  // styled,
  Paper,
  Popper,
  MenuList,
  Button,
} from "@mui/material";
import {styled} from "@mui/styles"
import { itemsArray, subItemsArray } from "./constant.js";
import { useTranslation } from "react-i18next";
import ResponciveMenu from "./navbarLists/responciveMenu/ResponciveMenu";
import ProfileMenu from "./navbarLists/profileMenu/ProfileMenu";
import Notification from "./navbarLists/notificationMenu/NotificationMenu";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageMenu from "./navbarLists/languageMenu/LanguageMenu.jsx";
import { useSelector } from "react-redux";

const StyledTab = styled(Tab)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "& .Mui-selected": {
    transition: "transform 0.2s",
  },
  "& .MuiTabs-indicator": {
    display: "none"
  }
}));






const sxLogin = {
  backgroundColor: "#009f96",
  "&:hover": {
    backgroundColor: "#0bb7ac",
  },
};

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const tabRefs = useRef([]);

  const items = itemsArray(t);
  const subItems = subItemsArray(t);

  const handleMenuOpen = (event, newValue) => {
    const newAnchorEl = tabRefs.current[newValue];
    if (anchorEl === newAnchorEl) {
      return;
    }
    setAnchorEl(newAnchorEl);
    setValue(newValue);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTabClick = (event, newValue, pathName) => {
    setValue(newValue);
    navigate(`${pathName}`);
  };

  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div onMouseLeave={handleMenuClose}>
      <AppBar
        sx={{ position: "sticky", background: "#eeeeee", height: "75px" }}
      >
        <Toolbar
          sx={{
            marginTop: {
              xs: "9.75px",
              md: "0",
              disolay: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Link to="/">
            <img
              src="/assets/find-me-logo.png"
              className={styles.logo}
              alt=""
            />
          </Link>
          {!isMatch && (
            <>
              <Tabs
                value={value}
                onChange={(event, newValue) => handleMenuOpen(event, newValue)}
                // indicatorColor="primary"
                centered
                sx={{ margin: "auto" }}
                TabIndicatorProps={{
                  style: {display: "none"}
                }}
              >
                {items &&
                  items.map((item, index) => (
                    <StyledTab
                      key={index}
                      ref={(el) => (tabRefs.current[index] = el)}
                      label={item.label}
                      icon={<ArrowDropDownIcon />}
                      iconPosition="end"
                      onMouseEnter={(event) => handleMenuOpen(event, index)}
                      style={{ fontWeight: "bold", color: "#006E66" }}
                      onClick={(event) =>
                        handleTabClick(event, index, item.pathName)
                      }
                    />
                  ))}
              </Tabs>
              {items &&
                items.map((item, index) => (
                  <Popper
                    key={index}
                    open={anchorEl === tabRefs.current[index]}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    sx={{ position: "relative", zIndex: "111111" }}
                  >
                    <Paper sx={{ padding: "10px" }}>
                      <MenuList>
                        {subItems &&
                          subItems[index].map((subItem, subIndex) => (
                            <MenuItem key={subIndex}>{subItem}</MenuItem>
                          ))}
                      </MenuList>
                    </Paper>
                  </Popper>
                ))}
            </>
          )}
          <div
            className="flex justify-center items-center"
            style={{ marginLeft: isMatch ? "10px" : "0" }}
          >
            {}
            {!isAuth && (
              <Button
                variant="contained"
                sx={sxLogin}
                onClick={() => navigate("/login")}
                size={isMatch ? "small" : "medium"}
              >
                {t("login")}
              </Button>
            )}
            <IconButton>
              <Badge
                badgeContent={4}
                color="success"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#009f96",
                    color: "white",
                  },
                }}
              >
                <ShoppingCartCheckoutIcon
                  fontSize={isLargeScreen ? "large" : "small"}
                  onClick={() => navigate("/cart")}
                />
              </Badge>
            </IconButton>
            <LanguageMenu />
            <Notification />
            <ProfileMenu />
            {isMatch && (
              <>
                <ResponciveMenu />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
