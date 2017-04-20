'use strict';

import { Observable } from 'rxjs/Observable';
import Myo from 'myo';

Myo.onError = error => console.log(error);

Myo.on('connected', function (a) {
    this.vibrate();
    this.streamEMG();
});

const pose$ = Observable.create(subscriber => {
    Myo.on('pose', poseName => subscriber.next(poseName));
});

const speak = (text) => {
    const synth = window.speechSynthesis;
    const speech = new SpeechSynthesisUtterance(text);
    synth.speak(speech);
};

pose$
    .subscribe(poseName => {
        speak(poseName);
    });

Myo.connect('org.neurojs.myo');

export default pose$;