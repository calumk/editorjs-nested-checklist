# EditorJs - Nested CheckList

### NPM
    npm i @calumk/editorjs-nested-checklist

### JS
    https://cdn.jsdelivr.net/npm/@calumk/editorjs-nested-checklist@latest
    

---

# About

Multi-leveled lists for the [Editor.js](https://editorjs.io).

This aims to supersede/replace all other EditorJs List blocks :fire: :fire: :fire:  

## Demo

![](example-media/Demo.gif)

## Built with:

Built on-top of the official nested-list plugin, but with enough changes to warrent its own release


## Use
Use `Tab` and `Shift+Tab` keys to create or remove sublist with a padding.


---

## Use

Add the NestedList Tool to the `tools` property of the Editor.js initial config.

```javascript
import EditorJS from '@editorjs/editorjs';
import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist';

var editor = EditorJS({
  // ...
  tools: {
    ...
    nestedchecklist : editorjsNestedChecklist
  },
});
```

## Config Params
This Tool has no config params

## Tool's settings

You can choose list`s type.

| Style     | Description                |
| --------- | -------------------------- |
| none      | No style, indentation only |
| Ordered   | Numbered                   |
| Unordered | Bullets                    |


## Output data

| Field | Type     | Description                                        |
| ----- | -------- | -------------------------------------------------- |
| style | `string` | type of a list: `ordered` or `unordered` or `none` |
| items | `Item[]` | the array of list's items                          |

Object `Item`:

| Field   | Type     | Description               |
| ------- | -------- | ------------------------- |
| content | `string` | item's string content     |
| items   | `Item[]` | the array of list's items |


```json
{
    "type" : "list",
    "data" : {
        "style" : "unordered",
        "items" : [
            {
              "content": "Apples",
              "checked": null,
              "items": [
                {
                  "content": "Red",
                  "checked" : true,
                  "items": []
                },
                {
                  "content": "Green",
                  "checked" : false,
                  "items": []
                },
              ]
            },
            {
              "content": "Bananas",
              "items": [
                {
                  "content": "Yellow",
                  "checked" : true,
                  "items": []
                },
              ]
            },
        ]
    }
},
```


