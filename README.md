# React User Directory

## Wybór Frameworka: React

Wybrałem React do realizacji tego projektu, ponieważ:
- Jest to popularny framework oparty na komponentach, co ułatwia zarządzanie kodem w większych aplikacjach.
- React umożliwia łatwe tworzenie interaktywnych UI dzięki swojej reaktywnej naturze, co pozwala na dynamiczne aktualizowanie zawartości strony.
- Posiada dużą społeczność, co ułatwia rozwiązywanie problemów oraz znajdowanie gotowych rozwiązań.

## Opis projektu

Aplikacja wyświetla listę użytkowników pobranych z publicznego API i umożliwia filtrowanie ich według imienia lub adresu e-mail. Po kliknięciu na użytkownika, wyświetlane są szczegółowe informacje w oknie modalnym.

### Funkcje:
- **Filtrowanie**: użytkownicy mogą być filtrowani po nazwie lub e-mailu.
- **Modal**: po kliknięciu na użytkownika, wyświetlane są szczegóły (np. telefon, strona internetowa).

## Instrukcja uruchomienia

1. Zainstalowane Node.js.
2. Sklonowane i rozpakowane repozytorium na komputerze.
3. Otworzyć terminal i wejść w katalog projektu.
4. Zainstalować zależności: npm install
5. Uruchomić aplikację: npm start

Aplikacja zostanie uruchomiona w przeglądarce pod adresem `http://localhost:3000`.

## Użyte technologie
- **React**: framework do budowy interfejsu użytkownika.
- **CSS**: do podstawowej stylizacji aplikacji.

## Jak działa aplikacja?
Aplikacja łączy się z publicznym API `https://jsonplaceholder.typicode.com/users`, pobiera dane użytkowników i wyświetla je na liście. Użytkownicy mogą być filtrowani na podstawie imienia lub e-maila. Po kliknięciu na użytkownika, wyświetlane są szczegóły w oknie modalnym.
