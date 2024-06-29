import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="padding-x py-10">
      <section className='max-container flex justify-center flex-wrap gap-9'>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </div>
  );
};

export default Services;