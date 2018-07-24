import { WidgetRoutingModule } from './widget-routing.module';

describe('WidgetRoutingModule', () => {
  let widgetRoutingModule: WidgetRoutingModule;

  beforeEach(() => {
    widgetRoutingModule = new WidgetRoutingModule();
  });

  it('should create an instance', () => {
    expect(widgetRoutingModule).toBeTruthy();
  });
});
