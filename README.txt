Tehnologiile folosite pentru implementarea proiectului:
-frontend: React, html, css
-backend: JavaScript(impreuna cu Express), MongoDB, Mongoose si Postman(pentru tesatre API)


FRONTEND:


TASK1:
 -navbar cu butoanele de 'Logare' si 'Creare Cont', precum si logo-ul in partea stanga a navbar-ului. 
 -am folosit local storage pentru a afisa butoanele 'Logare' si 'Creare Cont' atunci cand user-ul este logat, iar atunci cand acesta nu este logat, sa apara butonul 'Delogare'
 -navbar-ul ramane in pagina atunci cand userul da scroll

TASK2:
 -Landing Page care respecta mock-ul din Figma
 -Butonul 'Upload a meme' functioneaza

TASK3:
 -modale pentru Logare si Creare Cont + shadow effect + X pentru a fi inchise
 -dupa submit se face redirect catre starea de user logat

TASK4:
 -buton 'Upload a meme' functional
 -formularul pentru incarcarea unei imagini functioneaza atat cu drag&drop, cat si cu click&select, insa nu respecta 100% designul din Figma 
 -nu se permite incarcarcarea altor documente, in afara de .png, .jpg, .jpeg, .gif

TASK5:
 -footer care respecta designul
 -butoanele pentru retelele de socializare redirecteaza spre paginile LSAC

Site-ul nu este responsive pentru mobil :(

CUM SE RULEAZA FRONTENDUL:
-aplicatia ruleaza pe portul 3000
-se ruleaza comanda 'npm start'



BACKEND:

TASK1:
 -am realizat DB schema pentru useri si pentru meme-uri

TASK2:
 -am implementat toate operatiile CRUD pentru meme-uri

TASK3:
 -am definit doar endpointul in care se preiau datele necesare pentru crearea unui entry in entitatea User din DB
(mai departe nu mi-am dat exact seama cum ar trebui hash-uita parola in baza de date. am incercat un algoritm de bcrypt dar nu a functionat)

TASK4:
 -am implementat input validation: 
   -pentru email verifica doar sa fie un email valid
   -pentru username si parola verifica exact cerinta
   -pentru descrierea meme-urilor verifica exact cerinta

CUM SE RULEAZA BACKENDUL:

-se intra in folderul cu backend
-se ruleaza comanda 'npm instal -g nodemon'
-se ruleaza comanda 'npm install --save express-validator' (pentru validarea de la task4)
-se ruleaza 'nodemon'
-aplicatia ruleaza pe portul 5000
Pentru a testa functionalitatile se intra in Postman la http://localhost:5000/memes sau http://localhost:5000/user


