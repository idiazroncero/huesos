
### Example

```sass
h1 {
    $map: (576px: 22px, 768px: 24px, 992px: 34px);
    @include poly-fluid-sizing('font-size', $map);
}
```