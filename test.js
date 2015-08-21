import test from 'tape';
import tokens from 'twitter-tokens';
import twitterProfileBanner from './index';

test('should get image and banner', t => {
  t.plan(3);

  twitterProfileBanner(tokens, 'twitter', (err, {image, banner}) => {
    t.ok(!err);
    t.ok(image.length);
    t.ok(banner.length);
  });
});

test('should get image only', t => {
  t.plan(3);

  twitterProfileBanner(tokens, 'andrepolischuk', (err, {image, banner}) => {
    t.ok(!err);
    t.ok(image.length);
    t.notOk(banner);
  });
});