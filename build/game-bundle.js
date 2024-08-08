var WgSimulator;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CanvasArtist.ts":
/*!*****************************!*\
  !*** ./src/CanvasArtist.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasArtist": () => (/* binding */ CanvasArtist)
/* harmony export */ });
// Seems like a useless class
class CanvasArtist {
    /**
     *
     * @param {number} w width
     * @param {number} h height
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(w, h, ctx) {
        (this.width = w), (this.height = h), (this.ctx = ctx);
    }
    static createCanvas(container, w, h) {
        let canvas = document.createElement("canvas");
        canvas.id = "game-canvas";
        canvas.width = w;
        canvas.height = h;
        canvas.classList.add("wg-sim-game-canvas");
        container.insertAdjacentElement("afterbegin", canvas);
        return canvas;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}


/***/ }),

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": () => (/* binding */ Config)
/* harmony export */ });
class Config {
    constructor() {
        this.SETTINGS = {
            debugIsEnabled: false,
            isDevMode: false,
            userScoreServer: true,
            maxCanvasWidth: 800,
            maxCanvasHeight: 500,
        };
        this.API_PATHS = {
            HOST: "http://192.168.0.38:3000",
            SCORES: "/api/wgsimulator/score",
        };
        this.HTML_ELEMENT_IDS = {
            GAME_OVER_SCREEN: {
                CONTAINER: "game-over-container",
                PANEL: "game-over-panel",
                SCROLL_CONTAINER: "game-over-scroll-container",
                SCORE_TEXT: "score-text",
                SCORE_VALUE: "score-val",
                RESTART_BUTTON: "restart-btn",
                QUIT_BUTTON: "quit-btn",
                CHARACTER_SELECTOR: "character-selector",
                PAGE_ONE_INDICATOR: "game-over-page-indicator-one",
                PAGE_TWO_INDICATOR: "game-over-page-indicator-two",
                GROUP_SCORE_TABLE: {
                    CONTAINER: "game-over-score-table-container",
                    TABLE: "wg-sim-game-over-score-table",
                    FILTER_SCORES_SELECTOR: "filter-scores-selector",
                    LOADING_SCORES_CONTAINER: "game-over-loading-scores-container",
                    ERROR_SCORES_CONTAINER: "game-over-error-scores-container",
                    RETRY_LOAD_SCORES_BUTTON: "game-over-retry-load-scores",
                },
                GROUP_PLAYER_ALIAS: {
                    CONTAINER: "player-alias-container",
                    INPUT: "player-alias-input",
                    SKIP_BUTTON: "player-alias-skip-button",
                    SUBMIT_BUTTON: "player-alias-submit-button",
                },
                GROUP_SELECT_PLAYER: {
                    CONTAINER: "select-player-dialog-container",
                    CAROUSEL: "select-player-dialog-carousel-scroll-container",
                    CAROUSEL_NAV_LEFT: "select-player-dialog-carousel-nav-left",
                    CAROUSEL_NAV_RIGHT: "select-player-dialog-carousel-nav-right",
                    NAME_DISPLAY: "select-player-dialog-player-name",
                    BUTTON_SUBMIT: "select-player-dialog-submit-button",
                    ESC_ICON: "select-player-dialog-esc",
                },
            },
            LOADING_SCREEN: {
                PROGRESS: "loading-progress",
                PROGRESS_LABEL: "loading-progress-label",
                PROGRESS_LABEL_CONTAINER: "loading-progress-container",
            },
            INTRO_SCREEN: {
                CONTAINER: "game-intro-container",
                PANEL: "game-intro-container",
                START_BUTTON: "start-btn",
            },
            IN_GAME_INFO_SCREEN: {
                CONTAINER: "in-game-info-container",
                PAUSE_BUTTON: "in-game-info-pause-button",
                MUTE_BUTTON: "in-game-info-mute-button",
                SCORE_CONTAINER: "in-game-info-score-container",
                SCORE_LABEL: "in-game-info-score-label",
                HIT_COLLECTABLE: "in-game-info-hit-collectable",
            },
            CONTROL_TUTORIAL: {
                CONTAINER: "control-tutorial-container",
                IMAGE: "control-tutorial-img",
                LABEL: "control-tutorial-label",
            },
            MISC: {
                TOUCH_CONTROLLER: "touch-controller",
                GAME_CONTAINER: "game-container",
                MOCK_UP_CONTAINER: "mock-up-container",
            },
        };
        this.EVENT_KEYS = {
            GAME_READY: "game-ready",
            GAME_OVER: "game-over",
            NEW_LOCAL_HIGHSCORE: "new-local-highscore",
        };
        this.KEY_CODES = {
            jump: 32,
        };
        this.GAME_PLAY = {
            pointsPerSecond: 20,
            pointsPerCollectable: 50,
        };
        this.IMAGES = [
            {
                id: "reward-star",
                imagePath: "/assets/uploads/star.png",
            },
            {
                id: "design_intro_bg",
                imagePath: "/assets/uploads/intro-bg.svg",
            },
            {
                id: "design_game_over_bg",
                imagePath: "/assets/uploads/design_game_over_bg.svg",
            },
            {
                id: "iconPlay",
                imagePath: "/assets/uploads/play-fill.svg",
            },
            {
                id: "iconPause",
                imagePath: "/assets/uploads/pause-fill.svg",
            },
            {
                id: "iconMute",
                imagePath: "/assets/uploads/volume-mute-fill.svg",
            },
            {
                id: "iconSound",
                imagePath: "/assets/uploads/volume-up-fill.svg",
            },
            {
                id: "medalFirst",
                imagePath: "/assets/uploads/medal-first.svg",
            },
            {
                id: "medalSecond",
                imagePath: "/assets/uploads/medal-second.svg",
            },
            {
                id: "medalThird",
                imagePath: "/assets/uploads/medal-third.svg",
            },
            {
                id: "touch-indicator",
                imagePath: "/assets/uploads/touch-indicator.gif",
            },
            {
                id: "spacebar-indicator",
                imagePath: "/assets/uploads/spacebar-indicator.gif",
            },
        ];
        this.AUDIOS = [
            {
                id: "main-theme",
                imagePath: "/assets/uploads/main-theme.mp3",
            },
            {
                id: "game-over",
                imagePath: "/assets/uploads/game-over.mp3",
            },
            {
                id: "jump",
                imagePath: "/assets/uploads/jump.mp3",
            },
            {
                id: "collectable",
                imagePath: "/assets/uploads/collectable.mp3",
            },
            {
                id: "button",
                imagePath: "/assets/uploads/button.mp3",
            },
            {
                id: "new-ingame-highscore",
                imagePath: "/assets/uploads/new-ingame-highscore2.mp3",
            },
        ];
        this.BACKGROUND_TEMPLATES = [
            {
                id: "bckgrnd_1",
                dimensions: { w: 5646, h: 400 },
                imagePath: "/assets/uploads/bckgrnd_1.jpg",
            },
        ];
        this.COLLECTABLES_TEMPLATES = [
            {
                id: "clct_1",
                dimensions: { w: 59, h: 197 },
                imagePath: "/assets/uploads/clct_1.png",
                hitBoxes: [{ xOff: 0, yOff: 0, w: 59, h: 197 }],
            },
            {
                id: "clct_2",
                imagePath: "/assets/uploads/clct_2.png",
                dimensions: { w: 110, h: 196 },
                hitBoxes: [{ xOff: 0, yOff: 0, w: 110, h: 196 }],
            },
            {
                id: "clct_3",
                imagePath: "/assets/uploads/clct_3.png",
                dimensions: { w: 62, h: 189 },
                hitBoxes: [{ xOff: 0, yOff: 0, w: 62, h: 189 }],
            },
        ];
        this.OBSTACLES_GRND_TEMPLATES = [
            {
                id: "obst_dishes",
                dimensions: { w: 277, h: 162 },
                imagePath: "/assets/uploads/obst_dishes.png",
                hitBoxes: [{ xOff: 77, yOff: 32, w: 180, h: 130 }],
            },
            {
                id: "obst_laundrey",
                dimensions: { w: 305, h: 247 },
                imagePath: "/assets/uploads/obst_laundrey.png",
                hitBoxes: [{ xOff: 10, yOff: 70, w: 295, h: 177 }],
            },
            {
                id: "obst_pigeon_ground_1",
                dimensions: { w: 217, h: 176 },
                imagePath: "/assets/uploads/obst_pigeon_ground_1.png",
                hitBoxes: [
                    { xOff: 17, yOff: 16, w: 90, h: 160 },
                    { xOff: 17, yOff: 90, w: 200, h: 86 },
                ],
            },
            {
                id: "obst_pigeon_ground_2",
                dimensions: { w: 198, h: 176 },
                imagePath: "/assets/uploads/obst_pigeon_ground_2.png",
                hitBoxes: [
                    { xOff: 0, yOff: 0, w: 75, h: 176 },
                    { xOff: 0, yOff: 120, w: 190, h: 56 },
                ],
            },
            {
                id: "obst_trash_1",
                dimensions: { w: 337, h: 136 },
                imagePath: "/assets/uploads/obst_trash_1.png",
                hitBoxes: [{ xOff: 0, yOff: 40, w: 337, h: 96 }],
            },
            {
                id: "obst_trash_2",
                dimensions: { w: 304, h: 238 },
                imagePath: "/assets/uploads/obst_trash_2.png",
                hitBoxes: [{ xOff: 0, yOff: 138, w: 304, h: 100 }],
            },
        ];
        this.PLAYER_TEMPLATES = [
            // {
            //   id: "ch_alex",
            //   dimensions: { w: 269.2, h: 250 },
            //   imagePath: "/assets/uploads/ch_alex.png",
            //   hitBoxes: [{ xOff: 13.67, yOff: 0, w: 30.1, h: 250 }],
            //   displayName: "Alex",
            //   frames: 4,
            //   frameWidth: 67.3,
            //   canJump: true,
            //   running: {
            //     startFrame: 0,
            //     endFrame: 1,
            //     msPerFrame: 150,
            //   },
            //   jumping: {
            //     startFrame: 2,
            //     endFrame: 2,
            //     msPerFrame: 1000,
            //   },
            //   crashed: {
            //     startFrame: 3,
            //     endFrame: 3,
            //     msPerFrame: 1000,
            //   },
            // },
            {
                id: "ch_alex_2",
                dimensions: { w: 1368, h: 250 },
                imagePath: "/assets/uploads/ch_alex_2.png",
                hitBoxes: [{ xOff: 27.67, yOff: 0, w: 30.1, h: 240 }],
                displayName: "Alex",
                frames: 8,
                frameWidth: 171,
                canJump: true,
                running: {
                    startFrame: 0,
                    endFrame: 5,
                    msPerFrame: 80,
                },
                jumping: {
                    startFrame: 6,
                    endFrame: 6,
                    msPerFrame: 1000,
                },
                crashed: {
                    startFrame: 7,
                    endFrame: 7,
                    msPerFrame: 1000,
                },
            },
            {
                id: "ch_oli",
                dimensions: { w: 340, h: 230 },
                imagePath: "/assets/uploads/ch_oli.png",
                hitBoxes: [{ xOff: 28.83, yOff: 16.88, w: 32.76, h: 215.8 }],
                displayName: "Oli",
                frames: 4,
                frameWidth: 85,
                canJump: true,
                running: {
                    startFrame: 0,
                    endFrame: 1,
                    msPerFrame: 150,
                },
                jumping: {
                    startFrame: 2,
                    endFrame: 2,
                    msPerFrame: 1000,
                },
                crashed: {
                    startFrame: 3,
                    endFrame: 3,
                    msPerFrame: 1000,
                },
            },
            {
                id: "ch_nico",
                dimensions: { w: 1530, h: 250 },
                imagePath: "/assets/uploads/ch_nico.png",
                hitBoxes: [{ xOff: 43.83, yOff: 5, w: 28.76, h: 240 }],
                displayName: "Nico",
                frames: 9,
                frameWidth: 170,
                canJump: true,
                running: {
                    startFrame: 0,
                    endFrame: 6,
                    msPerFrame: 60,
                },
                jumping: {
                    startFrame: 7,
                    endFrame: 7,
                    msPerFrame: 1000,
                },
                crashed: {
                    startFrame: 8,
                    endFrame: 8,
                    msPerFrame: 1000,
                },
            },
            {
                id: "ch_lotte",
                dimensions: { w: 1935, h: 250 },
                imagePath: "/assets/uploads/ch_lotte.png",
                hitBoxes: [{ xOff: 85, yOff: 5, w: 28.76, h: 240 }],
                displayName: "Lotte",
                frames: 10,
                frameWidth: 193.5,
                canJump: true,
                running: {
                    startFrame: 0,
                    endFrame: 7,
                    msPerFrame: 65,
                },
                jumping: {
                    startFrame: 8,
                    endFrame: 8,
                    msPerFrame: 1000,
                },
                crashed: {
                    startFrame: 9,
                    endFrame: 9,
                    msPerFrame: 1000,
                },
            },
            {
                id: "ch_praline",
                dimensions: { w: 1069, h: 200 },
                imagePath: "/assets/uploads/ch_praline.png",
                hitBoxes: [{ xOff: 50, yOff: 100, w: 90, h: 100 }],
                displayName: "Praline",
                frames: 5,
                frameWidth: 213.8,
                canJump: false,
                running: {
                    startFrame: 0,
                    endFrame: 3,
                    msPerFrame: 80,
                },
                jumping: {
                    startFrame: 0,
                    endFrame: 0,
                    msPerFrame: 1000,
                },
                crashed: {
                    startFrame: 4,
                    endFrame: 4,
                    msPerFrame: 1000,
                },
            },
        ];
    }
}


/***/ }),

/***/ "./src/Contoller.ts":
/*!**************************!*\
  !*** ./src/Contoller.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/Config.ts");
/* harmony import */ var _model_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Game */ "./src/model/Game.ts");
/* harmony import */ var _assets_AssetRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/AssetRepository */ "./src/assets/AssetRepository.ts");
/* harmony import */ var _audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/AudioPlayer */ "./src/audio/AudioPlayer.ts");
/* harmony import */ var _view_LoadingScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/LoadingScreen */ "./src/view/LoadingScreen.ts");
/* harmony import */ var _view_GameOverScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/GameOverScreen */ "./src/view/GameOverScreen.ts");
/* harmony import */ var _view_IntroScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/IntroScreen */ "./src/view/IntroScreen.ts");
/* harmony import */ var _view_InGameInfoScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/InGameInfoScreen */ "./src/view/InGameInfoScreen.ts");
/* harmony import */ var _view_ControlTutorial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/ControlTutorial */ "./src/view/ControlTutorial.ts");
/* harmony import */ var _model_UserControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/UserControls */ "./src/model/UserControls.ts");
/* harmony import */ var _score_ScoreManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./score/ScoreManager */ "./src/score/ScoreManager.ts");
/* harmony import */ var _UserManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserManager */ "./src/UserManager.ts");












/**
 * Acts as the controller between Model (Game.ts) and View (screens/*.ts)
 */
class Controller {
    constructor() {
        this.CONFIG = new _Config__WEBPACK_IMPORTED_MODULE_0__.Config();
        this.assetRepository = new _assets_AssetRepository__WEBPACK_IMPORTED_MODULE_2__.AssetRepository(this.CONFIG.IMAGES, this.CONFIG.AUDIOS, new Array(...this.CONFIG.BACKGROUND_TEMPLATES, ...this.CONFIG.COLLECTABLES_TEMPLATES, ...this.CONFIG.OBSTACLES_GRND_TEMPLATES, ...this.CONFIG.PLAYER_TEMPLATES));
        this.audioPlayer = new _audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__.AudioPlayer(this.assetRepository);
        this.game = new _model_Game__WEBPACK_IMPORTED_MODULE_1__.Game(this.CONFIG, this, this.audioPlayer, this.assetRepository);
        this.scoreManager = new _score_ScoreManager__WEBPACK_IMPORTED_MODULE_10__.ScoreManager(this.CONFIG);
        this.userManager = new _UserManager__WEBPACK_IMPORTED_MODULE_11__.UserManager();
        this.setupScreens();
        this.setupControls();
        this.loadAssets();
    }
    startGame() {
        this.audioPlayer.activate();
        if (this.game.startGame()) {
            this.addTouchController();
            this.inGameInfoScreen.show();
            this.controlTutorial.show();
            this.audioPlayer.playSound("main-theme", true, true);
            return true;
        }
        return false;
    }
    restartGame() {
        if (this.game.restart()) {
            this.gameOverScreen.hide();
            this.inGameInfoScreen.show();
            this.controlTutorial.show();
            this.addTouchController();
            this.audioPlayer.playSound("main-theme", true, true);
            return true;
        }
        return false;
    }
    pauseGame() {
        if (this.game.pauseGame()) {
            this.audioPlayer.pausePlayback();
            return true;
        }
        return false;
    }
    resumeGame() {
        if (this.game.resumeGame()) {
            this.audioPlayer.resumePlayback();
            return true;
        }
        return false;
    }
    setMuted(muted) {
        this.audioPlayer.setMute(muted);
    }
    setCharacter(id) {
        this.game.setCharacter(id);
    }
    getGameStateDAO() {
        return this.game.getStateAsDAO();
    }
    async getScoreManagerDAO() {
        return this.scoreManager.getScoreManagerDAO();
    }
    onGameReady(gameStateDao) {
        this.loadingScreen.hide();
        this.introScreen.show();
    }
    onGameOver(gameStateDao) {
        this.audioPlayer.stopSound("main-theme");
        this.audioPlayer.playSound("game-over");
        this.removeTouchController();
        this.inGameInfoScreen.hide();
        this.controlTutorial.hide();
        this.gameOverScreen.show();
        if (this.userManager.getPlayerAlias() !== null) {
            this.triggerScoreUploadAndTableUpdate(gameStateDao);
            return;
        }
        if (this.userManager.getIsWaitingForAlias()) {
            this.gameOverScreen.getPlayerAlias().then((alias) => {
                if (alias !== null) {
                    this.userManager.setPlayerAlias(alias);
                    this.triggerScoreUploadAndTableUpdate(gameStateDao);
                }
                else {
                    this.userManager.setWaitingForAlias(false);
                    this.gameOverScreen.triggerScoreTableUpdate();
                }
            });
        }
        else {
            this.gameOverScreen.triggerScoreTableUpdate();
        }
    }
    triggerScoreUploadAndTableUpdate(gameStateDao) {
        this.scoreManager
            .uploadScore(gameStateDao.currentScore, this.userManager.getPlayerAlias())
            .then(() => this.gameOverScreen.triggerScoreTableUpdate())
            .catch(() => this.gameOverScreen.triggerScoreTableUpdate());
    }
    onNewLocalHighscore(gameStateDao) {
        this.inGameInfoScreen.notifyNewHighscore();
    }
    onHitCollectable(gameStateDao) {
        this.audioPlayer.playSound("collectable");
        this.inGameInfoScreen.notifyHitCollectable();
    }
    setupScreens() {
        // TODO DAO
        this.gameOverScreen = new _view_GameOverScreen__WEBPACK_IMPORTED_MODULE_5__.GameOverScreen(this.CONFIG, this, this.audioPlayer, this.assetRepository);
        this.loadingScreen = new _view_LoadingScreen__WEBPACK_IMPORTED_MODULE_4__.LoadingScreen(this.CONFIG, this, this.assetRepository, this.audioPlayer);
        this.introScreen = new _view_IntroScreen__WEBPACK_IMPORTED_MODULE_6__.IntroScreen(this.CONFIG, this, this.audioPlayer);
        this.inGameInfoScreen = new _view_InGameInfoScreen__WEBPACK_IMPORTED_MODULE_7__.InGameInfoScreen(this.CONFIG, this, this.assetRepository, this.audioPlayer);
        this.controlTutorial = new _view_ControlTutorial__WEBPACK_IMPORTED_MODULE_8__.ControlTutorial(this.CONFIG, this, this.assetRepository);
    }
    setupControls() {
        // TODO no effect
        this.isMobile = true;
        this.touchController = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.MISC.TOUCH_CONTROLLER);
        this.touchController.hidden = true;
        // Register listeners
        document.addEventListener("keydown", this.handleEvents.bind(this));
        this.touchController.addEventListener("touchstart", this.handleEvents.bind(this));
        document.addEventListener("keyup", this.handleEvents.bind(this));
        this.touchController.addEventListener("touchend", this.handleEvents.bind(this));
        // TODO does not work
        window.addEventListener("onblur", this.pauseGame.bind(this));
        window.addEventListener("onFocus", this.resumeGame.bind(this));
    }
    loadAssets() {
        this.loadingScreen.show();
        this.assetRepository.fetchAssets().then((success) => {
            if (success) {
                this.game.setReady();
                this.gameOverScreen.notifyAssetsLoaded();
            }
            else {
                console.error("Unable to load assets");
            }
        });
    }
    handleEvents(e) {
        if ((e.type === "keydown" && e.keyCode == this.CONFIG.KEY_CODES.jump) ||
            e.type == "touchstart") {
            e.preventDefault();
            this.game.handleUserControl(_model_UserControls__WEBPACK_IMPORTED_MODULE_9__.UserControls.START_JUMP);
        }
        else if ((e.type === "keyup" && e.keyCode == this.CONFIG.KEY_CODES.jump) ||
            e.type == "touchend") {
            e.preventDefault();
            this.game.handleUserControl(_model_UserControls__WEBPACK_IMPORTED_MODULE_9__.UserControls.END_JUMP);
        }
    }
    addTouchController() {
        this.touchController.hidden = false;
    }
    removeTouchController() {
        this.touchController.hidden = true;
    }
}


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WgSimulatorMain": () => (/* binding */ WgSimulatorMain)
/* harmony export */ });
/* harmony import */ var _Contoller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contoller */ "./src/Contoller.ts");

/**
 * Is entry point to the game
 */
class WgSimulatorMain {
    constructor() {
        this.controller = new _Contoller__WEBPACK_IMPORTED_MODULE_0__.Controller();
    }
    setCharacter(id) {
        this.controller.setCharacter(id);
    }
}


/***/ }),

/***/ "./src/UserManager.ts":
/*!****************************!*\
  !*** ./src/UserManager.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManager": () => (/* binding */ UserManager)
/* harmony export */ });
class UserManager {
    constructor() {
        this.playerAlias = null;
        this.isWaitingForAlias = true;
    }
    setPlayerAlias(alias) {
        this.playerAlias = alias;
    }
    getPlayerAlias() {
        return this.playerAlias;
    }
    setWaitingForAlias(waiting) {
        this.isWaitingForAlias = waiting;
    }
    getIsWaitingForAlias() {
        return this.isWaitingForAlias;
    }
}


/***/ }),

/***/ "./src/assets/AssetRepository.ts":
/*!***************************************!*\
  !*** ./src/assets/AssetRepository.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetRepository": () => (/* binding */ AssetRepository)
/* harmony export */ });
class AssetRepository {
    constructor(imageConfig, audioConfig, drawableObjectTemplates) {
        this.audioContext = new AudioContext();
        this.imageConfig = imageConfig;
        this.audioConfig = audioConfig;
        this.drawableObjectTemplates = drawableObjectTemplates;
        this.images = new Map();
        this.audios = new Map();
        this.numberOfAssets =
            this.imageConfig.length +
                this.audioConfig.length +
                this.drawableObjectTemplates.length;
    }
    getImage(id) {
        return this.images.get(id);
    }
    getAudio(id) {
        return this.audios.get(id);
    }
    getProgress() {
        return (this.images.size + this.audios.size) / this.numberOfAssets;
    }
    async fetchAssets() {
        try {
            let promises = [];
            this.imageConfig.forEach((image) => {
                promises.push(this.fetchBasicImage(image.id, image.imagePath));
            });
            this.drawableObjectTemplates.forEach((template) => {
                promises.push(this.fetchDrawableObjectTemplateImage(template));
            });
            this.audioConfig.forEach((audio) => {
                promises.push(this.fetchBasicAudio(audio.id, audio.imagePath));
            });
            await Promise.all(promises);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    async fetchBasicImage(id, path) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            // image.crossOrigin = "Anonymous"; // is this
            image.src = path;
            image.onload = () => {
                this.images.set(id, image);
                resolve(image);
            };
            image.onerror = (e) => {
                reject(e);
            };
        });
    }
    async fetchDrawableObjectTemplateImage(drawableObjectTemplate) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            // image.crossOrigin = "Anonymous"; // is this
            image.src = drawableObjectTemplate.imagePath;
            image.onload = () => {
                this.images.set(drawableObjectTemplate.id, image);
                drawableObjectTemplate.image = image;
                resolve(image);
            };
            image.onerror = (e) => {
                reject(e);
            };
        });
    }
    // Todo does not work when accessing file from file system instead of basic server
    async fetchBasicAudio(id, path) {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then((response) => {
                return response.arrayBuffer();
            })
                .then((arrayBuffer) => this.audioContext.decodeAudioData(arrayBuffer))
                .then((audio) => {
                this.audios.set(id, audio);
                resolve(audio);
            })
                .catch((err) => reject(err));
        });
    }
}


/***/ }),

/***/ "./src/audio/AudioPlayer.ts":
/*!**********************************!*\
  !*** ./src/audio/AudioPlayer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayer": () => (/* binding */ AudioPlayer)
/* harmony export */ });
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sound */ "./src/audio/Sound.ts");

class AudioPlayer {
    constructor(assetRepository) {
        this.audioContext = new AudioContext();
        this.assetRepository = assetRepository;
        this.soundsByKey = new Map();
        this.playbackIsPaused = false;
        this.isMuted = false;
    }
    playSound(key, loop = false, useExistingIfExist = false) {
        var _a;
        this.checkSuspended();
        const soundBuffer = this.assetRepository.getAudio(key);
        if (soundBuffer === undefined) {
            return false;
        }
        let sound = undefined;
        if (useExistingIfExist) {
            sound = (_a = this.soundsByKey.get(key)) === null || _a === void 0 ? void 0 : _a[0];
        }
        if (sound === undefined) {
            sound = new _Sound__WEBPACK_IMPORTED_MODULE_0__.Sound(key, this.audioContext, soundBuffer, loop, this.isMuted, this.cleanUpSound.bind(this));
            if (!this.soundsByKey.has(key)) {
                this.soundsByKey.set(key, []);
            }
            this.soundsByKey.get(key).push(sound);
        }
        if (!this.playbackIsPaused) {
            sound.resume();
        }
    }
    stopSound(key, stopAll = true) {
        const sounds = this.soundsByKey.get(key);
        if (sounds === undefined || sounds.length == 0)
            return false;
        if (stopAll) {
            sounds.forEach((sound) => sound.stop());
        }
        else {
            sounds[0].stop();
        }
        return true;
    }
    pausePlayback() {
        if (this.playbackIsPaused)
            return;
        this.playbackIsPaused = true;
        this.soundsByKey.forEach((sounds) => sounds.forEach((sound) => sound.pause()));
    }
    resumePlayback() {
        if (!this.playbackIsPaused)
            return;
        this.playbackIsPaused = false;
        this.soundsByKey.forEach((sounds) => sounds.forEach((sound) => sound.resume()));
    }
    setMute(muteSound) {
        this.isMuted = muteSound;
        if (muteSound) {
            this.soundsByKey.forEach((sounds) => sounds.forEach((sound) => sound.mute()));
        }
        else {
            this.soundsByKey.forEach((sounds) => sounds.forEach((sound) => sound.unmute()));
        }
    }
    activate() {
        this.checkSuspended();
    }
    checkSuspended() {
        if (this.audioContext.state === "suspended") {
            this.audioContext.resume();
        }
    }
    cleanUpSound(sound) {
        const array = this.soundsByKey.get(sound.getKey());
        if (array === undefined)
            return;
        const index = array.indexOf(sound);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}


/***/ }),

/***/ "./src/audio/Sound.ts":
/*!****************************!*\
  !*** ./src/audio/Sound.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sound": () => (/* binding */ Sound)
/* harmony export */ });
class Sound {
    constructor(key, audioContext, audioBuffer, loopAudio = false, isMuted = false, audioConcludedCallback) {
        this.MILLIS_IN_SECOND = 1000;
        this.key = key;
        this.audioContext = audioContext;
        this.audioBuffer = audioBuffer;
        this.loopAudio = loopAudio;
        this.elapsedPlayingTime = 0;
        this.isPlaying = false;
        this.isMuted = isMuted;
        this.audioConcludedCallback = audioConcludedCallback;
    }
    getKey() {
        return this.key;
    }
    resume() {
        if (this.isPlaying)
            return;
        this.lastResumeTime = Date.now();
        this.isPlaying = true;
        /*
         * We can only call buffersource.start() once. That is why we have to reinitialize
         * the buffersource for each call to play().
         */
        this.bufferSource = this.audioContext.createBufferSource();
        this.bufferSource.loop = this.loopAudio;
        this.bufferSource.buffer = this.audioBuffer;
        if (!this.isMuted) {
            this.bufferSource.connect(this.audioContext.destination);
        }
        if (this.audioConcludedCallback !== undefined && !this.loopAudio) {
            const timeToPlay = this.audioBuffer.duration * this.MILLIS_IN_SECOND -
                this.elapsedPlayingTime;
            this.callBackTimeout = setTimeout(() => this.audioConcludedCallback(this), timeToPlay);
        }
        const startTime = this.elapsedPlayingTime == 0
            ? 0
            : this.elapsedPlayingTime / this.MILLIS_IN_SECOND;
        this.bufferSource.start(0, startTime);
    }
    pause() {
        if (!this.isPlaying)
            return;
        this.isPlaying = false;
        this.elapsedPlayingTime =
            this.elapsedPlayingTime + (Date.now() - this.lastResumeTime);
        if (this.loopAudio) {
            this.elapsedPlayingTime =
                this.elapsedPlayingTime %
                    (this.audioBuffer.duration * this.MILLIS_IN_SECOND);
        }
        clearTimeout(this.callBackTimeout);
        this.bufferSource.stop();
    }
    stop() {
        this.elapsedPlayingTime = 0;
        this.isPlaying = false;
        this.bufferSource.stop();
        clearTimeout(this.callBackTimeout);
        if (this.audioConcludedCallback !== undefined)
            this.audioConcludedCallback(this);
    }
    mute() {
        this.isMuted = true;
        try {
            this.bufferSource.disconnect(this.audioContext.destination);
        }
        catch (DOMException) { }
    }
    unmute() {
        this.isMuted = false;
        try {
            this.bufferSource.connect(this.audioContext.destination);
        }
        catch (DOMException) { }
    }
}


