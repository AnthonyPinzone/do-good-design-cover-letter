---
id: 8
question: "Constantly stay on top of and look forward to using the latest tools such as CSS grid, flexbox, ES6, etc?"
---

Once support for **flexbox** had enough browser support I jumped in and never looked back. It's probably my most frequently used feature of the CSS3 spec.

CSS Grid I'm a little more green to, but have actually just utilized it to complete a complicated header layout that had a ton of moving parts between the mobile and desktop displays.

Before jumping into the CSS Grid example below, I'd be remissed if I didn't callout arrow functions, destructuring and array mapping as my go-to ES6 features.

```CSS
.header-grid {
    display: grid;
    grid-template-areas:
        "hcp hcp hcp hcp"
        "logo logo . toggle"
        "logo logo rep rep"
        "bluebar bluebar bluebar bluebar"

    @media (min-width: 992px) {
        grid-template-areas:
            "logo ancillary hcp"
            "logo ancillary search"
            "logo ancillary rep"
    }
}

.hcp-only { grid-area: hcp; }

.logo { grid-area: logo; }

.navbar-toggler { grid-area: toggle; }

.ancillary-header-links {
    grid-area: bluebar;

    @media (min-width: 992px) {
        grid-area: ancillary;
    }
}

.rep-link { grid-area: rep; }

.search {
    grid-area: bluebar;

    @media (min-width: 992px) {
        grid-area: search;
    }
}
```

This is condensed down, but you can tell just from the ```grid-template-areas``` setup that things were moving around. I hated that I had to use a different section name for some items, but the search and ancillary links shared a space on mobile, while having their own space on desktop. I have a lot left to learn about **css-grid** but just working with it on this small template opened my eyes to how powerful a tool it can be.