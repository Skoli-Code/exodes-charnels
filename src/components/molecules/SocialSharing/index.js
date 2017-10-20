import React from 'react';
import FacebookProvider, { Share } from 'react-facebook';
import {
  FACEBOOK_APP_ID,
  FACEBOOK_SDK_VERSION,
  TWEET_INTENT_URL,
  TWEET_TEXT,
  TWEET_HASHTAGS,
} from 'constants/social';

import FacebookIcon from 'components/icons/Facebook';
import TwitterIcon from 'components/icons/Twitter';

import './styles.css';

const getCurrentHref = () => window.location.href;

const twitterHref = () => {
  const url = getCurrentHref();
  return `${TWEET_INTENT_URL}?text=${
    encodeURIComponent(TWEET_TEXT)
  }&url=${
    encodeURIComponent(url)
  }&hashtags=${TWEET_HASHTAGS}`;
};

const openModal = (href, w, h) => {
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const wstyle = `
  height=${h},width=${w},top=${(wh / 2) - (h / 2)},left=${(ww / 2) - (w / 2)},
    toolbar=0,location=0
  `;
  window.open(href, 'socialshare', wstyle);
};

const shareTwitter = () => {
  const href = twitterHref();
  openModal(href, 600, 320);
};

const SocialSharing = () => (
  <div className='social-sharing'>
    <FacebookProvider
      appId={FACEBOOK_APP_ID}
      version={FACEBOOK_SDK_VERSION}
    >
      <Share>
        <FacebookIcon width={25} height={25} />
      </Share>
    </FacebookProvider>
    <TwitterIcon onClick={shareTwitter} width={25} height={25} />
  </div>
);

export default SocialSharing;