/***/ }),

/***/ "./src/model/Game.ts":
/*!***************************!*\
  !*** ./src/model/Game.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _LocalScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalScore */ "./src/model/LocalScore.ts");
/* harmony import */ var _CanvasArtist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CanvasArtist */ "./src/CanvasArtist.ts");
/* harmony import */ var _world_World__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world/World */ "./src/model/world/World.ts");
/* harmony import */ var _model_world_drawable_DrawableObjectTemplateRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/world/drawable/DrawableObjectTemplateRepository */ "./src/model/world/drawable/DrawableObjectTemplateRepository.ts");
/* harmony import */ var _UserControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserControls */ "./src/model/UserControls.ts");
/* harmony import */ var _GameStates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameStates */ "./src/model/GameStates.ts");
/* harmony import */ var _GameStateDAO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameStateDAO */ "./src/model/GameStateDAO.ts");







class Game {
    constructor(CONFIG, controller, audioPlayer, assetRepository) {
        this.dimensions = { w: 0, h: 0 };
        this.CONFIG = CONFIG;
        this.controller = controller;
        this.assetRepository = assetRepository;
        this.audioPlayer = audioPlayer;
        this.setupCanvas();
        this.scoreBoard = new _LocalScore__WEBPACK_IMPORTED_MODULE_0__.Score();
        this.drawableObjectTemplateRepository =
            new _model_world_drawable_DrawableObjectTemplateRepository__WEBPACK_IMPORTED_MODULE_3__.DrawableObjectTemplateRepository(this.CONFIG);
        this.gameState = _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.IDLE;
    }
    setupCanvas() {
        // TODO remove hard coded height
        // WARN altered for portfolio demo
        // this.setDimensions();
        const mockupWidth = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.MISC.MOCK_UP_CONTAINER).offsetWidth;
        this.dimensions.w = mockupWidth * 0.93;
        this.dimensions.h = 400;
        this.container = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.MISC.GAME_CONTAINER);
        this.container.style.height = String(this.dimensions.h) + "px";
        this.container.style.width = String(this.dimensions.w) + "px";
        this.canvas = _CanvasArtist__WEBPACK_IMPORTED_MODULE_1__.CanvasArtist.createCanvas(this.container, this.dimensions.w, this.dimensions.h);
        this.ctx = this.canvas.getContext("2d");
        this.canvasArtist = new _CanvasArtist__WEBPACK_IMPORTED_MODULE_1__.CanvasArtist(this.dimensions.w, this.dimensions.h, this.ctx);
    }
    setReady() {
        this.setupWorld();
        this.world.refresh(0);
        this.gameState = _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.READY;
        this.dispatchGameReadyEvent();
    }
    setupWorld() {
        this.world = new _world_World__WEBPACK_IMPORTED_MODULE_2__.World(this.CONFIG, this.dimensions.w, this.dimensions.h, this.ctx, this.drawableObjectTemplateRepository, this.assetRepository, this.audioPlayer, this.initialCharacterId);
        this.world.reset();
    }
    handleUserControl(userControl) {
        if (this.gameState !== _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.RUNNING)
            return;
        switch (userControl) {
            case _UserControls__WEBPACK_IMPORTED_MODULE_4__.UserControls.START_JUMP:
                this.world.getPlayer().startJump();
                break;
            case _UserControls__WEBPACK_IMPORTED_MODULE_4__.UserControls.END_JUMP:
                this.world.getPlayer().endJump();
            default:
                console.warn("unsupported user input: " + userControl);
        }
    }
    startGame() {
        if (!(this.gameState === _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.READY ||
            this.gameState === _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.ENDED)) {
            return false;
        }
        this.gameState = _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.RUNNING;
        this.canvasArtist.clear();
        this.world.refresh(0);
        this.collided = false;
        this.hitCollectable = false;
        this.scoreBoard.newGame();
        this.time = Date.now();
        this.handleRaf(this.runGame);
        return true;
    }
    restart() {
        if (this.gameState !== _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.ENDED) {
            return false;
        }
        this.world.reset();
        return this.startGame();
    }
    pauseGame() {
        if (this.gameState !== _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.RUNNING) {
            return false;
        }
        else {
            cancelAnimationFrame(this.rafId);
            this.gameState = _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.PAUSED;
            return true;
        }
    }
    resumeGame() {
        if (this.gameState !== _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.PAUSED) {
            return false;
        }
        else {
            this.time = Date.now();
            this.handleRaf(this.runGame);
            this.gameState = _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.RUNNING;
            return true;
        }
    }
    setCharacter(id) {
        if (this.world === undefined) {
            this.initialCharacterId = id;
        }
        else {
            this.world.setCharacter(id);
        }
    }
    getStateAsDAO() {
        return new _GameStateDAO__WEBPACK_IMPORTED_MODULE_6__.GameStateDAO(this.scoreBoard.getScore(), this.scoreBoard.getLocalHighScore(), this.gameState, this.world.getCharacterId());
    }
    runGame() {
        // Measure time difference since last frame
        let now = Date.now();
        let timeDiff = now - this.time;
        this.time = now;
        // Update score and game status
        this.scoreBoard.setScore(this.scoreBoard.getScore() +
            (timeDiff / 1000) * this.CONFIG.GAME_PLAY.pointsPerSecond);
        // Update and redraw world
        this.canvasArtist.clear();
        [this.collided, this.hitCollectable] = this.world.refresh(timeDiff);
        // Check collectables
        if (this.hitCollectable) {
            this.dispatchHitCollectableEvent();
            this.hitCollectable = false;
            this.scoreBoard.setScore(this.scoreBoard.getScore() + this.CONFIG.GAME_PLAY.pointsPerCollectable);
        }
        if (this.scoreBoard.hasNewLocalHighscore()) {
            this.dispatchNewLocalHighScoreEvent();
        }
        if (!this.collided) {
            this.handleRaf(this.runGame);
        }
        else {
            this.endGame();
        }
    }
    handleRaf(callback, parameter) {
        this.rafId = requestAnimationFrame(callback.bind(this, parameter));
    }
    endGame() {
        this.gameState = _GameStates__WEBPACK_IMPORTED_MODULE_5__.GameStates.ENDED;
        this.dispatchGameOverEvent();
    }
    dispatchGameReadyEvent() {
        this.controller.onGameReady(this.getStateAsDAO());
    }
    dispatchNewLocalHighScoreEvent() {
        this.controller.onNewLocalHighscore(this.getStateAsDAO());
    }
    dispatchGameOverEvent() {
        this.controller.onGameOver(this.getStateAsDAO());
    }
    dispatchHitCollectableEvent() {
        this.controller.onHitCollectable(this.getStateAsDAO());
    }
    setDimensions() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        this.dimensions.w = Math.min(vw * 0.9, this.CONFIG.SETTINGS.maxCanvasWidth);
        this.dimensions.h = Math.min(vh * 0.6, this.CONFIG.SETTINGS.maxCanvasHeight);
    }
}


/***/ }),

/***/ "./src/model/GameStateDAO.ts":
/*!***********************************!*\
  !*** ./src/model/GameStateDAO.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStateDAO": () => (/* binding */ GameStateDAO)
/* harmony export */ });
class GameStateDAO {
    constructor(
    // characterId: string,
    currentScore, localHighscore, state, characterId) {
        // this.characterId = characterId;
        this.currentScore = currentScore;
        this.localHighscore = localHighscore;
        this.state = state;
        this.characterId = characterId;
    }
}


/***/ }),

/***/ "./src/model/GameStates.ts":
/*!*********************************!*\
  !*** ./src/model/GameStates.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStates": () => (/* binding */ GameStates)
/* harmony export */ });
var GameStates;
(function (GameStates) {
    GameStates[GameStates["IDLE"] = 0] = "IDLE";
    GameStates[GameStates["LOADING"] = 1] = "LOADING";
    GameStates[GameStates["READY"] = 2] = "READY";
    GameStates[GameStates["RUNNING"] = 3] = "RUNNING";
    GameStates[GameStates["PAUSED"] = 4] = "PAUSED";
    GameStates[GameStates["ENDED"] = 5] = "ENDED";
})(GameStates || (GameStates = {}));


/***/ }),

/***/ "./src/model/LocalScore.ts":
/*!*********************************!*\
  !*** ./src/model/LocalScore.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => (/* binding */ Score)
/* harmony export */ });
class Score {
    constructor() {
        this.score = 0;
        this.localHighScore = 0;
        this.isFirstGame = true;
        this.newHighScoreWasDiscovered = false;
    }
    getScore() {
        return this.score;
    }
    getLocalHighScore() {
        return this.localHighScore;
    }
    setScore(score) {
        this.score = score;
        if (score > this.localHighScore) {
            this.localHighScore = this.score;
        }
    }
    newGame() {
        this.score = 0;
        this.newHighScoreWasDiscovered = false;
        if (this.localHighScore > 0) {
            this.isFirstGame = false;
        }
    }
    // Only true at max once per game
    hasNewLocalHighscore() {
        if (!this.newHighScoreWasDiscovered &&
            !this.isFirstGame &&
            this.localHighScore === this.score) {
            this.newHighScoreWasDiscovered = true;
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "./src/model/UserControls.ts":
/*!***********************************!*\
  !*** ./src/model/UserControls.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserControls": () => (/* binding */ UserControls)
/* harmony export */ });
var UserControls;
(function (UserControls) {
    UserControls[UserControls["START_JUMP"] = 0] = "START_JUMP";
    UserControls[UserControls["END_JUMP"] = 1] = "END_JUMP";
})(UserControls || (UserControls = {}));


/***/ }),

/***/ "./src/model/world/Animator.ts":
/*!*************************************!*\
  !*** ./src/model/world/Animator.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animator": () => (/* binding */ Animator)
/* harmony export */ });
/**
 * Responsible for refreshing all DrawableObjects that observe the
 * Animator.
 * Implements observable pattern.
 */
class Animator {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        let index = this.observers.indexOf(observer);
        if (index == -1) {
            return false;
        }
        this.observers.splice(index, 1);
        return true;
    }
    unsubscribeAll() {
        this.observers = [];
    }
    update(timeDiff) {
        this.observers.forEach((observer) => observer.update(timeDiff));
    }
    draw(ctx) {
        this.observers.forEach((observer) => observer.draw(ctx));
    }
}


/***/ }),

/***/ "./src/model/world/World.ts":
/*!**********************************!*\
  !*** ./src/model/world/World.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "World": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _Animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animator */ "./src/model/world/Animator.ts");
/* harmony import */ var _collision_CollisionDetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collision/CollisionDetector */ "./src/model/world/collision/CollisionDetector.ts");
/* harmony import */ var _drawable_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawable/Background */ "./src/model/world/drawable/Background.ts");
/* harmony import */ var _drawable_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawable/Player */ "./src/model/world/drawable/Player.ts");
/* harmony import */ var _drawable_Obstacle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawable/Obstacle */ "./src/model/world/drawable/Obstacle.ts");
/* harmony import */ var _drawable_CollectableItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawable/CollectableItem */ "./src/model/world/drawable/CollectableItem.ts");
/* harmony import */ var _drawable_RewardExplosion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawable/RewardExplosion */ "./src/model/world/drawable/RewardExplosion.ts");
/* harmony import */ var _drawable_DrawableObjectTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drawable/DrawableObjectTemplate */ "./src/model/world/drawable/DrawableObjectTemplate.ts");








class World {
    /**
     *
     * @param {number} w width
     * @param {number} h height
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(CONFIG, w, h, ctx, drawableObjectTemplateRepository, assetReporitory, audioPlayer, initialCharacterId) {
        this.MEAN_DIST_BETWEEN_OBSTACLES = 28; // should be changed to distance
        this.MEAN_DIST_VARIANCE = 300;
        this.VELOCITY_INCREASE_DAMPING = 10000;
        this.MAX_X_VELOCITY = -8;
        this.FPS = 30;
        /**
         * Number of unique drawable templates before they may repeat
         */
        this.MIN_UNIQUE_DRAWABLES_NUM = 3;
        this.FLOOR_HEIGHT = 10;
        this.CONFIG = CONFIG;
        this.width = w;
        this.height = h;
        this.ctx = ctx;
        this.drawableObjectTemplateRepository = drawableObjectTemplateRepository;
        // Ensure valid character configuration (initialCharacterId fallback)
        this.setCharacter(drawableObjectTemplateRepository.getPlayerTemplates()[0].id);
        this.setCharacter(initialCharacterId);
        this.assetReporitory = assetReporitory;
        this.audioPlayer = audioPlayer;
        this.animator = new _Animator__WEBPACK_IMPORTED_MODULE_0__.Animator();
        this.reset();
    }
    reset() {
        // Reset Animator
        this.animator.unsubscribeAll();
        this.obstacleVelocity = { x: -3, y: 0 }; // TODO not clean with only one velocity
        this.background = new _drawable_Background__WEBPACK_IMPORTED_MODULE_2__.Background(0, 0, this.width, this.height, this.obstacleVelocity, this.drawableObjectTemplateRepository.getBackgroundTemplates()[0]);
        this.animator.subscribe(this.background);
        // TODO remove magic number height? Shift math to object
        const playerTemplate = this.drawableObjectTemplateRepository.getPlayerTemplate(this.characterId);
        this.player = new _drawable_Player__WEBPACK_IMPORTED_MODULE_3__.Player(this.CONFIG, this.width / 4, this.height - this.playerTemplate.dimensions.h - this.FLOOR_HEIGHT - 1, this.height - this.FLOOR_HEIGHT, playerTemplate.dimensions.h, playerTemplate, this.audioPlayer);
        this.animator.subscribe(this.player);
        // Reset Obstacles
        this.obstacles = [];
        this.obstacleGroundTemplates =
            this.drawableObjectTemplateRepository.getObstacleTemplates();
        this.nextObstacleDist = this.calcNextObstacleDist();
        this.lastObstacleIds = [];
        this.playerHitObstacle = false;
        // Reset Collectables
        this.collectables = [];
        this.collectableTemplates =
            this.drawableObjectTemplateRepository.getCollectableTemplates();
        this.nextCollectableDist = this.calcNextCollectableDist();
        this.lastCollectableIds = [];
        this.playerHitCollectable = false;
        this.rewardExplosions = [];
    }
    getPlayer() {
        if (this.player) {
            return this.player;
        }
    }
    setCharacter(characterId) {
        let playerTemplate = this.drawableObjectTemplateRepository.getPlayerTemplate(characterId);
        if (playerTemplate != undefined) {
            this.playerTemplate = playerTemplate;
            this.characterId = characterId;
            return;
        }
        console.error(`No player template for id "${characterId}"`);
        if (this.characterId == null) {
            this.playerTemplate =
                this.drawableObjectTemplateRepository.getPlayerTemplates()[0];
            this.characterId = this.playerTemplate.id;
        }
    }
    getCharacterId() {
        return this.characterId;
    }
    /**
     *
     * @param {number} timeDiff time difference between this and last update in millis
     */
    refresh(timeDiff) {
        let frames = (timeDiff / 1000) * this.FPS;
        this.updateObstacles();
        this.updateCollectables();
        // Reduce next ... distances
        this.nextObstacleDist -= frames * this.obstacleVelocity.x * -0.2;
        this.nextCollectableDist -= frames * this.obstacleVelocity.x * -0.2;
        // Refresh all drawable objects
        this.animator.update(timeDiff);
        this.increaseSpeed(timeDiff);
        // Check collisions
        this.playerHitObstacle = _collision_CollisionDetector__WEBPACK_IMPORTED_MODULE_1__.CollisionDetector.collided(this.player, this.obstacles[0]);
        this.playerHitCollectable = _collision_CollisionDetector__WEBPACK_IMPORTED_MODULE_1__.CollisionDetector.collided(this.player, this.collectables[0]);
        if (this.playerHitObstacle) {
            this.player.setCrashed();
        }
        this.animator.draw(this.ctx);
        if (this.playerHitCollectable) {
            this.addRewardExplosion(this.collectables[0]);
            this.collectables.shift();
        }
        return [this.playerHitObstacle, this.playerHitCollectable];
    }
    updateObstacles() {
        // Add new obstacles
        if (this.nextObstacleDist < 0) {
            let nextObstacleIndex;
            do {
                nextObstacleIndex = Math.floor(Math.random() * this.obstacleGroundTemplates.length);
            } while (this.lastObstacleIds.includes(nextObstacleIndex));
            this.lastObstacleIds.push(nextObstacleIndex);
            if (this.lastObstacleIds.length >= this.MIN_UNIQUE_DRAWABLES_NUM) {
                this.lastObstacleIds.shift();
            }
            let nextObstacleTemplate = (0,_drawable_DrawableObjectTemplate__WEBPACK_IMPORTED_MODULE_7__.scaleDrawableTempalte)(this.obstacleGroundTemplates[nextObstacleIndex], 0.28);
            let nextObstacle = new _drawable_Obstacle__WEBPACK_IMPORTED_MODULE_4__.Obstacle(this.CONFIG, this.width, this.height - nextObstacleTemplate.dimensions.h - this.FLOOR_HEIGHT, 0, 0, this.obstacleVelocity, nextObstacleTemplate);
            this.obstacles.push(nextObstacle);
            this.animator.subscribe(nextObstacle);
            this.nextObstacleDist = this.calcNextObstacleDist();
        }
        // Remove non-visible obstacles // TODO get width instead of magic number
        if (this.obstacles.length > 0 &&
            this.obstacles[0].getX() + this.obstacles[0].getWidth() < 0) {
            this.animator.unsubscribe(this.obstacles[0]);
            this.obstacles.shift();
        }
    }
    updateCollectables() {
        // Add new collectable
        if (this.nextCollectableDist < 0) {
            let nextCollectableIndex;
            do {
                nextCollectableIndex = Math.floor(Math.random() * this.collectableTemplates.length);
            } while (this.lastCollectableIds.includes(nextCollectableIndex));
            this.lastCollectableIds.push(nextCollectableIndex);
            if (this.lastCollectableIds.length >= this.MIN_UNIQUE_DRAWABLES_NUM) {
                this.lastCollectableIds.shift();
            }
            let nextCollectableTemplate = (0,_drawable_DrawableObjectTemplate__WEBPACK_IMPORTED_MODULE_7__.scaleDrawableTempalte)(this.collectableTemplates[nextCollectableIndex], 0.28);
            let nextCollectable = new _drawable_CollectableItem__WEBPACK_IMPORTED_MODULE_5__.CollectableItem(this.CONFIG, this.width, this.height * 0.3 - nextCollectableTemplate.dimensions.h, 0, 0, this.obstacleVelocity, nextCollectableTemplate);
            this.collectables.push(nextCollectable);
            this.animator.subscribe(nextCollectable);
            this.nextCollectableDist = this.calcNextCollectableDist();
        }
        // Remove non-visible collectables
        if (this.collectables.length > 0 && this.collectables[0].getX() < -20) {
            this.animator.unsubscribe(this.collectables[0]);
            this.collectables.shift();
        }
    }
    increaseSpeed(timeDiff) {
        if (this.obstacleVelocity.x > this.MAX_X_VELOCITY) {
            this.obstacleVelocity.x -= timeDiff / this.VELOCITY_INCREASE_DAMPING;
            this.obstacles.forEach((obstacle) => obstacle.setVelocity(this.obstacleVelocity));
            this.background.setVelocity(this.obstacleVelocity);
            this.collectables.forEach((collectable) => collectable.setVelocity(this.obstacleVelocity));
        }
    }
    calcNextObstacleDist() {
        return (Math.random() + 2) * this.MEAN_DIST_BETWEEN_OBSTACLES;
    }
    calcNextCollectableDist() {
        return (Math.random() + 1) * this.MEAN_DIST_BETWEEN_OBSTACLES * 3;
    }
    addRewardExplosion(collectable) {
        let rewardExplosion = new _drawable_RewardExplosion__WEBPACK_IMPORTED_MODULE_6__.RewardExplosion(collectable.getX(), collectable.getY(), this.assetReporitory);
        this.rewardExplosions.push(rewardExplosion);
        setTimeout(this.shiftRewardExplosions.bind(this), 400);
        this.animator.subscribe(rewardExplosion);
        this.animator.unsubscribe(collectable);
    }
    shiftRewardExplosions() {
        this.animator.unsubscribe(this.rewardExplosions[0]);
        this.rewardExplosions.shift();
    }
}


/***/ }),

/***/ "./src/model/world/collision/CollisionDetector.ts":
/*!********************************************************!*\
  !*** ./src/model/world/collision/CollisionDetector.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollisionDetector": () => (/* binding */ CollisionDetector)
/* harmony export */ });
class CollisionDetector {
    static collided(objectA, objectB) {
        if (objectA == undefined || objectB == undefined) {
            return false;
        }
        let aHitBoxes = objectA.getHitBoxes();
        let bHitBoxes = objectB.getHitBoxes();
        for (let aHitBox of aHitBoxes) {
            for (let bHitBox of bHitBoxes) {
                if (bHitBox.collidesWith(aHitBox)) {
                    return true;
                }
            }
        }
        return false;
    }
}


/***/ }),

/***/ "./src/model/world/collision/RectHitBox.ts":
/*!*************************************************!*\
  !*** ./src/model/world/collision/RectHitBox.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RectHitBox": () => (/* binding */ RectHitBox)
/* harmony export */ });
class RectHitBox {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    collidesWith(hitBox) {
        let collided = this.x + this.width > hitBox.getX() &&
            this.x < hitBox.getX() + hitBox.getWidth() &&
            this.y + this.height > hitBox.getY() &&
            this.y < hitBox.getY() + hitBox.getHeight();
        // if (collided == true) {
        //   console.log("COLLISION");
        // }
        return collided;
    }
}


/***/ }),

/***/ "./src/model/world/drawable/Background.ts":
/*!************************************************!*\
  !*** ./src/model/world/drawable/Background.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ "./src/model/world/drawable/DrawableObject.ts");

// TODO INTEGRATE SCALE FACTOR WITH WIDTH
class Background extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__.DrawableObject {
    constructor(x, y, cnvW, cnvH, v, template) {
        super();
        this.x = x;
        this.y = y;
        this.velocity = v;
        this.img = template.image;
        this.width = template.dimensions.w;
        this.height = template.dimensions.h;
        // this._scaleFactor = cnvH / this._height;
        this.scaleFactor = 1;
        this.cnvWidth = cnvW;
        this.cnvHeight = cnvH;
    }
    setVelocity(velocity) {
        this.velocity = velocity;
    }
    draw(ctx) {
        if (this.img) {
            let sx = -(this.x * this.scaleFactor);
            let swidth = this.cnvWidth * this.scaleFactor;
            ctx.drawImage(this.img, sx, this.y, swidth, this.height, 0, 0, this.cnvWidth, this.cnvHeight);
            let backgroundLeft = this.width * this.scaleFactor - (this.cnvWidth - this.x);
            if (backgroundLeft <= 0) {
                let x = this.cnvWidth + backgroundLeft;
                swidth = (this.cnvWidth - x) * this.scaleFactor;
                ctx.drawImage(this.img, 0, this.y, swidth, this.height, x, 0, -backgroundLeft, this.cnvHeight);
            }
        }
    }
    update(timeDiff) {
        let timeFactor = timeDiff / 17;
        if (this.x + this.scaleFactor * this.width < 0) {
            this.x += this.width * this.scaleFactor;
        }
        else {
            this.x += this.velocity.x * timeFactor;
        }
    }
}


/***/ }),

/***/ "./src/model/world/drawable/CollectableItem.ts":
/*!*****************************************************!*\
  !*** ./src/model/world/drawable/CollectableItem.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectableItem": () => (/* binding */ CollectableItem)
/* harmony export */ });
/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ "./src/model/world/drawable/DrawableObject.ts");
/* harmony import */ var _collision_RectHitBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collision/RectHitBox */ "./src/model/world/collision/RectHitBox.ts");


class CollectableItem extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__.DrawableObject {
    constructor(CONFIG, x, y, w, h, v, template, scale = 1, shadow = true) {
        super();
        this.hitBoxes = [];
        this.CONFIG = CONFIG;
        this.x = x;
        this.y = y;
        this.velocity = v;
        this.img = template.image;
        this.dropsShadow = shadow;
        this.width = template.dimensions.w;
        this.height = template.dimensions.h;
        for (let hitBox of template.hitBoxes) {
            this.hitBoxes.push(new _collision_RectHitBox__WEBPACK_IMPORTED_MODULE_1__.RectHitBox(this.x + hitBox.xOff, this.y + hitBox.yOff, hitBox.w, hitBox.h));
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getHitBoxes() {
        return this.hitBoxes;
    }
    setVelocity(velocity) {
        this.velocity = velocity;
    }
    draw(ctx) {
        if (this.img == undefined) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.stroke();
        }
        else {
            if (this.CONFIG.SETTINGS.debugIsEnabled) {
                ctx.fillStyle = "violet";
                ctx.fillRect(this.hitBoxes[0].getX(), this.hitBoxes[0].getY(), this.hitBoxes[0].getWidth(), this.hitBoxes[0].getHeight());
            }
            if (this.img) {
                ctx.save();
                if (this.dropsShadow) {
                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 4;
                    ctx.shadowOffsetY = 6;
                }
                ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
                ctx.restore();
            }
        }
    }
    update(timeDiff) {
        let timeFactor = timeDiff / 17;
        this.x += this.velocity.x * timeFactor;
        this.y += this.velocity.y * timeFactor;
        this.hitBoxes.forEach((hitBox) => (hitBox.x += this.velocity.x * timeFactor));
        this.hitBoxes.forEach((hitBox) => (hitBox.y += this.velocity.y * timeFactor));
    }
}


/***/ }),

/***/ "./src/model/world/drawable/DrawableObject.ts":
/*!****************************************************!*\
  !*** ./src/model/world/drawable/DrawableObject.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawableObject": () => (/* binding */ DrawableObject)
/* harmony export */ });
class DrawableObject {
}


/***/ }),

/***/ "./src/model/world/drawable/DrawableObjectTemplate.ts":
/*!************************************************************!*\
  !*** ./src/model/world/drawable/DrawableObjectTemplate.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleDrawableTempalte": () => (/* binding */ scaleDrawableTempalte)
/* harmony export */ });
function scaleDrawableTempalte(tmplt, factor) {
    let scaledDimensions = {
        w: tmplt.dimensions.w * factor,
        h: tmplt.dimensions.h * factor,
    };
    let scaledHitBoxes = [];
    for (let hitBox of tmplt.hitBoxes) {
        scaledHitBoxes.push({
            xOff: hitBox.xOff,
            yOff: hitBox.yOff,
            w: hitBox.w,
            h: hitBox.h,
        });
    }
    scaledHitBoxes.forEach((hitBox) => {
        hitBox.xOff *= factor;
        hitBox.yOff *= factor;
        hitBox.h *= factor;
        hitBox.w *= factor;
    });
    return {
        id: tmplt.id,
        dimensions: scaledDimensions,
        imagePath: tmplt.imagePath,
        image: tmplt.image,
        hitBoxes: scaledHitBoxes,
    };
}


/***/ }),

/***/ "./src/model/world/drawable/DrawableObjectTemplateRepository.ts":
/*!**********************************************************************!*\
  !*** ./src/model/world/drawable/DrawableObjectTemplateRepository.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawableObjectTemplateRepository": () => (/* binding */ DrawableObjectTemplateRepository)
/* harmony export */ });
class DrawableObjectTemplateRepository {
    constructor(config) {
        this.backgroundTemplates = new Map();
        this.obstacleTemplates = new Map();
        this.collectableTemplates = new Map();
        this.playerTemplates = new Map();
        config.BACKGROUND_TEMPLATES.forEach((template) => this.backgroundTemplates.set(template.id, template));
        config.OBSTACLES_GRND_TEMPLATES.forEach((template) => this.obstacleTemplates.set(template.id, template));
        config.COLLECTABLES_TEMPLATES.forEach((template) => this.collectableTemplates.set(template.id, template));
        config.PLAYER_TEMPLATES.forEach((template) => this.playerTemplates.set(template.id, template));
    }
    getBackgroundTemplates() {
        return Array.from(this.backgroundTemplates.values());
    }
    getObstacleTemplates() {
        return Array.from(this.obstacleTemplates.values());
    }
    getCollectableTemplates() {
        return Array.from(this.collectableTemplates.values());
    }
    getPlayerTemplates() {
        return Array.from(this.playerTemplates.values());
    }
    getBackgroundTemplate(id) {
        return this.backgroundTemplates.get(id);
    }
    getObstacleTemplate(id) {
        return this.obstacleTemplates.get(id);
    }
    getCollectableTemplate(id) {
        return this.collectableTemplates.get(id);
    }
    getPlayerTemplate(id) {
        return this.playerTemplates.get(id);
    }
}


