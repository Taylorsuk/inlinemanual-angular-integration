import { Injectable } from "@angular/core";
import { WindowRefService } from "./window-ref.service";
import { InlineManualTracking } from "./interfaces";

@Injectable()
export class InlineService {
  _window: any;

  constructor(windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  setTracking(trackingData: InlineManualTracking) {
    this._window.inlineManualTracking = trackingData;
  }

  createPlayer() {
    const trackingData = this._window.inlineManualPlayerData || null;
    try {
      this._window.createInlineManualPlayer(trackingData);
    } catch (error) {
      console.error(error);
    }
  }

  updatePlayer() {
    if (!this._window.inline_manual_player) { return; }
    try {
      this._window.inline_manual_player.update();
    } catch (error) {
      console.error(error);
    }
  }

  activateTopic(id: string) {
    try {
      this._window.inline_manual_player.activateTopic(id);
    } catch (error) {
      console.error(error);
    }
  }

  showPanel() {
    try {
      this._window.inline_manual_player.showPanel();
    } catch (error) {
      console.error(error);
    }
  }

  // incomplete examples
  // goToStep() {
  //   this._window.inline_manual_player.goToStep();
  // }
  // deactivate() {
  //   this._window.inline_manual_player.deactivate();
  // }
  // getCurrentTopic() {
  //   this._window.inline_manual_player.getCurrentTopic();
  // }
  // getCurrentStep() {
  //   this._window.inline_manual_player.getCurrentStep();
  // }
  // setMetadata() {
  //   this._window.inline_manual_player.setMetadata();
  // }
  // hidePanel() {
  //   this._window.inline_manual_player.hidePanel();
  // }
  // togglePanel() {
  //   this._window.inline_manual_player.togglePanel();
  // }
  // destroy() {
  //   this._window.inline_manual_player.destroy();
  // }

}
