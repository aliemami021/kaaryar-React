import forms from "./formEntrance.json";

export function getName() {
  return forms.map((form) => {
    return (
      <form>
        <label for={form.id}> {form.name} </label>
        <br></br>

        {/* {form.type === "select" ? (
          <select>
            {form.options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : (
          <input
            type={form.type}
            placeholder={form.placeholder}
            id={form.id}
            name={form.name}
          />
        )} */}

        {harchi(form)}
      </form>
    );
  });
}

function harchi(form) {
  if (form.type === "select") {
    return (
      <select>
        {form.options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    );
  } else if (form.type === "radio") {
    return form.options.map((option) => {
      return (
        <>
          <input type={form.type} id={option.label} value={option.value}  name={option.value}/>
          <label HTMLfor={option.label}>{option.value}</label>
        </>
      );
    });
  } else {
    return (
      <input
        type={form.type}
        placeholder={form.placeholder}
        id={form.id}
        name={form.name}
      />
    );
  }
}
