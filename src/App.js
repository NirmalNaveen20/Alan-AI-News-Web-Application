import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import logo from './images/alan.png';
import NewsCards from './components/NewsCards/NewsCards.js';
import useStyles from './styles.js';

const alanKey = 'fe04b6dff564d71cb8e629e20856f8482e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ( { command, articles, number } ) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if(command === 'open') {
                    window.open(articles[number].url, '_blank');
                }
            }
        })
    }, [])

    return (
        <div className={classes.body}>
        <div>
            <div className={classes.logoContainer}>
                <img src={logo} className={classes.alanLogo} alt="ai news logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle = {activeArticle} />
        </div>
        </div>
    );
}

export default App;
