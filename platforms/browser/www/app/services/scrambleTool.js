(function () {
    "use strict";
    angular.module('cryptoGriffin').factory('scrambleTool', function () {        

		return {
			getScrambleSettings: function(keytext, alphabetArr){
				var arr = [], arr2 = [], arr3 = [],
					kt = keytext.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]<>0-9\ ]/g,''),
					alphabet = alphabetArr.slice(0);

				for (var i = 0; i < kt.length; i++) {
					if (arr.indexOf(kt.charAt(i)) === -1) {
						arr.push(kt.charAt(i));
					}
				}

				for (var i = 0; i < alphabet.length; i++) {
					if (arr.indexOf(alphabet[i]) === -1) {
						arr.push(alphabet[i]);
					}
				}

				// add unknown letters to alphabet


				for (var i = 0; i < arr.length; i++) {
					if (alphabet.indexOf(arr[i]) === -1) {
						alphabet.push(arr[i]);
					}
				}				

				arr2 = arr.slice(0).reverse();
				arr3 = arr.slice(0).sort(function(a, b) {return a % 2 - b % 2 || a - b;});

				return {
					level1: arr,
					level2: arr2,
					level3: arr3,
					alphabet: alphabet
				};
			},
			encode: function(plainText, model){

                if(plainText){
                    var txt = plainText.toLowerCase(),
                        txt2 = '',
                        txt3 = '',
                        finalTxt = '',
                        alphabet = model.scrambleSettings.alphabet,
                        key1 = model.scrambleSettings.level1,
                        key2 = model.scrambleSettings.level2,
                        key3 = model.scrambleSettings.level3;

                    for(var i=0; i<txt.length; i++){
                        var integer = key1.indexOf(txt.charAt(i));
                        if(integer > -1){
                            txt2 += alphabet[integer]; 
                        }else{
                            txt2 += txt.charAt(i);
                        }
                    }

                    for(var i=0; i<txt2.length; i++){
                        var integer = key2.indexOf(txt2.charAt(i));
                        if(integer > -1){
                            txt3 += key1[(integer + i) % key1.length]; 
                        }else{
                            txt3 += txt2.charAt(i);
                        }
                    }

                    for(var i=0; i<txt3.length; i++){
                        var integer = key3.indexOf(txt3.charAt(i));
                        if(integer > -1){
                            finalTxt += key2[(integer + i) % key2.length]; 
                        }else{
                            finalTxt += txt3.charAt(i);
                        }
                    }
                    
                    return finalTxt;

                }
            },
            decode: function(encodedText, model){

                if(encodedText){
                    var txt = encodedText.toLowerCase(),
                        txt2 = '',
                        txt3 = '',
                        finalTxt = '',
                        alphabet = model.scrambleSettings.alphabet,
                        key1 = model.scrambleSettings.level1,
                        key2 = model.scrambleSettings.level2,
                        key3 = model.scrambleSettings.level3;

                    for(var i=0; i<txt.length; i++){
                        var integer = key2.indexOf(txt.charAt(i));
                        if(integer > -1){
                            txt2 += key3[(integer - i + key2.length) % key3.length]; 
                        }else{
                            txt2 += txt.charAt(i);
                        }
                    }

                    for(var i=0; i<txt2.length; i++){
                        var integer = key1.indexOf(txt2.charAt(i));
                        if(integer > -1){
                            txt3 += key2[(integer - i + key2.length) % key2.length]; 
                        }else{
                            txt3 += txt2.charAt(i);
                        }
                    }

                    for(var i=0; i<txt3.length; i++){
                        var integer = alphabet.indexOf(txt3.charAt(i));
                        if(integer > -1){
                            finalTxt += key1[integer]; 
                        }else{
                            finalTxt += txt3.charAt(i);
                        }
                    }

                    return finalTxt;
                }
            }
		}

    });
})();