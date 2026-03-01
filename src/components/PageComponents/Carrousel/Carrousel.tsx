import Carousel from "react-bootstrap/Carousel";
import Imagen1 from "../../../assets/images/sanguche.jpg";
import Imagen2 from "../../../assets/images/hamburger2.jpeg";
import Imagen3 from "../../../assets/images/pizza.jpg";

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={Imagen1}
          alt="hamburger"
          style={{
            maxHeight: "26rem",
            maxWidth: "100",
            width: "100vw",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Imagen2}
          alt="hamburger"
          style={{
            maxHeight: "26rem",
            maxWidth: "100",
            width: "100vw",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Imagen3}
          alt="hamburger"
          style={{
            maxHeight: "26rem",
            maxWidth: "100",
            width: "100vw",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
