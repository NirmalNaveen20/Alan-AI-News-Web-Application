import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards.js';
import useStyles from './styles.js';

const alanKey = 'fe04b6dff564d71cb8e629e20856f8482e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ( { command, articles } ) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])

    return (
        <div className={classes.body}>
        <div>
            <div className={classes.logoContainer}>
                <img src="https://ai-news-project.s3.amazonaws.com/alan.png" className={classes.alanLogo} alt="ai news logo" />
            </div>
            <NewsCards articles={newsArticles} />
        </div>
        </div>
    );
}

export default App;
