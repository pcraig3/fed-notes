---
title: "Mobbing at GDS"
summary: "Using mob programming to solve a problem"
date: "2021-11-15"
---

A lot of the time here at GDS, we think the best way to solve something tricky is to share the problem. Often, it’s not a case of ‘too many cooks spoil the broth’, it’s a chance for us to get as many brains as possible thinking about the same thing. So actually, it’s like ‘a problem shared is a problem…’ well, it’s a smaller challenge for each person.

My name’s Paul and I’m a developer on the Digital Marketplace. Recently, our team of developers has been trying to solve a problem using mob programming. The development team on Verify has been experimenting with mob programming for a while, but this was something new for us. The idea is that “the whole team works on the same thing, at the same time, in the same space, at the same computer,” says Woody Zuill, the self-proclaimed father of mob programming.

## Testing shouldn’t be testing

As with all GDS services, on the Digital Marketplace we constantly test different scenarios a user might find themselves in. We do it so we can be confident that everything works as we’d expect it to, so we can avoid broken user journeys like dead ends or user data not saving properly. There’s nothing more infuriating than completing an online form, clicking through to the next part and having everything you’ve filled in disappear.

In April, we were working towards putting Digital Outcomes and Specialists live (a piece of work we’d been developing for months). During this period of heavy testing, we realised that the code we’d written to test whether things were working as they should be, had become unwieldy and frustrating for our developers to maintain.

Because we’d already spent months writing the code to build the application, it was tempting to write the test code super quickly, and I think that’s what we’d been doing here. One of us would write some code to test a part of the user journey, and then when the next person came to write more, they weren’t always sure what the last person had done or what the next person would need to do. So, individual developers were making small changes without agreeing on common ways of doing things, and the code got more confusing as it grew.

## Ready, steady, mob

As Woody suggests, we each took on different roles: one person typed and another led the session. While this was happening, the rest of the mob gave their input as and when it was needed. The main point of a session is that “for an idea to go from someone’s head into the computer, it must go through someone else’s hands,” says programming expert Llewellyn Falco.

The whole thing felt super collaborative because everyone was engaged in solving the same problem. Every 5-8 minutes, we swapped roles, being careful not to shove someone into a role they weren’t keen to take on.

We weren’t planning to mob forever, but by starting to rewrite the test code as a group, individual developers returning to the project later would be aware of its history and understand its design.

## Could we fix it? Yes, we could

Rewriting the code seemed like a really slow process at the beginning. However, when we became more familiar with the process and settled on a direction, we gained momentum as we went. Together, we built up a collection of code that we all understood and agreed with.

## Mobbing: another form of collaboration

We’re a collaborative bunch at GDS. Whenever developers work on things individually, someone else reviews our code. We also do a lot of pair programming (2 developers working side by side to fix a problem together), and we do group ‘story kickoffs’ where various team members talk about the approach to a piece of work before an individual developer works on it. Now the Digital Marketplace development team have also used mob programming successfully.

Each of these types of collaboration are suited to different kinds of problems. Since our particular problem stemmed from the team not having a shared understanding of the project when it began, using a collaborative method that involved the entire team from the start turned out to be a great approach.
