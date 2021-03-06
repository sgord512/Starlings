---
layout: post
title: How to get Started Programming on Mac OS X
tags:
- guides
status: publish
type: post
published: true
meta:
  _edit_last: '21033641'
  jabber_published: '1306745318'
  _wpas_skip_fb: '1'
---
One of the most daunting challenges to a would-be programmer is figuring out how to get the necessary tools on his or her computer, and then figuring out how to use them to get started compiling (or interpreting) and then running programs. While most people who have been programming for a while take these kinds of skills for granted, there is a lot to learn at the beginning, and in my experience, there aren't many good resources that give a bigger picture of what it is like to actually deal with programming on a computer in a sufficiently general manner. Most teaching books will cover the tools for one language only, and in a step-by-step way that doesn't provide any understanding of what's going on. So here's my attempt to fix that gap.

**Know your environment:**

I am focusing on Mac OS X, because that is what I program in, but the ideas here should be applicable particularly to Linux systems, and with some modifications to Windows.

First things first: Open the Terminal. The Terminal is an application, and starts off in the Applications folder, in the sub-directory called Utilities.

You should see a new window open up, with a few lines of black text in a sea of white. The last line of text should say something like:
<pre>FirstName-LastName's-Mac:~username$</pre>
This line is going to become very familiar to you, and it is comprised of two parts. The text before the colon is the name of the computer, which someone specified when it was first configured. It will be the same so long as you are working at that computer, but if you work on other computers you can see some other names. Anyway the important part is after the colon. Immediately following the colon is a tilde, and generally that's where you are going to see your current location, also known as the working directory. Following that the username is displayed of the user who initialized this particular instance of the terminal. Almost always, this is going to be whichever user is currently logged in, so it should be your username. The last symbol on the line, a dollar sign, is there mostly just to signal the end of the line, and you can ignore its meaning for now.

Ok, so back to the tilde. The tilde is one of four special symbols that represent special locations on computer. It stands for the home directory of the current user. Directories are going to be very important, so understanding how they work is very important. Directories are essentially folders, and so the tilde is your home folder. All of the information on a Unix based system (like Mac OS X or Linux) is stored in directories and files inside those directories. Directories can be located within other directories, and in fact the entire filesystem is contained in another special directory, known as the root directory, which is often represented with a single forward-slash '/'. It's name comes from envisioning the file-system as a tree, where each directory is a branch, the root being the trunk and roots, and all the directories it contains being branches off from the trunk. The two remaining special directories are represented by a single dot, '.' and a double dot '..', and they can be read as this directory and this directory's parent directory, respectively. At the moment, since we are in the user's home directory,  '.' can be replaced with '~' without changing anything.

But this is not always true. And this is because '.' and '..' describe locations relatively, while '~' and '/' describe absolute locations. No matter where you are, if you type a forward-slash you are referring to the root directory, but the meaning of '.' is different for every single directory. The symbol for the parent directory, '..', is also a relative location since the parent of this directory is going to depend obviously on what this directory is. The parent is the directory that contains the directory that you are currently in. Since all directories are held in the root directory, if you keep tracing back parent directories, you will always end up at the root. Who is the parent of the root? Well, it turns out if you try to go to the parent of the root, you will stay at the root, but this doesn't really mean that the root is it's own parent, just that has no parent to go to .

Continued in [Part 2](/2011/06/01/how-to-get-started-programming-on-max-os-x-part-2/ "How to get Started Programming on Max OS X, Part 2").

Next up, we learn some commands and learn about the shell! Exciting stuff, I know.
