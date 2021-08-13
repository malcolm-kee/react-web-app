```jsx
const Demo = () => {
  const [value, setValue] = React.useState("react");

  return (
    <SelectField label="Framework" value={value} onChangeValue={setValue}>
      <option value="react">React</option>
      <option value="ng">Angular</option>
      <option value="vue">Vue</option>
    </SelectField>
  );
};

<Demo />;
```
