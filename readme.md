Live Example Code
=================

Embeddable code examples for presentations and documents

Example
-------

https://codeslide.netlify.app/examples/iteration.html

Requirements
------------

- Realtime
- Serverless
- Support for JS at minimum
- Easy to use anywhere (include script, annotate DOM)
- Compatibility with common presentation tools (revealJS, etc)

Usage
-----

```html
...
<script src="liveexamplecode.js"></script>
...

<code data-target="0 1 2 3">
for i in range(0, 10):
    print(i)
</code>
```

Possible future features
------------------------

- Syntax highlighting
- Python support (via MicroPython?)
- C support (via tcc+v86?)
- Response logging (so that this could be used for exams)
- Real-time quizzing (e.g. Kahoot for code)
