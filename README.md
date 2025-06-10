
# ga-cookie-script

A small JavaScript file that can clean out accumulated cookies related to Google (Analytics) tags on the *.illinois.edu domain.

## Example Usage

The example below sets the threshold to 40 cookies maximum before the script would clear all cookies starting with `_ga_`. The default is 30 cookies maximum and acts as a lower bound to prevent excessive clearing.

```HTML
<script src="https://cdn.jsdelivr.net/gh/UIUCLibrary/ga-cookie-script@1.0.1/ga-cookie-script.min.js?max=40"></script>
```
