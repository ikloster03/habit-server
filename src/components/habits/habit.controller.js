exports.list = (ctx) => {
  const result = [
    {
      id: 'c603530f-f9ed-4056-8d1d-565de26f613a',
      title: 'test habit 1',
      description: 'test habit description',
      color: '#0097A7FF',
      dates: ['2021-02-01', '2021-02-03'],
    },
    {
      id: 'c603530f-f9ed-4056-8d1d-565de26f613b',
      title: 'test habit 2',
      description: 'test habit description',
      color: '#0097A7FF',
      dates: ['2021-02-01', '2021-02-03'],
    },
    {
      id: 'c603530f-f9ed-4056-8d1d-565de26f613c',
      title: 'test habit 3',
      description: 'test habit description',
      color: '#0097A7FF',
      dates: ['2021-02-01', '2021-02-03'],
    },
  ];

  ctx.status = 200;
  ctx.body = result;
};
