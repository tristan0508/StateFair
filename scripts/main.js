import {TicketBooth} from './TicketBooth.js';
import {RideTicketHolders} from './rides/RideTicketHolders.js';
import { FoodTicketHolders } from './food/FoodTicketHolder.js';
import {gamesTicketHolders} from './games/GameTicketHolder.js';
import {slideShowTicketHolders} from './slideshows/SlideShowTicketHolder.js';
import {fullPackageHolders} from "./FullPackage/FullPackageHolder.js"

TicketBooth();
RideTicketHolders();
FoodTicketHolders();
gamesTicketHolders();
slideShowTicketHolders();
fullPackageHolders();