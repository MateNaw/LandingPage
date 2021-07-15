import { Link } from 'react-router-dom';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

export const BannerItem = ({service}) => {
    const {id, img, serviceHeader, serviceName} = service;

    return (
        // <a class="" href="#one!"><img src={img} /></a>
        <li >
            <img src={img} alt="sinlik"/>
            <div className="caption center-align">
                <h2>{serviceHeader}</h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only">{serviceName}</h5>
                <Link to="#" className="btn btn-large purple">Dowiedz się więcej</Link>
            </div>
        </li>
    );
};