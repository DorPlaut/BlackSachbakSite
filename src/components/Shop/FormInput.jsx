import React from 'react';

function FormInput({ optionsArr, options, setOptions, num }) {
  return (
    <div className="select-color option">
      <h4>{optionsArr[num].title}</h4>
      <select
        name={optionsArr[num].title}
        id={optionsArr[num].title}
        onChange={(event) => {
          setOptions(event.target.value);
        }}
        value={options}
        required
      >
        <option value="">{optionsArr[num].title}</option>

        {optionsArr[num].options.map((i) => {
          return (
            <option value={i} key={i}>
              {i}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormInput;
