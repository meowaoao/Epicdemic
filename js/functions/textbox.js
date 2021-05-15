import {CONSTANTS}  from '/js/CONSTANTS.js';

const GetValue = Phaser.Utils.Objects.GetValue;

/**
 * Type of text styling for the text box. Max lines is 6 before starting a new page.
 * @param {Scene} scene scene being created in
 * @param {Number} wrapWidth how far the text will type before making a new line
 * @param {Number} fixedWidth  how wide the text will be absolutely
 * @param {Number} fixedHeight  how tall the text will be absolutely
 */
export function getBBcodeText (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.rexUI.add.BBCodeText(0, 0, '', {
		fixedWidth: fixedWidth,
		fixedHeight: fixedHeight,

		fontSize: '30px',
		wrap: {
				mode: 'word',
				width: wrapWidth
		},
		maxLines: 6
	})
}

/**
 * Regular textbox that is create for most scenes.
 * @param {Scene} scene scene being created in
 * @param {Number} x position in the scene it's created at
 * @param {Number} y position in the scene it's create at
 * @param {Object} config extra configurations to go beyond defaults
 */
export function createTextBox (scene, x, y, config) {
	var wrapWidth = GetValue(config, 'wrapWidth', 0);
	var fixedWidth = GetValue(config, 'fixedWidth', 0);
	var fixedHeight = GetValue(config, 'fixedHeight', 0);
	var textBox = scene.rexUI.add.textBox({
					x: x,
					y: y,

					background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, CONSTANTS.UI.TXTBOX_BG)
							.setStrokeStyle(2, CONSTANTS.UI.COLOR_LIGHT),

					// icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, CONSTANTS.UI.COLOR_DARK),

					// text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
					text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

					action: scene.add.image(0, 0, 'nextPage').setTint(CONSTANTS.UI.COLOR_LIGHT).setVisible(false),

					space: {
							left: 20,
							right: 20,
							top: 20,
							bottom: 20,
							icon: 10,
							text: 10,
					}
			})
			.setOrigin(0)
			.layout();

	textBox
			.setInteractive()
			.on('pointerdown', function () {
					var icon = this.getElement('action').setVisible(false);
					this.resetChildVisibleState(icon);
					if (this.isTyping) {
							this.stop(true);
					} else {
							this.typeNextPage();
					}
			}, textBox)
			.on('pageend', function () {
					if (this.isLastPage) {
							return;
					}

					var icon = this.getElement('action').setVisible(true);
					this.resetChildVisibleState(icon);
					icon.y -= 30;
					var tween = scene.tweens.add({
							targets: icon,
							y: '+=30', // '+=100'
							ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
							duration: 500,
							repeat: 0, // -1: infinity
							yoyo: false
					});
			}, textBox)
	//.on('type', function () {
	//})

	return textBox;
}

export function getBuiltInText (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.add.text(0, 0, '', {
		fontSize: '30px',
		wordWrap: {
				width: wrapWidth
		},
		maxLines: 10
	})
	.setFixedSize(fixedWidth, fixedHeight);
}

/**
 * Type of text styling for the text box. Max lines is 15 before starting a new page.
 * @param {Scene} scene scene being created in
 * @param {Number} wrapWidth how far the text will type before making a new line
 * @param {Number} fixedWidth  how wide the text will be absolutely
 * @param {Number} fixedHeight  how tall the text will be absolutely
 */
export function getEndBBcodeText (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.rexUI.add.BBCodeText(0, 0, '', {
		fixedWidth: fixedWidth,
		fixedHeight: fixedHeight,

		fontSize: '30px',
		wrap: {
				mode: 'word',
				width: wrapWidth
		},
		maxLines: 15
	})
}

/**
 * Special that is created for the End scene and Intro scene.
 * @param {Scene} scene scene being created in
 * @param {Number} x position in the scene it's created at
 * @param {Number} y position in the scene it's create at
 * @param {Object} config extra configurations to go beyond defaults
 */
export function createEndTextBox (scene, x, y, config) {
	var wrapWidth = GetValue(config, 'wrapWidth', 0);
	var fixedWidth = GetValue(config, 'fixedWidth', 0);
	var fixedHeight = GetValue(config, 'fixedHeight', 0);
	var textBox = scene.rexUI.add.textBox({
					x: x,
					y: y,

					background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, CONSTANTS.UI.TXTBOX_BG)
							.setStrokeStyle(2, CONSTANTS.UI.COLOR_LIGHT),

					// icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, CONSTANTS.UI.COLOR_DARK),

					// text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
					text: getEndBBcodeText (scene, wrapWidth, fixedWidth, fixedHeight),

					action: scene.add.image(0, 0, 'nextPage').setTint(CONSTANTS.UI.COLOR_LIGHT).setVisible(false),

					space: {
							left: 20,
							right: 20,
							top: 20,
							bottom: 20,
							icon: 10,
							text: 10,
					}
			})
			.setOrigin(0)
			.layout();

	textBox
			.setInteractive()
			.on('pointerdown', function () {
					var icon = this.getElement('action').setVisible(false);
					this.resetChildVisibleState(icon);
					if (this.isTyping) {
							this.stop(true);
					} else {
							this.typeNextPage();
					}
			}, textBox)
			.on('pageend', function () {
					if (this.isLastPage) {
							return;
					}

					var icon = this.getElement('action').setVisible(true);
					this.resetChildVisibleState(icon);
					icon.y -= 30;
					var tween = scene.tweens.add({
							targets: icon,
							y: '+=30', // '+=100'
							ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
							duration: 500,
							repeat: 0, // -1: infinity
							yoyo: false
					});
			}, textBox)
	//.on('type', function () {
	//})

	return textBox;
}