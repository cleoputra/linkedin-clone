import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("EYO React is real", "Top news - 8898 readers")}
            {newsArticle("Coronavirus: UK updates", "Top news - 798 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 222 readers")}
            {newsArticle("Indonesia Market Stonks", "Markets - 9191 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 12327 readers")}
        </div>
    )
}

export default Widgets
