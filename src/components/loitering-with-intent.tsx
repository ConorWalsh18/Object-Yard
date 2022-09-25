import React from 'react';
import '../App.scss';
import { Grid, Box, Typography } from '@mui/material';
import { Constants } from '../constants';

function ImageGallery({images}: {images: any}) {
  // let images: any = null;

  // switch(imageFolder) {
  //   case Constants.LWI:
  //     images = importAll(require.context('../assets/lwi', false, /\.(png|jpe?g|svg)$/));
  //     break;
  //   case Constants.PJ:
  //     images = importAll(require.context('../assets/pj', false, /\.(png|jpe?g|svg)$/));
  //     break;
  //   case Constants.PR:
  //     images = importAll(require.context('../assets/pr', false, /\.(png|jpe?g|svg)$/));
  //     break;
  //   case Constants.FA:
  //     images = importAll(require.context('../assets/fa', false, /\.(png|jpe?g|svg)$/));
  //     break;
  //   case Constants.DD:
  //     images = importAll(require.context('../assets/dd', false, /\.(png|jpe?g|svg)$/));
  //     break;            
  //   case Constants.YDT:
  //     images = importAll(require.context('../assets/ydt', false, /\.(png|jpe?g|svg)$/));
  //     break;
  // }  

  const imageElements = [<React.Fragment></React.Fragment>];
  Object.keys(images).forEach((x: React.Key | null | undefined) => {
    imageElements.push(
      <Grid item xs={12} key={x}>
        <Box
          component="img"
          className="image"
          src={images[x ?? ""]}
        />
      </Grid>
    )
  });

  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{width: "80vw"}}>
      {imageElements}
      <Grid item xs={12} sx={{paddingTop: "50px !important"}}>
        <Typography sx={{fontSize: "25px", fontFamily: "VioletSansRegular"}}>2022 Object Yard</Typography>
      </Grid>
    </Grid>
  );
}

function importAll(r: any) {
  let images: { [key: string]: any } = {};
  r.keys().map((item: string, index: any) => {
    images[item.replace('./','')] = r(item);
  });
  return images;
}

export default ImageGallery;