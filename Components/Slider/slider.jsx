import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import thirdImg from './../../images/gettyimages-56517131-2048x2048.jpg'
import secImg from './../../images/images.jpg';
import Grid from '@material-ui/core/Grid';
import firstImg from './../../images/istockphoto-874114336-1024x1024.jpg'


const CarouselPage = () => {
  return (
    <Grid justify="center" container>
    <Grid item  xs={12} sm={12} md={12} lg={12}>
    <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={firstImg}
                alt="First slide"
                style={{
                  height:"400px"
                }}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={secImg}
                alt="Second slide"
                style={{
                  height:"400px"
                }}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={thirdImg}
                alt="Third slide"
                style={{
                  height:"400px"
                }}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </Grid>

</Grid>
  );
}

export default CarouselPage;