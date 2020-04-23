import Component from '@glimmer/component'
import computed from '@ember/object'

export default class DetailedComponent extends Component {
  //passed attribute
  rental: null,
  weather: null,

  //properties
  lat: computed.reads('rental.location.lat'),
  lng: computed.reads('rental.location.lng'),

  async getWeather() {
    const response = await fetch(`/current?lat=${this.lat},lng=${this.lng},NC&key=a65c0ccaf11d41e8b03021e03e85921a`);
    const weather = await response.json();

    this.set('weather', weather);
  };

  didInsertElement() {
    this._super(...arguments)
    this.getWeather()
  }

}