var obj = {
  adjTimeplace: [
    'Moist ',
    'Disturbing ',
    'Stoic ',
		'Trembling ',
    'Luscious ',
		'Transparent '
  ],
  timeplace: [
    'garden.',
    'misty mountain.',
    'bathroom floor.',
    'endless sky.',
		'tree.',
		'mushroom.'
  ],
  adjective: [
    ' Bulging',
    ' Hairy',
    ' Fluffy',
		' Precious',
		' Exploding',
		' Moist'
		],
	noun: [
		' liver.',
		' legs.',
		' eyes.',
		' tongue.',
		' bosom.',
		' hands.'
	],
	noun2: [
		' Hungry',
		' Endless',
		' Curvey',
		' Deep',
		' Disturbing ',
		' Irresistable'
		],
	verb: [
		' touch.',
		' belly-button.',
		' love.',
		' embrace.',
		' magnetism.',
		' kiss.'
	],
	abstract:[
		' Longing.',
		' Serendipity.',
		' Excitement.',
		' Eternity.',
		' Expansion.',
		' Confusion.'
  ]
}

function randomizeText(part) {
	//I cannot use .part here because it is dynamic value, []can always be used
  var text = obj[part][Math.floor(Math.random() * obj[part].length)];
	//concatinating two strings with a plus. This should work too: `.haiku__${part}`
  document.querySelector('.haiku__' + part).innerHTML = text;
};

function createHaiku() {
  var generateAdjTimeplace = setInterval(function() { randomizeText('adjTimeplace') }, 100);
  setTimeout(function() {
    clearInterval(generateAdjTimeplace);
    var generateTimeplace = setInterval(function() { randomizeText('timeplace') }, 100);
    setTimeout(function() {
      clearInterval(generateTimeplace);
      var generateAdjective = setInterval(function() { randomizeText('adjective') }, 100);
      setTimeout(function() {
        clearInterval(generateAdjective);
				var generateNoun = setInterval(function() { randomizeText('noun') }, 100);
        setTimeout(function() {
          clearInterval(generateNoun);
					var generateNoun2 = setInterval(function() { randomizeText('noun2') }, 100);
          setTimeout(function() {
            clearInterval(generateNoun2);
						var generateVerb = setInterval(function() { randomizeText('verb') }, 100);
            setTimeout(function() {
              clearInterval(generateVerb);
							var generateAbstract = setInterval(function() { randomizeText('abstract') }, 100);
              setTimeout(function() {
                clearInterval(generateAbstract);
							}, 400);
						}, 400);
					}, 400);
				}, 400);
      }, 400);
    }, 400);
  }, 400);
};

createHaiku();