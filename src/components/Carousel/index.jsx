import { Carousel as BootCarousel, Container } from "react-bootstrap";
import Image from "next/image";

const Carousel = () => {
    return (
        <Container>
            <BootCarousel variant="dark">
                <BootCarousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`https://via.placeholder.com/1200x600`}
                        alt="First slide"
                        width="1200px"
                        height="600px"
                    />
                    <BootCarousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </BootCarousel.Caption>
                </BootCarousel.Item>
                <BootCarousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`https://via.placeholder.com/1200x600`}
                        alt="First slide"
                        width="1200px"
                        height="600px"
                    />
                    <BootCarousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </BootCarousel.Caption>
                </BootCarousel.Item>
                <BootCarousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`https://via.placeholder.com/1200x600`}
                        alt="First slide"
                        width="1200px"
                        height="600px"
                    />
                    <BootCarousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </BootCarousel.Caption>
                </BootCarousel.Item>
            </BootCarousel>
        </Container>
    )
}

export default Carousel
