let N = Number(prompt('Введите число кувшинок: '));

let z = prompt('Введите максимальное количество прыжков с каждой кувшинки через пробел: ');
let arr = z.split(' ');

function def() {
    if (arr.length !== N) {
        alert('Ошибка!');
        return;
    }
    
    if (N === 1) {
        return 0;
    }
    
    if (Number(arr[0]) === 0) {
        return -1;
    }

    let jumps = 0;
    let curMaxJump = 0;
    let nextMax = 0;

    for (let i = 0; i < N - 1; i++) {
        let step = Number(arr[i]);
        
        nextMax = Math.max(nextMax, i + step);

        if (i === curMaxJump) {
            jumps++;
            curMaxJump = nextMax;
            
            if (curMaxJump >= N - 1) {
                return jumps;
            }
        }
        
        if (i === nextMax) {
            return -1;
        }
    }
    
    return -1;
}

alert(def());
