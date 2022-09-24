import React from 'react';
import './App.scss';
import { Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function App() {
  const [showContent, setShowContent] = React.useState(false);
  const [contentToShow, setContentToShow] = React.useState("home");

  //TODO: Add a hover effect for the button
  const StyledButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 25,
    color: "black",
    transition: "all 0.25s",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "transparent",
      boxShadow: "none",
      paddingBottom: "20px",
    }
  });

  return (
    <div className="page-container">
      <div className="header-bar" style={{minHeight: showContent ? "10vh" : "20vh"}}>
        <StyledButton variant="text" disableRipple={true}>Object.Yard</StyledButton>
        <StyledButton variant="text" disableRipple={true}>Info</StyledButton>
      </div>
      <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{width: "80vw"}}>
        <Grid item xs={12}>
          <div className="content-container">
            <StyledButton
              variant="text"
              disableRipple={true}
              onClick={() => {setShowContent(!showContent)}}>loitering with intent</StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="content-container">
            <StyledButton variant="text" disableRipple={true}>phatjazz</StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="content-container">
            <StyledButton variant="text" disableRipple={true}>praying</StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="content-container">
            <StyledButton variant="text" disableRipple={true}>forced auction</StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="content-container">
            <StyledButton variant="text" disableRipple={true}>dew drops</StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="content-container">
            <StyledButton variant="text" disableRipple={true}>you dropped this</StyledButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;