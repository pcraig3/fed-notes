---
title: "ArriveCan and the contractor conundrum"
author: "@pcraig3"
leadIn: "If the rules aren’t being followed, following the rules needs to be a rule."
metaDescription: "If the rules aren’t being followed, following the rules needs to be a rule."
ogDescription: "If the rules aren’t being followed, following the rules needs to be a rule."
date: "2024-02-22"
---

[[toc]]

## Introduction

Hello again to all fabulous fans of Federal Field Notes. It’s been a while since my last post, but given the pace of digital transformation in the federal government (<span aria-hidden="true">🙈</span>), there isn’t much harm in taking the occasional long holiday. Generally there just aren’t that many events to be overtaken by.

Speaking of events though, how about that ArriveCan stuff, eh? What a doozie. 

This isn’t a post about what is or isn’t bad about the ArriveCan application — you can get that in [every](https://www.cbc.ca/news/politics/trudeau-says-rules-not-followed-arrivecan-1.7120318) [other](https://www.thestar.com/opinion/editorials/how-did-arrivecan-debacle-go-so-wrong/article_f9dab950-ccfa-11ee-98fb-97fd4dfe010e.html) [newspaper](https://nationalpost.com/news/politics/five-things-to-know-about-the-arrivecan-auditor-report). Nor is this a post about IT procurement; if you’re interested in that, check out [this excellent piece by Amanda Clarke and Sean Boots](https://policyoptions.irpp.org/magazines/february-2024/arrivecan-deeper-reforms/).

Rather, this post is a reflection on _my experiences_ of IT contracting in the Canadian federal government: a subject specifically called out in the recently released [Auditor General report](https://www.oag-bvg.gc.ca/internet/English/mr_20240212_e_44430.html).

There’s a section in the report comparing _per diem_ costs of external contractors versus internal staff. It finds that staff are cheaper than contractors (go figure), and posits that using staff instead of contractors would have been an obvious pathway for saving money that, for whatever reason, was not pursued. It’s an interesting question, why not indeed? I suspect the use of external contractors was something everyone agreed with at the time but now nobody will defend.

However, this supposition as presented in the report doesn’t hold water. Paying high day rates for contractors is framed as irrational, just another waste of money. But _nobody_ likes wasting money; if it doesn’t make sense to do it this way, why did it happen? And why does it keep happening? Hiring contractors to build government services is not a rare aberration of the ArriveCan project, it happens all the time.

Not to bury the lede, it is my opinion that we are overseeing an inefficient and ultimately indefensible IT system laden with processes that are slow and ineffective. Since our internal procedures are actually an _impediment_ to delivery (especially when something is urgent), hiring contractors has become a common workaround rather than the procedurally harder task of fixing broken governance processes.

Reading through the recommendations of the report, I am more than a little worried about the spirit of its conclusions. Overall, it finds that the processes in place for overseeing contractors and managing releases weren’t followed. It recommends following them in future. I believe the findings that (a) the processes we have weren’t followed and that (b) there were bad outcomes. But I _don’t_ believe it’s necessarily true that if we follow all our processes, we should expect good outcomes.

Ultimately, the fact that people are seeking workarounds should spur us to ask the question of why that might be. It is my belief that our internal processes aren’t actually delivering the outcomes we expect, not by a long shot. The failures exposed by the ArriveCan report offer us the opportunity to adapt our internal procedures to the modern realities of software development, rather than just doubling down on recommendations that amount to “Follow The Rules 2: Follow Harder.”

Let’s get into it.

## “Continued reliance on external resources”

On February 12, 2024, Auditor General Karen Hogan tabled [a report investigating the contracting and delivery of the ArriveCan app](https://www.oag-bvg.gc.ca/internet/English/parl_oag_202402_01_e_44428.html). It’s a punchy  document: very clear, no-nonsense, and commendably plain language — definitely worth a look if you’re the kind of person who reads this blog.

The overall finding is that ArriveCan cost too much and was poorly overseen: specifically, that the departments involved “failed to follow good management practices in the contracting, development, and implementation of the ArriveCAN application.” Among other reasons, “[[t]he agency’s decision to continue relying on external resources throughout the application’s development, launch and updates, beyond the initial pandemic crisis, increased costs and brings into question the value achieved for money spent.](https://www.oag-bvg.gc.ca/internet/English/mr_20240212_e_44430.html)” 

This bit about {% footnoteref "contractors" "Note that the report uses the term “external resources” whereas I prefer to say “external contractors” so it’s clear we’re talking about people." %}external contractors{% endfootnoteref %} is what inspired this post, so let’s take a closer look.

Sections 1.27-1.30 discuss how hiring contractors to build and maintain ArriveCan (rather than relying on internal staff) contributed to its excessive cost. This section is titled: “[The Canada Border Services Agency relied heavily on external resources, which increased ArriveCAN’s costs](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#hd3d),” which is about as straightforward as you could hope for. Quoted here:

> [Section 1.28](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#p28) <br /> The Canada Border Services Agency determined that it would need to rely on external resources to develop the web‑based and mobile application because it did not have sufficient internal capacity with the skills needed.

> [Section 1.29](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#p29) <br /> We found that as time went on, the agency continued to rely heavily on external resources ([Exhibit 1.2](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#ex2)). Reduced reliance on external resources would have decreased the total cost of the application and enhanced value for money.

[Exhibit 1.2](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#ex2) is a graph comparing internal and external costs over time. And verily, reader, external costs (as a proportion of total costs) are _very_ high.

The following section, 1.30, attempts to put a price tag on this by estimating the average daily cost of hiring a contractor versus using a member of staff.

> [Section 1.30](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#p30) <br/> We performed an analysis to identify potential cost savings if the agency had reduced its reliance on external resources over time. We estimated that the average per diem cost for the ArriveCAN external resources was $1,090, whereas the average daily cost for equivalent IT positions in the Government of Canada was $675.

So, clearly something is wonky here. The ArriveCan audit estimates that external contractors cost roughly 50% more than internal staff. And — guess what — those internal folks, you’ve already hired them. You’re paying that anyway. You don’t need to be a McKinsey consultant to eyeball those numbers and pick the lower one.

So then the question is: why not use your folks on staff, who are familiar with the systems, who already work here, who will be around longer, and who cost you less? This isn’t really investigated in the ArriveCan report, it’s simply presented as an irrational outcome on a poorly managed project.

The suggestion seems to be: don’t use contractors. Use the people you already have. And having come from the UK’s [Government Digital Service](https://gds.blog.gov.uk/about/), I am sympathetic to this advice.

## The case for insourcing

Surprising nobody, this next anecdote comes from my time working for the [Government Digital Service (GDS)](https://gds.blog.gov.uk/about/), part of the Cabinet Office in the UK. (Did you know I worked there? Well, [I did](/articles/2021-12-12-introducing-federal-field-notes/#why-should-i-listen-to-you).)

In general, GDS recommended against hiring contractors for critical day-to-day operations. The thinking went that government departments in the UK had become overreliant on outsourcing, leading to ‘[vendor lock-in](https://sboots.ca/2021/05/12/rule-number-one-avoid-vendor-lock-in/),’ where you are trapped paying expensive contracts to large IT firms who maintain your critical applications that you no longer have the internal capacity to manage. [Dan Sheldon (ex-GDS) makes the argument against outsourcing](https://medium.com/@sheldonline/the-government-it-self-harm-playbook-6537d3920f65#1dda) in his “Government IT Self-Harm Playbook”.

Here are some of the problems you need to manage when you rely on contractors:

- Contractors are expensive.
- Contractors are temporary: they don’t have responsibility for long-term outcomes.
- Contractors are newcomers: they are missing organizational context and may pursue solutions that won’t work.
- Contractors have misaligned incentives: they make money on future contracts and selling proprietary solutions, not building things that are sustainable or open-source.

Instead, GDS advocated **insourcing**. If **outsourcing** means that you pay vendors to do work that you don’t have internal capacity for, **insourcing** is about _creating_ that internal capacity: hiring teams to build, run and maintain your critical services. It sounds pretty straightforward, who would argue with that? Not the Auditor General, to be sure.

Of course, the other thing that GDS did was that they _created the conditions for success_. GDS had a strong mandate, skilled staff, and sufficient latitude, which resulted in _changing internal processes to use modern best practices_ — not layering more governance on top of an already-tottering pile of paperwork.

My GDS team was primarily made up of public servants — including myself, I was a UK public servant for 3 years. I worked on a government team building a cloud-native open-source Python application that was open sourced on GitHub and hosted on Amazon Web Services (AWS). We used [Trello](https://trello.com/) for our work tasks, we had a multidisciplinary team (including [Product Managers and Designers](/articles/2022-07-20-hire-a-designer-and-a-product-manager/)), we met with users regularly to test new features, and we released our application(s) multiple times a day: running automated tests before every release. We were building the [Digital Marketplace](https://www.digitalmarketplace.service.gov.uk/): an accessible, nationwide platform that facilitated billions of pounds of transactions.

For 2015, this was pretty forward looking, but in 2023 this kind of workflow is _extremely_ common. It’s not that we were using novel, avant-garde methods; we simply adopted a workflow that was modern, proven, and effective, and has only become more so over time. In my 3 years there, I never had the misfortune of encountering an <abbr title="Security Assessment and Authorization">[SA&A](https://www.canada.ca/en/shared-services/corporate/publications/audit-security-assessment-authorization-march-2020.html)</abbr>: we were too busy solving problems for users to spend our time writing fiction.

## “Zero possibility” the government can stop using contractors

So the ArriveCan audit report recommends reduced reliance on contractors, which is the same recommendation given by GDS: one of the world’s leading digital government teams. Let’s stop using contractors then — pretty cut and dry, right?

Well… not exactly.

Another perspective worth considering is that of [ex-<abbr title="Chief Information Officer">CIO</abbr> Catherine Luelo](https://www.pm.gc.ca/en/news/backgrounders/2024/01/12/catherine-luelo). [She retired as CIO in December 2023](https://policyoptions.irpp.org/magazines/november-2023/federal-cio-resigns/), but [is being retained](https://policyoptions.irpp.org/magazines/january-2024/catherine-luelo-special-advisor) as an adviser on digital transformation. Among other things, Luelo says “there’s ‘zero possibility’ the government can stop using consultants and contractors” And you know what? Despite my GDS training, I am inclined to agree with her.

GDS advocated bringing in new roles onto capable multidisciplinary teams, and clearing a path for those teams by _redesigning outdated processes_ to support modern workflows. Under those conditions, it made sense to reduce your reliance on contractors, because _other changes were being pursued to support that outcome_.

However, the Canadian federal government does **not** have a systemic or coordinated approach to digital transformation. In Canada, we have [a federated system](/articles/2022-12-15-transforming-better/#federated-departments) where IT departments move at their own pace (ie, [slowly](/articles/2022-12-15-transforming-better/#1-change-is-slow)) and there is no effective coordinating mechanism for introducing systemic modernizing changes. Over time, we have ended up with a digital landscape described by Luelo as “[overloaded with governance measures [where c]ommittees and consensus rule. There is little stomach for risk. No one is responsible, decisions are delayed and projects slide, she said.](https://policyoptions.irpp.org/magazines/january-2024/catherine-luelo-special-advisor)” In this environment, removing contractors is unwise, because we don’t have good answers for what to do instead. In fact, we rely on contractors to get around _our own_ roadblocks.

## Slow and steady 

The ArriveCan report finds that contractors cost more money than internal staff members, but that’s only true if they are working at about the same speed. And from my time as a public servant, releasing a website in a large department feels like hitting every red light in rush hour traffic.

In 2021, I worked in a large federal department. To eventually release [our small website](https://alpha.service.canada.ca/en/home), [we ended up writing 39,000 words of documentation](https://federal-field-notes.ca/articles/2021-12-15-paperweight/#internal-words), beating out The Lion, the Witch, and the Wardrobe. In my article about that experience, I start with a basic question: “[Why is it so hard to make a website for the government?](https://www.nytimes.com/interactive/2016/11/13/magazine/design-issue-code-for-america.html)” However, this post asks a more specific question, namely: “why is it so hard to make a website for the government _as a government employee_?”

Let me offer an explanation: first using a thought exercise, and then using a real example.

### Buying lemons: a thought exercise

Let’s imagine you work for a government that loves buying lemons. As a public servant, you are tasked with buying a lemon every day. Simple, right? The easiest thing is for you to walk to the grocery store and buy a lemon. Maybe it takes you 20 minutes round trip. But is this really _accountable_? What if lemons are cheaper at another grocery store? How do we know we are paying the best price? Okay, fair concern. After all, we have a responsibility to the taxpayer.

A process is introduced requiring you to record lemon prices at all proximate grocery stores so that we know we are not overpaying. So now, every day, before buying your lemon, you have to fill out a the Lemon Ordering Ledger (LOL) documenting the prices of lemons at all grocery stores in your city. And since they don’t have websites, you have to call them individually to get the latest price.

Obviously, the principle here is understandable: we want to get the best value for money on lemons. But with this new process it’s going to take _much longer_ than 15 minutes: now it’s more like 90 minutes to phone all the grocery stores, record everything, and finally make a purchase. All that just for a lemon? It’s not really obvious anymore that the juice is worth the squeeze.

Okay, but what if I could pay 50% more for someone from Instacart to bring me a lemon? Well, now we’re talking. Sure it costs a bit more, but it saves me time. After all, life doesn’t always give you lemons.

In this contrived example, the problem is obvious. We wanted to save money, but in doing so, we introduced a process which is too onerous, and now the obvious workaround is _to pay extra for a third party who doesn’t have to follow this process_ to get us the lemon. Even though it was set up with the best of intentions, our new process defeats its purpose: the ultimate outcome is that we are paying _more_ for lemons, not less.

### Introducing new technology: a real example

When I worked at a large federal department, it was very hard to introduce new technology. There was an internal list of approved technologies, and anything not on the list was prohibited from use in a production setting. Sure, you could build little internal prototypes, but nothing you built could actually be released without first being approved (by multiple committees).

Since you could only use approved technology in a real-world scenario, staff were prevented from gaining significant experience with new technology. If you wanted to advocate for a new technology (as I did), there was a steep hill to climb, partly because you couldn’t prove you had significant experience with the new technology.

**This is called a catch-22**. You can’t use new technologies until they have been approved, but you can’t approve new technologies unless you have used them.

However, it sometimes becomes necessary to introduce new technologies because unfortunately for us, our government is full of “[old mainframes and technology, some on the verge of collapse](https://policyoptions.irpp.org/magazines/november-2021/speaking-tech-to-power/).” (Hmm, I wonder why. <span aria-hidden="true">🤔</span>)

The creative solution for getting out of this bind was a workaround: hire external contractors (internally referred to as “experts”) to recommend new technologies to adopt.

These “expert” recommendations were seen as credible because they came from people who had experience with these new technologies in real-world settings. And the reason they had experience with new technologies in real-world settings is because the external contractors didn’t work somewhere that prohibited the use of new technologies.

Let’s compare:

- As an internal staff member, I went through the process of introducing **one new technology**. It was ultimately approved as a pilot, but it cost me many meetings (and various documents) over several months.
- The external “experts” recommended about **50 new technologies** to adopt, which were greenlit in one go by the Tech Authority overseeing our workstream.

Needless to say, the 'adopt 50 technologies at once' option is not available to internal employees.

The ArriveCan report uses a dollar value to assert that contractors cost more than internal staff, but in this instance, the cumulative cost of having internal staff use our internal process to introduce 50 new technologies would be _far higher_ than the expedited workaround of using contractors who aren’t beholden to the internal process. Even though their per diem rate is higher, the {% footnoteref "contractors2" "Cynically, you could look at this scenario and conclude that the best way to have an impact in government is to become a contractor." %}external contractors were able to deliver results much faster{% endfootnoteref %} than if they were held to the internal processes that staff are.

Similar to the ‘buying lemons’ thought experiment, we have created a process that is overly burdensome, which leads to us hiring for external contractors to get around _our own_ overly-complex rules — which is the same as paying a premium to Instacart ourselves lemons. It’s like tying both your shoes together and then hiring someone else to give you a piggyback ride.

## We need processes that _adapt_

So what am I saying? Scrap the processes and just cross our fingers? Move fast and break things? Of course not. I’m advocating we _change_ our processes, not ignore them. We need to adapt our “[lumbering operational processes and procedures created by outdated rules and policies](https://policyoptions.irpp.org/magazines/november-2021/speaking-tech-to-power/)” to modern realities.

Many of our current government IT processes were a reasonable answer to a problem _when they were created_, but they aren’t what you would do today. They are usually defended on a principles-basis (‘writing this document is important because we care about security’), when instead we should be asking _if they are effective at delivering the outcomes we want_.

In my experience of working in traditional government IT settings, many of the processes are time consuming and ineffective. They suck time and energy out of teams, and provide little value to the organization. If I build an application in government, I have to write documentation saying my application is secure. I probably _believe_ it is secure, but how have I verified that? Well, in practice, I’ve verified it by asking someone how it works, and then writing down what they say and taking a screenshot. The evidence that it is secure is that I have written down that it is secure, and I have a picture from a week ago. Is this a good process for verifying whether an application is secure?

Imagine you are buying an iPhone on Facebook Marketplace. Let’s say the seller shows up with an iPhone that is powered off. You ask the seller if the iPhone works. She hands you a paper document that says “Yes, the iPhone works perfectly” along with a photo of it turned on at some point in the past. Is this a good way to verify that the iPhone is working? Would you feel confident about buying that iPhone?

When I was in the UK, we didn’t write extensive security documentation. What we did instead was:

- used open-source code for our infrastructure configuration
- built an open-source suite of automated tests for critical functionality that ran on every release
- hired penetration testers to try and breach our application in an near-real-world setting

Both the UK and Canadian governments value the same _principle_: releasing secure applications. In the Canadian case, the process we follow is easily gamed and usually not tested in a real-world scenario prior to release. Given that, security problems may not be discovered until it is too late. If a problem is found, you could argue ‘let’s be sure to write better answers next time,’ but **doubling down on a flawed process doesn’t actually address the root cause**.

In a meeting I once attended, it was asserted that ‘we need all of these security processes because [we are getting exploited all the time](https://www.priv.gc.ca/en/opc-actions-and-decisions/ar_index/202324/sr_pa_20240215_gckey/),’ to which the response was ‘if we’re getting exploited all the time, maybe our processes aren’t actually working that well and we should be open-minded about adapting them.’

## The ‘higher standards’ myth

If you wanted to create a new software deployment pipeline today, you would **not** use as your starting point the model offered by the Government of Canada, full stop. Everyone knows it, and it’s _very_ common inside of government to point out that internal processes are outmoded, especially when compared to the private sector.

This is an oft-used argument, with a just-as-oft-given response: comparisons between the government and the private sector aren’t relevant because private companies don’t face the same kind of scrutiny, and therefore aren’t accountable in the same way. The Government of Canada has an obligation to be accessible, to serve the whole nation from coast to coast to coast, and to take extreme precautions against IT failures, etc etc.

This is _almost_ a good argument, except my team in the UK was _also_ the government. We upheld all the same principles, and we were serious about them. We were also building accessible systems with real users and real consequences for failure.

It is wrong to assert that somehow our government faces unique difficulties or that trying anything new means venturing out into the unknown. If we believe the ‘private sector is not government’ line of argument, then we should be _especially_ focused on what other governments are doing, especially those who are leading the way.

The digital government movement has been going strong for over a decade now. There are plenty of [principles](https://www.gov.uk/guidance/government-design-principles), [playbooks](https://playbook.cio.gov/), [toolkits](https://www.digital.nsw.gov.au/delivery/digital-service-toolkit), [code repositories](/articles/2022-12-15-transforming-better/#comparing-public-codebases-in-canada-vs-uk) — you name it. We don’t even have to leave Ottawa. Our _own_ government publishes [Government of Canada Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html), which are generally excellent and [widely ignored](/articles/2022-12-15-transforming-better/#comparing-public-codebases-in-canada-vs-uk).

Digital transformation in government doesn’t mean creating a completely new set of strategies and workflows that nobody has ever tried. We just need to look at what is already working and do that. Heck, we could even use our own Digital Standards as a starting point.

## Just follow the rules (unless it’s urgent)

I keep circling this point, but this is the part of the ArriveCan report that makes me queasy. The report repeatedly finds that existing processes were ignored, but doesn’t spend much time investigating why they might have been ignored. There are plenty of recommendations that basically say: we have processes for a reason, but those processes weren’t followed and next time they will be.

There’s a tell here though: several places in the report state that the urgency of the pandemic rendered it necessary to relax some of our processes.

- “[[D]epartments and agencies were encouraged to be flexible given the urgent need to respond to the pandemic…](https://www.oag-bvg.gc.ca/internet/English/parl_oag_202402_01_e_44428.html)” 
- “[Given the urgency created by the pandemic, the Treasury Board of Canada Secretariat encouraged government organizations to focus on results…](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#p33)” 
- “[The Canada Border Services Agency told us that it understood the risks of emphasizing quick delivery, which meant fewer controls and less documentation around new versions of the application.](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#p77)” 

It’s interesting that when we _really_ need something to get done, we don’t follow all the processes. This is an admission that many of our processes _get in the way_ of timely service delivery.

### Putting our agility to the test

The “[Poor documentation of application testing](https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#hd4l)” section of the report finds that adequate testing was not completed before every release. [In its response]( https://www.oag-bvg.gc.ca/internet/English/att__e_44429.html#rp81), the Canada Border Services Agency (CBSA) offers an explanation and proposes a solution. It deserves a close analysis.

Helpfully, the department provides some numbers in its response, stating outright that they were ‘required’ to move at a velocity that was too fast to follow their testing procedures.

> The Vice‑President, Information, Science and Technology Branch, recognizes that, given the constantly evolving pandemic environment and the requirement for _177 releases in 36 months_, testing documentation was insufficient during ArriveCAN development. It was not feasible to complete all testing documentation as per existing procedures in this emergency environment. [_Emphasis mine._]

Since 36 months is about 156 weeks, at they are averaging just over 1 release a week.

This release schedule is rare in the Canadian government, but it is normal (or even slow) in the private sector, and it would have been very slow for my team in the UK. My GDS team released our application several times a day, {% footnoteref "releases" "This is a conservative estimate assuming 2 releases a day. Typically, we would release 4-5 times in a day." %}at least _10 times more frequently_ than CBSA{% endfootnoteref %} — and we built out testing procedures that were compatible with this velocity. Rather than manual tests and paperwork, we used automated tests that were fast, reliable, and repeatable. This is what we should be aiming for rather than slowing our velocity to accommodate slow testing procedures, or just — you know — _not testing at all_.

Here’s a GDS blog post from 2012 called “[Regular Releases Reduce Risk](https://gds.blog.gov.uk/2012/11/02/regular-releases-reduce-risk/)”. They made _100 updates in 2 weeks_ to the UK’s flagship website, GOV.UK. Compared to those numbers, 177 releases in 36 months looks pretty relaxed.

CBSA’s response continues:

> A procedure for streamlined testing documentation will be developed and implemented that will increase agility in emergency situations while at the same time ensuring sufficient controls are in place to document testing results prior to release to production.

“Increase agility in emergency situations?” Why? Shouldn't we just fix this process to increase our agility in general? What is so valuable about the ‘existing procedures’ that they have to remain in place?

My team in the UK didn’t have an ‘emergency’ release path because we didn’t need one. We made sure our regular process was fast and robust, so we had the best of both worlds. Surely this should be the goal of any process redesign.

Finally, CBSA concludes:

> In addition, the Information, Science and Technology Branch will review and update existing testing procedures to ensure control steps are introduced and documentation is complete before any system or application is released to production.

“Ensure control steps are introduced” sounds like _adding_ steps to a release process that is already not agile enough to accommodate quick releases, based on the previous paragraph.

Why not analyze which existing control steps are bottlenecks, with the goal of **[removing unnecessary steps](https://sboots.ca/2020/01/28/introducing-agile-to-large-organizations-is-a-subtractive-process-not-an-additive-one/)**, in addition to introducing new controls?

[Senator Colin Deacon makes this point in a recent episode of Let’s Think Digital](https://thinkdigital.ca/podcast/building-support-for-digital-government-with-senator-colin-deacon/): 

> “In the middle of the pandemic, […] CERB [… was] a digital first delivery. […] To get CERB up and running in three weeks [was p]henomenal. We can do it. It shouldn’t be ‘that was just because of the pandemic.’ That should be what we are, we should have that attitude with everything we're doing right now.”

Senator Deacon is right. The pace at which we were able to deliver during the pandemic is what we should strive to continue in a sustainable manner, rather than returning to our outdated controls that generate enormous documents (and making them **even enormous-er** with new controls).

## The Slow and Bad status quo

The unstated belief behind all this hedging language around ‘urgent/emergency scenarios require a temporary expedited process’ is that there is a tradeoff between ‘fast’ and ‘good’: either we deliver quickly but without following our otherwise extremely good processes, or we follow our processes which slow us down significantly but result in higher quality deliverables.

I know it’s rude to say it like this, but **this is bullshit**. It’s worth comparing my team in the UK in 2015 to my team in Canada in 2021.

- In the UK, I was part of a team building a national application facilitating billions of dollars of transactions. Every single weekday, we would update the application multiple times.
- In Canada, my team spent 6 months working on a 12-page website for a very small audience and _we had to write 39,000 words of documentation_ to release it once.

In Canada, we were burdened with an excessive amount of process that ultimately resulted in us delivering a minor, low-risk application at a snail’s pace. We set up a deployment pipeline and automated tests _voluntarily_, not because we were asked to. What we _were_ asked to do was write a huge document that was out of date a week after it was delivered.

Strictly speaking, there was _no_ internal pathway for iterative, agile releases because the official process required an updated humongous document with _every_ release. A process that assumes one release a year cannot be ‘adapted’ to allow for multiple deployments a day. That’s why the UK team didn’t use it — that’s why _nobody_ does this who can help it, frankly. **This is not a scalable approach to modern software delivery**.

In this case, we were **not** choosing between fast and good. My UK team took an approach which codified good practice without sacrificing speed: we were fast _and_ we were good. My Canadian team was burdened with a labour-intensive, ineffective security process which slowed our progress to a crawl: we went for slow and {% footnoteref "bad" "To clarify, it's not that the product we built was bad (it wasn’t), but that our governance processes are slow and bad in the sense that they don’t prevent us from bad outcomes because they are often not tesing the right things." %}bad{% endfootnoteref %}.

As Senator Deacon says: “[there is a way that we can go that is much lower risk than our […] stagnated approach [based on] policies we put in place 30 years ago](https://thinkdigital.ca/podcast/building-support-for-digital-government-with-senator-colin-deacon/).”

The various admissions in the report that urgent scenarios require expediting our processes _strongly imply_ that they are an _impediment_ to effective delivery. The Auditor General’s report offers us the chance to reform these processes in order to support the rapid delivery of services, rather than clinging on to the worst parts of 2005’s once-a-year release regimen.

## The contractor workaround

Returning to the question of contractors, this is what is missed by the ArriveCan report. Just as there are ‘expedited rules’ when it is important to deliver quickly, contractors are _also_ a workaround.

We have created a system of IT governance laden with roadblocks that create immense delays in delivering government services to Canadians. And then, when we need to speed things up, we hire contractors who can drive around some of the roadblocks. But they are _our_ roadblocks that _we_ installed. Why not clear the path?

Many of our internal processes are defended on the basis of the principles they were set up to uphold, which is a smart move rhetorically because they are indefensible otherwise. ([_Why are we writing a novella for a 12 page website??_](/articles/2021-12-15-paperweight/#internal-words)) Are these effective processes that are _practical_ for teams building user-centric software? It’s not hard to answer: no, they are not. It’s not that principles aren’t important, it’s that we need to be able to _adapt_ procedures that no longer serve us.

## Let’s fix this (please)

ArriveCan isn’t an [incomprehensible failure](https://www.oag-bvg.gc.ca/internet/English/parl_oag_201805_00_e_43032.html) of federal government digital service delivery, rather it is extremely comprehensible.

We have internal processes that impede service delivery, and when we need to deliver quickly, we use contractors as a workaround or we just drop our ineffective processes temporarily (only to commit to doubling down on them later). On Let’s Think Digital, Senator Deacon puts it succintly: “[We manage risk in a manner that creates it.](https://thinkdigital.ca/podcast/building-support-for-digital-government-with-senator-colin-deacon/)”

Obviously, when our choices are either following bad procedures or ignoring them and later getting slammed in an audit, the former seems better — but why are these the only 2 options? Sure, at some point someone introduced the Lemon Order Ledger, but that doesn’t mean we have keep it forever.

Look, all this talk about lemons, maybe it seems like sour grapes, but reader, I beseech you. I, like Senator Deacon, like Catherine Luelo, like you, ardently wish for a vigorous and effective public service, capable of actively improving its processes to deliver better outcomes. As a public servant in the UK, I worked at an adaptable, modern organization that was actively improving processes to deliver better outcomes. It can be done.

The Auditor General’s report consistently finds that by abandoning our processes _completely_, a lot of bad practice was swept under the rug. A good outcome would be taking the opportunity to really look _why_ that happened, and replace some of our bad procedures with good procedures. A bad outcome would be concluding that we need a bigger rug.

