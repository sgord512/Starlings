---
layout: post
title: Salt of the Earth
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '21033641'
  jabber_published: '1315194396'
  email_notification: '1315194396'
---
Ok, so a while back I mentioned that I have, at least sometimes, started to think of computers as having no magic in them whatsoever, no intelligence, nothing beyond the comprehension of the average individual. Computers are, from this perspective, nothing more than a huge number of switches lined up in neat little rows and shrunk down to fit into a very small space. Everything you do on a computer can ultimately be reduced to a very complicated sequence of switches flipping, in a CPU, on a hard disk, in RAM. The way these different components interact is a little tricky, and I don't really know all that much about computer hardware or architecture, so I don't want to venture into that realm.

But I do know that computers are not magical in the slightest, by which I mean to say that every behavior can be explained in terms of smaller component behaviors. Every behavior has a direct physical representation, perhaps a very complicated one, but it all bottoms out with switches, always. This is the reductionist's greatest dream come true, and it is this total visibility that distinguishes computer science from pretty much every other branch of science.

What's cool about computer science is you don't ever have to take anything for granted. Literally everything can be understood by going one level deeper, one level closer to the stupid switches. Now, I'm not saying that you should in fact know everything going at every level, but the ability to navigate seamlessly between levels of abstraction is an incredibly valuable skill for any computer scientist, as inevitably, abstractions will leak all over the place (See http://www.joelonsoftware.com/articles/LeakyAbstractions.html). When programming, all of the hardest bugs I've had to fix have been operating at different levels of abstraction than I am expecting, and only when I was able to question the assumption that the bug was on a particular level was I actually able to fix it.

Functional programming allows you to do this easily, since you can almost always break a program into a bunch of different functions in a hierarchy, and start at the top of the hierarchy, and keep examining different functions until you pinpoint the bug.

By dealing with only pure functions as opposed to methods that can change global state, you can be assured that if the input of a function is good and the output is bad, that function is responsible for the error you are seeing. This is as opposed to imperative languages, where you are dealing with complicated states, and many different functions can alter some object's state. In that paradigm, it's hard to pin down where exactly something has gone wrong, as control flow, and state modification have essentially no restrictions.

Anyway, back to the idea that a computer can be understood all the way to the switches (by the way, I talk about switches instead of bits, because I think the electronic nature of bits makes them seem like something magical, which obscures their essential simplicity): A great many computer science concepts which seem arbitrary and kind of beyond comprehension at first, turn out to be very easily understood when you start programming. As you keep programming, you will inevitably have these moments where you will find yourself doing something tedious or repetitive, and you will think that you need a better system for getting stuff done. I know this is vague, but bear with me.

Example: I start programming for fun. I write some small toy programs, and then decide to write something that is going to be on a larger scale, and I know that I have to be organized about it to make anything halfway-decent. So I start making an overview document, in which I plan to log all changes, and I decide that I will always copy a file into a separate directory before I make any changes, so that I can make sure that I have the original file around, if any of my changes break the program, or if I want to see what changes I've made since the last stable version.

Well, I keep doing this, and eventually I end up with something that looks a lot like a version control system. It turns out that other people have run into the same trouble trying to keep a large project organized, and that they have built these systems to solve those problems. Git, Mercurial, Subversion, all of these are the result of people hitting this wall, and just trying to think about how they would solve the problem in a logical and automatic way.

It turns out that you can understand version control pretty intuitively by just thinking through what you would do when you ran up against this problem. There is no magic. In computer science, if you just ask yourself what you would do in a particular situation (and take enough stuff into consideration), you will end up hitting upon something like the solutions that exist now.

Another example: I always found interpreters to be beyond my grasp until recently. I just started thinking about how I would write an interpreter, and I came up with some ideas: I needed to have some way of parsing strings to expressions, and storing a table of defined symbols, and evaluating strings to literals. And here's the great part. When you actually start to look at how interpreters are made, they have all of the above types of functionality, and they're not so far off from what you would naturally expect.

A certain amount of experience is necessary to be able to keep in mind all the salient considerations for any particular piece of software, but I have found that once you have that, you can understand pretty much everything by just thinking of how you would go about writing the same software.

This is a long post, and I've got other stuff to do, so I will have to end it here.

-Spencer
