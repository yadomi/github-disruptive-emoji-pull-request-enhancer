[![GitHub Release](https://img.shields.io/github/release/yadomi/github-disruptive-emoji-pull-request-enhancer.svg?style=flat-square)](https://github.com/yadomi/github-disruptive-emoji-pull-request-enhancer/releases/latest)
![Github Downloads](https://img.shields.io/github/downloads/yadomi/github-disruptive-emoji-pull-request-enhancer/total.svg?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)
---

GitHub Disruptive Emoji Pull Request Enhancer
===

<img src="assets/icon-128.png" width="128" height="128" align="right" hspace="12" />

Simple yet powerful Chrome extension that replace commonly used emoji on Github.com with actual utf-8 characater in pull request title.

Also works on issues title and release page.

Installation
---

### With the crx

1. Download latest `.crx` on the [release page](https://github.com/yadomi/github-disruptive-emoji-pull-request-enhancer/releases/latest)
2. Drag the `.crx` file in the `chrome://extensions` page.

### From source

Use `make` to create a new `.crx` package from the current source. 
The variable `CHROME_BIN` must be set to package the extension

```
    git clone https://github.com/yadomi/github-disruptive-emoji-pull-request-enhancer.git
    cd github-disruptive-emoji-pull-request-enhancer
    CHROME_BIN=chrome make
```