/***/ }),

/***/ "./src/model/world/drawable/Obstacle.ts":
/*!**********************************************!*\
  !*** ./src/model/world/drawable/Obstacle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Obstacle": () => (/* binding */ Obstacle)
/* harmony export */ });
/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ "./src/model/world/drawable/DrawableObject.ts");
/* harmony import */ var _collision_RectHitBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collision/RectHitBox */ "./src/model/world/collision/RectHitBox.ts");


class Obstacle extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__.DrawableObject {
    constructor(CONFIG, x, y, w, h, v, template, scale = 1, shadow = true) {
        super();
        this.hitBoxes = [];
        this.CONFIG = CONFIG;
        this.x = x;
        this.y = y;
        this.velocity = v;
        this.img = template.image;
        this.dropsShadow = shadow;
        this.width = template.dimensions.w;
        this.height = template.dimensions.h;
        for (let hitBox of template.hitBoxes) {
            this.hitBoxes.push(new _collision_RectHitBox__WEBPACK_IMPORTED_MODULE_1__.RectHitBox(this.x + hitBox.xOff, this.y + hitBox.yOff, hitBox.w, hitBox.h));
        }
    }
    getX() {
        return this.x;
    }
    getWidth() {
        return this.width;
    }
    getHitBoxes() {
        return this.hitBoxes;
    }
    setVelocity(velocity) {
        this.velocity = velocity;
    }
    draw(ctx) {
        if (this.img == undefined) {
            ctx.fillStyle = "lightgreen";
            ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
        }
        else {
            if (this.CONFIG.SETTINGS.debugIsEnabled) {
                ctx.fillStyle = "green";
                this.hitBoxes.forEach((hitBox) => ctx.fillRect(hitBox.getX(), hitBox.getY(), hitBox.getWidth(), hitBox.getHeight()));
            }
            if (this.img) {
                ctx.save();
                if (this.dropsShadow) {
                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 4;
                    ctx.shadowOffsetY = 0;
                }
                ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
                ctx.restore();
            }
        }
    }
    update(timeDiff) {
        let timeFactor = timeDiff / 17;
        this.x += this.velocity.x * timeFactor;
        this.y += this.velocity.y * timeFactor;
        this.hitBoxes.forEach((hitBox) => (hitBox.x += this.velocity.x * timeFactor));
        this.hitBoxes.forEach((hitBox) => (hitBox.y += this.velocity.y * timeFactor));
    }
}


/***/ }),

/***/ "./src/model/world/drawable/Player.ts":
/*!********************************************!*\
  !*** ./src/model/world/drawable/Player.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "PlayerState": () => (/* binding */ PlayerState)
/* harmony export */ });
/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ "./src/model/world/drawable/DrawableObject.ts");
/* harmony import */ var _collision_RectHitBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collision/RectHitBox */ "./src/model/world/collision/RectHitBox.ts");
/* harmony import */ var _PlayerTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerTemplate */ "./src/model/world/drawable/PlayerTemplate.ts");



var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["RUNNING"] = 0] = "RUNNING";
    PlayerState[PlayerState["JUMPING"] = 1] = "JUMPING";
    PlayerState[PlayerState["CRASHED"] = 2] = "CRASHED";
})(PlayerState || (PlayerState = {}));
class Player extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__.DrawableObject {
    constructor(CONFIG, x, y, MIN_Y, height, template, audioPlayer, shadow = true) {
        super();
        this.MIN_Y = null;
        this.GRAVITY = 3;
        this.JUMP_VELOCITY = -35;
        this.MAX_JUMP_TIME = 500;
        this.FPS = 1 / 40;
        this.hitBoxes = [];
        this.CONFIG = CONFIG;
        this.audioPlayer = audioPlayer;
        let scaleFactor = height / template.dimensions.h;
        this.MIN_Y = MIN_Y - height;
        this.x = x - template.frameWidth / 2;
        this.y = y;
        this.yVelocity = 0;
        this.state = PlayerState.RUNNING;
        this.width = template.frameWidth;
        this.height = template.dimensions.h;
        this.template = (0,_PlayerTemplate__WEBPACK_IMPORTED_MODULE_2__.scalePlayerTemplate)(template, scaleFactor);
        // Hitboxes
        for (let hitBox of this.template.hitBoxes) {
            this.hitBoxes.push(new _collision_RectHitBox__WEBPACK_IMPORTED_MODULE_1__.RectHitBox(this.x + hitBox.xOff, this.y + hitBox.yOff, hitBox.w, hitBox.h));
        }
        // Drawing data
        this.img = template.image;
        this.dropsShadow = shadow;
        this.drawHeight = height;
        this.drawWidth = template.frameWidth * scaleFactor;
        // Animation
        this.numOfFrames = template.frames;
        this.currStateDescr = template.jumping;
        this.currFrame = this.currStateDescr.startFrame;
        this.timeToNextFrame = this.currStateDescr.msPerFrame;
    }
    getHitBoxes() {
        return this.hitBoxes;
    }
    setCrashed() {
        this.currStateDescr = this.template.crashed;
        this.currFrame = this.currStateDescr.startFrame;
        this.timeToNextFrame = this.currStateDescr.msPerFrame;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        if (this.CONFIG.SETTINGS.debugIsEnabled) {
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.hitBoxes[0].getX(), this.hitBoxes[0].getY(), this.hitBoxes[0].getWidth(), this.hitBoxes[0].getHeight());
        }
        if (this.img) {
            ctx.save();
            if (this.dropsShadow) {
                ctx.shadowColor = "#444444";
                ctx.shadowBlur = 5;
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 0;
            }
            ctx.drawImage(this.img, this.currFrame * this.width, 0, this.width, this.height, this.x, this.y, this.drawWidth, this.drawHeight);
            ctx.restore();
        }
    }
    update(timeDiff) {
        // Update pos and hitboxes
        let framesPassed = timeDiff * this.FPS;
        let lastY = this.y;
        this.y += this.yVelocity * framesPassed;
        this.yVelocity += this.GRAVITY * framesPassed;
        if (this.y >= this.MIN_Y) {
            this.y = this.MIN_Y;
            this.yVelocity = 0;
        }
        this.hitBoxes.forEach((hitBox) => (hitBox.y += this.y - lastY));
        // Update drawing properties
        if (lastY < this.MIN_Y && this.y == this.MIN_Y) {
            this.state = PlayerState.RUNNING;
            this.timeToNextFrame = 0;
            this.currStateDescr = this.template.running;
            this.currFrame = this.currStateDescr.startFrame;
        }
        this.timeToNextFrame -= timeDiff;
        if (this.timeToNextFrame <= 0) {
            this.timeToNextFrame = this.currStateDescr.msPerFrame;
            this.currFrame =
                (this.currFrame + 1) %
                    (this.currStateDescr.endFrame - this.currStateDescr.startFrame + 1);
        }
    }
    startJump() {
        if (!this.template.canJump) {
            return;
        }
        if (this.y >= this.MIN_Y) {
            this.state = PlayerState.JUMPING;
            this.y -= 0.1;
            this.yVelocity = this.JUMP_VELOCITY;
            this.audioPlayer.playSound("jump");
            this.currStateDescr = this.template.jumping;
            this.jumpStart = new Date().getTime();
            this.currFrame = this.currStateDescr.startFrame;
            this.timeToNextFrame = this.currStateDescr.msPerFrame;
        }
    }
    endJump() {
        if (this.state !== PlayerState.JUMPING) {
            return;
        }
        if (this.yVelocity < this.JUMP_VELOCITY / 2) {
            this.yVelocity = this.JUMP_VELOCITY / 2;
        }
        this.state = PlayerState.RUNNING;
    }
}


/***/ }),

/***/ "./src/model/world/drawable/PlayerTemplate.ts":
/*!****************************************************!*\
  !*** ./src/model/world/drawable/PlayerTemplate.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scalePlayerTemplate": () => (/* binding */ scalePlayerTemplate)
/* harmony export */ });
/* harmony import */ var _DrawableObjectTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObjectTemplate */ "./src/model/world/drawable/DrawableObjectTemplate.ts");

function scalePlayerTemplate(template, factor) {
    let scaledTemplate = (0,_DrawableObjectTemplate__WEBPACK_IMPORTED_MODULE_0__.scaleDrawableTempalte)(template, factor);
    return {
        id: scaledTemplate.id,
        dimensions: scaledTemplate.dimensions,
        imagePath: scaledTemplate.imagePath,
        image: scaledTemplate.image,
        hitBoxes: scaledTemplate.hitBoxes,
        displayName: template.displayName,
        frames: template.frames,
        frameWidth: template.frameWidth,
        canJump: template.canJump,
        running: template.running,
        jumping: template.jumping,
        crashed: template.crashed,
    };
}


/***/ }),

/***/ "./src/model/world/drawable/RewardExplosion.ts":
/*!*****************************************************!*\
  !*** ./src/model/world/drawable/RewardExplosion.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardExplosion": () => (/* binding */ RewardExplosion)
/* harmony export */ });
/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ "./src/model/world/drawable/DrawableObject.ts");

class RewardExplosion extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__.DrawableObject {
    constructor(x, y, assetRepository) {
        super();
        this.MAX_VEL = 2.5;
        this.VEL_DAMP = 0.98;
        this.TIME_TIL_VANISH = 500;
        this.particles = [];
        this.x = x;
        this.y = y;
        this.alpha = 1;
        for (let i = 0; i < 6; i++) {
            let dir = this.getRandDir();
            let xVel = Math.sin(dir) * this.MAX_VEL * (1 + Math.random() * 0.5);
            let yVel = Math.cos(dir) * this.MAX_VEL * (1 + Math.random() * 0.5);
            let velocity = { x: xVel, y: yVel };
            this.particles.push(new Particle(this.x, this.y, velocity));
        }
        this.particleImage = assetRepository.getImage("reward-star");
    }
    getRandDir() {
        return Math.random() * 2 * Math.PI;
    }
    draw(ctx) {
        this.particles.forEach((particle) => {
            ctx.save();
            // ctx.translate(particle.x + 15, particle.y + 13);
            // ctx.rotate(particle.rotation);
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(this.particleImage, particle.x, particle.y, 30, 27);
            ctx.restore();
        });
    }
    update(timeDiff) {
        let timeFactor = timeDiff / 17;
        this.particles.forEach((particle) => {
            particle.x += particle.vel.x * timeFactor;
            particle.y += particle.vel.y * timeFactor;
            particle.vel.x *= this.VEL_DAMP;
            particle.vel.y *= this.VEL_DAMP;
            particle.rotation += particle.rotationConst;
        });
        this.alpha -= timeDiff / this.TIME_TIL_VANISH;
    }
}
class Particle {
    constructor(x, y, vel) {
        this.x = x;
        this.y = y;
        this.vel = vel;
        this.rotation = 0;
        this.rotationConst = Math.random() * Math.PI - 0.1;
    }
}


/***/ }),

/***/ "./src/score/ScoreManager.ts":
/*!***********************************!*\
  !*** ./src/score/ScoreManager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreManager": () => (/* binding */ ScoreManager)
/* harmony export */ });
class ScoreManager {
    constructor(CONFIG) {
        this.apiEndpoint = CONFIG.SETTINGS.isDevMode ? CONFIG.API_PATHS.HOST : "";
        this.apiEndpoint = this.apiEndpoint.concat(CONFIG.API_PATHS.SCORES);
        this.currentPlayerScoreIds = [];
        this.scores = [];
    }
    async getScoreManagerDAO() {
        return new Promise((resolve, reject) => {
            this.fetchAllScores()
                .then(() => {
                resolve({
                    scores: this.scores,
                    currentPlayerScoreIds: this.currentPlayerScoreIds,
                });
            })
                .catch(() => {
                reject(null);
            });
        });
    }
    async uploadScore(score, alias) {
        if (this.currentPlayerScoreIds.length > 0) {
            return this.putScore(this.currentPlayerScoreIds[0], Math.round(score));
        }
        else {
            return this.postScore(Math.round(score), alias);
        }
    }
    async postScore(score, alias) {
        return new Promise((resolve, reject) => {
            fetch(this.apiEndpoint, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ playerAlias: alias, score: score }),
            })
                .then((res) => res.json())
                .then((body) => {
                this.currentPlayerScoreIds.push(body.id);
                resolve();
            })
                .catch((res) => {
                console.log(`Unable to post score: ${res}`);
                reject();
            });
        });
    }
    async putScore(id, score) {
        return new Promise((resolve, reject) => {
            const putScoreEndpoint = this.apiEndpoint + "/" + id;
            fetch(putScoreEndpoint, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "PUT",
                body: JSON.stringify({ score: score }),
            })
                .then((res) => res.json())
                .then((body) => {
                resolve();
            })
                .catch((res) => {
                console.log(`Unable to update score: ${res}`);
                reject();
            });
        });
    }
    async fetchAllScores() {
        return new Promise((resolve, reject) => {
            fetch(this.apiEndpoint, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            })
                .then((res) => res.json())
                .then((body) => {
                this.scores = [];
                body.forEach((score) => this.scores.push({
                    id: score.id,
                    playerAlias: score.player_alias,
                    score: score.score,
                    date: new Date(score.date_scored),
                }));
                resolve();
            })
                .catch((res) => {
                console.log(`Unable to fetch scores: ${res}`);
                reject();
            });
        });
    }
}


/***/ }),

/***/ "./src/util/deviceDiscovery.ts":
/*!*************************************!*\
  !*** ./src/util/deviceDiscovery.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isTouchDevice": () => (/* binding */ isTouchDevice)
/* harmony export */ });
function isTouchDevice() {
    return ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0);
}
/**
 * Function to check whether device is likely to be a mobile device. Adapted from http://detectmobilebrowsers.com/
 * @returns true if the device is a mobile device
 */
function isMobile() {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}


/***/ }),

/***/ "./src/view/ControlTutorial.ts":
/*!*************************************!*\
  !*** ./src/view/ControlTutorial.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlTutorial": () => (/* binding */ ControlTutorial)
/* harmony export */ });
/* harmony import */ var _util_deviceDiscovery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/deviceDiscovery */ "./src/util/deviceDiscovery.ts");

class ControlTutorial {
    constructor(CONFIG, controller, asssetRepository) {
        this.CONFIG = CONFIG;
        this.controller = controller;
        this.assetRepository = asssetRepository;
        this.container = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.CONTROL_TUTORIAL.CONTAINER);
        this.image = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.CONTROL_TUTORIAL.IMAGE);
        this.label = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.CONTROL_TUTORIAL.LABEL);
        this.touchController = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.MISC.TOUCH_CONTROLLER);
        this.showTutorial = true;
        this.setupElement();
    }
    show() {
        if ((0,_util_deviceDiscovery__WEBPACK_IMPORTED_MODULE_0__.isMobile)() && (0,_util_deviceDiscovery__WEBPACK_IMPORTED_MODULE_0__.isTouchDevice)()) {
            this.image.src = this.assetRepository.getImage("touch-indicator").src;
            this.label.innerHTML = "Tap to jump";
        }
        else {
            this.image.src = this.assetRepository.getImage("spacebar-indicator").src;
            this.label.innerHTML = "Press SPACE to jump";
        }
        if (this.showTutorial) {
            this.setupElement();
            this.container.style.display = "flex";
        }
    }
    hide() {
        this.container.style.display = "none";
        document.removeEventListener("keydown", this.handleEvents.bind(this));
        this.touchController.removeEventListener("touchstart", this.handleEvents.bind(this));
    }
    handleEvents(e) {
        if ((e.type === "keydown" && e.keyCode == this.CONFIG.KEY_CODES.jump) ||
            e.type == "touchstart") {
            this.hide();
            this.showTutorial = false;
        }
    }
    setupElement() {
        document.addEventListener("keydown", this.handleEvents.bind(this));
        this.touchController.addEventListener("touchstart", this.handleEvents.bind(this));
    }
}


/***/ }),

/***/ "./src/view/GameOverScreen.ts":
/*!************************************!*\
  !*** ./src/view/GameOverScreen.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameOverScreen": () => (/* binding */ GameOverScreen)
/* harmony export */ });
/* harmony import */ var _components_GetPlayerAliasDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GetPlayerAliasDialog */ "./src/view/components/GetPlayerAliasDialog.ts");
/* harmony import */ var _components_ScoreTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ScoreTable */ "./src/view/components/ScoreTable.ts");
/* harmony import */ var _components_SelectPlayerDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SelectPlayerDialog */ "./src/view/components/SelectPlayerDialog.ts");



class GameOverScreen {
    constructor(CONFIG, controller, audioPlayer, assetRespository) {
        // Strings
        this.STR_NEW_HIGHSCORE = "New Highscore!";
        this.STR_SCORE = "Score";
        this.BACKGROUND_IMAGE_PATH = "/assets/uploads/design_game_over_bg.svg";
        this.tableTriggerCount = 0;
        this.CONFIG = CONFIG;
        this.controller = controller;
        this.audioPlayer = audioPlayer;
        this.assetRepository = assetRespository;
        this.scoreTableComponent = new _components_ScoreTable__WEBPACK_IMPORTED_MODULE_1__.ScoreTable(CONFIG, this, audioPlayer, assetRespository);
        this.getPlayerAliasDialog = new _components_GetPlayerAliasDialog__WEBPACK_IMPORTED_MODULE_0__.GetPlayerAliasDialog(CONFIG, audioPlayer);
        this.selectPlayerDialog = new _components_SelectPlayerDialog__WEBPACK_IMPORTED_MODULE_2__.SelectPlayerDialog(CONFIG, audioPlayer, assetRespository);
        this.lockTableUpdate = false;
        this.tableUpdateRequested = false;
        this.scoreFormatter = new Intl.NumberFormat("de-DE");
        this.container = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.CONTAINER);
        this.panel = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.PANEL);
        this.restartButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.RESTART_BUTTON);
        this.quitButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.QUIT_BUTTON);
        this.scoreText = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.SCORE_TEXT);
        this.scoreValue = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.SCORE_VALUE);
        this.characterSelector = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.CHARACTER_SELECTOR);
        this.scrollContainer = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.SCROLL_CONTAINER);
        this.pageOneIndicator = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.PAGE_ONE_INDICATOR);
        this.pageTwoIndicator = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.PAGE_TWO_INDICATOR);
        this.setupElement();
    }
    show() {
        this.update(this.controller.getGameStateDAO());
        this.container.style.display = "block";
        // this.triggerScoreTableUpdate();
    }
    hide() {
        this.container.style.display = "none";
    }
    // We do not control concurrency here, we trust the controller
    async getPlayerAlias() {
        return this.getPlayerAliasDialog.getPlayerAlias();
    }
    async triggerScoreTableUpdate() {
        // Still unsafe, but better
        if (this.lockTableUpdate) {
            if (this.CONFIG.SETTINGS.debugIsEnabled) {
                console.log("Table update is locked, trigger queue...");
            }
            this.tableUpdateRequested = true;
            return;
        }
        this.lockTableUpdate = true;
        if (this.CONFIG.SETTINGS.debugIsEnabled) {
            this.tableTriggerCount++;
            console.log(`Locking table update. Trigger counter: ${this.tableTriggerCount}`);
        }
        this.scoreTableComponent.showLoading();
        this.controller
            .getScoreManagerDAO()
            .then((scoreManagerDAO) => {
            this.scoreTableComponent.createScoreTable(scoreManagerDAO);
            this.scoreTableComponent.showTable();
        })
            .catch((err) => {
            this.scoreTableComponent.showError();
        })
            .finally(() => {
            if (this.CONFIG.SETTINGS.debugIsEnabled) {
                console.log("Release table lock...");
            }
            this.lockTableUpdate = false;
            if (this.tableUpdateRequested) {
                if (this.CONFIG.SETTINGS.debugIsEnabled) {
                    console.log("Retrigger table update");
                }
                this.tableUpdateRequested = false;
                this.triggerScoreTableUpdate();
            }
        });
    }
    notifyAssetsLoaded() {
        this.selectPlayerDialog.setupCarousel();
    }
    update(gameStateDAO) {
        const currentCharacter = this.CONFIG.PLAYER_TEMPLATES.find((el) => el.id === gameStateDAO.characterId);
        this.characterSelector.innerText = currentCharacter.displayName;
        this.selectPlayerDialog.setPlayerIndex(this.CONFIG.PLAYER_TEMPLATES.indexOf(currentCharacter));
        this.scoreText.innerHTML =
            gameStateDAO.currentScore < gameStateDAO.localHighscore
                ? this.STR_SCORE
                : this.STR_NEW_HIGHSCORE;
        this.scoreValue.innerHTML = String(this.scoreFormatter.format(Math.round(gameStateDAO.currentScore)));
    }
    setupElement() {
        this.panel.style.backgroundImage = `url(${this.BACKGROUND_IMAGE_PATH})`;
        this.restartButton.addEventListener("click", this.controller.restartGame.bind(this.controller));
        this.characterSelector.addEventListener("click", (event) => {
            this.selectPlayerDialog.show().then((playerIndex) => {
                this.characterSelector.innerText =
                    this.CONFIG.PLAYER_TEMPLATES[playerIndex].displayName;
                this.controller.setCharacter(this.CONFIG.PLAYER_TEMPLATES[this.selectPlayerDialog.getPlayerIndex()]
                    .id);
            });
        });
        this.restartButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.quitButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.characterSelector.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.pageOneIndicator.style.backgroundColor = "#33135c";
        this.pageTwoIndicator.style.backgroundColor = "#bfbfbf";
        this.scrollContainer.addEventListener("scroll", () => this.handleScrollEvent());
    }
    handleScrollEvent() {
        if (this.scrollContainer.scrollLeft <
            this.scrollContainer.offsetWidth / 2) {
            this.pageOneIndicator.style.backgroundColor = "#33135c";
            this.pageTwoIndicator.style.backgroundColor = "#bfbfbf";
        }
        else {
            this.pageOneIndicator.style.backgroundColor = "#bfbfbf";
            this.pageTwoIndicator.style.backgroundColor = "#33135c";
        }
    }
}


/***/ }),

/***/ "./src/view/InGameInfoScreen.ts":
/*!**************************************!*\
  !*** ./src/view/InGameInfoScreen.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InGameInfoScreen": () => (/* binding */ InGameInfoScreen)
/* harmony export */ });
class InGameInfoScreen {
    constructor(CONFIG, controller, asssetRepository, audioPlayer) {
        this.BACKGROUND_IMAGE_PATH = "/assets/uploads/intro-bg.png";
        this.REFRESH_TIME = 100;
        this.LEAVE_ANIMATION_DURATION = 500;
        this.CONFIG = CONFIG;
        this.controller = controller;
        this.assetRepository = asssetRepository;
        this.audioPlayer = audioPlayer;
        this.container = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.CONTAINER);
        this.pauseButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.PAUSE_BUTTON);
        this.muteButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.MUTE_BUTTON);
        this.scoreContainer = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.SCORE_CONTAINER);
        this.scoreLabel = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.SCORE_LABEL);
        this.hitCollectable = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.HIT_COLLECTABLE);
        this.setupElement();
        this.isPaused = false;
        this.isMuted = false;
    }
    show() {
        this.scoreLabel.style.animationName = "";
        this.pauseIcon.src = this.assetRepository.getImage("iconPause").src;
        if (this.isMuted) {
            this.muteIcon.src = this.assetRepository.getImage("iconMute").src;
        }
        else {
            this.muteIcon.src = this.assetRepository.getImage("iconSound").src;
        }
        this.container.style.animationName = "";
        this.container.style.display = "flex";
        this.refreshScoreId = setInterval(this.updatePanel.bind(this), this.REFRESH_TIME);
    }
    hide() {
        clearInterval(this.refreshScoreId);
        this.container.style.animationName = "wg-sim-in-game-info-animation";
        setTimeout(() => {
            this.container.style.display = "none";
        }, this.LEAVE_ANIMATION_DURATION);
    }
    notifyNewHighscore() {
        this.scoreLabel.style.animationName = "wg-sim-ingame-highscore-animation";
        this.audioPlayer.playSound("new-ingame-highscore");
    }
    notifyHitCollectable() {
        this.hitCollectable.style.display = "block";
        setTimeout(() => (this.hitCollectable.style.display = "none"), 1000);
    }
    updatePanel() {
        const gameStateDAO = this.controller.getGameStateDAO();
        this.scoreLabel.innerHTML = String(Math.round(gameStateDAO.currentScore));
    }
    handlePauseGame() {
        // TODO could lead to invalid button because return type is not verified
        if (!this.isPaused) {
            this.pauseIcon.src = this.assetRepository.getImage("iconPlay").src;
            this.controller.pauseGame();
        }
        else {
            this.pauseIcon.src = this.assetRepository.getImage("iconPause").src;
            this.controller.resumeGame();
        }
        this.isPaused = !this.isPaused;
    }
    handleMuteGame() {
        // TODO invalid state after restart
        // TODO could lead to invalid button because return type is not verified
        if (!this.isMuted) {
            this.muteIcon.src = this.assetRepository.getImage("iconMute").src;
            this.controller.setMuted(true);
        }
        else {
            this.muteIcon.src = this.assetRepository.getImage("iconSound").src;
            this.controller.setMuted(false);
        }
        this.isMuted = !this.isMuted;
    }
    setupElement() {
        this.container.style.animationDuration =
            String(this.LEAVE_ANIMATION_DURATION / 1000) + "s";
        this.hitCollectable.innerHTML =
            "+" + String(this.CONFIG.GAME_PLAY.pointsPerCollectable);
        this.pauseIcon = this.pauseButton.appendChild(new Image());
        this.muteIcon = this.muteButton.appendChild(new Image());
        this.pauseButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.muteButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.pauseButton.addEventListener("click", this.handlePauseGame.bind(this));
        this.muteButton.addEventListener("click", this.handleMuteGame.bind(this));
    }
}


/***/ }),

/***/ "./src/view/IntroScreen.ts":
/*!*********************************!*\
  !*** ./src/view/IntroScreen.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroScreen": () => (/* binding */ IntroScreen)
/* harmony export */ });
class IntroScreen {
    constructor(CONFIG, controller, audioPlayer) {
        this.BACKGROUND_IMAGE_PATH = "/assets/uploads/intro-bg.svg";
        this.LEAVE_ANIMATION_DURATION = 1800;
        this.CONFIG = CONFIG;
        this.controller = controller;
        this.audioPlayer = audioPlayer;
        this.container = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.INTRO_SCREEN.CONTAINER);
        this.panel = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.INTRO_SCREEN.PANEL);
        this.startButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.INTRO_SCREEN.START_BUTTON);
        this.setupElement();
    }
    show() {
        this.container.style.animationName = null;
        this.container.style.display = "block";
    }
    hide() {
        this.container.style.animationName = "wg-sim-game-intro-animation";
        setTimeout(() => {
            this.container.style.display = "none";
        }, this.LEAVE_ANIMATION_DURATION);
    }
    onStart() {
        this.startButton.removeEventListener("click", this.onStart);
        this.hide();
        setTimeout(() => {
            this.controller.startGame();
        }, this.LEAVE_ANIMATION_DURATION);
    }
    setupElement() {
        this.container.style.animationDuration =
            String(this.LEAVE_ANIMATION_DURATION / 1000) + "s";
        this.panel.style.backgroundImage = `url(${this.BACKGROUND_IMAGE_PATH})`;
        this.startButton.addEventListener("click", this.onStart.bind(this));
        this.startButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
    }
}


/***/ }),

/***/ "./src/view/LoadingScreen.ts":
/*!***********************************!*\
  !*** ./src/view/LoadingScreen.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingScreen": () => (/* binding */ LoadingScreen)
/* harmony export */ });
class LoadingScreen {
    constructor(CONFIG, controller, assetRepository, audioPlayer) {
        this.CONFIG = CONFIG;
        this.controller = controller;
        this.assetRepository = assetRepository;
        this.audioPlayer = audioPlayer;
        this.container = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.LOADING_SCREEN.PROGRESS_LABEL_CONTAINER);
        this.progressBar = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.LOADING_SCREEN.PROGRESS);
        this.label = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.LOADING_SCREEN.PROGRESS_LABEL);
    }
    show() {
        this.container.hidden = false;
        this.run();
    }
    hide() {
        cancelAnimationFrame(this.raf);
        this.container.hidden = true;
    }
    run() {
        this.draw();
        this.handleRaf(this.run);
    }
    draw() {
        const loadingProgress = this.assetRepository.getProgress();
        const cssRight = 100 * (0.97 - loadingProgress * 0.955);
        this.progressBar.style.right = String(cssRight) + "%";
        this.label.innerHTML =
            "Loading game..." + Math.floor(loadingProgress * 100) + "%";
    }
    handleRaf(callback, parameter) {
        this.raf = requestAnimationFrame(callback.bind(this, parameter));
    }
}


/***/ }),

/***/ "./src/view/components/GetPlayerAliasDialog.ts":
/*!*****************************************************!*\
  !*** ./src/view/components/GetPlayerAliasDialog.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPlayerAliasDialog": () => (/* binding */ GetPlayerAliasDialog)
