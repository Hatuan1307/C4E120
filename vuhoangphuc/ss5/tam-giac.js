let height = +prompt("Nhập chiều cao tam giác: ");
let line = '';
if ((Number.isInteger(height)) && height > 0) {
    for (i = 0; i < height; i ++) {
        line = '';
        for (n = 0; n < i; n ++) {
            line += ' ';
        } 
        for (m = 0; m < height - i; m++) {
            line += '-';
        }
        console.log(line);
    }
} else {
    console.log('Hãy nhập 1 số nguyên dương.');
}