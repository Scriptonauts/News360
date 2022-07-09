export const searchArticles = async (query: string) => {
  await fetch(`${process.env.REACT_APP_BASE_URL}/posts?search=${query}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
