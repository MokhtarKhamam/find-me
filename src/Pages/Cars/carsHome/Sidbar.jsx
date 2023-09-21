import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./carsHome.module.css";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useNavigate } from "react-router-dom";

const Sidbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cars/request");
  };

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <Stack spacing={2} p={2} alignItems="center" sx={{ textAlign: "center" }}>
      <Box>
        <div style={{ position: "relative" }}>
          <input placeholder="Search" className={styles.search_bar} />
          <IconButton
            sx={{ position: "absolute", right: "0", borderRadius: "50%" }}
          >
            <PageviewIcon sx={{ borderRadius: "50%" }} />
          </IconButton>
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: 300,
            backgroundColor: "#fff",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Category" variant="filled" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: 300,
            backgroundColor: "#fff",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="filled" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: 300,
            backgroundColor: "#fff",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Gouvernorat" variant="filled" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: 300,
            backgroundColor: "#fff",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
          renderInput={(params) => (
            <TextField {...params} label="City" variant="filled" />
          )}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#A7A7A7",
            "&:hover": { bgcolor: "#fff", color: "#A7A7A7" },
          }}
        >
          Submit
        </Button>
        <hr style={{ marginTop: "20px" }} />
      </Box>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          Latest News
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
          brouse cars price include duties and taxes
        </Typography>
        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
        <Stack spacing={4}>
          <Button
          onClick={() => navigate("/carsstepers")}
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#A7A7A7",
              "&:hover": { bgcolor: "#fff", color: "#A7A7A7" },
            }}
          >
            Submit Your Request
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#A7A7A7",
              "&:hover": { bgcolor: "#fff", color: "#A7A7A7" },
            }}
            onClick={handleNavigate}
          >
            Requests
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Sidbar;
