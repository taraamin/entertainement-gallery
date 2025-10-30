import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EntertainmentCard from './components/EntertainmentCard';

const cards = [
  {
    title: 'Espresso',
    image: '/images/1.png',
    description: 'A bold, velvety espresso shot with rich, nuttty notes and a lingering, bittersweet finish. Topped with luxurious crema.',
    link: 'https://no.espressohouse.com/menu/varme-drikker/espresso',
  },
  {
    title: 'Cappuccino',
    image: '/images/2.png',
    description: 'A creamy cappuccino with a layer of frothed milk, balancing the rich espresso’s boldness with a smooth sweetness.',
    link: 'https://no.espressohouse.com/menu/varme-drikker/cappuccino',
  },
  {
    title: 'Latte',
    image: '/images/3.png',
    description: 'Smooth and comforting, this latte pairs rich espresso with steamed milk for a subtly sweet sip.',
    link: 'https://no.espressohouse.com/menu/varme-drikker/caffe-latte',
  },
  {
    title: 'Pumpkin Spice Latte',
    image: '/images/4.png',
    description: 'A warm, comforting pumpkin spice latte, where rich espresso meets creamy milk and a fragrant blend of autumn spices.',
    link: 'https://no.espressohouse.com/menu/varme-drikker/pumpkin-latte',
  },
  {
    title: 'Moccaccino',
    image: '/images/5.png',
    description: 'A decadent moccachino blending rich espresso with silky chocolate and steamed milk, topped with a light dusting of cocoa.',
    link: 'https://no.espressohouse.com/menu/varme-drikker/moccaccino',
  },
  {
    title: 'Americano',
    image: '/images/6.png',
    description: 'A classic Americano with bold espresso gently mellowed by hot water, offering a clean and rich coffee flavor.',
    link: 'https://no.espressohouse.com/menu/varme-drikker/americano',
  },
];

function App() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Entertainment Gallery</h1>
      <Row>
        {cards.map((card, idx) => (
          <Col key={idx} xs={12} md={6} lg={4}>
            <EntertainmentCard {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

