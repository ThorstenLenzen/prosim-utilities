import { TimeSpan } from './time-span';

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Declares a pipe to transform the TimeSpan to string with "hh:mm:ss" format.
 *
 * @export
 * @class TimeSpanPipe
 * @implements {PipeTransform}
 */
@Pipe({name: 'timeSpan'})
export class TimeSpanPipe implements PipeTransform {

/**
 * this transforms a TimeSpan into a string with the format:
 * @param timespan TimeSpan that should be formatted
 * @return formatted string
 */
    transform(timespan: TimeSpan): string {
        const hours: string = this.addNulls(timespan.hours);
        const minutes: string = this.addNulls(timespan.minutes);
        const seconds: string = this.addNulls(timespan.seconds);
        const resultString: string = hours + ':' + minutes + ':' + seconds;
        return resultString;
    }

    private addNulls(time: number): string {
        let returnTimeString: string;

        if (time < 10) {
            returnTimeString = '0' + time.toString();
        } else {
            returnTimeString = time.toString();
        }

        return returnTimeString;
    }
}
