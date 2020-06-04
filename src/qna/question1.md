---
id: 1
question: "Write clean, modular, reusable CSS and SCSS?"
---

I've used a lot of Bootstrap in my time as a developer, and while some may frown upon that as "cheating" or a "shortcut", I've used it as an opportunity to see how enterprise companies modularize their code.

In one such example, I took the Bootstrap style of color mapping to create a light theme and dark theme for my portfolio redesign.

```CSS
$light-theme: () !default;
$light-theme: map-merge(
    (
        "primary": $burntYellow,
        "bg-color": $light,
        "bg-color-alt": darken($light, 10),
        "text-color": $darkBlue,
        "link-color": $purple,
        "link-color-state": darken($purple, 10),
        "border-color": darken($light, 25),
    ),
    $light-theme
);

$dark-theme: () !default;
$dark-theme: map-merge(
    (
        "primary": $brightYellow,
        "bg-color": $dark,
        "bg-color-alt": lighten($dark, 10),
        "text-color": $light,
        "link-color": $teal,
        "link-color-state": darken($teal, 10),
        "border-color": lighten($dark, 25),
    ),
    $dark-theme
);
```

Then I used some SASS functionality to loop through each map item and create CSS variables for each theme. Since each map uses the same color names, changes in themes are seamless!

```CSS
.light-theme {
    @each $color, $value in $light-theme {
        --#{$color}: #{$value};
    }
}

.dark-theme {
    @each $color, $value in $dark-theme {
        --#{$color}: #{$value};
    }
}
```