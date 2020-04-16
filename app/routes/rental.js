import Route from '@ember/routing/route';
import RSVP from 'rsvp';
// import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  // @service store;

  async model(params) {
    return RSVP.hash({
      rental: this.store.find('rental', params.rental_id)
    })
  }
}
