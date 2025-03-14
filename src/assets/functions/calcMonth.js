export const calcMonth = () => {
    // const start = 1654111800000;
    const start = 1486671120000;
    const now = Date.now();
    const m = 1000 * 60 * 60 * 24 * 30
    const month = Math.ceil((now - start) / m);
    return month;
}