import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { BannerItem } from "./BannerItem";
import { servicesData } from "../Services/servicesData";

export const BannerList = () => {
  return (
    <ul className="slides">
      {servicesData.map((service) => (
        <BannerItem service={service} />
      ))}
    </ul>
  );
};
