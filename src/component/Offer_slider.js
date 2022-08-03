import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';



export default function Offer_slider() {
    return (
        <MDBCarousel showControls interval={2000}>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                    <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}