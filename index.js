import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const numImparesObservable = numObservable.pipe(
  map(num => ({
    number: num,
    isImpar: num % 2 !== 0
  }))
);

numImparesObservable.subscribe(data => {
  if (data.isImpar) {
    console.log(data.number);
  }
});
