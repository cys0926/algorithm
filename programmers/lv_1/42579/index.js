const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
    const genreRank = {};
    genres.forEach((genre, index) => {
        genreRank[genre] = (genreRank[genre] || 0) + plays[index];
    });

    const genresMap = genres
        .map((t, i) => ({
            genre: t,
            play: plays[i],
            index: i,
        }))
        .sort((a, b) => {
            if (a.genre !== b.genre) {
                return genreRank[b.genre] - genreRank[a.genre];
            }
            if (a.play !== b.play) {
                return b.play - a.play;
            }
            return a.index - b.index;
        });

    const duplicateFilter = {};
    return genresMap
        .filter((item) => {
            if (duplicateFilter[item.genre] === 2) {
                return false;
            }
            duplicateFilter[item.genre] =
                (duplicateFilter[item.genre] || 0) + 1;
            return true;
        })
        .map((item) => item.index);
}

console.log(solution(genres, plays));