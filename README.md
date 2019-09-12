# 🤖 Robot

A small Finite State Machine library.

```js
import { createMachine, interpret, state, transition } from 'robot3';

let machine = createMachine({
  red: state(
    transition('next', 'green')
  ),
  yellow: state(
    transition('next', 'red')
  ),
  green: state(
    transition('next', 'yellow')
  )
});

const service = interpret(machine, () => {
  render();
});
```

## Usage

## License

BSD-2-Clause