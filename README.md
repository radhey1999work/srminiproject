# srminiproject

### Demo

https://user-images.githubusercontent.com/56775136/133828666-0a40e0b1-c692-4300-aa77-e49883cb91a0.MP4

Description:
From the home screen you could go to 2 different screens. Top button goes to camera screen, which scans barcodes. Once a barcode is detected, the result screen displays. Bottom button goes to the screen where you could manually type in the barcode. Once you submit the form, the result screen displays.


### Mella's Logs
9/6 Monday
- First meeting with partner Radhey
- Discuss experiences, choose choice of tech (Flutter)
- Radhey created the project repo

9/8 Wednesday
- Radhey and I met in the afternoon at Ingalls
- We decided what the MVP should be:
  - Screen with camera that scans barcode
  - Screen for manually typing in barcode
  - Result screen for number of calories
- Looked into FDA api

9/9 Thursday
- Radhey and I met at PHO 113 in the afternoon
- We decided to switch to React Native Expo
- Radhey looked into FDA example api and figured out where to look for calorie count in the json
- I started working on the React Native Expo project but didn’t commit any code

9/10 Friday
- I worked on creating a functional UI:
  - Menu screen with 2 buttons. It takes you to the screen with the barcode-scanning camera or the screen for entering barcode.
  - Screen with camera that scans barcode. Once barcode is scanned, the app switches to the results screen
  - Results screen with default text
  - Screen for typing in barcode. Once the form is submitted (by pressing the button), the app switches to the results screen
- I forgot to set my github username so my commits show as being pushed by “MyMac”

9/14 Tuesday
- I fixed a bug that caused expo to not start the app

9/15 Wednesday
- I stylized the existing screens:
  - Menu screen, barcode-scanning camera screen, barcode-entering screen, results screen
  - Stylized the text, input field, buttons, and the color theme
- I created a dummy backend for getting calories after scanning or inputting the barcode. The data gets sent to the results screen.

