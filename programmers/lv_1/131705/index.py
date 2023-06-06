# https://school.programmers.co.kr/learn/courses/30/lessons/131705

# redefine(재정의)
# @input
# number : int[] (학생들의 번호를 담은 정수 배열)

# @return
# result : int (삼총사를 만들 수 있는 방법의 수)

# @condition

# @algorithm

# @logic(psuedo)

#  solution(구현)
number1 = [-2, 3, 0, 2, -5]
number2 = [-3, -2, -1, 0, 1, 2, 3]
number3 = [-1, 1, -1, 1]


def solution(number):
    result = 0
    for i in range(len(number) - 2):
        for j in range(i + 1, len(number) - 1):
            for k in range(j + 1, len(number)):
                if number[i] + number[j] + number[k] == 0:
                    result += 1

    return result


print(solution(number1))

# @정확성

# @효율성


# check(검증) - Big O Notation
# @time_complexity
# O(N)

# @space_complexity
# O(N)

# @improvements(개선점)
