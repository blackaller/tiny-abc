var content;
var paragraphs = text.split("\n");

/*
 * Add a shuffle function to Array object prototype
 * Usage : 
 *  var tmpArray = ["a", "b", "c", "d", "e"];
 *  tmpArray.shuffle();
 */
Array.prototype.shuffle = function (){
    var i = this.length, j, temp;
    if ( i == 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};

init();
function init() {
	content = document.createElement( 'div' );
	content.style.width = "920px";
	content.style.margin = "auto";
	content.innerHTML = '<h3>Escritura Descompuesta por Luis Blackaller</h3>';
	paragraphs.forEach ( function ( paragraph ){
		var p = document.createElement( 'p' );
    	content.appendChild( p );
    	p.innerText = paragraph;
    	p.innerText = scramble(paragraph, "sentences");
    	//p.innerText = sort(paragraph, "sentences");
    	console.log( "CHARACTERS: " + p.innerText.length + " — WORDS: " + p.innerText.split(" ").length );
	});
	document.body.appendChild( content );
	console.log( "CHARACTERS:" + content.innerText.length + " — WORDS: " + content.innerText.split(" ").length );
}

function scramble( text, element) {
	//case on characters, words, sentences, paragraphs
	switch ( element ) {
	    case "characters":

	        break;
	    case "words":
	    	var temp = text.split(" ");
	    	temp.shuffle();
	    	console.log(temp);
	    	text = "";
	    	temp.forEach ( function ( word ){
	    		text = text + word + " ";
	    	});
	    	return(text);
	        break;
	    case "sentences":
	    	var temp = text.split(". ");
			temp.shuffle();
	    	console.log(temp);
	    	text = "";
	    	temp.forEach ( function ( sentence ){
	    		text = text + sentence + ". ";
	    	});
	    	return(text);
	        break;
	    case "paragraphs":
	    	var temp = text.split("\n");
	    	temp.shuffle();
	    	console.log(temp);
	        break;
	}
}

function reverse( text, element) {
	//case on characters, words, sentences, paragraphs
	switch ( element ) {
	    case "characters":

	        break;
	    case "words":
	    	var temp = text.split(" ");
	    	temp.reverse();
	    	console.log(temp);
	    	text = "";
	    	temp.forEach ( function ( word ){
	    		text = text + word + " ";
	    	});
	    	return(text);
	        break;
	    case "sentences":
	    	var temp = text.split(". ");
			temp.reverse();
	    	console.log(temp);
	    	text = "";
	    	temp.forEach ( function ( sentence ){
	    		text = text + sentence + ". ";
	    	});
	    	return(text);
	        break;
	    case "paragraphs":
	    	var temp = text.split("\n");
	    	temp.reverse();
	    	console.log(temp);
	        break;
	}
}

function sort( text, element) {
	//case on characters, words, sentences, paragraphs
	switch ( element ) {
		case "characters":

	        break;
	    case "words":
	    	var temp = text.split(" ");
	    	temp.sort();
	    	console.log(temp);
	    	text = "";
	    	temp.forEach ( function ( word ){
	    		text = text + word + " ";
	    	});
	    	return(text);
	        break;
	    case "sentences":
	    	var temp = text.split(". ");
			temp.sort();
	    	console.log(temp);
	    	text = "";
	    	temp.forEach ( function ( sentence ){
	    		text = text + sentence + ". ";
	    	});
	    	return(text);
	        break;
	    case "paragraphs":
	    	var temp = text.split("\n");
	    	temp.sort();
	    	console.log(temp);
	        break;
	}
}