TODO: 
=====
- Update the list of posts, and make sure that the paragraph formatting isn't lost in the conversion from the giant wordpress dump
- Clean up the repo, so that I can have push work smoothly, and then generate the site on the server
- Write some script that lets me save a text file, and then post it and have it show up on the site automatically, without any problems.
- Maybe set some way of adding posts on the website directly, through a javascript text editor, with some light MVC framework
-Get together truth tables with raphael.js that I can use to finish my truth-functional logic app-thingy. Also, it will be awesome to show that off.
- Write a script that can do all the redeployment needed:
## starlings: ##
### How do I want the scripts to work: ###
- 'starlings on' should turn the site on, with whatever settings were last provided.
- 'starlings off' should turn the site off.
- 'starlings status' should tell me what is currently going on with the site. 
- 'starlings' should just be the same as 'starlings status'

- Get some analytics in place. 
- Figure out some way of working email subscriptions into the mix
I'm going to use MailChimp I think, though I should look into the options listed at stackparts.com

- Put a favicon in place. 
- Get the side navigation to be shiny and orangeable just like the expanding ones
- Keep working on my truth table app
- Figure out a way to separate the non-blog stuff from the rest, so that I can run them separately, and don't have to recompile whenever I want to test those parts. 
- Maybe I should just make the site dynamic entirely.??...!?...
- Clean up all the excess in bootstrap that is making it annoying and hard to modify. 
- Get a local copy of MathJax for testing purposes. 
- Git hooks, or something like that. 
- Figure out a way to udate the site and temporarily have an under-construction page put up. 
- Figure out a way to server 404 errors. 
- Get an actual file server set up. 

server:
-------
I have a basic server totally in place using node, that is actually pretty fast. 


DONE:
=====
- Update the list of posts, and make sure that the paragraph formatting isn't lost in the conversion from the giant wordpress dump
- Clean up the repo, so that I can have push work smoothly, and then generate the site on the server
- Figure out a way to handle the serving

BUGS:
=====
- Post pages have lost their template	
This is the same error I had a long long time ago, which I don't remember how I fixed, but it probably would be most helpful to go and figure out how other sites do their layout.  
Ok, I have fixed it. Basically, the issue was that I had removed "_layouts/post.html". Then when I replaced that, I had to fix it up.
Basically I made the posts layout be laid out inside the default page. This enables me to get the data to render, b/c I need it to be processed by Jekyll, and for that I need it to have YAML Front Matter.
The related problem where I can't get any content to show up is the result of not having a file processed by Jekyll due to lack of YAML Front Matter.


I modified this, and there should be some changes correspondingly in the repo.