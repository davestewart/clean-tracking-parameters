# Clean UTM

## Overview

> Cleans common tracking parameters from URL.

The list of parameters (Google, HubSpot, etc) can be found at:

- https://github.com/mpchadwick/tracking-query-params-registry

## Installation

Install via NPM:

```bash
npm i git@github.com:likelylogic/clean-utm.git
```

_Note that upon installation, the package creates a JSON file in the package folder of the latest parameters listed in the above dependency._

## Usage

Use in your project with:

```js
import { cleanUtm } from 'clean-utm'

const url = 'https://example.com/?utm_source=twitter&test=1'
const cleaned = cleanUtm(url) // https://example.com/?test=1
```

## Tests

Tests can be run via:

```bash
npm test
```
