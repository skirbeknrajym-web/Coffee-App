import Navigation from "./src/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import store from "./src/redux";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}
