import { Grid } from "@mui/material";
import React, { Fragment, useCallback } from "react";
import CardElement from "../../../../../../components/layouts/Card/Card";
import { SectionProps } from "./types";
import styles from "./styles.module.scss";

const SectionElement: React.FC<SectionProps> = ({
  title,
  elements,
  onClick,
  listEpisode,
}) => {
  const handleClick = useCallback(
    (id: number) => {
      const character = elements.find((x) => x.id === id);
      onClick(character);
    },
    [elements, onClick]
  );

  const handleDisabled = useCallback(
    (id: number) => listEpisode.find((x) => x.id === id),
    [listEpisode]
  );

  return (
    <Grid container className={styles.container}>
      <Grid item md={12} justifyContent="center">
        <h1 className={styles.title}>{title}</h1>
      </Grid>
      <Grid container spacing={1} mt={2}>
        {elements &&
          elements.map((c) => (
            <Fragment key={c.id}>
              <Grid item md={6} xs={12}>
                <CardElement
                  image={c.image}
                  title={c.name}
                  status={c.status}
                  species={c.species}
                  id={c.id}
                  onClick={handleClick}
                  labelButton="Add Episode .."
                  disabled={handleDisabled(c.id)}
                />
              </Grid>
            </Fragment>
          ))}
      </Grid>
    </Grid>
  );
};
export default SectionElement;
