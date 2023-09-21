import img from "../../assets/Img/bglogin.png";
import "./Authentication.css"


const sxStyle = {
  mainRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 75px)',
    width: '100%',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },


  card: {
    backgroundImage: 'linear-gradient(to top, #b58464, #c19979, #cdae90, #dac3a8, #e7d8c2)',
    borderRadius: '20px !important',
    height: '650px',
    width: { xs: "90%", md: "55%" },
    display:"flex",
    alignItems:"center",
    justifyContent:"center", 

  },
  cardContent:{
    width:"100%"

  },

  cardTitle: {
    color: '#7E5D19',
    fontFamily: 'Calligraffitti, cursive',
    fontSize: '58px !important',
    marginBottom: '20px !important',
    textAlign: "center"
  },
  textWhite50: {
    color: '#7E5D19',
  },
  btnOutlineWhite: {
    color: '#ffffff',
    backgroundColor: '#F0A40B',
    borderRadius: '20px',
    marginTop: '40px',
    width: 'fit-content',
    border: 'none',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: "10px",
    '&:hover': {
      backgroundColor: '#000',
      color: '#7E5D19',
      border: 'none'
    },
  },

  socialIcon: {
    color: '#ffffff',
  },
  dontHaveAccount: {
    color: '#fff !important',
    fontWeight: 'bold !important',
  },
  textField: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    border: 'none',
    height: '50px',
    padding: '10px !important',
    width: { xs: "fit-content" }

  },
  text: {
    color: "#7E5D19",
    marginBottom:"20px",


  },
  
};
export default sxStyle;