import test from 'tape';
import tokens from 'twitter-tokens';
import media from './index';

test('should get image and banner', t => {
  t.plan(3);

  media(tokens, 'twitter', (err, {image, banner}) => {
    t.ok(!err);
    t.ok(image.length);
    t.ok(banner.length);
  });
});

test('should get image only', t => {
  t.plan(3);

  media(tokens, 'andrepolischuk', (err, {image, banner}) => {
    t.ok(!err);
    t.ok(image.length);
    t.notOk(banner);
  });
});
