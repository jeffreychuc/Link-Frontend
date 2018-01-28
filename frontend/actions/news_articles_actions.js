import * as APIUtil from '../util/news_articles_api_util';

export const START_LOADING_NEWS_ARTICLES = 'START_LOADING_NEWS_ARTICLES';
export const RECEIVE_NEWS_ARTICLES = 'RECEIVE_NEWS_ARTICLES';

export const startLoadingNewsArticles = () => ({
  type: START_LOADING_NEWS_ARTICLES
});

export const receiveNewsArticles = data => ({
  type: RECEIVE_NEWS_ARTICLES,
  data
});

export const fetchNewsArticles = companyName => dispatch => {
  dispatch(startLoadingNewsArticles());
  return APIUtil.fetchNewsArticles(companyName)
    .then(data => (
      dispatch(receiveNewsArticles(data))
    )
  );
};
