Live Example Code
=================

[![Netlify Status](https://api.netlify.com/api/v1/badges/98e2a756-f38d-4aa2-8704-12817c749656/deploy-status)](https://app.netlify.com/sites/liveexamplecode/deploys)
[![Build Status](https://travis-ci.org/jncraton/liveexamplecode.svg?branch=master)](https://travis-ci.org/jncraton/liveexamplecode)

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
