import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './about.css';

export default function About() {
    return (
        <section id='about' className='section grey lighten-4 center fit-scroll'>
            <div className='container'>
                <div className='row'>
                    <h4 className='center purple-text darken-1'>O nas</h4>
                </div>
                <div className='row'>
                    <span className='center brown-text darken-1'>Firma AS Serwis powstała w 2002 roku i od początku zwiazana była z szeroko rozumianym transportem ciężkim.</span>
                </div>
                <div className='row'>
                    <span className='center brown-text darken-1'>Zwiazana była z takimi firmami jak Opoltrans, Europart, Martex. Wspołpracuje z fimami Wesob, Mototrade.cz, Autocentrum.cz.</span>
                </div>   
                <div className='row'>
                    <span className='center brown-text darken-1'>W zakresie napraw sprzętu budowlanego i drogowego wspołpracuje z firmą BVM s.r.o Wirtgen group service.</span>
                </div> 
                <div className='row'>
                    <span className='center brown-text darken-1'>Zajmujemy się naprawą elektroniki i instalacji elektrycznych w maszynach drogowych, kruszarkach,koparko-ladowarkach, gdzie znajdziemy napędy takich firm jak cummins, duetz, scania, caterpilar, Volvo i wiele innych.</span>
                </div> 
            </div>
        </section>
    );
};