(function () {
    function isWeekend() {
        const todayDate = new Date();
        const day = todayDate.getDay(); // 0-6 (0 is sunday)

        // your code here
        
        // 1st way
        // return (day == 0 || day == 6) ? "Weekend" : "Weekday";

        // 2nd way 
        const daysMap = { 0: "Weekend", 6: "Weekend" };
        return daysMap[day] || "Weekday";

    }

    console.log(isWeekend());
})();