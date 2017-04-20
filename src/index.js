'use strict';

import Myo from 'myo';

import './experiments/spoken-pose/index';
import './experiments/slider/index';

Myo.on('connected', function () {
    this.vibrate();
    this.streamEMG();
});

Myo.onError = error => console.log(error);

Myo.connect('org.neurojs.myo');