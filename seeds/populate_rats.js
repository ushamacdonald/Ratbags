
exports.seed = function(knex, Promise) {
  return knex('rats').del()
    .then(function () {
      return knex('rats').insert([
        {id: 1, name: 'Percy', colour: 'white', age: 1, interests: 'being got and hiding in tunnels', gender: 'male', image: 'http://i.dailymail.co.uk/i/pix/2009/08/03/article-1202623-05DDD747000005DC-35_468x286.jpg'},
        {id: 2, name: 'Atlas', colour: 'champange', age: 1, interests: 'guarding the food bowl', gender: 'male', image: 'https://68.media.tumblr.com/4cc69cfbfd59d66126b57aca6f15db7e/tumblr_ovpvqpGhGm1v5enxno1_1280.jpg'}
      ]);
    });
};
