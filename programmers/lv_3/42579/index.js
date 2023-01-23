/* 문제 링크 */

/**
 * redefine(재정의)
 *
 * @input
 *  genres : string[] (노래의 장르를 나타내는 문자열 배열)
 *  plays : number[] (노래별 재생 횟수를 나타내는 정수 배열)
 *
 * @return
 *  number[] (베스트 앨범에 들어갈 노래의 고유 번호를 순서대로)
 *
 * @condition
 *  0. 장르별 가장 많이 재생된 노래를 인기 장르 순으로 수록한다.
 *  1. genres[i]는 고유번호가 i인 노래의 장르
 *  2. plays[i]는 고유번호가 i인 노래가 재생된 횟수
 *  3. genres.length === plays.length
 *  4. 장르에 속한 곡이 하나라면 하나의 곡만 선택
 *  5. 모든 장르는 재생된 숫자가 다르다.
 *
 *
 * @algorithm
 * 해시 - Map
 *
 * @logic(psuedo)
 *  Hash2 기준 작성
 *  1. { index, genre, play } 를 가지고 있는 musicArray 생성
 *  2. genre 별 랭킹을 볼 수 있는 genreRankMap 생성
 *  3. musicArray 를 genreRank, play, index 순으로 sorting
 *  4. 2개 이상인경우 중복을 판단해 줄 duplicationMap 생성
 *  5. sortMusicArray 를 순회하며 같은 genre인 경우 2개까지 answer에 push
 *  6. return answer
 */

// solution(구현)
const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

const map = new Map();

// Hash 1
// function solution(genres, plays) {
//     const answer = [];
//     const genresRankMap = new Map();
//     const musicMap = new Map();
//
//     genres.forEach((genre, index) => {
//         genresRankMap.set(
//             genre,
//             (genresRankMap.get(genre) || 0) + plays[index]
//         );
//         musicMap.set(index, { genre, play: plays[index] });
//     });
//
//     const sortMusicMap = new Map(
//         [...musicMap].sort((a, b) => {
//             if (a[1].genre !== b[1].genre) {
//                 return (
//                     genresRankMap.get(b[1].genre) -
//                     genresRankMap.get(a[1].genre)
//                 );
//             }
//             if (a[1].play !== b[1].play) {
//                 return b[1].play - a[1].play;
//             }
//             return a[0] - b[0];
//         })
//     );
//
//     const duplicateFilter = new Map();
//     sortMusicMap.forEach((value, key) => {
//         if (duplicateFilter.get(value.genre) === 2) {
//             return;
//         }
//         duplicateFilter.set(
//             value.genre,
//             (duplicateFilter.get(value.genre) || 0) + 1
//         );
//         answer.push(key);
//     });
//     return answer;
// }

// Hash 2
function solution(genres, plays) {
    const answer = [];
    const genresRankMap = new Map();

    const musicArray = genres
        .map((genre, index) => {
            genresRankMap.set(
                genre,
                (genresRankMap.get(genre) || 0) + plays[index]
            );
            return { index, genre, play: plays[index] };
        })
        .sort((a, b) => {
            if (a.genre !== b.genre) {
                return genresRankMap.get(b.genre) - genresRankMap.get(a.genre);
            }
            if (a.play !== b.play) {
                return b.play - a.play;
            }
            return a.index - b.index;
        });

    const duplicateFilter = new Map();

    musicArray.forEach((value) => {
        if (duplicateFilter.get(value.genre) === 2) {
            return;
        }
        duplicateFilter.set(
            value.genre,
            (duplicateFilter.get(value.genre) || 0) + 1
        );
        answer.push(value.index);
    });

    return answer;
}

console.log(solution(genres, plays));

// Object 로 구현
// function solution(genres, plays) {
//   const genreRank = {};
//   genres.forEach((genre, index) => {
//     genreRank[genre] = (genreRank[genre] || 0) + plays[index];
//   });
//
//   const genresMap = genres
//     .map((t, i) => ({
//       genre: t,
//       play: plays[i],
//       index: i,
//     }))
//     .sort((a, b) => {
//       if (a.genre !== b.genre) {
//         return genreRank[b.genre] - genreRank[a.genre];
//       }
//       if (a.play !== b.play) {
//         return b.play - a.play;
//       }
//       return a.index - b.index;
//     });
//
//   const duplicateFilter = {};
//   return genresMap
//     .filter((item) => {
//       if (duplicateFilter[item.genre] === 2) {
//         return false;
//       }
//       duplicateFilter[item.genre] =
//         (duplicateFilter[item.genre] || 0) + 1;
//       return true;
//     })
//     .map((item) => item.index);
// }

/**
 * 결과
 * @정확성
 * Hash1 / Hash2 / Object
 * 테스트 1  〉 통과 (0.13ms, 33.4MB) / 통과 (0.21ms, 33.6MB) / 통과 (0.15ms, 33MB)
 * 테스트 2  〉 통과 (0.14ms, 33.4MB) / 통과 (0.13ms, 33.5MB) / 통과 (0.23ms, 32.8MB)
 * 테스트 3  〉 통과 (0.20ms, 33.5MB) / 통과 (0.12ms, 33.5MB) / 통과 (0.14ms, 33.4MB)
 * 테스트 4  〉 통과 (0.16ms, 33.5MB) / 통과 (0.10ms, 33.5MB) / 통과 (0.17ms, 33.5MB)
 * 테스트 5  〉 통과 (0.36ms, 33.6MB) / 통과 (0.31ms, 33.5MB) / 통과 (0.33ms, 33.5MB)
 * 테스트 6  〉 통과 (0.34ms, 33.5MB) / 통과 (0.29ms, 33.5MB) / 통과 (0.34ms, 33MB)
 * 테스트 7  〉 통과 (0.30ms, 33.5MB) / 통과 (0.27ms, 33.5MB) / 통과 (0.30ms, 33.4MB)
 * 테스트 8  〉 통과 (0.27ms, 33.5MB) / 통과 (0.24ms, 33.6MB) / 통과 (0.28ms, 33.5MB)
 * 테스트 9  〉 통과 (0.14ms, 33.5MB) / 통과 (0.13ms, 33.5MB) / 통과 (0.24ms, 33MB)
 * 테스트 10 〉 통과 (0.38ms, 33.5MB) / 통과 (0.31ms, 33.5MB) / 통과 (0.37ms, 33.4MB)
 * 테스트 11 〉 통과 (0.24ms, 33.4MB) / 통과 (0.29ms, 33.6MB) / 통과 (0.24ms, 33.4MB)
 * 테스트 12 〉 통과 (0.40ms, 33.5MB) / 통과 (0.26ms, 33.6MB) / 통과 (0.30ms, 33.4MB)
 * 테스트 13 〉 통과 (0.35ms, 33.5MB) / 통과 (0.30ms, 33.5MB) / 통과 (0.33ms, 33.4MB)
 * 테스트 14 〉 통과 (0.39ms, 33.4MB) / 통과 (0.32ms, 33.6MB) / 통과 (0.34ms, 33.4MB)
 * 테스트 15 〉 통과 (0.16ms, 33.4MB) / 통과 (0.13ms, 33.7MB) / 통과 (0.28ms, 33.4MB)
 * @효율성
 *
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
