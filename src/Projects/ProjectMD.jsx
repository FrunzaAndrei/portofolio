/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "./Carousel";

const useStyles = makeStyles({
  root: {
    width: "46%",
    minWidth: 300,
    background: "#333",
    color: "white",
    margin:  25,
    flexBasis: 500
  },
  media: {
    height: 270,
    color: "white",
  },
  content:{
      color: "white",
      textAlign: "justify",
      height:200
  }
});

function ProjectMD(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <Slider image={props.project.image} />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.title}
          </Typography>
          {props.project.description.map((item, id) => (
            <Typography
              key={id}
              variant="body2"
              component="p"
            >
              - {item}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.project.github} target="_blank">
          <Button size="small" color="primary">
            Code
          </Button>
        </a>
        <a href={props.project.tryIt} target="_blank">
          <Button size="small" color="primary">
            Try It
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default ProjectMD;
