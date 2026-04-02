---
title: "Nutanix Storage Calculator"
date: 2026-04-02T16:46:48-05:00
draft: true
description: ""
tags: []
cover:
  image: ""
  alt: ""
  relative: true
---

## Problem Statement
If you've ever planned a Nutanix deployment, or studied for a Nutanix cert, you're probalby familiar [Nutanix Sizer](sizer.nutanix.com). Sizer is an important piece of the Nutanix ecosystem. It is the most detailed, accurate and precise way to plan your next Nutanix deployment. That said, some situations don't call for details, accuracy or precision. Sometimes you need a spreadsheet and other times you just need a napkin. Sizer has a tool called Storage Capacity Calculator which almost fits the bill, but doesn't quite do everything I want it to.

## The Spreadsheet

Ironic give my use of a spreadsheet/napkin analogy in the first paragraph: but my first solution to speed up sizing estimates was to create a "Quick Sizer" spreadsheet. This worked great for me, but didn't scale for the rest of the team. 

## Nutanix Storage Calculator  

One of my goals this year, in response to AI drastically lowering the bar, is to solve more pain points with software. As such, I converted my spreadsheet into a simple web app that allows you to quickly run through various Nutanix storage sizing scenarios and see the exact level of detail that *I* wanted.

This calculator is based on *my* understanding of Nutanix HCI and while it has a lot of details built-in, it may not be perfect. Always double check any scenario in the full Sizer before ordering!

Check it out: [Nutanix Storage Calculator](https://expedient.github.io/nutanix-storage-calculator/)

Please give it a try and let me know what you think!