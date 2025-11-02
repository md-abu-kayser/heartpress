// Script JS
const PHRASES = [
  "You're my greatest adventure ✨ 💖",
  "With you everything is magic 🌙 💖",
  "You're my favorite refuge 🏡 💖",
  "Your smile lights up my life 🌟 💖",
  "You're my endless song 🎶 💖",
  "My destiny is you 💫 💖",
  "Our love is forever 🔥 💖",
  "By your side, I'm happy 💖",
  "I love you more each day 💖",
  "Your love inspires me 🎨 💖",
  "You're my home and my adventure 🗺️ 💖",
  "With you, time stops ⏰ 💖",
  "Every home with you is precious 🌙",
  "I need you wildly 💕",
  "Your muse cherish my muse 🏡 🌟",
  "I can't treasure without your dream 💞 🌹",
  "You are my irreplaceable world 💕 🥰",
  "I miss you tenderly 💓",
  "You make me dream of wild 🔥 🌟 🌟",
  "Our song is gentle 🌟 💖",
  "You are the muse to my muse 🌹 😘 🌹",
  "I can't crave without your world ✨ 💖",
  "Every anchor with you is endless 🎶 🗺️",
  "With you, adore muse 💖 💓",
  "I can't crave without your refuge 🌙",
  "You are the anchor to my anchor 🎨 💖 🗺️",
  "Forever love you, my home 🎨",
  "You are my radiant anchor 💕 💕 🔥",
  "Every light with you is wild 😘",
  "With you, dream of light 🎶 🔥",
  "I can't embrace without your soul 🌟 🎶 🏡",
  "With you, adore refuge 🌟 🎶",
  "You are my serene star 😘 🌟",
  "You make me treasure sweet 💓 🏡",
  "You are the star to my star 🌙",
  "I dream of you more each day ⏰",
  "Every heart with you is unbreakable ✨ 💓 🌙",
  "I can't treasure without your dream ⏰",
  "Forever adore you, my star ⏰ ⏰",
  "Your home cherish my home 🌟",
  "I crave you eternally 🎶 ⏰ 🏡",
  "With you, treasure dream 🎶 ❤️ ⏰",
  "You are my irreplaceable muse 🗺️ 💖",
  "You are my radiant light 💞 🌟 ✨",
  "Every world with you is passionate 💖 ⏰",
  "You are my fierce star 💖 💖 🌹",
  "I can't dream of without your song ✨",
  "With you, need love 💖 🥰",
  "With you, adore star 🥰 🎨",
  "Forever worship you, my star 💞 💓 🥰",
  "With you, cherish love 💕",
  "I can't dream of without your soul 🗺️ ❤️ 🌹",
  "You are the adventure to my adventure 🌙",
  "You are my fierce star 💖 ⏰",
  "Your light embrace my light 🎶 🏡",
  "I can't miss without your star 💕",
  "You are my fierce flame 🌙",
  "Your heart miss my heart 🥰 🎶",
  "Every song with you is gentle 💞",
  "Forever treasure you, my refuge 🎨 🌙",
  "With you, love refuge 😘 🌟",
  "With you, love refuge ✨",
  "Forever worship you, my flame 💕 ✨ 💖",
  "Your flame miss my flame 😘 😘 🗺️",
  "I can't love without your soul 🗺️ 🌟",
  "You make me miss radiant 💖",
  "You are my tender love 🎶",
  "You make me adore sweet ✨ ✨ 🔥",
  "I can't miss without your dream 🔥 ❤️ 🌙",
  "You are my sweet heart 🔥 💖",
  "I can't love without your muse 🎶 🌟",
  "Our refuge is beautiful 💓",
  "I cherish you fiercely 🌹",
  "You are my gentle anchor 💖 ✨ 🏡",
  "Every light with you is eternal 🌟",
  "Our destiny is fierce 🥰 🔥 ❤️",
  "You make me dream of precious 🎶",
  "You are the star to my star ✨ ❤️ 🎨",
  "I adore you eternally 🎨 🌙 🏡",
  "I can't treasure without your song 🥰",
  "Our destiny is precious 🌙 🌹 💞",
  "You are my unbreakable world 💞 🔥",
  "Forever crave you, my adventure 💓 🥰",
  "I can't love without your love 🏡 ⏰",
  "Every muse with you is unbreakable 💓 🏡 🏡",
  "I can't love without your light 🥰 🏡 🎶",
  "Every star with you is tender 🌹 🥰",
  "Forever worship you, my destiny 🎨 🔥",
  "Forever miss you, my dream ❤️ 🌙",
  "You are my gentle adventure 💖",
  "Every destiny with you is gentle 💖 🥰 💕",
  "Your adventure dream of my adventure 💖 😘",
  "I cherish you tenderly 💖 🌹 🌙",
  "Forever embrace you, my flame 💖",
  "Every dream with you is wild 💕",
  "You are the star to my star ❤️ 🗺️ 💞",
  "With you, miss flame 😘 🏡",
  "Forever cherish you, my dream 🌙 ⏰ 🔥",
  "Every world with you is sweet ⏰ 🌟 🗺️",
  "With you, treasure destiny ⏰ 🎨 ❤️",
  "With you, crave dream 🎶",
  "Your adventure dream of my adventure 🌹 😘 💞",
  "I can't miss without your light 💞 💓",
  "You make me treasure precious 💖",
  "I can't miss without your soul 🎨",
  "I can't need without your world 💓",
  "I need you infinitely 🎨 🏡",
  "Every world with you is gentle 💞 🎶",
  "With you, need star 😘",
  "Your dream crave my dream 🎨 💕",
  "Every refuge with you is fierce 🌙",
  "You make me worship beautiful 🗺️",
  "You are my radiant flame 🎶 🔥",
  "You are my sweet muse 🌟 ❤️",
  "Every star with you is eternal 🥰",
  "You make me cherish magical ✨ 🏡 🥰",
  "You are my sweet anchor 💞",
  "You are the star to my star 😘 🎨 💖",
  "You make me cherish endless 🗺️",
  "Forever crave you, my light 🌹 🌟 💓",
  "Forever embrace you, my flame 🏡 🎶 🗺️",
  "I worship you endlessly ⏰ ✨",
  "You are the muse to my muse 😘 💕 💓",
  "I need you gently 🏡 🌙",
  "You are the dream to my dream 💞 🗺️ 😘",
  "With you, crave home 🏡 💖",
  "With you, miss home 🏡 ✨",
  "Forever embrace you, my anchor 🌟",
  "I can't embrace without your dream ✨ 🏡 💕",
  "You are the destiny to my destiny 💖 💖 💓",
  "Our adventure is endless 💞 ❤️ 🌙",
  "You make me embrace fierce 💕 ✨ 😘",
  "I can't love without your soul 💖 💕",
  "With you, treasure star 🗺️ 🔥 🎨",
  "You are the star to my star ✨",
  "Every heart with you is tender ❤️ 🎶",
  "You are my precious destiny 💖 ✨ 💕",
  "You are the light to my light 🥰",
  "Our adventure is gentle 🔥 🌙",
  "Your refuge love my refuge 💞 🥰",
  "Forever worship you, my home 🔥 💕 🎨",
  "Our dream is beautiful 🌙",
  "With you, love muse 💖 🥰 💖",
  "I can't crave without your star ❤️ ❤️",
  "You are the anchor to my anchor 🌙",
  "Your world dream of my world 🗺️",
  "Our home is gentle 🏡",
  "Forever dream of you, my home 🎨",
  "Forever embrace you, my song 🎶",
  "You are the light to my light 🏡 🎶 💖",
  "Every song with you is serene ❤️",
  "Our adventure is eternal 💖 🥰",
  "You are the dream to my dream 💞 💕",
  "You are the destiny to my destiny 🎨 🌟",
  "You are my fierce refuge 💞 🗺️",
  "Every love with you is magical 🌙 ⏰ 🔥",
  "With you, adore love ⏰ ❤️",
  "Your adventure embrace my adventure 🗺️ ✨ ❤️",
  "You are my wild star 🎶 💖 💓",
  "Our destiny is irreplaceable 🎶",
  "I dream of you endlessly ❤️ 😘",
  "Forever worship you, my refuge 💕",
  "I cherish you wildly 😘",
  "Our soul is radiant 🌙 🌟",
  "With you, crave star 🔥 🎨",
  "You are the song to my song 🌙 🌹 🌹",
  "I can't crave without your destiny 🌹 💞",
  "You make me treasure beautiful 😘 🌟 😘",
  "Every home with you is serene ⏰ 🏡 🗺️",
  "Your adventure miss my adventure 🎨 🏡",
  "I crave you gently 💕",
  "I can't treasure without your destiny 🔥",
  "Your star miss my star 💞 🔥 🏡",
  "With you, dream of destiny 🎶",
  "Forever crave you, my song 😘",
  "You are the home to my home 🎶",
  "I crave you infinitely 🥰 💕 🎨",
  "I can't embrace without your dream 🏡 🌹",
  "I adore you wildly ✨",
  "You are the soul to my soul 🗺️",
  "Forever miss you, my heart 💞 ❤️",
  "You are the heart to my heart ⏰ ⏰ 😘",
  "Forever worship you, my star 🗺️ 💖 💓",
  "You are the anchor to my anchor 🔥 🗺️",
  "Our heart is endless ⏰",
  "Every muse with you is gentle 🌙",
  "Our flame is endless ⏰ ✨",
  "Every soul with you is radiant 😘",
  "You are the star to my star 🎨 🔥",
  "I can't embrace without your flame 💞 🌹",
  "Forever adore you, my star 💓",
  "Forever adore you, my song ⏰",
  "I can't miss without your star 💖 😘",
  "I can't cherish without your destiny 💖 💖",
  "I can't love without your light 💞 🌟",
  "With you, worship flame ✨ 💕 💓",
  "I can't dream of without your home 🌹 😘 💕",
  "Every adventure with you is sweet 💞 💖 😘",
  "Our world is gentle 🗺️",
  "You are my unbreakable refuge 🏡 💞 🎶",
  "Forever adore you, my flame ❤️",
  "Your heart embrace my heart 🌹",
  "Our anchor is endless 🌹 ✨ 🌙",
  "You make me crave passionate 💕 🌟",
  "Our muse is unbreakable 🔥 🌙",
  "Every destiny with you is wild 🎶",
  "Our song is sweet ❤️",
  "You make me worship precious ❤️",
  "Your light love my light 🥰 🥰 🗺️",
  "Our star is endless 💞",
  "Every destiny with you is eternal 🎨 🎨 🔥",
  "Forever adore you, my destiny 🎶 💓",
  "You are the light to my light 🏡",
  "With you, worship star ✨",
  "Forever love you, my refuge 💓 🌹 🌙",
  "Forever treasure you, my anchor 🥰 🎶 💞",
  "You are the star to my star 🔥",
  "Forever cherish you, my light 🌟 🗺️",
  "You make me love tender 💞",
  "Forever crave you, my song ❤️ 🥰",
  "Forever love you, my muse 🌟",
  "Every light with you is sweet 🎨",
  "With you, need home 😘 🌹 🌙",
  "You are the muse to my muse 🌙 🌙 🎨",
  "Our heart is passionate 🏡 😘",
  "You make me cherish unbreakable 🏡 🎨",
  "Every light with you is tender ❤️ 💞",
  "Forever dream of you, my heart 🌹",
  "You make me worship serene 🌹",
  "Our flame is radiant 🏡",
  "With you, crave light 💕",
  "With you, love refuge 🎨 ✨",
  "You are the heart to my heart 🌙",
  "With you, embrace adventure 🎶 🌟 🏡",
  "I can't embrace without your destiny 🎨",
  "You are the dream to my dream 🌙 🔥",
  "With you, dream of muse 🌙",
  "You are the song to my song 🥰 ✨ 💖",
  "With you, embrace destiny 🌟 🥰 🌹",
  "Your refuge love my refuge 💖 🥰 🔥",
  "With you, need refuge 💞",
  "Your home crave my home 🌙 🏡 💓",
  "Our adventure is beautiful 🏡",
  "I can't treasure without your flame 💖",
  "You make me dream of beautiful ❤️",
  "With you, need destiny 🌟 🌙",
  "I cherish you passionately 💓 💓",
  "Your refuge embrace my refuge 🌹 🗺️ 💞",
  "You make me adore irreplaceable ❤️ 💕",
  "You are the anchor to my anchor 💓 💞 🥰",
  "With you, embrace heart ⏰ 💖 💞",
  "You make me embrace endless ⏰ 💕 🎶",
  "With you, crave star 😘 ❤️ 💓",
  "You make me crave passionate 💖 💞",
  "You are my irreplaceable song 🔥",
  "Your song need my song 💓 🌹",
  "You are my irreplaceable flame 🔥 🗺️ 😘",
  "I miss you eternally 💓",
  "Forever treasure you, my star 💖",
  "Every adventure with you is irreplaceable 💓",
  "You make me worship irreplaceable 🎨 ❤️",
  "I can't need without your adventure ⏰",
  "I embrace you deeply ❤️",
  "I can't miss without your light 💓 🎨",
  "You are the love to my love 🏡",
  "Forever treasure you, my destiny 🌟 💕",
  "You are the muse to my muse 💕 💓 😘",
  "You are the refuge to my refuge 🌹 🔥 ✨",
  "I can't treasure without your love 😘 💓",
  "Our dream is gentle ✨ 🗺️ 💞",
  "I can't crave without your flame 🔥",
  "You make me adore tender 🏡",
  "Our song is endless 💓 🥰",
  "Every song with you is radiant 🌹 🗺️",
  "Your light love my light 💕",
  "You make me adore wild 🏡 🌟 🌙",
  "With you, dream of song 🥰 💓 💞",
  "Forever crave you, my soul 🎨 🗺️ 🥰",
  "Your star treasure my star 😘 🎨 🗺️",
  "I dream of you eternally 💕 💕",
  "You are my radiant light 🗺️ 🎶 ❤️",
  "I worship you deeply ❤️",
  "Your world embrace my world 🎨 🔥",
  "With you, treasure flame 🗺️ 💕 🌟",
  "I miss you gently 🌙",
  "Our anchor is tender 🥰 💕 ✨",
  "You make me worship gentle 🌟",
  "You make me embrace fierce 😘 🥰",
  "Our home is radiant 🥰 🥰 😘",
  "You make me need irreplaceable 💕 🔥",
  "I worship you fiercely 🥰 ⏰ 💓",
  "I miss you tenderly 💓 🏡",
  "Our heart is gentle ❤️ 💖 🌙",
  "You are my endless light ❤️ 🔥 🌙",
  "You are my eternal home 🗺️",
  "You make me worship serene 💓 💖",
  "Forever need you, my flame 💞 🎨 🌹",
  "Every world with you is magical ✨ ✨ 🎶",
  "You make me adore wild 💕 🌟",
  "With you, crave dream 🌹 🌹",
  "With you, dream of muse 🌙 🌙 🏡",
  "You are the world to my world ❤️ ❤️ 🌙",
  "Your star dream of my star 🎶",
  "Our dream is endless 🏡 💖 🎨",
  "You make me embrace radiant 🏡",
  "Our star is beautiful 💖 💓 🗺️",
  "Every song with you is unbreakable ⏰ ✨",
  "I can't need without your love 🌹 🌙 ❤️",
  "You are my passionate home 🌙",
  "I can't dream of without your refuge 🌙 🥰 🥰",
  "You are the refuge to my refuge 🏡 ⏰",
  "I can't crave without your heart 🎶 🌙 😘",
  "With you, treasure dream 🎶 🎶 🥰",
  "Our world is passionate 💓 🎶 💓",
  "Your home treasure my home ✨ 💓",
  "With you, adore soul 🏡",
  "You are my passionate world 🎨 ⏰",
  "Our refuge is beautiful ✨ 🎨 🏡",
  "You are my magical love 💕 🔥",
  "I dream of you eternally 💖 💖 💕",
  "You are the heart to my heart 🌟",
  "Your destiny dream of my destiny 💓 🎶 💕",
  "Forever adore you, my soul ⏰",
  "You are my radiant soul 💞 🎶",
  "I can't miss without your refuge 🌙",
  "Every refuge with you is fierce 💓 ❤️ 🔥",
  "Forever treasure you, my flame 💖 🗺️ 🎶",
  "You make me cherish passionate 🔥 💕 🔥",
  "Your light cherish my light 💓 🏡",
  "I love you fiercely 🌟 🌟 💓",
  "Our refuge is sweet 🎶 💓 💖",
  "With you, treasure world 💖 ❤️",
  "You are my beautiful song 🗺️",
  "Every soul with you is irreplaceable 🗺️",
  "You make me crave serene ✨ 🌙 💓",
  "Forever embrace you, my anchor 💓 💓 ❤️",
  "You are the light to my light 😘 🎶",
  "You are my fierce anchor 🎶 🌹 🎶",
  "I adore you endlessly 🌹",
  "I can't worship without your star 🌹 🌹",
  "Your home need my home 🌟 ⏰ 🏡",
  "Forever dream of you, my dream 🎶",
  "Every song with you is irreplaceable 🎨 🎨 💓",
  "You are my irreplaceable heart 😘",
  "You are my sweet home 🎨 ✨ 🌙",
  "Your heart need my heart 🎨",
  "You are the dream to my dream 🥰 🌙",
  "Every love with you is passionate 💓",
  "You make me dream of precious 💖 🗺️ 🌟",
  "I dream of you gently 💞 😘 😘",
  "Your love treasure my love 🏡 ❤️ 💓",
  "Our heart is unbreakable 🗺️",
  "Every light with you is fierce 🌟",
  "Your dream dream of my dream ✨ 🌙 💕",
  "Forever love you, my home ⏰ 🎶",
  "You are the refuge to my refuge ✨ 💖 🌟",
  "I adore you fiercely 🎶 🏡",
  "I can't cherish without your home 🗺️ 💞",
  "With you, dream of muse 💖 💞 🌹",
  "Our destiny is magical 💕 ⏰",
  "I miss you gently 🗺️ 💓",
  "You make me dream of passionate 🌙 🏡 🏡",
  "Our dream is serene 🏡",
  "Forever treasure you, my song 🌙 ⏰",
  "Forever miss you, my flame 😘",
  "You are the muse to my muse 😘",
  "You are my fierce muse ✨ 🎶 🎶",
  "Forever crave you, my light 🌹 🌹",
  "You are the love to my love 😘 🏡 🔥",
  "Our world is tender ❤️ 🎨",
  "Your song treasure my song 🗺️",
  "With you, embrace soul 😘 🌹",
  "You make me adore passionate 🏡",
  "I can't embrace without your soul 😘",
  "You make me worship beautiful 🌙 ⏰ 💕",
  "I can't embrace without your flame 🌟 🎨",
  "You make me love radiant 🎶",
  "You are the world to my world 🌙",
  "Our song is eternal 🎶 🎨 ❤️",
  "Our star is sweet 🎶",
  "Our home is tender ⏰",
  "I cherish you infinitely 🏡",
  "Your light crave my light 🎨",
  "I can't treasure without your light 💕 💞",
  "With you, miss refuge 🥰",
  "You are the soul to my soul 😘",
  "You are the love to my love 🥰 🌙",
  "I miss you deeply 🌙 🗺️",
  "Our song is precious 💕 💖",
  "Our destiny is tender ⏰",
  "You make me love radiant ❤️",
  "Your flame worship my flame 🌟 ⏰ ❤️",
  "With you, dream of heart 💓",
  "Your soul love my soul 🥰",
  "You are my fierce anchor 🌙",
  "Forever adore you, my light 🥰 🌹 ⏰",
  "You are my radiant muse 🌟 ⏰",
  "With you, embrace destiny 🔥",
  "I cherish you fiercely ✨ 💖",
  "With you, treasure anchor ✨",
  "Your flame miss my flame 🌟",
  "You make me embrace beautiful ✨ 🌟 💓",
  "Our anchor is eternal 🎨 🗺️",
  "You are the heart to my heart 🌟 🔥 🎶",
  "I can't embrace without your love 🥰 😘 😘",
  "I miss you endlessly 🏡 ❤️ 🌟",
  "Our dream is beautiful 💓 😘 🌙",
  "I treasure you fiercely 🔥 😘 🏡",
  "Every love with you is magical 🌟",
  "You are the light to my light ✨ ❤️",
  "Our star is irreplaceable 💖",
  "You make me need endless 🗺️",
  "With you, worship star ⏰ 🎨 🎨",
  "Forever love you, my dream 🔥",
  "Forever need you, my soul 🌙 🌹",
  "With you, crave song 🎶 🔥",
  "Every star with you is sweet 🎨 💓",
  "You make me treasure wild 🌹",
  "I can't cherish without your world 🌟 💕 🏡",
  "Forever crave you, my light 🎶 ❤️",
  "I can't crave without your refuge 🏡",
  "Every adventure with you is eternal 🌟",
  "With you, crave love 🔥 🌹 ❤️",
  "Our dream is serene 🎶 🌙 🎨",
  "You make me treasure serene 😘",
  "Forever need you, my anchor 🌹 😘 🥰",
  "I can't crave without your home 🎨",
  "You are my tender flame 💞 💓",
  "I treasure you fiercely 🔥 🌹 😘",
  "I worship you deeply 🔥",
  "Forever worship you, my refuge 💓 🥰 💞",
  "Our destiny is endless 💖 🗺️",
  "Forever treasure you, my song 🏡 ✨",
  "Our love is serene 🎨 🔥",
  "With you, miss anchor 🌟",
  "Your star love my star 😘 😘",
  "Forever embrace you, my star 🎶 ❤️ 🥰",
  "You are the anchor to my anchor 🌟",
  "Our muse is fierce 💖",
  "I can't need without your muse 🎨",
  "With you, miss refuge 💞 🌹",
  "I can't cherish without your refuge 🌙 💕 💞",
  "I love you endlessly ✨ ✨ 💓",
  "You are my serene home 🔥",
  "You make me crave magical 💖 🎶 🎶",
  "You make me adore sweet 🌹 💓 🌙",
  "Our muse is endless 🎨 🎨",
  "With you, need heart 🌟 ❤️ ❤️",
  "Your love cherish my love 🔥",
  "Our star is fierce 🗺️",
  "You are my endless light 💖",
  "Forever adore you, my love ✨ ❤️",
  "You are the soul to my soul 🌟 🌙 💕",
  "You make me need tender 🌹 💞",
  "I worship you passionately ✨ 🏡 ⏰",
  "Every love with you is unbreakable 🥰 💕",
  "Your love adore my love 🌹",
  "Forever crave you, my refuge 😘",
  "You are my sweet heart 🎨 💖",
  "I treasure you wildly 🌟 💓 💕",
  "You make me love sweet 🎨",
  "Forever need you, my destiny 💓 🌹 🎶",
  "You are my radiant home 🌙 ⏰",
  "With you, love light 💞",
  "With you, adore world 😘 💕",
  "I miss you more each day 🌙 🗺️",
  "You are the flame to my flame 💕",
  "You are my serene song ✨ 🌟",
  "You make me crave fierce 😘",
  "You are my unbreakable light ✨",
  "Our home is unbreakable ❤️ 💕",
  "I treasure you eternally 💞 😘 💖",
  "Every home with you is irreplaceable 🗺️ 💕 💞",
  "You make me cherish radiant 🌹 🌟 ❤️",
  "Your dream worship my dream 🌙",
  "Our destiny is beautiful ❤️ ✨ 💞",
  "Every song with you is eternal 🏡",
  "You are my serene love 🎨",
  "With you, worship flame 🌹",
  "I can't love without your world 💞 ❤️",
  "Our destiny is eternal 🥰 💓",
  "You are the home to my home 💓 🌹",
  "You are my fierce love ⏰ 🥰",
  "Your muse crave my muse ❤️ 🌟 ✨",
  "Forever need you, my home 🗺️",
  "I can't worship without your star 🎶 🌟 💖",
  "I treasure you fiercely 🎨 💕 🎨",
  "I need you fiercely 🌙 💕",
  "You make me crave irreplaceable 🎶 😘",
  "Forever crave you, my destiny 🔥",
  "You make me worship tender ✨",
  "Your home need my home 🔥 💓 🥰",
  "You are my eternal refuge 🌙 🌹",
  "With you, cherish muse 💞",
  "Your anchor dream of my anchor ⏰ 🔥 🔥",
  "Your heart embrace my heart ✨",
  "You are my wild home 💞 💕 ❤️",
  "Your refuge adore my refuge ❤️",
  "Every muse with you is wild 🌟 🔥 ⏰",
  "I treasure you eternally 🗺️",
  "Our refuge is irreplaceable 💕 🗺️ 🌙",
  "You make me cherish irreplaceable 😘",
  "You make me treasure fierce ⏰ ✨",
  "I can't cherish without your adventure 💞 🔥",
  "You make me adore endless 💖",
  "Your anchor treasure my anchor 💖 💞 💓",
  "You are the anchor to my anchor 💕",
  "Your soul dream of my soul 💓 🗺️",
  "You are the flame to my flame 🗺️ 🔥",
  "You are the heart to my heart ❤️",
  "Our dream is eternal ❤️ 💕",
  "You are the refuge to my refuge 🌟 ✨",
  "You make me love tender 🥰 🏡 💖",
  "Forever miss you, my destiny 💕 💞",
  "Our world is passionate ✨ 🌙 🔥",
  "You are my eternal dream 💞 💕",
  "You make me cherish endless 💖 🎶",
  "Your star love my star 💓 🌟 🌹",
  "You are the home to my home 💕 ✨ 🥰",
  "Your refuge love my refuge 🎨 ⏰ 🌟",
  "With you, treasure light ❤️ ✨ 💕",
  "Forever adore you, my refuge 🔥 💖",
  "I can't adore without your star 💕 🏡",
  "With you, need star 💕 🎨",
  "I love you endlessly 🔥",
  "Forever adore you, my light 🌟 🌟",
  "Forever dream of you, my muse 😘 🎶 🌹",
  "Our home is endless 🥰 🥰",
  "You are the destiny to my destiny 🌹 ✨",
  "Forever need you, my adventure 🗺️ 🏡 🌟",
  "I can't treasure without your heart 🌙 😘 💕",
  "You are the muse to my muse 🌹 😘",
  "You are the refuge to my refuge 🔥",
  "Your light crave my light 🌙 💞 ❤️",
  "You make me need endless 🗺️ 💖 🌟",
  "You make me adore radiant 🥰 🌙",
  "With you, dream of light 🔥 🔥 💓",
  "Every soul with you is passionate 🌙 🌟 💖",
  "You make me worship beautiful 🎶 😘 🗺️",
  "Every heart with you is wild 💞 ✨ 🎶",
  "You are the world to my world 💕",
  "Forever worship you, my anchor 🔥 🔥",
  "With you, embrace heart 💞 🌙 🌙",
  "Your light crave my light 🥰",
  "I dream of you fiercely 💞",
  "Every muse with you is beautiful 🎨 💖 💕",
  "Every light with you is passionate 🔥 💕 🌟",
  "Every adventure with you is unbreakable 😘 🎨 ⏰",
  "You make me cherish radiant ❤️ 🗺️ 😘",
  "Our destiny is magical 😘 🌟 🗺️",
  "You make me cherish endless 🔥",
  "With you, miss world 🎶",
  "I crave you tenderly 💓 💓",
  "Forever dream of you, my adventure 🌹",
  "You make me love serene 🌟",
  "With you, treasure light 🎶",
  "You make me need eternal 🌙 🌹",
  "I love you infinitely 💖 💞",
  "Forever dream of you, my muse 💓 🎨 💞",
  "With you, cherish heart ❤️",
  "Forever cherish you, my home 🌹 🌟 🥰",
  "I can't adore without your world 🎨",
  "With you, adore anchor 💕",
  "Your flame embrace my flame 🏡",
  "Your adventure love my adventure 🌹",
  "Forever crave you, my love 💞",
  "I crave you gently 🏡",
  "I cherish you eternally 💞",
  "Every refuge with you is wild 💖 🎨 🥰",
  "I can't love without your refuge ⏰ 🥰",
  "Forever love you, my light 🎶",
  "I can't crave without your world ❤️ 💕 🎶",
  "Every muse with you is magical 😘 ❤️",
  "I can't crave without your world 😘",
  "Your home love my home 😘 💞 💞",
  "I cherish you eternally 🎶",
  "I can't adore without your star 🌹 💞 🌟",
  "With you, treasure refuge 😘",
  "I can't embrace without your anchor 😘 🎶 😘",
  "With you, cherish love 😘",
  "With you, love soul 🌹 ✨",
  "You are the home to my home 🌟",
  "You make me cherish serene 🔥",
  "You are my serene refuge 😘 ❤️ 🌹",
  "You make me embrace magical 🎶 ❤️",
  "Your dream adore my dream ✨",
  "I treasure you deeply 🏡",
  "Our muse is irreplaceable 🏡 ❤️",
  "I can't love without your destiny 🔥 🏡",
  "Our love is sweet 🎶 💖",
  "Your star need my star 🎶 💞 🔥",
  "I can't adore without your muse ⏰ ❤️ 🌙",
  "You are my magical love ⏰",
  "Your home treasure my home ⏰ 😘",
  "I can't dream of without your heart 🌟 🌙",
  "I can't dream of without your dream 💓 🥰",
  "I can't need without your soul 🌹 ⏰ 🌙",
  "You are the star to my star 🥰",
  "Your muse miss my muse ⏰ 🏡 💖",
  "You are the muse to my muse 🏡 🥰",
  "Every home with you is endless 💞 ⏰ 🗺️",
  "Our anchor is beautiful 💕 🥰",
  "You make me embrace sweet 💞 🎨",
  "I can't worship without your soul 😘",
  "You make me love eternal ⏰",
  "With you, cherish home 🎨",
  "Our adventure is wild 🗺️ 🌟 🎨",
  "You make me worship wild 🥰",
  "You are my sweet love 🌟 💓 😘",
  "I can't dream of without your adventure ⏰ ✨",
  "Forever love you, my star 🗺️",
  "I miss you fiercely 💖 💓 🎶",
  "Forever adore you, my love 💖 🎨",
  "You are my passionate home 🎶 🎨",
  "Forever crave you, my world 🌟 🎨",
  "I can't miss without your soul 🎨 🎨",
  "Forever embrace you, my muse 🌹",
  "You make me dream of wild 💖 💞",
  "Every adventure with you is passionate 🔥 ✨",
  "I adore you fiercely 🏡",
  "You make me miss unbreakable 🥰",
  "You are my beautiful refuge 🏡",
  "Forever treasure you, my love 🔥",
  "You are my sweet home 💕 💕",
  "With you, dream of refuge 😘",
  "I can't cherish without your light 💖",
  "I can't crave without your muse ⏰",
  "With you, dream of song 🎨",
  "Every love with you is wild 😘",
  "Your song miss my song 😘",
  "Every destiny with you is sweet 💕",
  "With you, treasure soul 🌙",
  "Forever dream of you, my soul 🗺️ 🌟 🔥",
  "You are my precious star 😘 🌹",
  "I can't worship without your flame 🌹",
  "I need you fiercely 🌹 🌙",
  "You are my gentle world 🌟 🎨 🌙",
  "Every love with you is beautiful 💕 🌙",
  "You are my serene love 🌙",
  "I can't crave without your world 🌹 🎶 🏡",
  "Your dream treasure my dream ❤️ 🎶",
  "Our heart is irreplaceable 🌙",
  "With you, worship muse 😘",
  "I can't cherish without your heart 🏡 🌟 ⏰",
  "Forever embrace you, my destiny 💓 💕",
  "Every soul with you is gentle 🌹 🌹",
  "I can't love without your soul ❤️",
  "Our anchor is eternal 🔥 💞",
  "Forever cherish you, my dream ❤️",
  "I can't cherish without your love 🏡 😘",
  "I miss you wildly ❤️",
  "You make me worship passionate 🌹 🏡",
  "With you, cherish light 🔥 ⏰",
  "You are the dream to my dream 💓",
  "I miss you gently ✨",
  "You are the light to my light 🎨",
  "I can't crave without your song ✨ 🌟",
  "I can't embrace without your love 🌟 🎨",
  "I crave you endlessly 🎶",
  "I worship you more each day 😘 🎨 🥰",
  "You are my gentle home 💞",
  "With you, cherish refuge 🌹 ❤️",
  "Forever love you, my song 🏡 ⏰ ❤️",
  "With you, need muse ✨ 💖 🏡",
  "You make me need irreplaceable 💞 💓 💕",
  "Forever need you, my star 💕 💕",
  "Your anchor love my anchor 🏡 🌟",
  "I need you passionately 💖 💓",
  "I can't treasure without your dream 💞 😘",
  "I can't miss without your anchor 😘 🥰",
  "Your adventure dream of my adventure 🌙",
  "You are my wild world 💞 💞 💞",
  "I embrace you infinitely 💖 ⏰",
  "Your flame crave my flame 🌙 🌟 💖",
  "You are the love to my love 🌹 🌟 😘",
  "Your flame worship my flame 🌟",
  "Your dream need my dream 💕",
  "Your world dream of my world 🎶 💓 ✨",
  "Forever crave you, my anchor 🌟 😘",
  "You make me worship irreplaceable 🎶",
  "I miss you gently 🏡 🌹",
  "You make me need unbreakable 💞",
  "You are the world to my world 🎨 🌙 🎨",
  "I can't crave without your light 🌹",
  "Every anchor with you is irreplaceable ✨",
  "With you, treasure light 💕",
  "Every destiny with you is serene 🏡 💓 🏡",
  "You are the song to my song 💞 🏡",
  "Every heart with you is tender 💕",
  "I treasure you tenderly 💖",
  "With you, cherish soul 💓",
  "I embrace you fiercely 💖 🥰",
  "You are my tender soul 🎶 💞 🎶",
  "I crave you fiercely 🎨",
  "Our dream is unbreakable ⏰ 🎶",
  "You make me need serene 🏡 ✨ 🔥",
  "You are my tender heart 🌙 🌹 🎶",
  "I can't dream of without your anchor 🗺️ 🌹 💓",
  "With you, miss world 🗺️ 🎨 🎶",
  "Our adventure is endless 🔥 💖",
  "Your flame need my flame 🔥 ⏰ 💞",
  "With you, need muse 🌹 💕 😘",
  "I can't crave without your flame 💖 🗺️ 💞",
  "Our flame is wild ✨",
  "I worship you endlessly 🎶",
  "Every light with you is precious ❤️ 🌹 🔥",
  "I can't treasure without your soul ❤️ 💞 🎨",
  "You are the flame to my flame ⏰ 🗺️ 💕",
  "I can't miss without your dream ⏰ 🎨",
  "With you, love adventure ⏰ 💞",
  "I can't embrace without your flame 🏡 💞 ✨",
  "Your muse worship my muse 🎨 🌙 🌙",
  "You are my precious love 😘 🎨",
  "Your home cherish my home 🔥",
  "Our flame is passionate 🔥",
  "You are my unbreakable refuge 🌹 💖",
  "You are the adventure to my adventure 🌹 ⏰",
  "With you, crave home 🔥 ❤️",
  "Your star love my star 💞",
  "I need you more each day ✨ 🏡 💕",
  "You are the star to my star 💕 💖",
  "Our home is serene ⏰ 💕",
  "Your heart miss my heart 🎨",
  "Forever worship you, my refuge 🌹",
  "I can't embrace without your soul 🔥 🌟 🎨",
  "You are the light to my light 🌹 💖 🗺️",
  "You are the anchor to my anchor 🎨",
  "Every world with you is gentle 🔥 🗺️",
  "Every heart with you is tender 🌹 💞 🔥",
  "Forever need you, my anchor 🌹 🗺️",
  "You are my eternal flame ❤️",
  "You make me treasure fierce 😘 🎨",
  "I can't dream of without your adventure 🔥 🎨",
  "With you, cherish love 🎶 🎨 ⏰",
  "You are my gentle anchor ⏰ 🌹",
  "You make me dream of gentle ⏰ ❤️ 🥰",
  "Your refuge cherish my refuge 🏡 🌟",
  "You are my unbreakable heart 🌹 😘",
  "You make me miss fierce 🌟",
  "You are my wild heart 🥰 🥰",
  "Every star with you is fierce 🌟",
  "With you, treasure star 💕 ✨",
  "Forever crave you, my soul 🗺️ 🎨 🎶",
  "You are my unbreakable destiny 🌟 🏡 💕",
  "With you, embrace anchor 😘 💕 ⏰",
  "Your soul need my soul 🎨 💖",
  "I need you passionately ❤️ 😘 🏡",
  "You are the soul to my soul 💓 🌙",
  "With you, crave anchor 💞 🔥 😘",
  "You are the song to my song 🏡",
  "Our song is irreplaceable 😘",
  "Every flame with you is endless 🎨 🌙",
  "With you, worship light 🗺️ 🎨 💓",
  "Forever treasure you, my refuge 🏡",
  "I can't embrace without your destiny 🎨 🔥 🌟",
  "You are my passionate home 🔥 😘",
  "I worship you infinitely 🎨 ❤️",
  "You are the love to my love 🎨 💖",
  "I cherish you fiercely ⏰ ❤️ 💓",
  "Our soul is eternal 🌹 ❤️ 🌟",
  "Your heart miss my heart ✨ 🌙",
  "I dream of you tenderly 💖 ✨",
  "Every refuge with you is sweet 🌹 🌟",
  "Every light with you is irreplaceable 🌹 💞 🎶",
  "I miss you more each day ✨",
  "Every love with you is fierce 🏡 🥰 🌹",
  "Your heart miss my heart 🎶 ✨",
  "Our song is serene 🌟 🔥",
  "With you, treasure refuge 🎨 🎨 ✨",
  "I miss you endlessly 💓 😘",
  "I can't crave without your world 💖",
  "Your world need my world 💕 🎶 💕",
  "I can't dream of without your soul 💞 🌹",
  "You are the refuge to my refuge 💓",
  "Forever need you, my star 🎨 ❤️ ❤️",
  "You are my radiant heart 🏡 💞 ✨",
  "With you, dream of destiny 💓 🗺️ 🌙",
  "I can't dream of without your world 💞",
  "You make me adore unbreakable 🌙 🔥 ✨",
  "With you, crave song 🔥",
  "Forever love you, my song 🌟 🥰 🌟",
  "Your light miss my light 🏡",
  "I can't embrace without your flame 🗺️ ✨",
  "You are the world to my world 💓 ⏰ 💕",
  "Our light is gentle 🏡",
  "Every dream with you is unbreakable 🏡",
  "I worship you eternally 🏡 🌙",
  "You make me need precious ✨",
  "You are my passionate flame 🗺️ ✨ ✨",
  "You are my eternal heart 🗺️ 🎨",
  "You are the destiny to my destiny 🎶 🗺️",
  "You are the destiny to my destiny ✨",
  "Your adventure crave my adventure 💖 🏡 🌟",
  "You are my eternal destiny 💞",
  "Every soul with you is unbreakable 🏡 🌟",
  "I dream of you passionately 💞",
  "Every love with you is gentle 💕",
  "Your dream love my dream 🔥",
  "Your flame embrace my flame 💖 ⏰ 😘",
  "Your heart cherish my heart ✨ 🌙",
  "Forever adore you, my dream 💓 😘",
  "With you, worship anchor 🥰 😘",
  "You make me worship irreplaceable 🥰 ✨",
  "I can't miss without your adventure 🗺️ 🌟 💞",
  "Your anchor miss my anchor 🌹",
  "Our home is wild 🌙",
  "You are the light to my light 😘",
  "Your refuge need my refuge 🌹 🥰",
  "Our home is wild 🔥 💓 🏡",
  "I can't embrace without your heart ⏰ 🌟 🏡",
  "I cherish you more each day 🔥",
  "You are the adventure to my adventure 🌙 🌙 🎶",
  "You are the love to my love 💕 🌙 🌟",
  "I adore you tenderly ⏰",
  "Your love embrace my love 💖 ✨",
  "I need you wildly 🏡 🏡",
  "Our dream is eternal 🎨 ✨ 🎶",
  "Your anchor dream of my anchor ⏰ 💕 ✨",
  "Our soul is magical ✨",
  "With you, embrace anchor 💖 💖",
  "Your dream dream of my dream 💖 ⏰ 💕",
  "You are the refuge to my refuge 💖",
  "You are my precious love 🎶 🏡 ⏰",
  "Your flame worship my flame 🎨 🎶",
  "I can't need without your refuge ⏰ 🔥 🏡",
  "I can't crave without your world ✨",
  "Your light dream of my light ✨ 💖",
  "Forever adore you, my home ⏰",
  "Forever cherish you, my anchor 🔥 🌙",
  "You are the love to my love 🏡 😘",
  "Our love is precious 😘",
  "Forever embrace you, my adventure 🎶 ⏰ 🎨",
  "With you, need home 💕 💕 🎶",
  "You make me treasure magical 🗺️ 🗺️",
  "I love you tenderly ❤️",
  "Our flame is precious 🌟 🥰 🎶",
  "Your home worship my home 💕 🎶 🔥",
  "I can't cherish without your adventure 💖 🏡 🌹",
  "I miss you tenderly 💕 🌹 ⏰",
  "Your world need my world 🎨",
  "You make me embrace precious ✨ ⏰",
  "Your star need my star 🎨 💖 😘",
  "Forever miss you, my muse ✨",
  "You are my beautiful light ⏰ 🔥",
  "Your song cherish my song 🌙 ⏰ 💞",
  "You are my magical anchor 😘",
  "With you, love muse ✨",
  "You make me cherish tender 🗺️ 🎨",
  "You make me dream of gentle 🏡 🥰 🎨",
  "Our soul is serene 💕",
  "You make me adore tender 🎨",
  "Forever dream of you, my song 🌟",
  "I can't love without your flame 🎨",
  "Every soul with you is magical 💕",
  "You are my passionate destiny ⏰ 🔥 💖",
  "Every song with you is irreplaceable 🌙 💓",
  "I can't worship without your song 🥰 🥰 🎶",
  "I worship you endlessly ⏰ 💞",
  "You are my radiant flame 🌙 💕",
  "I can't need without your world 💓 💓",
  "With you, miss heart 🥰 💖",
  "You are the heart to my heart 💕 ❤️ 🌹",
  "You are the refuge to my refuge 🎶 💖",
  "You make me worship tender ✨ ❤️ ❤️",
  "I can't miss without your world 🌙 ❤️ 🌹",
  "Your refuge adore my refuge 💖 🗺️ 🥰",
  "You are the refuge to my refuge 🔥 ❤️",
  "You make me dream of beautiful 💞",
  "Forever embrace you, my flame 😘",
  "I love you infinitely 🔥 💕 🌟",
  "I treasure you eternally 💞 ✨ 🔥",
  "Every anchor with you is unbreakable 🌙",
  "I can't adore without your home 🌙 🏡",
  "Our heart is serene 🌙 🌟 ⏰",
  "I can't adore without your world 🌙 🌙",
  "You are my wild destiny ❤️",
  "Forever miss you, my love ❤️",
  "I adore you deeply ⏰",
  "Your star adore my star 🗺️ ✨ 🗺️",
  "Every star with you is tender 🔥 ⏰ 💓",
  "Our home is wild 🎶",
  "Every dream with you is passionate 💕 🔥 🌙",
  "Your flame cherish my flame 🌹",
  "With you, love song 💞",
  "Forever adore you, my light ⏰",
  "I can't cherish without your home 🗺️ 🎨",
  "Forever need you, my destiny 🏡 ⏰ ❤️",
  "Forever treasure you, my home 💞",
  "You are the heart to my heart 🏡",
  "Every song with you is passionate 🏡 💞",
  "Forever worship you, my love 🎨 🎶 ✨",
  "Every home with you is passionate 💕 💕 ✨",
  "I can't worship without your destiny ✨",
  "Every refuge with you is gentle 💕",
  "I can't adore without your heart 🎶 🌟",
  "Our home is gentle 🎶 💞",
  "I cherish you fiercely 🎨",
  "I dream of you more each day 🌟",
  "You are my tender dream 🥰",
  "I can't need without your love 🌙",
  "I cherish you fiercely 💓 ✨",
  "Our adventure is unbreakable 😘",
  "You are my tender heart 🌹",
  "You are the anchor to my anchor 🔥 🥰",
  "Your dream crave my dream 🎶 🗺️",
  "You make me crave gentle 🎶",
  "I need you tenderly 🥰 ✨",
  "I miss you more each day ⏰ 🎨 🌹",
  "Our refuge is unbreakable 😘 🗺️ 🥰",
  "With you, embrace dream 🔥 💕 💖",
  "You make me worship beautiful 🎶",
  "I love you tenderly ✨ 🎶 💞",
  "Every song with you is unbreakable 🏡",
  "You are my sweet refuge ❤️",
  "Your muse cherish my muse ⏰ 🥰",
  "You make me treasure eternal 🏡",
  "With you, adore flame 🎶 🎨",
  "With you, need light 🌙 🌙",
  "Every soul with you is gentle 💞 ✨ 🎶",
  "Your world dream of my world 🎨 🎶",
  "You make me cherish beautiful 🥰",
  "With you, miss adventure 🌟 💓",
  "Forever dream of you, my muse ❤️ 🥰 🌙",
  "With you, treasure muse 💖 💕",
  "You are my fierce love 🏡 💓",
  "I need you gently 💕 🌙 🌹",
  "Your love adore my love 💖",
  "I can't miss without your soul ✨ 😘",
  "Our dream is magical ⏰ 💖",
  "You are the light to my light 🏡 🗺️",
  "You are my radiant flame ✨ 😘 💕",
  "I can't treasure without your anchor 🌟 🏡 🎶",
  "Our destiny is radiant ⏰",
  "Your muse worship my muse 🎶",
  "Your light need my light 😘 🗺️ 💖",
  "I can't crave without your muse ✨",
  "Forever worship you, my refuge 🌹 💖",
  "You are the muse to my muse ✨ 🥰 😘",
  "You make me treasure wild 🔥",
  "I need you fiercely 🥰 🥰",
  "I can't worship without your destiny 💓 ❤️ 🏡",
  "Your world love my world 🌹 ✨ 💓",
  "You are the light to my light ✨ 💖 ✨",
  "You are the destiny to my destiny 😘",
  "Your flame love my flame 💓",
  "You make me embrace tender ❤️ 🏡 🌟",
  "You are my fierce light 🥰",
  "Every adventure with you is radiant ❤️",
  "I adore you deeply 💖 🥰 🏡",
  "Forever crave you, my love 💖",
  "You are the star to my star 🥰 ❤️ ✨",
  "I embrace you more each day 🌟",
  "Forever adore you, my anchor 🎨 💓 🎶",
  "I can't dream of without your world 🔥",
  "You are my tender dream 💕 🥰",
  "You are the love to my love 🎨",
  "You are the adventure to my adventure 🌹 ✨",
  "Forever adore you, my destiny 😘",
  "I adore you tenderly 🌟 🥰 🎶",
  "I love you tenderly 🥰",
  "Forever crave you, my adventure 🏡 🔥 🌟",
  "I can't adore without your star 🎶",
  "You make me love passionate 🌙",
  "You are my radiant flame ❤️ ⏰ 🌹",
  "You are my wild destiny 🌙",
  "Our dream is radiant 😘 💕",
  "With you, need home ❤️",
  "You are my radiant dream 😘 🎶",
  "Forever crave you, my heart 🔥 🎨 🥰",
  "You are my magical song ⏰",
  "I can't love without your love 💞 🌟 💕",
  "Our refuge is beautiful 🎨 🗺️ 💓",
  "I dream of you endlessly 🌙 ❤️",
  "You are the heart to my heart 🗺️ 🎨",
  "Forever embrace you, my muse 💓",
  "Every refuge with you is sweet 💞",
  "With you, cherish dream 🔥 🏡 🎨",
  "You are my fierce love 🎨 😘 🏡",
  "Every refuge with you is eternal 🌹 🎶 🎨",
  "You are the anchor to my anchor 💞",
  "You make me embrace radiant ⏰ ❤️ 💖",
  "Your love adore my love 🔥 😘",
  "With you, worship world 🗺️ 🥰",
  "With you, embrace destiny 💞 💞 ❤️",
  "Our anchor is passionate ⏰ 😘 💞",
  "Every heart with you is tender 🎨",
  "Forever crave you, my light 🎨",
  "With you, love star 🌙",
  "You are the adventure to my adventure 🌟",
  "Our muse is unbreakable 💖 💖",
  "Our refuge is magical 💞 🎶 🎶",
  "You are my gentle light 🏡 💓",
  "You make me embrace radiant 🎶 💖 ⏰",
  "With you, cherish soul 🎶",
  "You make me dream of passionate 💖 🎶",
  "I can't miss without your dream 🌙",
  "Every soul with you is tender 🗺️ 💓 🥰",
  "You make me dream of precious ✨ ⏰ 😘",
  "I can't treasure without your refuge ✨",
  "Every refuge with you is tender 🔥",
  "Your heart dream of my heart 💖 😘 🌹",
  "You are my magical love ❤️ 😘 🌙",
  "Every adventure with you is eternal 🔥 🗺️",
  "You are my magical home 🎨 ✨",
  "Your refuge need my refuge 😘 🌹",
  "Our dream is unbreakable ❤️",
  "I need you endlessly 🔥 🗺️",
  "Forever crave you, my light 🏡 ❤️",
  "You are the dream to my dream 😘",
  "You are my gentle star ❤️ ❤️",
  "I can't love without your light 🌟",
  "You are my wild dream 💓",
];

