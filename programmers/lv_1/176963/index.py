# https://school.programmers.co.kr/learn/courses/30/lessons/176963

# redefine(재정의)
# @input
# name : string[] (그리워하는 사람의 이름을 담은 배열)
# yearning : int[] (그리움 점수를 담은 배열)
# photo : string[][] (사진에 찍힌 인물의 이름을 담은 이차원 배열)

# @return
# int (추억점수)

# @condition

# @algorithm

# @logic(psuedo)

#  solution(구현)
name1 = ["may", "kein", "kain", "radi"]
yearning1 = [5, 10, 1, 3]
photo1 = [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]


def solution(name, yearning, photo):
    # name을 key, yearning을 value로 하는 dict로 변환
    name_dict = dict(zip(name, yearning))
    # photo1의 각 요소를 name의 value로 변환한 뒤 합산하여 반환
    # 만약 name안에 없는 경우 0을 반환
    return [sum([name_dict[name] for name in names if name in name_dict]) for names in photo]


print(solution(name1, yearning1, photo1))

# @정확성

# @효율성


# check(검증) - Big O Notation
# @time_complexity
# O(N)

# @space_complexity
# O(N)

# @improvements(개선점)
