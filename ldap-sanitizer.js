'use strict';

let ldapSanitizer = Object.create(null);

ldapSanitizer.escapeDN = function(str){
    let res = '',
        len = str.length;

    // RFC states that leading # or space characters must be escaped with a backslash
    // http://www.faqs.org/rfcs/rfc2253.html
    if(str.length > 0 && (str.charAt(0) == ' ' || str.charAt(0) == '#')){
        res += '\\'; // Add leading backslash if needed
    }

    for(let i = 0; i < len; i++){
        let cur = str[i];
        // RFC escape chars: , + " \ < > ;
        switch(cur){
            case ',':
                res += '\\,';
                break;
            case '+':
                res += '\\+';
                break;
            case '"':
                res += '\\"';
                break;
            case '\\':
                res += '\\\\';
                break;
            case '<':
                res += '\\<';
                break;
            case '>':
                res += '\\>';
                break;
            case ';':
                res += '\\;';
                break;
            default:
                res += cur;
        }
    }

    // Escape trailing space
    if(res.length > 1 && res.charAt(res.length - 1) == ' '){
        res = res.slice(0, res.length - 1) + '\\ ';
    }

    return res;
}

ldapSanitizer.escapeQuery = function(str){
    let res = '',
        len = str.length;

    for(let i = 0; i < len; i++){
        let cur = str[i];

        switch(cur){
            case '*':
                res += '\\2A';
                break;
            case '(':
                res += '\\28';
                break;
            case ')':
                res += '\\29';
                break;
            case '\\':
                res += '\\5C';
                break;
            case '/':
                res += '\\2F';
                break;
            case '\u0000': // Null
                res += '\\00';
                break;
            default:
                res += cur;
        }
    }
    return res;
}

module.exports = ldapSanitizer;
