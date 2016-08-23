import test from 'ava'
import { readFileSync } from 'fs'

import flySassLint from '../'

const fly = {
  filter (name, plugin) {
    this[name] = plugin
  }
}

flyPug.call(fly)

test('lint it !', t => {
  const config = {
    options: {},
    configPath: ''
  }
  t.deepEqual(fly.sasslint(config), {
    // TODO: let's assert
  })
})
