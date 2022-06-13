import React, { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Divider, Grid } from "@mui/material";
import {
  character_one_Selector,
  character_two_Selector,
} from "redux/characters/selector";
import SectionElement from "pages/home/components/Sections/components/SectionElement/SectionElement";
import Episode from "pages/home/components/Sections/components/Episode/Episode";
import { Character } from "redux/characters/types";
import styles from './styles.module.scss'

const Home = () => {
  const characters_one = useSelector(character_one_Selector);
  const characters_two = useSelector(character_two_Selector);
  const [list_one, setList_one] = useState<Character[]>([]);
  const [list_two, setList_two] = useState<Character[]>([]);
  const [list_three, setList_three] = useState<Character[]>([]);

  const handleListOne = useCallback((character: Character) => {
    setList_one((value) => [...value, character]);
    setList_three((value) => [...value, character]);
  }, []);

  const handleListTwo = useCallback((character: Character) => {
    setList_two((value) => [...value, character]);
    setList_three((value) => [...value, character]);
  }, []);

  return (
    <Fragment>
      <Grid container spacing={3} className={styles.container}>
        <Grid item md={6} xs={12}>
          <SectionElement
            title="Character #1"
            elements={characters_one}
            onClick={handleListOne}
            listEpisode={list_one}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <SectionElement
            title="Character #2"
            elements={characters_two}
            onClick={handleListTwo}
            listEpisode={list_two}
          />
        </Grid>
        <Divider orientation="horizontal" />
      </Grid>
      <Grid container mt={3} spacing={1} className={styles.container}>
        <Grid item md={4} xs={12}>
          <Episode title="Character #1-Only Episodes" elements={list_one} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Episode title="Character #1 #2-Only Episodes" elements={list_three} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Episode title="Character #2-Only Episodes" elements={list_two} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
