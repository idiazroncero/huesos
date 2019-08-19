---
title: "File uploader"
---

A really simple and straightforward file input is provided.

With `[data-file-input]` enabled on the wrapper, you get a button-like input that will inform the user on the number of files that are uploaded, and the name of the file when it's only one.

```html
<div class="form-item file-input" data-file-input>
    <input id="input__file__js" type="file" placeholder="Upload file" multiple>
    <label data-upload-verb="Upload" data-upload-name="files" for="input__file__js">Upload File</label>
</div>
```

<div class="form-item file-input" data-file-input>
    <input id="input__file__js" type="file" placeholder="Upload file" multiple>
    <label data-upload-verb="Upload" data-upload-name="files" for="input__file__js">Upload File</label>
</div>