import {OverlayModule} from '@angular/cdk/overlay';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgDocRootModule} from '@ng-doc/app/components/root';
import {NgDocNumberControlModule, NgDocStringControlModule} from '@ng-doc/app/type-controls';

@NgModule({
	imports: [OverlayModule, NgDocStringControlModule, NgDocNumberControlModule],
	exports: [NgDocRootModule],
})
export class NgDocModule {
	static forRoot(): ModuleWithProviders<NgDocModule> {
		return {
			ngModule: NgDocModule,
		};
	}
}
