---
title: Automating GitHub projects
description: How you can automate your GitHub project and save a lot of time
date: 2023-12-28T23:14:21.133Z
tags:
  - articles
draft: true
---
# How to fully automate projects and make them go autopilot

## Introduction
To automate GitHub projects, we can use many different tools, the ones I will discuss are all completely free (at the time of writing this) and fairly easy to set up.
I won't cover exact setup instructions, as these vary a lot from project to project.
Here are the tools I will cover:
- Automatic tests and builds with GitHub Actions
- Keep it up to date with Renovate Bot
- Watch out for issues with CodeQL
- Fix vulnerabilities with Dependabot
- Check your code coverage with Codecov
- Keep translations up to date with Crowdin
- Benchmark your project with Bencher

## Automatic Tests and Builds
### GitHub Actions
GitHub provides a very powerful tool that allows users to completely automate builds and tests. There is one for almost each programming language. All you have to do is create a YAML file and fill out instructions, similar to a Makefile. The selected operating system will then perform these actions in the background, and it can even upload the results to GitHub. For example, you can set it up to cross-compile your application for other operating systems such as macOS and Windows.
Another cool feature of GitHub Actions is that it can also execute applications. This means you can build your code and then execute it, or its tests to see if everything is still working correctly.
You can read more about this concept here: https://docs.github.com/en/actions

### Check test coverage
You can combine the above GitHub Action tests with Codecov. Codecov is a tool that keeps track of test coverage in your code. In simple terms, it tells you how much of your code is being covered by the tests you executed. This can be handy if you want to be sure you are testing all possible scenarios. 
GitHub has an online marketplace where you can find various GitHub Actions, one of them is Codecov and you can use it in combination with running tests on your project. It basically implies signing up on their website, which then gives you access to a dashboard. The dashboard then accurately displays the code coverage, it also allows you to include a badge on your project's README.md
You can read more about it here: https://docs.codecov.com/docs

## Automatic Dependency Management
Dependency management is one of the most tricky tasks to do on any project, really. You either never update and hope you don't encounter any security vulnerability, or you live on the edge and risk having a lot of bugs and missing features. To solve this issue, you might have heard of GitHub Dependabot. It basically manages the dependencies for you, notifying you every time there is a new update available, then creating a new branch with that dependency updated and opening a pull request.
This method works fairly well, as it allows you to run tests on the pull requests and check if the project still works with the new dependency. If it doesn't, you can fix the issue and Dependabot will automatically update the pull request.
I prefer Renovate over Dependabot simply because it gives me more control and shows you how probable your project might fail by adding a specific dependency. This is especially useful if you don't have test cases yet.
Renovate is very simple to set up, it's as simple as adding a JSON file. It furthermore also allows you to add Automerge, which means it will automatically merge pull requests if specific criteria are met. This ensures your project stays up to date even when you are on vacation, without the risk of breaking it.
You can learn more about Renovate here: https://docs.renovatebot.com/

## Automatic Anomaly Detection
- Dependabot + CodeQL

## Automatic Translations Fetching
- Crowdin

## Automatic Benchmarks
- Bencher



