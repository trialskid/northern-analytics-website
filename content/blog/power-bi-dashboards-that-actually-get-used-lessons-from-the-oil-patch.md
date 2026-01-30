---
title: "Power BI Dashboards That Actually Get Used: Lessons from the Oil Patch"
description: "Most dashboards collect dust. Here's what separates the ones that field crews, supervisors, and execs open every single day from the ones nobody touches."
date: "2026-01-29"
tags: ["power-bi", "oil-and-gas", "dashboards", "dashboard-adoption"]
---

Here's a number that should make you uncomfortable: according to Gartner, fewer than 30% of BI dashboards see regular use after the first 90 days. That means most of the money spent on analytics tooling is basically lighting cash on fire. Slowly. In a spreadsheet.

If you've worked in Oil & Gas in Alberta long enough, you've probably seen this play out firsthand. Someone in head office gets excited about Power BI, a consulting firm builds a fancy dashboard with 47 visuals on it, there's a big rollout meeting, and then... nothing. Three months later, the ops manager is still texting his lead hand for yesterday's production numbers.

I've spent years building Power Platform solutions for companies in Fort McMurray and across northern Alberta. The dashboards that fail tend to fail for the same handful of reasons, and the ones that stick share a few traits that have nothing to do with fancy visuals.

## The four ways dashboards die

### Nobody asked for it

This is the most common killer, and it's the most preventable. A well-meaning IT department or analytics team builds a dashboard based on what they think people need. They spend weeks perfecting the data model, choosing the right color palette, adding drill-through pages. Then they hand it to a plant supervisor who looks at it for ten seconds and says, "Cool. Where's my daily pump runtime?"

The dashboard has everything except the one number that person actually cares about.

In Oil & Gas operations, the gap between "what looks impressive in a boardroom" and "what a field supervisor checks at 5:30 AM before toolbox talk" is enormous. If you don't close that gap before you start building, you're wasting everyone's time.

### It's too complicated

I once saw a dashboard with 14 slicers on a single page. Fourteen. The person who built it was clearly talented. They'd thought of every possible way someone might want to filter the data. The problem? Nobody could figure out what they were looking at without a 20-minute training session.

Field crews don't have 20 minutes. They barely have 20 seconds. If your dashboard requires explanation, it's already failed.

The best Power BI dashboards in oil and gas operations look almost boring. One or two big metrics up top. A trend line. Maybe a table with yesterday's numbers. That's it. The complexity lives in the data model, not on the screen.

### No mobile access

This one baffles me every time I see it, and I see it constantly. You build a dashboard for people who spend their entire day on well pads, at tank batteries, or driving between sites. Then you design it exclusively for a 27-inch desktop monitor.

In Fort McMurray, your end users are wearing steel-toed boots and looking at their phones between tasks. If your Power BI report doesn't work on a phone screen, it doesn't work. Period. The Power BI mobile app is genuinely good, but you have to actually design for it. That means a dedicated mobile layout, large touch targets, and no tiny tables with 15 columns.

### The data is stale

Nothing kills trust faster than stale data. If a production supervisor opens your dashboard on Tuesday morning and sees numbers from last Thursday, they're going back to their Excel file. You've lost them, probably for good.

In oil and gas, this is especially critical. Production volumes, safety incidents, equipment alarms, this stuff changes by the hour. A dashboard that refreshes once a week is basically a PDF with extra steps.

Getting refresh schedules right means understanding the operational rhythm. Some data (like daily production) needs to land by 6 AM. Other data (like monthly financials) can refresh weekly and nobody cares. The trick is knowing which is which for your specific users.

## What the good ones have in common

Enough about failure. Here's what works. The dashboards I've seen get real, sustained adoption in Alberta's oil patch share a few things.

### They answer one question per page

The best-performing dashboards I've built follow a dead simple rule: each page answers one question. Not five questions. Not "here's everything about operations." One question.

"How much did we produce yesterday?" That's a page.

"Which wells are underperforming this week?" That's a different page.

"Are we on track for our monthly safety targets?" Another page.

When a supervisor opens the report, they tap the page that matches what's in their head right now. They get their answer in under five seconds. They close it and get back to work. That's a win.

### They're built with the end user in the room

I cannot overstate this. The single biggest predictor of dashboard adoption is whether the people who'll actually use it were involved in designing it. Not just consulted. Not just sent a survey. Actually in the room, pointing at mockups, saying "no, I need it sorted this way" and "can you make that number bigger?"

For a Power BI project targeting field operations, that means sitting down with the lead hand, the area supervisor, and the operations manager separately. They all look at different data at different frequencies. The lead hand wants to know if all their crews showed up today. The supervisor wants to see which sites had downtime. The ops manager wants the week-over-week trend.

