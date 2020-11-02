const tweets = [
    { id: '000', likes: 1, tags: ['js', 'nodejs'] },
    { id: '001', likes: 14, tags: ['html', 'css'] },
    { id: '002', likes: 11, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 4, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
//создаю массив тегов
const allTags = tweets.reduce(function (tags, tweet) {
    tags.push(...tweet.tags)
    return tags;
}, []);
console.log(allTags);

// dirty function
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

// clear function
const tagsStats = allTags.reduce(function (acc, tag) {
    return {...acc, [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1};
}, {});
console.log(tagsStats);