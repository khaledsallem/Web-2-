import React from 'react';
import Navbar from './NavBar';

const About = () => {
    return (
        <div className='about'>
            <Navbar />
            <h1>A propos du projet</h1>
            <p>Le projet que j'ai développer via une application react en consommant une API gratuite en ligne qui liste tous les pays du monde avec le nombre de population, la capitale du pays et sur quel continent est situé.</p>
            <br />
            <p>j'ai travaillé ce projet en utilisant la librairie react hooks, react-router et du javascript pour mapper l'API et de l'affiché sur la page d'accueil</p>
            <br />
            <p>En utilisant du javascript j'ai pu listé les pays par continent sur la barre en haut</p>
            <p>j'ai aussi utilisé mon propre CSS pour stylisé le contenu sans passer par bootstrap.</p>
        </div>
    );
};

export default About;
