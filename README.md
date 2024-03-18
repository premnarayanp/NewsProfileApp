NewsProfileApp for BharatNews|just Demo AssignMent   
GitHub Frontend:-https://github.com/premnarayanp/NewsProfileApp.git    
GitHub Backend:-https://github.com/premnarayanp/News-API.git  

Step & Points:-  
1- Refrence Link  
2- Project setUp   
3- Module installation   
4- Modules and Library/dependencies  
5- Functionality  
6- Screenshort   
7- Projects Structure   
8- Approach/Methodology  
9- Backend  




1:- Refrence Link:-   
1- React Nativ navigation Doc:- https://reactnavigation.org/docs/tab-based-navigation  
1- React Nativ  NativBase Components Doc:- https://docs.nativebase.io/?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_3  

 
2:- Project setUp  
1-create folder NewsProfileApp  
2- npm install -g expo-cli  
3- expo init NewsProfileApp  
OR  
npx create-expo-app NewsProfileApp    
4- cd NewsProfileApp   
5- npm run android   
OR npx expo start  
OR npm start

3:- Module installation:-  
1-npm install native-base react-native-svg@12.1.1  
2-npm install @react-navigation/native  
3-npm install @react-navigation/native-stack  
4-npm install @react-navigation/drawer  
5-npm install @react-navigation/bottom-tabs   
6-npm install @react-navigation/material-top-tabs react-native-tab-view  
7-npm i redux  
8-npm i react-redux  
9-npm install @reduxjs/toolkit    
10-npm i @react-native-async-storage/async-storage  
11-npm i jwt-decode

4:- Modules and Library/dependencies    
 "dependencies": {   
    "@react-native-async-storage/async-storage": "^1.22.3",  
    "@react-navigation/bottom-tabs": "^6.5.12",   
    "@react-navigation/drawer": "^6.6.7",   
    "@react-navigation/material-top-tabs": "^6.6.6",   
    "@react-navigation/native": "^6.1.10",   
    "@react-navigation/native-stack": "^6.9.18",   
    "@reduxjs/toolkit": "^2.2.1",   
    "expo": "~50.0.6",   
    "expo-status-bar": "~1.11.1",   
    "jwt-decode": "^4.0.0",   
    "native-base": "^3.4.28",   
    "react": "18.2.0",   
    "react-native": "0.73.4",   
    "react-native-gesture-handler": "^2.14.0",   
    "react-native-pager-view": "6.2.3",   
    "react-native-reanimated": "^3.6.2",   
    "react-native-safe-area-context": "4.8.2",   
    "react-native-screens": "~3.29.0",    
    "react-native-snap-carousel": "^3.9.1",   
    "react-native-svg": "^12.1.1",   
    "react-native-tab-view": "^3.5.2",   
    "react-redux": "^9.1.0",   
    "redux": "^5.0.1"   
  },   
  "devDependencies": {   
    "@babel/core": "^7.20.0"   
  },   

5:- Functionality  
0:- Used React Redux, Redux Toolkit and create action,reducer and store.  
1:- Login, SignUp and LogOut that used JWT Token for access and also used asynk Storage to store the Tokens.
1:- Show Top Navigator and Left DrawarNavigator and its menu.     
2:- Creat bottom Tab Bar and menu inside like Home,Notification, Profile etc.   
3:- Create Carrousel Card to Show TopHeadLineNews section inside Home page and data fetch from API     
4:- Render All News inside Hompage .     
5:- Create TopTab Navigator for Profile that open when click profil that have Top Tab like  NewsPost, Bookmark, Like, Recommended.All Tab used dummy data and rendered.  
6:- Inside Homepage TopHeadLineNews and All  section data fech Using News API using Custome fetch.  
    and API made in Node/Express that used News NewspAI.
    


6:- Screenshort   
0- DrawarNavigator  
![Screenshot_20240318_124207](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/5072642a-0445-45bd-b67f-d16ce914c506)  

1- Home page 1  
![Screenshot_20240318_124113](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/ef32c711-5fb4-4646-b60f-45307c3a6336)   

2.1- Home page 2 When User Click on More.. or Showless to view article    
![Screenshot_20240318_124133](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/735a3e9f-b1a2-454b-8adf-a232fe2fa470)   

2.2-  
![Screenshot_20240318_124149](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/d4af7d2d-0f11-4e07-8f3d-4683d7410335)   

2.3-    
![Screenshot_20240318_124201](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/ac45f2cb-9cb0-409e-9a96-9fd21e6f709b)   


3- Profile  
![image](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/591bd15e-4557-4f21-8fdd-d497a37971d6)   

4- ArticlePost Top Tab1  
![image](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/c77b2543-d95b-4937-bb35-439a862944b5)  

5- RecommandedChannel Top Tab2  
![image](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/c8c492c7-8896-43a8-984d-b1b86ef3e5fe)  

6- Bookmark Top Tab3  
![image](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/615f3a30-a162-4fe8-ac15-84f4bd58da57)   

7- LikedPost Top Tab4   
![image](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/e04d8e0c-50ab-4666-94bc-60b0f38ff20a)     


7- Projects Structure: -   
1:-main    
![Screenshot 2024-03-18 151652](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/5a245d12-ff1b-4ad8-8b64-a00b83fce217)  
  
2:-package.json   
![Screenshot 2024-03-18 152016](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/112552b6-553d-403d-be53-1cf430d18dc0)   

3:- App.js   
![Screenshot 2024-03-18 152138](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/b108d976-ce91-42ea-84a1-b5f9c86743b2)  

4:-bable.js   
![Screenshot 2024-03-18 152253](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/77cd943e-bd96-4612-b897-e48c11e855b7)   

5:-screens   
![Screenshot 2024-03-18 152514](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/dafca6cf-5b08-4505-b6e7-90bcccf3ca58)   

6:-Components and navigation    
![Screenshot 2024-03-18 152807](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/95f43875-ab9b-41b0-92ec-d53bb05a19d0)  
  
7:- Redux   
![Screenshot 2024-03-18 152954](https://github.com/premnarayanp/NewsProfileApp/assets/124772915/2c7f8e37-1d1d-4c49-989b-a2ea2bdf324e)  

