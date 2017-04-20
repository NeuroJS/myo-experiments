'use strict';

import { Observable } from 'rxjs/Observable';
import Myo from 'myo';

const acceleration$ = Observable
    .create(subscriber => {
        Myo.on('accelerometer', data => subscriber.next(data));
    });

acceleration$
    .subscribe(data => {
        const progress = document.querySelector('progress');
        if (progress) {
            progress.value = - data.x * 100;
        }
    });

export default acceleration$;