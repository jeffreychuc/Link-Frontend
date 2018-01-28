import * as APIUtil from '../util/news_articles_api_util';

export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const fetchCompany = company => dispatch => {
  dispatch(receiveCompany(company));
};
