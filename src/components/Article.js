import { Container, Grid, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { group } from "../components/ArticleDetails/constants";
import MemberCard from "../components/ArticleDetails/ArticleCards";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  membersContainer: {
    justifyContent: "space-evenly"
  },
  content: {
    textAlign: "center"
  }
}));

const Article = () => {
  const classes = useStyles();

  const getMembers = (group) => {
    return group.map((member) => {
      return <MemberCard {...member} />;
    });
  };

  return (
    <div>
      <Grid container className={classes.membersContainer} spacing={3}>
        <Grid item className={classes.content} xs={12}>
          <Typography variant="h3" component="h2" >
            Team Members
          </Typography>
        </Grid>
        {getMembers(group)}
      </Grid>
    </div>
  );
};

export default Article;
