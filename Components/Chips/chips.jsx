import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
      
      
      <Chip
        label="History Books"
        clickable
        className={classes.chip}
        style={{
          backgroundColor:"gray",
          color:"white",
          fontSize:"18px"
        }}
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Biography Books"
        clickable
        className={classes.chip}
        style={{
          backgroundColor:"gray",
          color:"white",
          fontSize:"18px"

        }}
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Novels Books"
        clickable
        className={classes.chip}
        // onDelete={handleDelete}
        style={{
          backgroundColor:"gray",
          color:"white",
          fontSize:"18px"

        }}
      />
      <Chip
      
        label="Poetry Books"
        // onDelete={handleDelete}
        className={classes.chip}
        style={{
          backgroundColor:"gray",
          color:"white",
          fontSize:"18px"

        }}
      />
      <Chip
        label="Religious Books"
        // onDelete={handleDelete}
        className={classes.chip}
        style={{
          backgroundColor:"gray",
          color:"white",
          fontSize:"18px"

        }}
      />
    </div>
  );
}
