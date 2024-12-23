import {    Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  Subscribe,
  Footer,
  CustomerReviews } from './sections';
import Nav from './components/Nav';


const  App = () => (

    <main className="relative">
    <Nav />
    <section className="x1:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8 ">
      <Footer />
    </section>
  </main>
)

export default App
