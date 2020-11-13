const tweets = [
    { id: '000', likes: 1, tags: ['js', 'nodejs'] },
    { id: '001', likes: 14, tags: ['html', 'css'] },
    { id: '002', likes: 11, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 4, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
//function для подсчета лайков из коллекции
const countLikes = tweets =>
    tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  console.log(countLikes(tweets));

// //1. создаю массив тегов
const allTags = tweets.reduce((tags, tweet) => {
    tags.push(...tweet.tags);
    return tags
    }, []);
console.log(allTags);

//2. dirty function
const tagsStats = allTags.reduce(function (acc, tag) {
    // if (acc.hasOwnProperty(tag)) {
    //     acc[tag] += 1;
    //     return acc;
    // }
    // acc[tag] = 1;
    // замена предудущей комбинации тернарником
    acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
    return acc;
}, {})

//2. clear function
const clearTagsStats = allTags.reduce(function (acc, tag) {
    return {...acc, [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1};
}, {});
console.log(clearTagsStats);
// -------------------------------------------------------------------------
// то же самое, только функциями
// 1.
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);
const f1 = getTags(tweets);
// // 2. создаю callback 
const getTagStats = (acc, tag) => {
  acc[tag] = !acc.hasOwnProperty(tag) ? 1 : acc[tag] + 1;
  return acc;
};
// 3. задействую готовые функции
const countTags = f1 => f1.reduce(getTagStats, {});
console.log(countTags(f1));