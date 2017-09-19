import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalCasePipe } from './capital-case/capital-case.pipe';
import { TimeSpanPipe } from './time-span/time-span.pipe';
import { MediatorService } from './mediator/mediator.service';
import { SessionService } from './session/session.service';
import { CacheService } from './cache/cache.service';
import { TransferService } from './transfer/transfer.service';

/**
 * Utility module provides comprehensive components for general use.
 *
 * @export
 * @class UtilitiesModule
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalCasePipe,
    TimeSpanPipe
  ],
  exports: [
    CapitalCasePipe,
    TimeSpanPipe
  ]
})
export class ProsimUtilitiesModule {

  /**
   * Should be called in root module
   *
   * @static
   * @returns {ModuleWithProviders}
   * @memberof UtilitiesModule
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProsimUtilitiesModule,
      providers: [
        CacheService,
        SessionService,
        TransferService,

        // Only for root!
        MediatorService
      ]
    };
  }

  /**
   * For child initialization.
   *
   * @static
   * @returns {ModuleWithProviders}
   * @memberof UtilitiesModule
   */
  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ProsimUtilitiesModule,
      providers: [
        CacheService,
        SessionService,
        TransferService
      ]
    };
  }
}
