import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import { BannerList } from './BannerList';
import './banner.css';

export default function Banner() {
  return (
    <section id='home' className='home' >
       <div className='slider banner-position fullscreen'>
            <BannerList />
        </div>
    </section>
  );
};