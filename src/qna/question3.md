---
id: 3
question: "Write semantic, well-structured HTML?"
---

I actually got really excited when I saw this question, because it's not something I've seen many companies really care too much about. I can't even count the number of times I've opened a file to see it littered with ```<div></div>``` everywhere, would it kill them to add a class maybe?!

I much prefer to use the awesome semantic tags HTML5 introduced so whoever is editing the page can instantly know what's going on just by skimming it.

A new one I just learned on a project recently, was using the ```<picture>``` tag to give the browser options on which image to show. It even has media queries built right in. I ended up with something like this:

```HTML
<header class="page-header">
    <picture class="brand-logo">
        <source
            srcset="./images/logo.png 1x, ./images/logo@2x.png 2x"
            type="image/png"
            media="(min-width: 1200px)"
        />
        <source
            srcset="./images/logo--mobile.png 1x, ./images/logo--mobile@2x.png 2x"
            type="image/png"
        />
        <img src="./images/logo.png" alt="Logo" />
    </picture>
</header>
```

Mobile, desktop, retina and even a fallback just in case. That's a heck of a lot better than 5 image tags with different display classes if you ask me.