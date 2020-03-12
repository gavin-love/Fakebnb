import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class RentalCardImageComponent extends Component {
    @tracked 
    isLarge = false

    @action 
    toggleImageSize() {
        this.isLarge = !this.isLarge
    }
}
