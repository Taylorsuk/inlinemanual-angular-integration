import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import { InlineManualTracking } from './interfaces';

@Injectable()

export class InlineService {

    _window: any;

    constructor(windowRef: WindowRefService) {
        this._window = windowRef.nativeWindow;
    }

    createPlayer(trackingData: InlineManualTracking) {
        this._window.createInlineManualPlayer(trackingData)
    }

    updatePlayer() {
        this._window.inline_manual_player.update();
    }

    // furhter methods on this service...
}