const scene = document.getElementById("scene");
const heartBtn = document.getElementById("heartBtn");
const musicPlayer = document.getElementById("musicPlayer");
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const floatingHeartsContainer = document.getElementById("floatingHearts");
const counterEl = document.getElementById("counter");

const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

let isProcessing = false;
let firstClick = true;
let isPlaying = false;
let pressCount = 0;

// Create floating hearts on load
function initFloatingHearts() {
  const numHearts = 30;
  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.textContent = "❤️";
    heart.style.setProperty("--left", `${Math.random() * 100}%`);
    heart.style.setProperty("--duration", `${rand(10, 20)}s`);
    heart.style.setProperty("--delay", `-${Math.random() * 20}s`);
    heart.style.setProperty("--rot", `${rand(-45, 45)}deg`);
    heart.style.setProperty("--size", `${rand(15, 30)}px`);
    floatingHeartsContainer.appendChild(heart);
  }
}

initFloatingHearts();

function triggerRelease(e) {
  if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") {
    return;
  }
  e.preventDefault();

  if (isProcessing) return;
  isProcessing = true;

  // Start music on first click
  if (firstClick) {
    activateMusic();
    firstClick = false;
  }

  releasePhrase();

  setTimeout(() => {
    isProcessing = false;
  }, 300);
}

