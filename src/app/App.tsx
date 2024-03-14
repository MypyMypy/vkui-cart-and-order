import { AppRoot, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MarketPanel from '../components/Market';
import './App.scss';

function App() {
  return (
    <AppRoot>
      <View activePanel="cart-panel">
        <MarketPanel id="cart-panel" />
      </View>
    </AppRoot>
  );
}

export default App;
