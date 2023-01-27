/* https://school.programmers.co.kr/learn/courses/30/lessons/42587 */

/**
 * redefine(재정의)
 * @input
 *  priorities : number[] (인쇄 우선순위가 담긴 배열)
 *  location : number (내가 인쇄하려는 문서의 위치)
 *
 * @return
 *  answer : number (내가 인쇄하려는 문서가 출력되는 순서)
 *
 * @condition
 *  1. location은 index 값을 갖는다.
 *
 * @algorithm
 * 해시 - Map
 *
 * @logic(psuedo)
 */

// solution(구현)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// 큐 클래스
class Queue {
    constructor() {
        this.head = null; // 제일 앞 노드
        this.rear = null; // 제일 뒤 노드
        this.length = 0; // 노드의 길이
        this.sum = 0; // **데이터는 전부 숫자라고 가정
    }
    enqueue(data) {
        // 노드 추가.
        const node = new Node(data); // data를 가진 node를 만들어준다.
        if (!this.head) {
            // 헤드가 없을 경우 head를 해당 노드로
            this.head = node;
        } else {
            this.rear.next = node; // 아닐 경우 마지막의 다음 노드로
        }
        this.rear = node; // 마지막을 해당 노드로 한다.
        this.length++;
        this.sum += data; // **데이터는 전부 숫자라고 가정
    }
    dequeue() {
        // 노드 삭제.
        if (!this.head) {
            // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
            return false;
        }
        const data = this.head.data; // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
        this.head = this.head.next;
        this.length--;
        this.sum -= data; // **데이터는 전부 숫자라고 가정
        return data;
    }
    getMaxQueue(prop) {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        const array = [];
        while (node) {
            array.push(node.data[prop]);
            node = node.next;
        }
        return Math.max(...array);
    }
    front(prop) {
        // head가 있을 경우 head의 data를 반환.
        return this.head && this.head.data[prop];
    }
}

const priorities1 = [2, 1, 3, 2];
const location1 = 2;
const priorities2 = [1, 1, 9, 1, 1, 1];
const location2 = 0;

function solution(priorities, location) {
    let answer = 1;
    const printQueue = new Queue();
    for (let i = 0; i < priorities.length; i++) {
        printQueue.enqueue({ priorities: priorities[i], index: i });
    }

    while (printQueue.length > 0) {
        if (
            printQueue.getMaxQueue("priorities") >
            printQueue.front("priorities")
        ) {
            printQueue.enqueue(printQueue.dequeue());
        } else {
            if (printQueue.dequeue().index === location) {
                return answer;
            }
            answer++;
        }
    }
}

console.log(solution(priorities1, location1));

/*
 * 일반 queue 풀이
 *
 * function solution(priorities, location) {
 *     let answer = 1;
 *     const newArr = priorities.map((priorities, index) => ({
 *         priorities,
 *         index,
 *     }));
 *     while (newArr.length > 0) {
 *         const currentPrint = newArr.shift();
 *         if (
 *             newArr.some((value) => value.priorities > currentPrint.priorities)
 *         ) {
 *             newArr.push(currentPrint);
 *         } else {
 *             if (currentPrint.index === location) {
 *                 return answer;
 *             }
 *             answer++;
 *         }
 *     }
 * }
 * */

/**
 * 결과
 * @정확성
 * 일반 queue / queue 직접 구현
 * 테스트 1 〉  통과 (0.28ms, 33.6MB) / 통과 (0.67ms, 33.5MB)
 * 테스트 2 〉  통과 (0.78ms, 33.6MB) / 통과 (3.02ms, 37.5MB)
 * 테스트 3 〉  통과 (0.19ms, 33.5MB) / 통과 (0.50ms, 33.4MB)
 * 테스트 4 〉  통과 (0.28ms, 33.5MB) / 통과 (0.38ms, 33.4MB)
 * 테스트 5 〉  통과 (0.08ms, 33.1MB) / 통과 (0.19ms, 33.5MB)
 * 테스트 6 〉  통과 (0.21ms, 33.2MB) / 통과 (0.56ms, 33.4MB)
 * 테스트 7 〉  통과 (0.25ms, 33.4MB) / 통과 (0.58ms, 33.5MB)
 * 테스트 8 〉  통과 (0.44ms, 33.5MB) / 통과 (2.50ms, 37.2MB)
 * 테스트 9 〉  통과 (0.19ms, 33.4MB) / 통과 (0.32ms, 33.5MB)
 * 테스트 10 〉  통과 (0.21ms, 33.4MB) / 통과 (0.60ms, 33.5MB)
 * 테스트 11 〉  통과 (0.40ms, 33.5MB) / 통과 (2.34ms, 37MB)
 * 테스트 12 〉  통과 (0.26ms, 33.7MB) / 통과 (0.39ms, 33.5MB)
 * 테스트 13 〉  통과 (0.32ms, 33.3MB) / 통과 (2.07ms, 37MB)
 * 테스트 14 〉  통과 (0.08ms, 33.3MB) / 통과 (0.17ms, 33.4MB)
 * 테스트 15 〉  통과 (0.28ms, 33.6MB) / 통과 (0.54ms, 33.5MB)
 * 테스트 16 〉  통과 (0.28ms, 33.6MB) / 통과 (0.54ms, 33.5MB)
 * 테스트 17 〉  통과 (0.36ms, 33.6MB) / 통과 (4.30ms, 37.2MB)
 * 테스트 18 〉  통과 (0.18ms, 33.5MB) / 통과 (0.31ms, 33.6MB)
 * 테스트 19 〉  통과 (0.32ms, 33.6MB) / 통과 (2.10ms, 37.1MB)
 * 테스트 20 〉  통과 (0.20ms, 33.4MB) / 통과 (0.54ms, 33.6MB)
 *
 * @효율성
 */

/**
 *  check(검증) - Big O Notation
 *
 *  @time_complexity
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *   일반 Queue 자료구조가 아닌 Circular Queue 자료구조를 사용하여 구현해보자.
 *   만약 N이 1,000 이하라면 shift 를 사용하는 것이 좋다고 한다.
 *
 **/