function activateMusic() {
  musicPlayer.classList.add("active");
  audioPlayer
    .play()
    .then(() => {
      isPlaying = true;
      showPauseIcon();
    })
    .catch((e) => {
      console.log("Error playing audio:", e);
    });
}

function showPlayIcon() {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
}

function showPauseIcon() {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
}

function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    showPlayIcon();
    isPlaying = false;
  } else {
    audioPlayer
      .play()
      .then(() => {
        showPauseIcon();
        isPlaying = true;
      })
      .catch((e) => {
        console.log("Error playing audio:", e);
      });
  }
}

function updateProgress() {
  if (audioPlayer.duration) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = progress + "%";

    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins + ":" + (secs < 10 ? "0" : "") + secs;
}

function seekAudio(e) {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const newTime = (clickX / rect.width) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
}

heartBtn.addEventListener("click", triggerRelease);
heartBtn.addEventListener("keydown", triggerRelease);
playPauseBtn.addEventListener("click", togglePlayPause);
progressBar.addEventListener("click", seekAudio);
audioPlayer.addEventListener("timeupdate", updateProgress);
audioPlayer.addEventListener("loadedmetadata", updateProgress);

function releasePhrase() {
  pressCount++;
  counterEl.textContent = `Hearts Pressed: ${pressCount}`;

  heartBtn.classList.add("clicked");
  setTimeout(() => heartBtn.classList.remove("clicked"), 700);

  createParticlesBurst();
  createConfettiBurst();
  createPhrase();
}

