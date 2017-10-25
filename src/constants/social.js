const getCurrentHref = () => window.location.href;

const TWEET_INTENT_URL = 'https://twitter.com/intent/tweet';
const TWEET_TEXT = 'De la #migration à la #prostitution : 3 parcours reconstitués pour comprendre. Par @science_societe #Etsionenparlait';
// hashtags must be separated by commas.
const TWEET_HASHTAGS = '';
const TWEET_VIA_ACCOUNT = '';
// you can add parameters for twitter sharing.
// See https://dev.twitter.com/web/tweet-button/web-intent
// for the parameters list.
const TWEET_PARAMS = {
  via: TWEET_VIA_ACCOUNT,
  text: TWEET_TEXT,
  url: 'http://exodes-charnels.surge.sh/',
  // Mettre à jour avec l'url définitive : http://exodes_charnels.universite-lyon.fr
  hashtags: TWEET_HASHTAGS,
};

const noop = () => null;

export const getTwitterShareHREF = () => {
  const TWEET_INTENT_URL_PARAMS = Object.keys(TWEET_PARAMS).map(key => {
    const param = TWEET_PARAMS[key];
    let value = param;
    // if it's a function we get the value by calling it.
    if(typeof param === typeof noop){
      value = param();
    }
    if(value.length > 0){
      return `${key}=${encodeURIComponent(value)}`;
    } else {
      return null;
    }
  }).filter(param => param && param.length);
  return `${TWEET_INTENT_URL}?${TWEET_INTENT_URL_PARAMS.join('&')}`;
}



export const FACEBOOK_APP_ID = '1666596323384667';
export const FACEBOOK_SDK_VERSION = 'v2.10';
