import { state, transition, createMachine, guard, interpret, reduce } from './machine.js';

const machine = createMachine({
  idle: state(
    transition('inc', 'idle',
      reduce((e, {count=0}) => ({ count: count + 1 }))          
    )
  )
});

const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
const countNode = document.querySelector('#count');

const service = interpret(machine, ({ context }) => {
  const { count } = context;
  countNode.textContent = count;
});

inc.onclick = () => service.send('inc');
dec.onclick = () => service.send('dec');