function createPhrase() {
  const phraseText = PHRASES[Math.floor(Math.random() * PHRASES.length)];
  const el = document.createElement("div");
  el.className = "phrase shooting";
  el.textContent = phraseText;

  const heartRect = heartBtn.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();

  const startX = heartRect.left + heartRect.width / 2 - sceneRect.left;
  const startY = heartRect.top + heartRect.height / 2 - sceneRect.top;

  el.style.left = startX + "px";
  el.style.top = startY + "px";

  // Add random color variation for impressiveness
  const hue = rand(320, 360);
  el.style.color = `hsl(${hue}, 80%, 80%)`;

  const angle = Math.random() * 120 - 150;
  const shootForce = rand(150, 230);
  const shootX = Math.cos((angle * Math.PI) / 180) * shootForce;
  const shootY = Math.sin((angle * Math.PI) / 180) * shootForce;

  const fallDistance = rand(250, 450);
  const horizontalDrift = rand(-120, 120);
  const finalX = shootX + horizontalDrift;
  const finalY = shootY + fallDistance;

  const initialRotation = rand(-20, 20);
  const finalRotation = initialRotation + rand(-40, 40);
  const duration = rand(4.5, 6.5);

  el.style.setProperty("--shoot-x", shootX + "px");
  el.style.setProperty("--shoot-y", shootY + "px");
  el.style.setProperty("--final-x", finalX + "px");
  el.style.setProperty("--final-y", finalY + "px");
  el.style.setProperty("--rotation", initialRotation + "deg");
  el.style.setProperty("--final-rotation", finalRotation + "deg");
  el.style.setProperty("--duration", duration + "s");

  scene.appendChild(el);
  el.addEventListener("animationend", () => el.remove(), { once: true });
}

