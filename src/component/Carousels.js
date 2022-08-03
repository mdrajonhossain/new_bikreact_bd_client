import Carousel from 'react-bootstrap/Carousel';
import Offer_slider from './Offer_slider';



const Carousels = () => {








  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className="offer_box">
            <Offer_slider />
            <br /><br />
            <Offer_slider />
          </div>
        </div>
        <div className='col-md-8'>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={require("./01.jpg")} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={require("./02.jpg")} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={require("./03.jpg")} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
