import Card from "../pages/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function Home() {
  const numbers = [
    {
      title: "Search",
      disc:
        "Looking for shopping ? Best offers in your Location ? New Collections in Stores",
      img: "/images/fashopi.jpg"
    },
    {
      title: "Select",
      disc:
        "Browse and select the best store near your that matches your shopping in there",
      img: "/images/fashopi.jpg"
    },
    {
      title: "Shop",
      disc:
        "Go & have a great shopping,rate and review your experience.Thank FASHOPI!",
      img: "/images/fashopi.jpg"
    }
  ];

  return (
    <div>
      <Container>
        <Row>
          {numbers.map(number => (
            <Card data={number} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Home;
