import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {

  transform(minutes: number, format = 'long', includeDays = true): any {
    let formatted = '';
    // set minutes to seconds
    let seconds = Math.abs(minutes) * 60;

    // calculate whole days
    let days = 0;
    if (includeDays && seconds >= 86400 ) {
      days = Math.floor(seconds / 86400);
      seconds -= days * 86400;
      formatted = `${days} days `;
    }

    // calculate whole hours
    if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600) % 24;
      seconds -= hours * 3600;
      formatted += `${hours} hours `;
    }

    // calculate whole minutes
    if (seconds >= 60) {
      const min = Math.floor(seconds / 60) % 60;
      formatted += `${min} minutes`;
    }

    if ('short' === format) {
      formatted = formatted.replace(' days', 'd');
      formatted = formatted.replace(' hours', 'h');
      formatted = formatted.replace(' minutes', 'm');
    }

    return formatted;
  }

}
