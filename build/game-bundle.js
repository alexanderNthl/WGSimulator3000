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
                imagePath: "http://alex-portfolio.local/wp-content/uploads/star.png",
            },
            {
                id: "design_intro_bg",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/intro-bg.svg",
            },
            {
                id: "design_game_over_bg",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/design_game_over_bg.svg",
            },
            {
                id: "iconPlay",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/play-fill.svg",
            },
            {
                id: "iconPause",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/pause-fill.svg",
            },
            {
                id: "iconMute",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/volume-mute-fill.svg",
            },
            {
                id: "iconSound",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/volume-up-fill.svg",
            },
            {
                id: "medalFirst",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/medal-first.svg",
            },
            {
                id: "medalSecond",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/medal-second.svg",
            },
            {
                id: "medalThird",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/medal-third.svg",
            },
            {
                id: "touch-indicator",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/touch-indicator.gif",
            },
            {
                id: "spacebar-indicator",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/spacebar-indicator.gif",
            },
        ];
        this.AUDIOS = [
            {
                id: "main-theme",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/main-theme.mp3",
            },
            {
                id: "game-over",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/game-over.mp3",
            },
            {
                id: "jump",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/jump.mp3",
            },
            {
                id: "collectable",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/collectable.mp3",
            },
            {
                id: "button",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/button.mp3",
            },
            {
                id: "new-ingame-highscore",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/new-ingame-highscore2.mp3",
            },
        ];
        this.BACKGROUND_TEMPLATES = [
            {
                id: "bckgrnd_1",
                dimensions: { w: 5646, h: 400 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/bckgrnd_1.jpg",
            },
        ];
        this.COLLECTABLES_TEMPLATES = [
            {
                id: "clct_1",
                dimensions: { w: 59, h: 197 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/clct_1.png",
                hitBoxes: [{ xOff: 0, yOff: 0, w: 59, h: 197 }],
            },
            {
                id: "clct_2",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/clct_2.png",
                dimensions: { w: 110, h: 196 },
                hitBoxes: [{ xOff: 0, yOff: 0, w: 110, h: 196 }],
            },
            {
                id: "clct_3",
                imagePath: "http://alex-portfolio.local/wp-content/uploads/clct_3.png",
                dimensions: { w: 62, h: 189 },
                hitBoxes: [{ xOff: 0, yOff: 0, w: 62, h: 189 }],
            },
        ];
        this.OBSTACLES_GRND_TEMPLATES = [
            {
                id: "obst_dishes",
                dimensions: { w: 277, h: 162 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/obst_dishes.png",
                hitBoxes: [{ xOff: 77, yOff: 32, w: 180, h: 130 }],
            },
            {
                id: "obst_laundrey",
                dimensions: { w: 305, h: 247 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/obst_laundrey.png",
                hitBoxes: [{ xOff: 10, yOff: 70, w: 295, h: 177 }],
            },
            {
                id: "obst_pigeon_ground_1",
                dimensions: { w: 217, h: 176 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/obst_pigeon_ground_1.png",
                hitBoxes: [
                    { xOff: 17, yOff: 16, w: 90, h: 160 },
                    { xOff: 17, yOff: 90, w: 200, h: 86 },
                ],
            },
            {
                id: "obst_pigeon_ground_2",
                dimensions: { w: 198, h: 176 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/obst_pigeon_ground_2.png",
                hitBoxes: [
                    { xOff: 0, yOff: 0, w: 75, h: 176 },
                    { xOff: 0, yOff: 120, w: 190, h: 56 },
                ],
            },
            {
                id: "obst_trash_1",
                dimensions: { w: 337, h: 136 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/obst_trash_1.png",
                hitBoxes: [{ xOff: 0, yOff: 40, w: 337, h: 96 }],
            },
            {
                id: "obst_trash_2",
                dimensions: { w: 304, h: 238 },
                imagePath: "http://alex-portfolio.local/wp-content/uploads/obst_trash_2.png",
                hitBoxes: [{ xOff: 0, yOff: 138, w: 304, h: 100 }],
            },
        ];
        this.PLAYER_TEMPLATES = [
            // {
            //   id: "ch_alex",
            //   dimensions: { w: 269.2, h: 250 },
            //   imagePath: "http://alex-portfolio.local/wp-content/uploads/ch_alex.png",
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
                imagePath: "http://alex-portfolio.local/wp-content/uploads/ch_alex_2.png",
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
                imagePath: "http://alex-portfolio.local/wp-content/uploads/ch_oli.png",
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
                imagePath: "http://alex-portfolio.local/wp-content/uploads/ch_nico.png",
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
                imagePath: "http://alex-portfolio.local/wp-content/uploads/ch_lotte.png",
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
                imagePath: "http://alex-portfolio.local/wp-content/uploads/ch_praline.png",
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
        this.BACKGROUND_IMAGE_PATH = "http://alex-portfolio.local/wp-content/uploads/design_game_over_bg.svg";
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
        this.BACKGROUND_IMAGE_PATH = "http://alex-portfolio.local/wp-content/uploads/intro-bg.png";
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
        this.BACKGROUND_IMAGE_PATH = "http://alex-portfolio.local/wp-content/uploads/intro-bg.svg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNrRDtBQUNHO0FBQzlDLDhCQUE4QiwyREFBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkRBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRE87QUFDUDs7Ozs7Ozs7Ozs7Ozs7O0FDRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Da0Q7QUFDRztBQUM5Qyx1QkFBdUIsMkRBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDZEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEa0Q7QUFDRztBQUNHO0FBQ2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtDQUFrQztBQUM1QixxQkFBcUIsMkRBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFtQjtBQUMzQztBQUNBO0FBQ0EsbUNBQW1DLDZEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0hrRTtBQUMzRDtBQUNQLHlCQUF5Qiw4RUFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJrRDtBQUMzQyw4QkFBOEIsMkRBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsdUNBQXVDLGtDQUFrQztBQUN6RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxREFBcUQsSUFBSTtBQUN6RDtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBLHVEQUF1RCxJQUFJO0FBQzNEO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJrRTtBQUMzRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQVEsTUFBTSxvRUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3lFO0FBQ3BCO0FBQ2dCO0FBQzlEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOERBQVU7QUFDakQsd0NBQXdDLGtGQUFvQjtBQUM1RCxzQ0FBc0MsOEVBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSx1QkFBdUI7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDJCQUEyQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwyQkFBMkI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUNsQztBQUNQLHFCQUFxQixrREFBZTtBQUNwQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvQ2FudmFzQXJ0aXN0LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9Db250b2xsZXIudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvTWFpbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9Vc2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9hc3NldHMvQXNzZXRSZXBvc2l0b3J5LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL2F1ZGlvL0F1ZGlvUGxheWVyLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL2F1ZGlvL1NvdW5kLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL0dhbWUudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvR2FtZVN0YXRlREFPLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL0dhbWVTdGF0ZXMudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvTG9jYWxTY29yZS50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9tb2RlbC9Vc2VyQ29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvQW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvV29ybGQudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvY29sbGlzaW9uL0NvbGxpc2lvbkRldGVjdG9yLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2NvbGxpc2lvbi9SZWN0SGl0Qm94LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL0JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvQ29sbGVjdGFibGVJdGVtLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL0RyYXdhYmxlT2JqZWN0LnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL0RyYXdhYmxlT2JqZWN0VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvRHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvT2JzdGFjbGUudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvbW9kZWwvd29ybGQvZHJhd2FibGUvUGxheWVyLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL1BsYXllclRlbXBsYXRlLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL21vZGVsL3dvcmxkL2RyYXdhYmxlL1Jld2FyZEV4cGxvc2lvbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9zY29yZS9TY29yZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdXRpbC9kZXZpY2VEaXNjb3ZlcnkudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9Db250cm9sVHV0b3JpYWwudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9HYW1lT3ZlclNjcmVlbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy92aWV3L0luR2FtZUluZm9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9JbnRyb1NjcmVlbi50cyIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy92aWV3L0xvYWRpbmdTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3IvLi9zcmMvdmlldy9jb21wb25lbnRzL0dldFBsYXllckFsaWFzRGlhbG9nLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL3ZpZXcvY29tcG9uZW50cy9TY29yZVRhYmxlLnRzIiwid2VicGFjazovL1dnU2ltdWxhdG9yLy4vc3JjL3ZpZXcvY29tcG9uZW50cy9TZWxlY3RQbGF5ZXJEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dnU2ltdWxhdG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2dTaW11bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZ1NpbXVsYXRvci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWVtcyBsaWtlIGEgdXNlbGVzcyBjbGFzc1xyXG5leHBvcnQgY2xhc3MgQ2FudmFzQXJ0aXN0IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCBoZWlnaHRcclxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodywgaCwgY3R4KSB7XHJcbiAgICAgICAgKHRoaXMud2lkdGggPSB3KSwgKHRoaXMuaGVpZ2h0ID0gaCksICh0aGlzLmN0eCA9IGN0eCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlQ2FudmFzKGNvbnRhaW5lciwgdywgaCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9IFwiZ2FtZS1jYW52YXNcIjtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3O1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xyXG4gICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKFwid2ctc2ltLWdhbWUtY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNhbnZhcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5TRVRUSU5HUyA9IHtcclxuICAgICAgICAgICAgZGVidWdJc0VuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0Rldk1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VyU2NvcmVTZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG1heENhbnZhc1dpZHRoOiA4MDAsXHJcbiAgICAgICAgICAgIG1heENhbnZhc0hlaWdodDogNTAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5BUElfUEFUSFMgPSB7XHJcbiAgICAgICAgICAgIEhPU1Q6IFwiaHR0cDovLzE5Mi4xNjguMC4zODozMDAwXCIsXHJcbiAgICAgICAgICAgIFNDT1JFUzogXCIvYXBpL3dnc2ltdWxhdG9yL3Njb3JlXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkhUTUxfRUxFTUVOVF9JRFMgPSB7XHJcbiAgICAgICAgICAgIEdBTUVfT1ZFUl9TQ1JFRU46IHtcclxuICAgICAgICAgICAgICAgIENPTlRBSU5FUjogXCJnYW1lLW92ZXItY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBQQU5FTDogXCJnYW1lLW92ZXItcGFuZWxcIixcclxuICAgICAgICAgICAgICAgIFNDUk9MTF9DT05UQUlORVI6IFwiZ2FtZS1vdmVyLXNjcm9sbC1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgIFNDT1JFX1RFWFQ6IFwic2NvcmUtdGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgU0NPUkVfVkFMVUU6IFwic2NvcmUtdmFsXCIsXHJcbiAgICAgICAgICAgICAgICBSRVNUQVJUX0JVVFRPTjogXCJyZXN0YXJ0LWJ0blwiLFxyXG4gICAgICAgICAgICAgICAgUVVJVF9CVVRUT046IFwicXVpdC1idG5cIixcclxuICAgICAgICAgICAgICAgIENIQVJBQ1RFUl9TRUxFQ1RPUjogXCJjaGFyYWN0ZXItc2VsZWN0b3JcIixcclxuICAgICAgICAgICAgICAgIFBBR0VfT05FX0lORElDQVRPUjogXCJnYW1lLW92ZXItcGFnZS1pbmRpY2F0b3Itb25lXCIsXHJcbiAgICAgICAgICAgICAgICBQQUdFX1RXT19JTkRJQ0FUT1I6IFwiZ2FtZS1vdmVyLXBhZ2UtaW5kaWNhdG9yLXR3b1wiLFxyXG4gICAgICAgICAgICAgICAgR1JPVVBfU0NPUkVfVEFCTEU6IHtcclxuICAgICAgICAgICAgICAgICAgICBDT05UQUlORVI6IFwiZ2FtZS1vdmVyLXNjb3JlLXRhYmxlLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFRBQkxFOiBcIndnLXNpbS1nYW1lLW92ZXItc2NvcmUtdGFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICBGSUxURVJfU0NPUkVTX1NFTEVDVE9SOiBcImZpbHRlci1zY29yZXMtc2VsZWN0b3JcIixcclxuICAgICAgICAgICAgICAgICAgICBMT0FESU5HX1NDT1JFU19DT05UQUlORVI6IFwiZ2FtZS1vdmVyLWxvYWRpbmctc2NvcmVzLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEVSUk9SX1NDT1JFU19DT05UQUlORVI6IFwiZ2FtZS1vdmVyLWVycm9yLXNjb3Jlcy1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBSRVRSWV9MT0FEX1NDT1JFU19CVVRUT046IFwiZ2FtZS1vdmVyLXJldHJ5LWxvYWQtc2NvcmVzXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgR1JPVVBfUExBWUVSX0FMSUFTOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ09OVEFJTkVSOiBcInBsYXllci1hbGlhcy1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBJTlBVVDogXCJwbGF5ZXItYWxpYXMtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBTS0lQX0JVVFRPTjogXCJwbGF5ZXItYWxpYXMtc2tpcC1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBTVUJNSVRfQlVUVE9OOiBcInBsYXllci1hbGlhcy1zdWJtaXQtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgR1JPVVBfU0VMRUNUX1BMQVlFUjoge1xyXG4gICAgICAgICAgICAgICAgICAgIENPTlRBSU5FUjogXCJzZWxlY3QtcGxheWVyLWRpYWxvZy1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBDQVJPVVNFTDogXCJzZWxlY3QtcGxheWVyLWRpYWxvZy1jYXJvdXNlbC1zY3JvbGwtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ0FST1VTRUxfTkFWX0xFRlQ6IFwic2VsZWN0LXBsYXllci1kaWFsb2ctY2Fyb3VzZWwtbmF2LWxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBDQVJPVVNFTF9OQVZfUklHSFQ6IFwic2VsZWN0LXBsYXllci1kaWFsb2ctY2Fyb3VzZWwtbmF2LXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgTkFNRV9ESVNQTEFZOiBcInNlbGVjdC1wbGF5ZXItZGlhbG9nLXBsYXllci1uYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQlVUVE9OX1NVQk1JVDogXCJzZWxlY3QtcGxheWVyLWRpYWxvZy1zdWJtaXQtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRVNDX0lDT046IFwic2VsZWN0LXBsYXllci1kaWFsb2ctZXNjXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBMT0FESU5HX1NDUkVFTjoge1xyXG4gICAgICAgICAgICAgICAgUFJPR1JFU1M6IFwibG9hZGluZy1wcm9ncmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgUFJPR1JFU1NfTEFCRUw6IFwibG9hZGluZy1wcm9ncmVzcy1sYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgUFJPR1JFU1NfTEFCRUxfQ09OVEFJTkVSOiBcImxvYWRpbmctcHJvZ3Jlc3MtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIElOVFJPX1NDUkVFTjoge1xyXG4gICAgICAgICAgICAgICAgQ09OVEFJTkVSOiBcImdhbWUtaW50cm8tY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBQQU5FTDogXCJnYW1lLWludHJvLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgU1RBUlRfQlVUVE9OOiBcInN0YXJ0LWJ0blwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBJTl9HQU1FX0lORk9fU0NSRUVOOiB7XHJcbiAgICAgICAgICAgICAgICBDT05UQUlORVI6IFwiaW4tZ2FtZS1pbmZvLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgUEFVU0VfQlVUVE9OOiBcImluLWdhbWUtaW5mby1wYXVzZS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgIE1VVEVfQlVUVE9OOiBcImluLWdhbWUtaW5mby1tdXRlLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgU0NPUkVfQ09OVEFJTkVSOiBcImluLWdhbWUtaW5mby1zY29yZS1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgIFNDT1JFX0xBQkVMOiBcImluLWdhbWUtaW5mby1zY29yZS1sYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgSElUX0NPTExFQ1RBQkxFOiBcImluLWdhbWUtaW5mby1oaXQtY29sbGVjdGFibGVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQ09OVFJPTF9UVVRPUklBTDoge1xyXG4gICAgICAgICAgICAgICAgQ09OVEFJTkVSOiBcImNvbnRyb2wtdHV0b3JpYWwtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBJTUFHRTogXCJjb250cm9sLXR1dG9yaWFsLWltZ1wiLFxyXG4gICAgICAgICAgICAgICAgTEFCRUw6IFwiY29udHJvbC10dXRvcmlhbC1sYWJlbFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBNSVNDOiB7XHJcbiAgICAgICAgICAgICAgICBUT1VDSF9DT05UUk9MTEVSOiBcInRvdWNoLWNvbnRyb2xsZXJcIixcclxuICAgICAgICAgICAgICAgIEdBTUVfQ09OVEFJTkVSOiBcImdhbWUtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICBNT0NLX1VQX0NPTlRBSU5FUjogXCJtb2NrLXVwLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5FVkVOVF9LRVlTID0ge1xyXG4gICAgICAgICAgICBHQU1FX1JFQURZOiBcImdhbWUtcmVhZHlcIixcclxuICAgICAgICAgICAgR0FNRV9PVkVSOiBcImdhbWUtb3ZlclwiLFxyXG4gICAgICAgICAgICBORVdfTE9DQUxfSElHSFNDT1JFOiBcIm5ldy1sb2NhbC1oaWdoc2NvcmVcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuS0VZX0NPREVTID0ge1xyXG4gICAgICAgICAgICBqdW1wOiAzMixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuR0FNRV9QTEFZID0ge1xyXG4gICAgICAgICAgICBwb2ludHNQZXJTZWNvbmQ6IDIwLFxyXG4gICAgICAgICAgICBwb2ludHNQZXJDb2xsZWN0YWJsZTogNTAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLklNQUdFUyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwicmV3YXJkLXN0YXJcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL3N0YXIucG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImRlc2lnbl9pbnRyb19iZ1wiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvaW50cm8tYmcuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImRlc2lnbl9nYW1lX292ZXJfYmdcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL2Rlc2lnbl9nYW1lX292ZXJfYmcuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImljb25QbGF5XCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy9wbGF5LWZpbGwuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImljb25QYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvcGF1c2UtZmlsbC5zdmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWNvbk11dGVcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL3ZvbHVtZS1tdXRlLWZpbGwuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImljb25Tb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvdm9sdW1lLXVwLWZpbGwuc3ZnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIm1lZGFsRmlyc3RcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL21lZGFsLWZpcnN0LnN2Z1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJtZWRhbFNlY29uZFwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvbWVkYWwtc2Vjb25kLnN2Z1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJtZWRhbFRoaXJkXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy9tZWRhbC10aGlyZC5zdmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwidG91Y2gtaW5kaWNhdG9yXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy90b3VjaC1pbmRpY2F0b3IuZ2lmXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInNwYWNlYmFyLWluZGljYXRvclwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvc3BhY2ViYXItaW5kaWNhdG9yLmdpZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5BVURJT1MgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIm1haW4tdGhlbWVcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL21haW4tdGhlbWUubXAzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImdhbWUtb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvZ2FtZS1vdmVyLm1wM1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJqdW1wXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy9qdW1wLm1wM1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjb2xsZWN0YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvY29sbGVjdGFibGUubXAzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvYnV0dG9uLm1wM1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJuZXctaW5nYW1lLWhpZ2hzY29yZVwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvbmV3LWluZ2FtZS1oaWdoc2NvcmUyLm1wM1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5CQUNLR1JPVU5EX1RFTVBMQVRFUyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYmNrZ3JuZF8xXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDU2NDYsIGg6IDQwMCB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvYmNrZ3JuZF8xLmpwZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5DT0xMRUNUQUJMRVNfVEVNUExBVEVTID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjbGN0XzFcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogNTksIGg6IDE5NyB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvY2xjdF8xLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFt7IHhPZmY6IDAsIHlPZmY6IDAsIHc6IDU5LCBoOiAxOTcgfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNsY3RfMlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvY2xjdF8yLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAxMTAsIGg6IDE5NiB9LFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFt7IHhPZmY6IDAsIHlPZmY6IDAsIHc6IDExMCwgaDogMTk2IH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjbGN0XzNcIixcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL2NsY3RfMy5wbmdcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogNjIsIGg6IDE4OSB9LFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFt7IHhPZmY6IDAsIHlPZmY6IDAsIHc6IDYyLCBoOiAxODkgfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLk9CU1RBQ0xFU19HUk5EX1RFTVBMQVRFUyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwib2JzdF9kaXNoZXNcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogMjc3LCBoOiAxNjIgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL29ic3RfZGlzaGVzLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFt7IHhPZmY6IDc3LCB5T2ZmOiAzMiwgdzogMTgwLCBoOiAxMzAgfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIm9ic3RfbGF1bmRyZXlcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogMzA1LCBoOiAyNDcgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL29ic3RfbGF1bmRyZXkucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW3sgeE9mZjogMTAsIHlPZmY6IDcwLCB3OiAyOTUsIGg6IDE3NyB9XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwib2JzdF9waWdlb25fZ3JvdW5kXzFcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogMjE3LCBoOiAxNzYgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL29ic3RfcGlnZW9uX2dyb3VuZF8xLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHhPZmY6IDE3LCB5T2ZmOiAxNiwgdzogOTAsIGg6IDE2MCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeE9mZjogMTcsIHlPZmY6IDkwLCB3OiAyMDAsIGg6IDg2IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJvYnN0X3BpZ2Vvbl9ncm91bmRfMlwiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAxOTgsIGg6IDE3NiB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvb2JzdF9waWdlb25fZ3JvdW5kXzIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeE9mZjogMCwgeU9mZjogMCwgdzogNzUsIGg6IDE3NiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeE9mZjogMCwgeU9mZjogMTIwLCB3OiAxOTAsIGg6IDU2IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJvYnN0X3RyYXNoXzFcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogMzM3LCBoOiAxMzYgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL29ic3RfdHJhc2hfMS5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiAwLCB5T2ZmOiA0MCwgdzogMzM3LCBoOiA5NiB9XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwib2JzdF90cmFzaF8yXCIsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7IHc6IDMwNCwgaDogMjM4IH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy9vYnN0X3RyYXNoXzIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW3sgeE9mZjogMCwgeU9mZjogMTM4LCB3OiAzMDQsIGg6IDEwMCB9XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuUExBWUVSX1RFTVBMQVRFUyA9IFtcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgIGlkOiBcImNoX2FsZXhcIixcclxuICAgICAgICAgICAgLy8gICBkaW1lbnNpb25zOiB7IHc6IDI2OS4yLCBoOiAyNTAgfSxcclxuICAgICAgICAgICAgLy8gICBpbWFnZVBhdGg6IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy9jaF9hbGV4LnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyAgIGhpdEJveGVzOiBbeyB4T2ZmOiAxMy42NywgeU9mZjogMCwgdzogMzAuMSwgaDogMjUwIH1dLFxyXG4gICAgICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiBcIkFsZXhcIixcclxuICAgICAgICAgICAgLy8gICBmcmFtZXM6IDQsXHJcbiAgICAgICAgICAgIC8vICAgZnJhbWVXaWR0aDogNjcuMyxcclxuICAgICAgICAgICAgLy8gICBjYW5KdW1wOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyAgIHJ1bm5pbmc6IHtcclxuICAgICAgICAgICAgLy8gICAgIHN0YXJ0RnJhbWU6IDAsXHJcbiAgICAgICAgICAgIC8vICAgICBlbmRGcmFtZTogMSxcclxuICAgICAgICAgICAgLy8gICAgIG1zUGVyRnJhbWU6IDE1MCxcclxuICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAvLyAgIGp1bXBpbmc6IHtcclxuICAgICAgICAgICAgLy8gICAgIHN0YXJ0RnJhbWU6IDIsXHJcbiAgICAgICAgICAgIC8vICAgICBlbmRGcmFtZTogMixcclxuICAgICAgICAgICAgLy8gICAgIG1zUGVyRnJhbWU6IDEwMDAsXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gICBjcmFzaGVkOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBzdGFydEZyYW1lOiAzLFxyXG4gICAgICAgICAgICAvLyAgICAgZW5kRnJhbWU6IDMsXHJcbiAgICAgICAgICAgIC8vICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNoX2FsZXhfMlwiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAxMzY4LCBoOiAyNTAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL2NoX2FsZXhfMi5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiAyNy42NywgeU9mZjogMCwgdzogMzAuMSwgaDogMjQwIH1dLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQWxleFwiLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiA4LFxyXG4gICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogMTcxLFxyXG4gICAgICAgICAgICAgICAgY2FuSnVtcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bm5pbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGp1bXBpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jhc2hlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNoX29saVwiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAzNDAsIGg6IDIzMCB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvY2hfb2xpLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgaGl0Qm94ZXM6IFt7IHhPZmY6IDI4LjgzLCB5T2ZmOiAxNi44OCwgdzogMzIuNzYsIGg6IDIxNS44IH1dLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiT2xpXCIsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IDQsXHJcbiAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiA4NSxcclxuICAgICAgICAgICAgICAgIGNhbkp1bXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBydW5uaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogMSxcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiAxNTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAganVtcGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcmFzaGVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogMyxcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogMyxcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiY2hfbmljb1wiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAxNTMwLCBoOiAyNTAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL2NoX25pY28ucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW3sgeE9mZjogNDMuODMsIHlPZmY6IDUsIHc6IDI4Ljc2LCBoOiAyNDAgfV0sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJOaWNvXCIsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IDksXHJcbiAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiAxNzAsXHJcbiAgICAgICAgICAgICAgICBjYW5KdW1wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcnVubmluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogNjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAganVtcGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcmFzaGVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogOCxcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogOCxcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiY2hfbG90dGVcIixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHsgdzogMTkzNSwgaDogMjUwIH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy9jaF9sb3R0ZS5wbmdcIixcclxuICAgICAgICAgICAgICAgIGhpdEJveGVzOiBbeyB4T2ZmOiA4NSwgeU9mZjogNSwgdzogMjguNzYsIGg6IDI0MCB9XSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkxvdHRlXCIsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogMTkzLjUsXHJcbiAgICAgICAgICAgICAgICBjYW5KdW1wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcnVubmluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogNjUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAganVtcGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RnJhbWU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNQZXJGcmFtZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcmFzaGVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogOSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogOSxcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiY2hfcHJhbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogeyB3OiAxMDY5LCBoOiAyMDAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogXCJodHRwOi8vYWxleC1wb3J0Zm9saW8ubG9jYWwvd3AtY29udGVudC91cGxvYWRzL2NoX3ByYWxpbmUucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBoaXRCb3hlczogW3sgeE9mZjogNTAsIHlPZmY6IDEwMCwgdzogOTAsIGg6IDEwMCB9XSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlByYWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGZyYW1lczogNSxcclxuICAgICAgICAgICAgICAgIGZyYW1lV2lkdGg6IDIxMy44LFxyXG4gICAgICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBydW5uaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogMyxcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBqdW1waW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRGcmFtZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBtc1BlckZyYW1lOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyYXNoZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEZyYW1lOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zUGVyRnJhbWU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9tb2RlbC9HYW1lXCI7XHJcbmltcG9ydCB7IEFzc2V0UmVwb3NpdG9yeSB9IGZyb20gXCIuL2Fzc2V0cy9Bc3NldFJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgQXVkaW9QbGF5ZXIgfSBmcm9tIFwiLi9hdWRpby9BdWRpb1BsYXllclwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2NyZWVuIH0gZnJvbSBcIi4vdmlldy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCB7IEdhbWVPdmVyU2NyZWVuIH0gZnJvbSBcIi4vdmlldy9HYW1lT3ZlclNjcmVlblwiO1xyXG5pbXBvcnQgeyBJbnRyb1NjcmVlbiB9IGZyb20gXCIuL3ZpZXcvSW50cm9TY3JlZW5cIjtcclxuaW1wb3J0IHsgSW5HYW1lSW5mb1NjcmVlbiB9IGZyb20gXCIuL3ZpZXcvSW5HYW1lSW5mb1NjcmVlblwiO1xyXG5pbXBvcnQgeyBDb250cm9sVHV0b3JpYWwgfSBmcm9tIFwiLi92aWV3L0NvbnRyb2xUdXRvcmlhbFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udHJvbHMgfSBmcm9tIFwiLi9tb2RlbC9Vc2VyQ29udHJvbHNcIjtcclxuaW1wb3J0IHsgU2NvcmVNYW5hZ2VyIH0gZnJvbSBcIi4vc2NvcmUvU2NvcmVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVzZXJNYW5hZ2VyIH0gZnJvbSBcIi4vVXNlck1hbmFnZXJcIjtcclxuLyoqXHJcbiAqIEFjdHMgYXMgdGhlIGNvbnRyb2xsZXIgYmV0d2VlbiBNb2RlbCAoR2FtZS50cykgYW5kIFZpZXcgKHNjcmVlbnMvKi50cylcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gbmV3IENvbmZpZygpO1xyXG4gICAgICAgIHRoaXMuYXNzZXRSZXBvc2l0b3J5ID0gbmV3IEFzc2V0UmVwb3NpdG9yeSh0aGlzLkNPTkZJRy5JTUFHRVMsIHRoaXMuQ09ORklHLkFVRElPUywgbmV3IEFycmF5KC4uLnRoaXMuQ09ORklHLkJBQ0tHUk9VTkRfVEVNUExBVEVTLCAuLi50aGlzLkNPTkZJRy5DT0xMRUNUQUJMRVNfVEVNUExBVEVTLCAuLi50aGlzLkNPTkZJRy5PQlNUQUNMRVNfR1JORF9URU1QTEFURVMsIC4uLnRoaXMuQ09ORklHLlBMQVlFUl9URU1QTEFURVMpKTtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gbmV3IEF1ZGlvUGxheWVyKHRoaXMuYXNzZXRSZXBvc2l0b3J5KTtcclxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLkNPTkZJRywgdGhpcywgdGhpcy5hdWRpb1BsYXllciwgdGhpcy5hc3NldFJlcG9zaXRvcnkpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVNYW5hZ2VyID0gbmV3IFNjb3JlTWFuYWdlcih0aGlzLkNPTkZJRyk7XHJcbiAgICAgICAgdGhpcy51c2VyTWFuYWdlciA9IG5ldyBVc2VyTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTY3JlZW5zKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllci5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuc3RhcnRHYW1lKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb3VjaENvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbkdhbWVJbmZvU2NyZWVuLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sVHV0b3JpYWwuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcIm1haW4tdGhlbWVcIiwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLnJlc3RhcnQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5pbkdhbWVJbmZvU2NyZWVuLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sVHV0b3JpYWwuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvdWNoQ29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcIm1haW4tdGhlbWVcIiwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5wYXVzZUdhbWUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLnBhdXNlUGxheWJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5yZXN1bWVHYW1lKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1BsYXllci5yZXN1bWVQbGF5YmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0TXV0ZWQobXV0ZWQpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyLnNldE11dGUobXV0ZWQpO1xyXG4gICAgfVxyXG4gICAgc2V0Q2hhcmFjdGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNldENoYXJhY3RlcihpZCk7XHJcbiAgICB9XHJcbiAgICBnZXRHYW1lU3RhdGVEQU8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5nZXRTdGF0ZUFzREFPKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRTY29yZU1hbmFnZXJEQU8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVNYW5hZ2VyLmdldFNjb3JlTWFuYWdlckRBTygpO1xyXG4gICAgfVxyXG4gICAgb25HYW1lUmVhZHkoZ2FtZVN0YXRlRGFvKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmludHJvU2NyZWVuLnNob3coKTtcclxuICAgIH1cclxuICAgIG9uR2FtZU92ZXIoZ2FtZVN0YXRlRGFvKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllci5zdG9wU291bmQoXCJtYWluLXRoZW1lXCIpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwiZ2FtZS1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlVG91Y2hDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbkdhbWVJbmZvU2NyZWVuLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xUdXRvcmlhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbi5zaG93KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlck1hbmFnZXIuZ2V0UGxheWVyQWxpYXMoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJTY29yZVVwbG9hZEFuZFRhYmxlVXBkYXRlKGdhbWVTdGF0ZURhbyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudXNlck1hbmFnZXIuZ2V0SXNXYWl0aW5nRm9yQWxpYXMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLmdldFBsYXllckFsaWFzKCkudGhlbigoYWxpYXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGlhcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlck1hbmFnZXIuc2V0UGxheWVyQWxpYXMoYWxpYXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlclNjb3JlVXBsb2FkQW5kVGFibGVVcGRhdGUoZ2FtZVN0YXRlRGFvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlck1hbmFnZXIuc2V0V2FpdGluZ0ZvckFsaWFzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLnRyaWdnZXJTY29yZVRhYmxlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbi50cmlnZ2VyU2NvcmVUYWJsZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRyaWdnZXJTY29yZVVwbG9hZEFuZFRhYmxlVXBkYXRlKGdhbWVTdGF0ZURhbykge1xyXG4gICAgICAgIHRoaXMuc2NvcmVNYW5hZ2VyXHJcbiAgICAgICAgICAgIC51cGxvYWRTY29yZShnYW1lU3RhdGVEYW8uY3VycmVudFNjb3JlLCB0aGlzLnVzZXJNYW5hZ2VyLmdldFBsYXllckFsaWFzKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZ2FtZU92ZXJTY3JlZW4udHJpZ2dlclNjb3JlVGFibGVVcGRhdGUoKSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZ2FtZU92ZXJTY3JlZW4udHJpZ2dlclNjb3JlVGFibGVVcGRhdGUoKSk7XHJcbiAgICB9XHJcbiAgICBvbk5ld0xvY2FsSGlnaHNjb3JlKGdhbWVTdGF0ZURhbykge1xyXG4gICAgICAgIHRoaXMuaW5HYW1lSW5mb1NjcmVlbi5ub3RpZnlOZXdIaWdoc2NvcmUoKTtcclxuICAgIH1cclxuICAgIG9uSGl0Q29sbGVjdGFibGUoZ2FtZVN0YXRlRGFvKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJjb2xsZWN0YWJsZVwiKTtcclxuICAgICAgICB0aGlzLmluR2FtZUluZm9TY3JlZW4ubm90aWZ5SGl0Q29sbGVjdGFibGUoKTtcclxuICAgIH1cclxuICAgIHNldHVwU2NyZWVucygpIHtcclxuICAgICAgICAvLyBUT0RPIERBT1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4gPSBuZXcgR2FtZU92ZXJTY3JlZW4odGhpcy5DT05GSUcsIHRoaXMsIHRoaXMuYXVkaW9QbGF5ZXIsIHRoaXMuYXNzZXRSZXBvc2l0b3J5KTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4gPSBuZXcgTG9hZGluZ1NjcmVlbih0aGlzLkNPTkZJRywgdGhpcywgdGhpcy5hc3NldFJlcG9zaXRvcnksIHRoaXMuYXVkaW9QbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuaW50cm9TY3JlZW4gPSBuZXcgSW50cm9TY3JlZW4odGhpcy5DT05GSUcsIHRoaXMsIHRoaXMuYXVkaW9QbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuaW5HYW1lSW5mb1NjcmVlbiA9IG5ldyBJbkdhbWVJbmZvU2NyZWVuKHRoaXMuQ09ORklHLCB0aGlzLCB0aGlzLmFzc2V0UmVwb3NpdG9yeSwgdGhpcy5hdWRpb1BsYXllcik7XHJcbiAgICAgICAgdGhpcy5jb250cm9sVHV0b3JpYWwgPSBuZXcgQ29udHJvbFR1dG9yaWFsKHRoaXMuQ09ORklHLCB0aGlzLCB0aGlzLmFzc2V0UmVwb3NpdG9yeSk7XHJcbiAgICB9XHJcbiAgICBzZXR1cENvbnRyb2xzKCkge1xyXG4gICAgICAgIC8vIFRPRE8gbm8gZWZmZWN0XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLk1JU0MuVE9VQ0hfQ09OVFJPTExFUik7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAvLyBSZWdpc3RlciBsaXN0ZW5lcnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUV2ZW50cy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRvdWNoQ29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZUV2ZW50cy5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRXZlbnRzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIFRPRE8gZG9lcyBub3Qgd29ya1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25ibHVyXCIsIHRoaXMucGF1c2VHYW1lLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25Gb2N1c1wiLCB0aGlzLnJlc3VtZUdhbWUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXNzZXRzKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbi5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9zaXRvcnkuZmV0Y2hBc3NldHMoKS50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2V0UmVhZHkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4ubm90aWZ5QXNzZXRzTG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGxvYWQgYXNzZXRzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFdmVudHMoZSkge1xyXG4gICAgICAgIGlmICgoZS50eXBlID09PSBcImtleWRvd25cIiAmJiBlLmtleUNvZGUgPT0gdGhpcy5DT05GSUcuS0VZX0NPREVTLmp1bXApIHx8XHJcbiAgICAgICAgICAgIGUudHlwZSA9PSBcInRvdWNoc3RhcnRcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5oYW5kbGVVc2VyQ29udHJvbChVc2VyQ29udHJvbHMuU1RBUlRfSlVNUCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChlLnR5cGUgPT09IFwia2V5dXBcIiAmJiBlLmtleUNvZGUgPT0gdGhpcy5DT05GSUcuS0VZX0NPREVTLmp1bXApIHx8XHJcbiAgICAgICAgICAgIGUudHlwZSA9PSBcInRvdWNoZW5kXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaGFuZGxlVXNlckNvbnRyb2woVXNlckNvbnRyb2xzLkVORF9KVU1QKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRUb3VjaENvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIuaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZW1vdmVUb3VjaENvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udG9sbGVyXCI7XHJcbi8qKlxyXG4gKiBJcyBlbnRyeSBwb2ludCB0byB0aGUgZ2FtZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdnU2ltdWxhdG9yTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG4gICAgc2V0Q2hhcmFjdGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldENoYXJhY3RlcihpZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQWxpYXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNXYWl0aW5nRm9yQWxpYXMgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0UGxheWVyQWxpYXMoYWxpYXMpIHtcclxuICAgICAgICB0aGlzLnBsYXllckFsaWFzID0gYWxpYXM7XHJcbiAgICB9XHJcbiAgICBnZXRQbGF5ZXJBbGlhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJBbGlhcztcclxuICAgIH1cclxuICAgIHNldFdhaXRpbmdGb3JBbGlhcyh3YWl0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc1dhaXRpbmdGb3JBbGlhcyA9IHdhaXRpbmc7XHJcbiAgICB9XHJcbiAgICBnZXRJc1dhaXRpbmdGb3JBbGlhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1dhaXRpbmdGb3JBbGlhcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQXNzZXRSZXBvc2l0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlQ29uZmlnLCBhdWRpb0NvbmZpZywgZHJhd2FibGVPYmplY3RUZW1wbGF0ZXMpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICB0aGlzLmltYWdlQ29uZmlnID0gaW1hZ2VDb25maWc7XHJcbiAgICAgICAgdGhpcy5hdWRpb0NvbmZpZyA9IGF1ZGlvQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuZHJhd2FibGVPYmplY3RUZW1wbGF0ZXMgPSBkcmF3YWJsZU9iamVjdFRlbXBsYXRlcztcclxuICAgICAgICB0aGlzLmltYWdlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmF1ZGlvcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm51bWJlck9mQXNzZXRzID1cclxuICAgICAgICAgICAgdGhpcy5pbWFnZUNvbmZpZy5sZW5ndGggK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0NvbmZpZy5sZW5ndGggK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3YWJsZU9iamVjdFRlbXBsYXRlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBnZXRJbWFnZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5nZXQoaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0QXVkaW8oaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdWRpb3MuZ2V0KGlkKTtcclxuICAgIH1cclxuICAgIGdldFByb2dyZXNzKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pbWFnZXMuc2l6ZSArIHRoaXMuYXVkaW9zLnNpemUpIC8gdGhpcy5udW1iZXJPZkFzc2V0cztcclxuICAgIH1cclxuICAgIGFzeW5jIGZldGNoQXNzZXRzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ29uZmlnLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZmV0Y2hCYXNpY0ltYWdlKGltYWdlLmlkLCBpbWFnZS5pbWFnZVBhdGgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2FibGVPYmplY3RUZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5mZXRjaERyYXdhYmxlT2JqZWN0VGVtcGxhdGVJbWFnZSh0ZW1wbGF0ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0NvbmZpZy5mb3JFYWNoKChhdWRpbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmZldGNoQmFzaWNBdWRpbyhhdWRpby5pZCwgYXVkaW8uaW1hZ2VQYXRoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBmZXRjaEJhc2ljSW1hZ2UoaWQsIHBhdGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAvLyBpbWFnZS5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7IC8vIGlzIHRoaXNcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcGF0aDtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMuc2V0KGlkLCBpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmZXRjaERyYXdhYmxlT2JqZWN0VGVtcGxhdGVJbWFnZShkcmF3YWJsZU9iamVjdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgLy8gaW1hZ2UuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiOyAvLyBpcyB0aGlzXHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGRyYXdhYmxlT2JqZWN0VGVtcGxhdGUuaW1hZ2VQYXRoO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5zZXQoZHJhd2FibGVPYmplY3RUZW1wbGF0ZS5pZCwgaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgZHJhd2FibGVPYmplY3RUZW1wbGF0ZS5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gVG9kbyBkb2VzIG5vdCB3b3JrIHdoZW4gYWNjZXNzaW5nIGZpbGUgZnJvbSBmaWxlIHN5c3RlbSBpbnN0ZWFkIG9mIGJhc2ljIHNlcnZlclxyXG4gICAgYXN5bmMgZmV0Y2hCYXNpY0F1ZGlvKGlkLCBwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2gocGF0aClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoYXJyYXlCdWZmZXIpID0+IHRoaXMuYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZmZlcikpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoYXVkaW8pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9zLnNldChpZCwgYXVkaW8pO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhdWRpbyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4vU291bmRcIjtcclxuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFzc2V0UmVwb3NpdG9yeSkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgIHRoaXMuYXNzZXRSZXBvc2l0b3J5ID0gYXNzZXRSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuc291bmRzQnlLZXkgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5YmFja0lzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc011dGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwbGF5U291bmQoa2V5LCBsb29wID0gZmFsc2UsIHVzZUV4aXN0aW5nSWZFeGlzdCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMuY2hlY2tTdXNwZW5kZWQoKTtcclxuICAgICAgICBjb25zdCBzb3VuZEJ1ZmZlciA9IHRoaXMuYXNzZXRSZXBvc2l0b3J5LmdldEF1ZGlvKGtleSk7XHJcbiAgICAgICAgaWYgKHNvdW5kQnVmZmVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc291bmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHVzZUV4aXN0aW5nSWZFeGlzdCkge1xyXG4gICAgICAgICAgICBzb3VuZCA9IChfYSA9IHRoaXMuc291bmRzQnlLZXkuZ2V0KGtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoa2V5LCB0aGlzLmF1ZGlvQ29udGV4dCwgc291bmRCdWZmZXIsIGxvb3AsIHRoaXMuaXNNdXRlZCwgdGhpcy5jbGVhblVwU291bmQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zb3VuZHNCeUtleS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZHNCeUtleS5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zb3VuZHNCeUtleS5nZXQoa2V5KS5wdXNoKHNvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXliYWNrSXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgc291bmQucmVzdW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcFNvdW5kKGtleSwgc3RvcEFsbCA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBzb3VuZHMgPSB0aGlzLnNvdW5kc0J5S2V5LmdldChrZXkpO1xyXG4gICAgICAgIGlmIChzb3VuZHMgPT09IHVuZGVmaW5lZCB8fCBzb3VuZHMubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoc3RvcEFsbCkge1xyXG4gICAgICAgICAgICBzb3VuZHMuZm9yRWFjaCgoc291bmQpID0+IHNvdW5kLnN0b3AoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VuZHNbMF0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHBhdXNlUGxheWJhY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWJhY2tJc1BhdXNlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxheWJhY2tJc1BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zb3VuZHNCeUtleS5mb3JFYWNoKChzb3VuZHMpID0+IHNvdW5kcy5mb3JFYWNoKChzb3VuZCkgPT4gc291bmQucGF1c2UoKSkpO1xyXG4gICAgfVxyXG4gICAgcmVzdW1lUGxheWJhY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXliYWNrSXNQYXVzZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnBsYXliYWNrSXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvdW5kc0J5S2V5LmZvckVhY2goKHNvdW5kcykgPT4gc291bmRzLmZvckVhY2goKHNvdW5kKSA9PiBzb3VuZC5yZXN1bWUoKSkpO1xyXG4gICAgfVxyXG4gICAgc2V0TXV0ZShtdXRlU291bmQpIHtcclxuICAgICAgICB0aGlzLmlzTXV0ZWQgPSBtdXRlU291bmQ7XHJcbiAgICAgICAgaWYgKG11dGVTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kc0J5S2V5LmZvckVhY2goKHNvdW5kcykgPT4gc291bmRzLmZvckVhY2goKHNvdW5kKSA9PiBzb3VuZC5tdXRlKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRzQnlLZXkuZm9yRWFjaCgoc291bmRzKSA9PiBzb3VuZHMuZm9yRWFjaCgoc291bmQpID0+IHNvdW5kLnVubXV0ZSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1N1c3BlbmRlZCgpO1xyXG4gICAgfVxyXG4gICAgY2hlY2tTdXNwZW5kZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9Db250ZXh0LnN0YXRlID09PSBcInN1c3BlbmRlZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFuVXBTb3VuZChzb3VuZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5zb3VuZHNCeUtleS5nZXQoc291bmQuZ2V0S2V5KCkpO1xyXG4gICAgICAgIGlmIChhcnJheSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKHNvdW5kKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU291bmQge1xyXG4gICAgY29uc3RydWN0b3Ioa2V5LCBhdWRpb0NvbnRleHQsIGF1ZGlvQnVmZmVyLCBsb29wQXVkaW8gPSBmYWxzZSwgaXNNdXRlZCA9IGZhbHNlLCBhdWRpb0NvbmNsdWRlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5NSUxMSVNfSU5fU0VDT05EID0gMTAwMDtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcclxuICAgICAgICB0aGlzLmF1ZGlvQnVmZmVyID0gYXVkaW9CdWZmZXI7XHJcbiAgICAgICAgdGhpcy5sb29wQXVkaW8gPSBsb29wQXVkaW87XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkUGxheWluZ1RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc011dGVkID0gaXNNdXRlZDtcclxuICAgICAgICB0aGlzLmF1ZGlvQ29uY2x1ZGVkQ2FsbGJhY2sgPSBhdWRpb0NvbmNsdWRlZENhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgZ2V0S2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmxhc3RSZXN1bWVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBXZSBjYW4gb25seSBjYWxsIGJ1ZmZlcnNvdXJjZS5zdGFydCgpIG9uY2UuIFRoYXQgaXMgd2h5IHdlIGhhdmUgdG8gcmVpbml0aWFsaXplXHJcbiAgICAgICAgICogdGhlIGJ1ZmZlcnNvdXJjZSBmb3IgZWFjaCBjYWxsIHRvIHBsYXkoKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJ1ZmZlclNvdXJjZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyU291cmNlLmxvb3AgPSB0aGlzLmxvb3BBdWRpbztcclxuICAgICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSB0aGlzLmF1ZGlvQnVmZmVyO1xyXG4gICAgICAgIGlmICghdGhpcy5pc011dGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyU291cmNlLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdWRpb0NvbmNsdWRlZENhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgIXRoaXMubG9vcEF1ZGlvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVUb1BsYXkgPSB0aGlzLmF1ZGlvQnVmZmVyLmR1cmF0aW9uICogdGhpcy5NSUxMSVNfSU5fU0VDT05EIC1cclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhcHNlZFBsYXlpbmdUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hdWRpb0NvbmNsdWRlZENhbGxiYWNrKHRoaXMpLCB0aW1lVG9QbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy5lbGFwc2VkUGxheWluZ1RpbWUgPT0gMFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLmVsYXBzZWRQbGF5aW5nVGltZSAvIHRoaXMuTUlMTElTX0lOX1NFQ09ORDtcclxuICAgICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5zdGFydCgwLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkUGxheWluZ1RpbWUgPVxyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRQbGF5aW5nVGltZSArIChEYXRlLm5vdygpIC0gdGhpcy5sYXN0UmVzdW1lVGltZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubG9vcEF1ZGlvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZFBsYXlpbmdUaW1lID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhcHNlZFBsYXlpbmdUaW1lICVcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5hdWRpb0J1ZmZlci5kdXJhdGlvbiAqIHRoaXMuTUlMTElTX0lOX1NFQ09ORCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGxCYWNrVGltZW91dCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXJTb3VyY2Uuc3RvcCgpO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLmVsYXBzZWRQbGF5aW5nVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5zdG9wKCk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsbEJhY2tUaW1lb3V0KTtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb0NvbmNsdWRlZENhbGxiYWNrICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Db25jbHVkZWRDYWxsYmFjayh0aGlzKTtcclxuICAgIH1cclxuICAgIG11dGUoKSB7XHJcbiAgICAgICAgdGhpcy5pc011dGVkID0gdHJ1ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5kaXNjb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKERPTUV4Y2VwdGlvbikgeyB9XHJcbiAgICB9XHJcbiAgICB1bm11dGUoKSB7XHJcbiAgICAgICAgdGhpcy5pc011dGVkID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXJTb3VyY2UuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChET01FeGNlcHRpb24pIHsgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNjb3JlIH0gZnJvbSBcIi4vTG9jYWxTY29yZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNBcnRpc3QgfSBmcm9tIFwiLi4vQ2FudmFzQXJ0aXN0XCI7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSBcIi4vd29ybGQvV29ybGRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vbW9kZWwvd29ybGQvZHJhd2FibGUvRHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRyb2xzIH0gZnJvbSBcIi4vVXNlckNvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZXMgfSBmcm9tIFwiLi9HYW1lU3RhdGVzXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZURBTyB9IGZyb20gXCIuL0dhbWVTdGF0ZURBT1wiO1xyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIGNvbnRyb2xsZXIsIGF1ZGlvUGxheWVyLCBhc3NldFJlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHc6IDAsIGg6IDAgfTtcclxuICAgICAgICB0aGlzLkNPTkZJRyA9IENPTkZJRztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuYXNzZXRSZXBvc2l0b3J5ID0gYXNzZXRSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBhdWRpb1BsYXllcjtcclxuICAgICAgICB0aGlzLnNldHVwQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkID0gbmV3IFNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeSA9XHJcbiAgICAgICAgICAgIG5ldyBEcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeSh0aGlzLkNPTkZJRyk7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGVzLklETEU7XHJcbiAgICB9XHJcbiAgICBzZXR1cENhbnZhcygpIHtcclxuICAgICAgICAvLyBUT0RPIHJlbW92ZSBoYXJkIGNvZGVkIGhlaWdodFxyXG4gICAgICAgIC8vIFdBUk4gYWx0ZXJlZCBmb3IgcG9ydGZvbGlvIGRlbW9cclxuICAgICAgICAvLyB0aGlzLnNldERpbWVuc2lvbnMoKTtcclxuICAgICAgICBjb25zdCBtb2NrdXBXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuTUlTQy5NT0NLX1VQX0NPTlRBSU5FUikub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLncgPSBtb2NrdXBXaWR0aCAqIDAuOTM7XHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmggPSA0MDA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLk1JU0MuR0FNRV9DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFN0cmluZyh0aGlzLmRpbWVuc2lvbnMuaCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSBTdHJpbmcodGhpcy5kaW1lbnNpb25zLncpICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gQ2FudmFzQXJ0aXN0LmNyZWF0ZUNhbnZhcyh0aGlzLmNvbnRhaW5lciwgdGhpcy5kaW1lbnNpb25zLncsIHRoaXMuZGltZW5zaW9ucy5oKTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbnZhc0FydGlzdCA9IG5ldyBDYW52YXNBcnRpc3QodGhpcy5kaW1lbnNpb25zLncsIHRoaXMuZGltZW5zaW9ucy5oLCB0aGlzLmN0eCk7XHJcbiAgICB9XHJcbiAgICBzZXRSZWFkeSgpIHtcclxuICAgICAgICB0aGlzLnNldHVwV29ybGQoKTtcclxuICAgICAgICB0aGlzLndvcmxkLnJlZnJlc2goMCk7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGVzLlJFQURZO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hHYW1lUmVhZHlFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgc2V0dXBXb3JsZCgpIHtcclxuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKHRoaXMuQ09ORklHLCB0aGlzLmRpbWVuc2lvbnMudywgdGhpcy5kaW1lbnNpb25zLmgsIHRoaXMuY3R4LCB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5LCB0aGlzLmFzc2V0UmVwb3NpdG9yeSwgdGhpcy5hdWRpb1BsYXllciwgdGhpcy5pbml0aWFsQ2hhcmFjdGVySWQpO1xyXG4gICAgICAgIHRoaXMud29ybGQucmVzZXQoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVVzZXJDb250cm9sKHVzZXJDb250cm9sKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlICE9PSBHYW1lU3RhdGVzLlJVTk5JTkcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHVzZXJDb250cm9sKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVXNlckNvbnRyb2xzLlNUQVJUX0pVTVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkLmdldFBsYXllcigpLnN0YXJ0SnVtcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVXNlckNvbnRyb2xzLkVORF9KVU1QOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5nZXRQbGF5ZXIoKS5lbmRKdW1wKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJ1bnN1cHBvcnRlZCB1c2VyIGlucHV0OiBcIiArIHVzZXJDb250cm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5nYW1lU3RhdGUgPT09IEdhbWVTdGF0ZXMuUkVBRFkgfHxcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdhbWVTdGF0ZXMuRU5ERUQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGVzLlJVTk5JTkc7XHJcbiAgICAgICAgdGhpcy5jYW52YXNBcnRpc3QuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLndvcmxkLnJlZnJlc2goMCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGl0Q29sbGVjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlQm9hcmQubmV3R2FtZSgpO1xyXG4gICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYWYodGhpcy5ydW5HYW1lKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlICE9PSBHYW1lU3RhdGVzLkVOREVEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53b3JsZC5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSAhPT0gR2FtZVN0YXRlcy5SVU5OSU5HKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmSWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZXMuUEFVU0VEO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bWVHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSAhPT0gR2FtZVN0YXRlcy5QQVVTRUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSYWYodGhpcy5ydW5HYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGVzLlJVTk5JTkc7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldENoYXJhY3RlcihpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLndvcmxkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsQ2hhcmFjdGVySWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMud29ybGQuc2V0Q2hhcmFjdGVyKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRTdGF0ZUFzREFPKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgR2FtZVN0YXRlREFPKHRoaXMuc2NvcmVCb2FyZC5nZXRTY29yZSgpLCB0aGlzLnNjb3JlQm9hcmQuZ2V0TG9jYWxIaWdoU2NvcmUoKSwgdGhpcy5nYW1lU3RhdGUsIHRoaXMud29ybGQuZ2V0Q2hhcmFjdGVySWQoKSk7XHJcbiAgICB9XHJcbiAgICBydW5HYW1lKCkge1xyXG4gICAgICAgIC8vIE1lYXN1cmUgdGltZSBkaWZmZXJlbmNlIHNpbmNlIGxhc3QgZnJhbWVcclxuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBsZXQgdGltZURpZmYgPSBub3cgLSB0aGlzLnRpbWU7XHJcbiAgICAgICAgdGhpcy50aW1lID0gbm93O1xyXG4gICAgICAgIC8vIFVwZGF0ZSBzY29yZSBhbmQgZ2FtZSBzdGF0dXNcclxuICAgICAgICB0aGlzLnNjb3JlQm9hcmQuc2V0U2NvcmUodGhpcy5zY29yZUJvYXJkLmdldFNjb3JlKCkgK1xyXG4gICAgICAgICAgICAodGltZURpZmYgLyAxMDAwKSAqIHRoaXMuQ09ORklHLkdBTUVfUExBWS5wb2ludHNQZXJTZWNvbmQpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBhbmQgcmVkcmF3IHdvcmxkXHJcbiAgICAgICAgdGhpcy5jYW52YXNBcnRpc3QuY2xlYXIoKTtcclxuICAgICAgICBbdGhpcy5jb2xsaWRlZCwgdGhpcy5oaXRDb2xsZWN0YWJsZV0gPSB0aGlzLndvcmxkLnJlZnJlc2godGltZURpZmYpO1xyXG4gICAgICAgIC8vIENoZWNrIGNvbGxlY3RhYmxlc1xyXG4gICAgICAgIGlmICh0aGlzLmhpdENvbGxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hIaXRDb2xsZWN0YWJsZUV2ZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Q29sbGVjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUJvYXJkLnNldFNjb3JlKHRoaXMuc2NvcmVCb2FyZC5nZXRTY29yZSgpICsgdGhpcy5DT05GSUcuR0FNRV9QTEFZLnBvaW50c1BlckNvbGxlY3RhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVCb2FyZC5oYXNOZXdMb2NhbEhpZ2hzY29yZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hOZXdMb2NhbEhpZ2hTY29yZUV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jb2xsaWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJhZih0aGlzLnJ1bkdhbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlUmFmKGNhbGxiYWNrLCBwYXJhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrLmJpbmQodGhpcywgcGFyYW1ldGVyKSk7XHJcbiAgICB9XHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR2FtZVN0YXRlcy5FTkRFRDtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoR2FtZU92ZXJFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2hHYW1lUmVhZHlFdmVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25HYW1lUmVhZHkodGhpcy5nZXRTdGF0ZUFzREFPKCkpO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2hOZXdMb2NhbEhpZ2hTY29yZUV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5vbk5ld0xvY2FsSGlnaHNjb3JlKHRoaXMuZ2V0U3RhdGVBc0RBTygpKTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoR2FtZU92ZXJFdmVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25HYW1lT3Zlcih0aGlzLmdldFN0YXRlQXNEQU8oKSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaEhpdENvbGxlY3RhYmxlRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLm9uSGl0Q29sbGVjdGFibGUodGhpcy5nZXRTdGF0ZUFzREFPKCkpO1xyXG4gICAgfVxyXG4gICAgc2V0RGltZW5zaW9ucygpIHtcclxuICAgICAgICBjb25zdCB2dyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCAwLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcclxuICAgICAgICBjb25zdCB2aCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgMCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53ID0gTWF0aC5taW4odncgKiAwLjksIHRoaXMuQ09ORklHLlNFVFRJTkdTLm1heENhbnZhc1dpZHRoKTtcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaCA9IE1hdGgubWluKHZoICogMC42LCB0aGlzLkNPTkZJRy5TRVRUSU5HUy5tYXhDYW52YXNIZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBHYW1lU3RhdGVEQU8ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvLyBjaGFyYWN0ZXJJZDogc3RyaW5nLFxyXG4gICAgY3VycmVudFNjb3JlLCBsb2NhbEhpZ2hzY29yZSwgc3RhdGUsIGNoYXJhY3RlcklkKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXJJZCA9IGNoYXJhY3RlcklkO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gY3VycmVudFNjb3JlO1xyXG4gICAgICAgIHRoaXMubG9jYWxIaWdoc2NvcmUgPSBsb2NhbEhpZ2hzY29yZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJJZCA9IGNoYXJhY3RlcklkO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgR2FtZVN0YXRlcztcclxuKGZ1bmN0aW9uIChHYW1lU3RhdGVzKSB7XHJcbiAgICBHYW1lU3RhdGVzW0dhbWVTdGF0ZXNbXCJJRExFXCJdID0gMF0gPSBcIklETEVcIjtcclxuICAgIEdhbWVTdGF0ZXNbR2FtZVN0YXRlc1tcIkxPQURJTkdcIl0gPSAxXSA9IFwiTE9BRElOR1wiO1xyXG4gICAgR2FtZVN0YXRlc1tHYW1lU3RhdGVzW1wiUkVBRFlcIl0gPSAyXSA9IFwiUkVBRFlcIjtcclxuICAgIEdhbWVTdGF0ZXNbR2FtZVN0YXRlc1tcIlJVTk5JTkdcIl0gPSAzXSA9IFwiUlVOTklOR1wiO1xyXG4gICAgR2FtZVN0YXRlc1tHYW1lU3RhdGVzW1wiUEFVU0VEXCJdID0gNF0gPSBcIlBBVVNFRFwiO1xyXG4gICAgR2FtZVN0YXRlc1tHYW1lU3RhdGVzW1wiRU5ERURcIl0gPSA1XSA9IFwiRU5ERURcIjtcclxufSkoR2FtZVN0YXRlcyB8fCAoR2FtZVN0YXRlcyA9IHt9KSk7XHJcbiIsImV4cG9ydCBjbGFzcyBTY29yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxvY2FsSGlnaFNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmlzRmlyc3RHYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5ld0hpZ2hTY29yZVdhc0Rpc2NvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFNjb3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxIaWdoU2NvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxIaWdoU2NvcmU7XHJcbiAgICB9XHJcbiAgICBzZXRTY29yZShzY29yZSkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcclxuICAgICAgICBpZiAoc2NvcmUgPiB0aGlzLmxvY2FsSGlnaFNjb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxIaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5ld0dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5uZXdIaWdoU2NvcmVXYXNEaXNjb3ZlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxIaWdoU2NvcmUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdEdhbWUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBPbmx5IHRydWUgYXQgbWF4IG9uY2UgcGVyIGdhbWVcclxuICAgIGhhc05ld0xvY2FsSGlnaHNjb3JlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5uZXdIaWdoU2NvcmVXYXNEaXNjb3ZlcmVkICYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzRmlyc3RHYW1lICYmXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxIaWdoU2NvcmUgPT09IHRoaXMuc2NvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdIaWdoU2NvcmVXYXNEaXNjb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIFVzZXJDb250cm9scztcclxuKGZ1bmN0aW9uIChVc2VyQ29udHJvbHMpIHtcclxuICAgIFVzZXJDb250cm9sc1tVc2VyQ29udHJvbHNbXCJTVEFSVF9KVU1QXCJdID0gMF0gPSBcIlNUQVJUX0pVTVBcIjtcclxuICAgIFVzZXJDb250cm9sc1tVc2VyQ29udHJvbHNbXCJFTkRfSlVNUFwiXSA9IDFdID0gXCJFTkRfSlVNUFwiO1xyXG59KShVc2VyQ29udHJvbHMgfHwgKFVzZXJDb250cm9scyA9IHt9KSk7XHJcbiIsIi8qKlxyXG4gKiBSZXNwb25zaWJsZSBmb3IgcmVmcmVzaGluZyBhbGwgRHJhd2FibGVPYmplY3RzIHRoYXQgb2JzZXJ2ZSB0aGVcclxuICogQW5pbWF0b3IuXHJcbiAqIEltcGxlbWVudHMgb2JzZXJ2YWJsZSBwYXR0ZXJuLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuaW1hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVuc3Vic2NyaWJlQWxsKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGltZURpZmYpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIudXBkYXRlKHRpbWVEaWZmKSk7XHJcbiAgICB9XHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci5kcmF3KGN0eCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1hdG9yIH0gZnJvbSBcIi4vQW5pbWF0b3JcIjtcclxuaW1wb3J0IHsgQ29sbGlzaW9uRGV0ZWN0b3IgfSBmcm9tIFwiLi9jb2xsaXNpb24vQ29sbGlzaW9uRGV0ZWN0b3JcIjtcclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gXCIuL2RyYXdhYmxlL0JhY2tncm91bmRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vZHJhd2FibGUvUGxheWVyXCI7XHJcbmltcG9ydCB7IE9ic3RhY2xlIH0gZnJvbSBcIi4vZHJhd2FibGUvT2JzdGFjbGVcIjtcclxuaW1wb3J0IHsgQ29sbGVjdGFibGVJdGVtIH0gZnJvbSBcIi4vZHJhd2FibGUvQ29sbGVjdGFibGVJdGVtXCI7XHJcbmltcG9ydCB7IFJld2FyZEV4cGxvc2lvbiB9IGZyb20gXCIuL2RyYXdhYmxlL1Jld2FyZEV4cGxvc2lvblwiO1xyXG5pbXBvcnQgeyBzY2FsZURyYXdhYmxlVGVtcGFsdGUsIH0gZnJvbSBcIi4vZHJhd2FibGUvRHJhd2FibGVPYmplY3RUZW1wbGF0ZVwiO1xyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHcgd2lkdGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoIGhlaWdodFxyXG4gICAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIHcsIGgsIGN0eCwgZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnksIGFzc2V0UmVwb3JpdG9yeSwgYXVkaW9QbGF5ZXIsIGluaXRpYWxDaGFyYWN0ZXJJZCkge1xyXG4gICAgICAgIHRoaXMuTUVBTl9ESVNUX0JFVFdFRU5fT0JTVEFDTEVTID0gMjg7IC8vIHNob3VsZCBiZSBjaGFuZ2VkIHRvIGRpc3RhbmNlXHJcbiAgICAgICAgdGhpcy5NRUFOX0RJU1RfVkFSSUFOQ0UgPSAzMDA7XHJcbiAgICAgICAgdGhpcy5WRUxPQ0lUWV9JTkNSRUFTRV9EQU1QSU5HID0gMTAwMDA7XHJcbiAgICAgICAgdGhpcy5NQVhfWF9WRUxPQ0lUWSA9IC04O1xyXG4gICAgICAgIHRoaXMuRlBTID0gMzA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTnVtYmVyIG9mIHVuaXF1ZSBkcmF3YWJsZSB0ZW1wbGF0ZXMgYmVmb3JlIHRoZXkgbWF5IHJlcGVhdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuTUlOX1VOSVFVRV9EUkFXQUJMRVNfTlVNID0gMztcclxuICAgICAgICB0aGlzLkZMT09SX0hFSUdIVCA9IDEwO1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5ID0gZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnk7XHJcbiAgICAgICAgLy8gRW5zdXJlIHZhbGlkIGNoYXJhY3RlciBjb25maWd1cmF0aW9uIChpbml0aWFsQ2hhcmFjdGVySWQgZmFsbGJhY2spXHJcbiAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXIoZHJhd2FibGVPYmplY3RUZW1wbGF0ZVJlcG9zaXRvcnkuZ2V0UGxheWVyVGVtcGxhdGVzKClbMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyKGluaXRpYWxDaGFyYWN0ZXJJZCk7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9yaXRvcnkgPSBhc3NldFJlcG9yaXRvcnk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0b3IgPSBuZXcgQW5pbWF0b3IoKTtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICAvLyBSZXNldCBBbmltYXRvclxyXG4gICAgICAgIHRoaXMuYW5pbWF0b3IudW5zdWJzY3JpYmVBbGwoKTtcclxuICAgICAgICB0aGlzLm9ic3RhY2xlVmVsb2NpdHkgPSB7IHg6IC0zLCB5OiAwIH07IC8vIFRPRE8gbm90IGNsZWFuIHdpdGggb25seSBvbmUgdmVsb2NpdHlcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5vYnN0YWNsZVZlbG9jaXR5LCB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5LmdldEJhY2tncm91bmRUZW1wbGF0ZXMoKVswXSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRvci5zdWJzY3JpYmUodGhpcy5iYWNrZ3JvdW5kKTtcclxuICAgICAgICAvLyBUT0RPIHJlbW92ZSBtYWdpYyBudW1iZXIgaGVpZ2h0PyBTaGlmdCBtYXRoIHRvIG9iamVjdFxyXG4gICAgICAgIGNvbnN0IHBsYXllclRlbXBsYXRlID0gdGhpcy5kcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeS5nZXRQbGF5ZXJUZW1wbGF0ZSh0aGlzLmNoYXJhY3RlcklkKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5DT05GSUcsIHRoaXMud2lkdGggLyA0LCB0aGlzLmhlaWdodCAtIHRoaXMucGxheWVyVGVtcGxhdGUuZGltZW5zaW9ucy5oIC0gdGhpcy5GTE9PUl9IRUlHSFQgLSAxLCB0aGlzLmhlaWdodCAtIHRoaXMuRkxPT1JfSEVJR0hULCBwbGF5ZXJUZW1wbGF0ZS5kaW1lbnNpb25zLmgsIHBsYXllclRlbXBsYXRlLCB0aGlzLmF1ZGlvUGxheWVyKTtcclxuICAgICAgICB0aGlzLmFuaW1hdG9yLnN1YnNjcmliZSh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgLy8gUmVzZXQgT2JzdGFjbGVzXHJcbiAgICAgICAgdGhpcy5vYnN0YWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9ic3RhY2xlR3JvdW5kVGVtcGxhdGVzID1cclxuICAgICAgICAgICAgdGhpcy5kcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeS5nZXRPYnN0YWNsZVRlbXBsYXRlcygpO1xyXG4gICAgICAgIHRoaXMubmV4dE9ic3RhY2xlRGlzdCA9IHRoaXMuY2FsY05leHRPYnN0YWNsZURpc3QoKTtcclxuICAgICAgICB0aGlzLmxhc3RPYnN0YWNsZUlkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGxheWVySGl0T2JzdGFjbGUgPSBmYWxzZTtcclxuICAgICAgICAvLyBSZXNldCBDb2xsZWN0YWJsZXNcclxuICAgICAgICB0aGlzLmNvbGxlY3RhYmxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGFibGVUZW1wbGF0ZXMgPVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5LmdldENvbGxlY3RhYmxlVGVtcGxhdGVzKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0Q29sbGVjdGFibGVEaXN0ID0gdGhpcy5jYWxjTmV4dENvbGxlY3RhYmxlRGlzdCgpO1xyXG4gICAgICAgIHRoaXMubGFzdENvbGxlY3RhYmxlSWRzID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIaXRDb2xsZWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmV3YXJkRXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZ2V0UGxheWVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q2hhcmFjdGVyKGNoYXJhY3RlcklkKSB7XHJcbiAgICAgICAgbGV0IHBsYXllclRlbXBsYXRlID0gdGhpcy5kcmF3YWJsZU9iamVjdFRlbXBsYXRlUmVwb3NpdG9yeS5nZXRQbGF5ZXJUZW1wbGF0ZShjaGFyYWN0ZXJJZCk7XHJcbiAgICAgICAgaWYgKHBsYXllclRlbXBsYXRlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllclRlbXBsYXRlID0gcGxheWVyVGVtcGxhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVySWQgPSBjaGFyYWN0ZXJJZDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBObyBwbGF5ZXIgdGVtcGxhdGUgZm9yIGlkIFwiJHtjaGFyYWN0ZXJJZH1cImApO1xyXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlcklkID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUZW1wbGF0ZSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5LmdldFBsYXllclRlbXBsYXRlcygpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcklkID0gdGhpcy5wbGF5ZXJUZW1wbGF0ZS5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDaGFyYWN0ZXJJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJJZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lRGlmZiB0aW1lIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIGFuZCBsYXN0IHVwZGF0ZSBpbiBtaWxsaXNcclxuICAgICAqL1xyXG4gICAgcmVmcmVzaCh0aW1lRGlmZikge1xyXG4gICAgICAgIGxldCBmcmFtZXMgPSAodGltZURpZmYgLyAxMDAwKSAqIHRoaXMuRlBTO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT2JzdGFjbGVzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2xsZWN0YWJsZXMoKTtcclxuICAgICAgICAvLyBSZWR1Y2UgbmV4dCAuLi4gZGlzdGFuY2VzXHJcbiAgICAgICAgdGhpcy5uZXh0T2JzdGFjbGVEaXN0IC09IGZyYW1lcyAqIHRoaXMub2JzdGFjbGVWZWxvY2l0eS54ICogLTAuMjtcclxuICAgICAgICB0aGlzLm5leHRDb2xsZWN0YWJsZURpc3QgLT0gZnJhbWVzICogdGhpcy5vYnN0YWNsZVZlbG9jaXR5LnggKiAtMC4yO1xyXG4gICAgICAgIC8vIFJlZnJlc2ggYWxsIGRyYXdhYmxlIG9iamVjdHNcclxuICAgICAgICB0aGlzLmFuaW1hdG9yLnVwZGF0ZSh0aW1lRGlmZik7XHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRpbWVEaWZmKTtcclxuICAgICAgICAvLyBDaGVjayBjb2xsaXNpb25zXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIaXRPYnN0YWNsZSA9IENvbGxpc2lvbkRldGVjdG9yLmNvbGxpZGVkKHRoaXMucGxheWVyLCB0aGlzLm9ic3RhY2xlc1swXSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIaXRDb2xsZWN0YWJsZSA9IENvbGxpc2lvbkRldGVjdG9yLmNvbGxpZGVkKHRoaXMucGxheWVyLCB0aGlzLmNvbGxlY3RhYmxlc1swXSk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVySGl0T2JzdGFjbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0Q3Jhc2hlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdG9yLmRyYXcodGhpcy5jdHgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckhpdENvbGxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmV3YXJkRXhwbG9zaW9uKHRoaXMuY29sbGVjdGFibGVzWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0YWJsZXMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnBsYXllckhpdE9ic3RhY2xlLCB0aGlzLnBsYXllckhpdENvbGxlY3RhYmxlXTtcclxuICAgIH1cclxuICAgIHVwZGF0ZU9ic3RhY2xlcygpIHtcclxuICAgICAgICAvLyBBZGQgbmV3IG9ic3RhY2xlc1xyXG4gICAgICAgIGlmICh0aGlzLm5leHRPYnN0YWNsZURpc3QgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0T2JzdGFjbGVJbmRleDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgbmV4dE9ic3RhY2xlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9ic3RhY2xlR3JvdW5kVGVtcGxhdGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubGFzdE9ic3RhY2xlSWRzLmluY2x1ZGVzKG5leHRPYnN0YWNsZUluZGV4KSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdE9ic3RhY2xlSWRzLnB1c2gobmV4dE9ic3RhY2xlSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0T2JzdGFjbGVJZHMubGVuZ3RoID49IHRoaXMuTUlOX1VOSVFVRV9EUkFXQUJMRVNfTlVNKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPYnN0YWNsZUlkcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXh0T2JzdGFjbGVUZW1wbGF0ZSA9IHNjYWxlRHJhd2FibGVUZW1wYWx0ZSh0aGlzLm9ic3RhY2xlR3JvdW5kVGVtcGxhdGVzW25leHRPYnN0YWNsZUluZGV4XSwgMC4yOCk7XHJcbiAgICAgICAgICAgIGxldCBuZXh0T2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUodGhpcy5DT05GSUcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gbmV4dE9ic3RhY2xlVGVtcGxhdGUuZGltZW5zaW9ucy5oIC0gdGhpcy5GTE9PUl9IRUlHSFQsIDAsIDAsIHRoaXMub2JzdGFjbGVWZWxvY2l0eSwgbmV4dE9ic3RhY2xlVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy5wdXNoKG5leHRPYnN0YWNsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0b3Iuc3Vic2NyaWJlKG5leHRPYnN0YWNsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dE9ic3RhY2xlRGlzdCA9IHRoaXMuY2FsY05leHRPYnN0YWNsZURpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIG5vbi12aXNpYmxlIG9ic3RhY2xlcyAvLyBUT0RPIGdldCB3aWR0aCBpbnN0ZWFkIG9mIG1hZ2ljIG51bWJlclxyXG4gICAgICAgIGlmICh0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzWzBdLmdldFgoKSArIHRoaXMub2JzdGFjbGVzWzBdLmdldFdpZHRoKCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0b3IudW5zdWJzY3JpYmUodGhpcy5vYnN0YWNsZXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUNvbGxlY3RhYmxlcygpIHtcclxuICAgICAgICAvLyBBZGQgbmV3IGNvbGxlY3RhYmxlXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dENvbGxlY3RhYmxlRGlzdCA8IDApIHtcclxuICAgICAgICAgICAgbGV0IG5leHRDb2xsZWN0YWJsZUluZGV4O1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBuZXh0Q29sbGVjdGFibGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sbGVjdGFibGVUZW1wbGF0ZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5sYXN0Q29sbGVjdGFibGVJZHMuaW5jbHVkZXMobmV4dENvbGxlY3RhYmxlSW5kZXgpKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q29sbGVjdGFibGVJZHMucHVzaChuZXh0Q29sbGVjdGFibGVJbmRleCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RDb2xsZWN0YWJsZUlkcy5sZW5ndGggPj0gdGhpcy5NSU5fVU5JUVVFX0RSQVdBQkxFU19OVU0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdENvbGxlY3RhYmxlSWRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5leHRDb2xsZWN0YWJsZVRlbXBsYXRlID0gc2NhbGVEcmF3YWJsZVRlbXBhbHRlKHRoaXMuY29sbGVjdGFibGVUZW1wbGF0ZXNbbmV4dENvbGxlY3RhYmxlSW5kZXhdLCAwLjI4KTtcclxuICAgICAgICAgICAgbGV0IG5leHRDb2xsZWN0YWJsZSA9IG5ldyBDb2xsZWN0YWJsZUl0ZW0odGhpcy5DT05GSUcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICogMC4zIC0gbmV4dENvbGxlY3RhYmxlVGVtcGxhdGUuZGltZW5zaW9ucy5oLCAwLCAwLCB0aGlzLm9ic3RhY2xlVmVsb2NpdHksIG5leHRDb2xsZWN0YWJsZVRlbXBsYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0YWJsZXMucHVzaChuZXh0Q29sbGVjdGFibGUpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdG9yLnN1YnNjcmliZShuZXh0Q29sbGVjdGFibGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRDb2xsZWN0YWJsZURpc3QgPSB0aGlzLmNhbGNOZXh0Q29sbGVjdGFibGVEaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSBub24tdmlzaWJsZSBjb2xsZWN0YWJsZXNcclxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0YWJsZXMubGVuZ3RoID4gMCAmJiB0aGlzLmNvbGxlY3RhYmxlc1swXS5nZXRYKCkgPCAtMjApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRvci51bnN1YnNjcmliZSh0aGlzLmNvbGxlY3RhYmxlc1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGFibGVzLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5jcmVhc2VTcGVlZCh0aW1lRGlmZikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic3RhY2xlVmVsb2NpdHkueCA+IHRoaXMuTUFYX1hfVkVMT0NJVFkpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZVZlbG9jaXR5LnggLT0gdGltZURpZmYgLyB0aGlzLlZFTE9DSVRZX0lOQ1JFQVNFX0RBTVBJTkc7XHJcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9ic3RhY2xlKSA9PiBvYnN0YWNsZS5zZXRWZWxvY2l0eSh0aGlzLm9ic3RhY2xlVmVsb2NpdHkpKTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNldFZlbG9jaXR5KHRoaXMub2JzdGFjbGVWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGFibGVzLmZvckVhY2goKGNvbGxlY3RhYmxlKSA9PiBjb2xsZWN0YWJsZS5zZXRWZWxvY2l0eSh0aGlzLm9ic3RhY2xlVmVsb2NpdHkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYWxjTmV4dE9ic3RhY2xlRGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKyAyKSAqIHRoaXMuTUVBTl9ESVNUX0JFVFdFRU5fT0JTVEFDTEVTO1xyXG4gICAgfVxyXG4gICAgY2FsY05leHRDb2xsZWN0YWJsZURpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICsgMSkgKiB0aGlzLk1FQU5fRElTVF9CRVRXRUVOX09CU1RBQ0xFUyAqIDM7XHJcbiAgICB9XHJcbiAgICBhZGRSZXdhcmRFeHBsb3Npb24oY29sbGVjdGFibGUpIHtcclxuICAgICAgICBsZXQgcmV3YXJkRXhwbG9zaW9uID0gbmV3IFJld2FyZEV4cGxvc2lvbihjb2xsZWN0YWJsZS5nZXRYKCksIGNvbGxlY3RhYmxlLmdldFkoKSwgdGhpcy5hc3NldFJlcG9yaXRvcnkpO1xyXG4gICAgICAgIHRoaXMucmV3YXJkRXhwbG9zaW9ucy5wdXNoKHJld2FyZEV4cGxvc2lvbik7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnNoaWZ0UmV3YXJkRXhwbG9zaW9ucy5iaW5kKHRoaXMpLCA0MDApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0b3Iuc3Vic2NyaWJlKHJld2FyZEV4cGxvc2lvbik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRvci51bnN1YnNjcmliZShjb2xsZWN0YWJsZSk7XHJcbiAgICB9XHJcbiAgICBzaGlmdFJld2FyZEV4cGxvc2lvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRvci51bnN1YnNjcmliZSh0aGlzLnJld2FyZEV4cGxvc2lvbnNbMF0pO1xyXG4gICAgICAgIHRoaXMucmV3YXJkRXhwbG9zaW9ucy5zaGlmdCgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb2xsaXNpb25EZXRlY3RvciB7XHJcbiAgICBzdGF0aWMgY29sbGlkZWQob2JqZWN0QSwgb2JqZWN0Qikge1xyXG4gICAgICAgIGlmIChvYmplY3RBID09IHVuZGVmaW5lZCB8fCBvYmplY3RCID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhSGl0Qm94ZXMgPSBvYmplY3RBLmdldEhpdEJveGVzKCk7XHJcbiAgICAgICAgbGV0IGJIaXRCb3hlcyA9IG9iamVjdEIuZ2V0SGl0Qm94ZXMoKTtcclxuICAgICAgICBmb3IgKGxldCBhSGl0Qm94IG9mIGFIaXRCb3hlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBiSGl0Qm94IG9mIGJIaXRCb3hlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJIaXRCb3guY29sbGlkZXNXaXRoKGFIaXRCb3gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSZWN0SGl0Qm94IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xyXG4gICAgfVxyXG4gICAgZ2V0WCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfVxyXG4gICAgZ2V0WSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG4gICAgc2V0WCh4KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgIH1cclxuICAgIHNldFkoeSkge1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBnZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgIH1cclxuICAgIGdldEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjb2xsaWRlc1dpdGgoaGl0Qm94KSB7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVkID0gdGhpcy54ICsgdGhpcy53aWR0aCA+IGhpdEJveC5nZXRYKCkgJiZcclxuICAgICAgICAgICAgdGhpcy54IDwgaGl0Qm94LmdldFgoKSArIGhpdEJveC5nZXRXaWR0aCgpICYmXHJcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gaGl0Qm94LmdldFkoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnkgPCBoaXRCb3guZ2V0WSgpICsgaGl0Qm94LmdldEhlaWdodCgpO1xyXG4gICAgICAgIC8vIGlmIChjb2xsaWRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIGNvbGxpZGVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERyYXdhYmxlT2JqZWN0IH0gZnJvbSBcIi4vRHJhd2FibGVPYmplY3RcIjtcclxuLy8gVE9ETyBJTlRFR1JBVEUgU0NBTEUgRkFDVE9SIFdJVEggV0lEVEhcclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBEcmF3YWJsZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjbnZXLCBjbnZILCB2LCB0ZW1wbGF0ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2O1xyXG4gICAgICAgIHRoaXMuaW1nID0gdGVtcGxhdGUuaW1hZ2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRlbXBsYXRlLmRpbWVuc2lvbnMudztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRlbXBsYXRlLmRpbWVuc2lvbnMuaDtcclxuICAgICAgICAvLyB0aGlzLl9zY2FsZUZhY3RvciA9IGNudkggLyB0aGlzLl9oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zY2FsZUZhY3RvciA9IDE7XHJcbiAgICAgICAgdGhpcy5jbnZXaWR0aCA9IGNudlc7XHJcbiAgICAgICAgdGhpcy5jbnZIZWlnaHQgPSBjbnZIO1xyXG4gICAgfVxyXG4gICAgc2V0VmVsb2NpdHkodmVsb2NpdHkpIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB9XHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltZykge1xyXG4gICAgICAgICAgICBsZXQgc3ggPSAtKHRoaXMueCAqIHRoaXMuc2NhbGVGYWN0b3IpO1xyXG4gICAgICAgICAgICBsZXQgc3dpZHRoID0gdGhpcy5jbnZXaWR0aCAqIHRoaXMuc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHN4LCB0aGlzLnksIHN3aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMuY252V2lkdGgsIHRoaXMuY252SGVpZ2h0KTtcclxuICAgICAgICAgICAgbGV0IGJhY2tncm91bmRMZWZ0ID0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGVGYWN0b3IgLSAodGhpcy5jbnZXaWR0aCAtIHRoaXMueCk7XHJcbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kTGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHRoaXMuY252V2lkdGggKyBiYWNrZ3JvdW5kTGVmdDtcclxuICAgICAgICAgICAgICAgIHN3aWR0aCA9ICh0aGlzLmNudldpZHRoIC0geCkgKiB0aGlzLnNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgMCwgdGhpcy55LCBzd2lkdGgsIHRoaXMuaGVpZ2h0LCB4LCAwLCAtYmFja2dyb3VuZExlZnQsIHRoaXMuY252SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aW1lRGlmZikge1xyXG4gICAgICAgIGxldCB0aW1lRmFjdG9yID0gdGltZURpZmYgLyAxNztcclxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5zY2FsZUZhY3RvciAqIHRoaXMud2lkdGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoICogdGhpcy5zY2FsZUZhY3RvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5LnggKiB0aW1lRmFjdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcmF3YWJsZU9iamVjdCB9IGZyb20gXCIuL0RyYXdhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IFJlY3RIaXRCb3ggfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RIaXRCb3hcIjtcclxuZXhwb3J0IGNsYXNzIENvbGxlY3RhYmxlSXRlbSBleHRlbmRzIERyYXdhYmxlT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgeCwgeSwgdywgaCwgdiwgdGVtcGxhdGUsIHNjYWxlID0gMSwgc2hhZG93ID0gdHJ1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5oaXRCb3hlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdjtcclxuICAgICAgICB0aGlzLmltZyA9IHRlbXBsYXRlLmltYWdlO1xyXG4gICAgICAgIHRoaXMuZHJvcHNTaGFkb3cgPSBzaGFkb3c7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRlbXBsYXRlLmRpbWVuc2lvbnMudztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRlbXBsYXRlLmRpbWVuc2lvbnMuaDtcclxuICAgICAgICBmb3IgKGxldCBoaXRCb3ggb2YgdGVtcGxhdGUuaGl0Qm94ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRCb3hlcy5wdXNoKG5ldyBSZWN0SGl0Qm94KHRoaXMueCArIGhpdEJveC54T2ZmLCB0aGlzLnkgKyBoaXRCb3gueU9mZiwgaGl0Qm94LncsIGhpdEJveC5oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0WCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfVxyXG4gICAgZ2V0WSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG4gICAgZ2V0SGl0Qm94ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Qm94ZXM7XHJcbiAgICB9XHJcbiAgICBzZXRWZWxvY2l0eSh2ZWxvY2l0eSkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIH1cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1nID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggLyAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ09ORklHLlNFVFRJTkdTLmRlYnVnSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ2aW9sZXRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLmhpdEJveGVzWzBdLmdldFgoKSwgdGhpcy5oaXRCb3hlc1swXS5nZXRZKCksIHRoaXMuaGl0Qm94ZXNbMF0uZ2V0V2lkdGgoKSwgdGhpcy5oaXRCb3hlc1swXS5nZXRIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW1nKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJvcHNTaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSA2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGltZURpZmYpIHtcclxuICAgICAgICBsZXQgdGltZUZhY3RvciA9IHRpbWVEaWZmIC8gMTc7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHkueCAqIHRpbWVGYWN0b3I7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHkueSAqIHRpbWVGYWN0b3I7XHJcbiAgICAgICAgdGhpcy5oaXRCb3hlcy5mb3JFYWNoKChoaXRCb3gpID0+IChoaXRCb3gueCArPSB0aGlzLnZlbG9jaXR5LnggKiB0aW1lRmFjdG9yKSk7XHJcbiAgICAgICAgdGhpcy5oaXRCb3hlcy5mb3JFYWNoKChoaXRCb3gpID0+IChoaXRCb3gueSArPSB0aGlzLnZlbG9jaXR5LnkgKiB0aW1lRmFjdG9yKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERyYXdhYmxlT2JqZWN0IHtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2NhbGVEcmF3YWJsZVRlbXBhbHRlKHRtcGx0LCBmYWN0b3IpIHtcclxuICAgIGxldCBzY2FsZWREaW1lbnNpb25zID0ge1xyXG4gICAgICAgIHc6IHRtcGx0LmRpbWVuc2lvbnMudyAqIGZhY3RvcixcclxuICAgICAgICBoOiB0bXBsdC5kaW1lbnNpb25zLmggKiBmYWN0b3IsXHJcbiAgICB9O1xyXG4gICAgbGV0IHNjYWxlZEhpdEJveGVzID0gW107XHJcbiAgICBmb3IgKGxldCBoaXRCb3ggb2YgdG1wbHQuaGl0Qm94ZXMpIHtcclxuICAgICAgICBzY2FsZWRIaXRCb3hlcy5wdXNoKHtcclxuICAgICAgICAgICAgeE9mZjogaGl0Qm94LnhPZmYsXHJcbiAgICAgICAgICAgIHlPZmY6IGhpdEJveC55T2ZmLFxyXG4gICAgICAgICAgICB3OiBoaXRCb3gudyxcclxuICAgICAgICAgICAgaDogaGl0Qm94LmgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzY2FsZWRIaXRCb3hlcy5mb3JFYWNoKChoaXRCb3gpID0+IHtcclxuICAgICAgICBoaXRCb3gueE9mZiAqPSBmYWN0b3I7XHJcbiAgICAgICAgaGl0Qm94LnlPZmYgKj0gZmFjdG9yO1xyXG4gICAgICAgIGhpdEJveC5oICo9IGZhY3RvcjtcclxuICAgICAgICBoaXRCb3gudyAqPSBmYWN0b3I7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHRtcGx0LmlkLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6IHNjYWxlZERpbWVuc2lvbnMsXHJcbiAgICAgICAgaW1hZ2VQYXRoOiB0bXBsdC5pbWFnZVBhdGgsXHJcbiAgICAgICAgaW1hZ2U6IHRtcGx0LmltYWdlLFxyXG4gICAgICAgIGhpdEJveGVzOiBzY2FsZWRIaXRCb3hlcyxcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERyYXdhYmxlT2JqZWN0VGVtcGxhdGVSZXBvc2l0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFRlbXBsYXRlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm9ic3RhY2xlVGVtcGxhdGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGFibGVUZW1wbGF0ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUZW1wbGF0ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uZmlnLkJBQ0tHUk9VTkRfVEVNUExBVEVTLmZvckVhY2goKHRlbXBsYXRlKSA9PiB0aGlzLmJhY2tncm91bmRUZW1wbGF0ZXMuc2V0KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZSkpO1xyXG4gICAgICAgIGNvbmZpZy5PQlNUQUNMRVNfR1JORF9URU1QTEFURVMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHRoaXMub2JzdGFjbGVUZW1wbGF0ZXMuc2V0KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZSkpO1xyXG4gICAgICAgIGNvbmZpZy5DT0xMRUNUQUJMRVNfVEVNUExBVEVTLmZvckVhY2goKHRlbXBsYXRlKSA9PiB0aGlzLmNvbGxlY3RhYmxlVGVtcGxhdGVzLnNldCh0ZW1wbGF0ZS5pZCwgdGVtcGxhdGUpKTtcclxuICAgICAgICBjb25maWcuUExBWUVSX1RFTVBMQVRFUy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4gdGhpcy5wbGF5ZXJUZW1wbGF0ZXMuc2V0KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0QmFja2dyb3VuZFRlbXBsYXRlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmJhY2tncm91bmRUZW1wbGF0ZXMudmFsdWVzKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0T2JzdGFjbGVUZW1wbGF0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5vYnN0YWNsZVRlbXBsYXRlcy52YWx1ZXMoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDb2xsZWN0YWJsZVRlbXBsYXRlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNvbGxlY3RhYmxlVGVtcGxhdGVzLnZhbHVlcygpKTtcclxuICAgIH1cclxuICAgIGdldFBsYXllclRlbXBsYXRlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnBsYXllclRlbXBsYXRlcy52YWx1ZXMoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRCYWNrZ3JvdW5kVGVtcGxhdGUoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kVGVtcGxhdGVzLmdldChpZCk7XHJcbiAgICB9XHJcbiAgICBnZXRPYnN0YWNsZVRlbXBsYXRlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzdGFjbGVUZW1wbGF0ZXMuZ2V0KGlkKTtcclxuICAgIH1cclxuICAgIGdldENvbGxlY3RhYmxlVGVtcGxhdGUoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0YWJsZVRlbXBsYXRlcy5nZXQoaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGxheWVyVGVtcGxhdGUoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJUZW1wbGF0ZXMuZ2V0KGlkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcmF3YWJsZU9iamVjdCB9IGZyb20gXCIuL0RyYXdhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IFJlY3RIaXRCb3ggfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RIaXRCb3hcIjtcclxuZXhwb3J0IGNsYXNzIE9ic3RhY2xlIGV4dGVuZHMgRHJhd2FibGVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCB4LCB5LCB3LCBoLCB2LCB0ZW1wbGF0ZSwgc2NhbGUgPSAxLCBzaGFkb3cgPSB0cnVlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmhpdEJveGVzID0gW107XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2O1xyXG4gICAgICAgIHRoaXMuaW1nID0gdGVtcGxhdGUuaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5kcm9wc1NoYWRvdyA9IHNoYWRvdztcclxuICAgICAgICB0aGlzLndpZHRoID0gdGVtcGxhdGUuZGltZW5zaW9ucy53O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGVtcGxhdGUuZGltZW5zaW9ucy5oO1xyXG4gICAgICAgIGZvciAobGV0IGhpdEJveCBvZiB0ZW1wbGF0ZS5oaXRCb3hlcykge1xyXG4gICAgICAgICAgICB0aGlzLmhpdEJveGVzLnB1c2gobmV3IFJlY3RIaXRCb3godGhpcy54ICsgaGl0Qm94LnhPZmYsIHRoaXMueSArIGhpdEJveC55T2ZmLCBoaXRCb3gudywgaGl0Qm94LmgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgIH1cclxuICAgIGdldEhpdEJveGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpdEJveGVzO1xyXG4gICAgfVxyXG4gICAgc2V0VmVsb2NpdHkodmVsb2NpdHkpIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB9XHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltZyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRncmVlblwiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnkgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ09ORklHLlNFVFRJTkdTLmRlYnVnSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaXRCb3hlcy5mb3JFYWNoKChoaXRCb3gpID0+IGN0eC5maWxsUmVjdChoaXRCb3guZ2V0WCgpLCBoaXRCb3guZ2V0WSgpLCBoaXRCb3guZ2V0V2lkdGgoKSwgaGl0Qm94LmdldEhlaWdodCgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW1nKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJvcHNTaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGltZURpZmYpIHtcclxuICAgICAgICBsZXQgdGltZUZhY3RvciA9IHRpbWVEaWZmIC8gMTc7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHkueCAqIHRpbWVGYWN0b3I7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHkueSAqIHRpbWVGYWN0b3I7XHJcbiAgICAgICAgdGhpcy5oaXRCb3hlcy5mb3JFYWNoKChoaXRCb3gpID0+IChoaXRCb3gueCArPSB0aGlzLnZlbG9jaXR5LnggKiB0aW1lRmFjdG9yKSk7XHJcbiAgICAgICAgdGhpcy5oaXRCb3hlcy5mb3JFYWNoKChoaXRCb3gpID0+IChoaXRCb3gueSArPSB0aGlzLnZlbG9jaXR5LnkgKiB0aW1lRmFjdG9yKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhd2FibGVPYmplY3QgfSBmcm9tIFwiLi9EcmF3YWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBSZWN0SGl0Qm94IH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0SGl0Qm94XCI7XHJcbmltcG9ydCB7IHNjYWxlUGxheWVyVGVtcGxhdGUsIH0gZnJvbSBcIi4vUGxheWVyVGVtcGxhdGVcIjtcclxuZXhwb3J0IHZhciBQbGF5ZXJTdGF0ZTtcclxuKGZ1bmN0aW9uIChQbGF5ZXJTdGF0ZSkge1xyXG4gICAgUGxheWVyU3RhdGVbUGxheWVyU3RhdGVbXCJSVU5OSU5HXCJdID0gMF0gPSBcIlJVTk5JTkdcIjtcclxuICAgIFBsYXllclN0YXRlW1BsYXllclN0YXRlW1wiSlVNUElOR1wiXSA9IDFdID0gXCJKVU1QSU5HXCI7XHJcbiAgICBQbGF5ZXJTdGF0ZVtQbGF5ZXJTdGF0ZVtcIkNSQVNIRURcIl0gPSAyXSA9IFwiQ1JBU0hFRFwiO1xyXG59KShQbGF5ZXJTdGF0ZSB8fCAoUGxheWVyU3RhdGUgPSB7fSkpO1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRHJhd2FibGVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoQ09ORklHLCB4LCB5LCBNSU5fWSwgaGVpZ2h0LCB0ZW1wbGF0ZSwgYXVkaW9QbGF5ZXIsIHNoYWRvdyA9IHRydWUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuTUlOX1kgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuR1JBVklUWSA9IDM7XHJcbiAgICAgICAgdGhpcy5KVU1QX1ZFTE9DSVRZID0gLTM1O1xyXG4gICAgICAgIHRoaXMuTUFYX0pVTVBfVElNRSA9IDUwMDtcclxuICAgICAgICB0aGlzLkZQUyA9IDEgLyA0MDtcclxuICAgICAgICB0aGlzLmhpdEJveGVzID0gW107XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIGxldCBzY2FsZUZhY3RvciA9IGhlaWdodCAvIHRlbXBsYXRlLmRpbWVuc2lvbnMuaDtcclxuICAgICAgICB0aGlzLk1JTl9ZID0gTUlOX1kgLSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy54ID0geCAtIHRlbXBsYXRlLmZyYW1lV2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy55VmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBQbGF5ZXJTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0ZW1wbGF0ZS5mcmFtZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGVtcGxhdGUuZGltZW5zaW9ucy5oO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBzY2FsZVBsYXllclRlbXBsYXRlKHRlbXBsYXRlLCBzY2FsZUZhY3Rvcik7XHJcbiAgICAgICAgLy8gSGl0Ym94ZXNcclxuICAgICAgICBmb3IgKGxldCBoaXRCb3ggb2YgdGhpcy50ZW1wbGF0ZS5oaXRCb3hlcykge1xyXG4gICAgICAgICAgICB0aGlzLmhpdEJveGVzLnB1c2gobmV3IFJlY3RIaXRCb3godGhpcy54ICsgaGl0Qm94LnhPZmYsIHRoaXMueSArIGhpdEJveC55T2ZmLCBoaXRCb3gudywgaGl0Qm94LmgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhd2luZyBkYXRhXHJcbiAgICAgICAgdGhpcy5pbWcgPSB0ZW1wbGF0ZS5pbWFnZTtcclxuICAgICAgICB0aGlzLmRyb3BzU2hhZG93ID0gc2hhZG93O1xyXG4gICAgICAgIHRoaXMuZHJhd0hlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmRyYXdXaWR0aCA9IHRlbXBsYXRlLmZyYW1lV2lkdGggKiBzY2FsZUZhY3RvcjtcclxuICAgICAgICAvLyBBbmltYXRpb25cclxuICAgICAgICB0aGlzLm51bU9mRnJhbWVzID0gdGVtcGxhdGUuZnJhbWVzO1xyXG4gICAgICAgIHRoaXMuY3VyclN0YXRlRGVzY3IgPSB0ZW1wbGF0ZS5qdW1waW5nO1xyXG4gICAgICAgIHRoaXMuY3VyckZyYW1lID0gdGhpcy5jdXJyU3RhdGVEZXNjci5zdGFydEZyYW1lO1xyXG4gICAgICAgIHRoaXMudGltZVRvTmV4dEZyYW1lID0gdGhpcy5jdXJyU3RhdGVEZXNjci5tc1BlckZyYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0SGl0Qm94ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Qm94ZXM7XHJcbiAgICB9XHJcbiAgICBzZXRDcmFzaGVkKCkge1xyXG4gICAgICAgIHRoaXMuY3VyclN0YXRlRGVzY3IgPSB0aGlzLnRlbXBsYXRlLmNyYXNoZWQ7XHJcbiAgICAgICAgdGhpcy5jdXJyRnJhbWUgPSB0aGlzLmN1cnJTdGF0ZURlc2NyLnN0YXJ0RnJhbWU7XHJcbiAgICAgICAgdGhpcy50aW1lVG9OZXh0RnJhbWUgPSB0aGlzLmN1cnJTdGF0ZURlc2NyLm1zUGVyRnJhbWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICAgKi9cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQ09ORklHLlNFVFRJTkdTLmRlYnVnSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5oaXRCb3hlc1swXS5nZXRYKCksIHRoaXMuaGl0Qm94ZXNbMF0uZ2V0WSgpLCB0aGlzLmhpdEJveGVzWzBdLmdldFdpZHRoKCksIHRoaXMuaGl0Qm94ZXNbMF0uZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbWcpIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcHNTaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiIzQ0NDQ0NFwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSAzO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMuY3VyckZyYW1lICogdGhpcy53aWR0aCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLmRyYXdXaWR0aCwgdGhpcy5kcmF3SGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGltZURpZmYpIHtcclxuICAgICAgICAvLyBVcGRhdGUgcG9zIGFuZCBoaXRib3hlc1xyXG4gICAgICAgIGxldCBmcmFtZXNQYXNzZWQgPSB0aW1lRGlmZiAqIHRoaXMuRlBTO1xyXG4gICAgICAgIGxldCBsYXN0WSA9IHRoaXMueTtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy55VmVsb2NpdHkgKiBmcmFtZXNQYXNzZWQ7XHJcbiAgICAgICAgdGhpcy55VmVsb2NpdHkgKz0gdGhpcy5HUkFWSVRZICogZnJhbWVzUGFzc2VkO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPj0gdGhpcy5NSU5fWSkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLk1JTl9ZO1xyXG4gICAgICAgICAgICB0aGlzLnlWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGl0Qm94ZXMuZm9yRWFjaCgoaGl0Qm94KSA9PiAoaGl0Qm94LnkgKz0gdGhpcy55IC0gbGFzdFkpKTtcclxuICAgICAgICAvLyBVcGRhdGUgZHJhd2luZyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgaWYgKGxhc3RZIDwgdGhpcy5NSU5fWSAmJiB0aGlzLnkgPT0gdGhpcy5NSU5fWSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUGxheWVyU3RhdGUuUlVOTklORztcclxuICAgICAgICAgICAgdGhpcy50aW1lVG9OZXh0RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJTdGF0ZURlc2NyID0gdGhpcy50ZW1wbGF0ZS5ydW5uaW5nO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJGcmFtZSA9IHRoaXMuY3VyclN0YXRlRGVzY3Iuc3RhcnRGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lVG9OZXh0RnJhbWUgLT0gdGltZURpZmY7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZVRvTmV4dEZyYW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lVG9OZXh0RnJhbWUgPSB0aGlzLmN1cnJTdGF0ZURlc2NyLm1zUGVyRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckZyYW1lID1cclxuICAgICAgICAgICAgICAgICh0aGlzLmN1cnJGcmFtZSArIDEpICVcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5jdXJyU3RhdGVEZXNjci5lbmRGcmFtZSAtIHRoaXMuY3VyclN0YXRlRGVzY3Iuc3RhcnRGcmFtZSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0SnVtcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUuY2FuSnVtcCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPj0gdGhpcy5NSU5fWSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUGxheWVyU3RhdGUuSlVNUElORztcclxuICAgICAgICAgICAgdGhpcy55IC09IDAuMTtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLkpVTVBfVkVMT0NJVFk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwianVtcFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyU3RhdGVEZXNjciA9IHRoaXMudGVtcGxhdGUuanVtcGluZztcclxuICAgICAgICAgICAgdGhpcy5qdW1wU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyRnJhbWUgPSB0aGlzLmN1cnJTdGF0ZURlc2NyLnN0YXJ0RnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVRvTmV4dEZyYW1lID0gdGhpcy5jdXJyU3RhdGVEZXNjci5tc1BlckZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuZEp1bXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFBsYXllclN0YXRlLkpVTVBJTkcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55VmVsb2NpdHkgPCB0aGlzLkpVTVBfVkVMT0NJVFkgLyAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5KVU1QX1ZFTE9DSVRZIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFBsYXllclN0YXRlLlJVTk5JTkc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2NhbGVEcmF3YWJsZVRlbXBhbHRlLCB9IGZyb20gXCIuL0RyYXdhYmxlT2JqZWN0VGVtcGxhdGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlUGxheWVyVGVtcGxhdGUodGVtcGxhdGUsIGZhY3Rvcikge1xyXG4gICAgbGV0IHNjYWxlZFRlbXBsYXRlID0gc2NhbGVEcmF3YWJsZVRlbXBhbHRlKHRlbXBsYXRlLCBmYWN0b3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogc2NhbGVkVGVtcGxhdGUuaWQsXHJcbiAgICAgICAgZGltZW5zaW9uczogc2NhbGVkVGVtcGxhdGUuZGltZW5zaW9ucyxcclxuICAgICAgICBpbWFnZVBhdGg6IHNjYWxlZFRlbXBsYXRlLmltYWdlUGF0aCxcclxuICAgICAgICBpbWFnZTogc2NhbGVkVGVtcGxhdGUuaW1hZ2UsXHJcbiAgICAgICAgaGl0Qm94ZXM6IHNjYWxlZFRlbXBsYXRlLmhpdEJveGVzLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiB0ZW1wbGF0ZS5kaXNwbGF5TmFtZSxcclxuICAgICAgICBmcmFtZXM6IHRlbXBsYXRlLmZyYW1lcyxcclxuICAgICAgICBmcmFtZVdpZHRoOiB0ZW1wbGF0ZS5mcmFtZVdpZHRoLFxyXG4gICAgICAgIGNhbkp1bXA6IHRlbXBsYXRlLmNhbkp1bXAsXHJcbiAgICAgICAgcnVubmluZzogdGVtcGxhdGUucnVubmluZyxcclxuICAgICAgICBqdW1waW5nOiB0ZW1wbGF0ZS5qdW1waW5nLFxyXG4gICAgICAgIGNyYXNoZWQ6IHRlbXBsYXRlLmNyYXNoZWQsXHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IERyYXdhYmxlT2JqZWN0IH0gZnJvbSBcIi4vRHJhd2FibGVPYmplY3RcIjtcclxuZXhwb3J0IGNsYXNzIFJld2FyZEV4cGxvc2lvbiBleHRlbmRzIERyYXdhYmxlT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGFzc2V0UmVwb3NpdG9yeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5NQVhfVkVMID0gMi41O1xyXG4gICAgICAgIHRoaXMuVkVMX0RBTVAgPSAwLjk4O1xyXG4gICAgICAgIHRoaXMuVElNRV9USUxfVkFOSVNIID0gNTAwO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmdldFJhbmREaXIoKTtcclxuICAgICAgICAgICAgbGV0IHhWZWwgPSBNYXRoLnNpbihkaXIpICogdGhpcy5NQVhfVkVMICogKDEgKyBNYXRoLnJhbmRvbSgpICogMC41KTtcclxuICAgICAgICAgICAgbGV0IHlWZWwgPSBNYXRoLmNvcyhkaXIpICogdGhpcy5NQVhfVkVMICogKDEgKyBNYXRoLnJhbmRvbSgpICogMC41KTtcclxuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0geyB4OiB4VmVsLCB5OiB5VmVsIH07XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKHRoaXMueCwgdGhpcy55LCB2ZWxvY2l0eSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcnRpY2xlSW1hZ2UgPSBhc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJyZXdhcmQtc3RhclwiKTtcclxuICAgIH1cclxuICAgIGdldFJhbmREaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcclxuICAgIH1cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gY3R4LnRyYW5zbGF0ZShwYXJ0aWNsZS54ICsgMTUsIHBhcnRpY2xlLnkgKyAxMyk7XHJcbiAgICAgICAgICAgIC8vIGN0eC5yb3RhdGUocGFydGljbGUucm90YXRpb24pO1xyXG4gICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucGFydGljbGVJbWFnZSwgcGFydGljbGUueCwgcGFydGljbGUueSwgMzAsIDI3KTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aW1lRGlmZikge1xyXG4gICAgICAgIGxldCB0aW1lRmFjdG9yID0gdGltZURpZmYgLyAxNztcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS54ICs9IHBhcnRpY2xlLnZlbC54ICogdGltZUZhY3RvcjtcclxuICAgICAgICAgICAgcGFydGljbGUueSArPSBwYXJ0aWNsZS52ZWwueSAqIHRpbWVGYWN0b3I7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnZlbC54ICo9IHRoaXMuVkVMX0RBTVA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnZlbC55ICo9IHRoaXMuVkVMX0RBTVA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnJvdGF0aW9uICs9IHBhcnRpY2xlLnJvdGF0aW9uQ29uc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSAtPSB0aW1lRGlmZiAvIHRoaXMuVElNRV9USUxfVkFOSVNIO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFBhcnRpY2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHZlbCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnZlbCA9IHZlbDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ29uc3QgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAtIDAuMTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU2NvcmVNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRykge1xyXG4gICAgICAgIHRoaXMuYXBpRW5kcG9pbnQgPSBDT05GSUcuU0VUVElOR1MuaXNEZXZNb2RlID8gQ09ORklHLkFQSV9QQVRIUy5IT1NUIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFwaUVuZHBvaW50ID0gdGhpcy5hcGlFbmRwb2ludC5jb25jYXQoQ09ORklHLkFQSV9QQVRIUy5TQ09SRVMpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjb3JlSWRzID0gW107XHJcbiAgICAgICAgdGhpcy5zY29yZXMgPSBbXTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFNjb3JlTWFuYWdlckRBTygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoQWxsU2NvcmVzKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlczogdGhpcy5zY29yZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBsYXllclNjb3JlSWRzOiB0aGlzLmN1cnJlbnRQbGF5ZXJTY29yZUlkcyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyB1cGxvYWRTY29yZShzY29yZSwgYWxpYXMpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyU2NvcmVJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXRTY29yZSh0aGlzLmN1cnJlbnRQbGF5ZXJTY29yZUlkc1swXSwgTWF0aC5yb3VuZChzY29yZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zdFNjb3JlKE1hdGgucm91bmQoc2NvcmUpLCBhbGlhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcG9zdFNjb3JlKHNjb3JlLCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKHRoaXMuYXBpRW5kcG9pbnQsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBsYXllckFsaWFzOiBhbGlhcywgc2NvcmU6IHNjb3JlIH0pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChib2R5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY29yZUlkcy5wdXNoKGJvZHkuaWQpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbmFibGUgdG8gcG9zdCBzY29yZTogJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBwdXRTY29yZShpZCwgc2NvcmUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwdXRTY29yZUVuZHBvaW50ID0gdGhpcy5hcGlFbmRwb2ludCArIFwiL1wiICsgaWQ7XHJcbiAgICAgICAgICAgIGZldGNoKHB1dFNjb3JlRW5kcG9pbnQsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc2NvcmU6IHNjb3JlIH0pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChib2R5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVuYWJsZSB0byB1cGRhdGUgc2NvcmU6ICR7cmVzfWApO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZmV0Y2hBbGxTY29yZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2godGhpcy5hcGlFbmRwb2ludCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChib2R5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYm9keS5mb3JFYWNoKChzY29yZSkgPT4gdGhpcy5zY29yZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNjb3JlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckFsaWFzOiBzY29yZS5wbGF5ZXJfYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHNjb3JlLnNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHNjb3JlLmRhdGVfc2NvcmVkKSxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVW5hYmxlIHRvIGZldGNoIHNjb3JlczogJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVG91Y2hEZXZpY2UoKSB7XHJcbiAgICByZXR1cm4gKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93IHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCB8fFxyXG4gICAgICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCk7XHJcbn1cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRvIGNoZWNrIHdoZXRoZXIgZGV2aWNlIGlzIGxpa2VseSB0byBiZSBhIG1vYmlsZSBkZXZpY2UuIEFkYXB0ZWQgZnJvbSBodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1xyXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBkZXZpY2UgaXMgYSBtb2JpbGUgZGV2aWNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIChmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fFxyXG4gICAgICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSlcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XHJcbiAgICByZXR1cm4gY2hlY2s7XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNNb2JpbGUsIGlzVG91Y2hEZXZpY2UgfSBmcm9tIFwiLi4vdXRpbC9kZXZpY2VEaXNjb3ZlcnlcIjtcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xUdXRvcmlhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIGNvbnRyb2xsZXIsIGFzc3NldFJlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLkNPTkZJRyA9IENPTkZJRztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuYXNzZXRSZXBvc2l0b3J5ID0gYXNzc2V0UmVwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuQ09OVFJPTF9UVVRPUklBTC5DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkNPTlRST0xfVFVUT1JJQUwuSU1BR0UpO1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkNPTlRST0xfVFVUT1JJQUwuTEFCRUwpO1xyXG4gICAgICAgIHRoaXMudG91Y2hDb250cm9sbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5NSVNDLlRPVUNIX0NPTlRST0xMRVIpO1xyXG4gICAgICAgIHRoaXMuc2hvd1R1dG9yaWFsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldHVwRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBpZiAoaXNNb2JpbGUoKSAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcInRvdWNoLWluZGljYXRvclwiKS5zcmM7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gXCJUYXAgdG8ganVtcFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcInNwYWNlYmFyLWluZGljYXRvclwiKS5zcmM7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gXCJQcmVzcyBTUEFDRSB0byBqdW1wXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUdXRvcmlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFdmVudHMoZSkge1xyXG4gICAgICAgIGlmICgoZS50eXBlID09PSBcImtleWRvd25cIiAmJiBlLmtleUNvZGUgPT0gdGhpcy5DT05GSUcuS0VZX0NPREVTLmp1bXApIHx8XHJcbiAgICAgICAgICAgIGUudHlwZSA9PSBcInRvdWNoc3RhcnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VHV0b3JpYWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaENvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2V0UGxheWVyQWxpYXNEaWFsb2cgfSBmcm9tIFwiLi9jb21wb25lbnRzL0dldFBsYXllckFsaWFzRGlhbG9nXCI7XHJcbmltcG9ydCB7IFNjb3JlVGFibGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL1Njb3JlVGFibGVcIjtcclxuaW1wb3J0IHsgU2VsZWN0UGxheWVyRGlhbG9nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9TZWxlY3RQbGF5ZXJEaWFsb2dcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWVPdmVyU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgY29udHJvbGxlciwgYXVkaW9QbGF5ZXIsIGFzc2V0UmVzcG9zaXRvcnkpIHtcclxuICAgICAgICAvLyBTdHJpbmdzXHJcbiAgICAgICAgdGhpcy5TVFJfTkVXX0hJR0hTQ09SRSA9IFwiTmV3IEhpZ2hzY29yZSFcIjtcclxuICAgICAgICB0aGlzLlNUUl9TQ09SRSA9IFwiU2NvcmVcIjtcclxuICAgICAgICB0aGlzLkJBQ0tHUk9VTkRfSU1BR0VfUEFUSCA9IFwiaHR0cDovL2FsZXgtcG9ydGZvbGlvLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy9kZXNpZ25fZ2FtZV9vdmVyX2JnLnN2Z1wiO1xyXG4gICAgICAgIHRoaXMudGFibGVUcmlnZ2VyQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuYXNzZXRSZXBvc2l0b3J5ID0gYXNzZXRSZXNwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLnNjb3JlVGFibGVDb21wb25lbnQgPSBuZXcgU2NvcmVUYWJsZShDT05GSUcsIHRoaXMsIGF1ZGlvUGxheWVyLCBhc3NldFJlc3Bvc2l0b3J5KTtcclxuICAgICAgICB0aGlzLmdldFBsYXllckFsaWFzRGlhbG9nID0gbmV3IEdldFBsYXllckFsaWFzRGlhbG9nKENPTkZJRywgYXVkaW9QbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGxheWVyRGlhbG9nID0gbmV3IFNlbGVjdFBsYXllckRpYWxvZyhDT05GSUcsIGF1ZGlvUGxheWVyLCBhc3NldFJlc3Bvc2l0b3J5KTtcclxuICAgICAgICB0aGlzLmxvY2tUYWJsZVVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGFibGVVcGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZGUtREVcIik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uQ09OVEFJTkVSKTtcclxuICAgICAgICB0aGlzLnBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLlBBTkVMKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uUkVTVEFSVF9CVVRUT04pO1xyXG4gICAgICAgIHRoaXMucXVpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5RVUlUX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uU0NPUkVfVEVYVCk7XHJcbiAgICAgICAgdGhpcy5zY29yZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLlNDT1JFX1ZBTFVFKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkNIQVJBQ1RFUl9TRUxFQ1RPUik7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uU0NST0xMX0NPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5wYWdlT25lSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLlBBR0VfT05FX0lORElDQVRPUik7XHJcbiAgICAgICAgdGhpcy5wYWdlVHdvSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLlBBR0VfVFdPX0lORElDQVRPUik7XHJcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5jb250cm9sbGVyLmdldEdhbWVTdGF0ZURBTygpKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIC8vIHRoaXMudHJpZ2dlclNjb3JlVGFibGVVcGRhdGUoKTtcclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgLy8gV2UgZG8gbm90IGNvbnRyb2wgY29uY3VycmVuY3kgaGVyZSwgd2UgdHJ1c3QgdGhlIGNvbnRyb2xsZXJcclxuICAgIGFzeW5jIGdldFBsYXllckFsaWFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBsYXllckFsaWFzRGlhbG9nLmdldFBsYXllckFsaWFzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyU2NvcmVUYWJsZVVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBTdGlsbCB1bnNhZmUsIGJ1dCBiZXR0ZXJcclxuICAgICAgICBpZiAodGhpcy5sb2NrVGFibGVVcGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ09ORklHLlNFVFRJTkdTLmRlYnVnSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhYmxlIHVwZGF0ZSBpcyBsb2NrZWQsIHRyaWdnZXIgcXVldWUuLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50YWJsZVVwZGF0ZVJlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NrVGFibGVVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLkNPTkZJRy5TRVRUSU5HUy5kZWJ1Z0lzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlVHJpZ2dlckNvdW50Kys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2NraW5nIHRhYmxlIHVwZGF0ZS4gVHJpZ2dlciBjb3VudGVyOiAke3RoaXMudGFibGVUcmlnZ2VyQ291bnR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcmVUYWJsZUNvbXBvbmVudC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclxyXG4gICAgICAgICAgICAuZ2V0U2NvcmVNYW5hZ2VyREFPKClcclxuICAgICAgICAgICAgLnRoZW4oKHNjb3JlTWFuYWdlckRBTykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlVGFibGVDb21wb25lbnQuY3JlYXRlU2NvcmVUYWJsZShzY29yZU1hbmFnZXJEQU8pO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlVGFibGVDb21wb25lbnQuc2hvd1RhYmxlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVRhYmxlQ29tcG9uZW50LnNob3dFcnJvcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ09ORklHLlNFVFRJTkdTLmRlYnVnSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbGVhc2UgdGFibGUgbG9jay4uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvY2tUYWJsZVVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZVVwZGF0ZVJlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQ09ORklHLlNFVFRJTkdTLmRlYnVnSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyaWdnZXIgdGFibGUgdXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZVVwZGF0ZVJlcXVlc3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyU2NvcmVUYWJsZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBub3RpZnlBc3NldHNMb2FkZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQbGF5ZXJEaWFsb2cuc2V0dXBDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGdhbWVTdGF0ZURBTykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDaGFyYWN0ZXIgPSB0aGlzLkNPTkZJRy5QTEFZRVJfVEVNUExBVEVTLmZpbmQoKGVsKSA9PiBlbC5pZCA9PT0gZ2FtZVN0YXRlREFPLmNoYXJhY3RlcklkKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdG9yLmlubmVyVGV4dCA9IGN1cnJlbnRDaGFyYWN0ZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQbGF5ZXJEaWFsb2cuc2V0UGxheWVySW5kZXgodGhpcy5DT05GSUcuUExBWUVSX1RFTVBMQVRFUy5pbmRleE9mKGN1cnJlbnRDaGFyYWN0ZXIpKTtcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICBnYW1lU3RhdGVEQU8uY3VycmVudFNjb3JlIDwgZ2FtZVN0YXRlREFPLmxvY2FsSGlnaHNjb3JlXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuU1RSX1NDT1JFXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuU1RSX05FV19ISUdIU0NPUkU7XHJcbiAgICAgICAgdGhpcy5zY29yZVZhbHVlLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLnNjb3JlRm9ybWF0dGVyLmZvcm1hdChNYXRoLnJvdW5kKGdhbWVTdGF0ZURBTy5jdXJyZW50U2NvcmUpKSk7XHJcbiAgICB9XHJcbiAgICBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5CQUNLR1JPVU5EX0lNQUdFX1BBVEh9KWA7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNvbnRyb2xsZXIucmVzdGFydEdhbWUuYmluZCh0aGlzLmNvbnRyb2xsZXIpKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RQbGF5ZXJEaWFsb2cuc2hvdygpLnRoZW4oKHBsYXllckluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdG9yLmlubmVyVGV4dCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DT05GSUcuUExBWUVSX1RFTVBMQVRFU1twbGF5ZXJJbmRleF0uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0Q2hhcmFjdGVyKHRoaXMuQ09ORklHLlBMQVlFUl9URU1QTEFURVNbdGhpcy5zZWxlY3RQbGF5ZXJEaWFsb2cuZ2V0UGxheWVySW5kZXgoKV1cclxuICAgICAgICAgICAgICAgICAgICAuaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwiYnV0dG9uXCIpKTtcclxuICAgICAgICB0aGlzLnF1aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwiYnV0dG9uXCIpKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5wYWdlT25lSW5kaWNhdG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzMzMTM1Y1wiO1xyXG4gICAgICAgIHRoaXMucGFnZVR3b0luZGljYXRvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiZmJmYmZcIjtcclxuICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsRXZlbnQoKSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTY3JvbGxFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA8XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLm9mZnNldFdpZHRoIC8gMikge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VPbmVJbmRpY2F0b3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzMxMzVjXCI7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVR3b0luZGljYXRvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiZmJmYmZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU9uZUluZGljYXRvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiZmJmYmZcIjtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVHdvSW5kaWNhdG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzMzMTM1Y1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5HYW1lSW5mb1NjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIGNvbnRyb2xsZXIsIGFzc3NldFJlcG9zaXRvcnksIGF1ZGlvUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5CQUNLR1JPVU5EX0lNQUdFX1BBVEggPSBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvaW50cm8tYmcucG5nXCI7XHJcbiAgICAgICAgdGhpcy5SRUZSRVNIX1RJTUUgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5MRUFWRV9BTklNQVRJT05fRFVSQVRJT04gPSA1MDA7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmFzc2V0UmVwb3NpdG9yeSA9IGFzc3NldFJlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5JTl9HQU1FX0lORk9fU0NSRUVOLkNPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5QQVVTRV9CVVRUT04pO1xyXG4gICAgICAgIHRoaXMubXV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5NVVRFX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5zY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5TQ09SRV9DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5TQ09SRV9MQUJFTCk7XHJcbiAgICAgICAgdGhpcy5oaXRDb2xsZWN0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuSU5fR0FNRV9JTkZPX1NDUkVFTi5ISVRfQ09MTEVDVEFCTEUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNNdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wYXVzZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uUGF1c2VcIikuc3JjO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXV0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRlSWNvbi5zcmMgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcImljb25NdXRlXCIpLnNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uU291bmRcIikuc3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoU2NvcmVJZCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUGFuZWwuYmluZCh0aGlzKSwgdGhpcy5SRUZSRVNIX1RJTUUpO1xyXG4gICAgfVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMucmVmcmVzaFNjb3JlSWQpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcIndnLXNpbS1pbi1nYW1lLWluZm8tYW5pbWF0aW9uXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LCB0aGlzLkxFQVZFX0FOSU1BVElPTl9EVVJBVElPTik7XHJcbiAgICB9XHJcbiAgICBub3RpZnlOZXdIaWdoc2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcIndnLXNpbS1pbmdhbWUtaGlnaHNjb3JlLWFuaW1hdGlvblwiO1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwibmV3LWluZ2FtZS1oaWdoc2NvcmVcIik7XHJcbiAgICB9XHJcbiAgICBub3RpZnlIaXRDb2xsZWN0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLmhpdENvbGxlY3RhYmxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5oaXRDb2xsZWN0YWJsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpLCAxMDAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVBhbmVsKCkge1xyXG4gICAgICAgIGNvbnN0IGdhbWVTdGF0ZURBTyA9IHRoaXMuY29udHJvbGxlci5nZXRHYW1lU3RhdGVEQU8oKTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuaW5uZXJIVE1MID0gU3RyaW5nKE1hdGgucm91bmQoZ2FtZVN0YXRlREFPLmN1cnJlbnRTY29yZSkpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUGF1c2VHYW1lKCkge1xyXG4gICAgICAgIC8vIFRPRE8gY291bGQgbGVhZCB0byBpbnZhbGlkIGJ1dHRvbiBiZWNhdXNlIHJldHVybiB0eXBlIGlzIG5vdCB2ZXJpZmllZFxyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlSWNvbi5zcmMgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcImljb25QbGF5XCIpLnNyYztcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnBhdXNlR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uUGF1c2VcIikuc3JjO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVzdW1lR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVNdXRlR2FtZSgpIHtcclxuICAgICAgICAvLyBUT0RPIGludmFsaWQgc3RhdGUgYWZ0ZXIgcmVzdGFydFxyXG4gICAgICAgIC8vIFRPRE8gY291bGQgbGVhZCB0byBpbnZhbGlkIGJ1dHRvbiBiZWNhdXNlIHJldHVybiB0eXBlIGlzIG5vdCB2ZXJpZmllZFxyXG4gICAgICAgIGlmICghdGhpcy5pc011dGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uTXV0ZVwiKS5zcmM7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRNdXRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZUljb24uc3JjID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0SW1hZ2UoXCJpY29uU291bmRcIikuc3JjO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0TXV0ZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTXV0ZWQgPSAhdGhpcy5pc011dGVkO1xyXG4gICAgfVxyXG4gICAgc2V0dXBFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID1cclxuICAgICAgICAgICAgU3RyaW5nKHRoaXMuTEVBVkVfQU5JTUFUSU9OX0RVUkFUSU9OIC8gMTAwMCkgKyBcInNcIjtcclxuICAgICAgICB0aGlzLmhpdENvbGxlY3RhYmxlLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIFwiK1wiICsgU3RyaW5nKHRoaXMuQ09ORklHLkdBTUVfUExBWS5wb2ludHNQZXJDb2xsZWN0YWJsZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZUljb24gPSB0aGlzLnBhdXNlQnV0dG9uLmFwcGVuZENoaWxkKG5ldyBJbWFnZSgpKTtcclxuICAgICAgICB0aGlzLm11dGVJY29uID0gdGhpcy5tdXRlQnV0dG9uLmFwcGVuZENoaWxkKG5ldyBJbWFnZSgpKTtcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5tdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQYXVzZUdhbWUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5tdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU11dGVHYW1lLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnRyb1NjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIGNvbnRyb2xsZXIsIGF1ZGlvUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5CQUNLR1JPVU5EX0lNQUdFX1BBVEggPSBcImh0dHA6Ly9hbGV4LXBvcnRmb2xpby5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvaW50cm8tYmcuc3ZnXCI7XHJcbiAgICAgICAgdGhpcy5MRUFWRV9BTklNQVRJT05fRFVSQVRJT04gPSAxODAwO1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5JTlRST19TQ1JFRU4uQ09OVEFJTkVSKTtcclxuICAgICAgICB0aGlzLnBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5JTlRST19TQ1JFRU4uUEFORUwpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLklOVFJPX1NDUkVFTi5TVEFSVF9CVVRUT04pO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCk7XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcIndnLXNpbS1nYW1lLWludHJvLWFuaW1hdGlvblwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSwgdGhpcy5MRUFWRV9BTklNQVRJT05fRFVSQVRJT04pO1xyXG4gICAgfVxyXG4gICAgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uU3RhcnQpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSwgdGhpcy5MRUFWRV9BTklNQVRJT05fRFVSQVRJT04pO1xyXG4gICAgfVxyXG4gICAgc2V0dXBFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID1cclxuICAgICAgICAgICAgU3RyaW5nKHRoaXMuTEVBVkVfQU5JTUFUSU9OX0RVUkFUSU9OIC8gMTAwMCkgKyBcInNcIjtcclxuICAgICAgICB0aGlzLnBhbmVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLkJBQ0tHUk9VTkRfSU1BR0VfUEFUSH0pYDtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMb2FkaW5nU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgY29udHJvbGxlciwgYXNzZXRSZXBvc2l0b3J5LCBhdWRpb1BsYXllcikge1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5hc3NldFJlcG9zaXRvcnkgPSBhc3NldFJlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1BsYXllciA9IGF1ZGlvUGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5MT0FESU5HX1NDUkVFTi5QUk9HUkVTU19MQUJFTF9DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkxPQURJTkdfU0NSRUVOLlBST0dSRVNTKTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5MT0FESU5HX1NDUkVFTi5QUk9HUkVTU19MQUJFTCk7XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmFmKHRoaXMucnVuKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGluZ1Byb2dyZXNzID0gdGhpcy5hc3NldFJlcG9zaXRvcnkuZ2V0UHJvZ3Jlc3MoKTtcclxuICAgICAgICBjb25zdCBjc3NSaWdodCA9IDEwMCAqICgwLjk3IC0gbG9hZGluZ1Byb2dyZXNzICogMC45NTUpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUucmlnaHQgPSBTdHJpbmcoY3NzUmlnaHQpICsgXCIlXCI7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICBcIkxvYWRpbmcgZ2FtZS4uLlwiICsgTWF0aC5mbG9vcihsb2FkaW5nUHJvZ3Jlc3MgKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSYWYoY2FsbGJhY2ssIHBhcmFtZXRlcikge1xyXG4gICAgICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrLmJpbmQodGhpcywgcGFyYW1ldGVyKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdldFBsYXllckFsaWFzRGlhbG9nIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgYXVkaW9QbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLkNPTkZJRyA9IENPTkZJRztcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gYXVkaW9QbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9QTEFZRVJfQUxJQVMuQ09OVEFJTkVSKTtcclxuICAgICAgICB0aGlzLnBsYXllckFsaWFzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfUExBWUVSX0FMSUFTLklOUFVUKTtcclxuICAgICAgICB0aGlzLnBsYXllckFsaWFzU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1BMQVlFUl9BTElBU1xyXG4gICAgICAgICAgICAuU1VCTUlUX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc1NraXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLkNPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfUExBWUVSX0FMSUFTXHJcbiAgICAgICAgICAgIC5TS0lQX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFBsYXllckFsaWFzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQWxpYXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWxpYXNTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQWxpYXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQWxpYXMgPSB0aGlzLnBsYXllckFsaWFzSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJBbGlhcyA9PT0gXCJcIiA/IHJlc29sdmUobnVsbCkgOiByZXNvbHZlKHBsYXllckFsaWFzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWxpYXNTa2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckFsaWFzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0dXBFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQWxpYXNTa2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmF1ZGlvUGxheWVyLnBsYXlTb3VuZChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbGlhc1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTY29yZVRhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKENPTkZJRywgZ2FtZU92ZXJTY3JlZW4sIGF1ZGlvUGxheWVyLCBhc3NldFJlc3Bvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5DT05GSUcgPSBDT05GSUc7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbiA9IGdhbWVPdmVyU2NyZWVuO1xyXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBhdWRpb1BsYXllcjtcclxuICAgICAgICB0aGlzLmFzc2V0UmVwb3NpdG9yeSA9IGFzc2V0UmVzcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy50YWJsZVJvd3NCeVNjb3JlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJkZS1ERVwiKTtcclxuICAgICAgICB0aGlzLnNjb3Jlc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NDT1JFX1RBQkxFLlRBQkxFKTtcclxuICAgICAgICB0aGlzLnNjb3Jlc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TQ09SRV9UQUJMRS5DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyU2NvcmVzVGFibGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TQ09SRV9UQUJMRVxyXG4gICAgICAgICAgICAuRklMVEVSX1NDT1JFU19TRUxFQ1RPUik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NDT1JFX1RBQkxFXHJcbiAgICAgICAgICAgIC5MT0FESU5HX1NDT1JFU19DT05UQUlORVIpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JMb2FkaW5nU2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5DT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NDT1JFX1RBQkxFXHJcbiAgICAgICAgICAgIC5FUlJPUl9TQ09SRVNfQ09OVEFJTkVSKTtcclxuICAgICAgICB0aGlzLnJldHJ5TG9hZFNjb3Jlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TQ09SRV9UQUJMRVxyXG4gICAgICAgICAgICAuUkVUUllfTE9BRF9TQ09SRVNfQlVUVE9OKTtcclxuICAgICAgICB0aGlzLnNldHVwRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgc2hvd1RhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1Njb3Jlc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5lcnJvckxvYWRpbmdTY29yZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuc2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH1cclxuICAgIHNob3dMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmVycm9yTG9hZGluZ1Njb3Jlc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH1cclxuICAgIHNob3dFcnJvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3Jlc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NvcmVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmVycm9yTG9hZGluZ1Njb3Jlc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTY29yZVRhYmxlKHNjb3JlTWFuYWdlckRBTykge1xyXG4gICAgICAgIHRoaXMuc2NvcmVzVGFibGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLnRhYmxlUm93c0J5U2NvcmUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3Qgc2NvcmVzID0gWy4uLnNjb3JlTWFuYWdlckRBTy5zY29yZXNdLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcclxuICAgICAgICBsZXQgc2Nyb2xsVG9Sb3cgPSBudWxsO1xyXG4gICAgICAgIHNjb3Jlcy5mb3JFYWNoKChzY29yZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLnNjb3Jlc1RhYmxlLmluc2VydFJvdygtMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5yQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG4gICAgICAgICAgICBjb25zdCBhbGlhc0NlbGwgPSByb3cuaW5zZXJ0Q2VsbCgxKTtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcmVDZWxsID0gcm93Lmluc2VydENlbGwoMik7XHJcbiAgICAgICAgICAgIGlmIChyb3cucm93SW5kZXggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBuckNlbGwuaW5uZXJUZXh0ID0gU3RyaW5nKHJvdy5yb3dJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgbnJDZWxsLnN0eWxlLnBhZGRpbmcgPSBcIjByZW1cIjtcclxuICAgICAgICAgICAgICAgIG5yQ2VsbC5zdHlsZS5kaXNwbGF5ID0gXCJyZXZlcnRcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lZGFsID0gbnJDZWxsLmFwcGVuZENoaWxkKG5ldyBJbWFnZSgpKTtcclxuICAgICAgICAgICAgICAgIG1lZGFsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5yb3dJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGFsLnNyYyA9IHRoaXMuYXNzZXRSZXBvc2l0b3J5LmdldEltYWdlKFwibWVkYWxGaXJzdFwiKS5zcmM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyb3cucm93SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZWRhbC5zcmMgPSB0aGlzLmFzc2V0UmVwb3NpdG9yeS5nZXRJbWFnZShcIm1lZGFsU2Vjb25kXCIpLnNyYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJvdy5yb3dJbmRleCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGFsLnNyYyA9IHRoaXMuYXNzZXRSZXBvc2l0b3J5LmdldEltYWdlKFwibWVkYWxUaGlyZFwiKS5zcmM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxpYXNDZWxsLmlubmVyVGV4dCA9IHNjb3JlLnBsYXllckFsaWFzO1xyXG4gICAgICAgICAgICBzY29yZUNlbGwuaW5uZXJUZXh0ID0gdGhpcy5zY29yZUZvcm1hdHRlci5mb3JtYXQoc2NvcmUuc2NvcmUpO1xyXG4gICAgICAgICAgICBpZiAoc2NvcmVNYW5hZ2VyREFPLmN1cnJlbnRQbGF5ZXJTY29yZUlkcy5pbmRleE9mKHNjb3JlLmlkKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmNvbG9yID0gXCIjZGUzOGM4XCI7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9Sb3cgPSBzY3JvbGxUb1JvdyA9PT0gbnVsbCA/IHJvdyA6IHNjcm9sbFRvUm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVSb3dzQnlTY29yZS5zZXQoc2NvcmUsIHJvdyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRG9lcyBub3Qgd29yayBoZXJlIGJlY2F1c2UgdGFibGUuc3R5bGUuZGlzcGxheSBpcyBub25lXHJcbiAgICAgICAgLy8gaWYgKHNjcm9sbFRvUm93ICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcclxuICAgICAgICAvLyAgICAgdGhpcy5zY29yZXNUYWJsZS5vZmZzZXRIZWlnaHQgKlxyXG4gICAgICAgIC8vICAgICAgIChzY3JvbGxUb1Jvdy5yb3dJbmRleCAvIHRoaXMuc2NvcmVzVGFibGUucm93cy5sZW5ndGgpXHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vICAgdGhpcy5zY29yZXNUYWJsZS5zY3JvbGxUbyh7XHJcbiAgICAgICAgLy8gICAgIHRvcDpcclxuICAgICAgICAvLyAgICAgICB0aGlzLnNjb3Jlc1RhYmxlLm9mZnNldEhlaWdodCAqXHJcbiAgICAgICAgLy8gICAgICAgKHNjcm9sbFRvUm93LnJvd0luZGV4IC8gdGhpcy5zY29yZXNUYWJsZS5yb3dzLmxlbmd0aCksXHJcbiAgICAgICAgLy8gICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgLy8gICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgZmlsdGVyU2NvcmVUYWJsZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IERBWVNfUEVSX1dFRUsgPSA3O1xyXG4gICAgICAgIGNvbnN0IERBWVNfUEVSX01PTlRIID0gMzA7XHJcbiAgICAgICAgbGV0IG1heGltYWxEYXlEaWZmZXJlbmNlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJNT05USFwiKSB7XHJcbiAgICAgICAgICAgIG1heGltYWxEYXlEaWZmZXJlbmNlID0gREFZU19QRVJfTU9OVEg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSBcIldFRUtcIikge1xyXG4gICAgICAgICAgICBtYXhpbWFsRGF5RGlmZmVyZW5jZSA9IERBWVNfUEVSX1dFRUs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtYXhpbWFsRGF5RGlmZmVyZW5jZSA9IEluZmluaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhYmxlUm93c0J5U2NvcmUuZm9yRWFjaCgocm93LCBzY29yZSwgbWFwKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheURpZmZlcmVuY2UgPSBNYXRoLnJvdW5kKE1hdGguYWJzKERhdGUubm93KCkgLSBzY29yZS5kYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICBpZiAoZGF5RGlmZmVyZW5jZSA+IG1heGltYWxEYXlEaWZmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBcInRhYmxlLXJvd1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXRyeUxvYWRTY29yZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuZ2FtZU92ZXJTY3JlZW4udHJpZ2dlclNjb3JlVGFibGVVcGRhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5yZXRyeUxvYWRTY29yZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwiYnV0dG9uXCIpKTtcclxuICAgICAgICB0aGlzLmZpbHRlclNjb3Jlc1RhYmxlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJTY29yZVRhYmxlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNlbGVjdFBsYXllckRpYWxvZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihDT05GSUcsIGF1ZGlvUGxheWVyLCBhc3NldFJlc3Bvcml0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5DQU5WQVNfV0lEVEggPSAxMzA7XHJcbiAgICAgICAgdGhpcy5DQU5WQVNfSEVJR0hUID0gMTgwO1xyXG4gICAgICAgIHRoaXMuQ09ORklHID0gQ09ORklHO1xyXG4gICAgICAgIHRoaXMuYXNzZXRSZXBvc2l0b3J5ID0gYXNzZXRSZXNwb3JpdG9yeTtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gYXVkaW9QbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TRUxFQ1RfUExBWUVSLkNPTlRBSU5FUik7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0VMRUNUX1BMQVlFUi5DQVJPVVNFTCk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbE5hdkxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NFTEVDVF9QTEFZRVJcclxuICAgICAgICAgICAgLkNBUk9VU0VMX05BVl9MRUZUKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsTmF2UmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT05GSUcuSFRNTF9FTEVNRU5UX0lEUy5HQU1FX09WRVJfU0NSRUVOLkdST1VQX1NFTEVDVF9QTEFZRVJcclxuICAgICAgICAgICAgLkNBUk9VU0VMX05BVl9SSUdIVCk7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0VMRUNUX1BMQVlFUi5OQU1FX0RJU1BMQVkpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09ORklHLkhUTUxfRUxFTUVOVF9JRFMuR0FNRV9PVkVSX1NDUkVFTi5HUk9VUF9TRUxFQ1RfUExBWUVSLkJVVFRPTl9TVUJNSVQpO1xyXG4gICAgICAgIHRoaXMuZXNjYXBlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTkZJRy5IVE1MX0VMRU1FTlRfSURTLkdBTUVfT1ZFUl9TQ1JFRU4uR1JPVVBfU0VMRUNUX1BMQVlFUi5FU0NfSUNPTik7XHJcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIHNldFBsYXllckluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLkNPTkZJRy5QTEFZRVJfVEVNUExBVEVTLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwoaW5kZXggLSB0aGlzLmN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgICBnZXRQbGF5ZXJJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50SW5kZXg7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNob3coKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXNjYXBlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBzZXR1cENhcm91c2VsKCkge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLkNPTkZJRy5QTEFZRVJfVEVNUExBVEVTLmZvckVhY2goKGNoYXJhY2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5DQU5WQVNfV0lEVEg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLkNBTlZBU19IRUlHSFQ7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuQ0FOVkFTX1dJRFRIICsgXCJweFwiO1xyXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5DQU5WQVNfSEVJR0hUICsgXCJweFwiO1xyXG4gICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChcIndnLXNpbS1zZWxlY3QtcGxheWVyLWRpYWxvZy1jYXJvdXNlbC1pdGVtXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IHRoaXMuYXNzZXRSZXBvc2l0b3J5LmdldEltYWdlKGNoYXJhY2h0ZXIuaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXNSYXRpbyA9IHRoaXMuQ0FOVkFTX1dJRFRIIC8gdGhpcy5DQU5WQVNfSEVJR0hUO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGhJc0RvbWluYW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbnZhc1JhdGlvID4gY2hhcmFjaHRlci5mcmFtZVdpZHRoIC8gY2hhcmFjaHRlci5kaW1lbnNpb25zLmgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoSXNEb21pbmFudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRXaWR0aCA9IHdpZHRoSXNEb21pbmFudFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLkNBTlZBU19XSURUSFxyXG4gICAgICAgICAgICAgICAgOiBjaGFyYWNodGVyLmZyYW1lV2lkdGggKlxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLkNBTlZBU19IRUlHSFQgLyBjaGFyYWNodGVyLmRpbWVuc2lvbnMuaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRIZWlnaHQgPSAhd2lkdGhJc0RvbWluYW50XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuQ0FOVkFTX0hFSUdIVFxyXG4gICAgICAgICAgICAgICAgOiBjaGFyYWNodGVyLmRpbWVuc2lvbnMuaCAqICh0aGlzLkNBTlZBU19XSURUSCAvIGNoYXJhY2h0ZXIuZnJhbWVXaWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gd2lkdGhJc0RvbWluYW50ID8gMCA6ICh0aGlzLkNBTlZBU19XSURUSCAtIGRXaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9ICF3aWR0aElzRG9taW5hbnQgPyAwIDogKHRoaXMuQ0FOVkFTX0hFSUdIVCAtIGRIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCIjNDQ0NDQ0XCI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSAzO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjaGFyYWNodGVyLmZyYW1lV2lkdGgsIGNoYXJhY2h0ZXIuZGltZW5zaW9ucy5oLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzY3JvbGwoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLm1vZCh0aGlzLmN1cnJlbnRJbmRleCArIGRpcmVjdGlvbiwgdGhpcy5DT05GSUcuUExBWUVSX1RFTVBMQVRFUy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHhQb3NpdGlvbiA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0V2lkdGggKiB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiB4UG9zaXRpb24sXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU2Nyb2xsRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBNYXRoLnJvdW5kKHRoaXMuY2Fyb3VzZWwuc2Nyb2xsTGVmdCAvIHRoaXMuY2Fyb3VzZWwub2Zmc2V0V2lkdGgpO1xyXG4gICAgICAgIHRoaXMubmFtZURpc3BsYXkuaW5uZXJUZXh0ID1cclxuICAgICAgICAgICAgdGhpcy5DT05GSUcuUExBWUVSX1RFTVBMQVRFU1t0aGlzLmN1cnJlbnRJbmRleF0uZGlzcGxheU5hbWU7XHJcbiAgICB9XHJcbiAgICBtb2QobnVtYmVyLCBtb2R1bG9zKSB7XHJcbiAgICAgICAgcmV0dXJuICgobnVtYmVyICUgbW9kdWxvcykgKyBtb2R1bG9zKSAlIG1vZHVsb3M7XHJcbiAgICB9XHJcbiAgICBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsRXZlbnQoKSk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbE5hdkxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2Nyb2xsKC0xKSk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbE5hdlJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNjcm9sbCgxKSk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbE5hdkxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwiYnV0dG9uXCIpKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsTmF2UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYXVkaW9QbGF5ZXIucGxheVNvdW5kKFwiYnV0dG9uXCIpKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgICAgIHRoaXMuZXNjYXBlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hdWRpb1BsYXllci5wbGF5U291bmQoXCJidXR0b25cIikpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgV2dTaW11bGF0b3JNYWluIH0gZnJvbSBcIi4vTWFpblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICBjb25zdCBtYWluID0gbmV3IFdnU2ltdWxhdG9yTWFpbigpO1xyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9