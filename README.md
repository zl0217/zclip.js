# ZCLIP.js

A javascript implementation of ZCL over IP.

## Work in progress

Definitely a work in progress. Current tasks are:

- Implement OTA server example

## Open Questions

- Which version of node should we target?

## Installation

```sh
git clone ssh://git@stash.silabs.com/iot_software/zclip.js.git
cd zclip.js
npm install --production
```

## Usage

You can use this library for development or via cli commands for sending quick zclip commands to devices.

### CLI

CLI commands are located in `/cli`

```sh
./cli/zcl discover onOff
./cli/zcl cmd onOff on <ip>
./cli/zcl cmd onOff off <ip>
./cli/zcl cmd levelControl moveToLevel <ip> --level 0  --transitionTime 0
./cli/zcl cmd levelControl moveToLevel <ip> --level 255 --transitionTime 0
./cli/zcl read levelControl <ip>
```

### Development

Examples are located in `/examples`

```sh
var coap = require('coap');
var zcl = require('../.')(coap);

var onOff = new zcl.clusters.OnOff({
  ip: '::1',
  endpoint: 1
});

onOff.toggle();
```

## Supported clusters

- alarms
- applianceControl
- applianceEventsAndAlert
- applianceIdentification
- applianceStatistics
- ballastConfiguration
- basic
- binaryInputBasic
- colorControl
- commissioning
- dehumidificationControl
- deviceTemperatureConfiguration
- diagnostics
- doorLock
- electricalMeasurement
- fanControl
- flowMeasurement
- groups
- iasAce
- iasWd
- iasZone
- identify
- illuminanceLevelSensing
- illuminanceMeasurement
- levelControl
- meterIdentification
- occupancySensing
- onOff
- onOffSwitchConfiguration
- pollControl
- powerConfiguration
- powerProfile
- pressureMeasurement
- pumpConfigurationAndControl
- relativeHumidityMeasurement
- rssiLocation
- scenes
- shadeConfiguration
- temperatureMeasurement
- thermostat
- thermostatUserInterfaceConfiguration
- time
- windowCovering

## Run the tests

```sh
npm test
```

## Support & Contributing

Slack @lee.byrd

