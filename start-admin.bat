@echo off
echo Starting Tryzen IQ Admin Panel...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd server && npm start"

echo Waiting for server to start...
timeout /t 3 /nobreak > nul

echo Starting Admin Panel...
start "Admin Panel" cmd /k "cd t-admin && npm run dev"

echo.
echo Both services are starting...
echo Backend Server: http://localhost:5000
echo Admin Panel: http://localhost:5173
echo.
echo Admin Credentials:
echo Username: tilakviradiya, Password: aA@til123
echo Username: keyurmoradiya, Password: aA@keyur123
echo Username: amitlakhani, Password: aA@amit123
echo.
pause 