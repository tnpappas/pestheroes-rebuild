@echo off
echo Deploying Pest Heroes to Vercel...
echo.
echo This will push the latest code to GitHub and deploy to Vercel.
echo.
git push origin main
echo.
echo If Vercel is connected to the GitHub repo, it will auto-deploy.
echo Check https://vercel.com for the deployment status.
echo.
pause
