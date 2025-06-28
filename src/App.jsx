import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./Pages/ScrollToTop";
import Home from "./components/Home";
import About from "./pages/About";
import ContactSection from "./Pages/ContactSection";
import Products from "./pages/Products";
import Careers from "./Pages/Careers";

// Chilled
import Chilled from "./chilled/Chilled";
import Onion from "./chilled/Onion";
import Potato from "./chilled/Potato";
import Tomato from "./chilled/Tomato";
import Garlic from "./chilled/Garlic";
import RoseOnion from "./chilled/RoseOnion";
import ShallotOnion from "./chilled/ShallotOnion";

// Dehydrated, Freeze Dried, Beans
import DehydratedProduct from "./DehydratedProduct/DehydratedProduct";
import FreezeDriedProductIQF from "./FreezeDriedProduct-IQF/FreezeDriedProductIQF";
import Beans from "./BeansPulses&Grains/Beans";

// Spices
import Spices from "./Spices/Spices";
import Cumin from "./Spices/Cumin";
import RedChilli from "./Spices/RedChilli";
import Turmeric from "./Spices/Turmeric";
import Pepper from "./Spices/Pepper";
import Cassia from "./Spices/Cassia";
import GroundedSpices from "./Spices/GroundedSpices";

// Dry Fruits
import Almond from "./DryFruits/Almond";
import Cashew from "./DryFruits/Cashew";
import Raisin from "./DryFruits/Raisin";
import DryFruits from "./DryFruits/DryFruits";

// Millets & Super Foods
import MilletsAndSuperFoods from "./Millets&SuperFoods/MilletsAndSuperFoods";
import ChiaSeed from "./Millets&SuperFoods/ChiaSeed";
import Proso from "./Millets&SuperFoods/Proso";
import OtherMillets from "./Millets&SuperFoods/OtherMillets";
import Foxtail from "./Millets&SuperFoods/Foxtail";
import Kutki from "./Millets&SuperFoods/Kutki";
import Kodo from "./Millets&SuperFoods/Kodo";

// Oils
import RapeseedOil from "./Oils/RapeseedOil";
import SoybeanOil from "./Oils/SoybeanOil";
import MustardOil from "./Oils/MustardOil";
import Oils from "./Oils/Oils";

// Fresh & Feed
import FreshFruitsVegetables from "./FreshFruits&Vegetables/FreshFruitsVegetables";
import Feed from "./Feed/Feed"; // ✅ FIXED: Correct Feed import
import OtherAdditives from "./Feed/OtherAdditives";
import OilCake from "./Feed/OilCake";
import FMA from "./Feed/FMA";
import Meals from "./Feed/Meals";

// Coffee & Tea
import Coffee from "./coffee/Coffee";
import GreenTea from "./coffee/GreenTea";
import BlackTea from "./coffee/BlackTea";
import RobustaCoffee from "./coffee/RobustaCoffee";
import ArabicaCoffee from "./coffee/ArabicaCoffee";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />

        {/* Chilled */}
        <Route path="/chilled" element={<Chilled />} />
        <Route path="/chilled/potato" element={<Potato />} />
        <Route path="/chilled/onion" element={<Onion />} />
        <Route path="/chilled/tomato" element={<Tomato />} />
        <Route path="/chilled/garlic" element={<Garlic />} />
        <Route path="/chilled/rose-onion" element={<RoseOnion />} />
        <Route path="/chilled/shallot-onion" element={<ShallotOnion />} />

        {/* Dehydrated */}
        <Route path="/dehydrated" element={<DehydratedProduct />} />
        <Route path="/dehydrated/:slug" element={<DehydratedProduct />} />

        {/* Freeze Dried */}
        <Route path="/iqf" element={<FreezeDriedProductIQF />} />
        <Route path="/iqf/:slug" element={<FreezeDriedProductIQF />} />

        {/* Pulses & Grains */}
        <Route path="/pulses-grains" element={<Beans />} />
        <Route path="/pulses-grains/:slug" element={<Beans />} />

        {/* Spices */}
        <Route path="/spices" element={<Spices />} />
        <Route path="/spices/cumin" element={<Cumin />} />
        <Route path="/spices/red-chilli" element={<RedChilli />} />
        <Route path="/spices/turmeric" element={<Turmeric />} />
        <Route path="/spices/pepper" element={<Pepper />} />
        <Route path="/spices/cassia" element={<Cassia />} />
        <Route path="/spices/grounded" element={<GroundedSpices />} />

        {/* Dry Fruits */}
        <Route path="/dry-fruits/almond" element={<Almond />} />
        <Route path="/dry-fruits/cashew" element={<Cashew />} />
        <Route path="/dry-fruits/raisin" element={<Raisin />} />
        <Route path="/dry-fruits" element={<DryFruits />} />

        {/* Oils */}
        <Route path="/oils" element={<Oils />} />
        <Route path="/oils/rapeseed-oil" element={<RapeseedOil />} />
        <Route path="/oils/soybean-oil" element={<SoybeanOil />} />
        <Route path="/oils/mustard-oil" element={<MustardOil />} />

        {/* Millets & Super Foods */}
        <Route path="/millets-superfoods" element={<MilletsAndSuperFoods />} />
        <Route path="/millets-superfoods/proso" element={<Proso />} />
        <Route path="/millets-superfoods/other-millets" element={<OtherMillets />} />
        <Route path="/millets-superfoods/foxtail" element={<Foxtail />} />
        <Route path="/millets-superfoods/kutki" element={<Kutki />} />
        <Route path="/millets-superfoods/kodo" element={<Kodo />} />
        <Route path="/millets-superfoods/chia-seed" element={<ChiaSeed />} />

        {/* Fresh Fruits & Vegetables */}
        <Route path="/fresh-produce" element={<FreshFruitsVegetables />} />

        {/* Feed Additives */}
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/oil-cake" element={<OilCake />} />
        <Route path="/feed/meals" element={<Meals />} />
        <Route path="/feed/fma" element={<FMA />} />
        <Route path="/feed/other-additives" element={<OtherAdditives />} />

        {/* Coffee & Tea - FIXED ROUTES */}
        <Route path="/coffee-tea" element={<Coffee/>} />
        <Route path="/coffee-tea/black-tea" element={<BlackTea />} />
        <Route path="/coffee-tea/green-tea" element={<GreenTea />} />
        <Route path="/coffee-tea/robusta-coffee" element={<RobustaCoffee />} />
        <Route path="/coffee-tea/arabica-coffee" element={<ArabicaCoffee />} />
      </Routes>
      <Footer />
    </div>
  );
}