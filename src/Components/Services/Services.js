import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { ServiceCard } from "./ServiceCard";
import { servicesData } from "./servicesData";

export default function Services() {
  return (
    <section id="services" className="section section-service scrollspy">
      <div className="container">
        <div className="row">
          <h4 className="center purple-text darken-1">Nasze usługi</h4>
          {servicesData.map((service) => (
            <ServiceCard key={service.id.toString()} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
