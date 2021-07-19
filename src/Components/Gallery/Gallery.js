import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import { galleryData } from './galleryData'

const Photo = ({ img, alt }) => {
    return (
        <div className='col s3 m3 10' >
            <img className='materialboxed responsive-img  card' src={img} alt={alt}  />
        </div>
    );
};

export default function Gallery() {
    return (
      <section id='gallery' className='section  scrollspy'>
         <div className='container'>
            <h4 className='center purple-text darken-1'>Galeria</h4>
            <div className='row'>
                {galleryData.map(photo => (
                    <Photo key={photo.id} img={photo.img} alt={photo.alt} />
                ))}
            </div>
         </div>
      </section>
    );
  };