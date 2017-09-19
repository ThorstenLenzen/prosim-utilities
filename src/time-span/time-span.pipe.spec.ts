import { TimeSpanPipe } from './time-span.pipe';
import { TimeSpan } from './time-span';

describe('TimeSpanPipe', () => {
  let pipe: TimeSpanPipe;
  const timespan: TimeSpan = new TimeSpan();
  timespan.hours = 36;
  timespan.minutes = 14;
  timespan.seconds = 8;
  const emptyTimespan: TimeSpan = new TimeSpan();

  beforeEach(() => {
    pipe = new TimeSpanPipe();
  });

  it('should transform timespan into string hh:mm:ss', () => {
        expect(pipe.transform(timespan)).toBe('36:14:08');
    });
   it('should transform empty timespan into string 00:00:00', () => {
        expect(pipe.transform(emptyTimespan)).toBe('00:00:00');
    });

});
