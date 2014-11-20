#!/usr/bin/env node
var aws = require('aws-sdk');
var Chance = require('chance'),
    chance = new Chance();

var chance_string = chance.string({length: 7, pool: 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'});

var echo_url = console.log('http://' + chance_string + '.gimme.link');
