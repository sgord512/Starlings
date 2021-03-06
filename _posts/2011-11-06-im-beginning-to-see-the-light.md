---
layout: post
title: I'm beginning to see the light
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '21033641'
  jabber_published: '1320596883'
  email_notification: '1320596885'
---
I woke up early this morning, was out of bed at 7am. Tried to go to breakfast, realized the dining halls were all closed, returned to my room, and tried to figure out what to do for the next three and a half hours. I thought about doing homework, but I looked at the problem sets I had, and didn't feel like doing them at the time.

So I decided to work on my website project, and I started doing that. In accordance with my way of doing things, I'm getting way too hardcore about this site. My original goal was to get total control over the content of my website, and I thought I could somehow just generate a folder of static pages that I could upload somewhere, in order to actually deploy. And there probably is a way to do just that, but at some point in my research I rejected that approach for whatever reason, and my new approach is to control every aspect of the web hosting/development/deployment/whatever process, and it is turning out to be quite an involved and annoying process, and I'm having to get into all sorts of arcana that offends my self-image as a big-picture-kind-of-guy. But it's too late to stop now. Analogy: It's like I've opened Pandora's box, and now I have to catalog every goddamn one of the creatures that swarmed forth, and I have to know their whole fucking ecology, and I have to make sure I don't get bitten in the process.

To bring this back down to earth (as if the layers upon layers of software abstractions are any more concrete), I'm renting a machine running Ubuntu 10.04 in a datacenter in Newark, NJ. I've spent the last couple hours SSH'ing into that box (nicknamed spinoza), installing a whole bunch of random packages (emacs, git, apache, etc.), so that I can later run my server on it. I also bought some domain names, which I'll have to separately hook up to the IP of the server.