/* harmony export */ });
class GetPlayerAliasDialog {
    constructor(CONFIG, audioPlayer) {
        this.CONFIG = CONFIG;
        this.audioPlayer = audioPlayer;
        this.playerAliasContainer = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS.CONTAINER);
        this.playerAliasInput = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS.INPUT);
        this.playerAliasSubmitButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS
            .SUBMIT_BUTTON);
        this.playerAliasSkipButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS
            .SKIP_BUTTON);
        this.setupElement();
    }
    async getPlayerAlias() {
        this.playerAliasContainer.style.display = "grid";
        return new Promise((resolve, reject) => {
            this.playerAliasSubmitButton.addEventListener("click", () => {
                this.playerAliasContainer.style.display = "none";
                const playerAlias = this.playerAliasInput.value;
                playerAlias === "" ? resolve(null) : resolve(playerAlias);
            });
            this.playerAliasSkipButton.addEventListener("click", () => {
                this.playerAliasContainer.style.display = "none";
                resolve(null);
            });
        });
    }
    setupElement() {
        this.playerAliasSkipButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.playerAliasSubmitButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
    }
}


/***/ }),

/***/ "./src/view/components/ScoreTable.ts":
/*!*******************************************!*\
  !*** ./src/view/components/ScoreTable.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreTable": () => (/* binding */ ScoreTable)
/* harmony export */ });
class ScoreTable {
    constructor(CONFIG, gameOverScreen, audioPlayer, assetRespository) {
        this.CONFIG = CONFIG;
        this.gameOverScreen = gameOverScreen;
        this.audioPlayer = audioPlayer;
        this.assetRepository = assetRespository;
        this.tableRowsByScore = new Map();
        this.scoreFormatter = new Intl.NumberFormat("de-DE");
        this.scoresTable = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE.TABLE);
        this.scoresContainer = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE.CONTAINER);
        this.filterScoresTableSelector = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
            .FILTER_SCORES_SELECTOR);
        this.loadingScoresContainer = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
            .LOADING_SCORES_CONTAINER);
        this.errorLoadingScoresContainer = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
            .ERROR_SCORES_CONTAINER);
        this.retryLoadScoresButton = document.getElementById(this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
            .RETRY_LOAD_SCORES_BUTTON);
        this.setupElement();
    }
    showTable() {
        this.loadingScoresContainer.style.display = "none";
        this.errorLoadingScoresContainer.style.display = "none";
        this.scoresContainer.style.display = "flex";
    }
    showLoading() {
        this.scoresContainer.style.display = "none";
        this.errorLoadingScoresContainer.style.display = "none";
        this.loadingScoresContainer.style.display = "flex";
    }
    showError() {
        this.scoresContainer.style.display = "none";
        this.loadingScoresContainer.style.display = "none";
        this.errorLoadingScoresContainer.style.display = "flex";
    }
    createScoreTable(scoreManagerDAO) {
        this.scoresTable.innerHTML = "";
        this.tableRowsByScore = new Map();
        const scores = [...scoreManagerDAO.scores].sort((a, b) => b.score - a.score);
        let scrollToRow = null;
        scores.forEach((score) => {
            const row = this.scoresTable.insertRow(-1);
            const nrCell = row.insertCell(0);
            const aliasCell = row.insertCell(1);
            const scoreCell = row.insertCell(2);
            if (row.rowIndex > 3) {
                nrCell.innerText = String(row.rowIndex);
            }
            else {
                row.style.fontWeight = "bold";
                nrCell.style.padding = "0rem";
                nrCell.style.display = "revert";
                const medal = nrCell.appendChild(new Image());
                medal.style.display = "inline-block";
                if (row.rowIndex === 1) {
                    medal.src = this.assetRepository.getImage("medalFirst").src;
                }
                else if (row.rowIndex === 2) {
                    medal.src = this.assetRepository.getImage("medalSecond").src;
                }
                else if (row.rowIndex === 3) {
                    medal.src = this.assetRepository.getImage("medalThird").src;
                }
            }
            aliasCell.innerText = score.playerAlias;
            scoreCell.innerText = this.scoreFormatter.format(score.score);
            if (scoreManagerDAO.currentPlayerScoreIds.indexOf(score.id) != -1) {
                row.style.color = "#de38c8";
                row.style.fontWeight = "bold";
                scrollToRow = scrollToRow === null ? row : scrollToRow;
            }
            this.tableRowsByScore.set(score, row);
        });
        // Does not work here because table.style.display is none
        // if (scrollToRow !== null) {
        //   console.log(
        //     this.scoresTable.offsetHeight *
        //       (scrollToRow.rowIndex / this.scoresTable.rows.length)
        //   );
        //   this.scoresTable.scrollTo({
        //     top:
        //       this.scoresTable.offsetHeight *
        //       (scrollToRow.rowIndex / this.scoresTable.rows.length),
        //     left: 0,
        //     behavior: "smooth",
        //   });
        // }
    }
    filterScoreTable(value) {
        const DAYS_PER_WEEK = 7;
        const DAYS_PER_MONTH = 30;
        let maximalDayDifference;
        if (value === "MONTH") {
            maximalDayDifference = DAYS_PER_MONTH;
        }
        else if (value === "WEEK") {
            maximalDayDifference = DAYS_PER_WEEK;
        }
        else {
            maximalDayDifference = Infinity;
        }
        this.tableRowsByScore.forEach((row, score, map) => {
            const dayDifference = Math.round(Math.abs(Date.now() - score.date.getTime()) / (1000 * 60 * 60 * 24));
            if (dayDifference > maximalDayDifference) {
                row.style.display = "none";
            }
            else {
                row.style.display = "table-row";
            }
        });
    }
    setupElement() {
        this.retryLoadScoresButton.addEventListener("click", () => this.gameOverScreen.triggerScoreTableUpdate());
        this.retryLoadScoresButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.filterScoresTableSelector.addEventListener("change", (event) => {
            this.filterScoreTable(event.target.value);
        });
    }
}


/***/ }),

/***/ "./src/view/components/SelectPlayerDialog.ts":
/*!***************************************************!*\
  !*** ./src/view/components/SelectPlayerDialog.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPlayerDialog": () => (/* binding */ SelectPlayerDialog)
/* harmony export */ });
class SelectPlayerDialog {
    constructor(CONFIG, audioPlayer, assetResporitory) {
        this.CANVAS_WIDTH = 130;
        this.CANVAS_HEIGHT = 180;
        this.CONFIG = CONFIG;
        this.assetRepository = assetResporitory;
        this.audioPlayer = audioPlayer;
        this.currentIndex = 0;
        this.container = document.getElementById(CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.CONTAINER);
        this.carousel = document.getElementById(CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.CAROUSEL);
        this.carouselNavLeft = document.getElementById(CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER
            .CAROUSEL_NAV_LEFT);
        this.carouselNavRight = document.getElementById(CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER
            .CAROUSEL_NAV_RIGHT);
        this.nameDisplay = document.getElementById(CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.NAME_DISPLAY);
        this.submitButton = document.getElementById(CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.BUTTON_SUBMIT);
        this.escapeIcon = document.getElementById(CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.ESC_ICON);
        this.setupElement();
    }
    setPlayerIndex(index) {
        if (index < 0 || index >= this.CONFIG.PLAYER_TEMPLATES.length) {
            return;
        }
        this.currentIndex = index;
        this.scroll(index - this.currentIndex);
    }
    getPlayerIndex() {
        return this.currentIndex;
    }
    async show() {
        this.container.show();
        return new Promise((resolve, reject) => {
            this.submitButton.addEventListener("click", () => {
                this.hide();
                resolve(this.currentIndex);
            });
            this.escapeIcon.addEventListener("click", () => {
                this.hide();
                resolve(this.currentIndex);
            });
        });
    }
    hide() {
        this.container.close();
    }
    setupCarousel() {
        this.carousel.innerHTML = "";
        this.CONFIG.PLAYER_TEMPLATES.forEach((charachter) => {
            const canvas = document.createElement("canvas");
            canvas.width = this.CANVAS_WIDTH;
            canvas.height = this.CANVAS_HEIGHT;
            canvas.style.width = this.CANVAS_WIDTH + "px";
            canvas.style.height = this.CANVAS_HEIGHT + "px";
            canvas.classList.add("wg-sim-select-player-dialog-carousel-item");
            this.carousel.appendChild(canvas);
            const ctx = canvas.getContext("2d");
            const img = this.assetRepository.getImage(charachter.id);
            const canvasRatio = this.CANVAS_WIDTH / this.CANVAS_HEIGHT;
            let widthIsDominant = true;
            if (canvasRatio > charachter.frameWidth / charachter.dimensions.h) {
                widthIsDominant = false;
            }
            const dWidth = widthIsDominant
                ? this.CANVAS_WIDTH
                : charachter.frameWidth *
                    (this.CANVAS_HEIGHT / charachter.dimensions.h);
            const dHeight = !widthIsDominant
                ? this.CANVAS_HEIGHT
                : charachter.dimensions.h * (this.CANVAS_WIDTH / charachter.frameWidth);
            const dx = widthIsDominant ? 0 : (this.CANVAS_WIDTH - dWidth) / 2;
            const dy = !widthIsDominant ? 0 : (this.CANVAS_HEIGHT - dHeight) / 2;
            ctx.shadowColor = "#444444";
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 0;
            ctx.drawImage(img, 0, 0, charachter.frameWidth, charachter.dimensions.h, dx, dy, dWidth, dHeight);
        });
    }
    scroll(direction) {
        this.currentIndex = this.mod(this.currentIndex + direction, this.CONFIG.PLAYER_TEMPLATES.length);
        const xPosition = this.carousel.offsetWidth * this.currentIndex;
        this.carousel.scrollTo({
            top: 0,
            left: xPosition,
            behavior: "smooth",
        });
    }
    handleScrollEvent() {
        this.currentIndex = Math.round(this.carousel.scrollLeft / this.carousel.offsetWidth);
        this.nameDisplay.innerText =
            this.CONFIG.PLAYER_TEMPLATES[this.currentIndex].displayName;
    }
    mod(number, modulos) {
        return ((number % modulos) + modulos) % modulos;
    }
    setupElement() {
        this.carousel.addEventListener("scroll", () => this.handleScrollEvent());
        this.carouselNavLeft.addEventListener("click", () => this.scroll(-1));
        this.carouselNavRight.addEventListener("click", () => this.scroll(1));
        this.carouselNavLeft.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.carouselNavRight.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.submitButton.addEventListener("click", () => this.audioPlayer.playSound("button"));
        this.escapeIcon.addEventListener("click", () => this.audioPlayer.playSound("button"));
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setup": () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/Main.ts");

function setup() {
    const main = new _Main__WEBPACK_IMPORTED_MODULE_0__.WgSimulatorMain();
    return main;
}

})();

