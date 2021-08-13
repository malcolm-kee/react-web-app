```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");

  return <Textarea value={value} onChangeValue={setValue} />;
};

<Demo />;
```
