const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
    let answer = 0;
    // 결과를 담을 공간
    let resultBasket = [];

    // for문 대신 moves에 forEach 함수를 사용한다.
    moves.forEach((basketNumber) => {
        // board의 층 수 만큼 반복하며 0이 아닌 수가 처음으로 나오는 경우 반복문을 탈출한다.
        for (let i = 0; i < board.length; i++) {
            if (board[i][basketNumber - 1] !== 0) {
                resultBasket.push(board[i][basketNumber - 1]);
                board[i][basketNumber - 1] = 0;
                break;
            }
        }
        // 결과를 담은 상자의 길이가 2이상이고 맨 위 2개가 일치하면 맨 위 2개를 지우고 결과에 2를 더한다.
        if (
            resultBasket.length > 1 &&
            resultBasket[resultBasket.length - 1] ===
                resultBasket[resultBasket.length - 2]
        ) {
            answer = answer + 2;
            resultBasket.pop();
            resultBasket.pop();
        }
    });

    return answer;
}

