import Nav from './components/Nav';
import {
  Hero,
  Footer,
  CostumerReviews,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality
} from './sections';

const App = () => (
  <main className="relative">
    <Nav />
    <Hero />
    <PopularProducts />
    <SuperQuality />
    <Services />
    <SpecialOffers />
    <CostumerReviews />
    <Subscribe />
    <Footer />
  </main>
);

export default App;