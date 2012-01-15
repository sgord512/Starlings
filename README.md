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
- Figure out how I am going to serve everything

server:
-------
- Use node
This looks the most promising at the moment. I can get a really simple static server up and running on my linode, but I can't get it to accept requests. I will have to look into how that works. 
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
This is the same error I had a long long time ago, which I don't remember how I fixed, but it probably would be most helpful to go and figure out how other sites do their layout.  
Ok, I have fixed it. Basically, the issue was that I had removed "_layouts/post.html". Then when I replaced that, I had to fix it up.
Basically I made the posts layout be laid out inside the default page. This enables me to get the data to render, b/c I need it to be processed by Jekyll, and for that I need it to have YAML Front Matter.
The related problem where I can't get any content to show up is the result of not having a file processed by Jekyll due to lack of YAML Front Matter.


I modified this, and there should be some changes correspondingly in the repo.