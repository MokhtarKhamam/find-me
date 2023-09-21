import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import CartCard from './CardCart';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import CircularProgress from '@mui/material/CircularProgress';

import i1 from "../../assets/burger/m1.jpg";
import i2 from "../../assets/burger/m10.jpg";
import i3 from "../../assets/burger/m11.jpg";
import i4 from "../../assets/burger/m12.jpg";
import i5 from "../../assets/burger/m13.jpg";
import i6 from "../../assets/burger/m14.jpg";
import i7 from "../../assets/burger/m2.jpg";
import i8 from "../../assets/burger/m5.jpg";
import { APIInstance } from '../../Services/Api';

const products = [
  {
    id: 1,
    name: "Burger",
    price: 8000,
    image: i1,
    counter: 4,
  },
  {
    id: 2,
    name: "Pizza",
    price: 12000,
    image: i2,
    counter: 3,
  },
  {
    id: 3,
    name: "Fries",
    price: 5000,
    image: i3,
    counter: 2,
  },
  {
    id: 4,
    name: "Salad",
    price: 7000,
    image: i4,
    counter: 5,
  },
  {
    id: 5,
    name: "Ice Cream",
    price: 6000,
    image: i5,
    counter: 2,
  },
  {
    id: 6,
    name: "Sandwich",
    price: 9000,
    image: i6,
    counter: 7,
  },
  {
    id: 7,
    name: "Sushi",
    price: 15000,
    image: i7,
    counter: 1,
  },
  {
    id: 8,
    name: "Pasta",
    price: 10000,
    image: i8,
    counter: 1,
  },
];


export default function CartList() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState();
  const [loding, setLoding] = useState(true);


  useEffect(() => {
    //API
    APIInstance.Get("shopping_cart", "29|zeotDpeGruHyHRf0oJTpsBl4cYKIvsRFmRLWyUHX")
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status) {
            setCartItems(res.data.data);
            ChangeSubtotal(res.data.data);
            setLoding(false);
          } else {
            const errorMessage = res.data.message || "Connection Failed";
            setLoding(false);
            alert(errorMessage);
            throw new Error(errorMessage);
          }
        } else {
          alert("Failed to fetch data. Please try again later.");
          setLoding(false);
          throw new Error("Failed to fetch data");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to fetch data");
      });
  }, [])


  const ChangeSubtotal = (list) => {
    let subtotal = list.reduce((acc, list) => {
      const { counter, price } = list;
      const productSubtotal = counter * price;
      return acc + productSubtotal;
    }, 0);
    setSubtotal(subtotal)
  }

  const handelItemRemove = (id) => {
    const updatedProducts = cartItems.filter((cartItems) => cartItems.id !== id);
    setCartItems(updatedProducts);
    ChangeSubtotal(updatedProducts);
  }

  const handleNumDishesChanged = (idItem, numDishesItem, op) => {
    const updatedProducts = cartItems.map((cartItem) => {
      if (cartItem.id === idItem) {
        if (op === "remove") {
          return { ...cartItem, counter: numDishesItem - 1 };
        }
        if (op === "add") {
          return { ...cartItem, counter: numDishesItem + 1 };
        }
      }
      return cartItem;
    });
    setCartItems(updatedProducts);
    ChangeSubtotal(updatedProducts);
  };
  const handlerEmptyCart = () => {
    if (cartItems.length !== 0) {
      const confirmEmpty = window.confirm("هل أنت متأكد من رغبتك في إفراغ السلة؟");
      if (confirmEmpty) {
        setLoding(true);
        setCartItems([]);
        ChangeSubtotal([]);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        APIInstance.Post("Remove_all_shopping_cart", {}, "29|zeotDpeGruHyHRf0oJTpsBl4cYKIvsRFmRLWyUHX")
          .then((res) => {
            if (res.data.status && res.status === 200) {
              setLoding(false);
              alert("done");
              console.log(res);
            }
            else {
              let errorMessage = "Connection Failed";
              if (res.data.message) {
                errorMessage = res.data.message;
              }
              setLoding(false);
              alert(errorMessage);
              throw new Error(errorMessage);
            }
          })
          .catch((error) => {
            // alert("An error occurred while processing your request. Please try again later.");
          });

      }
    } else { alert("السلة بالفعل فارغة !") }
  };

  const handleCheckout = () => {
    // const updatedProducts = cartItems.map((cartItem) => ({
    //   ...cartItem,
    //   id: cartItem.id,
    //   counter: cartItem.counter,
    // }));
    const updatedData = cartItems.map(({ id, counter }) => ({
      id,
      counter,
    }));

    const items = JSON.stringify(updatedData);
    console.log(items);
    if (cartItems.length !== 0) {
      setLoding(true);
      APIInstance.Post("checkout_", `items=${items}`, "29|zeotDpeGruHyHRf0oJTpsBl4cYKIvsRFmRLWyUHX")
        .then((res) => {
          if (res.data.status && res.status === 200) {
            setLoding(false);
            alert("done");
            console.log(res);
          }
          else {
            let errorMessage = "Connection Failed";
            if (res.data.message) {
              errorMessage = res.data.message;
            }
            setLoding(false);
            alert(errorMessage);
            throw new Error(errorMessage);
          }
        })
        .catch((error) => {
          // alert("An error occurred while processing your request. Please try again later.");
        });
    }
    else { alert("السلة فارغة !") }

    // alert("API");
  }


  return (
    <>
      {loding &&
        <div style={{ height: "50vw", padding: "20px", justifyContent: 'center', display: "flex", alignItems: "center" }}>
          <CircularProgress color="success" thickness={7} />
        </div>
      }
      {!loding && <div style={{ padding: "20px" }}>
        <p className='p13' style={{ marginBottom: "30px" }}>Your Shopping Cart</p>
        <Grid container spacing={4} justifyContent="center">
          {cartItems.length !== 0 ? (
            <>
              {cartItems.map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                  <CartCard
                    item={item}
                    handleNumDishesChanged={handleNumDishesChanged}
                    handelItemRemove={handelItemRemove}
                  />
                </Grid>
              ))}
            </>
          ) : (
            <div style={{ height: "60vh" }}>
              <p className='p3'>No Product To Show.</p>
            </div>
          )}
        </Grid>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: "20px" }}>
          <Grid item xs={12} sm={6} md={3} lg={3} >
            <p className='p12'>Subtotal: {subtotal} SP </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} ></Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} >
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{ display: "flex", md: { mt: 2.6 } }} >
            <Button color="inherit"
              onClick={handleCheckout}
              sx={{
                width: "50%",
                backgroundColor: "#F0A40B",
                color: "#fff",
                borderRadius: "20px",
                height: "65px",
              }}>
              Checkout
            </Button>
            <Button
              onClick={handlerEmptyCart}
              color="inherit"
              sx={{
                width: "50%",
                px: 5,
                backgroundColor: "transparent",
                borderRadius: "20px",
                border: "2px solid red",
                height: "65px",
                ml: 1,
                color: '#000'
              }}
            >
              Empty Cart <DeleteOutlineIcon sx={{ ml: 1 }} />
            </Button>
          </Grid>

        </Grid>
      </div>}
    </>
  );
}