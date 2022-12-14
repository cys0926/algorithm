const id = "abcdefghijklmn.p";
const result = "abcdefghijklmn";
function solution(new_id) {
    let answer = "";

    let firstVerification = function (str) {
        return str.toLowerCase();
    };

    let secondVerification = function (str) {
        let regex = /[^\w-._]+/g;
        return str.replace(regex, "");
    };

    let thirdVerification = function (str) {
        let regex = /\.(\.*)\./g;
        return str.replace(regex, ".");
    };

    let fourthVerification = function (str) {
        if (str.startsWith(".")) {
            str = str.slice(1);
        }
        if (str.endsWith(".")) {
            str = str.slice(0, str.length - 1);
        }
        return str;
    };

    let fifthVerification = function (str) {
        if (str.length === 0) {
            str = "a";
        }
        return str;
    };

    let sixthVerification = function (str) {
        if (str.length > 15) {
            str = str.slice(0, 15);
        }
        if (str.endsWith(".")) {
            str = str.slice(0, str.length - 1);
        }
        return str;
    };

    let seventhVerification = function (str) {
        if (str.length < 3) {
            while (str.length < 3) {
                str = str + str[str.length - 1];
            }
        }
        return str;
    };

    answer = firstVerification(new_id);
    // console.log("1", answer);
    answer = secondVerification(answer);
    // console.log("2", answer);
    answer = thirdVerification(answer);
    // console.log("3", answer);
    answer = fourthVerification(answer);
    // console.log("4", answer);
    answer = fifthVerification(answer);
    // console.log("5", answer);
    answer = sixthVerification(answer);
    // console.log("6", answer);
    answer = seventhVerification(answer);
    // console.log("7", answer);
    return answer;
}

console.log(solution(id) === result);
