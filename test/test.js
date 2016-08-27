import test from 'ava'
import { join } from 'path'

import flySassLint, { LinterError } from '../'

test('throw a linter error', t => {
  const fly = {
    unwrap (f) {
      return f(this.files)
    },
    files: [
      join('fixtures', 'fail.scss')
    ]
  }
  const conf = {
    options: undefined,
    configPath: join('fixtures', '.sass-lint.yml')
  }

  flySassLint.call(fly)
  t.throws(fly.sasslint.bind(fly, conf), LinterError)
})
