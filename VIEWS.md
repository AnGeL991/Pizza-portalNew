# Dashboard

- '/'
  - statystyki dzisiejszych zamówienień (zdalne i lokalne)
  -listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostepnosci stolików

- '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominad widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sa rózne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- '/tables/booking/:id'
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwiac edycje i zapisywanie zmian
- '/tables/booking/new'
  - analogicznie do powyższej, bez początkowych informacji
- '/tables/events/:id'
  - analogicznie do powyższej, dla eventów
- '/tables/events/new'
  -- analogicznie do powyższej, bez początkowych informacji

# widok kelnera

- '/waiter'
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji( status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówone produkty z opcjami i cena)
  - kwote zamówienia
- '/waiter/order/:id;
  - jak powyższa

# widok kuchni

- '/kitchen'
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierac numer stolika ( lub zamówienia zdalnego ) oraz pełne informacje dot. zamówienia dań
  - na liscie musi być możliwość oznaczenia zamówienia jako zrealizowane
