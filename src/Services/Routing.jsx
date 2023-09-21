import { HashRouter, Route, Routes } from 'react-router-dom';


import HomePageFood from '../Pages/Food/HomePageFood';
import FoodPage from '../Pages/Food/FoodPage';
import Restaurants from '../Pages/Food/Restaurants';
import Navbar from "../Components/navbar/Navbar"
import ShowResults from '../Pages/Food/ShowResults';
import Map from '../Components/Food/Layer2/Map';
import ProfilePage from '../Pages/Food/ProfilePage';
import Cars from '../Pages/Cars/Cars';
import CarsHome from '../Pages/Cars/carsHome/CarsHome';
import Filter from '../Components/Food/Layer2/Filter';
import CompleteReservation from "../Components/Food/Profile/Reservation/CompleteReservation"
import CarsProfile from '../Pages/Cars/carsProfile/CarsProfile';
import HomePageRealEstate from '../Pages/RealEstate/HomePageRealEstate';


import StepsComp from '../Components/RealEstate/StepsComp';
import CarsInfo from '../Pages/Cars/carsInfo/CarsInfo';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import OrderComp from '../Components/Food/Order/OrdreComp';
import Footer from '../Components/footer/Footer';
import CarsRequests from '../Pages/Cars/carsRequestes/CarsRequests';
import CarsStepers from '../Pages/Cars/carsStepers/CarsStepers';
import LoginPage from "../Pages/Authentication/Login"
import SignUpPage from "../Pages/Authentication/SignUp"
import VerificationCodePage from "../Pages/Authentication/VerificationCode"
import ForgetPasswordComp from "../Pages/Authentication/ForgetPassword"
import Cart from '../Components/Cart/Cart';
import HomeRealEstate from '../Components/RealEstate/steperRealEstate/HomeRealEstate';
import MainPageRealEstate from "../Components/RealEstate/homeRealEstate/MainPageRealEstate"
import RequestsRealEstate from '../Components/RealEstate/homeRealEstate/RequestsRealEstate';
import CartList from '../Components/Cart/Cart';
import RequireAuth from '../Components/RequireAuth';


export default function Routing() {

  const tabsTheme = createTheme({
    component: {
      MuiTab: {
        styleOverrides: {
          root: {
            '&.MuiButtonBase-root': {
              color: "var(--main-color)"
            }
          }
        }
      }
    }
  })

  return (

    <HashRouter>
      {/* http://localhost:3000/#/cars */}
      <ThemeProvider theme={tabsTheme}>
        <Navbar />
      </ThemeProvider>
      <Routes>

        {/*start General navigation */}
        <Route path="/Cart" element={<Cart />} />


        {/*start General navigation */}
        <Route path="/cart" element={<CartList />} />



        {/*start Authentication navigation */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/code" element={<VerificationCodePage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordComp />} />
        {/*start Authentication navigation */}

        {/*start food navigation */}
        <Route path="/" element={<HomePageFood />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/showresults" element={<ShowResults />} />
        <Route path="/map" element={<Map />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/completeReservation" element={<CompleteReservation />} />
        <Route path="/order/:id" element={<OrderComp />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="*" element={<HomePageFood />} />
        {/*end food navigation */}

        {/*start RealEstate navigation */}
        <Route path="/realestate" element={<HomePageRealEstate />} />
        <Route path="/steps" element={<StepsComp />} />
        <Route path="/homerealestate" element={<MainPageRealEstate />} />
        <Route path="/requestsrealestate" element={<RequestsRealEstate />} />
        {/*end food navigation */}

        {/*start cars navigation */}
        <Route path="/cars" element={<RequireAuth><Cars /></RequireAuth>} />
        <Route path="/cars/home" element={<CarsHome />} />
        <Route path="/cars/info" element={<CarsInfo />} />
        <Route path="/cars/request" element={<CarsRequests />} />
        <Route path="/cars/profile/:id" element={<CarsProfile />} />
        <Route path="carsstepers" element={<CarsStepers />} />
        {/*end cars navigation */}
        {/*start cars navigation */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}