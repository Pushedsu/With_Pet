import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./screens/LoginPage";
import ImageInputPage from "./screens/ImagePage";
import SignUpPage from "./screens/SignupPage";
import PetDataPage from "./screens/PetDataPage";
import DiagnosisListPage from "./screens/DiagnosisListPage";
import OnboardingPage from "./screens/OnboardingPage";
import NoneMemberPage from "./screens/NoneMemberPage";
import DiagnosisResultPage from "./screens/DiagnosisResultPage";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import ProfilePage from "./screens/ProfilePage";
import AccountPage from "./screens/AccountPage";
import GuidePage from "./screens/GuidePage";

const Stack = createStackNavigator();

function App() {
  React.useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
      // 1초간 대기
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    };

    hideSplashScreen();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingPage"
          component={OnboardingPage}
          options={{ headerTitle: "서비스 선택" }}
        />
        <Stack.Screen
          name="DiagnosisResultPage"
          component={DiagnosisResultPage}
          options={{ headerTitle: "진단 결과 화면" }}
        />
        <Stack.Screen
          name="ImageInputPage"
          component={ImageInputPage}
          options={{ headerTitle: "진단 화면" }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ headerTitle: "프로필 화면" }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerTitle: "로그인 화면" }}
        />
        <Stack.Screen
          name="PetDataPage"
          component={PetDataPage}
          options={{ headerTitle: "정보 입력 화면" }}
        />
        <Stack.Screen
          name="SignupPage"
          component={SignUpPage}
          options={{ headerTitle: "회원가입 화면" }}
        />
        <Stack.Screen
          name="DiagnosisListPage"
          component={DiagnosisListPage}
          options={{ headerTitle: "진단 기록 화면" }}
        />
        <Stack.Screen
          name="NoneMemberPage"
          component={NoneMemberPage}
          options={{ headerTitle: "진단 화면" }}
        />
        <Stack.Screen
          name="AccountPage"
          component={AccountPage}
          options={{ headerTitle: "회원 탈퇴 화면" }}
        />
        <Stack.Screen
          name="GuidePage"
          component={GuidePage}
          options={{ headerTitle: "진단 가이드 화면" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
