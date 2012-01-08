TODO: 
=====
- Update the list of posts, and make sure that the paragraph formatting isn't lost in the conversion from the giant wordpress dump
- Clean up the repo, so that I can have push work smoothly, and then generate the site on the server
- Write some script that lets me save a text file, and then post it and have it show up on the site automatically, without any problems.
- Maybe set some way of adding posts on the website directly, through a javascript text editor, with some light MVC framework
- Write a script that can do all the redeployment needed:

starlings:
----------
How do I want the scripts to work: 
- 'starlings on' should turn the site on, with whatever settings were last provided.
- 'starlings off' should turn the site off.
- 'starlings status' should tell me what is currently going on with the site. 
- 'starlings' should just be the same as 'starlings status'

- Get some analytics in place. 
- Figure out some way of working email subscriptions into the mix
- Figure out how I am going to serve everything

server:
-------
- Use node
This looks the most promising at the moment
- Use rack
- Use lighttpd
- Use nginx

DONE:
=====
- Update the list of posts, and make sure that the paragraph formatting isn't lost in the conversion from the giant wordpress dump
- Clean up the repo, so that I can have push work smoothly, and then generate the site on the server

BUGS:
=====
- Post pages have lost their template	