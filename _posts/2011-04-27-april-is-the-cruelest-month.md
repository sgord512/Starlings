---
layout: post
title: April is the cruelest month
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '21033641'
  jabber_published: '1303855232'
---
It's actually really nice here in Providence, and if it were to consistently be this way, it would be awesome (at least for people who like these kinds of things), but currently it cools down and rains every other day or so, and the nights are cold and blustery. I'm actually a fan of rain, and blustery weather, but I know this preference is unusual, and so henceforth, when I discuss the weather, I shall pretend to like the same kind of weather as that preferred by my more conventional acquaintances. Wow, that sounded elitist, and pretentious, and meant it to be humorous, with a sarcastic tone. But it did not come across that way.

Anyway, so I've been reading a lot of computer science blogs, and thinking a lot about computer science, and I think I am ready to start a series on computer science again, in which I try to explain what exactly the field of computer science is, in layman's terms.

I actually should be working now, so I will keep it short, but here's the introduction:

When you think about exactly what it is that a computer does, it quickly becomes clear that there are some major limitations on the kinds of problems that computers can solve. I like to say that a computer is like an imagination machine, a device that can do anything that you can imagine, if you just program it right. But that isn't really true, and even if it were, programming it right is far from trivial. In some general sense, computers are all about handling data, about converting bits to other bits with staggering rapidity. Already, this definition restricts the type of data that can be processed to discrete quantities, or just sets of numbers, theoretically in any base though binary has killed off all alternatives (ignoring quantum computing, which is just weird.) This is a really big deal, because if you want to handle some data, you have to find a way to turn it into bit strings, and if you are trying to measure anything continuous, you have to think very carefully about how you are going to digitize it, what information you are going to lose, and how to preserve the features that are salient to you. Nowadays, systems like Mathematica abstract away concerns about the representation of numbers, but you mustn't forget that in the end you cannot be infinitely precise, any when you calculate with a number like pi, Mathematica is behind the scenes calculating to the requested precision, and then rounding. If you want more digits, Mathematica has to crank them out on the spot, since you can't just enumerate all the digits of pi. How does this come into play when using a computer? The obvious example is one that many of you are probably familiar with. You do some calculation, and round in an intermediate step, and your answer is a little bit off to drastically off, depending on the nature of the calculation. That is just the beginning, and it gets worse. I'm getting to work now, but tune in for more later.

-Cool air up coming up from the vent on my left side. 
