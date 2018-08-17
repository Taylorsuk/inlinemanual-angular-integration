import { Injectable } from "@angular/core";
import { WindowRefService } from "./window-ref.service";
import { InlineManualTracking } from "./interfaces";

@Injectable()
export class InlineService {
  _window: any;

  constructor(windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  createPlayer(trackingData: InlineManualTracking) {
    this._window.createInlineManualPlayer(trackingData);
  }

  updatePlayer() {
    this._window.inline_manual_player.update();
  }

  activateTopic(id: string) {
    this._window.inline_manual_player.activateTopic(id);
  }

  showPanel() {
    this._window.inline_manual_player.showPanel();
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
