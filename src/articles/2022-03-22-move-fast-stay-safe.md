---
title: "Move fast, stay safe"
author: "@pcraig3"
leadIn: "A strategy for agile teams in enterprise orgs."
metaDescription: "A strategy for agile teams in the federal government (or other enterprise orgs)."
ogDescription: "A strategy for agile teams in enterprise orgs."
date: "2022-03-22"
---

[[toc]]

## Introduction

Finally, it’s all coming together. The kids are back in school, the province is re-opening, the snow is melting, and, best of all, you’re part of an agile innovation team trialling a new way of working at a Canadian federal department. Maybe you’re a “ninja team” (there’s still a couple years until you figure out why you shouldn’t call it that), or a tiger team (still okay), or maybe you just call yourselves a product team. You have the support of your <abbr title="Director General">DG</abbr>, a handful of enthusiastic recruits, and maybe even [a few off-network devices to start prototyping with](https://digital.canada.ca/2018/06/27/tools-to-do-good-work/). As long as you have at least one developer with a [GitHub](https://github.com) account and someone who knows how Figma works ([starter plan!!](https://www.figma.com/pricing/)), you’re basically [the best of the best of the best](https://www.youtube.com/watch?v=UHZuLMFfriQ). There’s just one problem: you’re going to find that ‘doing the work’ is actually only half of the work — the other half turns out to be ‘getting it approved.’

Once your team really gets going, you’ll be producing plenty of public artefacts — journey maps, priority matrices, wireframes, open-source prototypes (with appropriate ‘this is a prototype’ labelling) — and [communicating openly as you go](https://sboots.ca/2020/10/30/working-in-the-open-firsts-for-covid-alert/): either through blog posts or more casually on Twitter (preferably both!).

In many ways, this is the worst nightmare of a plan-first, quadruple-check-everything, launch-when-it’s-perfect enterprise department: a team releasing unvetted material to the public without going through official oversight channels, on a two-week sprint cadence that none of the committees can realistically accommodate.

At some point, someone will ask you what happens if you publish something you shouldn’t. Suppose it leads to a big media exposé, maybe even a lawsuit. You will say that that’s incredibly unlikely (and you’ll be right), but, the thing is, you’ll be talking to groups looking for the worst possible outcome. It’s like trying to convince someone that crossing the street is relatively safe and people do it all the time, only to have them keep bringing up the time a minivan hit a teenager 10 years ago.

This kind of argument quickly becomes deadlocked because it’s a disagreement about core principles, not tactics. Ultimately, this misalignment stems from two different approaches to managing risk. Agile workflows acknowledge that all projects include some element of risk — there are always things we don’t know — and incorporate user testing and team retrospectives to fill in the gaps. In contrast, enterprise organizations are almost pathologically unable to accept risk and stuff those gaps with paperwork. Enterprise orgs find it very hard to tolerate any level of uncertainty, which is what agile workflows explicitly introduce.

## Mixing oil and water: planning for spontaneity

Enterprise planning (known as “[waterfall planning](https://en.wikipedia.org/wiki/Waterfall_model)”) tries to manage large projects by creating 4-year plans that are out of date after 4 months. How does an agile team handle planning 4 years in advance? Well, typically they don’t.

{% footnoteref "four-years" "Who would have put “global pandemic forces everyone to work from home” in their plans 4 years ago?" %}It’s almost impossible to guess where you will be in 4 years{% endfootnoteref %}, but it’s easy to predict where you will be in a month or two. Agile planning prioritizes more immediate goals — eg, planning out your work in 2-week [sprints](https://www.atlassian.com/agile/scrum/sprints) — and uses ‘impressionistic’ [roadmaps](https://www.atlassian.com/agile/product-management/roadmaps) for longer-term projections. While the enterprise instinct is always to paper over uncertainty, agile processes embrace it: changing requirements are a part of product development and agile teams are comfortable with that.

In practice, however, trading inaccurate plans for what appears to be ‘no plan at all’ doesn’t exactly look like an improvement from the perspective of a department that relies entirely on .PDF diagrams and .DOCX files to ship software. Everyone knows that <abbr title="Information technology">IT</abbr> projects take too long and there is too much paperwork involved, but let’s not throw the bathwater out with the rest of the bathwater.

To try and square this circle, enterprise orgs often come up with ‘hybrid’ models: incorporating some ‘agile’ flexibility into their traditional rigid planning processes (known as “Wagile”, from “waterfall” + “agile”). On a previous team I worked on, the enterprise security process meant completing 8 or so documents in a defined sequence: first 1, then 2, then 3, etc. Under the new “(w)agile security” process, we were instead asked to write them all simultaneously.

As an agile team, you should be iterating as you learn and reducing administrative overhead to focus on actually building a product. That’s all good, as long as you make sure to iterate towards a clearly-documented end-state, and fill out all the same paperwork in less time.

## Working with Wagile

Is ‘Wagile’ a good idea? [No](https://www.pluralsight.com/blog/it-ops/move-away-from-wagile). But how about starting fights with a bunch of people you work with and eventually having your project cancelled? Well, obviously that’s worse.

Even with your really smart critique of the status quo, you’re never going to be the only game in town. Every consultant and internal strategy group jockeying for funding will have a plan promising better outcomes for less money. As a ‘digital innovation’ team in an enterprise org, you are competing against a number of possible futures. The advantage that you have is that agile Actually Works™ — but this is a starting point, not a guarantee.

Agile teams are the real deal. Some of today’s largest companies got to where they are because agile workflows are really good at quickly delivering value, beating out more established companies with slower delivery models. Under ideal conditions — supportive management, experienced team members, a well-understood problem — you should be able to fly through this stuff. But even if not, you still have a significant leg up on teams that spend 30% of their time in meetings trying to figure out if all the right people were invited. The point is to play to your strengths as much as possible, but you won’t have an entirely free hand.

Demonstrating ‘what good looks like’ will buy you credibility in the long term, making things easier for your team and similar teams in the future. But in the short term, the only game in town is the poorly-designed Hasbro classic: “[Risk](<https://en.wikipedia.org/wiki/Risk_(game)>)”.

### The docs blocker

[Despite an estimated ~14% success rate](https://zenexmachina.com/waterfall-vs-agile-a-knowledge-problem-not-a-requirements-problem/), enterprise processes are viewed as ‘safe’ because the many documents produced in planning phases give the _impression_ of reducing risk. Any uncertainty requires an elaborate cover-up — large “modernization” IT projects are breeding grounds for PowerPoint decks crammed with dates that slip, cost estimates that increase, and features that never materialize. Paradoxically, while this culture of misleading documentation is a contributing factor for large and expensive failures, it also poses a serious obstacle to agile teams looking to improve how projects are delivered.

[It’s not easy to subtract governance processes](https://sboots.ca/2020/01/28/introducing-agile-to-large-organizations-is-a-subtractive-process-not-an-additive-one/) in an organization hyper-sensitive to risk (“let’s **not do** this documentation and still be allowed to release”). Removing something that _looks_ safe (even a diagram that will soon be out of date) without an equivalent replacement is a tough sell.

Once you set a precedent for problem-free releases, your proposals for systemic interventions will look much more credible. But you can easily end up logjammed trying to release your very first product(s) by being overly hostile to existing governance processes. Even though it’s not ‘real agile’, initial products will require some amount of gritting your teeth and hammering out documentation needed to get to a release. In order to scale your approach, you need to be able to release products — which means it must be the focus for your team as well as a priority for {% footnoteref "exec" "Not the focus for this article, but you absolutely need an executive sponsor." %}your executive sponsor(s){% endfootnoteref %}.

## Moving fast: why releasing early and often is important

The UK’s Government Digital Service popularized the slogan “[the strategy is delivery](https://gds.blog.gov.uk/2013/01/06/digital-transformation-in-2013-the-strategy-is-delivery-again/)”: advocating prototypes instead of documentation, demos instead of decks, and 2-week sprints instead of 4-year plans. Strategy documents proclaiming much and changing little are the norm in organizations with a culture of paperwork over working code, so “the strategy is delivery” emphasizes the inverse: don’t waste time building slide decks that would be better spent getting real products in front of real users.

[Shipping early](https://sboots.ca/2020/01/10/shipping/) is the best argument you can make against the reality of waterfall, because, done right, you will save huge amounts of time and money. By the same token, the longer it takes you to get products built and released, the more you resemble the expensive waterfall processes you seek to replace.

This is why you _need_ to **move fast**. In general, you want to define your MVP and then test it with users as soon as possible. Enterprise planning does not have a good answer to ‘user needs’, so it is important to prioritize early user engagement. User feedback both (a) gives you insight to improve your product and (b) functions as documentation you can share internally that other teams don’t typically have. Once you are confident that your product works, focus on what you need to do to get it released. It’s far better to have a released ‘alpha’ service than a highly-polished internal prototype.

Of course, the tradeoff with ‘fast’ is that, conventionally understood, it means compromising on safety. Oversight groups are likely to view you as risky cowpokes who want to launch first and ask questions later, while they provide a measured and impartial analysis that protects the department from potential embarrassment. This is a dangerous characterization to have applied to you in the risk-paranoid context of a large department, so you need to do what you can to guard against this perception.

## Being safe: why we don’t want to ‘break things’

When Mark Zuckerberg coined the phrase “move fast and break things,” he wasn’t talking to teams that need approval from an [Enterprise Architecture Review Board](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32602#secA.2). [“Move fast and break things”](https://qr.ae/pGLA6x) essentially means that you should prioritize speed over reliability: that it’s better to build and release your software super fast — even if not everything works yet or it breaks in older versions of Android.

This is great advice for a typical startup, but in government this is exactly what we need to be careful of. Private-sector companies typically offer services that can be found elsewhere — if the Domino’s app breaks, I can still go to Pizza Pizza. But government services are often the only option people have: we can’t afford to ship code that causes someone to miss a benefit payment they rely on to pay their rent.

When we compare smartphone apps to typical government services, it is clear that the ‘enterprise’ culture of oversight committees and architecture boards in no way guarantees great outcomes. But the thing is, nobody defends the status quo as the best possible system — in a government context, _it’s always about what could go wrong_. Sure, occasionally a bug makes it through our 10 different oversight committees, but imagine the plague of locusts you would invite without them. Your agile team needs to demonstrate that what you’re doing isn’t _dangerous_. While it’s important to be fast, you also have to **be safe**.

## Empowered teams vs. oversight committees

Waterfall governance creates extremely long (read: impractical) timelines, which means slow and expensive product development — but they are always justified in terms of safety. The fact that a team like yours exists means there is some desire to improve existing processes, but how to go about this is rarely spelled out. Assuming you have some high-level buy-in from an executive sponsor, you are probably going to be granted _some_ leeway to skip parts of the existing governance process. However, this sets up an obvious antagonistic relationship between your team and the various oversight committees, which becomes one of the primary challenges for you to manage.

The less ‘enterprise’ documentation you write, the more you’ll provoke {% footnoteref "docs" "They _could_ look at your open-source codebase instead of relying exclusively on Word docs, but that’s another issue." %}oversight groups who use that documentation to determine how ‘safe’ your product is{% endfootnoteref %}. Oversight committees are used to teams attempting these kinds of shortcuts, and they are justifiably suspicious. To them, you are just another version of ‘let’s skip this boring governance stuff so we can ship a bunch of untested and risky software’, or — more colloquially — ‘let us skip the vegetables and go straight to dessert’. For them, it’s a question of who takes the fall: if there is a problem later on, they are likely to be blamed for not vetting you properly.

‘Real agile’ says that empowered multi-disciplinary teams should have the skills on the team needed to build what they’re building. Governments have a legal obligation to build, say, accessible services, but there’s no legal requirement that mandates a dedicated accessibility team (which is sometimes how it’s presented). Digital teams with a robust workflow can (and do) meet accessibility requirements by following best practices. (In the UK, this is how most public services are built.)

In the here and now though, you need to work productively with a team you are actually trying to replace (even though — really — you are just trying to do your work with minimum fuss). These groups will be apprehensive about your ‘empowered product team’ model because it is a direct challenge to current org structures. Therefore, they have an incentive to prove they are a valuable and necessary part of the IT delivery pipeline by catching you out on any mistakes you make or bugs that slip through.

This means that you are likely to be closely scrutinized for any parts of the existing process that you skip, or are asking to skip. Even with a mandate to “push back” against existing governance, you can be sure that your push back will be pushed back. Any leeway you have is likely to be rolled back if problems are discovered that would theoretically have been prevented if you didn’t get the leeway.

## ‘Being safe’ in agile

For agile teams, there are 3 stock responses to how you are safer than traditional linear product development.

1. **Agile reduces existential mistakes** in the design of a service: early user engagement mitigates the risk of launching a poorly performing service, something that existing governance processes do not address.
2. **Agile reduces the cost of mistakes**: frequent iteration means smaller changes more often, which means mistakes tend to be smaller and faster to repair.
3. **Agile reduces the likelihood of mistakes** without creating governance bottlenecks: quality checks can be done far more frequently using automation than by human assessors.

In addition to these orthodox agile arguments, there is a more existential point to consider.

4. **Agile is, above all, a flexible approach that adapts quickly**. Agile teams are pragmatic in solving problems for users.

Point 1 has been discussed at length, so let’s look at the other 3.

### 2. Agile reduces the cost of mistakes

The risk-phobic approach of trying to prevent problems by layering on committees creates a doom loop (a cycle that gets worse over time). All these layers of governance are created to prevent costly mistakes, but mistakes are now so costly _because_ of excessive governance. By contrast, agile product development _reduces the cost of mistakes_. When you are in the habit of releasing daily, bugs can be fixed within hours of being identified — whereas you could be looking at 3-6 months for more traditional teams.

Unfortunately for you, enterprise organisations don’t have any tolerance at all for risk or bugs — to paraphrase one of my former security advisors, we are always just one typo away from the <abbr title="Chief Information Officer">CIO</abbr> having to resign. Talking about how agile lets you fix stuff faster plays directly into the perception that you are blasé about shipping a higher volume of errors. This is a losing argument for you, so avoid it altogether if possible. Instead, head off this concern by focusing on a **rigorous automated testing pipeline** that bakes quality into your codebase.

### 3. Agile reduces the likelihood of mistakes

Traditional enterprise governance relies on human gating to audit products before they are released. {% footnoteref "toil" "The practice of System Reliability Engineering defines this low-value, repetitive work as “toil”: https://sre.google/sre-book/eliminating-toil/" %}This is expensive to run and hard to scale{% endfootnoteref %}. If you want to go twice as fast, you need to hire twice the staff. In contrast, agile software development seeks to replace this bottleneck with automated tests a computer can perform, usually in a matter of seconds. Automated tests are fast and give consistent feedback: they can be re-run for every single change to a codebase, whereas a human assessor responsible for many products might only have time to check once every several hundred changes.

It is very common for security documentation to be out of date — once written, it describes how the system _used_ to work — whereas automated tests are up-to-date by definition. By prioritizing, as much as possible, automated over manual testing, software can be safely released multiple times per day instead of a handful of times per year without sacrificing quality. Skeptics will argue that more releases means more problems, but a comprehensive automated testing pipeline allows you to demonstrate that your way of working is actually _safer_ than the current baseline.

However, even with a comprehensive suite of tests, you still need to engage with oversight groups who will expect you to go through the same steps as other teams. From their perspective, they are responsible for deciding if your product is safe or not, and just because you have built your own competing set of checks (which — big surprise — you managed to pass), it doesn’t exempt you from the ‘official’ process.

### 4. Agile is flexible

[As I have previously written](/articles/2022-01-24-enterprise-the-wrong-bigger-picture/#long-term-oversight-as-bureaucratic-cement), enterprise departments give oversight groups authority over product teams. If an oversight group takes issue with something, they can advise against a particular product going ahead until specific conditions are met. Sometimes, senior executives will disregard this and just launch anyway, but most of the time a negative recommendation is enough to block a product’s release.

Traditional oversight teams ask product teams for extensive written documentation about how their system works and is administered. It’s very common that this documentation goes quickly out of date and no longer describes the reality of the system. Agile practitioners call this “[security theatre](https://en.wikipedia.org/wiki/Security_theater):” creating lots of documentation that, although it looks impressive, does not really guarantee a more secure final product.

Modern digital organizations will bias in favour of the teams doing the work, assuming that they have more context and are in a better position to make decisions about their product. However, this is not the reality of agile teams in government.

In government, oversight teams are able to block other product teams. Can they block yours? It’s probably not clear (you’re on a new team with an executive sponsor, maybe it will go ahead anyway), but at minimum you are looking at delays while everyone tries to figure out what happens next. Getting stalled undercuts your ability to **move fast**, which is one of your advantages as an agile team. If adhering to agile orthodoxy leads to getting in fights with other groups, you could end up taking just as long as other teams while also generating a lot of conflict along the way — a much worse result than traditional teams that play by the rules.

One of the tenets of agile is adopting pragmatic approaches that keep you moving forward. ‘**Be safe**’ is as much about perception as it is about empirical results. After all, enterprise processes are assumed to be safe even when they consistently lead to poor outcomes. By buckling down and writing documentation, you buy yourself goodwill _and_ you increase your perception of safe conduct. That’s not to say you need to write all the documents you are asked to, just that you should pick your battles. You only have so much political capital as a new team with no track record — your immediate priority should be to _build_ that track record.

## Moving faster or being safer?

To recap, the two important considerations for agile teams in large enterprises are:

1. Delivering value quickly, which means getting something into the hands of users rapidly, without spending years in planning
2. Managing (perceived) risk, which means guarding against mistakes and filling out forms when it’s expedient

Teams that **move fast** optimize for velocity and build quickly. Teams that **are safe** take their time, focusing on testing pipelines and sometimes writing large documents.

These two points appear to be in tension with each other. If you want maximum velocity, don’t write any tests. Just write code, ship it, and test it in production by having real users find bugs. On the other hand, if you want maximum safety, never release anything. [Software that never gets launched, never gets hacked](https://knowyourmeme.com/memes/roll-safe).

So where should you come down on the ‘fast’ vs. ‘safe’ continuum? To answer this, figure out what you are up against. You don’t need to be at ‘maximum velocity,’ you just need to beat some of the slowest development timelines on earth. Plenty of internal strategy groups will be advocating some version of Ford’s “faster horses,” saying things like: ‘we can make this 2-year process take 22 months’. You don’t need to be lightning fast, you just need to improve on existing expectations.

## A practical example: launching a website in a federal department

[In a previous post](/articles/2021-12-15-paperweight/), I wrote about launching a citizen-engagement website in a federal department, so let’s take that as an example. Sure, it set some important precedents for the department (open source project, public prototypes, user research, etc), but as a technical product, it wasn’t that complex. Working full-time, it’s the kind of thing you could build in 3-4 weeks with a small team. But it didn’t take us 3-4 weeks, it took us 5 months.

Just looking at that timeline, you might be like “wow Paul, that sucks,” which would be rude of you to say, but it’s a fair critique. Here’s the thing though, it’s still twice as fast as the typical 1-year turnaround time that the department is used to. We could have launched it sooner if we hadn’t had to write all that documentation and skimped on writing tests, but even with all that stuff we shot past our competition. Admittedly, we paid a heavy tax burden if you look at [all the writing we had to do](/articles/2021-12-15-paperweight/#internal-words), but it got the job done. In the end, rather than getting into an imbroglio about documentation as ‘security theatre,’ it was easier to just write the damn things, get them reviewed, and get the site out.

We were just one team, we were brand new in the department, and we were using an approach people weren’t familiar with. We didn’t have the authority or credibility to change existing processes or discard rules we didn’t agree with. We needed to get the site out by working with oversight groups who, like a Roman emperor in a coliseum, could cause us major headaches with a thumbs-down. In our case, we got there in the end by doing the work to avoid the perception that we represented a major risk, but not at the cost of exploding our timeline. We were able to be both **fast** (by comparison), and **safe** (writing tests and documenting our approach).

## Conclusion

In traditional government culture, any change to the status quo is risky by definition. Ways of working that have largely been jettisoned in the private sector are still alive and well in government, although there is broad internal agreement that change is needed. As agile practitioners, the opportunity is clear: traditional government IT projects almost never stick to their budget or timeline, and often fail to deliver high-quality services.

Given how bad the status quo actually is, it seems like a no-brainer to switch to a widely successful model of project delivery that prioritizes quick feedback and early return-on-investment. Agile teams get more done with less overhead, largely because they are empowered to make decisions.

However, agile teams in the government operate under pretty tough conditions, typically having to seek accommodation with an existing culture of extreme risk-avoidance. The strength of agile teams is their focus on shipping early and improving incrementally — but you _do_ have to ship _something_. Given this, it is extremely important to balance a commitment to safety with a desire to quickly get to a release.

Blending two contradictory approaches is never going to be easy, but it’s important to remain focused on delivering real value for citizens. Getting into debates with groups that are meeting-aholics or writing position papers arguing against paperwork-centric approaches means fighting on unfavourable terrain. To win this argument, you need to stop arguing: instead, prove your approach works by getting it to work. Pick a product, keep a tight rein on your scope, get it into the hands of users, and tell your story along the way. **Moving fast** shows what is possible, while **being safe** ensures you are viable.
