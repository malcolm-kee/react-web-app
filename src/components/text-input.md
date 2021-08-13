```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");

  return <TextInput value={value} onChangeValue={setValue} />;
};

<Demo />;
```

`onChange` still works, albeit it's more direct to use `onChangeValue`.

```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");

  return (
    <TextInput
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
      placeholder="onChange example"
    />
  );
};

<Demo />;
```

```jsx
import { MailIcon } from "@heroicons/react/outline";
import { TextInput } from "components/text-input";
import { Label } from "components/label";
import { Field } from "components/field";

<Field>
  <Label>Email</Label>
  <div className="relative">
    <div className="absolute left-0 inset-y-0 flex items-center p-2 pointer-events-none">
      <MailIcon className="w-6 h-6 text-gray-400" />
    </div>
    <TextInput className="pl-10" />
  </div>
</Field>;
```
