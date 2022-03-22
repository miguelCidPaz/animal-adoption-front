import * as React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import axios from "axios";
import { petsContext } from "../App";

import { styled, useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import TuneIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MultiRangeSlider from "./MultiRangeSlider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SearchAppBar() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();
  const [values, setValues] = useState([20, 80]);
  const [open, setOpen] = React.useState(false);
  const { pets, setPets } = useContext(petsContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  async function searchPetByName(event) {
    if (event.keyCode === 13) {
      if (searchInput) {
        const pet = await axios.get(`${process.env.REACT_APP_API_URL}pets?name=${searchInput}`);
        navigate(`/pets/${pet.data[0].id}/details`);
      }
    }
  }

  /**
   * Recibimos las condiciones, trabajamos sobre memoryPets y devolvemos un arr con las pets filtradas
   * @param {Conditions} arr 
   */
  const filterPets = (arr) => {

  }

  const onSubmit = (resultForm) => {
    const test = Object.entries(resultForm).filter(e => e[1] === true);
    const weight = ["weight", values];
    test.push(weight);
    console.log(test)
    console.log(pets)

    /* await axios({
      method: 'post',
      url:'',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        newConditions: newConditions
      }
    })-- */
  }

  const drawerWidth = 240;

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-out">
              <div>Species</div>
              <input type="checkbox"  {
                ...register("Dog",
                  {
                    value: true
                  })} /><label> Dog</label>
              <br />
              <input type="checkbox"  {
                ...register("Cat",
                  {
                    value: true
                  })} /><label> Cat</label>
              <br />

              <br />
              <div>Size</div>
              <input type="checkbox"  {
                ...register("Small",
                  {
                    value: true
                  })} /><label> Small</label>
              <br />
              <input type="checkbox"  {
                ...register("Average",
                  {
                    value: true
                  })} /><label> Average</label>
              <br />
              <input type="checkbox"  {
                ...register("Big",
                  {
                    value: true
                  })} /><label> Big</label>
              <br />
              <MultiRangeSlider value={values} setValue={setValues} />
              <input type="submit" method="get" value="Filter" />
            </div>

          </form>
        </List>
      </Drawer>


      <Box sx={{ flexGrow: 1, backgroundColor: '#34b3d3' }}>
        <AppBar color="primary" position="static" sx={{ backgroundColor: '#34b3d3' }}>
          <Toolbar className="nav" sx={{ backgroundColor: '#34b3d3' }}>
            {/* filter menu*/}
            {
              ((window.location.pathname === '/') && <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{ mr: 2 }}
              >
                <TuneIcon />
              </IconButton>
              )
            }
            {/* web name-logo */}

            <Typography
              className="logo"
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              onClick={() => navigate('/')}
            >
              Happy Adoption
            </Typography>
            {/* search button*/}
            {
              ((window.location.pathname === '/') && <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onChange={(event) => setSearchInput(event.target.value)}
                  onKeyDown={(event) => searchPetByName(event)}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              )
            }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
