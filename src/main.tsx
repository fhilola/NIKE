import ReactDOM from 'react-dom/client'
import { Suspense, lazy } from 'react'
const App = lazy(()=>import('./App.tsx'))
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>,
)
