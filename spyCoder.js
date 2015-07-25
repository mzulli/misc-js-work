// encode or decode the string
//
// sample string: ("encode: the big brown bear")
// 
// first word of input will be "encode" or "decode"
//
// to encode: replace any of the six most common letters in english lang
// with the next most common. ie, replace 'e' with 't', 'a' with 'o'.
// 'n' gets replaced with 'e'.
//
// most common letters are, in order: e, t, a, o, i, n
//
// decoding is the reverse procedure. ie, replace 't' with 'e', 'i' with 'o', 
// 'e' with 'n'.

function spyCoder(input) {
    // set up arrays of most common letters and replacements
    var common = ['e', 't', 'a', 'o', 'i', 'n'];
    var encode = ['t', 'a', 'o', 'i', 'n', 'e'];
    var decode = ['n', 'e', 't', 'a', 'o', 'i'];
    var process;
    
    // capture the string to be processed
    var text = input.slice(8).split('');
    
    // decide whether to encode or decode
    if (input.charAt(0) === 'e') process = encode;
    else process = decode;
    
    // loop through text
    for (var i = 0; i < text.length; i++) {
        // loop through common letters
        for (var j = 0; j < common.length; j++) {
            if (text[i] === common[j]) {
                text[i] = process[j];
                break;
            } // if
        } // j loop
    } // i loop
    
    return(text.join(''));
}

spyCoder("encode: the big brown bear"); // aht bng briwe btor
spyCoder("decode: aht bng briwe btor"); // the big brown bear
