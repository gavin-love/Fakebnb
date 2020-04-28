export default function() {  
  this.get('api/rentals/:id', function({rentals}, request) {
    return rentals.find(request.params.id)
  })
  this.get('api/rentals', 'rentals')
}
