const loginForm = document.getElementById('login-form'); //  Przypisanie zmiennej do wartości w formularzu logowania
const loginButton = document.getElementById('login-form-submit'); //  Przypisanie zmiennej do przycisku logowania
const loginErrorMsg = document.getElementById('login-error-msg'); //  Przypisanie zmiennej do pola informującego o błędzie polegającym na nieprawidłowym haśle lub loginie
const loginErrorMsg2 = document.getElementById('login-error-msg2'); //  Przypisanie zmiennej do pola informującego o błędzie polegającym na pustym polu w nazwie użytkownika bądź haśle.

loginButton.addEventListener('click', (e) => { //  Funkcja, która rozpoczyna swoje działanie po kliknięciu przycisku logowania, stąd widnieje na samym początku nazwa zmiennej loginButton, która została powyżej pobrana z dokumentu html
	e.preventDefault();
	const username = loginForm.username.value; // Pobranie wartości do nowych zmiennych z dokumentu html, stąd była nam potrzebna funkcja const loginForm, username w tej funkcji przypisuje się do tego co wpisaliśmy w polu logowania w html pod atrybutem name

	const password = loginForm.password.value; // Pobranie wartości do nowych zmiennych z dokumentu html, stąd była nam potrzebna funkcja const loginForm, password w tej funkcji przypisuje się do tego co wpisaliśmy w polu do wpisywania hasła w html pod atrybutem name

	if (username === 'Łukasz' && password === 'Malinowski') { // Kolejna funkcja, tym razem funkcja if bądź jeżeli, która w skrócie polega na tym co się stanie jeśli coś, w tym przypadku jeżeli w polu logowania przed kliknięcie "Łukasz", a w polu logowania Malinowski, to wyskoczy nam pole informacyjne, że poprawnie się zalogowaliśmy.
		alert('Poprawnie się zalogowałeś');
		location.reload(); // Po kliknięciu przycisku Ok, po dostaniu informacji poprzed funkcję alert, zresetuje nam pola do logowania.
	} 
    else if (username === '' || password === '') { 
        
        // Jeżeli jednak pole do wpisania nazwy użytkownika lub hasła pozostanie puste, pokaże nam się blok informacyjny o błędzie, z przypisaną do niego informacją o tym że spełnionym warunku.

		loginErrorMsg2.style.opacity = 1; // Żeby tak się stało musiałem zmienić za pomocą wcześniej przypisanej zmiennej do bloku z błędem, że zamiast opacity = 0, oznaczającej że jest ona w pełni przeźroczysta czyli niewidoczna, po kliknięciu przycisku ze spełniającym warunkiem w stylach css, zmieni się na opacity=1, gdzie już będzie w pełni nieprzeźroczysta

		loginErrorMsg.style.opacity = 0; // Tutaj jest sytuacja, by uniknąć dwóch wyskakujących na raz bloku informujących o błędzie

	} 
    else 
    { // Jeżeli po kliknięciu przycisku, wartości wpisane w pole nazwy użytkownika i hasła, nie spełniają obu przedstawionych powyżej warunków to pojawi się inny blok informujący o błędzie, analogicznie jak sytuacji powyżej.
		loginErrorMsg.style.opacity = 1; //
		loginErrorMsg2.style.opacity = 0;
	}
});
