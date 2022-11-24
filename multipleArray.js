const a = [1, 2, 3, 4, 5];

const multipleArray = (a, k) => {
    let count = 0;
    for (let i = 0;i < a.length - 1;i++) {
        for (let j = i + 1;j < a.length;j++) {
            if ((a[i] + a[j]) % k === 0) {
                count += 1;
            }
        }
    }
    return count;
};

console.log("Cau2:", multipleArray(a, 3));
