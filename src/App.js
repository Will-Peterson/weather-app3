import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

function App() {
  const useStyles = makeStyles({
    paper: {
      backgroundColor: "#ffb04c",
    },
  });

  const classes = useStyles();

  function CardRow() {
    return (
      <React.Fragment>
        <Grid container xs={4} spacing={1}>
          <Paper xs={12}>item</Paper>
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <Paper xs={12}>item</Paper>
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <Paper xs={12}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function HeaderRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} spacing={1}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Container>
      <Paper className="paper-bg">
        <Grid container>
          <Grid container xs={12}>
            <HeaderRow />
          </Grid>
          <Grid container xs={12}>
            <HeaderRow />
          </Grid>
          <Grid container xs={12}>
            <CardRow />
          </Grid>
          <Grid container xs={12}>
            <CardRow />
          </Grid>
          <Grid container xs={12}>
            <CardRow />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );

  // return (

  //   <div style={{}} >

  //   <Grid
  //     style={{borderRadius: '5px', margin: 'auto', marginTop: '50px', width: '600px', background: 'f57f17', alignItems: 'center'}}
  //     spacing={3}
  //     direction='column'
  //     container
  //     item
  //     xs={12}
  //   >
  //     <Paper xs={12} style={{backgroundColor:'ffb04c', padding: '20px', width: '600px'}}>
  //       <Grid item xs={12}>
  //         <Paper elevation={2} xs={12} style={{}} className={classes.paper}>sacramento</Paper>
  //       </Grid>

  //       <Grid item xs={12}>
  //         <Paper elevation={5} xs={12} className={classes.paper}>sacramento</Paper>
  //       </Grid>

  //       <Grid style={{textAlign: 'center', alignItems:'center'}} spacing={3}  container  item  xs={12}>
  //         <Grid item xs={6}>
  //           <Paper elevation={5} style={{color: '#212121',fontWeight: 'bold' , fontSize: '6rem', width: '175px', height: '200px'}}  className={classes.paper}>72°</Paper>
  //         </Grid>

  //         <Grid item xs={6}>
  //           <Paper elevation={5} style={{height: '200px'}} className={classes.paper}>SUN ICON</Paper>
  //         </Grid>
  //       </Grid>

  //       <Grid style={{textAlign: 'center', alignItems:'center'}} spacing={3}  container  item  xs={12}>
  //         <Grid item xs={6}>
  //           <Paper elevation={5} style={{height: '200px'}} className={classes.paper}>NE 3mph</Paper>
  //         </Grid>

  //         <Grid item xs={6}>
  //           <Paper elevation={5} style={{height: '200px'}} className={classes.paper}>Pressure</Paper>
  //         </Grid>
  //       </Grid>
  //   </Paper>
  //   </Grid>
  //   </div>

  // );
}
export default App;
