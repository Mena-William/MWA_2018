(function () {
    Array.prototype.isDual = function () {
        // check even elements first 
        var arr = this;
        if (arr.length % 2 == 0) // is even
        {
            // check for each pair summtion
            let pairSum = arr[0] + arr[1];

            for (let i = 2; i < arr.length; i = i + 2) {
                if (arr[i] + arr[i + 1] == pairSum) {
                    continue;
                }
                else {
                    // break;
                    return 0;
                }
            }
            return 1;
        }
        else {
            return 0;
        }
    }

    // test cases
    console.log([1, 2, 3, 4].isDual());

})();