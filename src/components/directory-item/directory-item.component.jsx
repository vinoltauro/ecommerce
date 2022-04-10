import "./directory-item.styles.scss"
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {

  let navigate = useNavigate();
  const { title, imageUrl, route } = category;
  const navigationHandler = () => navigate(route);
  return (
    <div className="directory-container" onClick={navigationHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
