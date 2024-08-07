import { DrawableObjectTemplate } from "./model/world/drawable/DrawableObjectTemplate";
import { PlayerTemplate } from "./model/world/drawable/PlayerTemplate";

export class Config {
  public readonly SETTINGS = {
    debugIsEnabled: false,
    isDevMode: false,
    userScoreServer: true,
    maxCanvasWidth: 800,
    maxCanvasHeight: 500,
  };
  public readonly API_PATHS = {
    HOST: "http://192.168.0.38:3000",
    SCORES: "/api/wgsimulator/score",
  };
  public readonly HTML_ELEMENT_IDS = {
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
  public readonly EVENT_KEYS = {
    GAME_READY: "game-ready",
    GAME_OVER: "game-over",
    NEW_LOCAL_HIGHSCORE: "new-local-highscore",
  };
  public readonly KEY_CODES = {
    jump: 32,
  };
  public readonly GAME_PLAY = {
    pointsPerSecond: 20,
    pointsPerCollectable: 50,
  };
  public readonly IMAGES = [
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
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/design_game_over_bg.svg",
    },
    {
      id: "iconPlay",
      imagePath: "http://alex-portfolio.local/wp-content/uploads/play-fill.svg",
    },
    {
      id: "iconPause",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/pause-fill.svg",
    },
    {
      id: "iconMute",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/volume-mute-fill.svg",
    },
    {
      id: "iconSound",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/volume-up-fill.svg",
    },
    {
      id: "medalFirst",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/medal-first.svg",
    },
    {
      id: "medalSecond",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/medal-second.svg",
    },
    {
      id: "medalThird",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/medal-third.svg",
    },
    {
      id: "touch-indicator",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/touch-indicator.gif",
    },
    {
      id: "spacebar-indicator",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/spacebar-indicator.gif",
    },
  ];
  public readonly AUDIOS = [
    {
      id: "main-theme",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/main-theme.mp3",
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
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/collectable.mp3",
    },
    {
      id: "button",
      imagePath: "http://alex-portfolio.local/wp-content/uploads/button.mp3",
    },
    {
      id: "new-ingame-highscore",
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/new-ingame-highscore2.mp3",
    },
  ];
  public readonly BACKGROUND_TEMPLATES: DrawableObjectTemplate[] = [
    {
      id: "bckgrnd_1",
      dimensions: { w: 5646, h: 400 },
      imagePath: "http://alex-portfolio.local/wp-content/uploads/bckgrnd_1.jpg",
    },
  ];
  public readonly COLLECTABLES_TEMPLATES: DrawableObjectTemplate[] = [
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
  public readonly OBSTACLES_GRND_TEMPLATES: DrawableObjectTemplate[] = [
    {
      id: "obst_dishes",
      dimensions: { w: 277, h: 162 },
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/obst_dishes.png",
      hitBoxes: [{ xOff: 77, yOff: 32, w: 180, h: 130 }],
    },
    {
      id: "obst_laundrey",
      dimensions: { w: 305, h: 247 },
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/obst_laundrey.png",
      hitBoxes: [{ xOff: 10, yOff: 70, w: 295, h: 177 }],
    },
    {
      id: "obst_pigeon_ground_1",
      dimensions: { w: 217, h: 176 },
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/obst_pigeon_ground_1.png",
      hitBoxes: [
        { xOff: 17, yOff: 16, w: 90, h: 160 },
        { xOff: 17, yOff: 90, w: 200, h: 86 },
      ],
    },
    {
      id: "obst_pigeon_ground_2",
      dimensions: { w: 198, h: 176 },
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/obst_pigeon_ground_2.png",
      hitBoxes: [
        { xOff: 0, yOff: 0, w: 75, h: 176 },
        { xOff: 0, yOff: 120, w: 190, h: 56 },
      ],
    },
    {
      id: "obst_trash_1",
      dimensions: { w: 337, h: 136 },
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/obst_trash_1.png",
      hitBoxes: [{ xOff: 0, yOff: 40, w: 337, h: 96 }],
    },
    {
      id: "obst_trash_2",
      dimensions: { w: 304, h: 238 },
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/obst_trash_2.png",
      hitBoxes: [{ xOff: 0, yOff: 138, w: 304, h: 100 }],
    },
  ];
  public readonly PLAYER_TEMPLATES: PlayerTemplate[] = [
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
      imagePath:
        "http://alex-portfolio.local/wp-content/uploads/ch_praline.png",
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
