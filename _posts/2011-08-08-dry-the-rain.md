---
layout: post
title: Dry The Rain?
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '21033641'
  jabber_published: '1312784717'
  email_notification: '1312784718'
  _wpas_skip_fb: '1'
---
Over the past month or two I've invested almost all of my free time in the exploration of different programming languages. I've spent the most time on Haskell by far, but I've looked into quite a few, and read quite a lot on the topic, and I feel like I am getting to the point of being able to have something slightly intelligent about the subject.

I've now programmed in Haskell, Python, Ruby, Java, C, C++, Racket/Scheme/Lisp, and I think I have a wide enough base of knowledge know that I can pick up a language and start making headway with it in a short period of time. If the documentation is good enough, There's little I can't figure out how to do.

I had the idea a while back that it was my destiny to create a programming language of my own. I don't mean destiny in a sword-and-prophecy, Greek-tragedy, story-telling kind of way, but rather as an organizing goal around which I could focus my efforts, a context in which I could look at the languages I was learning. I think it would be awesome to create my own language, to then let it loose into the world to have whatever impact it would. I've not given myself any sort of timeline, and I don't have anything concrete planned at the moment, but I'm keeping that goal in mind, and I'll see what happens. So for the past month or so, whenever I saw something interesting, I could ask whether this was a feature I would want in my ideal language, whether I think it actually was beneficial to the programmer, making it easier to read, write, and maintain a program, or whether it was a distraction that would inevitably ending up doing more harm than good.

The features I've come to think very highly of are mostly those that allow the intentions of the programmer to be expressed more directly, which allow the programmer to think at whatever level of abstraction he or she chooses, without being constrained by the capacities of the language. So this means that I want higher-order functions, first-class functions, algebraic datatypes, pattern-matching, closures, lambdas, and typeclasses.

I don't really care about OO at all, and at the moment, I think that the world has spun too far in the direction of Object-Oriented programming, and that we have a long ways to go before there is even the possibility of it being underused. Continually I find that Object-Oriented programming translates into practice into continually trying to work around the restrictions imposed by the system, making it a constant battle to get the code to do what you want it to. Many of the features that are touted by proponents of OO programming are not limited to that paradigm, and show up in functional languages. Haskell's typeclasses are essentially the same as Java interfaces. Class hierarchies are similarly possible in Haskell, and using abstract datatypes (which are admittedly a little bit tricky in Haskell) you can also mimic the encapsulation and state-controlling features of OO. (Though at the moment, I am a big fan of monads, and I think that they can provide a pretty powerful mechanism for doing the kind of stuff that is traditionally thought of as archetypal problems for OO to deal with.

I was reading some interview from <i>Masterminds of Programming</i> in which the interviewee expressed the opinion that the idea that there is some holy grail of programming languages out there, a perfect language that will allow for perfect expression of all thoughts, is utterly wrong, and any time spent trying to come up with one is an utter waste of time.

In the interviewee's opinion, the ideal situation re: programming languages is for there to be a profusion of domain-specific languages (DSLs), small languages with simple syntax and vocabularies designed for working in a particular domain. This is not a new idea, and DSLs exist today in all sorts of different places, although they haven't really taken hold in computing that much. For example, Western Music Theory uses a language of scales and modes and melodies and rhythms that allows musicians to communicate their ideas in way that can be understood by others, and which is suited to the type of composition that they want to do. (As a side note, in the 20th century, when composers became dissatisfied with that language, they invented their own languages, most famous of which is Twelve-Tone Composition.)

While I initially was taken aback by that idea, I'm beginning to think that it makes a lot of sense. When I program anything, a lot of the work consists in building up a vocabulary of verbs and nouns that I can string together to make complex behavior. When I write a todo-list application, I define many of the following: "deadlines" "importances" "lists" "entries". I don't consciously think about what I'm doing as defining a DSL, but that seems like a pretty good description of the activity. I suspect that most programmers would recognize that kind of work in their own experience, and would find that the concept of a DSL captures their activity pretty well.

Haskell, which is the subject of most of my attention these days, is used in academia for a lot of research on DSLs, and I've seen it expressed many times that Haskell is particularly well-suited to creating a domain-specific language, and that that capacity is its most extraordinary feature. Do I agree? Maybe.

-Spencer, your hapless correspondent.
