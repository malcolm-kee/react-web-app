```jsx
const Demo = () => {
  const [value, setValue] = React.useState("1");

  return (
    <Select value={value} onChangeValue={setValue}>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Select>
  );
};

<Demo />;
```
