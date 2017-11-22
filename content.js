const references = {
  ':art:': '🎨',
  ':zap:': '⚡️',
  ':fire:': '🔥',
  ':bug:': '🐛',
  ':ambulance:': '🚑',
  ':sparkles:': '✨',
  ':memo:': '📝',
  ':rocket:': '🚀',
  ':lipstick:': '💄',
  ':tada:': '🎉',
  ':white_check_mark:': '✅',
  ':lock:': '🔒',
  ':apple:': '🍎',
  ':penguin:': '🐧',
  ':checkered_flag:': '🏁',
  ':robot:': '🤖',
  ':green_apple:': '🍏',
  ':bookmark:': '🔖',
  ':rotating_light:': '🚨',
  ':construction:': '🚧',
  ':green_heart:': '💚',
  ':arrow_down:': '⬇️',
  ':arrow_up:': '⬆️',
  ':construction_worker:': '👷',
  ':chart_with_upwards_trend:': '📈',
  ':hammer:': '🔨',
  ':heavy_minus_sign:': '➖',
  ':whale:': '🐳',
  ':heavy_plus_sign:': '➕',
  ':wrench:': '🔧',
  ':globe_with_meridians:': '🌐',
  ':pencil2:': '✏️',
  ':hankey:': '💩',
  ':rewind:': '⏪',
  ':twisted_rightwards_arrows:': '🔀',
  ':package:': '📦',
  ':alien:': '👽',
  ':truck:': '🚚',
  ':page_facing_up:': '📄',
  ':boom:': '💥',
  ':bento:': '🍱',
  ':ok_hand:': '👌',
  ':wheelchair:': '♿️',
  ':bulb:': '💡',
  ':beers:': '🍻',
  ':speech_balloon:': '💬',
  ':card_file_box:': '🗃',
  ':loud_sound:': '🔊',
  ':mute:': '🔇',
  ':busts_in_silhouette:': '👥',
  ':children_crossing:': '🚸',
  ':point_up:': '👆',
};

const re = new RegExp(Object.keys(references).join('|'), 'gi');
const replace = string => string.replace(re, match => references[match]);

const replaceInTitle = () => {
  const title = window.document.title;
  document.title = replace(title);
};

const replaceInNodeList = selector => {
  const nodes = document.querySelectorAll(selector);
  if (nodes.length) {
    for (node of nodes) {
      const title = node.innerText;
      node.innerText = replace(title);
    }
  }
};

const replaceEverywhere = () => {
  replaceInTitle();
  replaceInNodeList('.js-issue-title');
  replaceInNodeList('.js-issue-row .js-navigation-open');
  replaceInNodeList('.commit-desc pre');
};

document.addEventListener('DOMContentLoaded', function() {
  replaceEverywhere();

  const bar = document.querySelector('#js-pjax-loader-bar');
  const observer = new MutationObserver(() => replaceEverywhere());
  observer.observe(bar, {
    attributes: true,
  });
});
