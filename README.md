[![Build Status](https://travis-ci.com/alheimsins/util-check-renovate-config.svg?branch=main)](https://travis-ci.com/alheimsins/util-check-renovate-config)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# util-check-renovate-config

Check renovate config for repos

If a file does not match the template the template is copied to clipboard and the repo is opened in your browser.

# Usage

Make sure the [template](data/template.json) is correct.

Add an local `.env``

```
REPOS_URL=https://api.github.com/orgs/alheimsins/repos
```

Start with collecting the repos.

```
$ npm run save-repos
```

Run the script

```
$ npm start
```

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />
