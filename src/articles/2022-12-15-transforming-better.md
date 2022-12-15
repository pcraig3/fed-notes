---
title: "Transforming better: systems thinking for systemic change"
author: "@pcraig3"
leadIn: "7 practical principles for winning at digital transformation in Canada."
metaDescription: "7 practical principles for winning at digital transformation in Canada."
ogDescription: "7 practical principles for winning at digital transformation in Canada."
date: "2022-12-15"
---

[[toc]]

## <abbr title="Too long; didn’t read">TL;DR</abbr>

This article compares Canada’s [Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html) to the UK’s [Design Principles](https://www.gov.uk/guidance/government-design-principles), looks for evidence of their being followed ([widely in the UK, not really in Canada](#comparing-public-codebases-in-canada-vs-uk)), posits why that might be, and finally puts forward [**7 principles for federated transformation**](#7-principles-for-federated-transformation) in the Canadian federal context.

If you’re in a hurry, you can skip straight to the [7 principles](#7-principles-for-federated-transformation). Otherwise, read on.

<br />

## Introduction

The UK’s Government Digital Service, [formed in 2011](https://en.wikipedia.org/wiki/Government_Digital_Service), catalyzed a fundamental change in how the UK government designs and delivers citizen-facing services. Part of the _practice_ of delivering this change included publishing the _theory_ supporting it. That is to say, they did the work, but they also prioritized sharing their methods: releasing [posts](https://gds.blog.gov.uk/2016/05/25/its-ok-to-say-whats-ok/), [playbooks](https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook), [principles](https://www.gov.uk/guidance/government-design-principles), [style guides](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style), [usage data](https://www.gov.uk/performance), as well as [actual services](https://www.gov.uk/government/publications/gds-transformation-programme-2013-to-2015/digital-transformation-exemplar-services) for real people to use. In Canada, we haven’t seen a comparable change in the culture of service delivery take hold in the federal government. Large ‘transformation’ programs are still traditionally run, which means planning for {% footnoteref "solutions" "Dare I say, “one-stop shop”?" %}massive ‘solutions’{% endfootnoteref %}, writing an avalanche of internal documentation, minimal public engagement during the ‘planning’ and ‘build’ phases, and often-delayed deliverables.

We can see different approaches to ‘digital transformation’ between Canada and the UK. In the UK, the ‘[digital transformation exemplars](https://www.gov.uk/government/publications/gds-transformation-programme-2013-to-2015/digital-transformation-exemplar-services#the-exemplars)’ were an early confidence-building exercise, where 25 of the highest-volume services were redesigned using modern methods. Each exemplar gets a dedicated page with data from alpha, beta, and live phases, and you can also [read historical in-progress blog posts if you’re keen](https://gds.blog.gov.uk/?s=exemplar). In Canada, two major current ongoing projects, one for [benefits modernization](https://www.canada.ca/en/employment-social-development/programs/benefits-delivery-modernization.html) and the [immigration platform renewal](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/transition-binders/minister-2021/digital-platform-modernization-transformation.html) are ongoing, but outside of transparency reports, there is very little public discussion of either (eg, no blog posts, no ‘alphas’). From the outside, it’s hard to see what the progress on either one has been so far, and even bringing it up on one’s low-traffic blog is risky.

So what’s the deal for us Canadians? Is it just we’re a little behind in adopting digital ‘best practices’ but we’ll get there eventually, or should we expect ‘government transformation’ in Canada to take a fundamentally different path to the example of the UK? Unlike the Hokey Pokey, I don’t really know how it’s going to shake (it all ab)out, but in the meanwhile, it’s worth thinking about _why_ we’ve ended up here — and where future change is likely to come from.

This article makes the case that our government IT landscape is shaped by our deeply-rooted Canadian principle of federalism, and suggests adaptive strategies for teams hoping to advance a more modern, agile-y agenda within traditionally-minded, enterprise-y, _federated_ federal departments.

## The UK’s Design Principles

GDS was quick to connect their successes to their modern, open ways of working, publishing a set of foundational [Design Principles](https://www.gov.uk/guidance/government-design-principles) and creating a new ‘[Service Standard](https://www.gov.uk/service-manual/service-assessments/pre-july-2019-digital-service-standard)’ that operationalized those principles. The Service Standard included questions like: [How did you involve users](https://www.gov.uk/service-manual/service-assessments/pre-july-2019-digital-service-standard#understand-user-needs-1)? [What are your plans to iterate](https://www.gov.uk/service-manual/service-assessments/pre-july-2019-digital-service-standard#iterate-and-improve-frequently-1)? [Is your source code open](https://www.gov.uk/service-manual/service-assessments/pre-july-2019-digital-service-standard#make-all-new-source-code-open-1)? etc. Prospective services would be evaluated against these before a general release. Otherwise, you risked releasing a broken service that was likely to fail — _à la_ [HealthCare.gov](https://d3.harvard.edu/platform-rctom/submission/the-failed-launch-of-www-healthcare-gov/), the high-profile US health insurance marketplace which exploded on the launchpad.

GDS’s commitment to clear, user-centric principles and its uncharacteristic openness created a template for other digital teams to emulate. Soon after, {% footnoteref "digital-services" "To list a few: in <a href='https://www.dta.gov.au/' target='_blank'>Australia</a>, in <a href='https://beta.gouv.fr/' target='_blank'>France</a>, in <a href='https://digitalservice.bund.de/en' target='_blank'>Germany</a>, in <a href='https://www.digital.go.jp/en/' target='_blank'>Japan</a>, in <a href='https://www.tech.gov.sg/who-we-are/our-role/' target='_blank'>Singapore</a>, and here in Canada we have the <a href='https://digital.canada.ca/' target='_blank'>Canadian Digital Service (CDS)</a>, as well as two provincial agencies, in <a href='https://www.ontario.ca/page/ontario-digital-service' target='_blank'>Ontario</a> and <a href='https://medium.com/digital-services-nova-scotia/a-digital-service-for-nova-scotia-6e61c45e1f2e' target='_blank'>Nova Scotia</a>." %}other “Digital Service” agencies sprung up across the world{% endfootnoteref %}, nearly all of them publishing a similar set of user-centred principles. Here we can see a clear benefit of what GDS did in the UK. If you’re certain you’re doing the right thing, you _want_ to be open — it increases public trust and makes it easier for others to follow in your footsteps. On the other hand, {% footnoteref "horizon" "The Horizon scandal in the UK was a botched Fujitsu-led rollout of a new IT system that miscounted accounts at UK Post Offices. In court, it was asserted that “<a href='https://www.computerweekly.com/news/252476403/Fujitsu-must-face-scrutiny-following-Post-Office-Horizon-trial-judgment' target='_blank'>some staff giving evidence were protecting Fujitsu rather than giving accurate information and he questioned whether Fujitsu had been accurate in reporting to its customer, the Post Office.</a>” This is an extreme example of obstructing transparency to (try to) avoid blame." %}if you’re worried you’re doing the wrong thing, you don’t want anybody to know{% endfootnoteref %}.

Unfortunately, those of us in Canada hoping to see the same kind of cultural shift in how government services are built and communicated don’t have a lot to go on. [Our largest ongoing IT ‘renewal’ programs cost many millions of dollars annually](https://large-government-of-canada-it-projects.github.io/) and there trends to be scant public information about their progress.

A recent Canadian Abacus survey found over half of those surveyed “[agreeing with the statement ‘official government accounts of events can’t be trusted.’](https://abacusdata.ca/trust-and-disinformation-in-canada/)” This isn’t a political blog, so I am just quoting the data as presented, which posits a generalized public distrust in government messaging. Defaulting to openness and transparency is one way to rebuild public trust, and the UK’s successful example lays out just such a model for getting there.

So, as a first step, why doesn’t Canada’s federal government create and promulgate their own public set of Government Design Principles similar to [those in the UK](https://www.gov.uk/guidance/government-design-principles)?

## Canada’s Digital Standards

A-ha! In fact, we do have a published set of [Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html): if you Google “[canada digital principles](https://www.google.ca/search?q=canada+digital+principles)”, it’s the top result. This is awesome, actually. They’re really easy to find, they live on the Canada.ca domain, and they’re “_the foundation_ of the government’s shift to becoming more agile, open, and user-focused” (emphasis mine). All of that sounds pretty good to me. And it’s even better news once we read them.

Reading through them, the Digital Standards are pretty similar to the [Design Principles](https://www.gov.uk/guidance/government-design-principles) used in the UK: both documents stress understanding users’ needs, iterating frequently, communicating openly, prioritizing accessibility, and releasing work publicly by default (eg, open-sourcing work). They are also, mercifully, written in [plain english](​​https://www.gov.uk/guidance/content-design/writing-for-gov-uk#plain-english), [not always the case](https://twitter.com/ae_clarke/status/1503802174865825800?s=20&t=P5hBGqMBIefkLMyEJXNyEQ) when reading through government documentation. Sure, there are small differences between our standards vs their principles, but in spirit and tone Canada’s Digital Standards are completely aligned with the modern product development and delivery pipeline popularized by GDS.

Up to this point, it’s all great news. Canada’s Digital Standards are easy to find, easy to read, strongly principled, and “foundational” to the federal government’s digital transformation. This is exactly what we as citizens should be delighted to see. Okay, but let’s talk _outcomes_? Where are all of our open source, iterative, user-needs-driven services?

## Open source or “no”-pen source

I’m a developer by trade, so I’m going to focus on the ‘{% footnoteref "open-source" "For anyone unfamiliar, ‘open source’ means that the code you write is made publicly available." %}open source{% endfootnoteref %}’ recommendation, to try and get a bit of a baseline here. One of the UK’s principles is “[Make things open: it makes things better](https://www.gov.uk/guidance/government-design-principles#make-things-open-it-makes-things-better)” — meaning: open source, open blogging, public outreach — and one of the Canada’s Digital Standards is “[Work in the open by default](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds3)” which goes on to say “[make] all non-sensitive data, information, and new code developed in delivery of services _open to the outside world for sharing and reuse under an open licence_” (emphasis mine).

Typically, modern digital government agencies are quick to set up {% footnoteref "github" "There are alternatives, but GitHub is the market leader for open-source projects; most gov organizations use it for ongoing and historical projects." %}public [“Organization” on GitHub](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations){% endfootnoteref %} for current and future projects. You can think of GitHub as an online warehouse for software, kind of like a storefront window where you can publicly display the projects you’re working on. Generally, each new project gets its own ‘repository’, so we can approximate how much open source work different organizations are doing by checking their GitHub Organization pages.

Admittedly, it’s difficult to measure the volume of work that is open source vs. closed source in any organization, as, by definition, closed-source code is not visible. A Github Organization with 10 public codebases might have 10 codebases total (all code is public) or 1,000 codebases total (10 are public, 990 are private). So it’s not a perfect measure, but we can still make inferences by comparing the Github Organization pages for government departments in the UK versus their equivalents in Canada.

### Comparing public codebases in Canada vs UK

**Digital services agency**

The [Canadian Digital Service (CDS)](https://digital.canada.ca) is the Canadian government’s digital services agency, comparable to the [Government Digital Service (GDS)](https://gds.blog.gov.uk/about/) in the UK.

| Organization                                                                                                         | no. of repos | no. updated in 2022 |
| -------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------- |
| <a href="https://github.com/cds-snc" target="_blank"><abbr title="Canadian Digital Service">CDS</abbr></a> (Canada)  | 268          | 157 (59%)           |
| <a href="https://github.com/alphagov" target="_blank"><abbr title="Government Digital Service">GDS</abbr></a> (UK)\* | 1576         | 516 (33%)           |

<sup>\*Note that CDS was founded later. The earliest visible CDS codebase is from 2017 compared to 2011 for GDS, so they have a pretty big head start.</sup>

<br />

**Benefits and pensions department**

[Employment and Social Development Canada (ESDC)](https://www.canada.ca/en/employment-social-development.html) is Canada’s benefits and pensions department, comparable to the [Department for Work and Pensions (DWP)](https://www.gov.uk/government/organisations/department-for-work-pensions) in the UK.

| Organization                                                                                                                           | no. of repos | no. updated in 2022 |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------- |
| <a href="https://github.com/esdc-edsc" target="_blank"><abbr title="Employment and Social Development Canada">ESDC</abbr></a> (Canada) | 8            | 0 (0%)              |
| <a href="https://github.com/dwp" target="_blank"><abbr title="Department for Work and Pensions">DWP</abbr></a> (UK)                    | 478          | 291 (61%)           |

<br />

**Tax collection agency**

[Canada Revenue Agency (CRA)](https://www.canada.ca/en/revenue-agency.html) is Canada’s tax collection agency, comparable to [HM Revenue and Customs (HMRC)](https://www.gov.uk/government/organisations/hm-revenue-customs) in the UK.

| Organization                                                                                                | no. of repos | no. updated in 2022 |
| ----------------------------------------------------------------------------------------------------------- | ------------ | ------------------- |
| <abbr title="Canada Revenue Agency">CRA</abbr> (Canada)\*                                                   | -            | -                   |
| <a href="https://github.com/hmrc" target="_blank"><abbr title="HM Revenue and Customs">HMRC</abbr></a> (UK) | 1322         | 1025 (78%)          |

<sup>\*Note: at the time of writing, CRA does not appear to permit open source development.</sup>

<br />

**Justice department**

The [Department of Justice (DoJ)](https://www.justice.gc.ca/eng/) is Canada’s tax collection agency, comparable to the [Ministry of Justice (MoJ)](https://www.gov.uk/government/organisations/ministry-of-justice) in the UK.

| Organization                                                                                                           | no. of repos | no. updated in 2022 |
| ---------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------- |
| <a href="https://github.com/justicecanada" target="_blank"><abbr title="Department of Justice">DoJ</abbr></a> (Canada) | 11           | 7 (63%)             |
| <a href="https://github.com/ministryofjustice"><abbr title="Ministry of Justice">MoJ</abbr></a> (UK)                   | 1671         | 777 (47%)           |

<br />

We can see that equivalent government organizations in the UK are regularly doing open source work and updating them as they go. For many UK departments/ministries, this has become their [default way of delivering services](https://www.economie.gouv.fr/igpde-editions-publications/thearticle_n3) — not all repos are still under active development but many are, and [new services are expected to be open source](https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable). In Canada, the numbers we see are much, much smaller — if we can find them at all. Roughly comparing the Github organizations of similar departments, **the UK is beating us by a factor of 100**. Admittedly, the UK is larger than Canada so we would expect them to have more projects, but what we are looking at is a culture that has taken hold in the UK for which there is no observable equivalent in Canada.

Canada does have a bunch of work-in-the-open happening, and I would be remiss not to mention it.

- A [Guide for Publishing Open Source Code](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-publishing-open-source-code.html)
- The [Open Government Intitiative](https://github.com/open-data) on GitHub: ~70 federal gov projects
- [Github and Government: Canada](https://government.github.com/community/#governments-canada): a listing of 55 government GitHub Organization pages in Canada (about ~35 are federal organizations)
- A [Government of Canada](https://github.com/open-data) generic GitHub Organization: ~70 federal gov projects
- [COVID Alert](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html) was a high-profile [open-source](https://github.com/cds-snc/covid-alert-app) [project](https://github.com/cds-snc/covid-alert-portal) built by [CDS](https://digital.canada.ca/), who then followed up with [a blog post about why open source matters](https://digital.canada.ca/2020/02/24/why-open-source-matters/).
  - See also: [“Working in the open” firsts for COVID Alert](https://sboots.ca/2020/10/30/working-in-the-open-firsts-for-covid-alert/) by Sean Boots

It’s great to see where there _has_ been progress — every little bit helps. But these are very much the exception, not the rule. Despite [Canada’s 3rd and 4th Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html) explicitly recommending for open source, typical large IT projects in the Canadian federal government are not prioritizing open source development from what we can tell. As a case in point, [the website for citizen enegagement](https://federal-field-notes.ca/articles/2021-12-15-paperweight/) that I worked on in my previous department hasn’t updated [any of their prototypes](https://alpha.service.canada.ca/projects) since it was launched {% footnoteref "prototypes" "This doesn’t mean that no work is happening. What it means is: whatever work is happening, we can’t see it." %}nearly 18 months ago{% endfootnoteref %}.

### Does open source matter?

Open source projects aren’t a measure of service quality or better teams or anything like that, but they are a _signifier_ of a modern user-centric approach to digital service delivery. The GDS playbook includes multidisciplinary teams, user research, rapid prototyping, and a recommendation to build open source products. You can still have all the rest of the things in that list without creating an open source repo, but typically they come as a combo. Creating an open source codebase demonstrates a willingness to trial new approaches, seek quick feedback, and prioritize {% footnoteref "outreach" "Traditional software development in government is done behind a firewall, on protected networks only accessible to public servants. This means that it’s easy to keep sensitive data private (which is good) but it also makes reaching out to citizens pretty complicated since they won’t be able to access your prototypes from their laptop or smartphone." %}early outreach to users{% endfootnoteref %}. In this sense, open source service delivery is not a _requirement_ of modern web development, but it is a very strong _signal_.

So, if we accept the premise that ‘more open source projects’ is better than fewer, how do we account for the difference? Canada’s Digital Standards are essentially the same as the UK’s Digital Principles, particularly on the issue of working in the open.

**Why do we see so much more evidence of that guidance being followed in the UK, whereas in Canada we see — well, actually we don’t see; that’s the whole issue.**

## Centralized vs. federated systems

In every large organization, certain responsibilities are **centralized** while others are **federated** (or ‘delegated’). Centralized decision-making is when a central body decides on one set of rules for everyone to follow and then mandates that decision. Federated decision-making is when responsibility for decisions are made by teams lower down the chain, by teams or individuals.

In general, the advantage of centralized models is that you can expect similar outcomes across the board, whereas the advantage of decentralized models is that solutions can be more flexible, adapting to local conditions. For example, if I owned the Tim Hortons brand, under a centralized model, I could set a uniform price for a coffee for everyone (so a coffee in downtown Toronto would cost the same in Leduc, Alberta), or I could let franchisees set their own price for a coffee depending on how ritzy their neighbourhood is (maybe in airports they want to charge $100 for a double-double).

### Federalism in Canada

Federalism in Canada is a long and proud tradition, going back to the very founding of the country. In the UK, more decisions are **centralized**, made by the national government and then consistently applied across the country. In Canada, more decisions are **federated**, with provinces able to decide on final implementations for themselves.

Let’s take the example of healthcare:

- In the UK, the national government directly provides healthcare for all of {% footnoteref "nhs" "<a href='https://www.instituteforgovernment.org.uk/explainers/devolution-nhs' target='_blank'>The provision of healthcare is devolved</a> in Scotland, Wales, and Northern Ireland." %}England{% endfootnoteref %} through the National Health Service (NHS).
- In Canada, the federal government doesn’t do direct healthcare delivery to {% footnoteref "population" "Indigenous and military care excluded." %}the general population{% endfootnoteref %} — they provide funding with broad conditions attached, which provinces/territories use to deliver healthcare themselves. It’s why I have an [Ontario Health Card](https://www.ontario.ca/page/apply-ohip-and-get-health-card), not a Canada Health Card.

Similarly to how provinces are responsible for final implementation decisions, within Canada’s federal government, many decisions are _devolved_ to federal departments. Central agencies in the federal government provide funding and set broad conditions for departments, who then set up their own structures for service delivery. In this way, we can say that **departmental IT decision-making is also** {% footnoteref "ssc" "Planning, building, and (for the most part) evaluating, and releasing digital services is the responsibility of individual departments or agencies. However, traditional hosting and infrastructure is a <strong>centralized</strong> responsibility of <a href='https://www.canada.ca/en/shared-services.html' target='_blank'>Shared Services Canada</a>." %}**federated**{% endfootnoteref %}, which goes a long way in explaining why Canada’s Design Principles have not taken hold in the same way as they have in the UK.

### Federated departments

In Canada’s federal government, the [Treasury Board Secretariat (TBS)](https://www.canada.ca/en/treasury-board-secretariat.html) is the central agency that reviews departmental requests for funding and allocates that funding (once budgets are approved by the Finance department). Within TBS, we find the [Office of the Chief Information Officer (OCIO)](https://www.canada.ca/en/treasury-board-secretariat/corporate/organization.html#ocio) who publishes central policies and guidelines for the departments to implement or take guidance from. In fact, OCIO publishes [Canada’s Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html), as well as the [Guide for Publishing Open Source Code](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-publishing-open-source-code.html), the [Policy on Service and Digital](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32603), [Directive on Identity Management](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=16577), [Government of Canada Standards on APIs](https://www.canada.ca/en/government/system/digital-government/modern-emerging-technologies/government-canada-standards-apis.html), and [lots more](https://www.canada.ca/en/government/system/digital-government.html).

However, TBS’s (and thus OCIO’s) ability to enforce compliance with these policies and guidelines uniformly across the federal government is limited. It’s a bit complex, but in practice most day-to-day implementation and workflow decisions are left to departments themselves. Similar to the federal/provincial split, this is a **federated** model.

In principle, there are good reasons for this. Allowing for local variation sets up individual departments as “[laboratories of enterprise IT](https://en.wikipedia.org/wiki/Laboratories_of_democracy)”: able to experiment with different approaches rather than following a rigid, top-down, one-size-fits-all plan. Federated models (theoretically) allow for more flexibility, varied approaches, more tolerance of risk, and more experimentation.

### Centralized IT

Since our federated model allows departments to vary between themselves, you might expect to see pretty varied approaches within departments to how they build and deliver services. However, in the departments I have worked with, this really isn’t the case.

Let’s stick with ‘open source software’ as an example. Departments _have_ the flexibility to experiment here, and, remember, OCIO _explicitly_ recommends that “[new code developed in delivery of services [be made] open to the outside world for sharing and reuse under an open licence](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html#ds3)” — it’s not _required_ but it is clearly encouraged. Given this, it could mean we see lots of variation here: some departments using lots of open source software, others avoiding it altogether, still others in the middle. However, by and large we see a widespread non-adoption of open source.

It would be easy to explain this outcome if there were some **centralized**, coordinating group, but the arrangement we have is actually the opposite of this. Instead, we can posit it is the ‘enterprise’ culture of large departments that biases towards consistency and against new-fangled approaches. In general, departments prefer a “enterprise-first” **highly-centralized** IT model: creating rigid standards that teams are required to follow with minimal exceptions. If you are using a 2006-era web framework, chances are you’re keeping it.

So, even though the federated approach allows departments flexibility, they’re still “[enterprise](https://federal-field-notes.ca/articles/2022-01-24-enterprise-the-wrong-bigger-picture/)” organizations — two contrasting organizational principles. While a federated model introduces the theoretical latitude to diverge and experiment, departments generally follow [an ‘enterprise’ culture which strongly values consistency](https://federal-field-notes.ca/articles/2022-01-24-enterprise-the-wrong-bigger-picture/#the-enterprise-approach) — often to the point of explicitly following “best practice” examples from other (Canadian) departments. While, _in theory,_ there is a lot of room to experiment in theory — trying out open source service delivery, maybe — _in practice_, departments like to keep things the same.

## A principled path forward

So what does this mean for you, the plucky agile practitioner trying to push forward the agile mantra? (Potentially you even have a great idea for a cool new project that will do just that.) Maybe it’s been frustrating how little evidence of a wider cultural change has taken hold these last {% footnoteref "11-years" "It’s been 11 years since 2012, when GDS appeared on the scene." %}11 years{% endfootnoteref %}, but despite it all you still believe in moving forward. Where do we go from here?

It’s a good question, and we don’t have any peer-reviewed “7 principles for federated transformation” strategic working group whitepapers to guide our thinking here, but, given all we’ve learned, there are definitely things we can intuit about the federated Canadian context to guide our actions as we go.

### 7 principles for federated transformation

#### 1. Change is slow

In a federated system, you don’t really have a mechanism for introducing large changes in approach all at once, so **you can expect things to move fairly slowly**. Under a centralized model, you can enact sweeping changes quickly — essentially [what Jeff Bezos did with his internal “API Mandate” memo](https://nordicapis.com/the-bezos-api-mandate-amazons-manifesto-for-externalization/). In the UK, the new [Design Principles](https://www.gov.uk/guidance/government-design-principles) and [Service Standard](https://www.gov.uk/service-manual/service-assessments/pre-july-2019-digital-service-standard), imbued with **centralized authority**, were able to change the culture of government service delivery in a few short years. On the other hand, in a **federated** model, everyone changes at their own pace — and, as we can observe from the progress of open source service delivery in Canada, it’s kind of a slow pace. Various actors in the system will change slowly and over time, although ‘pathfinder’ teams shipping successfully will exert pressure on others.

#### 2. Never be an outlier

In an enterprise context, **you don’t ever want to be first to do something**. You can see this clearly in environments where everything is ‘process-driven’ — if there is no process available, {% footnoteref "plans" "This can mean to writing plans for things you have never done before (eg, creating a cloud migration strategy before you have ever built a cloud application), which is almost in every case a bad idea." %}everyone is unsure how to proceed{% endfootnoteref %}. If you find yourself arguing against something clearly written down in favour of something completely undocumented, good luck. Being (perceived as) first will hurt your case: you should always look for some implemented example close to home or at least find a bank that did it already. That’s the downside of trying to effect change in this environment: being first is usually a disadvantage.

On the other hand, **you also don’t ever want to be last**, because that _also_ marks you as an outlier. A good survival strategy is to seek safety in the middle of a herd. Therefore, turn this instinct to your advantage by positioning your initiative as a way to avoid falling behind. It’s okay to not build open source products while nobody else is either, but if everyone else starts creating open source products and you still don’t know how to, you risk being caught out as the only team/group that doesn’t have their act together.

#### 3. “Loci” of opportunity

Since there is a system-level bias against novel concepts, the generic ‘innovation project’ starts off at a disadvantage. In the main, [departments are pretty risk-intolerant](https://federal-field-notes.ca/articles/2022-03-22-move-fast-stay-safe/#being-safe-why-we-dont-want-to-break-things): anything that looks too different from the status quo faces an uphill battle.

On the other hand, in any large-enough organization, you inevitably find competing agendas, varied incentives, and many streams of ongoing work. There is always internal pressure to produce flagship ‘innovation’ deliverables from time to time — in particular to allay ever-present concerns around falling behind (eg, being a last-place outlier). In such a multifaceted environment, **the opportunity to ship awesome, precedent-establishing services will come from specific “loci:” places where the timing, setting, and personalities line up just so**. With the right team and the right circumstances, newer approaches or modern methods can be successfully pitched.

Not to oversell this — being approved to _start_ is necessary but not sufficient for [a successful delivery](https://sboots.ca/2020/01/10/shipping/). But starting is always the first step. In general, keep your ear to the group for specific teams to present opportunities at specific times. If you catch wind of a promising project in a particular part of the government, it might be worth seeing if you can tag in there, since it could be a while before anything similar happens at your department.

Importantly, this point _also_ implies that you should always be re-evaluating if you’re currently best positioned to have the impact you want to have. If the initiative you’re on appears to be stalled and you catch wind of another one, consider making a move. The stars only align every so often — don’t martyr yourself on a long-running project that you’re no longer passionate about.

#### 4. Choose boring tech

I know it’s not what gets the innovation-heads out of bed in the morning, but **boring technology and conventional approaches will maximize your chances of success.** Enterprise’ technology is basically about preferring large solutions that scale; anything you can reasonably claim is “best practice” because a bank did it.

In government IT, it’s not that often you see genuinely novel technology buildouts, but lots of what counts as ‘digital transformation’ isn’t actually new, {% footnoteref "netflix" "Scott Brison was fond of saying “<a href='https://www.google.com/search?q=scott+brison+blockbuster+government+netflix+citizenry' target='_blank'>We can't be a Blockbuster government serving a Netflix citizenry</a>,” with ‘Netflix’ serving as an example of a new company with modern approaches. At this point, Netflix has been online streaming for 15 years." %}it’s stuff that’s been out there for years{% endfootnoteref %}. Government IT consultants often recommend fairly conventional technology buildouts that have been successfully implemented at other large organizations (eg, banks, other governments, etc).

When the opportunity for an ‘innovation project’ arises, lots of “new”s are implied: new ways of working, new cloud infrastructure, new roles ([PMs! Designers!](https://federal-field-notes.ca/articles/2022-07-20-hire-a-designer-and-a-product-manager/)), and, yes, new technology. [But an opportunity is just a potential success until it succeeds](https://sboots.ca/2021/10/24/if-its-not-public-does-it-even-matter/). To make the most of the opportunities you do get, you should [bias for boring technology](https://mcfunley.com/choose-boring-technology), because boring means ‘[safe](https://federal-field-notes.ca/articles/2022-03-22-move-fast-stay-safe/#being-safe-why-we-dont-want-to-break-things).’ ‘Safe’ allows you to borrow the credibility from other “enterprise” orgs outside of gov (eg, Microsoft, IBM, RBC, etc.) when you meet with all the committees that you eventually have to meet with. For example, it’s much better to say, “I built this application in Java Spring Boot”, a well-understood, popular Java framework that (a) many orgs use, and (b) upgrades our technical stack by 15 years, than to say “I built this dApp in Solidity and web3.js”. Preventing the proliferation of random technology choices is the bread and butter of every Review Board in history, so you are signing up for a world of hurt if you pick a too-shiny stack.

Any time you successfully ship something that works, you buy yourself credibility for the future. Prioritize choices that are more likely to get you there.

#### 5. Use precedents

All previous principles flow into this one: **precedents are super important, so find one**. Whenever you can, you want to root your argument in the idea that _what you are doing has already been done_. If you can, try to extend that logic: not only is this safe and well understood (read: we are not first), but if we don’t do this, we will fall behind (read: we don’t want to be last). It is always difficult to get buy-in to be the ‘first’ to do something, so don’t be first, be second (or tenth).

While ‘modernization’ writ large is going to proceed slowly, across an organization as large as the government, you are bound to see new products that prove out some approach or other. You can even use successful examples from other governments or institutions — although generally the closer your example is to where you work, the better it reads as evidence. As much as you can, keep your ear to the ground and ask around for similar initiatives [whenever you are scheming up a cool new project](http://www.cpsrenewal.ca/p/handbook-scheming-virtuously.html). Anytime a modern approach to service delivery succeeds somewhere in gov, it creates an opportunity for you as well.

This is also why it is important to use your “loci” as opportunistically as possible (my recommendation for this: “[Move fast, be safe](https://federal-field-notes.ca/articles/2022-03-22-move-fast-stay-safe/)”). Each time _you_ succeed, it creates a path for others to follow.

#### 6. Avoid bad precedents

This is not such a fun one, but precedents can be negative as well as positive. In the same way that successes can be exported to other locales, failures will tend to discredit new ideas; **because some approach failed already, it _can’t ever_ work**. If there are negative examples floating around that sound similar to what you are hoping to do, you need to get away from that association. Try not to pitch something that people will associate with a recent failed initiative: don’t pitch a new NFT marketplace project if the last one was cancelled 6 months ago.

Fortunately, there is an edge here for successful precedents: people want to share stories of success, whereas generally you don’t want a failure widely publicized. Stories of successes are likely to travel further than failed projects — unless they are enormous and highly publicized (eg, [HealthCare.gov](https://d3.harvard.edu/platform-rctom/submission/the-failed-launch-of-www-healthcare-gov/) in the US). Luckily for us, _the whole point_ of the modern, agile user-centric service delivery is to _prevent_ exactly this kind of spectacular failure. <span aria-hidden="true">😎👌</span>

In any case, the takeaway here is (a) precedents are important, and (b) precedents cut both ways. If you start hearing people associating your project with a recent failure, have a clear rationale ready for why yours is different and has internalized lessons from the past. Or, maybe it’s just not the right time, in which case let the field sit fallow for a season or two before rolling up your sleeves.

#### 7. Build momentum

Inertia is a physical property of large objects. When they aren’t moving, it’s hard to get them to start, but once they are moving, it’s hard to stop them. Similarly, **the inertia of large organizations means that initially it is hard to introduce change, but once you start gaining momentum it becomes hard to resist that same change.** This principle is kind of science-y but in my experience it holds true.

When I was working at a past department [on a website for citizen engagement](https://federal-field-notes.ca/articles/2021-12-15-paperweight/), we had to meet with 8 committees to get their approvals. Initially this is pretty dicey, and we heard a lot of ‘domino logic’ (Have you talked to group ‘X’? I can’t approve if they haven’t; Have you met with group ‘Y’? What were their concerns?). But eventually as we built momentum, we benefited from the inertia of an object in motion. Basically, once 7 committees have given their approval, it’s pretty dang hard for committee 8 to block you.

Introducing change within an organization works this way as well. Large cultural changes initially mean expending lots of time and energy to see any results, but once they begin to take hole, they become very hard to stop. This is what GDS accomplished in the UK: they were a (relatively) small team that catalyzed a widespread cultural transformation towards agile, open source service delivery, becoming the model for the aforementioned ‘digital government’ agencies around the world. This is what you are working towards.

Progress can seem slow at the outset, but with tenacity, smart decisions, and a bit of luck, you will eventually find yourself on the winning side of the argument over time — with inertia helping you succeed instead of slowing you down.

## The winning strategy

Ultimately, this is the winning strategy for organizational change in a federated enterprise. At the outset, a federated system makes large coordinated changes unlikely, and ‘enterprise’ culture biases against anything too “new.” Conventional logic discourages being seen as being ‘first,’ and instead always remain within accepted boundaries. However, large, distributed organizations are complex, and at any given point can seed the ground for innovative projects that move the needle forward. Use these ‘loci of opportunity’ to your advantage, as every success becomes an important precedent for future projects, ideally creating a positive feedback loop where those can succeed as well. Over time — and we’re talking years here — this forward momentum transforms the inertia of the system from a factor that works against you (it’s hard to move large objects) into an advantage (it’s hard to stop a large object).

So that’s a pretty rosy picture when you add it all up, but it doesn’t always seem that way. Real change isn’t a straight line, but comes in fits and starts; it can be hard to feel like there’s a path forward after a setback, like being delayed or cancelled. Using the open source data we have as an indicator, we’re still in the initial stages of triggering a broader change to the culture of government service delivery in Canada — we’re still trying to overcome the initial inertia of moving a large organization.

Pushing really hard against a solid brick wall just tires you out, so _we need to do better_ than just believing in the mission and sticking it out on projects that never ship. Making meaningful progress means figuring out what we’re up against and spending energy where it’s best used. These principles are a start: they are’t foolproof but they are hard-won, drawn from years of experience, and — don’t we love it — ‘open source.’ Use them if they feel right to you — they do to me. Digital transformation in Canada is a hard problem that won’t get solved through serendipity and overtime: we need to be Transforming better.
