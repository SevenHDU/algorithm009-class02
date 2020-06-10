// 860 柠檬水找零 
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if (!bills) {
        return true;
    }

    if (bills[0] != 5) {
        return false;
    }

    let fiveCount = 1;
    let tenCount = 0;

    // 使用贪心算法
    for (let i = 1; i < bills.length; i++) {
        const bill = bills[i];
        if (bill === 5) {
            fiveCount++;
        } else if (bill === 10) {
            if (fiveCount) {
                fiveCount--;
                tenCount++;
            } else {
                return false;
            }

        } else if (bill === 20) {
            if (tenCount && fiveCount) {
                fiveCount--;
                tenCount--;
            } else if (fiveCount >= 3) {
                fiveCount -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};