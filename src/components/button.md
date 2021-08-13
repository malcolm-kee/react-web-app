```jsx
<div className="flex gap-4">
  <Button>Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="outline">Outline</Button>
</div>
```

Use render to render element other than `button`, e.g. `<a>` tag.

```jsx
<Button
  variant="primary"
  render={(btnProps) => <a {...btnProps} href="https://google.com" />}
>
  Go to Google
</Button>
```
