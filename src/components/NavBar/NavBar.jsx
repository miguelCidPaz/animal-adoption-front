import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import TuneIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
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

export default function SearchAppBar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();
  
  async function searchPetByName(event) {
    if (event.keycode === 13) {
      if (searchInput.lenght > 0) {
        const pet = await axios.get(`${process.env.REACT_APP_API_URL}pets?name=${searchInput}`);
        console.log(pet.data.id)
        //navigate(`/pets/${pet.data.id}/details`)
      }
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar className="nav">
          {/* filter menu*/}
          {
            ((window.location.pathname === '/') && <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
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
  );
}
