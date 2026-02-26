# Allure report – how to view

After the **Playwright Tests + Allure Report** workflow runs:

## 1. Download and open locally

1. Open the run in the **Actions** tab.
2. In the **Artifacts** section at the bottom, download **allure-report**.
3. Unzip the file and open **`index.html`** in a browser to view the Allure report.

## 2. View on GitHub Pages (optional)

To have the latest report available at a URL (e.g. `https://<username>.github.io/<repo>/`):

1. In the repo go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` or `master` (or trigger the workflow manually). After the run, the report will be published and the URL will be shown in the **deploy-pages** job summary.

Manual trigger: **Actions** → **Playwright Tests + Allure Report** → **Run workflow**.
