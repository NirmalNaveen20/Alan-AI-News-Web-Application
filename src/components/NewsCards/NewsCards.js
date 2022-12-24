import React from 'react';
//provide mobile friendly animations
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard.js';

const NewsCards = ( {articles } ) => {
  return (
    <Grow in>
        <Grid container alignItems=''>

        </Grid>

        {articles.map((article, i) => (
            <NewsCard />
        ))}


    </Grow>
  )
}

export default NewsCards;