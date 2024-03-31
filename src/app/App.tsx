import { AppRoot, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MarketPanel from '../components/Market';
import './App.scss';

function App() {
  return (
    <AppRoot>
      <View activePanel="cart-panel">
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>1</div>
          <div style={{justifySelf: 'flex-start'}}>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <MarketPanel id="cart-panel" />
      </View>
    </AppRoot>
  );
}

export default App;
