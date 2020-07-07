const Posts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await posts.json();
  return data;
};

export const createResource = () => {
  let status = "loading";
  let result;
  let suspender = Posts().then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};
