import { Link } from "react-router-dom";

const Option = ({ title, options }) => {
  return (
    <div>
      <div>
        {options.map((option) => (
          <div
            className="option"
            style={
              {
                /*  marginLeft: 16,
              marginRight: 16, */
              }
            }
            key={option.id}
          >
            <center>
              <Link to={`${option.title}`}>
                <h2>{option.title}</h2>
              </Link>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Option;
