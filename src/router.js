import React from "react";
import { Switch, Route } from "react-router-dom";

import MensShoes from './Components/MensShoes/mensshoes.js'
import Vinyl from './Components/Vinyl/vinyl.js'
import Socks from './Components/Socks/socks.js'
import Patches from './Components/Patches/patches.js'
import FeaturedItem from './Components/Featured Item/featured-item.js'
import FeaturedItem2 from './Components/Featured Item/featured-item2.js'
import FeaturedItem3 from './Components/Featured Item/featured-item3.js'
import Posters from './Components/Posters/posters.js'

export default (
    <Switch>
    <Route path="/" exact component={MensShoes}/>
    <Route path="/mens-boots" component={Vinyl}/>
    <Route path="/womens-shoes" component={Socks}/>
    <Route path="/womens-boots" component={Patches}/>
    <Route path="/featured-item" component={FeaturedItem}/>
    <Route path="/featured-item-2" component={FeaturedItem2}/>
    <Route path="/featured-item-3" component={FeaturedItem3}/>
    <Route path="/womens-heels" component={Posters}/>
    </Switch>
)