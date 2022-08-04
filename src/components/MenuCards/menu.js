import list from "../../assets/fake-data/data";
import Cards from "./card";
import "./menu.css";

const menu = ({ handleClick }) => {
  return (
    <section>
      <div className="YummifyMenu">
        <div className="tilte">
          <h2>Yummify Menu🍽️</h2>
        </div>
        <div className="amazon__content">
          <div className="amazon__content__list">
            {list.map((item, index) => (
              <Cards key={index} item={item} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

//       {list.map((item) => (
//         <Cards key={item.id} item={item} handleClick={handleClick} />
//       ))}
//     </section>

//   );
// };

export default menu;
