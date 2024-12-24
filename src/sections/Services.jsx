import {services} from '../constants';
import ServiceCard from '../components/ServiceCard';
const Services = () => {
  return (
    <section className="max-container justify-center items-center flex flex-wrap gap-9">
      {services.map((service,index)=>(
        <ServiceCard 
          key={service.label}
          {...service}
        />
      ))}
    </section>
  )
}

export default Services