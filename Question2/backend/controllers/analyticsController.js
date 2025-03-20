const getTopUsers = (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', postCount: 10 },
    { id: 2, name: 'Jane Doe', postCount: 9 },
    { id: 3, name: 'Alice Smith', postCount: 8 },
    { id: 4, name: 'Bob Johnson', postCount: 7 },
    { id: 5, name: 'Charlie Brown', postCount: 6 }
  ];
  res.json({ users }); // <-- wrap inside { users } (consistent format)
};

const getPosts = (req, res) => {
  const { type } = req.query;

  if (type === 'popular') {
    const popularPosts = [
      { id: 101, title: 'Popular Post 1', commentCount: 50 },
      { id: 102, title: 'Popular Post 2', commentCount: 45 }
    ];
    res.json({ posts: popularPosts });
  } else if (type === 'latest') {
    const latestPosts = [
      { id: 201, title: 'Latest Post 1' },
      { id: 202, title: 'Latest Post 2' },
      { id: 203, title: 'Latest Post 3' },
      { id: 204, title: 'Latest Post 4' },
      { id: 205, title: 'Latest Post 5' }
    ];
    res.json({ posts: latestPosts });
  } else {
    res.status(400).json({ error: 'Invalid type parameter' });
  }
};

module.exports = { getTopUsers, getPosts };
