import { state } from '../modules/game-state';
import { advance } from '../modules/game-util';

import WebFont from '../modules/web-font/web-font.service';
import Text from '../modules/text/text.component';
import Button from '../modules/button/button.component';

/** Moon Ark Instructions Scene. */
export default class InstructionsScene extends Phaser.Scene {
  private state: any = state;

  /**
   * Create a Instructions Scene.
   */
  constructor() {
    super({
      key: 'InstructionsScene',
    });
  }

  /**
   * Pre-load components in Instructions Scene.
   */
  preload() {
    this.load.addFile(new WebFont(this.load, 'Roboto'));
  }

  /**
   * Create components in Instructions Scene.
   */
  create(): void {
    const title = new Text(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (1 / 2),
      'How To Play',
      {
        fontFamily: 'Roboto',
        fontSize: '36px',
        align: 'center',
      }
    );
    title.setOrigin(0.5);

    const button = new Button(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (4 / 5),
      'start-button',
      'Start',
      () => advance(this.scene, 'GameScene'),
      'success',
      false,
      false,
      'lg'
    );

    title.load();
    button.load();
  }

  /**
   * Update components in Instructions Scene.
   */
  update(): void {}
}
