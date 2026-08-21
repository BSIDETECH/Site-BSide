import RestaurantTemplate from '../templates/RestaurantTemplate';
import { burgeloData } from '../data/burgeloData';

export default function BurgeloMockup() {
  return <RestaurantTemplate data={burgeloData} />;
}
