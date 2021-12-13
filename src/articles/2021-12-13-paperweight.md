---
title: "Paperweight: a tale of onerous compliance"
author: "@pcraig3"
leadIn: "When the costs outweigh the no discernible benefits"
summary: "Why is it so hard to make a website for the government? Let’s see if we can measure it."
date: "2021-12-13"
---

[[toc]]

## Introduction

On July 31st, in the year of our Lord 2021, my team, working in a federal department, launched [a new website for citizen engagement](https://alpha.service.canada.ca/home). By showcasing early versions of ongoing projects and inviting Canadians to give feedback, our “Labs” site prioritizes [transparency](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds3) and [accountability to citizens](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds1) — important ideals that traditional government projects don’t always live up to. Despite the implied Grand Ideals™ however, it’s a relatively simple site: the equivalent of putting a small blog online. To a casual visitor, it has 4 pages and it does 2 things: you can see [a list of upcoming new services](https://alpha.service.canada.ca/projects), and you can [volunteer to test them out](https://alpha.service.canada.ca/signup). In large part due to its inherent simplicity, our small but determined team was able to launch it on time.

Did it feel good to finally release it? Heck yes.

Was it easy to get there? F\*ck no.

## Why is it so hard?

“[Why is it so hard to make a website for the government?](https://www.nytimes.com/interactive/2016/11/13/magazine/design-issue-code-for-america.html)” asks a twirling ASCII banana in a 2016 New York Magazine feature — something many of us have surely wondered. Well, this is the kind of deceptively simple question that probably merits a working group or at least 3 committees with overlapping acronyms. But since I don’t have 3 years to not come up with an answer, let’s see if we can glean any wisdom from my experience building and releasing a small site in a large federal department.

### Closed off vs opening up

Government tends to be pretty buttoned up about what it’s working on and how things are going. Sometimes this is justified: state secrets, upcoming changes to the tax code, military evacuations — there are definitely things that need to be closely guarded lest they put people in danger or let people game the system. Building a small website to ask Canadians for feedback on prototypes is absolutely **not** something that belongs in that category.

About a decade ago, the [Government Digital Service](https://www.gov.uk/government/organisations/government-digital-service/about) in the UK spearheaded a new style of online service delivery characterized by quick, iterative releases and [a commitment to openness](https://designnotes.blog.gov.uk/2017/03/24/doing-the-hard-work-to-make-things-open/). It was found to be a successful model — leading to cheaper, faster, and better quality online service delivery — and they haven’t looked back.

Today, most new digital services in the UK government are built by teams that publish their progress and proactively reach out to citizens: they quickly build services that users like. Imagine if applying for a passport was like signing up for Instagram: easy to complete on your phone by following a clear set of steps. This is how the majority of online government services in the UK are to use.

The Government of Canada has not yet undergone a large-scale transition in this direction, although there are some attempts being made ([COVID Alert](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html), for example, was [built quickly and in the open](https://sboots.ca/2020/10/30/working-in-the-open-firsts-for-covid-alert/)). More commonly, however, many Canadian federal government IT projects spend over a year and tens of millions of dollars before any part of the service is actually ready to be tested by actual Canadian citizens.

Our “Labs” site is a small but important step in creating a more responsive, more accountable government. Being able to demo ongoing work and talk publicly about progress is an important aspect of this.

## Talking about what we do

The kernel of this post is a presentation I gave a week after launch. Our core product team was deliberately small enough to get things done without getting in each other’s way, but this means you have to talk about what you do if you want people to hear about it.

(This is a good thing, by the way. Small teams getting on with their work and giving demos is far better than large teams where everyone knows nothing is going on.)

Having a small, multidisciplinary team meant we could quickly build the site itself, but it also resulted in our nearly getting snowed under as we progressed through the various internal gatekeepers.

My sense was that most of our compliance activities were based on inertia rather than utility, and I didn’t believe it was widely understood how much was being asked of us. So after the launch I put some numbers together (ie, data) to at least partially answer the question: “Why is it so hard to make a website for the government?”

So! With no further ado, this is a data-informed look at what it took to launch our “Labs” site inside a large federal department.

## By the numbers

To recap, we launched a user engagement site for the teams working on the next iteration of the department’s user portal. The site hosts [a public listing of prototypes](https://alpha.service.canada.ca/projects) — ‘sneak previews’ of new services being worked on. You can also [sign up to be a ‘user research participant’](https://alpha.service.canada.ca/signup) and give feedback on early versions of new services.

So that’s it: it’s a list of prototypes and a signup form.

But let’s be more data-y about this — by which I mean, {% footnoteref "numbers" "Keep in mind some of these numbers may have changed, but they were accurate at the time. Due in large part to the rest of this post, I no longer work at the department, so things may have changed." %}let’s use numbers to tell a story{% endfootnoteref %}.

### Our site, in numbers

Here are some basic numbers that give a sense of what we’re talking about.

- `1` website
- `12` pages
  - `4` pages most visitors will see
    - [Home](https://alpha.service.canada.ca/home)
    - [About](https://alpha.service.canada.ca/about)
    - [Projects](https://alpha.service.canada.ca/projects) (the ‘catalogue’)
    - [Sign up](https://alpha.service.canada.ca/signup)
  - `4` prototypes of upcoming services

It’s worth noting that the site is [frequently being iterated on](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds2), so if it doesn’t look exactly like that by the time you’re reading this, that’s okay — it’s supposed to change over time. Luckily, we can also follow along on GitHub, where [the source code is publicly available for anyone to see](https://github.com/DTS-STN/Alpha-Site).

### Coding in the open

Maybe it seems kind of nerdy, but public source code is really valuable for government teams to release. As citizens, we typically only see final versions of things — online services, ad campaigns, reports, and so on. We get the finished product, but we don’t see how it came to be. By looking at the public source code, we get a lot of visibility into the progress of the team, for example:

- [When it was first started](https://github.com/DTS-STN/Alpha-Site/commits/main?after=e2b07245c7a744e63a86edc0e598257018a1d38e+440&branch=main): March 17
- [When the last change was](https://github.com/DTS-STN/Alpha-Site/commits/main): 3 days ago (as of December 13, 2021)
- [How many people have worked on it](https://github.com/DTS-STN/Alpha-Site/graphs/contributors): 15
- [If the team works on Sundays](https://github.com/DTS-STN/Alpha-Site/graphs/commit-activity): Only once (week of June 11)

When Canada’s federal Digital Standards call for “[work[ing] in the open by default](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds3)”, this is exactly what they are referring to. By making source code publicly available, we can get really good insights into the technical portion of the product. However, this is only half the story: there is also a submerged body of governance and compliance work that is much harder to quantify.

### Measuring the hard to measure

When we talk about ‘data’, we’re usually talking about things that are easy to count and measure, but — as the cast of Rent knows — how do you measure a year(ly release)? ([In midnights? In cups of coffee?](https://www.youtube.com/watch?v=XNbwiGbETSQ)) Activities that don’t leave behind structured records can be pretty hard to quantify.

For our website, it would be really interesting to measure things like:

- How many meetings were scheduled
- How many emails were sent
- Total number of people involved outside of the core team

However, given the crush of meetings and emails many of my collagues have on a daily basis, reliably collecting this data isn’t really practical. My colleague [Sean Boots](https://twitter.com/sboots) built a [Meeting Cost Calculator](https://meetingcostcalculator.ca), but the underlying data we would need to plug into it isn’t available.

So what _can_ we measure related to project governance? Well, let’s look at some artefacts we **do** have: project documentation.

### Documented words

On the team, we used a shared folder for all the documents and diagrams created in the process of launching the site. In the folder, we have:

- `11` sub-folders
- `45` documents

But “45 documents” on its own doesn’t tell us much. What we want to know is how much effort they represent: what’s actually _in_ these documents? In other words, how much relevant, original text did real people (including me) have to write to get this site over the line?

To run this study, I opened every document (ignoring duplicates and diagrams), selected all the original text (removing templated content), pasted all of it into a new doc, and did a quick word count (hotkey: `Ctrl` + `Shift` + `G`).

<sub><span aria-hidden="true">🥁</span> Drumroll please… <span aria-hidden="true">🥁</span></sub>

- `39 230` (!) words

When you add up all the original (_non copy+pasted_) text in our various documents, presentations, justifications, and rationales, we get 39,230 words, which — to me — sounds like a lot of words.

#### How many words is a lot of words?

But _is it_ a lot of words? Of course, thirty-nine thousand and change sounds like a lot but what can we compare this to? It’s a good question.

I went looking for comparisons and I found a listing of [word counts for famous novels](http://commonplacebook.com/art/books/word-count-for-famous-novels/). If we pull out a couple, this is where we sit.

- `36 363` words: _The Lion, the Witch, and the Wardrobe_
- `39 230` words: compliance documentation for our 12-page website
- `47 094` words: _The Great Gatsby_

So we are in good company here, sandwiched between a beloved children’s novel and a classic tale of superficial excess.

Incidentally, November (so recently past) is “[National Novel Writing Month](https://nanowrimo.org)”: the goal of which is to write a 50k word novel, which it seems like we were only a few documents short of achieving.

And none of this is user-facing, mind you. Those 39,230 words represent only _the tax_ we paid to move our project through all the various internal groups and committees. Since none of that work is available to the public, even if we were writing the next Great Canadian Federal Novel (we weren’t), you would never get to see it.

### Words on the site

What about the words that _are_ user-facing? I’ve said a few times that it’s a small website, so maybe I should qualify that. I’ve counted nearly 40k words of internal documentation, but what is the word count of the actual site itself?

As I mentioned earlier, there are 12 individual pages, if you know where to find them — and since I was on the team, I did know where to find them. Pretty basic methodology again here: select all the text on the screen, paste into a large document, and grab a word count once you finish with all the pages.

- `4 305` words

Now, 4,305 words is nothing to sneeze at, but it’s hardly going to be accepted as [our NaNoWriMo submission](https://nanowrimo.org/sign-up). In fact, if we do a bit of math, we get this.

`39,230 / 4,305 = 9.11`

Rounding down, we’re looking at roughly a 9:1 ratio of internal vs. external content. To put that another way, **for every 10 words we write on this team, 1 word is for the site itself — the actual thing we are trying to release — and 9 words are for internal governance**, to be read once or twice (if ever), and then filed away somewhere.

In our case, it meant that for our 12-page site, we ended up writing almost as much as the Great Gatsby.

> "Never was so much written by so few for no reason."
> — Winston Churchill once said, referring to our website.

## The way forward

In the department, building cloud-centric applications was correctly understood to be a new technological paradigm about _speeding up_ development cycles and managing _less_ infrastructure. However, accompanying changes to internal compliance were [a purely additive process](https://sboots.ca/2020/01/28/introducing-agile-to-large-organizations-is-a-subtractive-process-not-an-additive-one/) that _slowed down_ the team and created _more_ paperwork.

Instead of adopting an attitude of ‘let’s see what makes sense for this application’, it was treated more like ‘let’s do everything we currently do, plus extra documentation now that we’re adding new technology.’

I’m not saying we shouldn’t have _any_ compliance processes — of course we need security reviews and internal documentation? But we need procedures that are _proportional_ to the outcomes, and that adapt to changing situations.

I am saying we should _not accept_ rapacious, unmanaged internal processes that consume ever more time and paper for smaller and smaller outcomes, that take the energy and enthusiasm of motivated teams and feed them into a woodchipper.

Instead of adding ever more checks and imbalances to procedures created decades ago, we need to engage with the question of whether burying teams under reams of paper results in _any_ measurably better outcomes for Canadians.

“But isn’t excessive paperwork just ‘how government works’?”, I hear you asking. Well, it depends. Small, nimble teams with more autonomy and dramatically less overhead have become a norm in the UK, a larger government than ours. This is the same model used to successfully build and release COVID Alert — a much more complex, nationwide application.

There _is_ a better way, we just aren’t using it.
