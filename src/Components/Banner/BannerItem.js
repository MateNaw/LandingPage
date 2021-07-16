import { Link } from 'react-router-dom';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './banner.css'

export const BannerItem = ({service}) => {
    const {img, header, name} = service;

    return (
        // <a class="" href="#one!"><img src={img} /></a>
        <li className="responsive-image">
            <img clase="responsive-image__image" src={img} alt="sinlik" />
            <div className="caption center-align">
                <h2>{header}</h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only">{name}</h5>
                <Link to="#" className="btn btn-large purple">Dowiedz się więcej</Link>
            </div>
        </li>
    );
};