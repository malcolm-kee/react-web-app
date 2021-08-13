```jsx
<div className="flex gap-3">
  <Badge>Badge</Badge>
  <Badge color="green" title="Success">
    Green
  </Badge>
  <Badge color="red">Red</Badge>
  <Badge color="yellow" className="ml-5">
    Yellow
  </Badge>
</div>
```

You can customize the element to render by using `render` props:

```jsx
<Badge
  color="green"
  render={(bProps) => <a {...bProps} href="https://google.com" />}
>
  Google
</Badge>
```
