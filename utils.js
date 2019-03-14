exports.bench = function (method, iterations, args, context) {

    var time = 0;
    var timer = function (action) {
        var d = process.hrtime.bigint();
        if (time < 1 || action === 'start') {
            time = d;
            return 0;
        } else if (action === 'stop') {
            var t = d - time;
            time = 0;
            return t;
        } else {
            return d - time;
        }
    };

    var result = [];
    var i = 0;
    timer('start');
    while (i < iterations) {
        result.push(method.apply(context,args));
        i++;
    }

    var execTime = timer('stop');

    if ( typeof console === "object") {
        var total = execTime;

        var execAverage = execTime / BigInt(iterations);
        var fixedValue = Number(execAverage);
        fixedValue /= 1e6;

        var total = total / BigInt(1e3);
        var fixedTotal = Number(total);
        fixedTotal /= 1e3;



        console.log("Mean execution time was: ", fixedValue, "ms");
        console.log("Sum execution time was: ", fixedTotal, "ms");
        //console.log("Result of the method call was:", result[0]);
    }

    return execTime;
};
