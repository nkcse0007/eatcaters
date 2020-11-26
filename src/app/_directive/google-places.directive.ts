import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
declare const google: any;

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  getFormattedAddress(place) {

    const locationObj: any = {};
    // tslint:disable-next-line: forin
    for (const i in place.address_components) {
      const item = place.address_components[i];

      if (item.types.indexOf('locality') > -1) {
        locationObj.locality = item.long_name;
      } else if (item.types.indexOf('sublocality_level_1') > -1) {
        locationObj.sub_locality = item.long_name;
      } else if (item.types.indexOf('administrative_area_level_1') > -1) {
        locationObj.admin_area_l1 = item.short_name;
      } else if (item.types.indexOf('street_number') > -1) {
        locationObj.street_number = item.short_name;
      } else if (item.types.indexOf('route') > -1) {
        locationObj.route = item.long_name;
      } else if (item.types.indexOf('country') > -1) {
        locationObj.country = item.long_name;
      } else if (item.types.indexOf('postal_code') > -1) {
        locationObj.postal_code = item.short_name;
      }
    }
    locationObj.formattedAddress = place.formatted_address;
    locationObj.geo = [place.geometry.location.lng(), place.geometry.location.lat()];
    return locationObj;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
    });
  }
}
