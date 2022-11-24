const a = [4, 0, 1, -2, 3];
// const a = [9]
// const a = [1,2,3,4]
const sumArray = (a) => {
    const b = [];
    if (a.length === 1) {
        return a;
    }

    if (a.length > 1) {
        a.forEach((item, i) => {
            if (!Number.isFinite(a[i - 1])) {
                b[i] = 0 + item + a[i + 1];
            } else if (!Number.isFinite(a[i + 1])) {
                b[i] = a[i - 1] + item + 0;
            } else {
                b[i] = a[i - 1] + item + a[i + 1];
            }
        });
    }
    return b;
};

console.log("Cau1:", sumArray(a));
