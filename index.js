const lint = require('sass-lint')

module.exports = function plugin () {
  this.sasslint = function sassLint (inputConfig) {
    const config = inputConfig || {}
    const options = config.options || {}
    const configPath = config.configPath
    /**
     * config contains same interface as sassLint.lintFiles()
     * @see: https://github.com/sasstools/sass-lint/blob/develop/index.js#L172-L182
     */
    return this.unwrap(function lintFiles (files) {
      let results = []

      /** collect results for every input file */
      files.forEach(function lintFile (file) {
        results = results.concat(lint.lintFiles(file, options, configPath))
      })

      /** print it out */
      lint.outputResults(results, options, configPath)
    })
  }
}
