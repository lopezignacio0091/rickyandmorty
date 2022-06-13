import React, { Fragment, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { loadingSelector } from "../../redux/characters/selector";
import SkeletonProgress from "../../components/layouts/progress/SkeletonProgress";
import { getCharactersAction } from "redux/characters/action";
import Sections from "./components/Sections/Sections";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(getCharactersAction());
  }, [dispatch]);

  if (loading) return <SkeletonProgress />;

  return (
    <Fragment>
      <Grid container spacing={1}>
           <Sections/>
      </Grid>
    </Fragment>
  );
};

export default Home;
