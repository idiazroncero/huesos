---
title: FAQs
status: draft
---

### Why don't you use lobotomized owl?

Even if we agree that [lobotomized owl](https://css-tricks.com/lobotomized-owls/) is one of the most ingenious techniques we've seen for a while, we want also to stick to the __only margin-bottoms__ rule... and that is opposite to the way the lobotomized owl works.

So... no global lobotomized owls, for the time being. But... you can still use `.owl` helpers to apply it at a block-level!

### Your <ul\> and <ol\> are wrong!

Nope, they're right. It's the whole internet who's wrong. Read _hanging punctuation_ section on [this article](https://betterwebtype.com/articles/2018/10/15/rhythm-in-web-typography/) to see why.

Unconvinced? Set `$list-padding` to other than `0` and be as happily wrong as 90% of the web.

### Why don't you use glob patterns to import scss files?

Manually importing scss files on `_huesos.scss` is cumbersome. It looks like a stupid thing to do when you could just `@import src/**/*.scss`.

There is a reason behind, though. As a framework, Huesos strive for flexibility and customization. For example, we might need to drop all the `components` part for a proyect in order to reduce Huesos to a global reset. Or we might just hate the `navigation` part and want to replace it with our own.

Having all the `@import`s exposed on a single `_huesos.scss` file allows for easy customization of your bundle: if you want to drop some parts of the code you just need to comment them out. You can't do this with glob patterns.

