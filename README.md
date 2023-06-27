## Cyclomatic Complexity
```
function isBalancedBracket(input)
  stack = [];

  FOR EACH ELEMENT IN *input* DO
    IF (
      LAST ELEMENT OF *stack* == '(' AND ELEMENT == ')' OR
      LAST ELEMENT OF *stack* == '{' AND ELEMENT == '}' OR
      LAST ELEMENT OF *stack* == '[' AND ELEMENT == ']' OR
    ) THEN
      POP *stack*;
    ELSE
      PUSH *stack*;
    ENDIF;
  ENDFOR;

  IF *stack* LENGTH == 0 THEN
    RETURN 'YES';
  ELSE
    RETURN 'NO';
  ENDIF;
```

`M = E - N + 2P`

M = 12 - 10 + 2
M = 4; maka ada 4 kemungkinan jalur eksekusi program.

## Time Complexity
T(n) = O(n)

O(n) karena program berjalan dengan kompleksitas waktu mengikuti jumlah karakter input.