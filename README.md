# fly-sass-lint

[![fly badge][fly-bgp]][fly-bg] [![npm badge][npm-bgp]][npm-bg] ![download badge][dl-bgp] [![travisbadge][travis-bgp]][travis-bg] [![license badge][license-bgp]][license-bg]

[fly-bgp]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square&maxAge=2592000
[fly-bg]: https://github.com/flyjs/fly

[npm-bgp]: https://img.shields.io/npm/v/fly-sass-lint.svg?style=flat-square
[npm-bg]: https://www.npmjs.org/package/fly-sass-lint

[dl-bgp]: https://img.shields.io/npm/dm/fly-sass-lint.svg?style=flat-square

[travis-bgp]: https://img.shields.io/travis/frantic1048/fly-sass-lint.svg?style=flat-square
[travis-bg]: https://travis-ci.org/frantic1048/fly-sass-lint

[license-bgp]: https://img.shields.io/github/license/frantic1048/fly-sass-lint.svg?style=flat-square
[license-bg]: https://spdx.org/licenses/WTFPL.html

[Sass-lint][] plugin for *[Fly][]* .

[Fly]: https://github.com/flyjs/fly
[Sass-lint]: https://github.com/sasstools/sass-lint

## Install

This plugin requires [Fly][] .

```bash
npm i -D fly-sass-lint
```

## Usage

By default, `fly-sass-lint` will use .sass-lint.yml file in your project directory as sass-lint config.

Async/Await flavored:

```js
export async function lintSass () {
  await this
    .source('src/**/*.{scss,sass}')
    .sasslint()
    /* or pass your options to sass-lint
     * .sasslint({
     *   options: {},
     *   configPath: 'PATH/TO/MY/AWESOME/RULE'
     * })
     */
}
```

Generator function flavored:

```js
exports.lintSass = function* () {
  yield this
    .source('src/**/*.{scss,sass}')
    .sasslint()
    /* or pass your options to sass-lint
     * .sasslint({
     *   options: {},
     *   configPath: 'PATH/TO/MY/AWESOME/RULE'
     * })
     */
}
```

Check out Sass-lint [documentation][] for available options.

[documentation]: https://github.com/sasstools/sass-lint#options

## License

[Do What The F*ck You Want To Public License](https://spdx.org/licenses/WTFPL)
