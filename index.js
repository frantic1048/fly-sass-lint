const lint = require('sass-lint')

function LinterError (message) {
  this.name = 'LinterError'
  this.message = message || ''
}

LinterError.prototype = Object.create(Error.prototype)

exports.LinterError = LinterError

module.exports = function plugin () {
  'use strict'
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

      /**
       * if any warning/error in results
       * throw a LinterError to fail the task
       */
      const errorCount = results.reduce(function (sum, r) { return sum + r.errorCount }, 0)
      const warningCount = results.reduce(function (sum, w) { return sum + w.warningCount }, 0)
      if (warningCount > 0 || errorCount > 0) {
        throw new LinterError(errorCount + ' errors and ' + warningCount + ' warnings found.')
      }
    })
  }
}
