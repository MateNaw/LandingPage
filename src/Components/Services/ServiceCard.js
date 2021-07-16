import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export const ServiceCard = ({ service }) => {
  const { id, img, name, shortInfo, longInfo } = service;

  return (
    <div className='col s12 m6'>
      <div className='card'>
        <div className='card-image'>
          <img src={img} alt={`service ${id}`} />
          <span className='card-title'>{name}</span>
          <Link className='btn-floating activator halfway-fab waves-effect waves-light purple'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
        <div className='card-content'>
          <p>{shortInfo}</p>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>
            {name}
            <i className='material-icons right'>close</i>
          </span>
          <p>{longInfo}</p>
        </div>
      </div>
    </div>
  );
};
