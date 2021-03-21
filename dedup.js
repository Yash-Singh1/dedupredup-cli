#!/usr/bin/env node

const { dedup } = require('node-dedupredup');
const meow = require('meow');
require('./update-notifier')();

const cli = meow(`
Usage
  $ dedup [<dir>]

Examples
  $ dedup
  $ dedup dir/needed/
`);

dedup(cli.input ? cli.input[0] : '.');
