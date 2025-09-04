# CI/CD Pipeline: Detailed Internal Guide

## What is CI/CD?

**CI/CD** stands for Continuous Integration and Continuous Deployment/Delivery. It is a set of practices and tools that automate the process of integrating code changes, running tests, and deploying applications. The goal is to deliver software faster, with higher quality, and less manual intervention.

---

## Real-World CI/CD Workflow (with QA Focus)

1. **Branching**

   - A developer creates a new branch from the `main` (production) branch. This branch might be for a new feature, bug fix, or improvement.

2. **Development**

   - The developer makes code changes on their branch. These changes are committed and pushed to a remote repository (e.g., GitHub).

3. **Pull Request (PR) / Merge Request (MR)**

   - The developer opens a PR/MR to merge their branch into `main` (or a staging/QA branch).
   - The code is reviewed by peers for quality, style, and correctness.

4. **Automated CI Pipeline**

   - When the PR is opened or updated, the CI pipeline runs automatically:
     - Checks out the code
     - Installs dependencies
     - Runs automated tests (unit, integration, UI)
     - Builds the application (if needed)
     - Generates test reports and artifacts
   - If any step fails, the PR cannot be merged until fixed.

5. **QA Review**

   - As a QA, you check out the feature branch locally or use a deployed QA environment.
   - You run additional manual or exploratory tests, or review the automated test results.
   - If the branch passes all checks, you approve the PR for merging.

6. **Release Preparation**

   - Once approved, the branch is marked for the next release (sometimes merged into a `release` branch or directly into `main`).
   - Final tests may be run on a staging environment.

7. **Deployment (CD)**
   - The CD pipeline deploys the code to production (or other environments) automatically after merging.
   - In this repo, deployment is handled by GitHub Actions, which pushes the static site to GitHub Pages.

---

## How the Pipeline Works in This Repo

- **Branches:**

  - `main`: Production branch. Deploys to `production-site` and GitHub Pages (`gh-pages` branch).
  - `qa`: QA branch. Deploys to `qa-site` and GitHub Pages (`gh-pages-qa` branch).

- **GitHub Actions Workflow:**

  - Triggers on push or PR to `main` or `qa`.
  - Steps:
    1. Checkout code
    2. Set up Node.js
    3. Install dependencies (`npm ci`)
    4. Run Playwright UI tests
    5. Upload Playwright HTML report as an artifact
    6. Deploy the site to the appropriate GitHub Pages branch

- **QA Role:**

  - Review PRs, check test results, and run manual tests on the QA environment (`gh-pages-qa`).
  - Approve or request changes before code is merged to `main`.

- **Production Release:**
  - After QA approval, code is merged to `main` and automatically deployed to the production site.

---

## Why is This Important?

- **Automation** reduces manual errors and saves time.
- **Early feedback** from automated tests catches bugs before they reach production.
- **QA environments** allow safe testing of new features before release.
- **Traceability**: Every change is tracked, reviewed, and tested before going live.

---

## Summary

This pipeline ensures that every code change is:

- Reviewed
- Tested (automatically and manually)
- Deployed to QA for validation
- Only released to production after QA approval

This is the industry standard for modern software delivery and is a key skill for QA professionals.
