'use strict';

import { Observable } from 'rxjs/Observable';
import Myo from 'myo';

Myo.onError = error => console.log(error);

Myo.on('connected', function (a) {
    this.vibrate();
    this.streamEMG();
});

const acceleration$ = Observable
    .create(subscriber => {
        Myo.on('accelerometer', data => subscriber.next(data));
    });

acceleration$
    .subscribe(data => {
        const progress = document.querySelector('progress');
        progress.value = data.x * 100;
    });

Myo.connect('org.neurojs.myo');

export default acceleration$;