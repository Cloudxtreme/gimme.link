#!/usr/bin/env node
var aws = require('aws-sdk');
var Chance = require('chance'),
    chance = new Chance();

// AWS Credential Config
aws.config.loadFromPath('./config.json');

var route53 = new aws.route53(); // instantiate Route53 API client

var chance_string = chance.string({length: 7, pool: 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'}); // Random String Generator for CNAMEs

//var echo_url = console.log('http://' + chance_string + '.gimme.link');

var params = {
	ChangeBatch: {
		Changes: [
			{
				Action: 'CREATE',
				ResourceRecordSet: {
					Name: chance_string,
					Type: 'CNAME',
					TTL: 300
				}
		],
		}
	}
	HostedZoneId: 'ZONEGOESHERE'
};


route53.changeResourceRecordSets(params, function(err, data) {
	if (err) console.log(err, err.stack); // Something gwaan get mashup.
	else		console.log(data);			  // Yay it worked!!
}
