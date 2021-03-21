#!/usr/bin/env node

const { redup } = require('node-dedupredup');
const meow = require('meow');
require('./update-notifier')();

const cli = meow(`
Usage
  $ redup [<dir>]

Examples
  $ redup
  $ redup dir/needed/
`);

redup(cli.input ? cli.input[0] : '.');
