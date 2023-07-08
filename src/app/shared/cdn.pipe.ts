import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CDN'
})
export class CdnPipe implements PipeTransform {

  private readonly cdnUrl: string = 'https://storage.googleapis.com/resources.mariodeaconescu.com/';
  transform(url: string): string {
    return this.cdnUrl + url;
  }

}
