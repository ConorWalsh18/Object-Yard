import React from 'react';
import './App.scss';
import { Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Constants } from './constants';
import ImageGallery from './components/loitering-with-intent';

function App() {
  const [content, setContent] = React.useState(Constants.HOME);
  const [previousContent, setPreviousContent] = React.useState("")

  const lwiImages = importAll(require.context('./assets/lwi', false, /\.(png|jpe?g|svg)$/));
  const pjImages = importAll(require.context('./assets/pj', false, /\.(png|jpe?g|svg)$/));
  const prIimages = importAll(require.context('./assets/pr', false, /\.(png|jpe?g|svg)$/));
  const faIimages = importAll(require.context('./assets/fa', false, /\.(png|jpe?g|svg)$/));
  const ddIimages = importAll(require.context('./assets/dd', false, /\.(png|jpe?g|svg)$/));
  const ydtIimages = importAll(require.context('./assets/ydt', false, /\.(png|jpe?g|svg)$/));

  //TODO: Add a hover effect for the button
  const StyledButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 25,
    fontFamily: "VioletSansRegular",
    color: "black",
    transition: "all 0.25s",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "transparent",
      boxShadow: "none",
      paddingBottom: "20px",
    },
    ":disabled": {
      color: "black"
    }
  });

  const onHomeClick = () => {    
    // let selectedElements = document.getElementsByName(content);
    // selectedElements.forEach(x => {
    //   x.classList.remove("show");
    // });

    let contentCopy = content;
    let selectedElement = document.getElementById(contentCopy);
    let selectedElement2 = document.getElementById(contentCopy + "2");
    selectedElement?.classList.remove("show");
    selectedElement2?.classList.remove("show");
    // selectedElement?.classList.add("hide");
    
    setContent(Constants.HOME);
    selectedElement?.classList.add("show");
    selectedElement2?.classList.add("show");
  }

  return (
    <div className="page-container">
      <div className="header-bar" style={{minHeight: content == Constants.HOME ? "20vh" : "10vh"}}>
        <StyledButton variant="text" disableRipple={true} onClick={() => {onHomeClick()}}>Object.Yard</StyledButton>
        <StyledButton variant="text" disableRipple={true}>Info</StyledButton>
      </div>
      <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{width: "80vw"}}>
        <Grid item xs={12} className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.LOITERING_WITH_INTENT)].join(' ')}>
          <div className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.LOITERING_WITH_INTENT)].join(' ')}>
            <StyledButton variant="text" disableRipple={true} onClick={() => {setContent(Constants.LOITERING_WITH_INTENT)}} disabled={content != Constants.HOME}>
              loitering with intent
            </StyledButton>
            {/* <div className={content == Constants.LOITERING_WITH_INTENT ? "image-container-show" : "image-container-hide"}> */}
              {content == Constants.LOITERING_WITH_INTENT && <ImageGallery images={lwiImages}></ImageGallery>}
            {/* </div> */}
          </div>
        </Grid>
        <Grid item xs={12} className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.PHAT_JAZZ)].join(' ')}>
          <div className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.PHAT_JAZZ)].join(' ')}>
            <StyledButton variant="text" disableRipple={true} onClick={() => {setContent(Constants.PHAT_JAZZ)}} disabled={content != Constants.HOME}>
              phatjazz
            </StyledButton>
            {content == Constants.PHAT_JAZZ && <ImageGallery images={pjImages}></ImageGallery>}
          </div>
        </Grid>
        <Grid item xs={12} className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.PRAYING)].join(' ')}>
          <div className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.PRAYING)].join(' ')}>
            <StyledButton variant="text" disableRipple={true} onClick={() => {setContent(Constants.PRAYING)}} disabled={content != Constants.HOME}>
              praying
            </StyledButton>
            {content == Constants.PRAYING && <ImageGallery images={prIimages}></ImageGallery>}
          </div>
        </Grid>
        <Grid item xs={12} id="forcedAuction" className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.FORCED_AUCTION)].join(' ')}>
          <div id="forcedAuction2" className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.FORCED_AUCTION)].join(' ')}>
            <StyledButton variant="text" disableRipple={true} onClick={() => {setContent(Constants.FORCED_AUCTION)}} disabled={content != Constants.HOME}>
              forced auction
            </StyledButton>
            {content == Constants.FORCED_AUCTION && <ImageGallery images={faIimages}></ImageGallery>}
          </div>
        </Grid>
        <Grid item xs={12} className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.DEW_DROPS)].join(' ')}>
          <div className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.DEW_DROPS)].join(' ')}>
            <StyledButton variant="text" disableRipple={true} onClick={() => {setContent(Constants.DEW_DROPS)}} disabled={content != Constants.HOME}>
              dew drops
            </StyledButton>
            {content == Constants.DEW_DROPS && <ImageGallery images={ddIimages}></ImageGallery>}
          </div>
        </Grid>
        <Grid item xs={12} className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.YOU_DROPPED_THIS)].join(' ')}>
          <div className={[getContentContainerClasses(content, previousContent, setPreviousContent, Constants.YOU_DROPPED_THIS)].join(' ')}>
            <StyledButton variant="text" disableRipple={true} onClick={() => {setContent(Constants.YOU_DROPPED_THIS)}} disabled={content != Constants.HOME}>
              you dropped this
            </StyledButton>
            {content == Constants.YOU_DROPPED_THIS && <ImageGallery images={ydtIimages}></ImageGallery>}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function importAll(r: any) {
  let images: { [key: string]: any } = {};
  r.keys().map((item: string, index: any) => {
    images[item.replace('./','')] = r(item);
  });
  return images;
}

function getContentContainerClasses(currentContent: string, previousContent: string, setPreviousContent: any, contentToCheck: string) {
  if (currentContent == Constants.HOME && previousContent == contentToCheck) {    
    setPreviousContent("");
    return "content-container hide";
  }

  return currentContent != Constants.HOME && currentContent != contentToCheck ? "content-container hide" : "content-container show";
}

export default App;