import React from "react";
//  importing mui components
import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Rating,
} from "@mui/material";
//  importing mui icons

//  importing AddMovie component
import AddMovie from "./AddMovie";
//  importing css
import "./NavBar.css";

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = ({
  setfilterName,
  pickMovie,
  setfilterRating,
  setmovieList,
  movieList,
}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#222222", borderRadius: "12px" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <span className="title">Void Hub</span>
            </Typography>
            <AddMovie
              pickMovie={pickMovie}
              setmovieList={setmovieList}
              movieList={movieList}
            />
            <Rating
              defaultValue={5}
              onChange={(filterRating, x) => setfilterRating(x)}
              size="small"
              style={{ margin: "0 10px" }}
            />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Movie"
                inputProps={{ "aria-label": "search" }}
                onChange={(x) => setfilterName(x.target.value)}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
