import {
  Pipe,
  PipeTransform } from '@angular/core';

import * as _ from 'lodash';

/**
 * Declares a pipe to transform the first character of a string to a capital character
 */
@Pipe({
    'name': 'capitalcase' })
export class CapitalCasePipe implements PipeTransform {
  /**
   * Implementation of the transform method from the interface PipeTransform
   * @param {string} value
   * @returns string with a capitalized character
   */
  public transform(value: string): string {
      return _.capitalize(value);
  }
}
