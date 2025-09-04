# ProductionReadyCI-CD

This repository demonstrates a real-world CI/CD pipeline with Playwright UI tests and multi-environment GitHub Pages deployments.

## Branching & Environments Explained

In this repository, you manage two environments using two branches:

- **main**: For production-ready code. Deploys the `production-site` folder to the `gh-pages` branch (served as your production site).
- **qa**: For code that needs QA testing. Deploys the `qa-site` folder to the `gh-pages-qa` branch (served as your QA site).

> **Note:** The `main` branch exists by default. You must create the `qa` branch yourself (e.g., `git checkout -b qa && git push origin qa`).

### How it Works (Diagram)

```mermaid
flowchart TD
  A[main branch] --Deploys production-site/--> B[gh-pages branch (Production Site)]
  C[qa branch] --Deploys qa-site/--> D[gh-pages-qa branch (QA Site)]
  E[Developer creates feature branch] --> A
  E --> C
  F[Pull Request / QA Review] --> C
  C --After QA approval--> A
```

**Explanation:**

- Developers create feature branches from `main` or `qa`.
- When ready for QA, code is merged into `qa` and deployed to the QA environment.
- QA tests the changes on the QA site. If approved, the code is merged into `main` for production deployment.

## Structure

- `production-site/` — Production version of the static site (deployed from `main` branch to `gh-pages`)
- `qa-site/` — QA version of the static site (deployed from `qa` branch to `gh-pages-qa`)
- `tests/ui/` — Playwright UI tests for the site
- `tests/PageObjects/` — Page Object Model files for Playwright

## Playwright Setup

- Playwright config: `playwright.config.ts`
- Run tests locally:
  ```
  npm install
  npx playwright test
  ```

## CI/CD Pipeline

- GitHub Actions workflow: `.github/workflows/ci-cd.yml`
- On push/PR to `main` or `qa`:
  - Installs dependencies
  - Runs Playwright tests
  - Uploads Playwright HTML report as an artifact
- On `main` branch: Deploys `production-site` to `gh-pages`
- On `qa` branch: Deploys `qa-site` to `gh-pages-qa`

## Notes

- To view Playwright HTML reports locally, run:
  ```
  npx playwright show-report
  ```

---