Same dataset, completely different views. Build them all, or you'll only satisfy one group (and it's usually the group that was already closest to the data anyway).

### They load fast

This sounds obvious, but it's worth saying because I've seen so many Power BI reports that take 15 to 20 seconds to load. In the time it takes for all those visuals to render, your user has already opened a text thread to ask someone for the number directly.

Performance in Power BI comes down to data modeling decisions you make early in the project. Star schemas, proper aggregations, limiting the date range on import, avoiding unnecessary calculated columns. It's not glamorous work, but it's the difference between a report that feels snappy and one that feels like waiting for a satellite phone to connect (those of you who've worked remote sites in northern Alberta know exactly what I mean).

### They have a champion

Every dashboard that survives past the first quarter has at least one person who actively pushes others to use it. Usually it's a supervisor or manager who found genuine value in it and starts saying things like "pull up the dashboard" in morning meetings instead of "send me the spreadsheet."

This doesn't happen by accident. You need to identify that person early, make sure the dashboard solves their specific pain point first, and give them a reason to show it off. When the area manager starts sharing screenshots from the Power BI mobile app in the group chat, you've won.

*Want help building dashboards your team will actually use? [Let's talk about it](/contact).*

### They connect to what people already use

One of the most underrated parts of the Power Platform in Fort McMurray operations is how well it fits with tools people already have open. Teams, SharePoint, Outlook. If your dashboard lives inside a Teams channel that the crew already checks daily, it gets eyeballs. If it's buried three clicks deep in a Power BI workspace that nobody bookmarked, it doesn't.

I've seen adoption jump dramatically just by pinning a Power BI tab in a team's morning standup channel. No training needed. No change management presentation. Just putting the data where people already are.

## Real patterns from the field

Let me get specific about what works in Oil & Gas, because the details matter.

**Safety dashboards** are the easiest win. Everyone from the field worker to the VP cares about safety metrics. A single page showing days since last recordable incident, open action items from inspections, and near-miss trends by site type will get opened every morning. Make it the first thing that loads when someone opens the Teams app, and you've created a habit.

**Production dashboards** need to be timely above all else. If your SCADA data feeds into Power BI with a refresh at 5 AM, the morning production meeting at 7 AM has fresh numbers. That's the sort of thing that makes a dashboard indispensable. One client told me their morning meetings got 15 minutes shorter after they stopped reading production numbers off paper and just threw the dashboard on the screen. Fifteen minutes times five people times 365 days. That's real time back.

**Equipment uptime tracking** is where Power BI starts paying for itself in obvious, dollar-figure terms. When you can see that a specific pump has gone down four times in the past month, or that a compressor at one site has 30% more downtime than the same model at another site, you're not just reporting anymore. You're preventing the next failure. Maintenance teams love this stuff once they trust the data.

**Crew scheduling visibility** is a sneaky one. It doesn't sound exciting, but in a fly-in/fly-out operation, knowing who's on rotation, who's coming off days, and where the gaps are next week is genuinely useful. A simple Power BI page connected to a [SharePoint list](/blog/sharepoint-isnt-just-a-file-dump-heres-what-youre-missing) (or even a well-structured [Excel file](/blog/why-your-excel-reports-are-costing-you-more-than-you-think) on OneDrive) can replace a whiteboard that only exists in one office trailer.

## The uncomfortable truth about dashboard adoption

Here's the part nobody wants to hear: building the dashboard is maybe 40% of the work. The other 60% is everything that happens after. Training people one-on-one (not in a big group session where nobody asks questions). Following up two weeks later to see if they're actually using it. Tweaking the layout based on feedback. Fixing the one data quality issue that made someone lose trust in the whole thing.

Dashboard adoption in oil and gas isn't a technology problem. It's a people problem that technology can help with, but only if you approach it that way.

The companies in Alberta that get the most value from Power BI aren't the ones with the fanciest reports. They're the ones where someone took the time to understand what each user actually needs, built something simple that delivers it, and then stuck around long enough to make sure it stuck.

## Where to start

If you're sitting on a pile of dashboards that nobody opens, don't scrap them all and start over. Pick one. Find the person who should be using it the most. Sit with them for 30 minutes. Ask them what they actually look at every morning and what questions they're trying to answer. Then rebuild that one dashboard around their answers.

Get it on their phone. Make sure the data is fresh. Keep it simple enough that they never have to think about how to read it.

Do that well, and something interesting happens. They start showing other people. Those people want their own version. Suddenly you have pull instead of push, and that's when Power BI stops being a reporting tool and starts being part of how your operation actually runs.

That's the goal. Not a pretty dashboard. A useful one. If you want help building dashboards your team will actually use, [let's talk](/contact).
