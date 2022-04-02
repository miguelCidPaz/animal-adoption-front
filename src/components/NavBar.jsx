import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
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
import KeyIcon from '@mui/icons-material/Key';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
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


export default function SearchAppBar(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const theme = useTheme();
  const navigate = useNavigate();
  const { pets, setPets } = useContext(petsContext);
  const [viewSearch, setViewSearch] = useState(false);
  const [searchInput, setSearchInput] = useState();
  const [values, setValues] = useState([20, 80]);
  const [open, setOpen] = React.useState(false);

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

        if (pet.data.length < 2) {
          navigate(`/pets/${pet.data[0].id}/details`);
        } else {

          setPets(pet.data);
          navigate(`/`);
        }

      }
    }
  }

  const onSubmit = async (resultForm) => {
    const test = Object.entries(resultForm).filter(e => e[1] === true);
    const weight = ["weight", values];
    test.push(weight);

    await axios.post(`${process.env.REACT_APP_API_URL}pets/filter`,
      { newConditions: test }).then((res) => {
        setPets([...res.data])
      })
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

              <p>Species</p>

              <div className="filter-slot">
                <input id="checkbox1" className="slider" type="checkbox"  {
                  ...register("Dog",
                    {
                      value: true
                    })} /><label htmlFor="checkbox1"> Dog</label>
              </div>

              <div className="filter-slot">
                <input id="checkbox2" className="slider" type="checkbox"  {
                  ...register("Cat",
                    {
                      value: true
                    })} /><label htmlFor="checkbox2"> Cat</label>
              </div>

              <p>Size</p>

              <div className="filter-slot">
                <input id="checkbox3" className="slider" type="checkbox"  {
                  ...register("Small",
                    {
                      value: true
                    })} /><label htmlFor="checkbox3"> Small</label>
              </div>

              <div className="filter-slot">
                <input id="checkbox4" className="slider" type="checkbox"  {
                  ...register("Medium",
                    {
                      value: true
                    })} /><label htmlFor="checkbox4"> Medium</label>
              </div>

              <div className="filter-slot">
                <input id="checkbox5" className="slider" type="checkbox"  {
                  ...register("Large",
                    {
                      value: true
                    })} /><label htmlFor="checkbox5"> Large</label>
              </div>

              <p className="filter-title">Weight</p>
              <MultiRangeSlider value={values} setValue={setValues} />
              <input className="submit-button" type="submit" method="get" value="Filter" />
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
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              onClick={async () => {
                /* 🖕 it already works suckers 🖕 */
                const apiURL = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiURL}pets/`);
                setPets(response.data);
                navigate('/')
              }}
            >
              Happy Adoption
            </Typography>

            {/* {window.location.pathname === '/' ? <button className="navbar--button-top" onClick={(e) => props.setViewLogin(!props.viewLogin)} ><KeyIcon className="register--icon" /></button> : null} */}
            {window.location.pathname === '/' ? <Link className="register--icon" to={'/register-pet'}><PetsIcon /></Link> : null}
            {window.location.pathname === '/' ? <Link className="register--icon" to={'/register-shelter'}><HomeIcon /></Link> : null}
            {window.location.pathname === '/' ? viewSearch ?
              <Search>
                <button className="navbar--button-top button--level-search" onClick={(e) => setViewSearch(!viewSearch)} ><SearchIcon className="register--icon" /></button>
                <StyledInputBase
                  onChange={(event) => setSearchInput(event.target.value)}
                  onKeyDown={(event) => searchPetByName(event)}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              : <button className="navbar--button-top" onClick={(e) => setViewSearch(!viewSearch)} ><SearchIcon className="register--icon" /></button> : null}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
