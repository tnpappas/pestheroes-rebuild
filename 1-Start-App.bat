@echo off
echo Opening Pest Heroes website for preview...
echo.
echo The site is running locally. Open this URL in your browser:
echo   http://localhost:8899
echo.
echo Press Ctrl+C to stop the server when done.
echo.
python -m http.server 8899
pause
