import Blog from "../components/Blog";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h3>Blogs</h3>
      <ul>
        {blogs.map((b) => (
            <li key={b.id}>
            <Link to={"/blogs/" + b.id}>{b.title}</Link>
            </li>
        ))}
    </ul>

    </div>
  );
};

export default BlogList;
