import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import { EpisodeProps } from "./types";
import styles from "./styles.module.scss";

const Episode: React.FC<EpisodeProps> = ({ title, elements }) => {
  return (
    <Grid container spacing={3} className={styles.container}>
      <Grid item md={12}>
        <h3 className={styles.title}>{title}</h3>
      </Grid>
      {elements &&
        elements.map((c, i) => (
          <Fragment key={c.id}>
            <Grid item md={12}>
              {c &&
                c.episode.map((t, index) => (
                  <li className={styles.label} key={index}>
                    {t}
                  </li>
                ))}
            </Grid>
          </Fragment>
        ))}
    </Grid>
  );
};
export default Episode;