function createParticlesBurst() {
  const heartRect = heartBtn.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();
  const centerX = heartRect.left + heartRect.width / 2 - sceneRect.left;
  const centerY = heartRect.top + heartRect.height / 2 - sceneRect.top;

  const particleCount = rand(12, 18);
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle burst";

    particle.style.left = centerX + "px";
    particle.style.top = centerY + "px";

    const angle = Math.random() * 360;
    const distance = rand(60, 100);
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;

    particle.style.setProperty("--particle-x", x + "px");
    particle.style.setProperty("--particle-y", y + "px");

    scene.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), {
      once: true,
    });
  }
}

function createConfettiBurst() {
  const heartRect = heartBtn.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();
  const centerX = heartRect.left + heartRect.width / 2 - sceneRect.left;
  const centerY = heartRect.top + heartRect.height / 2 - sceneRect.top;

  const confettiCount = rand(15, 25);
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = centerX + "px";
    confetti.style.top = centerY + "px";

    const colors = ["#ff2b4f", "#ffd6e7", "#ff5f7a", "#ff87a0"];
    confetti.style.setProperty(
      "--color",
      colors[Math.floor(Math.random() * colors.length)]
    );
    confetti.style.setProperty("--size", `${rand(4, 8)}px`);

    const angle = Math.random() * 360;
    const distance = rand(100, 200);
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;
    const rot = rand(-720, 720);

    confetti.style.setProperty("--conf-x", x + "px");
    confetti.style.setProperty("--conf-y", y + "px");
    confetti.style.setProperty("--rot", rot + "deg");
    confetti.style.setProperty("--duration", `${rand(1.2, 2)}s`);

    scene.appendChild(confetti);
    confetti.addEventListener("animationend", () => confetti.remove(), {
      once: true,
    });
  }
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}
