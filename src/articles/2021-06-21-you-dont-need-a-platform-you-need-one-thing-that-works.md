---
title: "You don’t need a Platform, you need One Thing That Works"
author: "@pcraig3"
leadIn: "All carts, no horses."
metaDescription: "All carts, no horses: why to avoid pre-emptive platforms and what to do instead."
ogDescription: "All carts, no horses."
date: "2022-06-21"
ignore: true
---

[[toc]]

## Introduction

If you work in tech and you’re the kind of person who likes the word ‘strategic,’ you are probably also the kind of person who likes the word ‘platform.’ And, in theory, you are right to do so: anticipating ‘platforms’ is smart strategy. Platforms are essential in any serious technology ecosystem: they can save lots of time and enable seamless experiences — but they don’t always. The central problem with building your own platform is really one of timing. A well-designed platform introduced at the right time is a godsend, but a pre-emptive platform is often a distraction that sucks up a lot of energy and money. So let’s talk ‘platforms’: what are they, why are they useful, and why are government teams attracted to them like mosquitos to a bug zapper?

And what should we do instead?

## Platforms, a definition

A platform is a foundational, reusable technological building block — colloquially, “[anything you can build upon](https://www.forbes.com/sites/adrianbridgwater/2015/03/17/whats-the-difference-between-a-software-product-and-a-platform/?sh=c4e0c6356a60).” Think of a platform as [a base “Lego” mat](https://www.google.com/search?q=lego+baseplate&tbm=isch&ved=2ahUKEwjG2sDt_bH4AhWXqHIEHZn9A7AQ2-cCegQIABAA&oq=lego+baseplate) that you can put other pieces on top of. A good _platform_ solves a problem really well for many different _products_. An example of this is your [Google Account](https://www.google.com/account/about/), which signs you into Gmail, Google Calendar, and Youtube (and other apps that use “[Sign in with Google](https://support.google.com/accounts/answer/112802)”). There are lots of things you need to ‘Sign in’ to do, and it would be silly to have all teams everywhere build their own account management system. Better to solve it in one place in a way that everyone can use (otherwise you may end up with [almost 60 separate login systems](https://sboots.ca/2022/04/21/small-hopes-for-the-future-of-digital-id-in-canada/)). Done properly, you save each team from re-building the same stuff and create seamless experiences: eg, once you log into Gmail, you can see your Google Calendar events.

Ultimately, this is what we want: platforms that enable a scalable and integrated product ecosystem by saving teams time and reducing duplication of effort across an organization — particularly for big organizations with a large portfolio of services. (Hmm, I wonder where we can find one of those?)

## Platforms in government

As a devoted reader of this newsletter, you will likely have anticipated that ‘the government’ is exactly the kind of organization that can benefit from the economies of scale you get with platform products. And, indeed, the government already operates lots of platforms: inside most departments you will often find platform-y type products for things like getting or retrieving data, managing user accounts, calculating things — take your pick. At a macro level, many government services can be described in broadly similar terms. If we think about passports, driving licenses, or voting in an election, we can reuse the same sequence of events.

- Learn about the service
  - Do I qualify?
- (Optional:) Verify your identity / sign in
- Fill in information
  - (Optional:) Provide documentation
  - (Optional:) Make a payment
- Submit application
- Wait for confirmation
- Receive benefit or service

Each of these steps could be “platformized” (to coin a phrase): maybe “[submit information](https://forms-formulaires.alpha.canada.ca/en/id/1)” is a platform, maybe “[make a payment](https://www.payments.service.gov.uk)” is a platform, maybe “[sending confirmation emails](https://notification.canada.ca)” is a platform, maybe — oh yeah — {% footnoteref "id" "Just a note here that consolidating digital IDs is pretty complicated. For more context, read Michael Karlin’s excellent post which explains some of the nuance and background: https://medium.com/@supergovernance/the-long-road-of-digital-identity-16e8e497c895" %}“signing in” could be a platform{% endfootnoteref %}.

But let’s not get ahead of ourselves. While platforms have the potential to enable scalable product delivery, they can just as easily become — perhaps one of the most fun words in the English language — a [boondoggle](https://dictionary.cambridge.org/dictionary/english/boondoggle). The Canadian government is littered with plans for premature ‘platforms’ that suck time and energy from more useful deliverables for years at a time.

### Enterprise platforms: Starting backwards

Large departments like to take ([you already know](https://www.youtube.com/watch?v=-Ifnaxi2LQg)) an “enterprise” approach to problem-solving, which leads to quite a novel situation where internal groups absolutely love proposing platforms at the point when they are least needed and most likely to go wrong.

[In a previous post](/articles/2022-01-24-enterprise-the-wrong-bigger-picture/), I described how “enterprise” organizations make ‘consistency’ their ultimate goal. To pull a quote:

> Broadly understood, we could sum up the ‘enterprise’ mindset as: “if we have the same problem in different places, we should solve it the same way.”

In this conception, technology platforms are a total slam dunk:

- They rationalize work-to-be-done (one team solves the same problem for all others instead of duplicating effort)
- By solving a problem in one central place, it means everyone gets a consistent experience

If my job was to come up with really sophisticated plans that sound awesome, you better believe I’m plonking a platform or two into my system architecture diagram.

But even though this looks good on paper — loyal reader, brace yourself — this is actually pretty backwards in practice. The basic problem with the ‘enterprise’ infatuation with platforms is not being able to imagine a cart without putting it before a horse.

Let’s look at some of the ways that planning for platforms leads to outcomes that are the opposite of what we want.

#### 1. Platforms for nothing

Good platforms are derived from real-world use. Bad platforms anticipate how the world _should_ work. And as anyone with strong political opinions can tell you, the world definitely _should_ work differently to how it actually does. It turns out that people are complicated, and so are the systems we build.

In a lot of enterprise planning, the basic idea is this:

1. Initial plan: let’s build an app, a website, and a chatbot that display a list of benefits.
2. Therefore, we need to be able to retrieve the same data in 3 different places at once.
3. Therefore, it would make sense to build a Data Enterprise Retrieval Platform that can support all of our different applications. This is awesome because we won’t have to rebuild similar functionality in different places, and it will make our downstream products simpler.
4. Therefore, _first_ we should build the Data Enterprise Retrieval Platform (DERP), and _later_ build our app, website, and chatbot, because they all rely on the DERP.
5. Therefore, let’s book a series of meetings where we spec out the DERP by inviting 80 people to review a PowerPoint deck where there are 100 words on every slide.
   - Also let’s make sure to always call it the ‘DERP’ from now on, and never explain it to new people.

This might sound good in theory, but what has happened here is that **you have committed yourself to a really expensive and complex deliverable that, by itself, doesn’t provide any value to users**. Building platforms to solve some future requirement for a suite of products you haven’t built yet is actually _the opposite_ of what you should do. There are just too many unknowns, and you can’t answer them by making really elaborate slideshows.

Here are a couple good indicators of when to avoid building a platform:

- When you have 1 product that can use it
- When you have 0 products that can use it

If you are building a platform that doesn’t hook into any currently live product, you are doing it backwards.

#### 2. The sorry-you-have-to-wait-for-it Platform

Good platforms make life easier for teams building services that make life easier for users. Bad platforms block teams from making needed improvements — this is how {% footnoteref "perf" "“Let not the perfect be the enemy of the good” is an expression that cautions against letting a hypothetical ‘perfect’ solution prevent real-world incremental improvements." %}‘the perfect’ becomes the enemy of ‘the good.’{% endfootnoteref %}

Let’s reuse the last example. We have 3 products planned (an app, a website, and a chatbot), and they all need the same data in the same format (we think). It seems logical to say we don’t want each team to build its own logic for getting data, because it means 3 different ways of getting the same data (we think). That means **duplication of effort** and **inconsistency** — it’s really not an enterprise approach.

Instead, let’s pause on building the app, website, and chatbot, and instead assemble a ‘strategic’ team to plan out and build our Data Enterprise Retrieval Platform: once we have _that_, it will be our data _platform_.

Usually, the platform deliverable is the most complex, which means it is the most expensive _and_ most likely to be delayed. And once it’s delayed, your app, website, and chatbot are _also_ delayed. Oops.

There are definitely variations to this scenario but the essential feature is creating an internal blockage where a bunch of new products (or new approaches) are logjammed. Nobody can build their own testing pipeline until the “automated testing strategy” is ready. Nobody can release a cloud service until the “cloud platform team” has built and assessed their “cloud platform”. Nobody can build their own public-facing API until the “API Gateway” is up and running.

A handful of teams each building something that works is going to get you lots of useful insights (what data is shared, what data is unique, where is the greatest load in the system, etc). But instead, departments often create siloed “platform teams” trying to design a perfect solution without a real-world deliverable. And meanwhile other teams waiting around are told either to (a) wait until the platform is ready (it’s already been delayed twice), or, if you can’t wait, then (b) build another product with the 20-year-old technology we are trying to move away from. Here again, ‘enterprise thinking’ is a backwards approach, leading to ‘platforms’ that block teams instead of enabling them.

#### 3. Diagram-driven Platforms

In an enterprise department, consistency-bias typically results in a drive to standardize everything, so that, over time, only a handful of (quickly outdated) technologies are permitted. [I summed this up in a previous article](/articles/2022-01-24-enterprise-the-wrong-bigger-picture/#long-term-oversight-as-bureaucratic-cement):

> Without an easy way for teams to try out new technologies, new software, and new designs, you wind up stifling your long-term ability to incrementally modernize.

Once your costs of experimentation become prohibitive, your organization becomes unable to iteratively introduce new tech, usually restricting experimentation to small ‘innovation groups’ whose projects are rarely released.

When new technologies _are_ being introduced however, it is often in the context of an elaborate ‘strategic’ plan with lots of specific detail about exactly how the implementation will go, what everything will be connected to, and on what timeline everything will be done. So, at the point where you have the _least_ understanding of the technology in question — often before having used it in production — you can wind up with strategic IT groups planning hugely expensive and complex cloud-based platforms. What you get from these teams is a lot (**a lot**) of diagrams, requirements documents, and PowerPoints (often based on consultants’ recommendations), which, problematically, [mask the level of organizational uncertainty](/articles/2022-03-22-move-fast-stay-safe/#the-docs-blocker), creating more risk down the road.

Paradoxically, while it’s hard for small teams to use new technologies for small experiments, large ‘enterprise-scale’ platform rollouts are justified as long-term investments whose economies of scale are worth the upfront costs. And, sure, it _might_ work out that way, but there’s still a huge downside risk of making the wrong bet. It seems reasonable to run some trials before pushing all your chips into the centre of the table. It’s kind of like saying that you aren’t allowed to see how a specific colour of paint will look on the wall unless you commit in advance to painting your entire house with it.

Once again, it’s the reverse of what you would want. Nothing can be built without there first being a plan, so you end up having to create a plan to build something even before you really understand the thing you’re building.

## The bear trap of pre-emptive platform planning

Well-executed platforms can save you a lot of time and money. In the best case, you can solve a problem in one place instead of re-doing it 10 different times. However, this reasoning can be inverted. You can end up creating a problem in one place that gets exported to 10 other products.

Whenever you make a change to a platform, the knock-on effects are much larger than they are for an individual service. This means that you probably want a lot of domain knowledge before you commit to building a big, honkin’ platform that will undergird your hundreds of millions of dollars digital transformation. And one way to get that domain knowledge is — say it with me — [agile product development](/articles/2022-03-22-move-fast-stay-safe/#moving-fast-why-releasing-early-and-often-is-important).

Enterprise planning wants to start at the end (literally, you start by planning your “end state”): by conceptualizing what a fully realized, perfectly-executed platform strategy will look like, and then pouring money and energy into describing that vision in painstaking detail. Agile planning starts today: what do we have now, what are our priorities over the next 6 months, and what should we put in our roadmap for the next few years? Which bridges can we cross when we get to them?

One of the mistaken assumptions about moving from waterfall to agile is that it essentially means throwing all planning out the window. The idea here is that agile teams want to replace all the really valuable biweekly syncs and [39 thousand words of documentation](/articles/2021-12-15-paperweight/#internal-words) with a Slackbot that (re-)deploys an undocumented web app onto a random <abbr title="Platform as a Service">PaaS</abbr> any time someone types “<abbr title="You only live once">YOLO</abbr>” in the team chat. Maybe this makes for a good demo or even a couple of small products, but beyond that we’re looking at anarchy: teams building things without a holistic vision or a sense of how Product A impacts Product C — it’s bad strategy. In this conception, when you have to choose between too much planning (enterprise) and no planning at all (agile), you are better off with the former.

But agile product development isn’t about not planning, it’s about ‘just enough’ planning.

## Agile planning

Agile is a fundamentally iterative approach that leaves space for new information; that doesn’t mean there’s no planning involved, but it does mean plans that are less detailed and open to adjustment.

Let’s use the example of planning for a vacation.

- If you are doing agile vacation planning, you might look up the ‘top ten’ attractions ahead of time, put together a general outline of activities and cool areas to visit for the first few days, and maybe leave a day or two available for excursions you will book once you’re there. You end up with a general outline and you have a pretty good idea how you’re going to start, but you leave some slack in the rope.
- If you are planning an enterprise vacation, you need to figure out everywhere you will visit, all the routes you will take between every activity, and all the restaurants you are planning to eat at — and get it all down 2 years beforehand. And don’t forget you need to finalize every order at every restaurant you’re visiting, you can’t just walk in and see how you feel. This kind of planning appears to be the safest (every detail is considered), but it doesn’t accomodate for changes down the road.

It’s a useful metaphor because some decisions you can really only make once you arrive. Sometimes a restaurant that gets good reviews is closed when you turn up or a street you planned to walk down is blocked off for repaving (ie, ‘replatforming’ 😉).

Agile is about putting together plans that focus on immediate priorities and orient future decisions, whereas enterprise planning is about creating hyper-realistic fan-fiction about a world where we don’t already know that [84% of these projects are delayed or fail outright](https://large-government-of-canada-it-projects.github.io/#are-large-it-projects-likely-to-be-successful).

### Starting with simple

I am not against planning, not at all. Planning is essential for any project to succeed. But I _am_ against [premature optimization](https://wiki.c2.com/?PrematureOptimization) and overdetermination.

In [_Systemantics_](https://en.wikipedia.org/wiki/Systemantics), John Gall makes the following observation about complex systems:

> “A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a simple working system.”

So let’s reframe our thinking: instead of the 10-years away “end state” where we will have a perfect, rationalized tech ecosystem, what does it look like to think in terms of a simple working system? How do we get to where we need to be by focusing on One Thing That Works?

### One Thing That Works

I described earlier how planning for pre-emptive platforms often leads to unmanageable deliverables where ‘simple’ goes out the window as fast as your budget projections. But the thing is, most of the government services I’ve worked on are about logging in and filling in a form, and building these kinds of applications in 2022 is kind of a solved problem.

90% of the time, you can pick your favourite popular <abbr title="Model-View-Controller">MVC</abbr> web framework — Java has [Spring Boot](https://spring.io/projects/spring-boot), Python has [Django](https://www.djangoproject.com), Javascript has [Express](https://expressjs.com), C# has [.NET](https://dotnet.microsoft.com/en-us/), etc — and get it running with a [Postgres](https://azure.microsoft.com/en-us/services/postgresql/) database. MVC apps are easy to learn and support, and relational databases are the definition of not-risky. If you can get your product running as {% footnoteref "buildpack" "You could use buildpacks instead of containers, but it’s gonna be a little trickier to manage, and, guess what, harder to ‘platformize’ later." %}a couple of containers{% endfootnoteref %} (app + database), you can release it on any cloud vendor and set up autoscaling rules to make sure it can handle spikes in traffic. Any cloud vendor’s bread and butter is hosting and scaling exactly this kind of product — an MVC app (with an optional API) and a managed database — for {% footnoteref "costs" "There is a huge caveat here that enterprise-level services like upgraded firewalls or dedicated support will push your bill up dramatically, but those costs are spread across the org and aren’t specific to the kind of an individual product I described." %}a monthly cost of between $15 dollars to a few hundred{% endfootnoteref %} if you really push it.

I’ve built several successful gov products on agile teams, you could call them “platforms” [by my definition](#platforms-a-definition). They started simply and evolved as they needed to, eventually _becoming platforms_ rather than starting that way. By the time you finally _do_ need a platform (“hey, [we have 3 (released) apps that use the same data](https://blog.codinghorror.com/rule-of-three/), maybe it’s time to spec out a common way of delivering that data”), you will have a bunch of really good context because you have several systems you can pull operational data from.

This is what the essence of agile development is all about. **Pick a well-scoped problem, build it with [boring, well-documented technology](https://mcfunley.com/choose-boring-technology), and solve a problem for real users**. Instead of diving head-first into a big abstract platform, it’s much easier to reason about a concrete use-case: building out a small end-to-end slice of a larger service and using that as a building block. You can then expand that service by making your app more complex and able to handle more traffic, or by decomposing it into separate services if you want. Aim to evolve your services as you go and create platforms where they are most needed, not because you have a diagram that says so.

## Can it be so simple?

So that’s it? Build everything as simply as possible and don’t overthink about the wider implications? Just hope it will work out later? Despite the well-written-ness of the article and the charming character of the author, you might still find my recommendation a bit simplistic.

This is just an article, not an enterprise IT project, so it needs to end sometime. But there are valid concerns worth addressing about my advice, and {% footnoteref "tweet" "If I’ve missed something else that’s obvious, hit me up @pcraig3 on Twitter!" %}I’ll expand on three of them here{% endfootnoteref %}.

1. Why would I build something that I already know will need to change later? Isn’t this wasted effort?
2. Just build _everything_ as simply as possible? Always? When do I generalize then?
3. Maybe where you’re from, but there’s _no way_ I can get away with building a separate cloud database in my department.

### 1. Planning for change with “sacrificial architectures”

Change is part of life. No plan ever survives unaltered, it doesn’t matter which methodology you use. Having said that, the thing you want to avoid is starting out by committing to a fundamentally untestable multi-year ‘Death Star’-type platform and just praying that it will arrive at the right time and do just what you need it to.

An alternate approach here is to start with a “[sacrificial architecture](https://martinfowler.com/bliki/SacrificialArchitecture.html):” a deliberately naive architecture that gets something working in the short term and moves you towards your desired end-state. It’s similar to creating a prototype: you build an early version of something that you can test out and later retire or rebuild once you have validated the approach.

I get it, maybe it sounds silly to build something that you will later rebuild. But it’s also silly to spend a lot of time building something you don’t really need. And it’s especially silly to try and create an extremely detailed plan at the point when you have the least information.

I know ‘enterprise culture’ is planning-centric (often requiring a plan before any action can be taken), but “sacrificial prototypes” are a cheap way to solve a problem cheaply and gain real feedback to inform your long-term plans. Not only is it okay to acknowledge upfront that your plans will change, it’s also realistic. Way more realistic than a bunch of PowerPoints where all the dates are wrong.

### 2. The Rule of Three

My advice is to strongly prefer building simple products, but this only gets you so far. Maybe it makes sense to build a couple of services with simple assumptions, but at some point, we are going to need to step back and start refactoring for general functionality. After all, nobody wants [58 different user accounts](https://www.canada.ca/en/government/sign-in-online-account.html#contact-table).

The best general advice I’ve seen is to follow “[The Rule of Three](https://blog.codinghorror.com/rule-of-three/).” It’s a lot of work to build a general solution instead of a purpose-built solution, so hold off initially. Build the straightforward thing the first time, and then do it again. By the third time, you have a good justification to extract common functionality and also plenty of experience with the problem by then.

### 3. Scope ‘vertical’ services

Am I really suggesting putting _citizen data_ into a _new database_ in the _cloud_? Has that been assessed? How do we even _begin_ to secure that? What about the SA&A document? It’s going to be a massive undertaking!!

Sure, you’re always going to run into obstacles — either inherent to the problem space or department-imposed — but an important agile scoping principle is to pick vertical slices not horizontal ones, which comes down to smartly scoping your product(s).

- A “vertical” slice means designing a product that provides an end-to-end experience.
- A “horizontal” slice is just focusing on building one layer, but not a full service.

Platforms are ‘horizontal:’ an identity platform solves “signing in”, but “signing in” on its own is not a service. What am I signing in _to do_? Agile product development should be ‘vertical’: we want users to visit, find/do something useful, and then leave when they are finished. It means getting a whole thing to work, even if it’s a small thing.

So, yes, maybe it’s premature and unworkable to store citizen data in a cloud database at this point (is it Protected B??) – that makes sense, we all have to work within constraints. But what value can you provide _without_ asking people to create accounts? Maybe it’s enough to learn about programs that apply to them so they can start putting together the documents they need. Remember, [your goal is shipping](https://sboots.ca/2020/01/10/shipping/), so don’t bite off more than you can chew. There is always a way to scope products that solve a whole problem for an end user, while minimizing problems for yourself.

## Services first, platforms later

Technology platforms are the foundational building blocks of any well-integrated digital ecosystem, and we should all aspire to them. However, in the context of government IT planning, a ‘platform’ usually means a huge, expensive, abstract deliverable that will theoretically solve lots of problems when it is ready but in the meantime you still have all those problems because it is delayed.

It’s true that well-executed platforms shorten the time and effort needed to build useful products. But in order to get platforms that look like that, we need to start with those useful products, make sure they work really, really well, and then _derive_ platforms from your Actually Existing Services. And it’s good news here too, because building a useful product and testing it early is way easier than building a mega-expensive platform for a bunch of fake services we don’t have yet.

Look, I am all for a good tech platform. I’ve planned them, connected to them, and even built [a](https://pcraig3.ca/work-govuk-performance-platform) [couple](https://pcraig3.ca/work-govuk-digital-marketplace). But supporting a platform is no joke: once a bunch of products are relying on you, you can never turn one off. So you should _really_ try to avoid introducing a platform until you truly, absolutely need it. And until then, all you need is One Thing That Works.
