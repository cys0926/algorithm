# 문제 링크

# redefine(재정의)

# @input
# survey : string[] (survey의 타입으로 이루어진 배열)
# choice : number[] (답변 번호로 이루어진 배열)

# @return

# @condition
# 1. 점수가 동일한 경우 사전순으로 빠른 유형으로 판단
# 2. 1 <= survey.length <= 1000
# 3. survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나이다.
# 4. 각 원소의 첫번째 캐릭터는 비동의, 두번째 캐릭터는 동의를 의미한다.

# @algorithm

# @logic(psuedo)
# 1. choices를 나타내는 맵을 만든다.
# 2. survey를 순회하며 각 유형별로 점수를 계산한다.
# 3. 점수가 동일한 경우 사전순으로 빠른 유형으로 판단한다.
# 4. 점수가 가장 높은 유형을 반환한다.


#  solution(구현)
survey1 = ["AN", "CF", "MJ", "RT", "NA"]
choices1 = [5, 3, 2, 7, 5]

survey2 = ["TR", "RT", "TR"]
choices2 = [7, 1, 3]

CHOICES_MAP = {
    1: -3,
    2: -2,
    3: -1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
}

def solution(survey, choices):
    answer = ''
    personality_map = {
        "RT": 0,
        "CF": 0,
        "JM": 0,
        "AN": 0
    }
    for index, result in enumerate(survey):
        sorted_value = ''.join(sorted(result))
        reverse = 1 if sorted_value == result else -1
        personality_map[sorted_value] += reverse * CHOICES_MAP[choices[index]]

    for key, value in personality_map.items():
        if value <= 0:
            answer += key[0]
        else:
            answer += key[1]
    return answer


print(solution(survey2, choices2))

# @정확성

# @효율성


# check(검증) - Big O Notation
# @time_complexity
# O(N)

# @space_complexity
# O(N)

# @improvements(개선점)