WgSimulator = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNrRDtBQUNHO0FBQzlDLDhCQUE4QiwyREFBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkRBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRE87QUFDUDs7Ozs7Ozs7Ozs7Ozs7O0FDRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25D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OEVBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSx1QkFBdUI7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDJCQUEyQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwyQkFBMkI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUNsQztBQUNQLHFCQUFxQixrREFBZTtBQUNwQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvQ2FudmFzQXJ0aXN0LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9Db250b2xsZXIudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvTWFpbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9Vc2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9hc3NldHMvQXNzZXRSZXBvc2l0b3J5LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL2F1ZGlvL0F1ZGlvUGxheWVyLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL2F1ZGlvL1NvdW5kLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL0dhbWUudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvR2FtZVN0YXRlREFPLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL0dhbWVTdGF0ZXMudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvTG9jYWxTY29yZS50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9tb2RlbC9Vc2VyQ29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvQW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvV29ybGQudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvY29sbGlzaW9uL0NvbGxpc2lvbkRldGVjdG9yLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2NvbGxpc2lvbi9SZWN0SGl0Qm94LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL0JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvQ29sbGVjdGFibGVJdGVtLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL0RyYXdhYmxlT2JqZWN0LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL0RyYXdhYmxlT2JqZWN0VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvRHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvT2JzdGFjbGUudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvUGxheWVyLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL1BsYXllclRlbXBsYXRlLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL1Jld2FyZEV4cGxvc2lvbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9zY29yZS9TY29yZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdXRpbC9kZXZpY2VEaXNjb3ZlcnkudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9Db250cm9sVHV0b3JpYWwudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9HYW1lT3ZlclNjcmVlbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy92aWV3L0luR2FtZUluZm9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9JbnRyb1NjcmVlbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy92aWV3L0xvYWRpbmdTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9jb21wb25lbnRzL0dldFBsYXllckFsaWFzRGlhbG9nLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL3ZpZXcvY29tcG9uZW50cy9TY29yZVRhYmxlLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL3ZpZXcvY29tcG9uZW50cy9TZWxlY3RQbGF5ZXJEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dnU2ltdWxhdG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWVtcyBsaWtlIGEgdXNlbGVzcyBjbGFzc1xyXG5leHBvcnQgY2xhc3MgQ2FudmFzQXJ0aXN0IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCBoZWlnaHRcclxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodywgaCwgY3R4KSB7XHJcbiAgICAgICAgKHRoaXMud2lkdGggPSB3KSwgKHRoaXMuaGVpZ2h0ID0gaCksICh0aGlzLmN0eCA9IGN0eCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlQ2FudmFzKGNvbnRhaW5lciwgdywgaCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9IFwiZ2FtZS1jYW52YXNcIjtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3O1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xyXG4gICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKFwid2ctc2ltLWdhbWUtY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNhbnZhcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5TRVRUSU5HUyA9IHtcclxuICAgICAgICAgICAgZGVidWdJc0VuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0Rldk1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VyU2NvcmVTZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG1heENhbnZhc1dpZHRoOiA4MDAsXHJcbiAgICAgICAgICAgIG1heENhbnZhc0hlaWdodDogNTAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5BUElfUEFUSFMgPSB7XHJcbiAgICAgICAgICAgIEhPU1Q6IFwiaHR0cDovLzE5Mi4xNjguMC4zODozMDAwXCIsXHJcbiAgICAgICAgICAgIFNDT1JFUzogXCIvYXBpL3dnc2ltdWxhdG9yL3Njb3JlXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkhUTUxfRUxFTUVOVF9JRFMgPSB7XHJcbiAgICAgICAgICAgIEdBTUVfT1ZFUl9TQ1JFRU46IHtcclxuICAgICAgICAgICAgICAgIENPTlRBSU5FUjogXCJnYW1lLW92ZXItY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBQQU5FTDogXCJnYW1lLW92ZXItcGFuZWxcIixcclxuICAgICAgICAgICAgICAgIFNDUk9MTF9DT05UQUlORVI6IFwiZ2FtZS1vdmVyLXNjcm9sbC1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgIFNDT1JFX1RFWFQ6IFwic2NvcmUtdGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgU0NPUkVfVkFMVUU6IFwic2NvcmUtdmFsXCIsXHJcbiAgICAgICAgICAgICAgICBSRVNUQVJUX0JVVFRPTjogXCJyZXN0YXJ0LWJ0blwiLFxyXG4gICAgICAgICAgICAgICAgUVVJVF9CVVRUT046IFwicXVpdC1idG5cIixcclxuICAgICAgICAgICAgICAgIENIQVJBQ1RFUl9TRUxFQ1RPUjogXCJjaGFyYWN0ZXItc2VsZWN0b3JcIixcclxuICAgICAgICAgICAgICAgIFBBR0VfT05FX0lORElDQVRPUjogXCJnYW1lLW92ZXItcGFnZS1pbmRpY2F0b3Itb25lXCIsXHJcbiAgICAgICAgICAgICAgICBQQUdFX1RXT19JTkRJQ0FUT1I6IFwiZ2FtZS1vdmVyLXBhZ2UtaW5kaWNhdG9yLXR3b1wiLFxyXG4gICAgICAgICAgICAgICAgR1JPVVBfU0NPUkVfVEFCTEU6IHtcclxuICAgICAgICAgICAgICAgICAgICBDT05UQUlORVI6IFwiZ2FtZS1vdmVyLXNjb3JlLXRhYmxlLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFRBQkxFOiBcIndnLXNpbS1nYW1lLW92ZXItc2NvcmUtdGFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICBGSUxURVJfU0NPUkVTX1NFTEVDVE9SOiBcImZpbHRlci1zY29yZXMtc2VsZWN0b3JcIixcclxuICAgICAgICAgICAgICAgICAgICBMT0FESU5HX1NDT1JFU19DT05UQUlORVI6IFwiZ2FtZS1vdmVyLWxvYWRpbmctc2NvcmVzLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEVSUk9SX1NDT1JFU19DT05UQUlORVI6IFwiZ2FtZS1vdmVyLWVycm9yLXNjb3Jlcy1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBSRVRSWV9MT0FEX1NDT1JFU19CVVRUT046IFwiZ2FtZS1vdmVyLXJldHJ5LWxvYWQtc2NvcmVzXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgR1JPVVBfUExBWUVSX0FMSUFTOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ09OVEFJTkVSOiBcInBsYXllci1hbGlhcy1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBJTlBVVDogXCJwbGF5ZXItYWxpYXMtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBTS0lQX0JVVFRPTjogXCJwbGF5ZXItYWxpYXMtc2tpcC1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBTVUJNSVRfQlVUVE9OOiBcInBsYXllci1hbGlhcy1zdWJtaXQtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgR1JPVVBfU0VMRUNUX1BMQVlFUjoge1xyXG4gICAgICAgICAgICAgICAgICAgIENPTlRBSU5FUjogXCJzZWxlY3QtcGxheWVyLWRpYWxvZy1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBDQVJPVVNFTDogXCJzZWxlY3QtcGxheWVyLWRpYWxvZy1jYXJvdXNlbC1zY3JvbGwtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ0FST1VTRUxfTkFWX0xFRlQ6IFwic2VsZWN0LXBsYXllci1kaWFsb2ctY2Fyb3VzZWwtbmF2LWxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBDQVJPVVNFTF9OQVZfUklHSFQ6IFwic2VsZWN0LXBsYXllci1kaWFsb2ctY2Fyb3VzZWwtbmF2LXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgTkFNRV9ESVNQTEFZOiBcInNlbGVjdC1wbGF5ZXItZGlhbG9nLXBsYXllci1uYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQlVUVE9OX1NVQk1JVDogXCJzZWxlY3QtcGxheWVyLWRpYWxvZy1zdWJtaXQtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRVNDX0lDT046IFwic2VsZWN0LXBsYXllci1kaWFsb2ctZXNjXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBMT0FESU5HX1NDUkVFTjoge1xyXG4gICAgICAgICAgICAgICAgUFJPR1JFU1M6IFwibG9hZGluZy1wcm9ncmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgUFJPR1JFU1NfTEFCRUw6IFwibG9hZGluZy1wcm9ncmVzcy1sYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgUFJPR1JFU1NfTEFCRUxfQ09OVEFJTkVSOiBcImxvYWRpbmctcHJvZ3Jlc3MtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIElOVFJPX1NDUkVFTjoge1xyXG4gICAgICAgICAgICAgICAgQ09OVEFJTkVSOiBcImdhbWUtaW50cm8tY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBQQU5FTDogXCJnYW1lLWludHJvLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgU1RBUlRfQlVUVE9OOiBcInN0YXJ0LWJ0blwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBJTl9HQU1FX0lORk9fU0NSRUVOOiB7XHJcbiAgICAgICAgICAgICAgICBDT05UQUlORVI6IFwiaW4tZ2FtZS1pbmZvLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgUEFVU0VfQlVUVE9OOiBcImluLWdhbWUtaW5mby1wYXVzZS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgIE1VVEVfQlVUVE9OOiBcImluLWdhbWUtaW5mby1tdXRlLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgU0NPUkVfQ09OVEFJTkVSOiBcImluLWdhbWUtaW5mby1zY29yZS1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgIFNDT1JFX0xBQkVMOiBcImluLWdhbWUtaW5mby1zY29yZS1sYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgSElUX0NPTExFQ1RBQkxFOiBcImluLWdhbWUtaW5mby1oaXQtY29sbGVjdGFibGVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQ09OVFJPTF9UVVRPUklBTDoge1xyXG4gICAgICAgICAgICAgICAgQ09OVEFJTkVSOiBcImNvbnRyb2wtdHV0b3JpYWwtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBJTUFHRTogXCJjb250cm9sLXR1dG9yaWFsLWltZ1wiLFxyXG4gICAgICAgICAgICAgICAgTEFCRUw6IFwiY29udHJvbC10dXRvcmlhbC1sYWJlbFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBNSVNDOiB7XHJcbiAgICAgICAgICAgICAgICBUT1VDSF9DT05UUk9MTEVSOiBcInRvdWNoLWNvbnRyb2xsZXJcIixcclxuICAgICAgICAgICAgICAgIEdBTUVfQ09OVEFJTkVSOiBcImdhbWUtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBNT0NLX1VQX0NPTlRBSU5FUjogXCJtb2NrLXVwLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5FVkVOVF9LRVlTID0ge1xyXG4gICAgICAgICAgICBHQU1FX1JFQURZOiBcImdhbWUtcmVhZHlcIixcclxuICAgICAgICAgICAgR0FNRV9PVkVSOiBcImdhbWUtb3ZlclwiLFxyXG4gICAgICAgICAgICBORVdfTE9DQUxfSElHSFNDT1JFOiBcIm5ldy1sb2NhbC1oaWdoc2NvcmVcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuS0VZX0NPREVTID0ge1xyXG4gICAgICAgICAgICBqdW1wOiAzMixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuR0FNRV9QTEFZID0ge1xyXG4gICAgICAgICAgICBwb2ludHNQZXJTZWNvbmQ6IDIwLFxyXG4gICAgICAgICAgICBwb2ludHNQZXJDb2xsZWN0YWJsZTogNTAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLklNQUdFUyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwicmV3YXJkLXN0YXJcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvc3Rhci5wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZGVzaWduX2ludHJvX2JnXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL2ludHJvLWJnLnN2Z1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJkZXNpZ25fZ2FtZV9vdmVyX2JnXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL2Rlc2lnbl9nYW1lX292ZXJfYmcuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImljb25QbGF5XCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL3BsYXktZmlsbC5zdmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWNvblBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL3BhdXNlLWZpbGwuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImljb25NdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL3ZvbHVtZS1tdXRlLWZpbGwuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImljb25Tb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy92b2x1bWUtdXAtZmlsbC5zdmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwibWVkYWxGaXJzdFwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9tZWRhbC1maXJzdC5zdmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwibWVkYWxTZWNvbmRcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvbWVkYWwtc2Vjb25kLnN2Z1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJtZWRhbFRoaXJkXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL21lZGFsLXRoaXJkLnN2Z1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJ0b3VjaC1pbmRpY2F0b3JcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvdG91Y2gtaW5kaWNhdG9yLmdpZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJzcGFjZWJhci1pbmRpY2F0b3JcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvc3BhY2ViYXItaW5kaWNhdG9yLmdpZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5BVURJT1MgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIm1haW4tdGhlbWVcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvbWFpbi10aGVtZS5tcDNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZ2FtZS1vdmVyXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL2dhbWUtb3Zlci5tcDNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwianVtcFwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9qdW1wLm1wM1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjb2xsZWN0YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9jb2xsZWN0YWJsZS5tcDNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL2J1dHRvbi5tcDNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwibmV3LWluZ2FtZS1oaWdoc2NvcmVcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvbmV3LWluZ2FtZS1oaWdoc2NvcmUyLm1wM1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5CQUNLR1JPVU5EX1RFTVBMQVRFUyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYmNrZ3JuZF8xXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDU2NDYsIGg6IDQwMCB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9iY2tncm5kXzEuanBnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLkNPTExFQ1RBQkxFU19URU1QTEFURVMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNsY3RfMVwiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiA1OSwgaDogMTk3IH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL2NsY3RfMS5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiAwLCB5T2ZmOiAwLCB3OiA1OSwgaDogMTk3IH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjbGN0XzJcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvY2xjdF8yLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAxMTAsIGg6IDE5NiB9LFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFt7IHhPZmY6IDAsIHlPZmY6IDAsIHc6IDExMCwgaDogMTk2IH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjbGN0XzNcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvY2xjdF8zLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiA2MiwgaDogMTg5IH0sXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW3sgeE9mZjogMCwgeU9mZjogMCwgdzogNjIsIGg6IDE4OSB9XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuT0JTVEFDTEVTX0dSTkRfVEVNUExBVEVTID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJvYnN0X2Rpc2hlc1wiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAyNzcsIGg6IDE2MiB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9vYnN0X2Rpc2hlcy5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiA3NywgeU9mZjogMzIsIHc6IDE4MCwgaDogMTMwIH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJvYnN0X2xhdW5kcmV5XCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDMwNSwgaDogMjQ3IH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL29ic3RfbGF1bmRyZXkucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW3sgeE9mZjogMTAsIHlPZmY6IDcwLCB3OiAyOTUsIGg6IDE3NyB9XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwib2JzdF9waWdlb25fZ3JvdW5kXzFcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogMjE3LCBoOiAxNzYgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvb2JzdF9waWdlb25fZ3JvdW5kXzEucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeE9mZjogMTcsIHlPZmY6IDE2LCB3OiA5MCwgaDogMTYwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4T2ZmOiAxNywgeU9mZjogOTAsIHc6IDIwMCwgaDogODYgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIm9ic3RfcGlnZW9uX2dyb3VuZF8yXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDE5OCwgaDogMTc2IH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL29ic3RfcGlnZW9uX2dyb3VuZF8yLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHhPZmY6IDAsIHlPZmY6IDAsIHc6IDc1LCBoOiAxNzYgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHhPZmY6IDAsIHlPZmY6IDEyMCwgdzogMTkwLCBoOiA1NiB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwib2JzdF90cmFzaF8xXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDMzNywgaDogMTM2IH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL29ic3RfdHJhc2hfMS5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiAwLCB5T2ZmOiA0MCwgdzogMzM3LCBoOiA5NiB9XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwib2JzdF90cmFzaF8yXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDMwNCwgaDogMjM4IH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL29ic3RfdHJhc2hfMi5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiAwLCB5T2ZmOiAxMzgsIHc6IDMwNCwgaDogMTAwIH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5QTEFZRVJfVEVNUExBVEVTID0gW1xyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgaWQ6IFwiY2hfYWxleFwiLFxyXG4gICAgICAgICAgICAvLyAgIGRpbWVuc2lvbnM6IHsgdzogMjY5LjIsIGg6IDI1MCB9LFxyXG4gICAgICAgICAgICAvLyAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvY2hfYWxleC5wbmdcIixcclxuICAgICAgICAgICAgLy8gICBoaXRCb3hlczogW3sgeE9mZjogMTMuNjcsIHlPZmY6IDAsIHc6IDMwLjEsIGg6IDI1MCB9XSxcclxuICAgICAgICAgICAgLy8gICBkaXNwbGF5TmFtZTogXCJBbGV4XCIsXHJcbiAgICAgICAgICAgIC8vICAgZnJhbWVzOiA0LFxyXG4gICAgICAgICAgICAvLyAgIGZyYW1lV2lkdGg6IDY3LjMsXHJcbiAgICAgICAgICAgIC8vICAgY2FuSnVtcDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gICBydW5uaW5nOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAvLyAgICAgZW5kRnJhbWU6IDEsXHJcbiAgICAgICAgICAgIC8vICAgICBtc1BlckZyYW1lOiAxNTAsXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gICBqdW1waW5nOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBzdGFydEZyYW1lOiAyLFxyXG4gICAgICAgICAgICAvLyAgICAgZW5kRnJhbWU6IDIsXHJcbiAgICAgICAgICAgIC8vICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgY3Jhc2hlZDoge1xyXG4gICAgICAgICAgICAvLyAgICAgc3RhcnRGcmFtZTogMyxcclxuICAgICAgICAgICAgLy8gICAgIGVuZEZyYW1lOiAzLFxyXG4gICAgICAgICAgICAvLyAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjaF9hbGV4XzJcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogMTM2OCwgaDogMjUwIH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiL2Fzc2V0cy91cGxvYWRzL2NoX2FsZXhfMi5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiAyNy42NywgeU9mZjogMCwgdzogMzAuMSwgaDogMjQwIH1dLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQWxleFwiLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiA4LFxyXG4gICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogMTcxLFxyXG4gICAgICAgICAgICAgICAgY2FuSnVtcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bm5pbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGp1bXBpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jhc2hlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNoX29saVwiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAzNDAsIGg6IDIzMCB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9jaF9vbGkucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW3sgeE9mZjogMjguODMsIHlPZmY6IDE2Ljg4LCB3OiAzMi43NiwgaDogMjE1LjggfV0sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJPbGlcIixcclxuICAgICAgICAgICAgICAgIGZyYW1lczogNCxcclxuICAgICAgICAgICAgICAgIGZyYW1lV2lkdGg6IDg1LFxyXG4gICAgICAgICAgICAgICAgY2FuSnVtcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bm5pbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDE1MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBqdW1waW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogMixcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogMixcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyYXNoZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjaF9uaWNvXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDE1MzAsIGg6IDI1MCB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9jaF9uaWNvLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFt7IHhPZmY6IDQzLjgzLCB5T2ZmOiA1LCB3OiAyOC43NiwgaDogMjQwIH1dLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiTmljb1wiLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiA5LFxyXG4gICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogMTcwLFxyXG4gICAgICAgICAgICAgICAgY2FuSnVtcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bm5pbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDYwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGp1bXBpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jhc2hlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNoX2xvdHRlXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDE5MzUsIGg6IDI1MCB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi9hc3NldHMvdXBsb2Fkcy9jaF9sb3R0ZS5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiA4NSwgeU9mZjogNSwgdzogMjguNzYsIGg6IDI0MCB9XSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkxvdHRlXCIsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogMTkzLjUsXHJcbiAgICAgICAgICAgICAgICBjYW5KdW1wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcnVubmluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogNjUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAganVtcGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcmFzaGVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogOSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogOSxcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiY2hfcHJhbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAxMDY5LCBoOiAyMDAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCIvYXNzZXRzL3VwbG9hZHMvY2hfcHJhbGluZS5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiA1MCwgeU9mZjogMTAwLCB3OiA5MCwgaDogMTAwIH1dLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiUHJhbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiA1LFxyXG4gICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogMjEzLjgsXHJcbiAgICAgICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJ1bm5pbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGp1bXBpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jhc2hlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL21vZGVsL0dhbWVcIjtcclxuaW1wb3J0IHsgQXNzZXRSZXBvc2l0b3J5IH0gZnJvbSBcIi4vYXNzZXRzL0Fzc2V0UmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBBdWRpb1BsYXllciB9IGZyb20gXCIuL2F1ZGlvL0F1ZGlvUGxheWVyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTY3JlZW4gfSBmcm9tIFwiLi92aWV3L0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IHsgR2FtZU92ZXJTY3JlZW4gfSBmcm9tIFwiLi92aWV3L0dhbWVPdmVyU2NyZWVuXCI7XHJcbmltcG9ydCB7IEludHJvU2NyZWVuIH0gZnJvbSBcIi4vdmlldy9JbnRyb1NjcmVlblwiO1xyXG5pbXBvcnQgeyBJbkdhbWVJbmZvU2NyZWVuIH0gZnJvbSBcIi4vdmlldy9JbkdhbWVJbmZvU2NyZWVuXCI7XHJcbmltcG9ydCB7IENvbnRyb2xUdXRvcmlhbCB9IGZyb20gXCIuL3ZpZXcvQ29udHJvbFR1dG9yaWFsXCI7XHJcbmltcG9ydCB7IFVzZXJDb250cm9scyB9IGZyb20gXCIuL21vZGVsL1VzZXJDb250cm9sc1wiO1xyXG5pbXBvcnQgeyBTY29yZU1hbmFnZXIgfSBmcm9tIFwiLi9zY29yZS9TY29yZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXNlck1hbmFnZXIgfSBmcm9tIFwiLi9Vc2VyTWFuYWdlclwiO1xyXG4vKipcclxuICogQWN0cyBhcyB0aGUgY29udHJvbGxlciBiZXR3ZWVuIE1vZGVsIChHYW1lLnRzKSBhbmQgVmlldyAoc2NyZWVucy8qLnRzKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBuZXcgQ29uZmlnKCk7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9zaXRvcnkgPSBuZXcgQXNzZXRSZXBvc2l0b3J5KHRoaXMuQ09ORklHLklNQUdFUywgdGhpcy5DT05GSUcuQVVESU9TLCBuZXcgQXJyYXkoLi4udGhpcy5DT05GSUcuQkFDS0dST1VORF9URU1QTEFURVMsIC4uLnRoaXMuQ09ORklHLkNPTExFQ1RBQkxFU19URU1QTEFURVMsIC4uLnRoaXMuQ09ORklHLk9CU1RBQ0xFU19HUk5EX1RFTVBMQVRFUywgLi4udGhpcy5DT05GSUcuUExBWUVSX1RFTVBMQVRFUykpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBuZXcgQXVkaW9QbGF5ZXIodGhpcy5hc3NldFJlcG9zaXRvcnkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuQ09ORklHLCB0aGlzLCB0aGlzLmF1ZGlvUGxheWVyLCB0aGlzLmFzc2V0UmVwb3NpdG9yeSk7XHJcbiAgICAgICAgdGhpcy5zY29yZU1hbmFnZXIgPSBuZXcgU2NvcmVNYW5hZ2VyKHRoaXMuQ09ORklHKTtcclxuICAgICAgICB0aGlzLnVzZXJNYW5hZ2VyID0gbmV3IFVzZXJNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjcmVlbnMoKTtcclxuICAgICAgICB0aGlzLnNldHVwQ29udHJvbHMoKTtcclxuICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLmFjdGl2YXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zdGFydEdhbWUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvdWNoQ29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluR2FtZUluZm9TY3JlZW4uc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUdXRvcmlhbC5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwibWFpbi10aGVtZVwiLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUucmVzdGFydCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4uaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluR2FtZUluZm9TY3JlZW4uc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUdXRvcmlhbC5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwibWFpbi10aGVtZVwiLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHBhdXNlR2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLnBhdXNlR2FtZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGF1c2VQbGF5YmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmVzdW1lR2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLnJlc3VtZUdhbWUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLnJlc3VtZVBsYXliYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRNdXRlZChtdXRlZCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIuc2V0TXV0ZShtdXRlZCk7XHJcbiAgICB9XHJcbiAgICBzZXRDaGFyYWN0ZXIoaWQpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2V0Q2hhcmFjdGVyKGlkKTtcclxuICAgIH1cclxuICAgIGdldEdhbWVTdGF0ZURBTygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmdldFN0YXRlQXNEQU8oKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFNjb3JlTWFuYWdlckRBTygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZU1hbmFnZXIuZ2V0U2NvcmVNYW5hZ2VyREFPKCk7XHJcbiAgICB9XHJcbiAgICBvbkdhbWVSZWFkeShnYW1lU3RhdGVEYW8pIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuaW50cm9TY3JlZW4uc2hvdygpO1xyXG4gICAgfVxyXG4gICAgb25HYW1lT3ZlcihnYW1lU3RhdGVEYW8pIHtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLnN0b3BTb3VuZChcIm1haW4tdGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJnYW1lLW92ZXJcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVUb3VjaENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLmluR2FtZUluZm9TY3JlZW4uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFR1dG9yaWFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLnNob3coKTtcclxuICAgICAgICBpZiAodGhpcy51c2VyTWFuYWdlci5nZXRQbGF5ZXJBbGlhcygpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclNjb3JlVXBsb2FkQW5kVGFibGVVcGRhdGUoZ2FtZVN0YXRlRGFvKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy51c2VyTWFuYWdlci5nZXRJc1dhaXRpbmdGb3JBbGlhcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4uZ2V0UGxheWVyQWxpYXMoKS50aGVuKChhbGlhcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsaWFzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyTWFuYWdlci5zZXRQbGF5ZXJBbGlhcyhhbGlhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyU2NvcmVVcGxvYWRBbmRUYWJsZVVwZGF0ZShnYW1lU3RhdGVEYW8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyTWFuYWdlci5zZXRXYWl0aW5nRm9yQWxpYXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4udHJpZ2dlclNjb3JlVGFibGVVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLnRyaWdnZXJTY29yZVRhYmxlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJpZ2dlclNjb3JlVXBsb2FkQW5kVGFibGVVcGRhdGUoZ2FtZVN0YXRlRGFvKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZU1hbmFnZXJcclxuICAgICAgICAgICAgLnVwbG9hZFNjb3JlKGdhbWVTdGF0ZURhby5jdXJyZW50U2NvcmUsIHRoaXMudXNlck1hbmFnZXIuZ2V0UGxheWVyQWxpYXMoKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5nYW1lT3ZlclNjcmVlbi50cmlnZ2VyU2NvcmVUYWJsZVVwZGF0ZSgpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5nYW1lT3ZlclNjcmVlbi50cmlnZ2VyU2NvcmVUYWJsZVVwZGF0ZSgpKTtcclxuICAgIH1cclxuICAgIG9uTmV3TG9jYWxIaWdoc2NvcmUoZ2FtZVN0YXRlRGFvKSB7XHJcbiAgICAgICAgdGhpcy5pbkdhbWVJbmZvU2NyZWVuLm5vdGlmeU5ld0hpZ2hzY29yZSgpO1xyXG4gICAgfVxyXG4gICAgb25IaXRDb2xsZWN0YWJsZShnYW1lU3RhdGVEYW8pIHtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImNvbGxlY3RhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuaW5HYW1lSW5mb1NjcmVlbi5ub3RpZnlIaXRDb2xsZWN0YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0dXBTY3JlZW5zKCkge1xyXG4gICAgICAgIC8vIFRPRE8gREFPXHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbiA9IG5ldyBHYW1lT3ZlclNjcmVlbih0aGlzLkNPTkZJRywgdGhpcywgdGhpcy5hdWRpb1BsYXllciwgdGhpcy5hc3NldFJlcG9zaXRvcnkpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbiA9IG5ldyBMb2FkaW5nU2NyZWVuKHRoaXMuQ09ORklHLCB0aGlzLCB0aGlzLmFzc2V0UmVwb3NpdG9yeSwgdGhpcy5hdWRpb1BsYXllcik7XHJcbiAgICAgICAgdGhpcy5pbnRyb1NjcmVlbiA9IG5ldyBJbnRyb1NjcmVlbih0aGlzLkNPTkZJRywgdGhpcywgdGhpcy5hdWRpb1BsYXllcik7XHJcbiAgICAgICAgdGhpcy5pbkdhbWVJbmZvU2NyZWVuID0gbmV3IEluR2FtZUluZm9TY3JlZW4odGhpcy5DT05GSUcsIHRoaXMsIHRoaXMuYXNzZXRSZXBvc2l0b3J5LCB0aGlzLmF1ZGlvUGxheWVyKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xUdXRvcmlhbCA9IG5ldyBDb250cm9sVHV0b3JpYWwodGhpcy5DT05GSUcsIHRoaXMsIHRoaXMuYXNzZXRSZXBvc2l0b3J5KTtcclxuICAgIH1cclxuICAgIHNldHVwQ29udHJvbHMoKSB7XHJcbiAgICAgICAgLy8gVE9ETyBubyBlZmZlY3RcclxuICAgICAgICB0aGlzLmlzTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuTUlTQy5UT1VDSF9DT05UUk9MTEVSKTtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyIGxpc3RlbmVyc1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlRXZlbnRzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudG91Y2hDb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlRXZlbnRzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUV2ZW50cy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gVE9ETyBkb2VzIG5vdCB3b3JrXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmJsdXJcIiwgdGhpcy5wYXVzZUdhbWUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbkZvY3VzXCIsIHRoaXMucmVzdW1lR2FtZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGxvYWRBc3NldHMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuLnNob3coKTtcclxuICAgICAgICB0aGlzLmFzc2V0UmVwb3NpdG9yeS5mZXRjaEFzc2V0cygpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zZXRSZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbi5ub3RpZnlBc3NldHNMb2FkZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gbG9hZCBhc3NldHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUV2ZW50cyhlKSB7XHJcbiAgICAgICAgaWYgKChlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSA9PSB0aGlzLkNPTkZJRy5LRVlfQ09ERVMuanVtcCkgfHxcclxuICAgICAgICAgICAgZS50eXBlID09IFwidG91Y2hzdGFydFwiKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmhhbmRsZVVzZXJDb250cm9sKFVzZXJDb250cm9scy5TVEFSVF9KVU1QKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGUudHlwZSA9PT0gXCJrZXl1cFwiICYmIGUua2V5Q29kZSA9PSB0aGlzLkNPTkZJRy5LRVlfQ09ERVMuanVtcCkgfHxcclxuICAgICAgICAgICAgZS50eXBlID09IFwidG91Y2hlbmRcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5oYW5kbGVVc2VyQ29udHJvbChVc2VyQ29udHJvbHMuRU5EX0pVTVApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZFRvdWNoQ29udHJvbGxlcigpIHtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlci5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlbW92ZVRvdWNoQ29udHJvbGxlcigpIHtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250b2xsZXJcIjtcclxuLyoqXHJcbiAqIElzIGVudHJ5IHBvaW50IHRvIHRoZSBnYW1lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV2dTaW11bGF0b3JNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcbiAgICBzZXRDaGFyYWN0ZXIoaWQpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0Q2hhcmFjdGVyKGlkKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVXNlck1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbGlhcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1dhaXRpbmdGb3JBbGlhcyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRQbGF5ZXJBbGlhcyhhbGlhcykge1xyXG4gICAgICAgIHRoaXMucGxheWVyQWxpYXMgPSBhbGlhcztcclxuICAgIH1cclxuICAgIGdldFBsYXllckFsaWFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckFsaWFzO1xyXG4gICAgfVxyXG4gICAgc2V0V2FpdGluZ0ZvckFsaWFzKHdhaXRpbmcpIHtcclxuICAgICAgICB0aGlzLmlzV2FpdGluZ0ZvckFsaWFzID0gd2FpdGluZztcclxuICAgIH1cclxuICAgIGdldElzV2FpdGluZ0ZvckFsaWFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzV2FpdGluZ0ZvckFsaWFzO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBBc3NldFJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2VDb25maWcsIGF1ZGlvQ29uZmlnLCBkcmF3YWJsZU9iamVjdFRlbXBsYXRlcykge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDb25maWcgPSBpbWFnZUNvbmZpZztcclxuICAgICAgICB0aGlzLmF1ZGlvQ29uZmlnID0gYXVkaW9Db25maWc7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZU9iamVjdFRlbXBsYXRlcyA9IGRyYXdhYmxlT2JqZWN0VGVtcGxhdGVzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZBc3NldHMgPVxyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ29uZmlnLmxlbmd0aCArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ29uZmlnLmxlbmd0aCArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGdldEltYWdlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzLmdldChpZCk7XHJcbiAgICB9XHJcbiAgICBnZXRBdWRpbyhpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvcy5nZXQoaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmltYWdlcy5zaXplICsgdGhpcy5hdWRpb3Muc2l6ZSkgLyB0aGlzLm51bWJlck9mQXNzZXRzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZmV0Y2hBc3NldHMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDb25maWcuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5mZXRjaEJhc2ljSW1hZ2UoaW1hZ2UuaWQsIGltYWdlLmltYWdlUGF0aCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3YWJsZU9iamVjdFRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmZldGNoRHJhd2FibGVPYmplY3RUZW1wbGF0ZUltYWdlKHRlbXBsYXRlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ29uZmlnLmZvckVhY2goKGF1ZGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZmV0Y2hCYXNpY0F1ZGlvKGF1ZGlvLmlkLCBhdWRpby5pbWFnZVBhdGgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGZldGNoQmFzaWNJbWFnZShpZCwgcGF0aCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIGltYWdlLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjsgLy8gaXMgdGhpc1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBwYXRoO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5zZXQoaWQsIGltYWdlKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZldGNoRHJhd2FibGVPYmplY3RUZW1wbGF0ZUltYWdlKGRyYXdhYmxlT2JqZWN0VGVtcGxhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAvLyBpbWFnZS5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7IC8vIGlzIHRoaXNcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZHJhd2FibGVPYmplY3RUZW1wbGF0ZS5pbWFnZVBhdGg7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnNldChkcmF3YWJsZU9iamVjdFRlbXBsYXRlLmlkLCBpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBkcmF3YWJsZU9iamVjdFRlbXBsYXRlLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBUb2RvIGRvZXMgbm90IHdvcmsgd2hlbiBhY2Nlc3NpbmcgZmlsZSBmcm9tIGZpbGUgc3lzdGVtIGluc3RlYWQgb2YgYmFzaWMgc2VydmVyXHJcbiAgICBhc3luYyBmZXRjaEJhc2ljQXVkaW8oaWQsIHBhdGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaChwYXRoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChhcnJheUJ1ZmZlcikgPT4gdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmZmVyKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChhdWRpbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb3Muc2V0KGlkLCBhdWRpbyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGF1ZGlvKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi9Tb3VuZFwiO1xyXG5leHBvcnQgY2xhc3MgQXVkaW9QbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXNzZXRSZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9zaXRvcnkgPSBhc3NldFJlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5zb3VuZHNCeUtleSA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBsYXliYWNrSXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzTXV0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHBsYXlTb3VuZChrZXksIGxvb3AgPSBmYWxzZSwgdXNlRXhpc3RpbmdJZkV4aXN0ID0gZmFsc2UpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5jaGVja1N1c3BlbmRlZCgpO1xyXG4gICAgICAgIGNvbnN0IHNvdW5kQnVmZmVyID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0QXVkaW8oa2V5KTtcclxuICAgICAgICBpZiAoc291bmRCdWZmZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzb3VuZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodXNlRXhpc3RpbmdJZkV4aXN0KSB7XHJcbiAgICAgICAgICAgIHNvdW5kID0gKF9hID0gdGhpcy5zb3VuZHNCeUtleS5nZXQoa2V5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc291bmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzb3VuZCA9IG5ldyBTb3VuZChrZXksIHRoaXMuYXVkaW9Db250ZXh0LCBzb3VuZEJ1ZmZlciwgbG9vcCwgdGhpcy5pc011dGVkLCB0aGlzLmNsZWFuVXBTb3VuZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNvdW5kc0J5S2V5LmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kc0J5S2V5LnNldChrZXksIFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNvdW5kc0J5S2V5LmdldChrZXkpLnB1c2goc291bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucGxheWJhY2tJc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBzb3VuZC5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdG9wU291bmQoa2V5LCBzdG9wQWxsID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNvdW5kcyA9IHRoaXMuc291bmRzQnlLZXkuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKHNvdW5kcyA9PT0gdW5kZWZpbmVkIHx8IHNvdW5kcy5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChzdG9wQWxsKSB7XHJcbiAgICAgICAgICAgIHNvdW5kcy5mb3JFYWNoKChzb3VuZCkgPT4gc291bmQuc3RvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNvdW5kc1swXS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcGF1c2VQbGF5YmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5YmFja0lzUGF1c2VkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF5YmFja0lzUGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNvdW5kc0J5S2V5LmZvckVhY2goKHNvdW5kcykgPT4gc291bmRzLmZvckVhY2goKHNvdW5kKSA9PiBzb3VuZC5wYXVzZSgpKSk7XHJcbiAgICB9XHJcbiAgICByZXN1bWVQbGF5YmFjaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWJhY2tJc1BhdXNlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxheWJhY2tJc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc291bmRzQnlLZXkuZm9yRWFjaCgoc291bmRzKSA9PiBzb3VuZHMuZm9yRWFjaCgoc291bmQpID0+IHNvdW5kLnJlc3VtZSgpKSk7XHJcbiAgICB9XHJcbiAgICBzZXRNdXRlKG11dGVTb3VuZCkge1xyXG4gICAgICAgIHRoaXMuaXNNdXRlZCA9IG11dGVTb3VuZDtcclxuICAgICAgICBpZiAobXV0ZVNvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRzQnlLZXkuZm9yRWFjaCgoc291bmRzKSA9PiBzb3VuZHMuZm9yRWFjaCgoc291bmQpID0+IHNvdW5kLm11dGUoKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZHNCeUtleS5mb3JFYWNoKChzb3VuZHMpID0+IHNvdW5kcy5mb3JFYWNoKChzb3VuZCkgPT4gc291bmQudW5tdXRlKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrU3VzcGVuZGVkKCk7XHJcbiAgICB9XHJcbiAgICBjaGVja1N1c3BlbmRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHQucmVzdW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYW5VcFNvdW5kKHNvdW5kKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLnNvdW5kc0J5S2V5LmdldChzb3VuZC5nZXRLZXkoKSk7XHJcbiAgICAgICAgaWYgKGFycmF5ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2Yoc291bmQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTb3VuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXksIGF1ZGlvQ29udGV4dCwgYXVkaW9CdWZmZXIsIGxvb3BBdWRpbyA9IGZhbHNlLCBpc011dGVkID0gZmFsc2UsIGF1ZGlvQ29uY2x1ZGVkQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLk1JTExJU19JTl9TRUNPTkQgPSAxMDAwO1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xyXG4gICAgICAgIHRoaXMuYXVkaW9CdWZmZXIgPSBhdWRpb0J1ZmZlcjtcclxuICAgICAgICB0aGlzLmxvb3BBdWRpbyA9IGxvb3BBdWRpbztcclxuICAgICAgICB0aGlzLmVsYXBzZWRQbGF5aW5nVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzTXV0ZWQgPSBpc011dGVkO1xyXG4gICAgICAgIHRoaXMuYXVkaW9Db25jbHVkZWRDYWxsYmFjayA9IGF1ZGlvQ29uY2x1ZGVkQ2FsbGJhY2s7XHJcbiAgICB9XHJcbiAgICBnZXRLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgfVxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFzdFJlc3VtZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFdlIGNhbiBvbmx5IGNhbGwgYnVmZmVyc291cmNlLnN0YXJ0KCkgb25jZS4gVGhhdCBpcyB3aHkgd2UgaGF2ZSB0byByZWluaXRpYWxpemVcclxuICAgICAgICAgKiB0aGUgYnVmZmVyc291cmNlIGZvciBlYWNoIGNhbGwgdG8gcGxheSgpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnVmZmVyU291cmNlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXJTb3VyY2UubG9vcCA9IHRoaXMubG9vcEF1ZGlvO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyU291cmNlLmJ1ZmZlciA9IHRoaXMuYXVkaW9CdWZmZXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTXV0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXJTb3VyY2UuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvQ29uY2x1ZGVkQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5sb29wQXVkaW8pIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZVRvUGxheSA9IHRoaXMuYXVkaW9CdWZmZXIuZHVyYXRpb24gKiB0aGlzLk1JTExJU19JTl9TRUNPTkQgLVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFwc2VkUGxheWluZ1RpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmF1ZGlvQ29uY2x1ZGVkQ2FsbGJhY2sodGhpcyksIHRpbWVUb1BsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSB0aGlzLmVsYXBzZWRQbGF5aW5nVGltZSA9PSAwXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuZWxhcHNlZFBsYXlpbmdUaW1lIC8gdGhpcy5NSUxMSVNfSU5fU0VDT05EO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyU291cmNlLnN0YXJ0KDAsIHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsYXBzZWRQbGF5aW5nVGltZSA9XHJcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZFBsYXlpbmdUaW1lICsgKERhdGUubm93KCkgLSB0aGlzLmxhc3RSZXN1bWVUaW1lKTtcclxuICAgICAgICBpZiAodGhpcy5sb29wQXVkaW8pIHtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkUGxheWluZ1RpbWUgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFwc2VkUGxheWluZ1RpbWUgJVxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmF1ZGlvQnVmZmVyLmR1cmF0aW9uICogdGhpcy5NSUxMSVNfSU5fU0VDT05EKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsbEJhY2tUaW1lb3V0KTtcclxuICAgICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5zdG9wKCk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZFBsYXlpbmdUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyU291cmNlLnN0b3AoKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxsQmFja1RpbWVvdXQpO1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvQ29uY2x1ZGVkQ2FsbGJhY2sgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0NvbmNsdWRlZENhbGxiYWNrKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgbXV0ZSgpIHtcclxuICAgICAgICB0aGlzLmlzTXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyU291cmNlLmRpc2Nvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoRE9NRXhjZXB0aW9uKSB7IH1cclxuICAgIH1cclxuICAgIHVubXV0ZSgpIHtcclxuICAgICAgICB0aGlzLmlzTXV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKERPTUV4Y2VwdGlvbikgeyB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NvcmUgfSBmcm9tIFwiLi9Mb2NhbFNjb3JlXCI7XHJcbmltcG9ydCB7IENhbnZhc0FydGlzdCB9IGZyb20gXCIuLi9DYW52YXNBcnRpc3RcIjtcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tIFwiLi93b3JsZC9Xb3JsZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9tb2RlbC93b3JsZC9kcmF3YWJsZS9EcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udHJvbHMgfSBmcm9tIFwiLi9Vc2VyQ29udHJvbHNcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlcyB9IGZyb20gXCIuL0dhbWVTdGF0ZXNcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlREFPIH0gZnJvbSBcIi4vR2FtZVN0YXRlREFPXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgY29udHJvbGxlciwgYXVkaW9QbGF5ZXIsIGFzc2V0UmVwb3NpdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgdzogMCwgaDogMCB9O1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9zaXRvcnkgPSBhc3NldFJlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLnNjb3JlQm9hcmQgPSBuZXcgU2NvcmUoKTtcclxuICAgICAgICB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5ID1cclxuICAgICAgICAgICAgbmV3IERyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5KHRoaXMuQ09ORklHKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZXMuSURMRTtcclxuICAgIH1cclxuICAgIHNldHVwQ2FudmFzKCkge1xyXG4gICAgICAgIC8vIFRPRE8gcmVtb3ZlIGhhcmQgY29kZWQgaGVpZ2h0XHJcbiAgICAgICAgLy8gV0FSTiBhbHRlcmVkIGZvciBwb3J0Zm9saW8gZGVtb1xyXG4gICAgICAgIC8vIHRoaXMuc2V0RGltZW5zaW9ucygpO1xyXG4gICAgICAgIGNvbnN0IG1vY2t1cFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5NSVNDLk1PQ0tfVVBfQ09OVEFJTkVSKS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMudyA9IG1vY2t1cFdpZHRoICogMC45MztcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaCA9IDQwMDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuTUlTQy5HQU1FX0NPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gU3RyaW5nKHRoaXMuZGltZW5zaW9ucy5oKSArIFwicHhcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IFN0cmluZyh0aGlzLmRpbWVuc2lvbnMudykgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBDYW52YXNBcnRpc3QuY3JlYXRlQ2FudmFzKHRoaXMuY29udGFpbmVyLCB0aGlzLmRpbWVuc2lvbnMudywgdGhpcy5kaW1lbnNpb25zLmgpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQXJ0aXN0ID0gbmV3IENhbnZhc0FydGlzdCh0aGlzLmRpbWVuc2lvbnMudywgdGhpcy5kaW1lbnNpb25zLmgsIHRoaXMuY3R4KTtcclxuICAgIH1cclxuICAgIHNldFJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMud29ybGQucmVmcmVzaCgwKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZXMuUkVBRFk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEdhbWVSZWFkeUV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBzZXR1cFdvcmxkKCkge1xyXG4gICAgICAgIHRoaXMud29ybGQgPSBuZXcgV29ybGQodGhpcy5DT05GSUcsIHRoaXMuZGltZW5zaW9ucy53LCB0aGlzLmRpbWVuc2lvbnMuaCwgdGhpcy5jdHgsIHRoaXMuZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnksIHRoaXMuYXNzZXRSZXBvc2l0b3J5LCB0aGlzLmF1ZGlvUGxheWVyLCB0aGlzLmluaXRpYWxDaGFyYWN0ZXJJZCk7XHJcbiAgICAgICAgdGhpcy53b3JsZC5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVXNlckNvbnRyb2wodXNlckNvbnRyb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgIT09IEdhbWVTdGF0ZXMuUlVOTklORylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodXNlckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgY2FzZSBVc2VyQ29udHJvbHMuU1RBUlRfSlVNUDpcclxuICAgICAgICAgICAgICAgIHRoaXMud29ybGQuZ2V0UGxheWVyKCkuc3RhcnRKdW1wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVc2VyQ29udHJvbHMuRU5EX0pVTVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkLmdldFBsYXllcigpLmVuZEp1bXAoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcInVuc3VwcG9ydGVkIHVzZXIgaW5wdXQ6IFwiICsgdXNlckNvbnRyb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBpZiAoISh0aGlzLmdhbWVTdGF0ZSA9PT0gR2FtZVN0YXRlcy5SRUFEWSB8fFxyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR2FtZVN0YXRlcy5FTkRFRCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZXMuUlVOTklORztcclxuICAgICAgICB0aGlzLmNhbnZhc0FydGlzdC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMud29ybGQucmVmcmVzaCgwKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oaXRDb2xsZWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5uZXdHYW1lKCk7XHJcbiAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJhZih0aGlzLnJ1bkdhbWUpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgIT09IEdhbWVTdGF0ZXMuRU5ERUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmxkLnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcbiAgICBwYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlICE9PSBHYW1lU3RhdGVzLlJVTk5JTkcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR2FtZVN0YXRlcy5QQVVTRUQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlICE9PSBHYW1lU3RhdGVzLlBBVVNFRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJhZih0aGlzLnJ1bkdhbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZXMuUlVOTklORztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q2hhcmFjdGVyKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud29ybGQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxDaGFyYWN0ZXJJZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53b3JsZC5zZXRDaGFyYWN0ZXIoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN0YXRlQXNEQU8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lU3RhdGVEQU8odGhpcy5zY29yZUJvYXJkLmdldFNjb3JlKCksIHRoaXMuc2NvcmVCb2FyZC5nZXRMb2NhbEhpZ2hTY29yZSgpLCB0aGlzLmdhbWVTdGF0ZSwgdGhpcy53b3JsZC5nZXRDaGFyYWN0ZXJJZCgpKTtcclxuICAgIH1cclxuICAgIHJ1bkdhbWUoKSB7XHJcbiAgICAgICAgLy8gTWVhc3VyZSB0aW1lIGRpZmZlcmVuY2Ugc2luY2UgbGFzdCBmcmFtZVxyXG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGxldCB0aW1lRGlmZiA9IG5vdyAtIHRoaXMudGltZTtcclxuICAgICAgICB0aGlzLnRpbWUgPSBub3c7XHJcbiAgICAgICAgLy8gVXBkYXRlIHNjb3JlIGFuZCBnYW1lIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5zZXRTY29yZSh0aGlzLnNjb3JlQm9hcmQuZ2V0U2NvcmUoKSArXHJcbiAgICAgICAgICAgICh0aW1lRGlmZiAvIDEwMDApICogdGhpcy5DT05GSUcuR0FNRV9QTEFZLnBvaW50c1BlclNlY29uZCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIGFuZCByZWRyYXcgd29ybGRcclxuICAgICAgICB0aGlzLmNhbnZhc0FydGlzdC5jbGVhcigpO1xyXG4gICAgICAgIFt0aGlzLmNvbGxpZGVkLCB0aGlzLmhpdENvbGxlY3RhYmxlXSA9IHRoaXMud29ybGQucmVmcmVzaCh0aW1lRGlmZik7XHJcbiAgICAgICAgLy8gQ2hlY2sgY29sbGVjdGFibGVzXHJcbiAgICAgICAgaWYgKHRoaXMuaGl0Q29sbGVjdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEhpdENvbGxlY3RhYmxlRXZlbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5oaXRDb2xsZWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlQm9hcmQuc2V0U2NvcmUodGhpcy5zY29yZUJvYXJkLmdldFNjb3JlKCkgKyB0aGlzLkNPTkZJRy5HQU1FX1BMQVkucG9pbnRzUGVyQ29sbGVjdGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zY29yZUJvYXJkLmhhc05ld0xvY2FsSGlnaHNjb3JlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaE5ld0xvY2FsSGlnaFNjb3JlRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmFmKHRoaXMucnVuR2FtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSYWYoY2FsbGJhY2ssIHBhcmFtZXRlcikge1xyXG4gICAgICAgIHRoaXMucmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2suYmluZCh0aGlzLCBwYXJhbWV0ZXIpKTtcclxuICAgIH1cclxuICAgIGVuZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGVzLkVOREVEO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hHYW1lT3ZlckV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaEdhbWVSZWFkeUV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5vbkdhbWVSZWFkeSh0aGlzLmdldFN0YXRlQXNEQU8oKSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaE5ld0xvY2FsSGlnaFNjb3JlRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLm9uTmV3TG9jYWxIaWdoc2NvcmUodGhpcy5nZXRTdGF0ZUFzREFPKCkpO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2hHYW1lT3ZlckV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5vbkdhbWVPdmVyKHRoaXMuZ2V0U3RhdGVBc0RBTygpKTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoSGl0Q29sbGVjdGFibGVFdmVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25IaXRDb2xsZWN0YWJsZSh0aGlzLmdldFN0YXRlQXNEQU8oKSk7XHJcbiAgICB9XHJcbiAgICBzZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IHZ3ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IDAsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xyXG4gICAgICAgIGNvbnN0IHZoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLncgPSBNYXRoLm1pbih2dyAqIDAuOSwgdGhpcy5DT05GSUcuU0VUVElOR1MubWF4Q2FudmFzV2lkdGgpO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oID0gTWF0aC5taW4odmggKiAwLjYsIHRoaXMuQ09ORklHLlNFVFRJTkdTLm1heENhbnZhc0hlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZURBTyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8vIGNoYXJhY3RlcklkOiBzdHJpbmcsXHJcbiAgICBjdXJyZW50U2NvcmUsIGxvY2FsSGlnaHNjb3JlLCBzdGF0ZSwgY2hhcmFjdGVySWQpIHtcclxuICAgICAgICAvLyB0aGlzLmNoYXJhY3RlcklkID0gY2hhcmFjdGVySWQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NvcmUgPSBjdXJyZW50U2NvcmU7XHJcbiAgICAgICAgdGhpcy5sb2NhbEhpZ2hzY29yZSA9IGxvY2FsSGlnaHNjb3JlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcklkID0gY2hhcmFjdGVySWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBHYW1lU3RhdGVzO1xyXG4oZnVuY3Rpb24gKEdhbWVTdGF0ZXMpIHtcclxuICAgIEdhbWVTdGF0ZXNbR2FtZVN0YXRlc1tcIklETEVcIl0gPSAwXSA9IFwiSURMRVwiO1xyXG4gICAgR2FtZVN0YXRlc1tHYW1lU3RhdGVzW1wiTE9BRElOR1wiXSA9IDFdID0gXCJMT0FESU5HXCI7XHJcbiAgICBHYW1lU3RhdGVzW0dhbWVTdGF0ZXNbXCJSRUFEWVwiXSA9IDJdID0gXCJSRUFEWVwiO1xyXG4gICAgR2FtZVN0YXRlc1tHYW1lU3RhdGVzW1wiUlVOTklOR1wiXSA9IDNdID0gXCJSVU5OSU5HXCI7XHJcbiAgICBHYW1lU3RhdGVzW0dhbWVTdGF0ZXNbXCJQQVVTRURcIl0gPSA0XSA9IFwiUEFVU0VEXCI7XHJcbiAgICBHYW1lU3RhdGVzW0dhbWVTdGF0ZXNbXCJFTkRFRFwiXSA9IDVdID0gXCJFTkRFRFwiO1xyXG59KShHYW1lU3RhdGVzIHx8IChHYW1lU3RhdGVzID0ge30pKTtcclxuIiwiZXhwb3J0IGNsYXNzIFNjb3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9jYWxIaWdoU2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNGaXJzdEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubmV3SGlnaFNjb3JlV2FzRGlzY292ZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0U2NvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcbiAgICBnZXRMb2NhbEhpZ2hTY29yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbEhpZ2hTY29yZTtcclxuICAgIH1cclxuICAgIHNldFNjb3JlKHNjb3JlKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xyXG4gICAgICAgIGlmIChzY29yZSA+IHRoaXMubG9jYWxIaWdoU2NvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbEhpZ2hTY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV3R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLm5ld0hpZ2hTY29yZVdhc0Rpc2NvdmVyZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbEhpZ2hTY29yZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0R2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE9ubHkgdHJ1ZSBhdCBtYXggb25jZSBwZXIgZ2FtZVxyXG4gICAgaGFzTmV3TG9jYWxIaWdoc2NvcmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5ld0hpZ2hTY29yZVdhc0Rpc2NvdmVyZWQgJiZcclxuICAgICAgICAgICAgIXRoaXMuaXNGaXJzdEdhbWUgJiZcclxuICAgICAgICAgICAgdGhpcy5sb2NhbEhpZ2hTY29yZSA9PT0gdGhpcy5zY29yZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld0hpZ2hTY29yZVdhc0Rpc2NvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgVXNlckNvbnRyb2xzO1xyXG4oZnVuY3Rpb24gKFVzZXJDb250cm9scykge1xyXG4gICAgVXNlckNvbnRyb2xzW1VzZXJDb250cm9sc1tcIlNUQVJUX0pVTVBcIl0gPSAwXSA9IFwiU1RBUlRfSlVNUFwiO1xyXG4gICAgVXNlckNvbnRyb2xzW1VzZXJDb250cm9sc1tcIkVORF9KVU1QXCJdID0gMV0gPSBcIkVORF9KVU1QXCI7XHJcbn0pKFVzZXJDb250cm9scyB8fCAoVXNlckNvbnRyb2xzID0ge30pKTtcclxuIiwiLyoqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciByZWZyZXNoaW5nIGFsbCBEcmF3YWJsZU9iamVjdHMgdGhhdCBvYnNlcnZlIHRoZVxyXG4gKiBBbmltYXRvci5cclxuICogSW1wbGVtZW50cyBvYnNlcnZhYmxlIHBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5zdWJzY3JpYmVBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aW1lRGlmZikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci51cGRhdGUodGltZURpZmYpKTtcclxuICAgIH1cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IG9ic2VydmVyLmRyYXcoY3R4KSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbWF0b3IgfSBmcm9tIFwiLi9BbmltYXRvclwiO1xyXG5pbXBvcnQgeyBDb2xsaXNpb25EZXRlY3RvciB9IGZyb20gXCIuL2NvbGxpc2lvbi9Db2xsaXNpb25EZXRlY3RvclwiO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vZHJhd2FibGUvQmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9kcmF3YWJsZS9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgT2JzdGFjbGUgfSBmcm9tIFwiLi9kcmF3YWJsZS9PYnN0YWNsZVwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0YWJsZUl0ZW0gfSBmcm9tIFwiLi9kcmF3YWJsZS9Db2xsZWN0YWJsZUl0ZW1cIjtcclxuaW1wb3J0IHsgUmV3YXJkRXhwbG9zaW9uIH0gZnJvbSBcIi4vZHJhd2FibGUvUmV3YXJkRXhwbG9zaW9uXCI7XHJcbmltcG9ydCB7IHNjYWxlRHJhd2FibGVUZW1wYWx0ZSwgfSBmcm9tIFwiLi9kcmF3YWJsZS9EcmF3YWJsZU9iamVjdFRlbXBsYXRlXCI7XHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdyB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgdywgaCwgY3R4LCBkcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeSwgYXNzZXRSZXBvcml0b3J5LCBhdWRpb1BsYXllciwgaW5pdGlhbENoYXJhY3RlcklkKSB7XHJcbiAgICAgICAgdGhpcy5NRUFOX0RJU1RfQkVUV0VFTl9PQlNUQUNMRVMgPSAyODsgLy8gc2hvdWxkIGJlIGNoYW5nZWQgdG8gZGlzdGFuY2VcclxuICAgICAgICB0aGlzLk1FQU5fRElTVF9WQVJJQU5DRSA9IDMwMDtcclxuICAgICAgICB0aGlzLlZFTE9DSVRZX0lOQ1JFQVNFX0RBTVBJTkcgPSAxMDAwMDtcclxuICAgICAgICB0aGlzLk1BWF9YX1ZFTE9DSVRZID0gLTg7XHJcbiAgICAgICAgdGhpcy5GUFMgPSAzMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOdW1iZXIgb2YgdW5pcXVlIGRyYXdhYmxlIHRlbXBsYXRlcyBiZWZvcmUgdGhleSBtYXkgcmVwZWF0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5NSU5fVU5JUVVFX0RSQVdBQkxFU19OVU0gPSAzO1xyXG4gICAgICAgIHRoaXMuRkxPT1JfSEVJR0hUID0gMTA7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkgPSBkcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeTtcclxuICAgICAgICAvLyBFbnN1cmUgdmFsaWQgY2hhcmFjdGVyIGNvbmZpZ3VyYXRpb24gKGluaXRpYWxDaGFyYWN0ZXJJZCBmYWxsYmFjaylcclxuICAgICAgICB0aGlzLnNldENoYXJhY3RlcihkcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeS5nZXRQbGF5ZXJUZW1wbGF0ZXMoKVswXS5pZCk7XHJcbiAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXIoaW5pdGlhbENoYXJhY3RlcklkKTtcclxuICAgICAgICB0aGlzLmFzc2V0UmVwb3JpdG9yeSA9IGFzc2V0UmVwb3JpdG9yeTtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gYXVkaW9QbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5hbmltYXRvciA9IG5ldyBBbmltYXRvcigpO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIC8vIFJlc2V0IEFuaW1hdG9yXHJcbiAgICAgICAgdGhpcy5hbmltYXRvci51bnN1YnNjcmliZUFsbCgpO1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVWZWxvY2l0eSA9IHsgeDogLTMsIHk6IDAgfTsgLy8gVE9ETyBub3QgY2xlYW4gd2l0aCBvbmx5IG9uZSB2ZWxvY2l0eVxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLm9ic3RhY2xlVmVsb2NpdHksIHRoaXMuZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkuZ2V0QmFja2dyb3VuZFRlbXBsYXRlcygpWzBdKTtcclxuICAgICAgICB0aGlzLmFuaW1hdG9yLnN1YnNjcmliZSh0aGlzLmJhY2tncm91bmQpO1xyXG4gICAgICAgIC8vIFRPRE8gcmVtb3ZlIG1hZ2ljIG51bWJlciBoZWlnaHQ/IFNoaWZ0IG1hdGggdG8gb2JqZWN0XHJcbiAgICAgICAgY29uc3QgcGxheWVyVGVtcGxhdGUgPSB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5LmdldFBsYXllclRlbXBsYXRlKHRoaXMuY2hhcmFjdGVySWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLkNPTkZJRywgdGhpcy53aWR0aCAvIDQsIHRoaXMuaGVpZ2h0IC0gdGhpcy5wbGF5ZXJUZW1wbGF0ZS5kaW1lbnNpb25zLmggLSB0aGlzLkZMT09SX0hFSUdIVCAtIDEsIHRoaXMuaGVpZ2h0IC0gdGhpcy5GTE9PUl9IRUlHSFQsIHBsYXllclRlbXBsYXRlLmRpbWVuc2lvbnMuaCwgcGxheWVyVGVtcGxhdGUsIHRoaXMuYXVkaW9QbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0b3Iuc3Vic2NyaWJlKHRoaXMucGxheWVyKTtcclxuICAgICAgICAvLyBSZXNldCBPYnN0YWNsZXNcclxuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVHcm91bmRUZW1wbGF0ZXMgPVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5LmdldE9ic3RhY2xlVGVtcGxhdGVzKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0T2JzdGFjbGVEaXN0ID0gdGhpcy5jYWxjTmV4dE9ic3RhY2xlRGlzdCgpO1xyXG4gICAgICAgIHRoaXMubGFzdE9ic3RhY2xlSWRzID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIaXRPYnN0YWNsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJlc2V0IENvbGxlY3RhYmxlc1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGFibGVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0YWJsZVRlbXBsYXRlcyA9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkuZ2V0Q29sbGVjdGFibGVUZW1wbGF0ZXMoKTtcclxuICAgICAgICB0aGlzLm5leHRDb2xsZWN0YWJsZURpc3QgPSB0aGlzLmNhbGNOZXh0Q29sbGVjdGFibGVEaXN0KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0Q29sbGVjdGFibGVJZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBsYXllckhpdENvbGxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRFeHBsb3Npb25zID0gW107XHJcbiAgICB9XHJcbiAgICBnZXRQbGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDaGFyYWN0ZXIoY2hhcmFjdGVySWQpIHtcclxuICAgICAgICBsZXQgcGxheWVyVGVtcGxhdGUgPSB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5LmdldFBsYXllclRlbXBsYXRlKGNoYXJhY3RlcklkKTtcclxuICAgICAgICBpZiAocGxheWVyVGVtcGxhdGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyVGVtcGxhdGUgPSBwbGF5ZXJUZW1wbGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJJZCA9IGNoYXJhY3RlcklkO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIHBsYXllciB0ZW1wbGF0ZSBmb3IgaWQgXCIke2NoYXJhY3RlcklkfVwiYCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllclRlbXBsYXRlID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkuZ2V0UGxheWVyVGVtcGxhdGVzKClbMF07XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVySWQgPSB0aGlzLnBsYXllclRlbXBsYXRlLmlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldENoYXJhY3RlcklkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcklkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVEaWZmIHRpbWUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgYW5kIGxhc3QgdXBkYXRlIGluIG1pbGxpc1xyXG4gICAgICovXHJcbiAgICByZWZyZXNoKHRpbWVEaWZmKSB7XHJcbiAgICAgICAgbGV0IGZyYW1lcyA9ICh0aW1lRGlmZiAvIDEwMDApICogdGhpcy5GUFM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPYnN0YWNsZXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbGxlY3RhYmxlcygpO1xyXG4gICAgICAgIC8vIFJlZHVjZSBuZXh0IC4uLiBkaXN0YW5jZXNcclxuICAgICAgICB0aGlzLm5leHRPYnN0YWNsZURpc3QgLT0gZnJhbWVzICogdGhpcy5vYnN0YWNsZVZlbG9jaXR5LnggKiAtMC4yO1xyXG4gICAgICAgIHRoaXMubmV4dENvbGxlY3RhYmxlRGlzdCAtPSBmcmFtZXMgKiB0aGlzLm9ic3RhY2xlVmVsb2NpdHkueCAqIC0wLjI7XHJcbiAgICAgICAgLy8gUmVmcmVzaCBhbGwgZHJhd2FibGUgb2JqZWN0c1xyXG4gICAgICAgIHRoaXMuYW5pbWF0b3IudXBkYXRlKHRpbWVEaWZmKTtcclxuICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGltZURpZmYpO1xyXG4gICAgICAgIC8vIENoZWNrIGNvbGxpc2lvbnNcclxuICAgICAgICB0aGlzLnBsYXllckhpdE9ic3RhY2xlID0gQ29sbGlzaW9uRGV0ZWN0b3IuY29sbGlkZWQodGhpcy5wbGF5ZXIsIHRoaXMub2JzdGFjbGVzWzBdKTtcclxuICAgICAgICB0aGlzLnBsYXllckhpdENvbGxlY3RhYmxlID0gQ29sbGlzaW9uRGV0ZWN0b3IuY29sbGlkZWQodGhpcy5wbGF5ZXIsIHRoaXMuY29sbGVjdGFibGVzWzBdKTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJIaXRPYnN0YWNsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRDcmFzaGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0b3IuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVySGl0Q29sbGVjdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRSZXdhcmRFeHBsb3Npb24odGhpcy5jb2xsZWN0YWJsZXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RhYmxlcy5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3RoaXMucGxheWVySGl0T2JzdGFjbGUsIHRoaXMucGxheWVySGl0Q29sbGVjdGFibGVdO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlT2JzdGFjbGVzKCkge1xyXG4gICAgICAgIC8vIEFkZCBuZXcgb2JzdGFjbGVzXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dE9ic3RhY2xlRGlzdCA8IDApIHtcclxuICAgICAgICAgICAgbGV0IG5leHRPYnN0YWNsZUluZGV4O1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBuZXh0T2JzdGFjbGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMub2JzdGFjbGVHcm91bmRUZW1wbGF0ZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5sYXN0T2JzdGFjbGVJZHMuaW5jbHVkZXMobmV4dE9ic3RhY2xlSW5kZXgpKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0T2JzdGFjbGVJZHMucHVzaChuZXh0T2JzdGFjbGVJbmRleCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RPYnN0YWNsZUlkcy5sZW5ndGggPj0gdGhpcy5NSU5fVU5JUVVFX0RSQVdBQkxFU19OVU0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE9ic3RhY2xlSWRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5leHRPYnN0YWNsZVRlbXBsYXRlID0gc2NhbGVEcmF3YWJsZVRlbXBhbHRlKHRoaXMub2JzdGFjbGVHcm91bmRUZW1wbGF0ZXNbbmV4dE9ic3RhY2xlSW5kZXhdLCAwLjI4KTtcclxuICAgICAgICAgICAgbGV0IG5leHRPYnN0YWNsZSA9IG5ldyBPYnN0YWNsZSh0aGlzLkNPTkZJRywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSBuZXh0T2JzdGFjbGVUZW1wbGF0ZS5kaW1lbnNpb25zLmggLSB0aGlzLkZMT09SX0hFSUdIVCwgMCwgMCwgdGhpcy5vYnN0YWNsZVZlbG9jaXR5LCBuZXh0T2JzdGFjbGVUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnB1c2gobmV4dE9ic3RhY2xlKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRvci5zdWJzY3JpYmUobmV4dE9ic3RhY2xlKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0T2JzdGFjbGVEaXN0ID0gdGhpcy5jYWxjTmV4dE9ic3RhY2xlRGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbm9uLXZpc2libGUgb2JzdGFjbGVzIC8vIFRPRE8gZ2V0IHdpZHRoIGluc3RlYWQgb2YgbWFnaWMgbnVtYmVyXHJcbiAgICAgICAgaWYgKHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXNbMF0uZ2V0WCgpICsgdGhpcy5vYnN0YWNsZXNbMF0uZ2V0V2lkdGgoKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRvci51bnN1YnNjcmliZSh0aGlzLm9ic3RhY2xlc1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ29sbGVjdGFibGVzKCkge1xyXG4gICAgICAgIC8vIEFkZCBuZXcgY29sbGVjdGFibGVcclxuICAgICAgICBpZiAodGhpcy5uZXh0Q29sbGVjdGFibGVEaXN0IDwgMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV4dENvbGxlY3RhYmxlSW5kZXg7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIG5leHRDb2xsZWN0YWJsZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2xsZWN0YWJsZVRlbXBsYXRlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmxhc3RDb2xsZWN0YWJsZUlkcy5pbmNsdWRlcyhuZXh0Q29sbGVjdGFibGVJbmRleCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDb2xsZWN0YWJsZUlkcy5wdXNoKG5leHRDb2xsZWN0YWJsZUluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdENvbGxlY3RhYmxlSWRzLmxlbmd0aCA+PSB0aGlzLk1JTl9VTklRVUVfRFJBV0FCTEVTX05VTSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Q29sbGVjdGFibGVJZHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbmV4dENvbGxlY3RhYmxlVGVtcGxhdGUgPSBzY2FsZURyYXdhYmxlVGVtcGFsdGUodGhpcy5jb2xsZWN0YWJsZVRlbXBsYXRlc1tuZXh0Q29sbGVjdGFibGVJbmRleF0sIDAuMjgpO1xyXG4gICAgICAgICAgICBsZXQgbmV4dENvbGxlY3RhYmxlID0gbmV3IENvbGxlY3RhYmxlSXRlbSh0aGlzLkNPTkZJRywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAwLjMgLSBuZXh0Q29sbGVjdGFibGVUZW1wbGF0ZS5kaW1lbnNpb25zLmgsIDAsIDAsIHRoaXMub2JzdGFjbGVWZWxvY2l0eSwgbmV4dENvbGxlY3RhYmxlVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RhYmxlcy5wdXNoKG5leHRDb2xsZWN0YWJsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0b3Iuc3Vic2NyaWJlKG5leHRDb2xsZWN0YWJsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dENvbGxlY3RhYmxlRGlzdCA9IHRoaXMuY2FsY05leHRDb2xsZWN0YWJsZURpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIG5vbi12aXNpYmxlIGNvbGxlY3RhYmxlc1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3RhYmxlcy5sZW5ndGggPiAwICYmIHRoaXMuY29sbGVjdGFibGVzWzBdLmdldFgoKSA8IC0yMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdG9yLnVuc3Vic2NyaWJlKHRoaXMuY29sbGVjdGFibGVzWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0YWJsZXMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbmNyZWFzZVNwZWVkKHRpbWVEaWZmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzdGFjbGVWZWxvY2l0eS54ID4gdGhpcy5NQVhfWF9WRUxPQ0lUWSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic3RhY2xlVmVsb2NpdHkueCAtPSB0aW1lRGlmZiAvIHRoaXMuVkVMT0NJVFlfSU5DUkVBU0VfREFNUElORztcclxuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JzdGFjbGUpID0+IG9ic3RhY2xlLnNldFZlbG9jaXR5KHRoaXMub2JzdGFjbGVWZWxvY2l0eSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQuc2V0VmVsb2NpdHkodGhpcy5vYnN0YWNsZVZlbG9jaXR5KTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0YWJsZXMuZm9yRWFjaCgoY29sbGVjdGFibGUpID0+IGNvbGxlY3RhYmxlLnNldFZlbG9jaXR5KHRoaXMub2JzdGFjbGVWZWxvY2l0eSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbGNOZXh0T2JzdGFjbGVEaXN0KCkge1xyXG4gICAgICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSArIDIpICogdGhpcy5NRUFOX0RJU1RfQkVUV0VFTl9PQlNUQUNMRVM7XHJcbiAgICB9XHJcbiAgICBjYWxjTmV4dENvbGxlY3RhYmxlRGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKyAxKSAqIHRoaXMuTUVBTl9ESVNUX0JFVFdFRU5fT0JTVEFDTEVTICogMztcclxuICAgIH1cclxuICAgIGFkZFJld2FyZEV4cGxvc2lvbihjb2xsZWN0YWJsZSkge1xyXG4gICAgICAgIGxldCByZXdhcmRFeHBsb3Npb24gPSBuZXcgUmV3YXJkRXhwbG9zaW9uKGNvbGxlY3RhYmxlLmdldFgoKSwgY29sbGVjdGFibGUuZ2V0WSgpLCB0aGlzLmFzc2V0UmVwb3JpdG9yeSk7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRFeHBsb3Npb25zLnB1c2gocmV3YXJkRXhwbG9zaW9uKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2hpZnRSZXdhcmRFeHBsb3Npb25zLmJpbmQodGhpcyksIDQwMCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRvci5zdWJzY3JpYmUocmV3YXJkRXhwbG9zaW9uKTtcclxuICAgICAgICB0aGlzLmFuaW1hdG9yLnVuc3Vic2NyaWJlKGNvbGxlY3RhYmxlKTtcclxuICAgIH1cclxuICAgIHNoaWZ0UmV3YXJkRXhwbG9zaW9ucygpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdG9yLnVuc3Vic2NyaWJlKHRoaXMucmV3YXJkRXhwbG9zaW9uc1swXSk7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRFeHBsb3Npb25zLnNoaWZ0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbGxpc2lvbkRldGVjdG9yIHtcclxuICAgIHN0YXRpYyBjb2xsaWRlZChvYmplY3RBLCBvYmplY3RCKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdEEgPT0gdW5kZWZpbmVkIHx8IG9iamVjdEIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFIaXRCb3hlcyA9IG9iamVjdEEuZ2V0SGl0Qm94ZXMoKTtcclxuICAgICAgICBsZXQgYkhpdEJveGVzID0gb2JqZWN0Qi5nZXRIaXRCb3hlcygpO1xyXG4gICAgICAgIGZvciAobGV0IGFIaXRCb3ggb2YgYUhpdEJveGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGJIaXRCb3ggb2YgYkhpdEJveGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYkhpdEJveC5jb2xsaWRlc1dpdGgoYUhpdEJveCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlY3RIaXRCb3gge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgdywgaCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XHJcbiAgICB9XHJcbiAgICBnZXRYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBzZXRYKHgpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgfVxyXG4gICAgc2V0WSh5KSB7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIGdldFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgZ2V0SGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGNvbGxpZGVzV2l0aChoaXRCb3gpIHtcclxuICAgICAgICBsZXQgY29sbGlkZWQgPSB0aGlzLnggKyB0aGlzLndpZHRoID4gaGl0Qm94LmdldFgoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnggPCBoaXRCb3guZ2V0WCgpICsgaGl0Qm94LmdldFdpZHRoKCkgJiZcclxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBoaXRCb3guZ2V0WSgpICYmXHJcbiAgICAgICAgICAgIHRoaXMueSA8IGhpdEJveC5nZXRZKCkgKyBoaXRCb3guZ2V0SGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gaWYgKGNvbGxpZGVkID09IHRydWUpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gY29sbGlkZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhd2FibGVPYmplY3QgfSBmcm9tIFwiLi9EcmF3YWJsZU9iamVjdFwiO1xyXG4vLyBUT0RPIElOVEVHUkFURSBTQ0FMRSBGQUNUT1IgV0lUSCBXSURUSFxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIERyYXdhYmxlT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNudlcsIGNudkgsIHYsIHRlbXBsYXRlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgdGhpcy5pbWcgPSB0ZW1wbGF0ZS5pbWFnZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGVtcGxhdGUuZGltZW5zaW9ucy53O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGVtcGxhdGUuZGltZW5zaW9ucy5oO1xyXG4gICAgICAgIC8vIHRoaXMuX3NjYWxlRmFjdG9yID0gY252SCAvIHRoaXMuX2hlaWdodDtcclxuICAgICAgICB0aGlzLnNjYWxlRmFjdG9yID0gMTtcclxuICAgICAgICB0aGlzLmNudldpZHRoID0gY252VztcclxuICAgICAgICB0aGlzLmNudkhlaWdodCA9IGNudkg7XHJcbiAgICB9XHJcbiAgICBzZXRWZWxvY2l0eSh2ZWxvY2l0eSkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIH1cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1nKSB7XHJcbiAgICAgICAgICAgIGxldCBzeCA9IC0odGhpcy54ICogdGhpcy5zY2FsZUZhY3Rvcik7XHJcbiAgICAgICAgICAgIGxldCBzd2lkdGggPSB0aGlzLmNudldpZHRoICogdGhpcy5zY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgc3gsIHRoaXMueSwgc3dpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy5jbnZXaWR0aCwgdGhpcy5jbnZIZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZExlZnQgPSB0aGlzLndpZHRoICogdGhpcy5zY2FsZUZhY3RvciAtICh0aGlzLmNudldpZHRoIC0gdGhpcy54KTtcclxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmRMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gdGhpcy5jbnZXaWR0aCArIGJhY2tncm91bmRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgc3dpZHRoID0gKHRoaXMuY252V2lkdGggLSB4KSAqIHRoaXMuc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCAwLCB0aGlzLnksIHN3aWR0aCwgdGhpcy5oZWlnaHQsIHgsIDAsIC1iYWNrZ3JvdW5kTGVmdCwgdGhpcy5jbnZIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKHRpbWVEaWZmKSB7XHJcbiAgICAgICAgbGV0IHRpbWVGYWN0b3IgPSB0aW1lRGlmZiAvIDE3O1xyXG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLnNjYWxlRmFjdG9yICogdGhpcy53aWR0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlRmFjdG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHkueCAqIHRpbWVGYWN0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERyYXdhYmxlT2JqZWN0IH0gZnJvbSBcIi4vRHJhd2FibGVPYmplY3RcIjtcclxuaW1wb3J0IHsgUmVjdEhpdEJveCB9IGZyb20gXCIuLi9jb2xsaXNpb24vUmVjdEhpdEJveFwiO1xyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGFibGVJdGVtIGV4dGVuZHMgRHJhd2FibGVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCB4LCB5LCB3LCBoLCB2LCB0ZW1wbGF0ZSwgc2NhbGUgPSAxLCBzaGFkb3cgPSB0cnVlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmhpdEJveGVzID0gW107XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2O1xyXG4gICAgICAgIHRoaXMuaW1nID0gdGVtcGxhdGUuaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5kcm9wc1NoYWRvdyA9IHNoYWRvdztcclxuICAgICAgICB0aGlzLndpZHRoID0gdGVtcGxhdGUuZGltZW5zaW9ucy53O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGVtcGxhdGUuZGltZW5zaW9ucy5oO1xyXG4gICAgICAgIGZvciAobGV0IGhpdEJveCBvZiB0ZW1wbGF0ZS5oaXRCb3hlcykge1xyXG4gICAgICAgICAgICB0aGlzLmhpdEJveGVzLnB1c2gobmV3IFJlY3RIaXRCb3godGhpcy54ICsgaGl0Qm94LnhPZmYsIHRoaXMueSArIGhpdEJveC55T2ZmLCBoaXRCb3gudywgaGl0Qm94LmgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBnZXRIaXRCb3hlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRCb3hlcztcclxuICAgIH1cclxuICAgIHNldFZlbG9jaXR5KHZlbG9jaXR5KSB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgfVxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbWcgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAvIDIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DT05GSUcuU0VUVElOR1MuZGVidWdJc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInZpb2xldFwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMuaGl0Qm94ZXNbMF0uZ2V0WCgpLCB0aGlzLmhpdEJveGVzWzBdLmdldFkoKSwgdGhpcy5oaXRCb3hlc1swXS5nZXRXaWR0aCgpLCB0aGlzLmhpdEJveGVzWzBdLmdldEhlaWdodCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbWcpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wc1NoYWRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aW1lRGlmZikge1xyXG4gICAgICAgIGxldCB0aW1lRmFjdG9yID0gdGltZURpZmYgLyAxNztcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54ICogdGltZUZhY3RvcjtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eS55ICogdGltZUZhY3RvcjtcclxuICAgICAgICB0aGlzLmhpdEJveGVzLmZvckVhY2goKGhpdEJveCkgPT4gKGhpdEJveC54ICs9IHRoaXMudmVsb2NpdHkueCAqIHRpbWVGYWN0b3IpKTtcclxuICAgICAgICB0aGlzLmhpdEJveGVzLmZvckVhY2goKGhpdEJveCkgPT4gKGhpdEJveC55ICs9IHRoaXMudmVsb2NpdHkueSAqIHRpbWVGYWN0b3IpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRHJhd2FibGVPYmplY3Qge1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzY2FsZURyYXdhYmxlVGVtcGFsdGUodG1wbHQsIGZhY3Rvcikge1xyXG4gICAgbGV0IHNjYWxlZERpbWVuc2lvbnMgPSB7XHJcbiAgICAgICAgdzogdG1wbHQuZGltZW5zaW9ucy53ICogZmFjdG9yLFxyXG4gICAgICAgIGg6IHRtcGx0LmRpbWVuc2lvbnMuaCAqIGZhY3RvcixcclxuICAgIH07XHJcbiAgICBsZXQgc2NhbGVkSGl0Qm94ZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGhpdEJveCBvZiB0bXBsdC5oaXRCb3hlcykge1xyXG4gICAgICAgIHNjYWxlZEhpdEJveGVzLnB1c2goe1xyXG4gICAgICAgICAgICB4T2ZmOiBoaXRCb3gueE9mZixcclxuICAgICAgICAgICAgeU9mZjogaGl0Qm94LnlPZmYsXHJcbiAgICAgICAgICAgIHc6IGhpdEJveC53LFxyXG4gICAgICAgICAgICBoOiBoaXRCb3guaCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNjYWxlZEhpdEJveGVzLmZvckVhY2goKGhpdEJveCkgPT4ge1xyXG4gICAgICAgIGhpdEJveC54T2ZmICo9IGZhY3RvcjtcclxuICAgICAgICBoaXRCb3gueU9mZiAqPSBmYWN0b3I7XHJcbiAgICAgICAgaGl0Qm94LmggKj0gZmFjdG9yO1xyXG4gICAgICAgIGhpdEJveC53ICo9IGZhY3RvcjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogdG1wbHQuaWQsXHJcbiAgICAgICAgZGltZW5zaW9uczogc2NhbGVkRGltZW5zaW9ucyxcclxuICAgICAgICBpbWFnZVBhdGg6IHRtcGx0LmltYWdlUGF0aCxcclxuICAgICAgICBpbWFnZTogdG1wbHQuaW1hZ2UsXHJcbiAgICAgICAgaGl0Qm94ZXM6IHNjYWxlZEhpdEJveGVzLFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGVtcGxhdGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVUZW1wbGF0ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0YWJsZVRlbXBsYXRlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBsYXllclRlbXBsYXRlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICBjb25maWcuQkFDS0dST1VORF9URU1QTEFURVMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHRoaXMuYmFja2dyb3VuZFRlbXBsYXRlcy5zZXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlKSk7XHJcbiAgICAgICAgY29uZmlnLk9CU1RBQ0xFU19HUk5EX1RFTVBMQVRFUy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4gdGhpcy5vYnN0YWNsZVRlbXBsYXRlcy5zZXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlKSk7XHJcbiAgICAgICAgY29uZmlnLkNPTExFQ1RBQkxFU19URU1QTEFURVMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHRoaXMuY29sbGVjdGFibGVUZW1wbGF0ZXMuc2V0KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZSkpO1xyXG4gICAgICAgIGNvbmZpZy5QTEFZRVJfVEVNUExBVEVTLmZvckVhY2goKHRlbXBsYXRlKSA9PiB0aGlzLnBsYXllclRlbXBsYXRlcy5zZXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlKSk7XHJcbiAgICB9XHJcbiAgICBnZXRCYWNrZ3JvdW5kVGVtcGxhdGVzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuYmFja2dyb3VuZFRlbXBsYXRlcy52YWx1ZXMoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRPYnN0YWNsZVRlbXBsYXRlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm9ic3RhY2xlVGVtcGxhdGVzLnZhbHVlcygpKTtcclxuICAgIH1cclxuICAgIGdldENvbGxlY3RhYmxlVGVtcGxhdGVzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY29sbGVjdGFibGVUZW1wbGF0ZXMudmFsdWVzKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGxheWVyVGVtcGxhdGVzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucGxheWVyVGVtcGxhdGVzLnZhbHVlcygpKTtcclxuICAgIH1cclxuICAgIGdldEJhY2tncm91bmRUZW1wbGF0ZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRUZW1wbGF0ZXMuZ2V0KGlkKTtcclxuICAgIH1cclxuICAgIGdldE9ic3RhY2xlVGVtcGxhdGUoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnN0YWNsZVRlbXBsYXRlcy5nZXQoaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29sbGVjdGFibGVUZW1wbGF0ZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3RhYmxlVGVtcGxhdGVzLmdldChpZCk7XHJcbiAgICB9XHJcbiAgICBnZXRQbGF5ZXJUZW1wbGF0ZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllclRlbXBsYXRlcy5nZXQoaWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERyYXdhYmxlT2JqZWN0IH0gZnJvbSBcIi4vRHJhd2FibGVPYmplY3RcIjtcclxuaW1wb3J0IHsgUmVjdEhpdEJveCB9IGZyb20gXCIuLi9jb2xsaXNpb24vUmVjdEhpdEJveFwiO1xyXG5leHBvcnQgY2xhc3MgT2JzdGFjbGUgZXh0ZW5kcyBEcmF3YWJsZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIHgsIHksIHcsIGgsIHYsIHRlbXBsYXRlLCBzY2FsZSA9IDEsIHNoYWRvdyA9IHRydWUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaGl0Qm94ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkNPTkZJRyA9IENPTkZJRztcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgdGhpcy5pbWcgPSB0ZW1wbGF0ZS5pbWFnZTtcclxuICAgICAgICB0aGlzLmRyb3BzU2hhZG93ID0gc2hhZG93O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0ZW1wbGF0ZS5kaW1lbnNpb25zLnc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0ZW1wbGF0ZS5kaW1lbnNpb25zLmg7XHJcbiAgICAgICAgZm9yIChsZXQgaGl0Qm94IG9mIHRlbXBsYXRlLmhpdEJveGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Qm94ZXMucHVzaChuZXcgUmVjdEhpdEJveCh0aGlzLnggKyBoaXRCb3gueE9mZiwgdGhpcy55ICsgaGl0Qm94LnlPZmYsIGhpdEJveC53LCBoaXRCb3guaCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuICAgIGdldFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgZ2V0SGl0Qm94ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Qm94ZXM7XHJcbiAgICB9XHJcbiAgICBzZXRWZWxvY2l0eSh2ZWxvY2l0eSkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIH1cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1nID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodGdyZWVuXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DT05GSUcuU0VUVElOR1MuZGVidWdJc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpdEJveGVzLmZvckVhY2goKGhpdEJveCkgPT4gY3R4LmZpbGxSZWN0KGhpdEJveC5nZXRYKCksIGhpdEJveC5nZXRZKCksIGhpdEJveC5nZXRXaWR0aCgpLCBoaXRCb3guZ2V0SGVpZ2h0KCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbWcpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wc1NoYWRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aW1lRGlmZikge1xyXG4gICAgICAgIGxldCB0aW1lRmFjdG9yID0gdGltZURpZmYgLyAxNztcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54ICogdGltZUZhY3RvcjtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eS55ICogdGltZUZhY3RvcjtcclxuICAgICAgICB0aGlzLmhpdEJveGVzLmZvckVhY2goKGhpdEJveCkgPT4gKGhpdEJveC54ICs9IHRoaXMudmVsb2NpdHkueCAqIHRpbWVGYWN0b3IpKTtcclxuICAgICAgICB0aGlzLmhpdEJveGVzLmZvckVhY2goKGhpdEJveCkgPT4gKGhpdEJveC55ICs9IHRoaXMudmVsb2NpdHkueSAqIHRpbWVGYWN0b3IpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcmF3YWJsZU9iamVjdCB9IGZyb20gXCIuL0RyYXdhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IFJlY3RIaXRCb3ggfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RIaXRCb3hcIjtcclxuaW1wb3J0IHsgc2NhbGVQbGF5ZXJUZW1wbGF0ZSwgfSBmcm9tIFwiLi9QbGF5ZXJUZW1wbGF0ZVwiO1xyXG5leHBvcnQgdmFyIFBsYXllclN0YXRlO1xyXG4oZnVuY3Rpb24gKFBsYXllclN0YXRlKSB7XHJcbiAgICBQbGF5ZXJTdGF0ZVtQbGF5ZXJTdGF0ZVtcIlJVTk5JTkdcIl0gPSAwXSA9IFwiUlVOTklOR1wiO1xyXG4gICAgUGxheWVyU3RhdGVbUGxheWVyU3RhdGVbXCJKVU1QSU5HXCJdID0gMV0gPSBcIkpVTVBJTkdcIjtcclxuICAgIFBsYXllclN0YXRlW1BsYXllclN0YXRlW1wiQ1JBU0hFRFwiXSA9IDJdID0gXCJDUkFTSEVEXCI7XHJcbn0pKFBsYXllclN0YXRlIHx8IChQbGF5ZXJTdGF0ZSA9IHt9KSk7XHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBEcmF3YWJsZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIHgsIHksIE1JTl9ZLCBoZWlnaHQsIHRlbXBsYXRlLCBhdWRpb1BsYXllciwgc2hhZG93ID0gdHJ1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5NSU5fWSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5HUkFWSVRZID0gMztcclxuICAgICAgICB0aGlzLkpVTVBfVkVMT0NJVFkgPSAtMzU7XHJcbiAgICAgICAgdGhpcy5NQVhfSlVNUF9USU1FID0gNTAwO1xyXG4gICAgICAgIHRoaXMuRlBTID0gMSAvIDQwO1xyXG4gICAgICAgIHRoaXMuaGl0Qm94ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkNPTkZJRyA9IENPTkZJRztcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gYXVkaW9QbGF5ZXI7XHJcbiAgICAgICAgbGV0IHNjYWxlRmFjdG9yID0gaGVpZ2h0IC8gdGVtcGxhdGUuZGltZW5zaW9ucy5oO1xyXG4gICAgICAgIHRoaXMuTUlOX1kgPSBNSU5fWSAtIGhlaWdodDtcclxuICAgICAgICB0aGlzLnggPSB4IC0gdGVtcGxhdGUuZnJhbWVXaWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFBsYXllclN0YXRlLlJVTk5JTkc7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRlbXBsYXRlLmZyYW1lV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0ZW1wbGF0ZS5kaW1lbnNpb25zLmg7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHNjYWxlUGxheWVyVGVtcGxhdGUodGVtcGxhdGUsIHNjYWxlRmFjdG9yKTtcclxuICAgICAgICAvLyBIaXRib3hlc1xyXG4gICAgICAgIGZvciAobGV0IGhpdEJveCBvZiB0aGlzLnRlbXBsYXRlLmhpdEJveGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Qm94ZXMucHVzaChuZXcgUmVjdEhpdEJveCh0aGlzLnggKyBoaXRCb3gueE9mZiwgdGhpcy55ICsgaGl0Qm94LnlPZmYsIGhpdEJveC53LCBoaXRCb3guaCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3aW5nIGRhdGFcclxuICAgICAgICB0aGlzLmltZyA9IHRlbXBsYXRlLmltYWdlO1xyXG4gICAgICAgIHRoaXMuZHJvcHNTaGFkb3cgPSBzaGFkb3c7XHJcbiAgICAgICAgdGhpcy5kcmF3SGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZHJhd1dpZHRoID0gdGVtcGxhdGUuZnJhbWVXaWR0aCAqIHNjYWxlRmFjdG9yO1xyXG4gICAgICAgIC8vIEFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMubnVtT2ZGcmFtZXMgPSB0ZW1wbGF0ZS5mcmFtZXM7XHJcbiAgICAgICAgdGhpcy5jdXJyU3RhdGVEZXNjciA9IHRlbXBsYXRlLmp1bXBpbmc7XHJcbiAgICAgICAgdGhpcy5jdXJyRnJhbWUgPSB0aGlzLmN1cnJTdGF0ZURlc2NyLnN0YXJ0RnJhbWU7XHJcbiAgICAgICAgdGhpcy50aW1lVG9OZXh0RnJhbWUgPSB0aGlzLmN1cnJTdGF0ZURlc2NyLm1zUGVyRnJhbWU7XHJcbiAgICB9XHJcbiAgICBnZXRIaXRCb3hlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRCb3hlcztcclxuICAgIH1cclxuICAgIHNldENyYXNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyU3RhdGVEZXNjciA9IHRoaXMudGVtcGxhdGUuY3Jhc2hlZDtcclxuICAgICAgICB0aGlzLmN1cnJGcmFtZSA9IHRoaXMuY3VyclN0YXRlRGVzY3Iuc3RhcnRGcmFtZTtcclxuICAgICAgICB0aGlzLnRpbWVUb05leHRGcmFtZSA9IHRoaXMuY3VyclN0YXRlRGVzY3IubXNQZXJGcmFtZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgICAqL1xyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBpZiAodGhpcy5DT05GSUcuU0VUVElOR1MuZGVidWdJc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLmhpdEJveGVzWzBdLmdldFgoKSwgdGhpcy5oaXRCb3hlc1swXS5nZXRZKCksIHRoaXMuaGl0Qm94ZXNbMF0uZ2V0V2lkdGgoKSwgdGhpcy5oaXRCb3hlc1swXS5nZXRIZWlnaHQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmltZykge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wc1NoYWRvdykge1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCIjNDQ0NDQ0XCI7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5jdXJyRnJhbWUgKiB0aGlzLndpZHRoLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMuZHJhd1dpZHRoLCB0aGlzLmRyYXdIZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aW1lRGlmZikge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBwb3MgYW5kIGhpdGJveGVzXHJcbiAgICAgICAgbGV0IGZyYW1lc1Bhc3NlZCA9IHRpbWVEaWZmICogdGhpcy5GUFM7XHJcbiAgICAgICAgbGV0IGxhc3RZID0gdGhpcy55O1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eSAqIGZyYW1lc1Bhc3NlZDtcclxuICAgICAgICB0aGlzLnlWZWxvY2l0eSArPSB0aGlzLkdSQVZJVFkgKiBmcmFtZXNQYXNzZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+PSB0aGlzLk1JTl9ZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuTUlOX1k7XHJcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaXRCb3hlcy5mb3JFYWNoKChoaXRCb3gpID0+IChoaXRCb3gueSArPSB0aGlzLnkgLSBsYXN0WSkpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBkcmF3aW5nIHByb3BlcnRpZXNcclxuICAgICAgICBpZiAobGFzdFkgPCB0aGlzLk1JTl9ZICYmIHRoaXMueSA9PSB0aGlzLk1JTl9ZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBQbGF5ZXJTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVUb05leHRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclN0YXRlRGVzY3IgPSB0aGlzLnRlbXBsYXRlLnJ1bm5pbmc7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckZyYW1lID0gdGhpcy5jdXJyU3RhdGVEZXNjci5zdGFydEZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVUb05leHRGcmFtZSAtPSB0aW1lRGlmZjtcclxuICAgICAgICBpZiAodGhpcy50aW1lVG9OZXh0RnJhbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVUb05leHRGcmFtZSA9IHRoaXMuY3VyclN0YXRlRGVzY3IubXNQZXJGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyRnJhbWUgPVxyXG4gICAgICAgICAgICAgICAgKHRoaXMuY3VyckZyYW1lICsgMSkgJVxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmN1cnJTdGF0ZURlc2NyLmVuZEZyYW1lIC0gdGhpcy5jdXJyU3RhdGVEZXNjci5zdGFydEZyYW1lICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnRKdW1wKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50ZW1wbGF0ZS5jYW5KdW1wKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSA+PSB0aGlzLk1JTl9ZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBQbGF5ZXJTdGF0ZS5KVU1QSU5HO1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IHRoaXMuSlVNUF9WRUxPQ0lUWTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJqdW1wXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJTdGF0ZURlc2NyID0gdGhpcy50ZW1wbGF0ZS5qdW1waW5nO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBTdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJGcmFtZSA9IHRoaXMuY3VyclN0YXRlRGVzY3Iuc3RhcnRGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy50aW1lVG9OZXh0RnJhbWUgPSB0aGlzLmN1cnJTdGF0ZURlc2NyLm1zUGVyRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5kSnVtcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gUGxheWVyU3RhdGUuSlVNUElORykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnlWZWxvY2l0eSA8IHRoaXMuSlVNUF9WRUxPQ0lUWSAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLkpVTVBfVkVMT0NJVFkgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gUGxheWVyU3RhdGUuUlVOTklORztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzY2FsZURyYXdhYmxlVGVtcGFsdGUsIH0gZnJvbSBcIi4vRHJhd2FibGVPYmplY3RUZW1wbGF0ZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVQbGF5ZXJUZW1wbGF0ZSh0ZW1wbGF0ZSwgZmFjdG9yKSB7XHJcbiAgICBsZXQgc2NhbGVkVGVtcGxhdGUgPSBzY2FsZURyYXdhYmxlVGVtcGFsdGUodGVtcGxhdGUsIGZhY3Rvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBzY2FsZWRUZW1wbGF0ZS5pZCxcclxuICAgICAgICBkaW1lbnNpb25zOiBzY2FsZWRUZW1wbGF0ZS5kaW1lbnNpb25zLFxyXG4gICAgICAgIGltYWdlUGF0aDogc2NhbGVkVGVtcGxhdGUuaW1hZ2VQYXRoLFxyXG4gICAgICAgIGltYWdlOiBzY2FsZWRUZW1wbGF0ZS5pbWFnZSxcclxuICAgICAgICBoaXRCb3hlczogc2NhbGVkVGVtcGxhdGUuaGl0Qm94ZXMsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IHRlbXBsYXRlLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgIGZyYW1lczogdGVtcGxhdGUuZnJhbWVzLFxyXG4gICAgICAgIGZyYW1lV2lkdGg6IHRlbXBsYXRlLmZyYW1lV2lkdGgsXHJcbiAgICAgICAgY2FuSnVtcDogdGVtcGxhdGUuY2FuSnVtcCxcclxuICAgICAgICBydW5uaW5nOiB0ZW1wbGF0ZS5ydW5uaW5nLFxyXG4gICAgICAgIGp1bXBpbmc6IHRlbXBsYXRlLmp1bXBpbmcsXHJcbiAgICAgICAgY3Jhc2hlZDogdGVtcGxhdGUuY3Jhc2hlZCxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhd2FibGVPYmplY3QgfSBmcm9tIFwiLi9EcmF3YWJsZU9iamVjdFwiO1xyXG5leHBvcnQgY2xhc3MgUmV3YXJkRXhwbG9zaW9uIGV4dGVuZHMgRHJhd2FibGVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYXNzZXRSZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLk1BWF9WRUwgPSAyLjU7XHJcbiAgICAgICAgdGhpcy5WRUxfREFNUCA9IDAuOTg7XHJcbiAgICAgICAgdGhpcy5USU1FX1RJTF9WQU5JU0ggPSA1MDA7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuZ2V0UmFuZERpcigpO1xyXG4gICAgICAgICAgICBsZXQgeFZlbCA9IE1hdGguc2luKGRpcikgKiB0aGlzLk1BWF9WRUwgKiAoMSArIE1hdGgucmFuZG9tKCkgKiAwLjUpO1xyXG4gICAgICAgICAgICBsZXQgeVZlbCA9IE1hdGguY29zKGRpcikgKiB0aGlzLk1BWF9WRUwgKiAoMSArIE1hdGgucmFuZG9tKCkgKiAwLjUpO1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB7IHg6IHhWZWwsIHk6IHlWZWwgfTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcy54LCB0aGlzLnksIHZlbG9jaXR5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFydGljbGVJbWFnZSA9IGFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcInJld2FyZC1zdGFyXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0UmFuZERpcigpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xyXG4gICAgfVxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBjdHgudHJhbnNsYXRlKHBhcnRpY2xlLnggKyAxNSwgcGFydGljbGUueSArIDEzKTtcclxuICAgICAgICAgICAgLy8gY3R4LnJvdGF0ZShwYXJ0aWNsZS5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuYWxwaGE7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5wYXJ0aWNsZUltYWdlLCBwYXJ0aWNsZS54LCBwYXJ0aWNsZS55LCAzMCwgMjcpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHRpbWVEaWZmKSB7XHJcbiAgICAgICAgbGV0IHRpbWVGYWN0b3IgPSB0aW1lRGlmZiAvIDE3O1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUudmVsLnggKiB0aW1lRmFjdG9yO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS55ICs9IHBhcnRpY2xlLnZlbC55ICogdGltZUZhY3RvcjtcclxuICAgICAgICAgICAgcGFydGljbGUudmVsLnggKj0gdGhpcy5WRUxfREFNUDtcclxuICAgICAgICAgICAgcGFydGljbGUudmVsLnkgKj0gdGhpcy5WRUxfREFNUDtcclxuICAgICAgICAgICAgcGFydGljbGUucm90YXRpb24gKz0gcGFydGljbGUucm90YXRpb25Db25zdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFscGhhIC09IHRpbWVEaWZmIC8gdGhpcy5USU1FX1RJTF9WQU5JU0g7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUGFydGljbGUge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgdmVsKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25Db25zdCA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJIC0gMC4xO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTY29yZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHKSB7XHJcbiAgICAgICAgdGhpcy5hcGlFbmRwb2ludCA9IENPTkZJRy5TRVRUSU5HUy5pc0Rldk1vZGUgPyBDT05GSUcuQVBJX1BBVEhTLkhPU1QgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuYXBpRW5kcG9pbnQgPSB0aGlzLmFwaUVuZHBvaW50LmNvbmNhdChDT05GSUcuQVBJX1BBVEhTLlNDT1JFUyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NvcmVJZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNjb3JlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0U2NvcmVNYW5hZ2VyREFPKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hBbGxTY29yZXMoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzOiB0aGlzLnNjb3JlcyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGxheWVyU2NvcmVJZHM6IHRoaXMuY3VycmVudFBsYXllclNjb3JlSWRzLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIHVwbG9hZFNjb3JlKHNjb3JlLCBhbGlhcykge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXJTY29yZUlkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1dFNjb3JlKHRoaXMuY3VycmVudFBsYXllclNjb3JlSWRzWzBdLCBNYXRoLnJvdW5kKHNjb3JlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3N0U2NvcmUoTWF0aC5yb3VuZChzY29yZSksIGFsaWFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBwb3N0U2NvcmUoc2NvcmUsIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2godGhpcy5hcGlFbmRwb2ludCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGxheWVyQWxpYXM6IGFsaWFzLCBzY29yZTogc2NvcmUgfSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGJvZHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjb3JlSWRzLnB1c2goYm9keS5pZCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVuYWJsZSB0byBwb3N0IHNjb3JlOiAke3Jlc31gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIHB1dFNjb3JlKGlkLCBzY29yZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHB1dFNjb3JlRW5kcG9pbnQgPSB0aGlzLmFwaUVuZHBvaW50ICsgXCIvXCIgKyBpZDtcclxuICAgICAgICAgICAgZmV0Y2gocHV0U2NvcmVFbmRwb2ludCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzY29yZTogc2NvcmUgfSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGJvZHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVW5hYmxlIHRvIHVwZGF0ZSBzY29yZTogJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmZXRjaEFsbFNjb3JlcygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaCh0aGlzLmFwaUVuZHBvaW50LCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGJvZHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVzID0gW107XHJcbiAgICAgICAgICAgICAgICBib2R5LmZvckVhY2goKHNjb3JlKSA9PiB0aGlzLnNjb3Jlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogc2NvcmUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQWxpYXM6IHNjb3JlLnBsYXllcl9hbGlhcyxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUuc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoc2NvcmUuZGF0ZV9zY29yZWQpLFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbmFibGUgdG8gZmV0Y2ggc2NvcmVzOiAke3Jlc31gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNUb3VjaERldmljZSgpIHtcclxuICAgIHJldHVybiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cgfHxcclxuICAgICAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwKTtcclxufVxyXG4vKipcclxuICogRnVuY3Rpb24gdG8gY2hlY2sgd2hldGhlciBkZXZpY2UgaXMgbGlrZWx5IHRvIGJlIGEgbW9iaWxlIGRldmljZS4gQWRhcHRlZCBmcm9tIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpIHtcclxuICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgKGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8XHJcbiAgICAgICAgICAgIC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKVxyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcclxuICAgIHJldHVybiBjaGVjaztcclxufVxyXG4iLCJpbXBvcnQgeyBpc01vYmlsZSwgaXNUb3VjaERldmljZSB9IGZyb20gXCIuLi91dGlsL2RldmljZURpc2NvdmVyeVwiO1xyXG5leHBvcnQgY2xhc3MgQ29udHJvbFR1dG9yaWFsIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgY29udHJvbGxlciwgYXNzc2V0UmVwb3NpdG9yeSkge1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9zaXRvcnkgPSBhc3NzZXRSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5DT05UUk9MX1RVVE9SSUFMLkNPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuQ09OVFJPTF9UVVRPUklBTC5JTUFHRSk7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuQ09OVFJPTF9UVVRPUklBTC5MQUJFTCk7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLk1JU0MuVE9VQ0hfQ09OVFJPTExFUik7XHJcbiAgICAgICAgdGhpcy5zaG93VHV0b3JpYWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCk7XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGlmIChpc01vYmlsZSgpICYmIGlzVG91Y2hEZXZpY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuYXNzZXRSZXBvc2l0b3J5LmdldEltYWdlKFwidG91Y2gtaW5kaWNhdG9yXCIpLnNyYztcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5pbm5lckhUTUwgPSBcIlRhcCB0byBqdW1wXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuYXNzZXRSZXBvc2l0b3J5LmdldEltYWdlKFwic3BhY2ViYXItaW5kaWNhdG9yXCIpLnNyYztcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5pbm5lckhUTUwgPSBcIlByZXNzIFNQQUNFIHRvIGp1bXBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1R1dG9yaWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUV2ZW50cy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZUV2ZW50cy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUV2ZW50cyhlKSB7XHJcbiAgICAgICAgaWYgKChlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSA9PSB0aGlzLkNPTkZJRy5LRVlfQ09ERVMuanVtcCkgfHxcclxuICAgICAgICAgICAgZS50eXBlID09IFwidG91Y2hzdGFydFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUdXRvcmlhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldHVwRWxlbWVudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUV2ZW50cy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZUV2ZW50cy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHZXRQbGF5ZXJBbGlhc0RpYWxvZyB9IGZyb20gXCIuL2NvbXBvbmVudHMvR2V0UGxheWVyQWxpYXNEaWFsb2dcIjtcclxuaW1wb3J0IHsgU2NvcmVUYWJsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvU2NvcmVUYWJsZVwiO1xyXG5pbXBvcnQgeyBTZWxlY3RQbGF5ZXJEaWFsb2cgfSBmcm9tIFwiLi9jb21wb25lbnRzL1NlbGVjdFBsYXllckRpYWxvZ1wiO1xyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY3JlZW4ge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCBjb250cm9sbGVyLCBhdWRpb1BsYXllciwgYXNzZXRSZXNwb3NpdG9yeSkge1xyXG4gICAgICAgIC8vIFN0cmluZ3NcclxuICAgICAgICB0aGlzLlNUUl9ORVdfSElHSFNDT1JFID0gXCJOZXcgSGlnaHNjb3JlIVwiO1xyXG4gICAgICAgIHRoaXMuU1RSX1NDT1JFID0gXCJTY29yZVwiO1xyXG4gICAgICAgIHRoaXMuQkFDS0dST1VORF9JTUFHRV9QQVRIID0gXCIvYXNzZXRzL3VwbG9hZHMvZGVzaWduX2dhbWVfb3Zlcl9iZy5zdmdcIjtcclxuICAgICAgICB0aGlzLnRhYmxlVHJpZ2dlckNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLkNPTkZJRyA9IENPTkZJRztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBhdWRpb1BsYXllcjtcclxuICAgICAgICB0aGlzLmFzc2V0UmVwb3NpdG9yeSA9IGFzc2V0UmVzcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5zY29yZVRhYmxlQ29tcG9uZW50ID0gbmV3IFNjb3JlVGFibGUoQ09ORklHLCB0aGlzLCBhdWRpb1BsYXllciwgYXNzZXRSZXNwb3NpdG9yeSk7XHJcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJBbGlhc0RpYWxvZyA9IG5ldyBHZXRQbGF5ZXJBbGlhc0RpYWxvZyhDT05GSUcsIGF1ZGlvUGxheWVyKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBsYXllckRpYWxvZyA9IG5ldyBTZWxlY3RQbGF5ZXJEaWFsb2coQ09ORklHLCBhdWRpb1BsYXllciwgYXNzZXRSZXNwb3NpdG9yeSk7XHJcbiAgICAgICAgdGhpcy5sb2NrVGFibGVVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhYmxlVXBkYXRlUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY29yZUZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImRlLURFXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkNPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5wYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5QQU5FTCk7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLlJFU1RBUlRfQlVUVE9OKTtcclxuICAgICAgICB0aGlzLnF1aXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uUVVJVF9CVVRUT04pO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLlNDT1JFX1RFWFQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5TQ09SRV9WQUxVRSk7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5DSEFSQUNURVJfU0VMRUNUT1IpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLlNDUk9MTF9DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMucGFnZU9uZUluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5QQUdFX09ORV9JTkRJQ0FUT1IpO1xyXG4gICAgICAgIHRoaXMucGFnZVR3b0luZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5QQUdFX1RXT19JTkRJQ0FUT1IpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCk7XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuY29udHJvbGxlci5nZXRHYW1lU3RhdGVEQU8oKSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAvLyB0aGlzLnRyaWdnZXJTY29yZVRhYmxlVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIC8vIFdlIGRvIG5vdCBjb250cm9sIGNvbmN1cnJlbmN5IGhlcmUsIHdlIHRydXN0IHRoZSBjb250cm9sbGVyXHJcbiAgICBhc3luYyBnZXRQbGF5ZXJBbGlhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQbGF5ZXJBbGlhc0RpYWxvZy5nZXRQbGF5ZXJBbGlhcygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlclNjb3JlVGFibGVVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gU3RpbGwgdW5zYWZlLCBidXQgYmV0dGVyXHJcbiAgICAgICAgaWYgKHRoaXMubG9ja1RhYmxlVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNPTkZJRy5TRVRUSU5HUy5kZWJ1Z0lzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYWJsZSB1cGRhdGUgaXMgbG9ja2VkLCB0cmlnZ2VyIHF1ZXVlLi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVVcGRhdGVSZXF1ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9ja1RhYmxlVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5DT05GSUcuU0VUVElOR1MuZGVidWdJc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZVRyaWdnZXJDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9ja2luZyB0YWJsZSB1cGRhdGUuIFRyaWdnZXIgY291bnRlcjogJHt0aGlzLnRhYmxlVHJpZ2dlckNvdW50fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3JlVGFibGVDb21wb25lbnQuc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJcclxuICAgICAgICAgICAgLmdldFNjb3JlTWFuYWdlckRBTygpXHJcbiAgICAgICAgICAgIC50aGVuKChzY29yZU1hbmFnZXJEQU8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVRhYmxlQ29tcG9uZW50LmNyZWF0ZVNjb3JlVGFibGUoc2NvcmVNYW5hZ2VyREFPKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVRhYmxlQ29tcG9uZW50LnNob3dUYWJsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVUYWJsZUNvbXBvbmVudC5zaG93RXJyb3IoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkNPTkZJRy5TRVRUSU5HUy5kZWJ1Z0lzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWxlYXNlIHRhYmxlIGxvY2suLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2NrVGFibGVVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVVcGRhdGVSZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkNPTkZJRy5TRVRUSU5HUy5kZWJ1Z0lzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmlnZ2VyIHRhYmxlIHVwZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVVcGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlclNjb3JlVGFibGVVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5QXNzZXRzTG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGxheWVyRGlhbG9nLnNldHVwQ2Fyb3VzZWwoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShnYW1lU3RhdGVEQU8pIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q2hhcmFjdGVyID0gdGhpcy5DT05GSUcuUExBWUVSX1RFTVBMQVRFUy5maW5kKChlbCkgPT4gZWwuaWQgPT09IGdhbWVTdGF0ZURBTy5jaGFyYWN0ZXJJZCk7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Rvci5pbm5lclRleHQgPSBjdXJyZW50Q2hhcmFjdGVyLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGxheWVyRGlhbG9nLnNldFBsYXllckluZGV4KHRoaXMuQ09ORklHLlBMQVlFUl9URU1QTEFURVMuaW5kZXhPZihjdXJyZW50Q2hhcmFjdGVyKSk7XHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgZ2FtZVN0YXRlREFPLmN1cnJlbnRTY29yZSA8IGdhbWVTdGF0ZURBTy5sb2NhbEhpZ2hzY29yZVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLlNUUl9TQ09SRVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLlNUUl9ORVdfSElHSFNDT1JFO1xyXG4gICAgICAgIHRoaXMuc2NvcmVWYWx1ZS5pbm5lckhUTUwgPSBTdHJpbmcodGhpcy5zY29yZUZvcm1hdHRlci5mb3JtYXQoTWF0aC5yb3VuZChnYW1lU3RhdGVEQU8uY3VycmVudFNjb3JlKSkpO1xyXG4gICAgfVxyXG4gICAgc2V0dXBFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuQkFDS0dST1VORF9JTUFHRV9QQVRIfSlgO1xyXG4gICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jb250cm9sbGVyLnJlc3RhcnRHYW1lLmJpbmQodGhpcy5jb250cm9sbGVyKSk7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0UGxheWVyRGlhbG9nLnNob3coKS50aGVuKChwbGF5ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Rvci5pbm5lclRleHQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ09ORklHLlBMQVlFUl9URU1QTEFURVNbcGxheWVySW5kZXhdLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldENoYXJhY3Rlcih0aGlzLkNPTkZJRy5QTEFZRVJfVEVNUExBVEVTW3RoaXMuc2VsZWN0UGxheWVyRGlhbG9nLmdldFBsYXllckluZGV4KCldXHJcbiAgICAgICAgICAgICAgICAgICAgLmlkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5xdWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgICAgIHRoaXMucGFnZU9uZUluZGljYXRvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzMzEzNWNcIjtcclxuICAgICAgICB0aGlzLnBhZ2VUd29JbmRpY2F0b3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmZiZmJmXCI7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbEV2ZW50KCkpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU2Nyb2xsRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPFxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5vZmZzZXRXaWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlT25lSW5kaWNhdG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzMzMTM1Y1wiO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VUd29JbmRpY2F0b3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmZiZmJmXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VPbmVJbmRpY2F0b3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmZiZmJmXCI7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVR3b0luZGljYXRvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzMzEzNWNcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEluR2FtZUluZm9TY3JlZW4ge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCBjb250cm9sbGVyLCBhc3NzZXRSZXBvc2l0b3J5LCBhdWRpb1BsYXllcikge1xyXG4gICAgICAgIHRoaXMuQkFDS0dST1VORF9JTUFHRV9QQVRIID0gXCIvYXNzZXRzL3VwbG9hZHMvaW50cm8tYmcucG5nXCI7XHJcbiAgICAgICAgdGhpcy5SRUZSRVNIX1RJTUUgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5MRUFWRV9BTklNQVRJT05fRFVSQVRJT04gPSA1MDA7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmFzc2V0UmVwb3NpdG9yeSA9IGFzc3NldFJlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5JTl9HQU1FX0lORk9fU0NSRUVOLkNPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5QQVVTRV9CVVRUT04pO1xyXG4gICAgICAgIHRoaXMubXV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5NVVRFX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5zY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5TQ09SRV9DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5TQ09SRV9MQUJFTCk7XHJcbiAgICAgICAgdGhpcy5oaXRDb2xsZWN0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5ISVRfQ09MTEVDVEFCTEUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNNdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wYXVzZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uUGF1c2VcIikuc3JjO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXV0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRlSWNvbi5zcmMgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcImljb25NdXRlXCIpLnNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uU291bmRcIikuc3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoU2NvcmVJZCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUGFuZWwuYmluZCh0aGlzKSwgdGhpcy5SRUZSRVNIX1RJTUUpO1xyXG4gICAgfVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMucmVmcmVzaFNjb3JlSWQpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcIndnLXNpbS1pbi1nYW1lLWluZm8tYW5pbWF0aW9uXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LCB0aGlzLkxFQVZFX0FOSU1BVElPTl9EVVJBVElPTik7XHJcbiAgICB9XHJcbiAgICBub3RpZnlOZXdIaWdoc2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcIndnLXNpbS1pbmdhbWUtaGlnaHNjb3JlLWFuaW1hdGlvblwiO1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwibmV3LWluZ2FtZS1oaWdoc2NvcmVcIik7XHJcbiAgICB9XHJcbiAgICBub3RpZnlIaXRDb2xsZWN0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLmhpdENvbGxlY3RhYmxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5oaXRDb2xsZWN0YWJsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpLCAxMDAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVBhbmVsKCkge1xyXG4gICAgICAgIGNvbnN0IGdhbWVTdGF0ZURBTyA9IHRoaXMuY29udHJvbGxlci5nZXRHYW1lU3RhdGVEQU8oKTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuaW5uZXJIVE1MID0gU3RyaW5nKE1hdGgucm91bmQoZ2FtZVN0YXRlREFPLmN1cnJlbnRTY29yZSkpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUGF1c2VHYW1lKCkge1xyXG4gICAgICAgIC8vIFRPRE8gY291bGQgbGVhZCB0byBpbnZhbGlkIGJ1dHRvbiBiZWNhdXNlIHJldHVybiB0eXBlIGlzIG5vdCB2ZXJpZmllZFxyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlSWNvbi5zcmMgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcImljb25QbGF5XCIpLnNyYztcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnBhdXNlR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uUGF1c2VcIikuc3JjO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVzdW1lR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVNdXRlR2FtZSgpIHtcclxuICAgICAgICAvLyBUT0RPIGludmFsaWQgc3RhdGUgYWZ0ZXIgcmVzdGFydFxyXG4gICAgICAgIC8vIFRPRE8gY291bGQgbGVhZCB0byBpbnZhbGlkIGJ1dHRvbiBiZWNhdXNlIHJldHVybiB0eXBlIGlzIG5vdCB2ZXJpZmllZFxyXG4gICAgICAgIGlmICghdGhpcy5pc011dGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uTXV0ZVwiKS5zcmM7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRNdXRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uU291bmRcIikuc3JjO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0TXV0ZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTXV0ZWQgPSAhdGhpcy5pc011dGVkO1xyXG4gICAgfVxyXG4gICAgc2V0dXBFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID1cclxuICAgICAgICAgICAgU3RyaW5nKHRoaXMuTEVBVkVfQU5JTUFUSU9OX0RVUkFUSU9OIC8gMTAwMCkgKyBcInNcIjtcclxuICAgICAgICB0aGlzLmhpdENvbGxlY3RhYmxlLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIFwiK1wiICsgU3RyaW5nKHRoaXMuQ09ORklHLkdBTUVfUExBWS5wb2ludHNQZXJDb2xsZWN0YWJsZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZUljb24gPSB0aGlzLnBhdXNlQnV0dG9uLmFwcGVuZENoaWxkKG5ldyBJbWFnZSgpKTtcclxuICAgICAgICB0aGlzLm11dGVJY29uID0gdGhpcy5tdXRlQnV0dG9uLmFwcGVuZENoaWxkKG5ldyBJbWFnZSgpKTtcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5tdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQYXVzZUdhbWUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5tdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU11dGVHYW1lLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnRyb1NjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIGNvbnRyb2xsZXIsIGF1ZGlvUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5CQUNLR1JPVU5EX0lNQUdFX1BBVEggPSBcIi9hc3NldHMvdXBsb2Fkcy9pbnRyby1iZy5zdmdcIjtcclxuICAgICAgICB0aGlzLkxFQVZFX0FOSU1BVElPTl9EVVJBVElPTiA9IDE4MDA7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gYXVkaW9QbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLklOVFJPX1NDUkVFTi5DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMucGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLklOVFJPX1NDUkVFTi5QQU5FTCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5UUk9fU0NSRUVOLlNUQVJUX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwid2ctc2ltLWdhbWUtaW50cm8tYW5pbWF0aW9uXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LCB0aGlzLkxFQVZFX0FOSU1BVElPTl9EVVJBVElPTik7XHJcbiAgICB9XHJcbiAgICBvblN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25TdGFydCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zdGFydEdhbWUoKTtcclxuICAgICAgICB9LCB0aGlzLkxFQVZFX0FOSU1BVElPTl9EVVJBVElPTik7XHJcbiAgICB9XHJcbiAgICBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPVxyXG4gICAgICAgICAgICBTdHJpbmcodGhpcy5MRUFWRV9BTklNQVRJT05fRFVSQVRJT04gLyAxMDAwKSArIFwic1wiO1xyXG4gICAgICAgIHRoaXMucGFuZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuQkFDS0dST1VORF9JTUFHRV9QQVRIfSlgO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25TdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIExvYWRpbmdTY3JlZW4ge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCBjb250cm9sbGVyLCBhc3NldFJlcG9zaXRvcnksIGF1ZGlvUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmFzc2V0UmVwb3NpdG9yeSA9IGFzc2V0UmVwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gYXVkaW9QbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkxPQURJTkdfU0NSRUVOLlBST0dSRVNTX0xBQkVMX0NPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuTE9BRElOR19TQ1JFRU4uUFJPR1JFU1MpO1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkxPQURJTkdfU0NSRUVOLlBST0dSRVNTX0xBQkVMKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYWYodGhpcy5ydW4pO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBjb25zdCBsb2FkaW5nUHJvZ3Jlc3MgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRQcm9ncmVzcygpO1xyXG4gICAgICAgIGNvbnN0IGNzc1JpZ2h0ID0gMTAwICogKDAuOTcgLSBsb2FkaW5nUHJvZ3Jlc3MgKiAwLjk1NSk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zdHlsZS5yaWdodCA9IFN0cmluZyhjc3NSaWdodCkgKyBcIiVcIjtcclxuICAgICAgICB0aGlzLmxhYmVsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIFwiTG9hZGluZyBnYW1lLi4uXCIgKyBNYXRoLmZsb29yKGxvYWRpbmdQcm9ncmVzcyAqIDEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxuICAgIGhhbmRsZVJhZihjYWxsYmFjaywgcGFyYW1ldGVyKSB7XHJcbiAgICAgICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2suYmluZCh0aGlzLCBwYXJhbWV0ZXIpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgR2V0UGxheWVyQWxpYXNEaWFsb2cge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCBhdWRpb1BsYXllcikge1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBhdWRpb1BsYXllcjtcclxuICAgICAgICB0aGlzLnBsYXllckFsaWFzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1BMQVlFUl9BTElBUy5DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQWxpYXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9QTEFZRVJfQUxJQVMuSU5QVVQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQWxpYXNTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfUExBWUVSX0FMSUFTXHJcbiAgICAgICAgICAgIC5TVUJNSVRfQlVUVE9OKTtcclxuICAgICAgICB0aGlzLnBsYXllckFsaWFzU2tpcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9QTEFZRVJfQUxJQVNcclxuICAgICAgICAgICAgLlNLSVBfQlVUVE9OKTtcclxuICAgICAgICB0aGlzLnNldHVwRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0UGxheWVyQWxpYXMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJBbGlhcyA9IHRoaXMucGxheWVyQWxpYXNJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHBsYXllckFsaWFzID09PSBcIlwiID8gcmVzb2x2ZShudWxsKSA6IHJlc29sdmUocGxheWVyQWxpYXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc1NraXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQWxpYXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc1NraXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwiYnV0dG9uXCIpKTtcclxuICAgICAgICB0aGlzLnBsYXllckFsaWFzU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNjb3JlVGFibGUge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCBnYW1lT3ZlclNjcmVlbiwgYXVkaW9QbGF5ZXIsIGFzc2V0UmVzcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLkNPTkZJRyA9IENPTkZJRztcclxuICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuID0gZ2FtZU92ZXJTY3JlZW47XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuYXNzZXRSZXBvc2l0b3J5ID0gYXNzZXRSZXNwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLnRhYmxlUm93c0J5U2NvcmUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImRlLURFXCIpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0NPUkVfVEFCTEUuVEFCTEUpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NDT1JFX1RBQkxFLkNPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTY29yZXNUYWJsZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NDT1JFX1RBQkxFXHJcbiAgICAgICAgICAgIC5GSUxURVJfU0NPUkVTX1NFTEVDVE9SKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTY29yZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0NPUkVfVEFCTEVcclxuICAgICAgICAgICAgLkxPQURJTkdfU0NPUkVTX0NPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5lcnJvckxvYWRpbmdTY29yZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0NPUkVfVEFCTEVcclxuICAgICAgICAgICAgLkVSUk9SX1NDT1JFU19DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMucmV0cnlMb2FkU2NvcmVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NDT1JFX1RBQkxFXHJcbiAgICAgICAgICAgIC5SRVRSWV9MT0FEX1NDT1JFU19CVVRUT04pO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCk7XHJcbiAgICB9XHJcbiAgICBzaG93VGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmVycm9yTG9hZGluZ1Njb3Jlc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5zY29yZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfVxyXG4gICAgc2hvd0xvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZXJyb3JMb2FkaW5nU2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTY29yZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfVxyXG4gICAgc2hvd0Vycm9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTY29yZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZXJyb3JMb2FkaW5nU2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH1cclxuICAgIGNyZWF0ZVNjb3JlVGFibGUoc2NvcmVNYW5hZ2VyREFPKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZXNUYWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudGFibGVSb3dzQnlTY29yZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICBjb25zdCBzY29yZXMgPSBbLi4uc2NvcmVNYW5hZ2VyREFPLnNjb3Jlc10uc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xyXG4gICAgICAgIGxldCBzY3JvbGxUb1JvdyA9IG51bGw7XHJcbiAgICAgICAgc2NvcmVzLmZvckVhY2goKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuc2NvcmVzVGFibGUuaW5zZXJ0Um93KC0xKTtcclxuICAgICAgICAgICAgY29uc3QgbnJDZWxsID0gcm93Lmluc2VydENlbGwoMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKDEpO1xyXG4gICAgICAgICAgICBjb25zdCBzY29yZUNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgyKTtcclxuICAgICAgICAgICAgaWYgKHJvdy5yb3dJbmRleCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIG5yQ2VsbC5pbm5lclRleHQgPSBTdHJpbmcocm93LnJvd0luZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgICAgICBuckNlbGwuc3R5bGUucGFkZGluZyA9IFwiMHJlbVwiO1xyXG4gICAgICAgICAgICAgICAgbnJDZWxsLnN0eWxlLmRpc3BsYXkgPSBcInJldmVydFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVkYWwgPSBuckNlbGwuYXBwZW5kQ2hpbGQobmV3IEltYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgbWVkYWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93LnJvd0luZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkYWwuc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJtZWRhbEZpcnN0XCIpLnNyYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJvdy5yb3dJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGFsLnNyYyA9IHRoaXMuYXNzZXRSZXBvc2l0b3J5LmdldEltYWdlKFwibWVkYWxTZWNvbmRcIikuc3JjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocm93LnJvd0luZGV4ID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkYWwuc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJtZWRhbFRoaXJkXCIpLnNyYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGlhc0NlbGwuaW5uZXJUZXh0ID0gc2NvcmUucGxheWVyQWxpYXM7XHJcbiAgICAgICAgICAgIHNjb3JlQ2VsbC5pbm5lclRleHQgPSB0aGlzLnNjb3JlRm9ybWF0dGVyLmZvcm1hdChzY29yZS5zY29yZSk7XHJcbiAgICAgICAgICAgIGlmIChzY29yZU1hbmFnZXJEQU8uY3VycmVudFBsYXllclNjb3JlSWRzLmluZGV4T2Yoc2NvcmUuaWQpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuY29sb3IgPSBcIiNkZTM4YzhcIjtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1JvdyA9IHNjcm9sbFRvUm93ID09PSBudWxsID8gcm93IDogc2Nyb2xsVG9Sb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50YWJsZVJvd3NCeVNjb3JlLnNldChzY29yZSwgcm93KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBEb2VzIG5vdCB3b3JrIGhlcmUgYmVjYXVzZSB0YWJsZS5zdHlsZS5kaXNwbGF5IGlzIG5vbmVcclxuICAgICAgICAvLyBpZiAoc2Nyb2xsVG9Sb3cgIT09IG51bGwpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjb3Jlc1RhYmxlLm9mZnNldEhlaWdodCAqXHJcbiAgICAgICAgLy8gICAgICAgKHNjcm9sbFRvUm93LnJvd0luZGV4IC8gdGhpcy5zY29yZXNUYWJsZS5yb3dzLmxlbmd0aClcclxuICAgICAgICAvLyAgICk7XHJcbiAgICAgICAgLy8gICB0aGlzLnNjb3Jlc1RhYmxlLnNjcm9sbFRvKHtcclxuICAgICAgICAvLyAgICAgdG9wOlxyXG4gICAgICAgIC8vICAgICAgIHRoaXMuc2NvcmVzVGFibGUub2Zmc2V0SGVpZ2h0ICpcclxuICAgICAgICAvLyAgICAgICAoc2Nyb2xsVG9Sb3cucm93SW5kZXggLyB0aGlzLnNjb3Jlc1RhYmxlLnJvd3MubGVuZ3RoKSxcclxuICAgICAgICAvLyAgICAgbGVmdDogMCxcclxuICAgICAgICAvLyAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJTY29yZVRhYmxlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgREFZU19QRVJfV0VFSyA9IDc7XHJcbiAgICAgICAgY29uc3QgREFZU19QRVJfTU9OVEggPSAzMDtcclxuICAgICAgICBsZXQgbWF4aW1hbERheURpZmZlcmVuY2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIk1PTlRIXCIpIHtcclxuICAgICAgICAgICAgbWF4aW1hbERheURpZmZlcmVuY2UgPSBEQVlTX1BFUl9NT05USDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IFwiV0VFS1wiKSB7XHJcbiAgICAgICAgICAgIG1heGltYWxEYXlEaWZmZXJlbmNlID0gREFZU19QRVJfV0VFSztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1heGltYWxEYXlEaWZmZXJlbmNlID0gSW5maW5pdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFibGVSb3dzQnlTY29yZS5mb3JFYWNoKChyb3csIHNjb3JlLCBtYXApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF5RGlmZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5hYnMoRGF0ZS5ub3coKSAtIHNjb3JlLmRhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgICAgIGlmIChkYXlEaWZmZXJlbmNlID4gbWF4aW1hbERheURpZmZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldHVwRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnJldHJ5TG9hZFNjb3Jlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5nYW1lT3ZlclNjcmVlbi50cmlnZ2VyU2NvcmVUYWJsZVVwZGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnJldHJ5TG9hZFNjb3Jlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyU2NvcmVzVGFibGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlclNjb3JlVGFibGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU2VsZWN0UGxheWVyRGlhbG9nIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgYXVkaW9QbGF5ZXIsIGFzc2V0UmVzcG9yaXRvcnkpIHtcclxuICAgICAgICB0aGlzLkNBTlZBU19XSURUSCA9IDEzMDtcclxuICAgICAgICB0aGlzLkNBTlZBU19IRUlHSFQgPSAxODA7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9zaXRvcnkgPSBhc3NldFJlc3Bvcml0b3J5O1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBhdWRpb1BsYXllcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NFTEVDVF9QTEFZRVIuQ09OVEFJTkVSKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TRUxFQ1RfUExBWUVSLkNBUk9VU0VMKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsTmF2TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0VMRUNUX1BMQVlFUlxyXG4gICAgICAgICAgICAuQ0FST1VTRUxfTkFWX0xFRlQpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxOYXZSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0VMRUNUX1BMQVlFUlxyXG4gICAgICAgICAgICAuQ0FST1VTRUxfTkFWX1JJR0hUKTtcclxuICAgICAgICB0aGlzLm5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TRUxFQ1RfUExBWUVSLk5BTUVfRElTUExBWSk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NFTEVDVF9QTEFZRVIuQlVUVE9OX1NVQk1JVCk7XHJcbiAgICAgICAgdGhpcy5lc2NhcGVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TRUxFQ1RfUExBWUVSLkVTQ19JQ09OKTtcclxuICAgICAgICB0aGlzLnNldHVwRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgc2V0UGxheWVySW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuQ09ORklHLlBMQVlFUl9URU1QTEFURVMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnNjcm9sbChpbmRleCAtIHRoaXMuY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICAgIGdldFBsYXllckluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2hvdygpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lc2NhcGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIHNldHVwQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuQ09ORklHLlBMQVlFUl9URU1QTEFURVMuZm9yRWFjaCgoY2hhcmFjaHRlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLkNBTlZBU19XSURUSDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuQ0FOVkFTX0hFSUdIVDtcclxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy5DQU5WQVNfV0lEVEggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLkNBTlZBU19IRUlHSFQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKFwid2ctc2ltLXNlbGVjdC1wbGF5ZXItZGlhbG9nLWNhcm91c2VsLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoY2hhcmFjaHRlci5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc1JhdGlvID0gdGhpcy5DQU5WQVNfV0lEVEggLyB0aGlzLkNBTlZBU19IRUlHSFQ7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aElzRG9taW5hbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2FudmFzUmF0aW8gPiBjaGFyYWNodGVyLmZyYW1lV2lkdGggLyBjaGFyYWNodGVyLmRpbWVuc2lvbnMuaCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGhJc0RvbWluYW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZFdpZHRoID0gd2lkdGhJc0RvbWluYW50XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuQ0FOVkFTX1dJRFRIXHJcbiAgICAgICAgICAgICAgICA6IGNoYXJhY2h0ZXIuZnJhbWVXaWR0aCAqXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuQ0FOVkFTX0hFSUdIVCAvIGNoYXJhY2h0ZXIuZGltZW5zaW9ucy5oKTtcclxuICAgICAgICAgICAgY29uc3QgZEhlaWdodCA9ICF3aWR0aElzRG9taW5hbnRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5DQU5WQVNfSEVJR0hUXHJcbiAgICAgICAgICAgICAgICA6IGNoYXJhY2h0ZXIuZGltZW5zaW9ucy5oICogKHRoaXMuQ0FOVkFTX1dJRFRIIC8gY2hhcmFjaHRlci5mcmFtZVdpZHRoKTtcclxuICAgICAgICAgICAgY29uc3QgZHggPSB3aWR0aElzRG9taW5hbnQgPyAwIDogKHRoaXMuQ0FOVkFTX1dJRFRIIC0gZFdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gIXdpZHRoSXNEb21pbmFudCA/IDAgOiAodGhpcy5DQU5WQVNfSEVJR0hUIC0gZEhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM0NDQ0NDRcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDM7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNoYXJhY2h0ZXIuZnJhbWVXaWR0aCwgY2hhcmFjaHRlci5kaW1lbnNpb25zLmgsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNjcm9sbChkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMubW9kKHRoaXMuY3VycmVudEluZGV4ICsgZGlyZWN0aW9uLCB0aGlzLkNPTkZJRy5QTEFZRVJfVEVNUExBVEVTLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgeFBvc2l0aW9uID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRXaWR0aCAqIHRoaXMuY3VycmVudEluZGV4O1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IHhQb3NpdGlvbixcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTY3JvbGxFdmVudCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IE1hdGgucm91bmQodGhpcy5jYXJvdXNlbC5zY3JvbGxMZWZ0IC8gdGhpcy5jYXJvdXNlbC5vZmZzZXRXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlzcGxheS5pbm5lclRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLkNPTkZJRy5QTEFZRVJfVEVNUExBVEVTW3RoaXMuY3VycmVudEluZGV4XS5kaXNwbGF5TmFtZTtcclxuICAgIH1cclxuICAgIG1vZChudW1iZXIsIG1vZHVsb3MpIHtcclxuICAgICAgICByZXR1cm4gKChudW1iZXIgJSBtb2R1bG9zKSArIG1vZHVsb3MpICUgbW9kdWxvcztcclxuICAgIH1cclxuICAgIHNldHVwRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGxFdmVudCgpKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsTmF2TGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zY3JvbGwoLTEpKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsTmF2UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2Nyb2xsKDEpKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsTmF2TGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxOYXZSaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5lc2NhcGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBXZ1NpbXVsYXRvck1haW4gfSBmcm9tIFwiLi9NYWluXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBuZXcgV2dTaW11bGF0b3JNYWluKCk7XHJcbiAgICByZXR1cm4gbWFpbjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=