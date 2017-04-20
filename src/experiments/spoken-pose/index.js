'use strict';

import { Observable } from 'rxjs/Observable';
import Myo from 'myo';

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

export default pose$;
