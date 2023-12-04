
const express = require("express"); //importowanie modułu express, służacy do aplikacji na stronach internetowych w Node.js
const path = require('path'); //importowanie modułu 'path', który pomaga przy pracy ze ścieżkami plików.

const app = express(); //Uruchomienie modułu express

function authentication(req, res, next) { //Funkcja służąca do autoryzowania użytkownika z dodatkowymi zmiennymi w funkcji (req, res, next), przy inicjowaniu tej funkcji musimy wpisać 3 zmienne bądź wartości w nawiasie, w określone miejsca
    var authheader = req.headers.authorization; //Pobiera nagłówek do zmiennej z żądania HTTP
    console.log(req.headers); // Piszę nagłóki które były wcześniej pobrane z żadań HTTP

    if (!authheader) { //Bierze warunek pod uwagę czy nagłówek autoryzacji istnieje.
        var err = new Error('Nie jesteś uwierzytelniony'); //Informuje o błędzie, jeżeli brakuje nagłówka autoryzacji (przykład walidacji)
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }

    // Sprawdza dane autoryzacyjne czy są poprawne, najpierw je odczytuje
    var auth = Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    if (user == 'Lukasz' && pass == 'Haslo123') { //Jeśli login i hasło są poprawne, przechodzi do kolejnego kroku za pomoca funkcji next()
        next();
    } else { //A jeśli dane są niepoprawne (nie spełniają powyższego warunku), to wyświetli komunikat o takim błędzie, czyli wydarzy się wszystko to co widnieje po else
        var err = new Error('Nie jesteś uwierzytelniony');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
}

app.use(authentication); //Uruchamian funkcję służącą do uwierzytelniania

app.use(express.static(path.join(__dirname, 'public'))); //Tutaj przyda się wcześniej zimportowany moduł path, ponieważ funkcja zajmuje się obsługą plików statycznych z katalogu public, gdzie znajduję się plik index.html


app.listen(3000, () => { //"Nasłuchiwanie" na porcie 3000, czyli kiedy użytkownik wyśle żądanie do tego serwera, to użyje adresu IP i portu 3000, by się skontaktować z serwerem, który "nasłuchuje", czyli inaczej oczekauje na przychodzące żądania na wcześniej podanym porcie. Dodatkowo wyświetla informację w konsoli po uruchomieniu serwera.
    console.log("Serwer jest uruchomiony");
});
