// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"index.js":[function(require,module,exports) {
"use strict";

(function () {
  var score = document.querySelector('.score'),
      lives = document.querySelector('.lives'),
      startGameBtn = document.querySelector('.start-game-btn'),
      startGameDisplay = document.querySelector('.start-game-display'),
      questionAndAnswerDisplay = document.querySelector('.question-answer-display'),
      scoreWrapper = document.querySelector('.score-wrapper'),
      livesWrapper = document.querySelector('.lives-wrapper'),
      volumeControl = document.querySelector('.volume-control'),
      questionCount = document.querySelector('.question-count'),
      whoIsThis = document.querySelector('.who-is-this'),
      playGame = document.querySelector('.play-game'),
      btnGroup = playGame.querySelector('.btn-group'),
      gameOverDisplay = document.querySelector('.game-over'),
      container = document.querySelector('.container'),
      audio = document.createElement('audio'),
      successSFX = document.createElement('audio'),
      failureSFX = document.createElement('audio'),
      gameOverSFX = document.createElement('audio'),
      img = document.createElement('img');
  var scoreCount = 0,
      questionCountCounter = 1,
      livesCount = 3,
      currentTrack;
  successSFX.src = './audio/sfx/success/gregg-omnisphere5.mp3';
  failureSFX.src = './audio/sfx/failure/2_DANCE_FX_DANCE_1_003.mp3';
  gameOverSFX.src = './audio/sfx/game_over/Cutting Power.mp3';
  score.textContent = scoreCount;
  questionCount.textContent = "".concat(questionCountCounter, "/10");
  lives.textContent = livesCount;
  volumeControl.addEventListener('click', function () {
    audio.muted ? audio.muted = false : audio.muted = true;
    successSFX.muted ? successSFX.muted = false : successSFX.muted = true;
    failureSFX.muted ? failureSFX.muted = false : failureSFX.muted = true;
    var iconElement = this.querySelector('i');
    iconElement.classList.toggle('fa-volume-up');
    iconElement.classList.toggle('fa-volume-off');
  });

  var guitaristNames = tracks.map(function (track) {
    return track.name;
  }),
      setupButtons = function setupButtons() {
    return randomBtnAppend(createCorrectButton(currentTrack), createWrongButton());
  },
      getRandomTrack = function getRandomTrack() {
    return tracks[Math.floor(Math.random() * tracks.length)];
  },
      getRandomName = function getRandomName(arr) {
    return arr[Math.floor(Math.random() * guitaristNames.length)];
  };

  function init() {
    gameOverSFX.muted = true;
    startGameDisplay.style.display = 'none';
    whoIsThis.style.display = playGame.style.display = container.style.display = 'block';
    gameOverDisplay.textContent = '';
    scoreCount = 0;
    livesCount = 3;
    lives.textContent = livesCount;
    score.textContent = scoreCount;
    questionCountCounter = 1;
    questionCount.textContent = "".concat(questionCountCounter, "/10");
    removeButtons();
    removeClassNames();
    setRandomTrack();
    setupButtons();
    removeNameText();
  }

  function removeButtons() {
    removeClassNames();
    Array.from(btnGroup.children).forEach(function (child) {
      child.tagName === 'BUTTON' ? btnGroup.removeChild(child) : null;
    });
  }

  function disableButtons() {
    Array.from(btnGroup.children).forEach(function (child) {
      child.tagName === 'BUTTON' ? child.style.display = 'none' : null;
    });
  }

  function setRandomTrack() {
    currentTrack = getRandomTrack();
    audio.src = "./audio/cuts/".concat(currentTrack.fileName);
    audio.play();
    audio.loop = true;
  }

  function displayImage() {
    img.style.display = 'block';
    img.src = "./images/optimized/".concat(currentTrack.image);
    questionAndAnswerDisplay.appendChild(img);
  }

  function displayName() {
    var h3 = document.createElement('h3');
    h3.classList.add('name-display');
    h3.textContent = currentTrack.name;
    questionAndAnswerDisplay.appendChild(h3);
  }

  function removeClassNames() {
    scoreWrapper.className = '';
    livesWrapper.className = '';
  }

  function revealCorrectAnswer() {
    audio.pause();
    displayImage();
    displayName();
  }

  function setupNextQuestion() {
    revealCorrectAnswer();
    setTimeout(function () {
      if (questionCountCounter === 10) {
        removeNameText();
        setGameOver();
      } else {
        questionCount.textContent = "".concat(questionCountCounter += 1, "/10");
        whoIsThis.style.display = 'block';
        img.style.display = 'none';
        removeNameText();
        setRandomTrack();
        removeButtons();
        setupButtons();
      }
    }, 2000);
  }

  function removeNameText() {
    Array.from(questionAndAnswerDisplay.children).forEach(function (child) {
      child.tagName === 'H3' ? questionAndAnswerDisplay.removeChild(child) : null;
    });
  }

  function setGameOver() {
    revealCorrectAnswer();
    setTimeout(function () {
      gameOverSFX.muted = false;
      gameOverSFX.play();
      img.style.display = playGame.style.display = 'none';
      gameOverDisplay.innerHTML = "<h1>Game Over<h1>\n                                        <h2>Final Score: ".concat(scoreCount, "<h2>");
      gameOverDisplay.classList.add('game-over-display');
      createPlayAgainButton();
    }, 2000);
  }

  function startGame() {
    img.style.display = playGame.style.display = 'none';
    startGameBtn.addEventListener('click', function () {
      return init();
    });
  }

  function createPlayAgainButton() {
    var button = document.createElement('button');
    button.innerHTML = "\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                <span>Play Again?</span>";
    button.classList.add('play-again-btn');
    gameOverDisplay.appendChild(button);
    button.addEventListener('click', function () {
      return init();
    });
  }

  function createCorrectButton(currentTrack) {
    var button = document.createElement('button');
    button.textContent = "".concat(currentTrack.name);
    button.addEventListener('click', function () {
      successSFX.play();
      disableButtons();
      img.src = '';
      whoIsThis.style.display = 'none';
      scoreWrapper.classList.add('success');
      score.textContent = scoreCount += 100;
      ;
      setupNextQuestion();
    }, {
      once: true
    });
    return button;
  }

  function createWrongButton() {
    var button = document.createElement('button');

    while (!button.textContent) {
      var randomName = getRandomName(guitaristNames);

      if (randomName !== currentTrack.name) {
        button.textContent = randomName;
      }
    }

    button.addEventListener('click', function () {
      failureSFX.play();
      disableButtons();
      img.src = '';
      whoIsThis.style.display = 'none';
      livesWrapper.classList.add('failure');
      livesCount -= 1;

      if (livesCount === 0) {
        lives.textContent = 0;
        setGameOver();
      } else {
        lives.textContent = livesCount;
        setupNextQuestion();
      }
    }, {
      once: true
    });
    return button;
  }

  function randomBtnAppend() {
    for (var _len = arguments.length, buttons = new Array(_len), _key = 0; _key < _len; _key++) {
      buttons[_key] = arguments[_key];
    }

    var shuffledBtns = _.shuffle([].concat(buttons));

    shuffledBtns.forEach(function (btn) {
      return btnGroup.appendChild(btn);
    });
  }

  startGame();
})();
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65201" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/jazz-guitar-game.e31bb0bc.map