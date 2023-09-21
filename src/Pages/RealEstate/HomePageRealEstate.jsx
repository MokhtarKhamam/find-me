import HomeRealEstate from '../../Components/RealEstate/steperRealEstate/HomeRealEstate';
const HomePageRealEstate = () => {
    return (
        <HomeRealEstate
            Image={require('../../assets/Img/realestatecover.png')}
            to="/steps"
            first="Buy, Sell"
            mid="&amp;"
            second={"Rent"}
            linebreak={<br />}
            secondLine={"Real-Estate"}
        />
    );

}
export default HomePageRealEstate;


