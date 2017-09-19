/**
 * .Net like TimeSpan class in typescript
 */
export class TimeSpan {

    /**
     * The seconds within the TimeSpan.
     *
     * @private
     * @type {number}
     * @memberof TimeSpan
     */
    private secondsBackingStore: number;

    /**
     * The minutes within the TimeSpan.
     *
     * @private
     * @type {number}
     * @memberof TimeSpan
     */
    private minutesBackingStore: number;

    /**
     * The hours within the TimeSpan.
     *
     * @private
     * @type {number}
     * @memberof TimeSpan
     */
    private hoursBackingStore: number;

    constructor() {
        this.secondsBackingStore = 0;
        this.minutesBackingStore = 0;
        this.hoursBackingStore = 0;
    }


    get hours(): number {
        return this.hoursBackingStore;
    }
    set hours(value: number) {
        if (isNaN(value)) {
            value = 0;
        }
        this.hoursBackingStore = value;
    }

    get minutes(): number {
        return this.minutesBackingStore;
    }
    set minutes(value: number) {
        if (isNaN(value)) {
            value = 0;
        }
        this.minutesBackingStore = value;
    }

    get seconds(): number {
        return this.secondsBackingStore;
    }
    set seconds(value: number) {
        if (isNaN(value)) {
            value = 0;
        }
        this.secondsBackingStore = value;
    }


}
