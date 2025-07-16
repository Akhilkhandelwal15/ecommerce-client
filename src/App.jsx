import './App.css'
import { ForgotPassword } from './auth/pages/ForgotPassword'
import { Login } from './auth/pages/Login'
import { Signup } from './auth/pages/SIgnup'
import { Footer } from './shared/components/Footer'
import { Header } from './shared/components/Header'
import { NavHeader } from './shared/components/NavHeader'
import { CategorySection } from './user/components/CategorySection'
import { HeroBanner } from './user/components/HeroBanner'
import { ProductSection } from './user/components/ProductSection'
import { PromotionSection } from './user/components/PromotionSection'
import { Cart } from './user/pages/Cart'
import { Checkout } from './user/pages/Checkout'
import { ProductDetail } from './user/pages/ProductDetail'
import { ProductExplorer } from './user/pages/ProductExplorer'
import { WishList } from './user/pages/WishList'

function App() {

  return (
    <>
      <Login />
      <Signup />
      <ForgotPassword />
    </>
  )
}

export default App
