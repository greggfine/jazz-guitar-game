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
})({"tracks.json":[function(require,module,exports) {
module.exports = tracks = [{
  "name": "Al Di Meola",
  "songTitle": "Nena",
  "fileName": "al-di-meola_nena.mp3",
  "image": "al-di-meola.jpg",
  "info": "Unknown"
}, {
  "name": "Attila Zoller",
  "songTitle": "Wild Wild West",
  "fileName": "attila-zoller_wild-wild-wes.mp3",
  "image": "attila-zoller.jpg",
  "info": "Unknown"
}, {
  "name": "Barney Kessel",
  "songTitle": "Here's That Rainy Day",
  "fileName": "barney-kessel_heres-that-rainy-day.mp3",
  "image": "barney-kessel.jpg",
  "info": "Unknown"
}, {
  "name": "Barney Kessel",
  "songTitle": "Autumn Leaves",
  "fileName": "barney-kessel_autumn-leaves.mp3",
  "image": "barney-kessel.jpg",
  "info": "https://www.youtube.com/watch?v=m-lEynTDX4s"
}, {
  "name": "Barney Kessel",
  "songTitle": "I'll Remember April",
  "fileName": "barney-kessel_i'll-remember-april.mp3",
  "image": "barney-kessel.jpg",
  "info": "https://www.youtube.com/watch?v=UjDq4UzMeG8"
}, {
  "name": "Barney Kessel",
  "songTitle": "Let's Cook",
  "fileName": "barney-kessel_let's-cook.mp3",
  "image": "barney-kessel.jpg",
  "info": "https://www.youtube.com/watch?v=lSiBACBzvLw"
}, {
  "name": "Barry Galbraith",
  "songTitle": "He Was Too Good To Me",
  "fileName": "barry-galbraith_he-was-too-good-to-me.mp3",
  "image": "barry-galbraith.jpg",
  "info": "https://www.youtube.com/watch?v=0lrakx9Cezs"
}, {
  "name": "Billy Bauer",
  "songTitle": "It's a Blue World",
  "fileName": "bill-bauer_it's-a-blue-world.mp3",
  "image": "billy-bauer.jpeg",
  "info": "https://www.youtube.com/watch?v=qDLPDd8ZhQA"
}, {
  "name": "Bill Frisell",
  "songTitle": "I Got Rhythm",
  "fileName": "bill-frisell_i-got-rhythm.mp3",
  "image": "bill-frisell.jpg",
  "info": "Unknown"
}, {
  "name": "Bireli Lagrene",
  "songTitle": "Donna Lee",
  "fileName": "bireli-lagrene_donna-lee.mp3",
  "image": "bireli-lagrene.jpg",
  "info": "https://www.youtube.com/watch?v=5bsPUn0D7ug"
}, {
  "name": "Bucky Pizzarelli",
  "songTitle": "In A Mellowtone",
  "fileName": "bucky-pizzarelli_in-a-mellowtone.mp3",
  "image": "bucky-pizzarelli.jpg",
  "info": "Unknown"
}, {
  "name": "Charlie Byrd",
  "songTitle": "You Stepped Out Of A Dream",
  "fileName": "charlie-byrd_you-stepped-out-of-a-dream.mp3",
  "image": "charlie-byrd.jpg",
  "info": "Unknown"
}, {
  "name": "Charlie Christian",
  "songTitle": "Swing To Bop",
  "fileName": "charlie-christian_swing-to-bop.mp3",
  "image": "charlie-christian.jpg",
  "info": "1941"
}, {
  "name": "Charlie Christian",
  "songTitle": "Seven Come Eleven",
  "fileName": "charlie-christian_seven-come-eleven.mp3",
  "image": "charlie-christian.jpg",
  "info": "https://www.youtube.com/watch?v=mOnhcdAMInA"
}, {
  "name": "Charlie Christian",
  "songTitle": "Stompin' At The Savoy",
  "fileName": "charlie-christian_stompin-at-the-savoy.mp3",
  "image": "charlie-christian.jpg",
  "info": "https://www.youtube.com/watch?v=x52x5hjpD5k"
}, {
  "name": "Charlie Christian",
  "songTitle": "I've Found A New Baby",
  "fileName": "charlie-christian_i've-found-a-new-baby.mp3",
  "image": "charlie-christian.jpg",
  "info": "https://www.youtube.com/watch?v=StIk6pjRt78"
}, {
  "name": "Chuck Loeb",
  "songTitle": "Like Someone In Love",
  "fileName": "chuck-loeb_like-someone-in-love.mp3",
  "image": "chuck-loeb.jpg",
  "info": "https://www.youtube.com/watch?v=ZNM-LN91rOc"
}, {
  "name": "Chuck Wayne",
  "songTitle": "Tasty Pudding",
  "fileName": "chuck-wayne_tasty-pudding.mp3",
  "image": "chuck-wayne.jpg",
  "info": "https://www.youtube.com/watch?v=M0B9BGs6B-s"
}, {
  "name": "Django Reinhardt",
  "songTitle": "Minor Swing",
  "fileName": "django-reinhardt_minor-swing.mp3",
  "image": "django-reinhardt.jpg",
  "info": "Unknown"
}, {
  "name": "Django Reinhardt",
  "songTitle": "Nuages",
  "fileName": "django-reinhardt_nuages.mp3",
  "image": "django-reinhardt.jpg",
  "info": "https://www.youtube.com/watch?v=DY0FF4iR9Cw"
}, {
  "name": "Django Reinhardt",
  "songTitle": "I'll See You In My Dreams",
  "fileName": "django-reinhardt_ill-see-you-in-my-dreams.mp3",
  "image": "django-reinhardt.jpg",
  "info": "https://www.youtube.com/watch?v=hNRHHRjep3E"
}, {
  "name": "Django Reinhardt",
  "songTitle": "Honeysuckle Rose",
  "fileName": "django-reinhardt_honeysuckle-rose.mp3",
  "image": "django-reinhardt.jpg",
  "info": "https://www.youtube.com/watch?v=QATIHWbN-sM"
}, {
  "name": "Django Reinhardt",
  "songTitle": "La Mer",
  "fileName": "django-reinhardt_la-mer.mp3",
  "image": "django-reinhardt.jpg",
  "info": "https://www.youtube.com/watch?v=tgNQ4FR6Me8"
}, {
  "name": "Earl Klugh",
  "songTitle": "Wishful Thinking",
  "fileName": "earl-klugh_wishful-thinking.mp3",
  "image": "earl-klugh.jpeg",
  "info": "https://www.youtube.com/watch?v=ocIaFT0hH3c"
}, {
  "name": "Ed Bickert",
  "songTitle": "You're In Love With Someone",
  "fileName": "ed-bickert_you're-in-love-with-someone.mp3",
  "image": "ed-bickert.jpg",
  "info": "https://www.youtube.com/watch?v=zNjxvZ84h6A"
}, {
  "name": "Eddie Lang",
  "songTitle": "Perfect",
  "fileName": "eddie-lang_perfect.mp3",
  "image": "eddie-lang.jpg",
  "info": "Unknown"
}, {
  "name": "Emily Remler",
  "songTitle": "Blue For Herb",
  "fileName": "emily-remler_blues-for-herb.mp3",
  "image": "emily-remler.jpg",
  "info": "Unknown"
}, {
  "name": "Emily Remler",
  "songTitle": "Strollin'",
  "fileName": "emily-remler_strollin.mp3",
  "image": "emily-remler.jpg",
  "info": "https://www.youtube.com/watch?v=Ef7uqh_IJ5o"
}, {
  "name": "Emily Remler",
  "songTitle": "Look To The Sky",
  "fileName": "emily-remler_look-to-the-sky.mp3",
  "image": "emily-remler.jpg",
  "info": "https://www.youtube.com/watch?v=Ef7uqh_IJ5o"
}, {
  "name": "Emily Remler",
  "songTitle": "Movin' Along",
  "fileName": "emily-remler_movin-along.mp3",
  "image": "emily-remler.jpg",
  "info": "https://www.youtube.com/watch?v=Ef7uqh_IJ5o"
}, {
  "name": "Eric Gale",
  "songTitle": "Dindi",
  "fileName": "eric-gale_dindi.mp3",
  "image": "eric-gale.jpg",
  "info": "https://www.youtube.com/watch?v=tnd4722ZHn4"
}, {
  "name": "Frank Gambale",
  "songTitle": "Magritte",
  "fileName": "frank-gamble_magritte.mp3",
  "image": "frank-gambale.jpg",
  "info": "https://www.youtube.com/watch?v=Kmp6gm7PfL4"
}, {
  "name": "Gabor Szabo",
  "songTitle": "Breezin'",
  "fileName": "gabor-szabo_breezin.mp3",
  "image": "gabor-szabo.jpg",
  "info": "https://www.youtube.com/watch?v=ibhh_z6pG6c"
}, {
  "name": "Gene Bertoncini",
  "songTitle": "Someone To Light Up My Life",
  "fileName": "gene-bertoncini_someone-to-light-up-my-life.mp3",
  "image": "gene-bertoncini.jpg",
  "info": "https://www.youtube.com/watch?v=cBYcxCMKlqk"
}, {
  "name": "George Barnes",
  "songTitle": "Have You Met Miss Jones?",
  "fileName": "george-barnes_have-you-met-miss-jones.mp3",
  "image": "george-barnes.jpg",
  "info": "https://www.youtube.com/watch?v=9yW5F51XTjg"
}, {
  "name": "George Benson",
  "songTitle": "Love For Sale",
  "fileName": "george-benson_love-for-sale.mp3",
  "image": "george-benson.jpg",
  "info": "https://www.youtube.com/watch?v=rPkr5QOwqgg"
}, {
  "name": "George Van Eps",
  "songTitle": "Spanish Eyes",
  "fileName": "george-van-eps_spanish-eyes.mp3",
  "image": "george-van-eps.jpg",
  "info": "https://www.youtube.com/watch?v=jEhYOtkT4xc"
}, {
  "name": "Grant Green",
  "songTitle": "Alone Together",
  "fileName": "grant-green_alone-together.mp3",
  "image": "grant-green.jpg",
  "info": "Green Stree(1961)"
}, {
  "name": "Grant Green",
  "songTitle": "Miss Ann's Tempo",
  "fileName": "grant-green_miss-ann's-tempo.mp3",
  "image": "grant-green.jpg",
  "info": "https://www.youtube.com/watch?v=2aiw_MDVgtQ"
}, {
  "name": "Grant Green",
  "songTitle": "I Wish You Love",
  "fileName": "grant-green_i-wish-you-love.mp3",
  "image": "grant-green.jpg",
  "info": "https://www.youtube.com/watch?v=08balpAm9Ak"
}, {
  "name": "Grant Green",
  "songTitle": "All The Things Your Are",
  "fileName": "grant-green_all-the-things-you-are.mp3",
  "image": "grant-green.jpg",
  "info": "https://www.youtube.com/watch?v=t6KR6WJ_zBU"
}, {
  "name": "Hank Garland",
  "songTitle": "Cherokee",
  "fileName": "hank-garland_cherokee.mp3",
  "image": "hank-garland.jpg",
  "info": "https://www.youtube.com/watch?v=JroZoAtJn9I"
}, {
  "name": "Herb Ellis",
  "songTitle": "Sweetheart Blues",
  "fileName": "herb-ellis_sweetheart-blues.mp3",
  "image": "herb-ellis.jpg",
  "info": "Ellis in Wonderland"
}, {
  "name": "Herb Ellis",
  "songTitle": "Danny Boy",
  "fileName": "herb-ellis_danny-boy.mp3",
  "image": "herb-ellis.jpg",
  "info": "https://www.youtube.com/watch?v=KNgWLN-0Ybo"
}, {
  "name": "Herb Ellis",
  "songTitle": "Inka-Dinka-Doo",
  "fileName": "herb-ellis_inka-dinka-doo.mp3",
  "image": "herb-ellis.jpg",
  "info": "https://www.youtube.com/watch?v=rCpGmtdxT3A"
}, {
  "name": "Herb Ellis",
  "songTitle": "They Didn't Believe Me",
  "fileName": "heb-ellis_they-didn't-believe-me.mp3",
  "image": "herb-ellis.jpg",
  "info": "https://www.youtube.com/watch?v=rCpGmtdxT3A"
}, {
  "name": "Howard Alden",
  "songTitle": "Tune For a Lyric",
  "fileName": "howard-alden_tune-for-a-lyric.mp3",
  "image": "howard-alden.jpg",
  "info": "https://www.youtube.com/watch?v=AFr5vBfCMSA"
}, {
  "name": "Howard Roberts",
  "songTitle": "Everything Happens To Me",
  "fileName": "howard-roberts_everything-happens-to-me.mp3",
  "image": "howard-roberts.jpg",
  "info": "Unknown"
}, {
  "name": "Jack Wilkins",
  "songTitle": "Invitation",
  "fileName": "jack-wilkins_invitation.mp3",
  "image": "jack-wilkins.jpg",
  "info": "https://www.youtube.com/watch?v=_TwCRbYMyDk"
}, {
  "name": "Jim Hall",
  "songTitle": "My Kinda Love",
  "fileName": "jim-hall_my-kinda-love.mp3",
  "image": "jim-hall.jpg",
  "info": "Unknown"
}, {
  "name": "Jim Hall",
  "songTitle": "Bag's Groove",
  "fileName": "jim-hall_bag's-groove.mp3",
  "image": "jim-hall.jpg",
  "info": "https://www.youtube.com/watch?v=xIqNILwBpLw"
}, {
  "name": "Jim Hall",
  "songTitle": "My Funny Valentine",
  "fileName": "jim-hall_my-funny-valentine.mp3",
  "image": "jim-hall.jpg",
  "info": "https://www.youtube.com/watch?v=QJ3kiFBrKpQ"
}, {
  "name": "Jim Hall",
  "songTitle": "St. Thomas",
  "fileName": "jim-hall_st-thomas.mp3",
  "image": "jim-hall.jpg",
  "info": "https://www.youtube.com/watch?v=ia9nuwiljGg"
}, {
  "name": "Jimmy Raney",
  "songTitle": "Autumn Leaves",
  "fileName": "jimmy-raney_autumn-leaves.mp3",
  "image": "jimmy-raney.jpg",
  "info": "Unknown"
}, {
  "name": "Jimmy Raney",
  "songTitle": "Long Ago And Far Away",
  "fileName": "jimmy-raney_long-ago-and-far-away.mp3",
  "image": "jimmy-raney.jpg",
  "info": "https://www.youtube.com/watch?v=MrJh5XjXxrs"
}, {
  "name": "Jimmy Raney",
  "songTitle": "But Beautiful",
  "fileName": "jimmy-raney_but-beautiful.mp3",
  "image": "jimmy-raney.jpg",
  "info": "https://www.youtube.com/watch?v=MrJh5XjXxrs"
}, {
  "name": "Jimmy Raney",
  "songTitle": "Indian Summer",
  "fileName": "jimmy-raney_indian-summer.mp3",
  "image": "jimmy-raney.jpg",
  "info": "https://www.youtube.com/watch?v=MrJh5XjXxrs"
}, {
  "name": "Joe Diorio",
  "songTitle": "Solar",
  "fileName": "joe-diorio_solar.mp3",
  "image": "joe-diorio.jpeg",
  "info": "https://www.youtube.com/watch?v=tB_k_Ma5OdA"
}, {
  "name": "Joe Pass",
  "songTitle": "Ain't Misbehavin'",
  "fileName": "joe-pass_aint-misbehavin.mp3",
  "image": "joe-pass.jpg",
  "info": "Joe Pass Solo on the Oscar Peterson and Friends BBC Prog"
}, {
  "name": "Joe Pass",
  "songTitle": "There Will Never Be Another You",
  "fileName": "joe-pass_there-will-never-be-another-you.mp3",
  "image": "joe-pass.jpg",
  "info": "https://www.youtube.com/watch?v=y_kmTizHeZk"
}, {
  "name": "Joe Pass",
  "songTitle": "Summertime",
  "fileName": "joe-pass_summertime.mp3",
  "image": "joe-pass.jpg",
  "info": "https://www.youtube.com/watch?v=t4Iw5cgL53E"
}, {
  "name": "Joe Pass",
  "songTitle": "Stella By Starlight",
  "fileName": "joe-pass_stella-by-starlight.mp3",
  "image": "joe-pass.jpg",
  "info": "https://www.youtube.com/watch?v=jN0oEWuc_Ng"
}, {
  "name": "Joe Pass",
  "songTitle": "Joe's Blues",
  "fileName": "joe-pass_joes-blues.mp3",
  "image": "joe-pass.jpg",
  "info": "https://www.youtube.com/watch?v=hpljiP_7ubw"
}, {
  "name": "Joe Pass",
  "songTitle": "Giant Steps",
  "fileName": "joe-pass_giant-steps.mp3",
  "image": "joe-pass.jpg",
  "info": "https://www.youtube.com/watch?v=rg4sR5JXM8I"
}, {
  "name": "Joe Pass",
  "songTitle": "My Funny Valentine",
  "fileName": "joe-pass_my-funny-valentine.mp3",
  "image": "joe-pass.jpg",
  "info": "https://www.youtube.com/watch?v=2FrNbEnNTpY"
}, {
  "name": "John Abercrombie",
  "songTitle": "I Wish I Knew",
  "fileName": "john-abercrombie_i-wish-i-knew.mp3",
  "image": "john-abercrombie.jpg",
  "info": "https://www.youtube.com/watch?v=Le-jrgn8MMI"
}, {
  "name": "John McLaughlin",
  "songTitle": "My Favorite Things",
  "fileName": "john-mclaughlin_my-favorite-things.mp3",
  "image": "john-mclaughlin.jpg",
  "info": "https://www.youtube.com/watch?v=tiBWrLaBzzQ"
}, {
  "name": "John Pisano",
  "songTitle": "Yesterdays",
  "fileName": "john-pisano_yesterdays.mp3",
  "image": "john-pisano.jpg",
  "info": "https://www.youtube.com/watch?v=TqljWSNc_OA"
}, {
  "name": "John Scofield",
  "songTitle": "All The Things You Are",
  "fileName": "john-scofield_all-the-things-you-are.mp3",
  "image": "john-scofield.png",
  "info": "Unknown"
}, {
  "name": "Johnny Smith",
  "songTitle": "Misty",
  "fileName": "johnny-smith_misty.mp3",
  "image": "johnny-smith.jpg",
  "info": "https://www.youtube.com/watch?v=a-JwpEhvvKE"
}, {
  "name": "Johnny Smith",
  "songTitle": "Moonlight In Vermont",
  "fileName": "johnny-smith_moonlight-in-vermont.mp3",
  "image": "johnny-smith.jpg",
  "info": "https://www.youtube.com/watch?v=gRNpc-hFkCs"
}, {
  "name": "Johnny Smith",
  "songTitle": "My Foolish Heart",
  "fileName": "johnny-smith_my-foolish-heart.mp3",
  "image": "johnny-smith.jpg",
  "info": "https://www.youtube.com/watch?v=bFzekORh-gw"
}, {
  "name": "Johnny Smith",
  "songTitle": "Tenderly",
  "fileName": "johnny-smith_tenderly.mp3",
  "image": "johnny-smith.jpg",
  "info": "https://www.youtube.com/watch?v=xbKdp5NeHnk"
}, {
  "name": "Julian Lage",
  "songTitle": "St. Thomas",
  "fileName": "julian-lage_st-thomas.mp3",
  "image": "julian-lage.jpg",
  "info": "https://www.youtube.com/watch?v=OZa7Na3mJLA"
}, {
  "name": "Julian Lage",
  "songTitle": "I'll Be Seeing You",
  "fileName": "julian-lage_i'll-be-seeing-you.mp3",
  "image": "julian-lage.jpg",
  "info": "https://www.youtube.com/watch?v=8a3qAp81vY8"
}, {
  "name": "Julian Lage",
  "songTitle": "Crying",
  "fileName": "julian-lage_crying.mp3",
  "image": "julian-lage.jpg",
  "info": "https://www.youtube.com/watch?v=hYRYhAGt14A"
}, {
  "name": "Julian Lage",
  "songTitle": "Look Book",
  "fileName": "julian-lage_look-book.mp3",
  "image": "julian-lage.jpg",
  "info": "https://www.youtube.com/watch?v=yQ3aoAAjXa8"
}, {
  "name": "Kenny Burrell",
  "songTitle": "Saturday Night Blues",
  "fileName": "kenny-burrell_saturday-night-blues.mp3",
  "image": "kenny-burrell.jpeg",
  "info": "Unknown"
}, {
  "name": "Kenny Burrell",
  "songTitle": "Moon And Sand",
  "fileName": "kenny-burrell_moon-and-sand.mp3",
  "image": "kenny-burrell.jpeg",
  "info": "https://www.youtube.com/watch?v=QuyTO3kaSsk"
}, {
  "name": "Kenny Burrell",
  "songTitle": "Tin Tin Deo",
  "fileName": "kenny-burrell_tin-tin-deo.mp3",
  "image": "kenny-burrell.jpeg",
  "info": "https://www.youtube.com/watch?v=qSVL1V22_Hw"
}, {
  "name": "Kenny Burrell",
  "songTitle": "Stormy Monday Blues",
  "fileName": "kenny-burrell_stormy-monday-blues.mp3",
  "image": "kenny-burrell.jpeg",
  "info": "https://www.youtube.com/watch?v=6z4NWAvWNy4"
}, {
  "name": "Kevin Eubanks",
  "songTitle": "Time Line",
  "fileName": "kevin-eubanks_timeline.mp3",
  "image": "kevin-eubanks.jpg",
  "info": "https://www.youtube.com/watch?v=22d8kRBeQ6s"
}, {
  "name": "Lage Lund",
  "songTitle": "Time After Time",
  "fileName": "lage-lund_time-after-time.mp3",
  "image": "lage-lund.jpg",
  "info": "https://www.youtube.com/watch?v=XotR6CtzGQE"
}, {
  "name": "Larry Carlton",
  "songTitle": "So What",
  "fileName": "larry-carlton_so-what.mp3",
  "image": "larry-carlton.jpg",
  "info": "https://www.youtube.com/watch?v=giRayK4fQkg"
}, {
  "name": "Larry Coryell",
  "songTitle": "Black Orpheus",
  "fileName": "larry-coryell_black-orpheus.mp3",
  "image": "larry-coryell.jpg",
  "info": "Unknown"
}, {
  "name": "Lee Ritenour",
  "songTitle": "Blue in Green",
  "fileName": "lee-ritenour_blue-in-green.mp3",
  "image": "lee-ritenour.jpg",
  "info": "https://www.youtube.com/watch?v=F6QA41Wck98"
}, {
  "name": "Lenny Breau",
  "songTitle": "Lullaby Of Birdland",
  "fileName": "lenny-breau_lullaby-of-birdland.mp3",
  "image": "lenny-breau.jpg",
  "info": "Unknown"
}, {
  "name": "Lenny Breau",
  "songTitle": "On Green Dolphin Street",
  "fileName": "lenny-breau_on-green-dolphin-street.mp3",
  "image": "lenny-breau.jpg",
  "info": "https://www.youtube.com/watch?v=UpUBDi4nyMQ"
}, {
  "name": "Lenny Breau",
  "songTitle": "My Foolish Heart",
  "fileName": "lenny-breau_my-foolish-heart.mp3",
  "image": "lenny-breau.jpg",
  "info": "https://www.youtube.com/watch?v=nA39E8W52HY"
}, {
  "name": "Lenny Breau",
  "songTitle": "All Blues",
  "fileName": "lenny-breau_all-blues.mp3",
  "image": "lenny-breau.jpg",
  "info": "https://www.youtube.com/watch?v=-r6LC_6sN-0"
}, {
  "name": "Les Paul",
  "songTitle": "How High The Moon",
  "fileName": "les-paul_how-high-the-moon.mp3",
  "image": "les-paul.jpg",
  "info": "https://www.youtube.com/watch?v=NkGf1GHAxhE"
}, {
  "name": "Les Paul",
  "songTitle": "Vaya Con Dios",
  "fileName": "les-paul_vaya-con-dios.mp3",
  "image": "les-paul.jpg",
  "info": "https://www.youtube.com/watch?v=QqZ0Sdz_V40"
}, {
  "name": "Les Paul",
  "songTitle": "Tennessee Waltz",
  "fileName": "les-paul_tennessee-waltz.mp3",
  "image": "les-paul.jpg",
  "info": "https://www.youtube.com/watch?v=Zt1m5fcRwz8"
}, {
  "name": "Les Paul",
  "songTitle": "Big Eyed Girl",
  "fileName": "les-paul_big-eyed-girl.mp3",
  "image": "les-paul.jpg",
  "info": "https://www.youtube.com/watch?v=oPpdc9BiMQk"
}, {
  "name": "Mary Osborne",
  "songTitle": "I'll Remember April",
  "fileName": "mary-osborne_i'll-remember-april.mp3",
  "image": "mary-osborne.jpg",
  "info": "https://www.youtube.com/watch?v=4_-4UfQxtv4"
}, {
  "name": "Mick Goodrick",
  "songTitle": "Lost In The Shuffle",
  "fileName": "mick-goodrick_lost-in-the-shuffle.mp3",
  "image": "mick-goodrick.jpg",
  "info": "https://www.youtube.com/watch?v=ry5Al4YHNe4"
}, {
  "name": "Mike Stern",
  "songTitle": "Like Someone In Love",
  "fileName": "mike-stern_like-someone-in-love.mp3",
  "image": "mike-stern.jpg",
  "info": "Standards"
}, {
  "name": "Mundell Lowe",
  "songTitle": "I'll Never Be The Same",
  "fileName": "mundell-lowe_i'll-never-be-the-same.mp3",
  "image": "mundell-lowe.jpg",
  "info": "https://www.youtube.com/watch?v=K3Y1AeSPqW0"
}, {
  "name": "Mundell Lowe",
  "songTitle": "Scrapple From The Apple",
  "fileName": "mundell-lowe_scrapple-from-the-apple.mp3",
  "image": "mundell-lowe.jpg",
  "info": "https://www.youtube.com/watch?v=b3_3SlDg71A"
}, {
  "name": "Mundell Lowe",
  "songTitle": "Satin Doll",
  "fileName": "mundell-lowe_satin-doll.mp3",
  "image": "mundell-lowe.jpg",
  "info": "https://www.youtube.com/watch?v=b3_3SlDg71A"
}, {
  "name": "Mundell Lowe",
  "songTitle": "Angel Eyes",
  "fileName": "mundell-lowe_angel-eyes.mp3",
  "image": "mundell-lowe.jpg",
  "info": "https://www.youtube.com/watch?v=b3_3SlDg71A"
}, {
  "name": "Pat Martino",
  "songTitle": "Oleo",
  "fileName": "pat-martino_oleo.mp3",
  "image": "pat-martino.jpg",
  "info": "Desperado Album"
}, {
  "name": "Pat Martino",
  "songTitle": "Sunny",
  "fileName": "pat-martino_sunny.mp3",
  "image": "pat-martino.jpg",
  "info": "https://www.youtube.com/watch?v=sD_9dTwmidw"
}, {
  "name": "Pat Martino",
  "songTitle": "Strings",
  "fileName": "pat-martino_strings.mp3",
  "image": "pat-martino.jpg",
  "info": "https://www.youtube.com/watch?v=LWt75-eV25M"
}, {
  "name": "Pat Martino",
  "songTitle": "Minority",
  "fileName": "pat-martino_minority.mp3",
  "image": "pat-martino.jpg",
  "info": "https://www.youtube.com/watch?v=LWt75-eV25M"
}, {
  "name": "Pat Metheny",
  "songTitle": "Solar",
  "fileName": "pat-metheny_solar.mp3",
  "image": "pat-metheny.jpg",
  "info": "Question and Answer"
}, {
  "name": "Robben Ford",
  "songTitle": "It Don't Mean A Thing(If It Ain't Got That Swing)",
  "fileName": "robben-ford_it-don't-mean-a-thing.mp3",
  "image": "robben-ford.jpg",
  "info": "https://www.youtube.com/watch?v=rAH52xh65cE"
}, {
  "name": "Ron Eschete",
  "songTitle": "Love For Sale",
  "fileName": "ron-eschete_love-for-sale.mp3",
  "image": "ron-eschete.jpg",
  "info": "https://www.youtube.com/watch?v=UNBntxA2XHI"
}, {
  "name": "Slim Gaillard",
  "songTitle": "How High The Moon",
  "fileName": "slim-gaillard_how-high-the-moon.mp3",
  "image": "slim-gaillard.jpeg",
  "info": "https://www.youtube.com/watch?v=R08DrJTs4_o"
}, {
  "name": "Stanley Jordan",
  "songTitle": "Autumn Leaves",
  "fileName": "stanley-jordan_autumn-leaves.mp3",
  "image": "stanley-jordan.jpg",
  "info": "https://www.youtube.com/watch?v=MxqzKIHx5Y4"
}, {
  "name": "Stochelo Rosenberg",
  "songTitle": "Sunny",
  "fileName": "stochelo-rosenberg_sunny.mp3",
  "image": "stochelo-rosenberg.jpg",
  "info": "https://www.youtube.com/watch?v=Fh1PXAWPMv4"
}, {
  "name": "Tal Farlow",
  "songTitle": "How About You?",
  "fileName": "tal-farlow_how-about-you.mp3",
  "image": "tal-farlow.jpg",
  "info": "Unknown"
}, {
  "name": "Tal Farlow",
  "songTitle": "Autumn Leaves",
  "fileName": "tal-farlow_autumn-leaves.mp3",
  "image": "tal-farlow.jpg",
  "info": "https://www.youtube.com/watch?v=a7e4Jgx-Os8"
}, {
  "name": "Tal Farlow",
  "songTitle": "Perdido",
  "fileName": "tal-farlow_perdido.mp3",
  "image": "tal-farlow.jpg",
  "info": "https://www.youtube.com/watch?v=a7e4Jgx-Os8"
}, {
  "name": "Tal Farlow",
  "songTitle": "Satin Doll",
  "fileName": "tal-farlow_satin-doll.mp3",
  "image": "tal-farlow.jpg",
  "info": "https://www.youtube.com/watch?v=a7e4Jgx-Os8"
}, {
  "name": "Ted Greene",
  "songTitle": "Autumn Leaves",
  "fileName": "ted-greene_autumn-leaves.mp3",
  "image": "ted-greene.jpg",
  "info": "https://www.youtube.com/watch?v=zDuee6blvj8"
}, {
  "name": "Tuck Andress",
  "songTitle": "Over The Rainbow",
  "fileName": "tuck-andress_over-the-rainbow.mp3",
  "image": "tuck-andress.jpg",
  "info": "https://www.youtube.com/watch?v=6gVRJcq083g"
}, {
  "name": "Wes Montgomery",
  "songTitle": "West Coast Blues",
  "fileName": "wes-montgomery_west-coast-blues.mp3",
  "image": "wes-montgomery.jpg",
  "info": "Unknown"
}, {
  "name": "Wes Montgomery",
  "songTitle": "Full House",
  "fileName": "wes-montgomery_full-house.mp3",
  "image": "wes-montgomery.jpg",
  "info": "https://www.youtube.com/watch?v=fP1Bw0wKZtU"
}, {
  "name": "Wes Montgomery",
  "songTitle": "Round Midnight",
  "fileName": "wes-montgomery_round-midnight.mp3",
  "image": "wes-montgomery.jpg",
  "info": "https://www.youtube.com/watch?v=MOm17yw__6U"
}, {
  "name": "Wes Montgomery",
  "songTitle": "Here's That Rainy Day",
  "fileName": "wes-montgomery_here's-that-rainy-day.mp3",
  "image": "wes-montgomery.jpg",
  "info": "https://www.youtube.com/watch?v=-iVgONy8kMY"
}, {
  "name": "Wolfgang Muthspiel",
  "songTitle": "For Django",
  "fileName": "wolfgang-muthspiel_for-django.mp3",
  "image": "wolfgang-muthspiel.jpg",
  "info": "https://www.youtube.com/watch?v=HSUD1_nHiZ4"
}]; //     {
//     "name": "",
//     "songTitle": "",
//     "fileName": "",
//     "image": "",
//     "info": ""
// },;
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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","tracks.json"], null)