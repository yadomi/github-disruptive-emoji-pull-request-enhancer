GitHub Disruptive Emoiji Pull Request Enhancer
===

Simple yet powerful Chrome extension that replace commonly used emoji on Github.com with actual utf-8 characater in pull request title.

Installation
---

### With the crx

Drag the `extension.crx` file in the `chrome://extensions` page.

### From source

Use `make` to create a new `.crx` package from the current source. 
The variable `CHROME_BIN` must be set to package the extension

```
    git clone https://github.com/yadomi/github-disruptive-emoiji-pull-request-enhancer.git
    cd github-disruptive-emoiji-pull-request-enhancer
    CHROME_BIN=chrome make
```