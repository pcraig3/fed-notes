---
title: "Paperweight: a cautionary tale of onerous oversight"
author: "@pcraig3"
leadIn: "Why is it so hard to make a website for the government?"
metaDescription: "Why is it so hard to make a website for the government? Let’s investigate."
ogDescription: "Why is it so hard to make a website for the government?"
date: "2021-12-15"
---

[[toc]]

## Introduction

On July 31st, in the year of our Lord 2021, my team, working in a federal department, launched [a new website for citizen engagement](https://alpha.service.canada.ca/home). By showcasing early versions of ongoing projects and inviting Canadians to give feedback, our “Labs” site prioritizes [transparency](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds3) and [accountability to citizens](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds1) — important ideals that traditional government projects don’t always live up to. Despite the implied Grand Ideals™ however, it’s a relatively simple site: the equivalent of putting a small blog online. To a casual visitor, it has 4 pages and it does 2 things: you can see [a list of upcoming new services](https://alpha.service.canada.ca/projects), and you can [volunteer to test them out](https://alpha.service.canada.ca/signup). In large part due to its inherent simplicity, our small but determined team was able to launch it on time.

Did it feel good to finally release it? Heck yes.

Was it easy to get there? F\*ck no.

## Why is it so hard?

“[Why is it so hard to make a website for the government?](https://www.nytimes.com/interactive/2016/11/13/magazine/design-issue-code-for-america.html)” asks a twirling ASCII banana in a 2016 New York Magazine feature — something many of us have surely wondered. Well, this is the kind of deceptively simple question that probably merits a working group or at least 3 committees with overlapping acronyms. But since I don’t have 3 years to not come up with an answer, let’s see if we can glean any wisdom from my experience building and releasing a small cloud-hosted site in a large federal department.

### Old approaches to new ideas

About a decade ago, the [Government Digital Service](https://www.gov.uk/government/organisations/government-digital-service/about) in the UK spearheaded a new style of online service delivery characterized by smaller, autonomous teams making quick, iterative releases and [openly talking about their work](/articles/2021-12-12-introducing-federal-field-notes/#open-by-default). Rather than burning heaps of time writing ‘make-work’ documents for internal committees, digital product teams in the UK (and I worked on several) focus on quickly building services and then testing them with actual citizens. It was found to be a successful model — leading to cheaper, faster, and better quality online services — and they haven’t looked back since.

The Government of Canada has not yet undergone a large-scale transition in this direction, although there are some attempts being made ([COVID Alert](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html), for example, was [built quickly and in the open](https://sboots.ca/2020/10/30/working-in-the-open-firsts-for-covid-alert/)). More commonly, however, Canadian federal government IT projects can easily spend months or years and (tens of) millions of dollars in “planning phases” before any part of the service is actually ready to be used by actual Canadian citizens.

Traditional IT government projects try to guard against the possibility of costly mistakes by requiring product teams to seek approvals from a revolving door of committees and groups. Unfortunately, the accumulated time and energy spent appeasing these various gatekeepers can be just as costly to the team as the mistakes they are trying to prevent. In our case, our 12-page website needed approval from around 8 different groups over a 6-month period.

In the alternative team-based model widely used in the UK, {% footnoteref "users" "Not all potential issues can be addressed this way: eg, mitigating security and privacy concerns requires specialists. But, in my time there, the emphasis was on speaking to end users, with lightweight processes around internal compliance." %}the possibility of costly mistakes is mitigated by actively reaching out to and testing the service with its eventual users{% endfootnoteref %}. By focusing on getting feedback early and often from end users, mistaken assumptions are corrected early in the process by those whose opinions will ultimately matter the most.

Our “Labs” site, intended to facilitate exactly this kind of citizen engagement and testing, is a small but important step in creating a more responsive, more accountable government. Unfortunately, actually launching it meant slogging through a morass of meetings and meddlers. It’s all well and good to champion tomorrow’s leaner and faster ways of working, but in our present context, we were firmly trapped in the past.

## Talking about what we do

[The federal government tends to be pretty buttoned up](/articles/2021-12-12-introducing-federal-field-notes/#closed-by-default) about what it’s working on and how things are going. Sometimes this is justified: state secrets, upcoming changes to the tax code, military evacuations — there are definitely things that need to be closely guarded lest they put people in danger or let people game the system. Building a small website to ask Canadians for feedback on prototypes is absolutely **not** something that belongs in that category. Rather, my experience reveals something common across government: [onerous levels of oversight](https://sboots.ca/2021/01/12/onerous-levels-of-oversight/).

As in our case, it often happens that the compliance activities demand more time and energy than actually delivering the outcome. But how can we attempt to measure this, and what are the factors that lead to this outcome? Well, I’m glad you asked.

### Spreading the message

The kernel of this post is a presentation I gave a week after launch. Our core product team was deliberately small enough to get things done without getting in each other’s way, but this means you have to talk about what you do if you want people to hear about it.

(This is a good thing, by the way. Small teams getting on with their work and giving demos is far better than large teams where everyone knows nothing is going on.)

Having a small, multidisciplinary team meant we could quickly build the site itself, but it also resulted in our nearly getting snowed under as we progressed through the various internal gatekeepers.

My sense was that most of our compliance activities were based on inertia rather than utility, and I didn’t believe it was widely understood how much was being asked of us. So after the launch I put some numbers together to at least partially answer the question: “Why is it so hard to make a website for the government?”

So! With no further ado, this is a numbers-centric look at what it took to launch our “Labs” site inside a large federal department.

## Summing up

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
- [When the last change was](https://github.com/DTS-STN/Alpha-Site/commits/main): Yesterday (as of December 15, 2021)
- [How many people have worked on it](https://github.com/DTS-STN/Alpha-Site/graphs/contributors): 15
- [If the team works on Sundays](https://github.com/DTS-STN/Alpha-Site/graphs/commit-activity): Only once (week of June 11)

When Canada’s federal Digital Standards call for “[work[ing] in the open by default](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds3),” this is exactly what they are referring to. By making source code publicly available, we can get really good insights into the technical portion of the product. However, this is only half the story: there is also a submerged body of governance and compliance work that is much harder to quantify.

### Measuring the hard to measure

When we talk about ‘data’, we’re usually talking about things that are easy to count and measure, but — as the cast of Rent knows — how do you measure a year(ly release)? ([In midnights? In cups of coffee?](https://www.youtube.com/watch?v=XNbwiGbETSQ)) Activities that don’t leave behind structured data can be pretty hard to quantify.

For our website, it would be really interesting to measure things like:

- How many meetings were scheduled
- How many emails were sent
- Total number of people involved outside of the core team

However, given the crush of meetings and emails that myself and many of my colleagues had on a daily basis, reliably collecting this data isn’t really practical. My colleague [Sean Boots](https://twitter.com/sboots) built a [Meeting Cost Calculator](https://meetingcostcalculator.ca), but the underlying data we would need to plug into it isn’t available.

So what _can_ we measure related to project governance? Well, let’s look at some artifacts we **do** have: project documentation.

### Internal words

On the team, we used a shared folder for all the documents and diagrams created in the process of launching the site. All together, we have 45 documents.

But “45 documents” on its own doesn’t tell us much. What we want to know is how much effort they represent: what’s actually _in_ these documents? In other words, how much relevant, original text did real people (including me) have to write to get this site over the line?

To try and quantify this, I opened every document (ignoring duplicates and diagrams), selected all the original text (removing templated content), pasted all of it into a new doc, and did a quick word count.

<sub><span aria-hidden="true">🥁</span> Drumroll please… <span aria-hidden="true">🥁</span></sub>

- `39 230` (!) words

When you add up all the original (_non copy+pasted_) text in our various documents, presentations, justifications, and rationales, we get 39,230 words, which — to me — sounds like a lot of words.

#### How many words is a lot of words?

But _is it_ a lot of words? Of course, thirty-nine thousand and change sounds like a lot but what can we compare this to?

I went looking for comparisons and I found a listing of [word counts for famous novels](http://commonplacebook.com/art/books/word-count-for-famous-novels/). If we pull out a couple, this is where we sit.

- `36 363` words: _The Lion, the Witch, and the Wardrobe_
- `39 230` words: compliance documentation for our 12-page website
- `47 094` words: _The Great Gatsby_

So we are in good company here, sandwiched between a beloved children’s novel and a classic tale of superficial excess.

Incidentally, November (so recently past) is “[National Novel Writing Month](https://nanowrimo.org)”: the goal of which is to write a 50k word novel, something we were only a few documents short of achieving.

And none of this is user-facing, mind you. Those 39,230 words represent only _the tax_ we paid to move our project through all the various internal groups and committees. Since none of that work is available to the public, even if we were writing the next Great Canadian Federal Novel (we weren’t), you would never get to see it.

### Public words

What about the words that _are_ user-facing? I’ve said a few times that it’s a small website, so maybe I should qualify that. I’ve counted nearly 40k words of internal documentation, but what is the word count of the actual site itself?

As I mentioned earlier, there are 12 individual pages, if you know where to find them — and since I was on the team, I did know where to find them. Pretty basic methodology again here: select all the text on the screen, paste into a large document, and grab a word count once you finish with all the pages.

- `4 305` words

Now, 4,305 words is nothing to sneeze at, but it’s hardly going to be accepted as [our NaNoWriMo submission](https://nanowrimo.org/sign-up). In fact, if we do a bit of math, we get this.

`39,230 / 4,305 = 9.11`

Rounding down, we’re looking at roughly a 9:1 ratio of internal vs. external content. To put that another way, **for every 10 words we write on this team, 1 word is for the site itself — the actual thing we are trying to release — and 9 words are for internal governance**, to be read once or twice (if ever), and then filed away somewhere.

In our case, it meant that for our 12-page site, we ended up writing almost as much as the Great Gatsby.

> “Never was so much written by so few for no reason.”
> — Winston Churchill once said, referring to our website.

## How did we get here?

So I’ve written a lot about the _volume_ of documentation, but I haven’t touched on the content itself. We were building a small site which, at launch, was assessed having **no** sensitive data — in theory this should mitigate potential security and privacy concerns. Given that, how was it that we ended up writing so much for such a small deliverable? For me, the answer stems from systemic assumptions — what you might call an ‘organizational common sense’ — around managing risk, which, over time, have created a culture of amateur novel writing.

Here’s an example.

### The Content Management System: an example

On our team, we had several developers and two content writers. When a content writer wanted to change some text on the site, they would email those changes to developers, who would update the code. Emailing updates like this can introduce tension into the team. The person sending the change wants to see it quickly, which means interrupting the developer from whatever they were working on. The more often this happens, the more guilty the content writer feels and the more annoyed the developer gets.

Enabling content writers to edit the content directly relieves this tension: by using a Content Management System (CMS), a content writer can log in, update the text, and press “Publish”. Now developers can work on other tasks and content writers can make changes whenever they want. But there is a tradeoff here: setting up and maintaining a CMS creates work for developers. If the content doesn’t change that often, maybe sending emails is good enough. Ultimately, it comes down to team preference. Does it save us time? Is this how we want to work together? What if we try it out? If it works, let’s keep using it. If it doesn’t work, let’s get rid of it.

Our team eventually decided to add a CMS, so we picked one that worked for us and set it up.

There are a bunch of (valid) questions that arise when adding a CMS:

- Who gets an account?
- What permissions does each account have?
- What are the password rules like?
- What is the vetting process for allowing new users?
- What is the onboarding process for new users?
- What is the decommissioning process for accounts that are no longer needed?
- Why don’t the accounts integrate with Outlook accounts people already have?
- Who has administrator privileges to the infrastructure?
- What is the plan if it stops working?
- What other CMSes did you look at?
- What was your analyses of the other CMSes?
- (etc.)

These are the kinds of questions internal compliance teams will ask (and many more!). But is it worth asking them all in our case? Let’s imagine two opposing opinions:

- **Opinion 1**: These are all important and necessary questions to have answered before a site can be released, _especially_ in a government context where we have to consider any possible security implications and/or a loss of reputation. This CMS is new to the organization. All new technology requires need comprehensive documentation around how it works, how it will be used, by whom, and how it will be supported in the future.
- **Opinion 2**: The team has found something that improves their workflow and it is only being used by the 5 people on the team. The site is assessed as _not_ having sensitive data and the ‘reputational risk’ of an occasional typo isn’t that serious. Yes, it’s a new CMS but it only affects this one team, and they don’t even know if they want to keep using this 6 months down the road. Let’s skip the documentation for now and see how it goes.

There is plenty of middle ground in the space between each of these perspectives, but, in practice, we ended up very close to Opinion 1. While there is an important principle represented by the “comprehensive documentation” opinion, there is almost no consideration given to the context of the project. The CMS _was_ a new technology, so that represented a risk. However, there were significant mitigating factors. It didn’t impact any other teams, it didn’t have any sensitive data, and there were only 5 accounts — all for people we worked with directly.

Zooming out a bit, our team identified a way to improve how we work together, spent a couple days putting together a potential solution, and that could have been it: let’s see how it goes and re-evaluate in a few months.

Instead, a culture of ‘everything new must be comprehensively documented upfront, no exceptions’ meant putting together huge amounts of documentation (maybe 6-7 thousand words of), all before getting the practical experience to know for sure if this CMS was something we wanted to stick with long-term.

The ‘organizational common-sense’ operating here is that **more** documentation equals **less** risk. If some problem occurs in the future, you can refer to documentation which (hopefully <span aria-hidden="true">🤞</span>) describes how that problem should be handled. Therefore, any time we introduce a _new_ technology or a trial _new_ way of doing things — anything we can’t copy and paste from a previous document — it is _really important_ that it is heavily documented.

Unfortunately, the unaccounted-for long-term risk is one where high-effort processes suffocate grassroots learning and experimentation, leading to organizational stagnation. Our team was looking to save ~45 minutes a week, so we picked up a new technology as a potential remediation. Unwittingly, this meant signing up for ~40-60 hours of documenting, diagraming, presenting, justifying, etc — far outweighing the potential benefit of the CMS. Something that was meant to optimize the team’s workflow and relieve a mild inefficiency turned into a black hole of effort: consuming hours and hours of time for documentation that few people will ever read.

When the cost of trialling new things is so punishing, it is not practical or even rational to try. Eventually, you end up in a situation where “[aging government computer systems [...] are pushing 60 years old and built on ‘outdated technology’ that can no longer be maintained](https://www.cbc.ca/news/politics/federal-it-systems-critical-failure-1.5448871),” as reported by the CBC.

## The way forward: when less is better

In the department, the expectation for new technology and new approaches was understood to be about _speeding up_ development cycles in the service of better meeting the needs of _end users_. However, accompanying changes to internal compliance were [a purely additive process](https://sboots.ca/2020/01/28/introducing-agile-to-large-organizations-is-a-subtractive-process-not-an-additive-one/) that _slowed down_ the team with excessive paperwork, resulting in a much greater focus on _internal gatekeepers_.

Instead of adopting an attitude of ‘let’s see what makes sense for this application,’ it was treated more like ‘let’s do everything we currently do, plus extra documentation now that we’re adding new technology.’ Rather than adding ever more checks and imbalances to procedures created decades ago, we need to engage with the question of whether burying teams under reams of paper results in _any_ measurably better outcomes for Canadians.

Again, I’m not saying we shouldn’t have _any_ compliance processes — of course we need security reviews and internal documentation of some kind. But above all we need procedures that are _proportional_ to the outcomes, that _adapt_ to changing situations.

“But isn’t excessive paperwork just ‘how government works?’”, I hear you asking. Well, ‘how government works’ changes over time. Small, nimble teams with more autonomy and dramatically less overhead have become a norm in the UK, where they have an even larger government than ours. In my previous life as a UK civil servant, if I had wanted to introduce a CMS to a small site with no sensitive data, I would have needed buy-in from my team and to write maybe 1 page of explanation. There’s no reason we can’t take the same approach here in Canada.

Hoping for different outcomes without reducing the overhead of internal procedures will only get us so far. Currently, many government teams spend an inordinate proportion of effort managing internal stakeholders instead of focusing on external users. We need to **create space for teams to use their judgement** and **lower the cost of experimentation** if we are to realize the ideal of a truly responsive, citizen-centric government.

Ultimately, we can’t build the services of the future without letting go of the assumptions of the past.
