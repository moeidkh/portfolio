import { Provider } from 'react-redux';
import store from "./Redux/store";

import Main from './assets/components/Main';
import VideoComp from './assets/components/VideoComp';

function App() {

  return (
    <Provider store={store}>
      <section className="min-h-screen max-h-[750px] flex-col scroll-smooth text-white flex items-center bg-[#00000090]">
        {/* <video src={bg} autoPlay muted loop className="min-w-full min-h-full fixed z-[-5]"></video> */}
        <VideoComp />
        <main className='max-w-[1990px] max-h-[750px]'>
          <Main />
        </main>
      </section>
   </Provider>
  )
}

export default App