As for the site itself, I'm writing a ruby script to generate the site from a whole bunch of post files written in markdown, and some template files. I'm also using the [twitter/bootstrap](http://twitter.github.com/bootstrap/ "twitter/bootstrap") css/javascript/html toolkit, which makes everything really professional looking, but which I have to customize to get working in the way I would like. Isn't this exciting.

Change of topic: _The Velvet Underground and Nico_ is really an incredible album, and I seem to have a new favorite track every time I listen. Recently, it's been "The Black Angel's Death Song", a spoken-word ramble surrounded by a swarm of eerie violin and tape hisses and clicks. In it, you can totally see the prototype for "Murder Mystery" on _The Velvet Underground_ another of my favorite tracks.  The lyrics are utterly insane, and I love it:
> "Candy screen wrappers of silkscreen fantastic, requiring memories, both lovely and guiltfree, lurid and lovely with twilight of ages, luscious and lovely and filthy with laghter, laconic giggles, ennui fort the passions, in order to justify most spurious desires, rectify moments, most serious and urgent, to hail upon the face of most odious time, requiring replies most facile and vacuous, with words nearly singed, with the heartbeat of passions, spew forth with the grace of a tart going under, subject of great concern, noble origin
>
> 
>
> Denigrate obtuse and active verbs pronouns, skewer the sieve of optical sewer, release the handle that holds all the gates up, puncture the eyeballls, that seep all the muck up, read all the books and he people worth reading and still see the muck on the sky of the ceiling
>
> 
>
> Please raise the flag rosy red carpet envy english used here is messenger is nervous it's no fun at all out here in the hall
>
> 
>
> Mister moonlight succulent smooth and gorgeous. Isn't it nice? We're number One and so forth. Isn't it sweet being unique?
>
> 
>
> For screeching and yelling and various offenses, lower the queen and bend her over the tub, against the state, the country, the committe, hold her head under the water please for an hour, for groveling and spewing and various offenses, puncture the bloat with the wing of a sparrow, the inverse, the obverse, the converse,the reverse, the sharpening wing of the edge of a sparrow, for suitable reckonings too numerous to mention, as the queen is fat she is devoured by rats there is one way to skin a cat or poison a rat it is hetero four hear to three forthirightly stated.
>
> 
>
> relent and obverse and inverse and perverse and reverse the inverse of perverse and reverse and reverse an reverse and reverse and reverse and chop it and pluck it and cut it and spit it and sew it to joy on the edge of a cyclop and spinet it to rage on the edge of a cylindrical minute.
>
> 
>
> Put down that rag simpering, callow and morose who let you in? if I knew, then I could get out the murder you see is a mystery to me
>
> 
>
> dear Mister Muse fellow of wit and gentry medieval ruse filling the shallow and empty, fools that duel duel in pools.
>
> 
>
> To Rembrandt and Oswald, to peanuts and ketchup, sanctimonious sycophants stir in the bushes, up to the stand with your foot on the bible as king I must order and constantly arouse, if you swear to catch up and throw up and up up, a king full of virgin kiss me and spin it, excuse to willow and wander dark wonders divest me of robes-sutures Harry and pig meat, the fate of a nation, rests hard on your bosoms, the king on his throne, puts his hand down his robe, the torture of inverse and silk screen and Harry, and set the tongue squealing the reverse and inverse
>
> 
>
> Tantalize poets with visions of grandeur, their faces turn blue with the reek of the compost, as the livig try hard to retain what the dead lost, with double dead sickness from writing at what cost and business and business and reverse and reverse and set the brain reeling the inverse and perverse
>
> 
>
> Objections suffice apelike and tactile bassoon oboeing me cordon the virus' section off to the left is what is not right
>
> 
>
> English arcane tantamount here to frenzy passing for me lascivious elder passion corpulent filth disguised as silk
>
> 
>
> Contempt, contempt and contempt for the boredom, I shall poison the city and sink it with fire, for Cordless and Harry and Apepig and Scissor, the messenger's wig seems fraught with desire, for blueberry picnics and pince-nez and magpies, the mseenger's skirt, would you plaese hook it higher, for children and adults all thos under ninety, how truly disgusting. Would you please put it down? a stray in this fray is no condom worth saving, as king I'm quite just, but it's just quite impossible, a robe and a robe and a robe and a bat, no double class inverse could make lying worth dying
>
> 
>
> With cheap simian melodies, hillbilly outgush, for illiterate ramblings for cheap understanding the simple the inverse, the compost, the reverse, the obtuse and stupid, and business, and business, and cheap, stupid lyrics, and simple mass reverse while the real thing is dying
>
> 
>
> Accept the pig, enter the Owl and Gorgeous, King on the left, it on the right and primping adjusting his nose as he reads from his scroll
>
> folksy knockwurst peel back the skin of French and what do you find? follicles intertwinning, succulent prose wrapped up in robes
>
> 
>
> Off with his head, take his head from his neck off, requiring memories both lovely and guiltfree, put out his eyes, then cut his nose off, sanctimonious sycophants stir in the bushes, scoop out his brain, put a string where his ears were, all the king's horses and all the king's men, swing the whole mess at the end of the wire, scratch out his eyes with the tip of a razor, let the wire extend from the tip of a rose, Caroline, Caroline, Caroline, Oh! but retains the remnants of what once was a nose, pass me my robe, fill my bath up with water
>
> 
>
> jumpsuit and pig meat and making his fortune, while making them happy with the inverse and obverse and making them happy and making them happy with the coy and the stupid, just another dumb lackey, who puts out one thing, while singing the other, but the real thing's alone and it is no man's brother
>
> 
>
> No one knows no nose is good news and senseless extend the wine drink here toast to selfless ten year old port is perfect in court
>
> 
>
> safety is nice not an unwise word spoken scary, bad dreams made safe in lovely songs no doom or gloom allowed in this room
>
> 
>
> Casbah and Cascade and Rosehip and Feeling, Cascade and Cyanide, Rachaminoff, Beethoven skull silly wagon and justice and perverse and reverse the inverse and inverse and inverse, blueberry catalog, questionable earnings, hustler's lament and the rest will in due cry, to battle and scramble and browbeat and hurt while chewing on minstrels and choking on dirt, disease please seems the order of the day, please the king, please the king, please the king day, Casbah and Cascade and Rosehip and Feeling, point of order return the king here to the ceiling
>
> 
>
> oh, not to be whistled or studied or hummed or remembered at nights, when the I is alone, but to skewer and ravage and savage and split with the grace of a diamond, bellicose wit, to stun and to stagger with words as such stone, that those who do hear cannot again return home
>
> 
>
> Razzamatazz, there's nothing on my shoulder, lust is a must, shaving my head's made me bolder, will you kindly read what it was I brought thee
>
> 
>
> Hello to Ray, hello to Godiva and Angel, who let you in? isn't it nice the party? aren't the lights pretty at night?
>
> 
>
> Sick leaf and sorrow and pincers net-scissors, regard and refrain from the daughters of marriage, regards for the elders and youngest in carriage, regard and regard for the inverse and perverse and obverse, and diverse, of reverse and reverse, regard from the sick, the dumb, and the camel from pump's storing water, like brain is too marrow to x-ray and filthy and cutting and peeling to skin and to skin and to bone and to structure to livid and pallid and turgid and structured and structured and structured and structured and structured and regard and refrain, the sick and the dumb, inverse, reverse and perverse
>
> 
>
> Contempt, contempt, and contempt for the seething for writhing and reeling and two-bit reportage, for sick with the body and sinister holy, the drown burst blue babies now dead on the seashore, the valorous horseman, who hang from the ceiling, the pig on the carpet, the dusty pale jissom, that has no effect for the sick with the see-saw, the inverse, obverse converse, reverse of reverse the diverse and converse of reverse and perverse and sweet pyrotechnics, and let's have another of inverse, converse, diverse, perverse and reverse, hell's graveyard is damned as they chew on their brains, the slick and the scum, reverse, inverse and perverse
>
> 
>
> Plowing while it's done away dumb and ready pig meat sick upon the carpet climb into the casket safe within the parapet sack is in the parapet pigs are out and growling slaughter by the seashore see the lifeguard drowning sea is full of fishes fish's full of china china plates are falling all fall down sick and shiny carpet lie before my eyes eyes lead me to the ceiling walk upon the wall wall tender as the green grass drink the whisky horror see the young girls dancing flies upon the beaches beaches are for sailors nuns across the sea-wall black hood horseman raging swordsman eating fire
>
> 
>
> Sick upon the staircase sick upon the staircase blood upon the pillow climb into the parapet see the church bells gleaming knife that scrapes a sick plates of dentures full of air holes the tailor couldn't mend straight shoot her full of air holes climbing up the casket take me to the casket teeth upon her red throat screw me in the daisies rip apart her holler snip the seas fantastic treat her like a sailor full and free and nervous out to make his fortune either this or that way sickly or in good health piss upon a building like a dog in training teach to heel or holler yodel on a sing song down upon the carpet
>
> 
>
> Fire on the carpet set the house ablazing seize and bring it flaming gently to the ground ground Dizzy Bell Miss Fortune fat and full of love-juice drip it on the carpet down below the fire hose weep and whisky fortune sail me to the moon, dear drunken dungeon sailors headless Roman horsemen the king and queen are empty their heads are in the outhouse fish upon the water bowl upon the saviour tooothless wigged Laureate plain and full of fancy name upon a letterhead impressing all wheatgerm love you for a nickel ball you for a quarter set the casket flaming do not go gentle blazing
>
> 
>
> Tickle polyester sick within the parapet screwing for a dollar sucking on a fire-hose chewing on a rubber line tied to chairs and rare bits pay another player oh you're such a good lad here's another dollar tie him to the bedpost sick with witches' covens craving for a raw meat bones upon the metal sick upon the circle down upon the carpet down upon the carpet down below the parapet waiting for your bidding pig upon the carpet tumescent railroad neuro-anaesthesia analog ready for a good look drooling at the birches swinging from the birches succulent Nebraska"
>

(Taken from lyricsmode.com)

That's that.

-Spencer
