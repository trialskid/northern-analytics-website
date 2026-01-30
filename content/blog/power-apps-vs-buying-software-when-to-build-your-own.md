---
title: "Power Apps vs. buying software: when to build your own"
description: "Off-the-shelf software isn't always the answer. Neither is building custom. Here's a practical framework for deciding when Power Apps makes more sense than buying."
date: "2024-12-03"
tags: ["power-apps", "custom-apps", "decision-making"]
---

At least once a month, someone asks me this: "Should we buy software for this or build something in Power Apps?" And my honest answer is always the same. It depends. But it depends on specific things you can actually evaluate, not just gut feeling.

Here's how I think about it.

## Buy when the problem is generic

If your need is something thousands of other companies also have, there's probably a mature product that handles it well. Project management, CRM, help desk ticketing, time tracking. These are solved problems with polished tools behind them.

Buying makes sense when the workflow is standard, the vendor has a track record, and you don't need heavy customization. You're paying for years of someone else's development, and that's usually a good deal.

The red flag is when you start customizing a purchased tool so heavily that it barely resembles the original product. I've watched companies spend $200,000 customizing a $30,000 platform and end up with something fragile that nobody wants to maintain.

## Build when the problem is yours

Some processes are unique to your business. The way you handle quality inspections, the approval chain for a specific type of request, the intake form that needs to talk to three internal systems. No vendor built software for that exact workflow because it's yours.

Power Apps shines here. You're not building a product. You're building a tool that does one thing well for your specific team. It connects natively to your Microsoft 365 environment, it talks to [SharePoint](/blog/sharepoint-isnt-just-a-file-dump-heres-what-youre-missing) and Dataverse without middleware, and your users are already signed in.

A typical custom Power App takes 2 to 6 weeks to build and costs a fraction of what you'd pay for a commercial license over three years. More importantly, you own it. You can change it whenever your process changes without submitting a feature request and waiting 18 months.

## The hybrid approach nobody talks about

Most real situations aren't purely build or buy. The best setups I've seen use commercial software for the core function and Power Apps to fill the gaps around it.

For example, one client uses a commercial ERP system for inventory management. Great tool, does 80 percent of what they need. But their quality control process is unique, and the ERP doesn't handle it well. Instead of paying for a custom module from the vendor, I built a Power App that handles quality inspections and writes the results back to the ERP through an API.

Total cost for the Power App was about $15,000. The vendor quoted $90,000 for a custom module with a 4-month timeline. The Power App was live in three weeks.

## Questions to ask before deciding

Before you commit either direction, work through these:

- How unique is this process? If it's standard, buy. If it's specific to you, build.
- How many users need it? Power Apps licensing costs scale with users. For 500 people, commercial software might be cheaper per seat.
- How often does the process change? If it evolves frequently, owning the app means you can adapt fast. Vendor software locks you into their release cycle.
- What systems does it need to talk to? Power Apps integrates natively with Microsoft 365. If your stack is mostly Microsoft, that's a real advantage. If you're in a Google or AWS environment, the math changes.
- Do you have someone to maintain it? Power Apps are low-code, not no-maintenance. Someone needs to own updates and fixes. That can be internal or a [consultant like me](/services).

## So which one?

There's no universal right answer. But there is a right answer for your situation, and it comes down to how unique your needs are, what your stack looks like, and what the total cost of ownership is over three to five years.

I help companies work through this regularly. If you're stuck between building and buying, [a 30-minute conversation](/contact) usually gets you unstuck.
