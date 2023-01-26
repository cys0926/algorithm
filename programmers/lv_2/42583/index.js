/* https://school.programmers.co.kr/learn/courses/30/lessons/42583 */

/**
 * redefine(재정의)
 * @input
 *  bridge_length : number (다리에 올라갈 수 있는 트럭 수)
 *  weight : number (다리가 견딜 수 있는 무게)
 *  truck_weights : number[] (트럭 별 무게)
 *
 * @return
 * answer : number (모든 트럭이 다리를 건너는데 걸리는 시간)
 *
 * @condition
 *
 * @algorithm
 *
 * @logic(psuedo)
 *  1. 트럭을 순서대로 다리에 진입시킨다.
 *  2. 만약 다음 트럭이 무게 제한에 걸리면 이전 트럭이 도착할 때 까지 기다린다.
 *  3. 1-2를 반복한다.
 *
 */

// solution(구현)
const bridge_length1 = 2;
const weight1 = 10;
const truck_weights1 = [7, 4, 5, 6];
const bridge_length2 = 100;
const weight2 = 100;
const truck_weights2 = [10];
const bridge_length3 = 100;
const weight3 = 100;
const truck_weights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

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
}

function solution(bridge_length, weight, truck_weights) {
    if (truck_weights.length === 1) {
        return bridge_length + 1;
    }

    let second = 0;
    let bridge = new Queue();

    for (let i = 0; i < bridge_length; i++) {
        bridge.enqueue(0);
    }

    while (bridge.length) {
        second++;
        bridge.dequeue();
        if (truck_weights.length) {
            const sumOfBridge = bridge.sum;
            if (sumOfBridge + truck_weights[0] <= weight) {
                bridge.enqueue(truck_weights.shift());
            } else {
                bridge.enqueue(0);
            }
        }
    }

    return second;
}

solution(bridge_length1, weight1, truck_weights1);

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (1.35ms, 35.6MB)
 * 테스트 2 〉  통과 (7.26ms, 37.1MB)
 * 테스트 3 〉  통과 (0.24ms, 33.5MB)
 * 테스트 4 〉  통과 (6.26ms, 36.8MB)
 * 테스트 5 〉  통과 (15.74ms, 39.1MB)
 * 테스트 6 〉  통과 (7.60ms, 37.3MB)
 * 테스트 7 〉  통과 (0.85ms, 33.6MB)
 * 테스트 8 〉  통과 (0.34ms, 33.5MB)
 * 테스트 9 〉  통과 (5.33ms, 36.1MB)
 * 테스트 10 〉  통과 (0.36ms, 33.4MB)
 * 테스트 11 〉  통과 (0.21ms, 33.5MB)
 * 테스트 12 〉  통과 (0.45ms, 33.6MB)
 * 테스트 13 〉  통과 (1.46ms, 35.6MB)
 * 테스트 14 〉  통과 (0.05ms, 33.6MB)
 *
 * @효율성
 */

/**
 *  check(검증) - Big O Notation
 *
 *  @time_complexity
 *  O(N)
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *
 **/
