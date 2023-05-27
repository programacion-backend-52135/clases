const objetos = [
    {
        manzanas: 3,
        peras: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        panes: 4
    }
]

const totales = objetos.reduce((acc, obj) => acc + Object.values(obj).reduce((t, v) => t + v, 0), 0)
console.log(totales)

const productTypes = objetos.reduce((result, obj) => {
    Object.keys(obj).forEach((v) => {
        if (!result.includes(v)) result.push(v);
    });

    return result;
}, []);

const productSales = productTypes.reduce((p, c) => {
    p[c] = 0;
    objetos.forEach((v) => {
      if (v[c]) {
        p[c] += v[c];
      }
    });
    return p;
}, {});

console.log(productTypes, productSales)