import { Injectable } from '@angular/core';
import { InlineManualTracking } from './interfaces';

// here is where all the methods on the inlinemanual window object would be added:
// This should probably reside on the interfaces, however for now:
export interface InlineManual extends Window {
    InlineManualPlayer: InlineManualTracking;
    // createInlineManualPlayer: InlineManualTracking;
}

function getWindow (): any {
    return window;
}

@Injectable()
export class WindowRefService {
    get nativeWindow () {
        return getWindow();
    }
}
