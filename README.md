# ldap-sanitizer
Sanitize untrusted user input for LDAP queries


[LDAP v3 RFC on DNs](http://www.faqs.org/rfcs/rfc2253.html)

[LDAP RFC on Search Filters (queries)](http://www.faqs.org/rfcs/rfc4515.html)

---

## OWASP Escape Chars

### DN Escape Chars

https://www.owasp.org/index.php/LDAP_Injection_Prevention_Cheat_Sheet

, \ # + < > ; " =

### Filter Escape Chars

https://www.owasp.org/index.php/Preventing_LDAP_Injection_in_Java

Note: NUL char in JS is \0 or \u0000

\ * ( ) NUL

---

## webappsec.org Escape Chars

http://projects.webappsec.org/w/page/13246947/LDAP%20Injection

### DN Escape Chars

& ! | = < > , + - " ' ;

### Filter Escape Chars

Note: NUL char in JS is \0 or \u0000

( ) \ * / NUL

---

## See Also

http://rlmueller.net/CharactersEscaped.htm

https://blogs.msdn.microsoft.com/securitytools/2010/09/30/antixss-4-0-released/

See section on LDAP encoding changes

---

## Questions

Do the following chars need escaping for user input in DNs?

& ! | = ' -
