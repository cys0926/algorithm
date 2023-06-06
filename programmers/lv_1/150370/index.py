# 문제 링크

# redefine(재정의)

# @input

# @return

# @condition

# @algorithm

# @logic(psuedo)

#  solution(구현)
today1 = "2022.05.19"
terms1 = ["A 6", "B 12", "C 3"]
privacies1 = [
    "2021.05.02 A",
    "2021.07.01 B",
    "2022.02.19 C",
    "2022.02.20 C",
]

today2 = "2020.01.01"
terms2 = ["Z 3", "D 5"]
privacies2 = [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
]


def convert_day(date):
    date = date.split(".")
    return int(date[0]) * 28 * 12 + int(date[1]) * 28 + int(date[2])


def solution(today, terms, privacies):
    terms_map = {term[0]: int(term[2:]) * 28 for term in terms}

    today = convert_day(today)

    return [i + 1 for i, privacy in enumerate(privacies) if
            convert_day(privacy[:-2]) + terms_map[privacy[-1]] <= today]


print(solution(today2, terms2, privacies2))

# @정확성

# @효율성

# check(검증) - Big O Notation
# @time_complexity
# O(N)

# @space_complexity
# O(N)

# @improvements(개선점)
