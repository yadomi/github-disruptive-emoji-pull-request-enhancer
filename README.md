GitHub Disruptive Emoji Pull Request Enhancer
===

Simple yet powerful Chrome extension that replace commonly used emoji on Github.com with actual utf-8 characater in pull request title.

Installation
---

### With the crx

1. Download latest `.crx` on the [release page](https://github.com/yadomi/github-disruptive-emoji-pull-request-enhancer/releases/tag/v0.1.0)
2. Drag the `.crx` file in the `chrome://extensions` page.

### From source

Use `make` to create a new `.crx` package from the current source. 
The variable `CHROME_BIN` must be set to package the extension

```
    git clone https://github.com/yadomi/github-disruptive-emoji-pull-request-enhancer.git
    cd github-disruptive-emoji-pull-request-enhancer
    CHROME_BIN=chrome make
```