const Article = ({ article }) => {
  const { createdAt, description, slug, title } = article.attributes;
  const { name: category } = article.attributes?.category?.data?.attributes;
  const { name: author } = article.attributes?.author?.data?.attributes;
  const { url: avatar } =
    article.attributes?.author?.data?.attributes?.avatar?.data?.attributes
      ?.formats?.thumbnail;
  return (
    <article
      key={article.id}
      className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {category.toUpperCase()}
        </span>
        <span className="text-sm">
          {createdAt.replace(/T/, " ").replace(/\..+/, "")}
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-7 h-7 rounded-full"
            src={`http://localhost:1337${avatar}`}
            alt="Jese Leos avatar"
          />
          <span className="font-medium dark:text-white">{author}</span>
        </div>
        {/* <a
          href={`/article/${article.id}`}
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </article>
  );
};

export default Article;
