import "./list.css";
import { Link } from "react-router-dom";

const List = ({ recipes }) => {
  return (
    <div className="list-container">
      {recipes.map((recipe) => {
        return (
          <div className="list-card">
            <h3>
              {recipe.title.length > 20
                ? `${recipe.title.substr(0, 20)}...`
                : recipe.title}
            </h3>
            <img src={recipe.image_url} alt={recipe.title} />
            <p>Publisher:{recipe.publisher}</p>
            <Link
              to={{
                pathname: `/recipe/${recipe.recipe_id}`,
                state: {
                  id: recipe.recipe_id
                }
              }}
            >
              <button>See original</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default List;
