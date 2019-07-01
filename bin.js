#!/usr/bin/env node

const ls = require('./')
const { EOL } = require('os')

ls(function (err, ips) {
  if (err) throw err
  console.log(ips.join(EOL))
})
