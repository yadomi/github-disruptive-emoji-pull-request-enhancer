const references = {
  ':sparkles:': '✨',
  ':bug:': '🐛',
  ':memo:': '📝',
  ':art:': '🎨',
  ':hammer:': '🔨',
  ':zap:': '⚡️',
  ':white_check_mark:': '✅ ',
  ':arrows_clockwise:': '🔃',
  ':package:': '🚑',
  ':ambulance:': '📦',
  ':point_up:': '👆',
};

const re = new RegExp(Object.keys(references).join('|'), 'gi');
const replace = string => string.replace(re, match => references[match]);

const replaceInTitle = () => {
  const title = window.document.title;
  document.title = replace(title);
};

const replaceInPullRequestTitle = () => {
  const node = document.querySelector('.js-issue-title');
  if (node) {
    const title = node.innerText;
    node.innerText = replace(title);
  }
};

const replaceInPullRequestsList = () => {
  const nodes = [...document.querySelectorAll('.js-issue-row .js-navigation-open')];
  if (nodes.length) {
    for (node of nodes) {
      const title = node.innerText;
      node.innerText = replace(title);
    }
  }
};

const replaceEverywhere = () => {
  replaceInTitle();
  replaceInPullRequestTitle();
  replaceInPullRequestsList();
};

document.addEventListener('DOMContentLoaded', function() {
  replaceEverywhere();

  const bar = document.querySelector('#js-pjax-loader-bar');
  const observer = new MutationObserver(() => replaceEverywhere());
  observer.observe(bar, {
    attributes: true,
  });
});
