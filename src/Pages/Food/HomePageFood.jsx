import HomeFood from '../../Components/Food/HomeFood/HomeFood';
import { useTranslation } from 'react-i18next';

const HomePageFood = () => {
    const {t} = useTranslation();

    return (
        <HomeFood
            Image={require('../../assets/Img/3.png')}
            linebreak={<br />}
            to="/food"
            first={t("Welcome_to_React")}
            mid="&"
            second="Restaurants" />
    );

}
export default HomePageFood;