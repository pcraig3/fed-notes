---
title: "The AI compliance quandary"
author: "@pcraig3"
leadIn: "Will AI adoption in government cause a compliance crisis? Let’s hope so!"
metaDescription: "Will AI adoption in government cause a compliance crisis? Let’s hope so!"
ogDescription: "Will AI adoption in government cause a compliance crisis? Let’s hope so!"
date: "2026-04-17"
---

[[toc]]

## Introduction

If I were to ask you how many AI services the Government of Canada has publicly launched, how many would you guess? If you are a normal person, you would say “_who cares?_”, which is probably the right answer. But if you are a huge government technology nerd like me, you might say “_I don’t know, three?_”

LinkedIn has identified me as a guy who will read the [Sean Boots blog](https://sboots.ca/), expand an [Alistair Croll post](https://www.linkedin.com/in/alistaircroll/recent-activity/all/), and even click on canada.ca links. I am trapped in the dorkiest radicalisation funnel of all time: the ‘government innovation’ echo chamber. I am in the top percentile of Canadians getting this stuff in my feed.

I would have guessed there were 3 Government of Canada AI services:

1. [AgPal, Program and Service Finder](https://agpal.ca/en/home)
2. [AI Answers](https://digital.canada.ca/2025/12/17/ai-answers-enterprise-scale-trial-for-canada.ca/)
3. [Charlie the Chatbot](https://www.canada.ca/en/revenue-agency/corporate/contact-information/cra-chatbot.html)

But this is completely wrong! There exists [a spreadsheet of Canadian government AI services](https://open.canada.ca/data/en/dataset/fcbc0200-79ba-4fa4-94a6-00e32facea6b/resource/369f6f34-148a-42ed-b581-8c164e941a89) and it has _409_ entries! A big number for sure, but once you filter it down to Actually Deployed AI tools that are publicly available, [you end up with 22](https://docs.google.com/spreadsheets/d/1KocHb1va3pH6nwR77cotsJAvPGKtn9kOzxjcanxNWWw/edit?gid=1513289254#gid=1513289254).

I am not an AI maximalist by any means. Just like you, I try to ignore that weird diamond-shaped ‘Gemini’ icon in Gmail. I am flying solo out here, no Copilot for me! When Adobe _pleads_ with me to let it summarize a PDF, I coldly refuse.

Still, there is a marked difference between the frenetic pace of AI tools nobody asked for showing up in every commercial software, versus the relatively unchanging nature of my interactions with the government. I don’t have privileged information on this subject, but it just seems to me that things are moving slowly.

This is not exactly surprising considering the federal government’s history of IT modernization which moves at the speed of erosion. But it _is_ surprising given the “pedal-to-the-metal” tone of rhetoric flying around. Aren’t we supposed to be Building Canada Strong? Isn’t there an AI Minister now? Isn’t this a ‘hinge moment’? In its own words, the government is determined to “[[deploy] AI at scale](https://www.pm.gc.ca/en/mandate-letters/2025/05/21/mandate-letter)” to “[create new types of services to better meet the needs of those we serve and improve the quality and efficiency of services already offered](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/gc-ai-strategy-overview.html)”.

So where is all that stuff?

## AI compliance is complicated: a theory

Releasing new services in government is challenging for normal, non-AI apps. So we could reasonably assume that releasing a new AI app in government is challenging because releasing _anything at all_ is challenging.

But I think something else is going on here. My theory is that the government is heavily invested in a particular approach to compliance that generative AI does not conform to.

I worked in the Canadian federal government for years and have a pretty good sense of how deploying a new digital service works (it’s hard). I have [previously written about how approaches to compliance are too onerous and focused on the wrong thing](https://federal-field-notes.ca/articles/2021-12-15-paperweight/): how they prioritize paperwork rather than meaningful signals like automated tests and penetration testing. Existing compliance looks a lot more like “write me 10,000 words about how your application is safe” rather than “make sure you get an alert if your service goes down”. Basically, you have to explain in writing exactly how your system works and how nothing weird can ever happen.

Generative AI is _plenty_ weird though. If today’s compliance approach for a new digital service is to build a jail cell around it, generative AI is like the liquid-metal Terminator 2 robot that oozes through the metal bars.

I think this partly explains why we don’t see a lot of public AI services coming out of the federal government. On the one hand, there is clearly a strategic desire to build AI services, on the other hand, I suspect there is an operational problem around approving them.

Now, this is all just a theory of mine because I don’t really know what is happening in the government. How AI is being built and deployed (or not) is mostly happening below the waterline. But occasionally there are ripples of movement, and sometimes a shark fin breaks the surface when there is blood in the water. Let’s look at a recent example: [CRA’s Charlie the Chatbot](https://www.canada.ca/en/revenue-agency/corporate/contact-information/cra-chatbot.html).

### Challenging Charlie the Chatbot

On October 21 2025, [the Auditor General (AG) released an audit criticising the accuracy of the Canada Revenue Agency’s (CRA’s) call centres and chatbot](https://www.canada.ca/en/auditor-general/our-work/audit-reports/canada-revenue-agency-contact-centres.html). The report makes a withering assessment: call centre responses for business tax questions are 54% accurate, but only 17% accurate for general individual-tax questions. They also note that CRA’s Charlie the Chatbot “provided accurate answers in only 2 out of the 6 questions we asked it”.

Getting 2 out of 6 questions right nets out to 33%, resulting in negative headlines like [_The CRA spent $18M on 'Charlie,' a new tax information chatbot that is wrong most of the time_](https://nationalpost.com/news/politics/the-cra-spent-18-million-on-charlie-its-new-tax-information-chatbot) and [_Auditor General Slams Ottawa’s $18 Million CRA Chatbot ‘Charlie’_](https://www.iphoneincanada.ca/2025/12/12/auditor-general-slams-ottawas-18-million-cra-chatbot-charlie/).

As a founding member of the AI tax chatbot club, I was _extremely_ interested to know how [TaxGPT](https://taxgpt.ca) (an AI chatbot that I built, [not an official government service](https://taxgpt.ca/pages/about#is-taxgpt-a-government-of-canada-service%3F)) would hold up to this brutal examination. Specifically, I wanted to know:

- What questions did the AG ask?
- What are the answers to those questions?
- What did Charlie get wrong?

So I submitted an [Access to Information request](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/access-information/request-information.html) on November 18, 2025, and a mere 134 days later — on April 1, 2026 — I finally got ‘em!

### Testing TaxGPT, Checking Charlie

[The data I received](https://drive.google.com/file/d/1jYlYFmFWv36U8UfWjTmmJIS31qk69_Mp/view?usp=sharing) actually contains 25 discrete questions, not 6. Each question includes an answer, a source, and a column called “Examples of wrong responses”. They are sometimes tricky to answer but not impossible. To me, they look a lot like the questions people ask TaxGPT every day. Overall, these questions are great — hats off to the auditors!

The first thing I did after reading through them was see how many TaxGPT got right. Then I made some improvements and measured the new results.

**TaxGPT answer accuracy**

| Date           | Answered correctly | Percentage answered correctly |
| -------------- | ------------------ | ----------------------------- |
| April 8, 2026  | 20 / 25            | 80%                           |
| April 12, 2026 | 23 / 25            | 94%                           |

Next, I went to CRA’s Charlie the Chatbot and asked all the same questions. (For the initial benchmark, I used the numbers provided in the AG report.)

**Charlie answer accuracy**

| Date              | Answered correctly | Percentage answered correctly |
| ----------------- | ------------------ | ----------------------------- |
| June 30, 2025 (?) | 2 / 6              | 33%                           |
| April 12, 2026    | 18 / 25            | 72%                           |

If you are a data person, you can find all of the data [in the appendix at the end of this article](#appendix-all-questions-and-ai-responses). If you are a normal person, you can take my word for it.

### A Smarter Charlie

Even if my numbers are off a little, it is clear Charlie is performing much better today than he was for the auditors. From a “guy who made TaxGPT” perspective, this means the competitive landscape is more difficult for me. But from a “Canadian who wants to see the government work well” perspective, this is an excellent result.

The AG report cast CRA in a bad light and generated bad headlines. But this isn’t the end of the story: clearly, they have done a lot to improve their chatbot.

Ultimately, this is a success story.

1. CRA releases an AI service.
2. The auditor general audits it. They find that it works poorly.
   2.5. A bunch of negative newspaper articles are written about CRA.
3. CRA uses the result of the audit to improve their service.
4. Now the service is performing better. This is a good outcome!

By step (4), you could argue all’s well that ends well. But if I were in another department considering shipping an AI app and I was looking at that narrative arc, I would be worried about steps (2) and (2.5). Why not go straight from (1) to (4), making sure the service we release at the beginning is the working version? Clearly, something was missed here — why not expand our compliance checklist to address the issue?

## The AI compliance quandry

<details>
  <summary>Prominent disclaimer</summary>
  <p>
    Note that what follows is speculation. I don’t have insider information, I’ve been out of the federal government since 2023. But I worked there for years prior to that and wrote extensively about it right here on <a href="https://federal-field-notes.ca/">Federal Field Notes</a>.
  </p>
</details>

To outline my argument before I make it, here’s what I believe:

- Generative AI is a good solution for a major problem the government has
- However, government’s compliance approach is very poorly suited to AI
- Specifically, there is a well-known best-practice approach for testing AI apps, but the government’s compliance culture may simply reject it

Let’s get into it.

### Is AI good for government?

I know there is a lot of AI skepticism out there, and there should be! Much of what we have been promised about AI is overstated or exaggerated. This post isn’t about litigating that argument. My experience is that AI is a tool which is good at some things and bad at others. The overarching goal should be to deploy AI in ways that emphasize its strengths and mitigate its weaknesses.

Let’s take the example of cars. Cars definitely have downsides: they cause pollution and they are dangerous. People driving cars sometimes get in accidents. Saying “cars pollute the environment and hurt people” is not _wrong_, but it is not the whole story. Cars are _also_ a practical transportation solution for a huge amount of people. There are good and bad things about cars, so there is a tradeoff here. As a society, we haven’t outlawed cars. Instead, we have tried to preserve the good things about cars (moving people around) while reducing the risks (make cars safer).

AI is terrific at the “needle in the haystack” problem. Let’s say I need to know something that is in a 400-page instruction manual. Reading the manual end-to-end will take me 2 days, but an AI model can tell me the answer in 30 seconds. This isn’t _always_ what we want (eg, if I am a student and am supposed to be engaging with the material), but many of our interactions with government are simply about getting a clear answer and moving on with our lives.

Governments turn social goals into _formal rules_ about who gets what, who owes what, what is allowed, and what isn’t. Speaking as a government technologist, **so much** of what governments do is (try to) communicate these rules in clear, understandable ways that are convenient to access. And it just so happens AI is excellent at solving this exact problem.

Taxes are the perfect example. Everyone has to file taxes, but nobody wants to read the [Income Tax Act](https://www.canlii.org/en/ca/laws/stat/rsc-1985-c-1-5th-supp/latest/rsc-1985-c-1-5th-supp.html). I don’t advertise TaxGPT, but people keep finding it. [My usage numbers go up about 500% in March and April](https://taxgpt.ca/pages/usage-and-data-analysis-2025#usage-numbers). TaxGPT sees every possible formulation of ‘_Here is my situation, what benefits am I eligible for?_’ It’s not going to work for everyone, but it does help a lot of people. People are looking for information, and AI is a cheap, fast, and convenient option to deliver that information.

Doesn’t AI make stuff up though? Yes, this can absolutely happen, but it’s a solvable problem. Like many technologies, the challenge is deploying AI apps that emphasize its strengths (answering questions) and obviate its weaknesses (making stuff up). For most people, withdrawing cash at an ATM is more convenient than lining up at a bank teller, even though it introduces problems like forgetting your PIN number. The point is that the tradeoff is worth it.

At the end of the day, governments produce an immense amount of information, and AI is very good at digging through it and returning specific answers. So when we ask “Is AI good for government?”, the answer is **yes**. But what’s harder to tell is whether or not government is good for AI.

### Is government good for AI?

I worked at the Canadian Digital service for five years. My job was to help departments build faster, cheaper, more user-centric services. [Everyone agrees with this in principle, but the processes you have to follow can make this very hard in practice](https://federal-field-notes.ca/articles/2022-01-24-enterprise-the-wrong-bigger-picture/#short-term-oversight-that-misses-the-point). Imagine if you are making a cake and your recipe book requires you to mix in a cup of concrete. Even if everyone involved agrees they want to deliver a delicious cake, this recipe is not going to produce one.

I have written previously about how much paperwork is involved in relatively small projects: [how you can easily end up writing a novel’s worth of paperwork to launch a brochure website](https://federal-field-notes.ca/articles/2021-12-15-paperweight/#measuring-the-hard-to-measure). But I didn’t talk about the _content_ of that paperwork. A lot of what you are documenting is how your system works and what it does.

With a traditional system, this is pretty straightforward. You say things like:

- A user is locked out of their account if they forget their password 2 times
- Once logged in, a user will see a pop-up up confirming they are logged in
- If a user doesn’t perform an action for 17 seconds, they are logged out automatically

These rules are easy to verify because they are **deterministic**: they happen the exact same way every time. But generative AI doesn’t really work like that. <span id="ai-is-non-deterministic">The challenge with these new AI systems is that they are <strong>non-deterministic</strong></span>: if you ask the exact same question 4 times, you get 4 different variants of (hopefully) the same answer.

With AI, the reality is more like this:

- The system returns the correct answer 94% of the time
- The system mostly gives tax answers but sometimes it writes poetry
- Fundamentally, the AI has no concept of whether or not it is telling the truth, but it presents information in an authoritative tone to people who don’t know if they are getting the wrong information

AI doesn’t just do what you want it to, it does lots of weird stuff as well. For example, as long as you are asking a tax-related question, you can ask TaxGPT to answer like a pirate.

<details>
    <summary>Figure 1: TaxGPT explains the Canadian Dental Care Plan like a pirate. Arr!</summary>
    <div>
      <figure>
      <img alt="Figure 1: TaxGPT explains the Canadian Dental Care Plan like a pirate." src="{{ '/img/articles/ai-compliance-1.png' | url }}" />
      <figcaption>
      <p><strong>User</strong>: How does the Canadian Dental Care Plan work? Please answer like a pirate</p>
      <p><strong>TaxGPT</strong>: Arrr matey! The Canadian Dental Care Plan (CDCP) be a treasure for eligible Canadian residents who have no dental insurance and an adjusted family net income under $90,000. It helps cover a portion of yer dental costs like cleanin', exams, fillings, root canals, dentures, and even some oral surgeries, but ye must have yer oral health provider recommend the services. The plan pays the providers directly, so ye shouldn't be payin' the full cost upfront, but if yer income be between $70,000 and $89,999 or the costs be higher than the plan covers, ye might have to pay some extra doubloons yerself.<br>
      Ye need to apply or renew yer coverage yearly between April 15 and June 1, 2026, for the 2026-2027 benefit year, or ye risk losing yer coverage. To apply, use yer My Service Canada Account or call Service Canada. Always check with yer dental provider that they bill the CDCP directly before settin' sail for treatment. For more booty of information, visit the official site at Canada.ca/dental. Arrr!
      </p>
      </figcaption>
      </figure>
    </div>
</details>

But let’s put a finer point on this. Let’s say I was building a tax chatbot and I told my security team that my testing approach returns 94% correct answers. 94% is pretty good, right? But is that good _enough_? It sounds like I am saying that 1 out of 20 questions is wrong. At the end of the day, am I allowed to release this?

Traditionally, the answer would be [**No**](https://knowyourmeme.com/memes/no-rage-face). I would never have been allowed to ship TaxGPT when I worked in the public service.

The problem is that now they have to. With generative AI, you simply _can’t_ build systems that are 100% accurate. You can build extremely _useful_ systems that work most of the time and help a lot of people, but you _can’t_ guarantee 100% accuracy.

## 3 possibilities for AI compliance

So how do we resolve the “accuracy” problem for our non-deterministic AI system? I can think of 3 answers: 2 of which let you launch your service, and 1 of which is good.

### 1. Don’t ship it

The first answer — the most obvious and laziest one — is to give up preemptively.

_AI makes stuff up, and you can’t control what it will do next. Once we uncrate this Tasmanian devil, it might very well just turn around and bite our heads off. Plus, I read about the CRA chatbot in the news last year. Forget it, it’s not worth it._

This is the path of no resistance. With any luck, you can just sit on the sidelines while other people go first and eventually you can copy what they did. [It’s risky to be first to do something in a federated system](https://federal-field-notes.ca/articles/2022-12-15-transforming-better/#2-never-be-an-outlier), so maybe you plan to show up to this party fashionably late.

Not everyone will be able to maintain this cool detachment, however. As we have heard for months now, “[AI is positioned as a tool to meet Carney’s other priority – delivering more while spending less on government operations.](https://policyoptions.irpp.org/2025/09/ai-government/)” There’s even an [AI Strategy for the Public Service](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/gc-ai-strategy-overview.html) out there, just waiting to be pointedly sent as an email attachment following a contentious Teams meeting. At some point, someone is going to want to see some movement on this.

There’s also an argument that you could use AI to provide Canadians with useful government services — maybe that’s a factor too.

Now, for those who _do_ have to ship an AI service, what might they do?

### 2. Don’t ask, don’t tell

One answer to the compliance problem of ‘How do we know how accurate the AI is?’ is simply not to know.

In the real world, users will input almost anything you can imagine into your service, and the outputs are almost always unique (you almost never see two responses that match word-for-word) — not to mention there is some percentage of people who just want to chit-chat. One is tempted to conclude this whole scenario is simply too random to quantify.

To be fair, there is a real conundrum here. AI is too unpredictable to fit cleanly into the existing ‘tell me exactly what will happen’ compliance model. It is **impossible** to get your AI to be 100% predictable: even if it gets 1000 questions right, all it takes is one bad answer to lose your 100% guarantee.

If we come up with an accuracy number of 94%, is that _good_? It’s not as good as 95%, which is itself not as good as 96%. At the end of the day, can we launch any service with an accuracy estimate less than 100%?

One way to deal with this problem is to just ignore it. If you don’t know what the right answer it is, don’t ask the question. Since you can’t guarantee 100% accuracy, don’t measure it. You’re on a deadline and your IT compliance process doesn’t have a good answer for this, so why even open this can of worms? It’s just going to confuse everyone and cause you a big headache. AI is a strategic priority, and you gotta get this out the door ASAP, so let’s don’t talk about it.

I can imagine teams ending up here, but this is very unsafe. It’s like saying you can only buy a car if it has no backwards-facing mirrors. Sure, it means you can drive the car off the lot today, but it’s also _super dangerous_ because you don’t know what the heck’s going on around you.

The other risk is that without a clear metric around this, you can be ambushed. Imagine someone writes a report claiming your service is only 33% (!) accurate. That number doesn’t sound right to you, but you don’t have a good way of refuting it. If you don’t have an internal concept of accuracy, someone else will come up with one for you.

So how _do_ you reliably measure the accuracy of a mercurial technology like generative AI?

### 3. Maintain a set of evaluation questions (evals)

One popular strategy for getting a grip on your AI system is to create a ‘question bank’ ([typically called “evals”](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)) to test with. Every time you significantly change your content, your prompt, or your LLM (maybe it’s time to try Grok??), you re-ask your eval questions.

If your chatbot is answering 8/10 questions right, and then you make a change and it gets 9/10 questions right, that’s super! But if you keep making changes and now it only gets 6/10 right, it’s time to undo. Evaluating your system’s performance against a consistent set of questions lets you track progress over time, and you can continue to add questions as you discover (and fix) gaps.

[Propel](https://www.propel.app) is an American technology company that has been blogging about how they are building AI systems to answer [SNAP (Supplemental Nutrition Assistance Program)](https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program) questions. If, by chance, you are not in the same LinkedIn funnel as me, [check their stuff out](https://www.propel.app/author/dave-guarino/)! As part of their [blogging](https://www.propel.app/insights/building-a-snap-llm-eval-part-1/) [about](https://www.propel.app/insights/building-a-snap-llm-eval-part-2-testing-and-automation/) [evals](https://www.propel.app/insights/building-a-snap-llm-eval-part-3-testing-nuanced-capabilities/), [they maintain a public list of eval questions used to test their system](https://docs.google.com/spreadsheets/d/1-0zlX-80w7edpOlZWUPvTkp28J4HS_ZyKnuDjDtKeoc/edit?gid=0#gid=0). I wouldn’t expect other teams to share their eval questions publicly, but I would absolutely recommend they have some.

The AG report resulted in bad headlines for the CRA, but there is a silver lining here. As part of testing CRA’s chatbot, [the auditors created an excellent set of evaluation questions](https://drive.google.com/file/d/1jYlYFmFWv36U8UfWjTmmJIS31qk69_Mp/view?usp=sharing) which come annotated with correct answers and links to sources. For anyone running an AI tax chatbot, this is an extremely useful dataset.

Okay, but after my big lead-in about how the government isn’t ready for AI, what’s the problem with this? At the end of the day, ‘come up with a list of questions and score yourself on it’ doesn’t sound too bad. So long as teams are already doing checklist-y compliance activities, why not just toss this one in too?

Well, the problem is that it’s actually _very important_ that your question bank includes questions you _can’t_ answer. Otherwise, you can’t tell if you are getting better.

#### Imperfect is important

Since you are writing your own exam, it’s natural to want to fill it with questions you know the answer to. This will make you happy, and it will make your compliance checkers happy. Unfortunately, this isn’t representative of what happens in the real world.

Once your service launches, you are gonna get lots of inputs that you didn’t anticipate. If you spent all your time just testing easy ones, you won’t really know how your system handles inputs that are complex, off-topic, hostile, or just goofy (“answer like a pirate, arr!”).

You also can’t fully track your service’s performance over time.

- If your set of questions includes some you can’t answer (yet), then you can track 3 things: (1) getting better, (2) staying the same, (3) getting worse.
- If your set of questions starts at 100% right, you can only (2) stay the same or (3) get worse: you can’t know if you are getting better.

I mentioned Propel earlier for publicly sharing their evaluation questions. That’s not all they are sharing! [Here is a graph they shared](https://www.linkedin.com/posts/daveguarino_ai-models-are-getting-much-much-better-at-activity-7435820333607317504-MTus) showing how their AI system improved at answering SNAP questions over time.

<details open>
    <summary>Figure 2: Model performance on Propel’s SNAP policy eval</summary>
    <div>
      <figure>
      <img alt="Model performance on Propel’s SNAP policy eval. A line graph plotting results from 52% to 92%. The timeline is not explicit." src="{{ '/img/articles/ai-compliance-2.png' | url }}" />
      <figcaption>
      <p>A line graph plotting results from 52% to 92%. The timeline is not explicit.</p>
      </figcaption>
      </figure>
    </div>
</details>

If Propel had started by cherry-picking only the questions they knew they could answer, it would be impossible to measure how much better they got.

This is the fundamental tension I suspect is happening inside government. In order for a set of evals to be indicative of progress, product teams _should_ include questions their AI service can’t answer. But will compliance enforcers allow that? Surely they would much prefer a 100% accuracy score. Maybe product teams end up selecting a handful of questions they know they will get right, or maybe they avoid evals to skip this compliance pitfall altogether.

## Who evaluates the evals?

At the end of the day, generative AI does not behave like other technologies that the traditional government compliance approach is designed for. I don’t know how this will shake out, but I expect different teams will land in different places with this.

Basically, the tension inherent in creating a set of eval questions is:

- For honestly evaluating an AI service, you should be scoring less than 100%
  - This is what is best for _users_ of the service
- For getting an AI service approved, you should always score 100%
  - This is what is best for _internal stakeholders_

When I was in government, we were expected to produce documentation that invariably claimed that your system was fully locked down and would never do anything unexpected. That’s how you would get approved. Now that the government is being asked to build AI systems, this same approach doesn’t really make sense.

With any luck, the novel challenge of assessing AI systems is an opportunity to adapt the compliance regime to prioritize real information about how a service is performing.

On the other hand, we may just as easily wind up with a scenario where every new AI product team is asked to create their own exam and then score 100% on it. If this is where it ends up, we should probably get used to seeing Auditor General reports in the news.

## Making sense of AI

My personal opinion is that CRA is doing a good job with AI adoption. AI is a huge rhetorical topic among senior government leaders, but there’s not a lot of evidence of AI improving nuts-and-bolts service delivery. [Most of the AI apps released by the Government of Canada so far](https://open.canada.ca/data/en/dataset/fcbc0200-79ba-4fa4-94a6-00e32facea6b/resource/369f6f34-148a-42ed-b581-8c164e941a89) have been very modest. In contrast, CRA has launched a high-volume nationwide AI service targeting a problem that tons of people have. Yes, they have been criticised for it, but they have also been _responsive_ to that criticism, substantially improving Charlie the Chatbot since last year.

It seems to me unfair that CRA suffered a negative news cycle based on the findings of the Auditor General but didn’t get a positive news cycle for improving it. This is the kind of dynamic that encourages timidness from our public service. If mistakes become huge crises while successes are unremarked, leaders learn to keep their heads down and avoid doing anything too ambitious. From my perspective, CRA’s chatbot is an obvious solution for an extremely common problem and I have no doubt that it is helping a lot of people.

The AI chatbot I built, [TaxGPT](https://taxgpt.ca), has answered more than 90,000 questions so far; I bet CRA sees numbers like that every week.

I suspect that the reason CRA was vulnerable is because their compliance process didn’t truly account for how to measure their AI system’s performance. And while CRA’s chatbot provides the most visible example, the ‘how to deploy AI apps safely and responsibly’ problem applies to all of government.

Both citizens and the government stand to benefit from AI services that provide accurate answers in a way that is cheap, fast, and convenient. But there is no guarantee that’s what we are going to get.

My experience in the federal government was with onerous compliance processes that often prioritize the _appearance_ of safety rather than real metrics that help you understand how your service is performing. A bad outcome here would be mandating that every AI service has to receive a 100% accuracy score from a deliberately naïve set of evaluation questions. Other bad outcomes would be ignoring the risks and shipping risky systems to production, or concluding the risks are unmanageable and never shipping anything.

AI is here and it solves real problems. We are at an inflection point: we have energetic government leaders who are enthusiastic about new approaches, and we have a new technology that solves for a problem that has been very expensive to address thus far. AI is a genuinely useful technology that makes a lot of sense for government. Let’s hope our government can make sense of AI.

## Appendix: All questions and AI responses

Between April 8 and April 12, I evaluated both TaxGPT and Charlie the Chatbot against a list of questions used by the Auditor General in their report “Canada Revenue Agency Contact Centres”.

- The full report: [Canada Revenue Agency Contact Centres](https://www.canada.ca/en/auditor-general/our-work/audit-reports/canada-revenue-agency-contact-centres.html)
- [The list of tax questions used by the Auditor General](https://drive.google.com/file/d/1jYlYFmFWv36U8UfWjTmmJIS31qk69_Mp/view?usp=sharing)
- Here are the results of my evaluation:
  - [TaxGPT (April 8)](https://docs.google.com/spreadsheets/d/1Jv5NHxI5t81YS2DOYiuFB0oPZGwgeFkASmnewDqjolY/edit?gid=0#gid=0)
  - [TaxGPT (April 12)](https://docs.google.com/spreadsheets/d/1Jv5NHxI5t81YS2DOYiuFB0oPZGwgeFkASmnewDqjolY/edit?gid=1038455316#gid=1038455316)
  - [Charlie the Chatbot (April 12)](https://docs.google.com/spreadsheets/d/1Jv5NHxI5t81YS2DOYiuFB0oPZGwgeFkASmnewDqjolY/edit?gid=961070908#gid=961070908)

**On accuracy**

I tried my best to use AG’s “Answer” and “Examples of wrong responses” columns to calibrate what they considered a right answer. For example, for the question “Decease on December 21, 2024: final tax return. When is the deceased final tax return due? [sic]”, the answer has to mention that the return is due the next business day because the filing date falls on a weekend.

**On repeatability**

As mentioned above, [generative AI is non-deterministic](#ai-is-non-deterministic), so different answers will be returned for the exact same question. If you repeat this experiment, you will see slightly different results.
