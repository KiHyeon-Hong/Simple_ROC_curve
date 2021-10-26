// true positive
function tpFunc(predicts, labels, mean, benchmark) {
    let num = 0;

    predicts.map((data, index) => {
        if (data >= benchmark && labels[index] >= mean) num++;
    });

    return num;
}

// false positive
function fpFunc(predicts, labels, mean, benchmark) {
    let num = 0;

    predicts.map((data, index) => {
        if (data >= benchmark && labels[index] < mean) num++;
    });

    return num;
}

// false negative
function fnFunc(predicts, labels, mean, benchmark) {
    let num = 0;

    predicts.map((data, index) => {
        if (data < benchmark && labels[index] >= mean) num++;
    });

    return num;
}

// true negative
function tnFunc(predicts, labels, mean, benchmark) {
    let num = 0;

    predicts.map((data, index) => {
        if (data < benchmark && labels[index] < mean) num++;
    });

    return num;
}

function simpleROC(predicts, labels, size) {
    const max = Math.max.apply(null, predicts);
    const min = Math.min.apply(null, predicts);

    const labelMax = Math.max.apply(null, labels);
    const labelMin = Math.min.apply(null, labels);
    const mean = (labelMax + labelMin) / 2;

    const interval = (max - min) / (size - 2);

    let benchmarks = [];
    for (let i = 0; i < size; i++) {
        benchmarks.push(interval * i + min);
    }

    let tp = [];
    let fp = [];
    let fn = [];
    let tn = [];
    benchmarks.map((data, index) => {
        tp.push(tpFunc(predicts, labels, mean, data));
        fp.push(fpFunc(predicts, labels, mean, data));
        fn.push(fnFunc(predicts, labels, mean, data));
        tn.push(tnFunc(predicts, labels, mean, data));
    });

    // sensitivity
    // specificity
    let se = [];
    let sp = [];

    tp.map((data, index) => {
        se.push(data / (data + fn[index]));
    });

    tn.map((data, index) => {
        sp.push(data / (data + fp[index]));
    });

    let reverveSp = [];
    sp.map((data) => {
        reverveSp.push(1 - data);
    });

    return [reverveSp.reverse(), se.reverse()];
}

exports.simpleROC = simpleROC;
