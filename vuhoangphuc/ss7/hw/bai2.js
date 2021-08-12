var styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');

function timsogiua(n) {
    if (n % 2 == 1) {
        return Math.floor(n/2);
    }
}

styles.splice(timsogiua(styles.length), 1, 'Classics')
console.log(styles);
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');
console.log(styles);



