import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import { BannerItem } from './BannerItem';
import { servicesData } from '../Services/servicesData';
import './banner.css'

export const BannerList = () => {
  return (
    <ul className='slides banner-position' >
      {servicesData.map((service) => (
        <BannerItem key={service.id.toString()} service={service} />
      ))}
    </ul>
  );
};
