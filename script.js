function mincost(arr) {
    arr.sort((a, b) => a - b);

    let totalCost = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        const cost = arr[i] + arr[i + 1];
        totalCost += cost;
        arr[i + 1] = cost;
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports=mincost;
